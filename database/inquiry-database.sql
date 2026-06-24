-- ARGIOPE Jindaquan inquiry database draft
-- Purpose: store website RFQ submissions before email delivery is fully available.
-- This file is not connected to the website yet.

create extension if not exists pgcrypto;

do $$ begin
  create type inquiry_status as enum (
    'new',
    'reviewed',
    'replied',
    'quoted',
    'sample',
    'negotiating',
    'won',
    'lost',
    'spam'
  );
exception
  when duplicate_object then null;
end $$;

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  status inquiry_status not null default 'new',
  priority smallint not null default 3 check (priority between 1 and 5),

  customer_name text not null,
  customer_email text not null,
  company_name text not null,
  country_region text not null,
  product_requirement text not null,
  message text not null,

  phone text,
  whatsapp text,
  website text,
  source text not null default 'website',
  language text not null default 'en',

  assigned_to text,
  last_contacted_at timestamptz,
  next_follow_up_at timestamptz,
  notes text,

  email_sent boolean not null default false,
  email_sent_at timestamptz,
  email_error text,

  user_agent text,
  page_url text,
  ip_hash text
);

create table if not exists inquiry_events (
  id uuid primary key default gen_random_uuid(),
  inquiry_id uuid not null references inquiries(id) on delete cascade,
  created_at timestamptz not null default now(),
  event_type text not null,
  event_note text,
  created_by text
);

create index if not exists inquiries_created_at_idx on inquiries(created_at desc);
create index if not exists inquiries_status_idx on inquiries(status);
create index if not exists inquiries_email_idx on inquiries(lower(customer_email));
create index if not exists inquiries_company_idx on inquiries(lower(company_name));
create index if not exists inquiries_next_follow_up_idx on inquiries(next_follow_up_at)
  where next_follow_up_at is not null;

create or replace function set_inquiries_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists inquiries_set_updated_at on inquiries;
create trigger inquiries_set_updated_at
before update on inquiries
for each row
execute function set_inquiries_updated_at();

-- Optional Supabase security starting point:
-- Keep row level security on. Add real staff login policies later.
alter table inquiries enable row level security;
alter table inquiry_events enable row level security;

