# Inquiry Database Draft

This folder prepares the database layer for website RFQ storage. It is not wired into the live website yet.

Recommended provider: Supabase Postgres.

## What It Stores

- Customer name, email, company, country or region
- Product requirement and message
- Source page and language
- Inquiry status and priority
- Follow-up notes and next follow-up date
- Email delivery result, so failed mail does not lose the inquiry
- Event history for replies, quotes, samples, and status changes

## Status Flow

- `new`: just submitted
- `reviewed`: read by staff
- `replied`: first response sent
- `quoted`: quotation sent
- `sample`: sample discussion or sample sent
- `negotiating`: active commercial discussion
- `won`: converted
- `lost`: not converted
- `spam`: invalid inquiry

## Setup Later

1. Create a Supabase project.
2. Open Supabase SQL Editor.
3. Run `database/inquiry-database.sql`.
4. Add website environment variables for Supabase only when we are ready to connect the form.
5. Build a small admin page after login is decided.

## Local Preview

`inquiry-preview.html` is a static Chinese-only preview of the future internal inquiry CRM. It includes inquiry list columns, contact links, customer detail, follow-up notes, export actions, and Codex summary placeholders.

The preview is design-only. It does not read real customer data, does not save data, and does not affect the public website.

## Important

This database draft is intentionally separate from the current website form. The current form still uses the existing email API only.
