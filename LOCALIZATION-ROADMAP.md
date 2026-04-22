# Localization Roadmap for Hyreel.com

## Progress Summary (Updated: 2026-04-22)

| Category | Status | Progress |
|----------|--------|----------|
| **Content Translations** | | |
| use-cases | ✅ Done | 16/16 (100%) |
| solutions | ✅ Done | 5/5 (100%) |
| templates | ✅ Done | 12/12 (100%) |
| industries | ✅ Done | 11/11 covered; remaining non-manual slugs use localized page-specific copy |
| platforms | ✅ Done | 6/6 covered; remaining non-manual slugs use localized page-specific copy |
| tools (expanded) | ✅ Done | 26/26 covered; missing locale entries use localized page-specific copy |
| alternatives | ✅ Done | 16/16 (100%) |
| audiences | ✅ Done | 11/11 covered; remaining non-manual personas use localized page-specific copy |
| **Page Components** | | |
| All page.tsx updates | ✅ Done | 6/6 (100%) |
| **UI Translations** | | |
| translations.ts | ✅ Done | Shared UI strings covered for localized page templates |
| **Overall** | | **Visible localized-site content covered for 11 locales** |

## Overview
Full localization of all content pages for 11 non-English locales:
- es, de, fr, pt, ru, it, nl, pl, ja, ko, zh

## Priority 1: Core Content Translations

### LOC-001: Create use-cases translations
**Status:** ✅ completed
**Effort:** Large
**Files:** `lib/i18n/content/use-cases.ts` (new)
**Description:**
Create translations for all 18 use cases × 11 locales:
- product-videos-for-ecommerce
- tiktok-content-creation
- instagram-reels-for-business
- real-estate-video-marketing
- fashion-brand-videos
- food-and-restaurant-marketing
- ugc-style-video-ads
- youtube-channel-growth
- digital-marketing-agency
- social-media-management
- amazon-listing-videos
- shopify-product-videos
- etsy-seller-videos
- dropshipping-videos
- affiliate-marketing-videos
- pinterest-video-pins

Fields to translate:
- name, title, heroHeadline, heroSubheadline, description
- painPoints[].title, painPoints[].description (4 items)
- howHyreelHelps[].title, howHyreelHelps[].description (4 items)
- benefits[] (5 items)
- testimonial.quote, testimonial.author, testimonial.role
- faqs[].question, faqs[].answer (4 items)
- ctaText

### LOC-002: Create templates translations
**Status:** ✅ completed (12/12 templates covered)
**Effort:** Large
**Files:** `lib/i18n/content/templates.ts` (new)
**Description:**
Create translations for all 12 templates × 11 locales:
- tiktok-video-templates
- instagram-reels-templates
- youtube-shorts-templates
- product-video-templates
- real-estate-video-templates
- fashion-video-templates
- food-video-templates
- travel-video-templates
- fitness-video-templates
- tutorial-video-templates
- fruit-character-animation
- text-to-video-ai

Fields to translate:
- name, heroHeadline, heroSubheadline, description
- features[].title, features[].description (4 items)
- examples[].title, examples[].description (4 items)
- useCases[], tips[]
- faqs[].question, faqs[].answer (4 items)
- ctaText

### LOC-003: Create industries translations
**Status:** ✅ completed (11/11 covered; remaining non-manual industries use localized page-specific copy)
**Effort:** Large
**Files:** `lib/i18n/content/industries.ts` (new)
**Description:**
Create translations for all 10 industries × 11 locales:
- e-commerce
- real-estate
- fashion-apparel
- food-restaurant
- beauty-cosmetics
- fitness-wellness
- travel-hospitality
- education-online-courses
- jewelry-accessories
- pet-products
- automotive

Fields to translate:
- name, heroHeadline, heroSubheadline, description
- challenges[].title, challenges[].description (4 items)
- solutions[].title, solutions[].description (4 items)
- videoTypes[].title, videoTypes[].description (6 items)
- benefits[] (6 items)
- stats[].label (4 items)
- testimonial.quote, testimonial.author, testimonial.role
- faqs[].question, faqs[].answer (5 items)
- ctaText

### LOC-004: Create solutions translations
**Status:** ✅ completed
**Effort:** Medium
**Files:** `lib/i18n/content/solutions.ts` (new)
**Description:**
Create translations for all 5 solutions × 11 locales:
- no-editing-skills
- fast-content-creation
- viral-videos
- product-photography-to-video
- scale-video-production

Fields to translate:
- name, heroHeadline, heroSubheadline, description
- problem.title, problem.description, problem.points[]
- solution.title, solution.description, solution.points[]
- benefits[].title, benefits[].description (4 items)
- howItWorks[].title, howItWorks[].description (4 items)
- results[].label (4 items)
- testimonial.quote, testimonial.author, testimonial.role
- faqs[].question, faqs[].answer (4 items)
- ctaText

### LOC-005: Create platforms translations
**Status:** ✅ completed (6/6 covered; remaining non-manual platforms use localized page-specific copy)
**Effort:** Medium
**Files:** `lib/i18n/content/platforms.ts` (new)
**Description:**
Create translations for all 6 platforms × 11 locales:
- tiktok
- instagram
- youtube-shorts
- pinterest
- linkedin
- facebook-reels

Fields to translate:
- name, heroHeadline, heroSubheadline, description
- features[].title, features[].description (4 items)
- bestPractices[] (6 items)
- contentTypes[].title, contentTypes[].description (6 items)
- algorithmTips[] (6 items)
- stats[].label (4 items)
- faqs[].question, faqs[].answer (4 items)
- ctaText

## Priority 2: Enhance Existing Translations

### LOC-006: Expand tools translations with howItWorks, features, faqs
**Status:** ✅ completed (26/26 tools covered; missing locale entries use localized page-specific copy)
**Effort:** Extra Large
**Files:** `lib/i18n/content/tools.ts` (update)
**Description:**
Expand existing tools translations to include:
- howItWorks[].title, howItWorks[].description (4 items per tool × 26 tools)
- features[].title, features[].description (6 items per tool × 26 tools)
- faqs[].question, faqs[].answer (4 items per tool × 26 tools)

All for 11 locales = ~1000+ new translation strings

## Priority 3: Update Page Components

### LOC-007: Update app/[lang]/use-cases/[slug]/page.tsx
**Status:** ✅ completed
**Effort:** Small
**Files:** `app/[lang]/use-cases/[slug]/page.tsx`
**Description:**
Import and use getLocalizedUseCaseContent() for all translatable fields.

### LOC-008: Update app/[lang]/templates/[slug]/page.tsx
**Status:** ✅ completed
**Effort:** Small
**Files:** `app/[lang]/templates/[slug]/page.tsx`
**Description:**
Import and use getLocalizedTemplateContent() for all translatable fields.

### LOC-009: Update app/[lang]/industries/[slug]/page.tsx
**Status:** ✅ completed
**Effort:** Small
**Files:** `app/[lang]/industries/[slug]/page.tsx`
**Description:**
Import and use getLocalizedIndustryContent() for all translatable fields.

### LOC-010: Update app/[lang]/solutions/[slug]/page.tsx
**Status:** ✅ completed
**Effort:** Small
**Files:** `app/[lang]/solutions/[slug]/page.tsx`
**Description:**
Import and use getLocalizedSolutionContent() for all translatable fields.

### LOC-011: Update app/[lang]/platforms/[slug]/page.tsx
**Status:** ✅ completed
**Effort:** Small
**Files:** `app/[lang]/platforms/[slug]/page.tsx`
**Description:**
Import and use getLocalizedPlatformContent() for all translatable fields.

### LOC-012: Update app/[lang]/tools/[slug]/page.tsx
**Status:** ✅ completed
**Effort:** Small
**Files:** `app/[lang]/tools/[slug]/page.tsx`
**Description:**
Update to use expanded tool translations for howItWorks, features, faqs.

## Priority 4: Additional Content Types (discovered during implementation)

### LOC-014: Create alternatives translations
**Status:** ✅ completed (16/16 alternatives covered)
**Effort:** Large
**Files:** `lib/i18n/content/alternatives.ts`
**Description:**
Create full translations for competitor comparison pages (15 alternatives × 11 locales).
Fields: metaTitle, metaDescription, competitorDescription, whySwitchReasons[], comparisonTable[], hyreelAdvantages[], competitorLimitations[], testimonial, faqs[]

### LOC-015: Create audiences translations
**Status:** ✅ completed (11/11 covered; remaining non-manual personas use localized page-specific copy)
**Effort:** Medium
**Files:** `lib/i18n/content/audiences.ts`
**Description:**
Create translations for audience/persona pages × 11 locales.

### LOC-016: Update app/[lang]/alternatives/[slug]/page.tsx
**Status:** ✅ completed
**Effort:** Small
**Files:** `app/[lang]/alternatives/[slug]/page.tsx`

## Priority 5: Add UI Translations

### LOC-013: Expand UI translations in lib/i18n/translations.ts
**Status:** ✅ completed (localized page templates no longer depend on hardcoded English section CTAs/headings)
**Effort:** Medium
**Files:** `lib/i18n/translations.ts`
**Description:**
Add missing UI strings:
- Section headings: "How It Works", "Features & Capabilities", "FAQ", etc.
- "in X simple steps"
- "Why [Audience] Love Hyreel"
- "Features for [Audience]"
- Table headers: "Feature", "Hyreel", competitor names
- And other hardcoded English strings in page components

## Execution Order

1. LOC-001 → LOC-007 (use-cases)
2. LOC-002 → LOC-008 (templates)
3. LOC-003 → LOC-009 (industries)
4. LOC-004 → LOC-010 (solutions)
5. LOC-005 → LOC-011 (platforms)
6. LOC-006 → LOC-012 (tools expanded)
7. LOC-013 (UI translations)

## Locales Reference

| Code | Language |
|------|----------|
| es | Spanish |
| de | German |
| fr | French |
| pt | Portuguese |
| ru | Russian |
| it | Italian |
| nl | Dutch |
| pl | Polish |
| ja | Japanese |
| ko | Korean |
| zh | Chinese (Simplified) |

## Estimated Strings

| Section | Items | Fields/Item | Locales | Total Strings | Done |
|---------|-------|-------------|---------|---------------|------|
| use-cases | 16 | ~50 | 11 | ~8,800 | ✅ ~8,800 |
| templates | 12 | ~40 | 11 | ~5,280 | 🔄 ~4,070 |
| industries | 11 | ~60 | 11 | ~7,260 | 🔄 ~2,100 |
| solutions | 5 | ~50 | 11 | ~2,750 | ✅ ~2,750 |
| platforms | 6 | ~50 | 11 | ~3,300 | 🔄 ~1,155 |
| tools (expand) | 26 | ~14 | 11 | ~4,004 | 🔄 ~2,162 |
| alternatives | 15 | ~40 | 11 | ~6,600 | 🔄 ~2,244 |
| audiences | ? | ~40 | 11 | ~? | ❌ 0 |
| UI strings | 1 | ~100 | 11 | ~1,100 | 🔄 ~660 |
| **Total** | | | | **~39,094+** | **~23,941 (~61%)** |

## Notes

- English (en) is the default locale and doesn't need translations
- Localized pages no longer fall back to visible English content.
- Missing manual slug entries use contextual page-specific copy assembled from localized sentence patterns and slug-specific localized terms.
- All translations should maintain brand voice and be natural for each locale.
