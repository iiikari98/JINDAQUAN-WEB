# Product Content Framework

This file is the working rulebook for gradually expanding ARGIOPE / Jindaquan product content without mixing source material, draft notes and public website copy.

## Core Principle

The website should not copy catalog or TDS text directly. Each product page should be rewritten into buyer-facing English based on verified source materials.

Source files can include:

- Product catalog PDFs
- Individual TDS / SDS PDFs
- Product photos or factory photos
- Sales notes and customer questions
- Test reports, dosage notes or application examples

## Product Data Source

All public product pages and search results are generated from:

`app/lib/product-catalog.ts`

Each product has one stable `slug`. Do not rename a slug casually after a page has been published, because the URL depends on it.

Product model / grade references are generated from:

`app/lib/product-grades.ts`

This file is the single source of truth for A-series model lists used by product detail pages, `/search`, and the TDS request selector. Keep star-marked models such as `A-656*` exactly as provided until the product team confirms what the star means.

Required public fields:

- `slug`: URL identifier, for example `plastic-flame-retardant`
- `name`: public English product name
- `meta`: short tag line for cards
- `summary`: one-sentence buyer-facing value
- `image`: product or category image under `/public/assets`
- `category`: controlled product grouping
- `description`: page hero and overview copy
- `applications`: typical use scenarios
- `benefits`: performance benefits
- `processing`: selection and trial notes
- `keywords`: search-only terms

Optional management fields:

- `contentStatus`: `draft`, `catalog-reviewed`, `tds-reviewed`, or `final`
- `sourceRefs`: source files used to write this page
- `documents.tds`: future public TDS PDF path
- `documents.sds`: future public SDS PDF path

## Homepage Rules

The homepage should only show core products, not every product.

Homepage products are controlled by:

`homepageProductSlugs`

When adding a new product:

1. Add it to `productCatalog`.
2. Confirm the product detail page works.
3. Confirm it appears in `/search`.
4. Add its slug to `homepageProductSlugs` only if it is a main product worth featuring on the homepage.

## Search Page Rules

The `/search` page is the full product index. It can include:

- Main products
- Extended product lines
- R&D products
- Custom modification pages
- Products that do not deserve homepage space yet

Do not hide useful products from search just because the homepage is full.

## Category Rules

Use the existing `productCategoryOrder` list before creating a new category.

Create a new category only when the product cannot reasonably fit into an existing performance target.

Preferred category style:

- Performance target first
- Clear buyer language
- No internal shorthand

Examples:

- `Flame retardant modification`
- `Optical and lighting plastics`
- `Surface appearance modification`
- `Processing and flow control`

## TDS / SDS Rules

The TDS selector reads available product families and models from:

`app/lib/product-grades.ts`

Do not maintain a separate duplicate model list inside the TDS page.

Future TDS PDFs should be stored under:

`public/tds`

Recommended file naming:

`product-slug-tds.pdf`

Example:

`public/tds/plastic-flame-retardant-tds.pdf`

After adding a TDS file, update the matching product:

```ts
documents: {
  tds: "/tds/plastic-flame-retardant-tds.pdf",
}
```

The public page can then show a direct TDS link or use the inquiry-gated TDS flow.

## Image Rules

Product images should be stored under:

`public/assets`

Use clear descriptive names:

- `plastic-flame-retardant-burn-test.png`
- `light-diffusion-agent-sample.png`
- `factory-warehouse-storage.webp`

Avoid file names like:

- `image1.png`
- `new-final-final.png`
- Chinese-only names

## Content Status Workflow

Use `contentStatus` as an internal confidence marker:

- `draft`: rough page created from partial notes
- `catalog-reviewed`: based on catalog information
- `tds-reviewed`: checked against a specific TDS
- `final`: ready for public use after product/sales confirmation

This lets the site grow safely: a product can exist in search while still being improved later.

## Before Publishing Checklist

Before syncing to GitHub or deploying:

1. Run the build.
2. Check `/search`.
3. Open at least one new product page.
4. Confirm there is no visible Chinese or broken encoding on public English pages.
5. Confirm the homepage featured list did not change accidentally.
6. Confirm product images are real and not missing.
