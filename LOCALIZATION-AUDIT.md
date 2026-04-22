# Localization Audit

Date: 2026-04-22

## Scope

- Locales audited: `es`, `de`, `fr`, `pt`, `ru`, `it`, `nl`, `pl`, `ja`, `ko`, `zh`.
- Route surface: localized home, static pages, pricing, blog, tools, alternatives, audiences, industries, platforms, solutions, templates, use cases, legal pages, metadata, schema, 404.
- Build surface: production build output and runtime HTML responses from `next start`.

## Result

Visible localized-page content is covered for all 11 non-English locales. The previous English fallback leaks found during the audit were fixed:

- localized metadata descriptions for contact, privacy, about, audiences index, and use-cases index
- global English Open Graph/Twitter fallback metadata
- English organization schema description/contact type
- English RSS link title
- English OG image alt text
- English default FAQ contact CTA on localized alternative detail pages
- English fallback stats/testimonial roles in localized industry/platform/audience pages
- English 404 page copy and links on localized routes
- duplicated `| Hyreel | Hyreel` title output
- incorrect runtime `<html lang="en">` on localized routes

## Verification

Passed:

- `npx tsc --noEmit`
- `npm run build`
- Runtime checks via `next start` on port `3027`

Runtime `html lang` checks:

```text
es <html lang="es"
de <html lang="de"
fr <html lang="fr"
pt <html lang="pt"
ru <html lang="ru"
it <html lang="it"
nl <html lang="nl"
pl <html lang="pl"
ja <html lang="ja"
ko <html lang="ko"
zh <html lang="zh"
```

Targeted English leak scan passed on representative routes across all 11 locales for prior leak strings:

- `Hyreel Blog RSS Feed`
- `AI Video Generation App`
- `Create viral videos in minutes`
- `Transform photos into stunning videos`
- `Still have questions?`
- `Contact Support`
- `Page Not Found`
- `Go to Homepage`
- `Oops!`
- English fallback stat/testimonial strings
- `customer support`

## Tradeoff

To make `<html lang>` correct on server-rendered localized pages, the root layout now reads the locale from a middleware-provided request header. This makes app routes dynamic in the Next build output. The previous SSG output always emitted `<html lang="en">` for localized pages because the root layout did not receive the `[lang]` route param.

If preserving SSG for every localized route becomes more important than correct server-rendered `<html lang>`, the app layout structure should be refactored so localized routes can own the document root without request headers.
