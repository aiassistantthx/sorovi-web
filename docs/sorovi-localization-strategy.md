# Sorovi Website Localization Strategy
## Complete Multi-Language Implementation Plan (20 Languages)

**Last Updated:** 2025-12-15
**Project:** Sorovi Website - Localization Plan
**Scope:** Top 20 languages with content from Day 1

---

## Table of Contents

1. [Overview](#overview)
2. [Language Selection](#language-selection)
3. [URL Structure](#url-structure)
4. [File & Folder Structure](#file--folder-structure)
5. [Content Management](#content-management)
6. [Translation Workflow](#translation-workflow)
7. [Technical Implementation](#technical-implementation)
8. [SEO Implementation](#seo-implementation)
9. [UI/UX Adaptations](#uiux-adaptations)
10. [Performance Optimization](#performance-optimization)
11. [Complete Site Map](#complete-site-map)
12. [Implementation Timeline](#implementation-timeline)
13. [Budget & Resources](#budget--resources)

---

## Overview

### Key Decisions

**English at Root Level** ✅
- English pages: `sorovi.ai/tools/...`
- Other languages: `sorovi.ai/[locale]/...`
- Cleaner URLs for primary market
- Industry standard approach

**Total Scale**
- **Base Pages:** 486 unique pages
- **Languages:** 20 languages
- **Total Pages:** 9,720 pages (486 × 20)
- **Timeline:** 16 weeks
- **Budget:** $4,558/year (DIY) or $33,058 (with developer)

---

## Language Selection

### Top 20 Languages by Priority

| Priority | Language | Code | Native Speakers | Internet Users | Key Markets |
|----------|----------|------|----------------|----------------|-------------|
| 1 | **English** | en | 1.5B | 1.5B | US, UK, CA, AU, NZ, IE |
| 2 | Spanish | es | 559M | 363M | Spain, Mexico, LatAm |
| 3 | Chinese (Simplified) | zh-CN | 1.1B | 888M | China, Singapore |
| 4 | Hindi | hi | 602M | 500M | India |
| 5 | Arabic | ar | 422M | 237M | Middle East, N. Africa |
| 6 | Portuguese | pt | 264M | 171M | Brazil, Portugal, Angola |
| 7 | Russian | ru | 258M | 164M | Russia, CIS countries |
| 8 | Japanese | ja | 125M | 118M | Japan |
| 9 | French | fr | 280M | 151M | France, Africa, Canada, Belgium |
| 10 | German | de | 134M | 92M | Germany, Austria, Switzerland |
| 11 | Korean | ko | 81M | 50M | South Korea |
| 12 | Italian | it | 85M | 54M | Italy, Switzerland |
| 13 | Turkish | tr | 88M | 55M | Turkey |
| 14 | Vietnamese | vi | 85M | 70M | Vietnam |
| 15 | Indonesian | id | 199M | 212M | Indonesia |
| 16 | Thai | th | 61M | 57M | Thailand |
| 17 | Polish | pl | 41M | 30M | Poland |
| 18 | Dutch | nl | 25M | 22M | Netherlands, Belgium |
| 19 | Ukrainian | uk | 33M | 23M | Ukraine |
| 20 | Swedish | sv | 13M | 9M | Sweden |

**Coverage:** 95%+ of global internet users

### Special Considerations

#### RTL Languages
- **Arabic (ar):** Full RTL UI support required
- Mirror layouts, flip navigation, right-align text

#### CJK Languages
- **Chinese (zh-CN):** Requires Noto Sans SC font
- **Japanese (ja):** Requires Noto Sans JP font
- **Korean (ko):** Requires Noto Sans KR font
- Handle longer character strings in UI

#### Script Variations
- **Chinese:** Simplified only for v1 (Traditional zh-TW for v2)
- **Portuguese:** Brazil variant (pt-BR)
- **Spanish:** Neutral Spanish (works for all regions)

---

## URL Structure

### Complete URL Pattern

**Format:**
```
English:  sorovi.ai/[page-type]/[slug]
Others:   sorovi.ai/[locale]/[page-type]/[slug]
```

### Homepage URLs
```
✅ ENGLISH (Root):
sorovi.ai/

📁 OTHER LANGUAGES (Prefixed):
sorovi.ai/es/                 (Spanish)
sorovi.ai/zh-CN/              (Chinese Simplified)
sorovi.ai/hi/                 (Hindi)
sorovi.ai/ar/                 (Arabic)
sorovi.ai/pt/                 (Portuguese)
sorovi.ai/ru/                 (Russian)
sorovi.ai/ja/                 (Japanese)
sorovi.ai/fr/                 (French)
sorovi.ai/de/                 (German)
sorovi.ai/ko/                 (Korean)
sorovi.ai/it/                 (Italian)
sorovi.ai/tr/                 (Turkish)
sorovi.ai/vi/                 (Vietnamese)
sorovi.ai/id/                 (Indonesian)
sorovi.ai/th/                 (Thai)
sorovi.ai/pl/                 (Polish)
sorovi.ai/nl/                 (Dutch)
sorovi.ai/uk/                 (Ukrainian)
sorovi.ai/sv/                 (Swedish)
```

### Tool Page URLs (Example)

**AI TikTok Video Generator:**
```
✅ ENGLISH:
sorovi.ai/tools/ai-tiktok-video-generator

📁 SPANISH:
sorovi.ai/es/herramientas/generador-videos-tiktok-ia

📁 CHINESE:
sorovi.ai/zh-CN/工具/ai-tiktok视频生成器

📁 HINDI:
sorovi.ai/hi/उपकरण/ai-tiktok-video-generator

📁 ARABIC (RTL):
sorovi.ai/ar/أدوات/منشئ-فيديو-تيك-توك

📁 PORTUGUESE:
sorovi.ai/pt/ferramentas/gerador-videos-tiktok-ia

📁 RUSSIAN:
sorovi.ai/ru/инструменты/ai-tiktok-video-generator

📁 JAPANESE:
sorovi.ai/ja/ツール/ai-tiktok-video-generator

📁 FRENCH:
sorovi.ai/fr/outils/generateur-videos-tiktok-ia

📁 GERMAN:
sorovi.ai/de/werkzeuge/ai-tiktok-video-generator

📁 KOREAN:
sorovi.ai/ko/도구/ai-tiktok-video-generator

📁 ITALIAN:
sorovi.ai/it/strumenti/generatore-video-tiktok-ia

📁 TURKISH:
sorovi.ai/tr/araçlar/ai-tiktok-video-generator

📁 VIETNAMESE:
sorovi.ai/vi/công-cụ/ai-tiktok-video-generator

📁 INDONESIAN:
sorovi.ai/id/alat/ai-tiktok-video-generator

📁 THAI:
sorovi.ai/th/เครื่องมือ/ai-tiktok-video-generator

📁 POLISH:
sorovi.ai/pl/narzędzia/ai-tiktok-video-generator

📁 DUTCH:
sorovi.ai/nl/tools/ai-tiktok-video-generator

📁 UKRAINIAN:
sorovi.ai/uk/інструменти/ai-tiktok-video-generator

📁 SWEDISH:
sorovi.ai/sv/verktyg/ai-tiktok-video-generator
```

### URL Translation Rules

**Categories Translated:**
| English | Spanish | French | German | Japanese | Arabic |
|---------|---------|--------|--------|----------|--------|
| tools | herramientas | outils | werkzeuge | ツール | أدوات |
| use-cases | casos-de-uso | cas-d-usage | anwendungsfälle | 使用例 | حالات-الاستخدام |
| industries | industrias | industries | branchen | 業界 | الصناعات |
| templates | plantillas | modèles | vorlagen | テンプレート | القوالب |
| blog | blog | blog | blog | ブログ | مدونة |
| pricing | precios | tarifs | preise | 価格 | التسعير |
| about | acerca-de | a-propos | über-uns | 会社概要 | معلومات-عنا |

**Categories NOT Translated:**
- `vs` (comparison pages) - Universal
- Competitor names in slugs
- Brand names

---

## File & Folder Structure

### Next.js App Directory Structure

```
sorovi-website/
│
├── app/
│   │
│   ├── layout.tsx                   # Root layout (English)
│   ├── page.tsx                     # English homepage
│   ├── globals.css                  # Global styles + RTL support
│   ├── not-found.tsx
│   │
│   ├── tools/                       # ✅ English tools (root level)
│   │   ├── page.tsx                 # Tools listing
│   │   └── [slug]/
│   │       └── page.tsx             # Individual tool page
│   │
│   ├── use-cases/                   # ✅ English use cases
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── industries/                  # ✅ English industries
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── templates/                   # ✅ English templates
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── vs/                          # ✅ English comparisons
│   │   └── [competitor]/
│   │       └── page.tsx
│   │
│   ├── blog/                        # ✅ English blog
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── pricing/                     # ✅ English static pages
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   │
│   └── [locale]/                    # 📁 All other languages
│       │
│       ├── layout.tsx               # Localized layout (fonts, dir)
│       ├── page.tsx                 # Localized homepage
│       ├── not-found.tsx
│       │
│       └── [...slug]/               # Catch-all route
│           └── page.tsx             # Dynamic localized pages
│
├── components/
│   ├── LanguageSwitcher.tsx         # Language selector
│   ├── HreflangTags.tsx             # SEO hreflang tags
│   ├── Navigation.tsx               # Main nav with i18n
│   ├── Footer.tsx
│   │
│   └── templates/                   # Page templates
│       ├── ToolPageTemplate.tsx
│       ├── UseCaseTemplate.tsx
│       ├── IndustryTemplate.tsx
│       ├── TemplateTemplate.tsx
│       ├── ComparisonTemplate.tsx
│       └── BlogTemplate.tsx
│
├── lib/
│   ├── sanity/
│   │   ├── client.ts                # Sanity client config
│   │   ├── queries.ts               # GROQ queries
│   │   └── schemas/                 # Content schemas
│   │
│   ├── i18n/
│   │   ├── locales.ts               # Locale configurations
│   │   ├── routing.ts               # Route helpers
│   │   └── translations.ts          # Static UI translations
│   │
│   └── translate.ts                 # AI translation functions
│
├── dictionaries/                    # UI translation files
│   ├── en.json                      # English UI strings
│   ├── es.json                      # Spanish UI strings
│   ├── zh-CN.json                   # Chinese UI strings
│   ├── hi.json                      # Hindi UI strings
│   ├── ar.json                      # Arabic UI strings
│   ├── pt.json                      # Portuguese UI strings
│   ├── ru.json                      # Russian UI strings
│   ├── ja.json                      # Japanese UI strings
│   ├── fr.json                      # French UI strings
│   ├── de.json                      # German UI strings
│   ├── ko.json                      # Korean UI strings
│   ├── it.json                      # Italian UI strings
│   ├── tr.json                      # Turkish UI strings
│   ├── vi.json                      # Vietnamese UI strings
│   ├── id.json                      # Indonesian UI strings
│   ├── th.json                      # Thai UI strings
│   ├── pl.json                      # Polish UI strings
│   ├── nl.json                      # Dutch UI strings
│   ├── uk.json                      # Ukrainian UI strings
│   └── sv.json                      # Swedish UI strings
│
├── public/
│   ├── images/                      # Shared across all languages
│   ├── videos/                      # Shared across all languages
│   └── fonts/                       # Custom fonts if needed
│
├── scripts/
│   ├── translate-content.ts         # Bulk translation script
│   ├── generate-sitemaps.ts         # Sitemap generation
│   └── validate-translations.ts     # Quality check
│
├── sanity/                          # Sanity CMS Studio
│   ├── schemas/
│   │   ├── toolPage.ts
│   │   ├── useCasePage.ts
│   │   ├── industryPage.ts
│   │   ├── templatePage.ts
│   │   ├── comparisonPage.ts
│   │   ├── blogPost.ts
│   │   └── index.ts
│   │
│   ├── sanity.config.ts             # Sanity config + i18n plugin
│   └── structure.ts                 # Studio structure
│
├── middleware.ts                    # Language detection & routing
├── next.config.js                   # Next.js config
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Content Management

### Sanity CMS Structure with i18n

#### Content Organization

```
Sanity Studio
│
├── 📄 Tool Pages (2,000 documents = 100 tools × 20 languages)
│   │
│   ├── 📝 AI TikTok Video Generator [GROUP]
│   │   ├── 🇺🇸 ai-tiktok-generator-en (Published)
│   │   ├── 🇪🇸 ai-tiktok-generator-es (Published)
│   │   ├── 🇨🇳 ai-tiktok-generator-zh-CN (Published)
│   │   ├── 🇮🇳 ai-tiktok-generator-hi (Published)
│   │   ├── 🇸🇦 ai-tiktok-generator-ar (Published)
│   │   ├── 🇧🇷 ai-tiktok-generator-pt (Published)
│   │   ├── 🇷🇺 ai-tiktok-generator-ru (Published)
│   │   ├── 🇯🇵 ai-tiktok-generator-ja (Published)
│   │   ├── 🇫🇷 ai-tiktok-generator-fr (Published)
│   │   ├── 🇩🇪 ai-tiktok-generator-de (Published)
│   │   ├── 🇰🇷 ai-tiktok-generator-ko (Published)
│   │   ├── 🇮🇹 ai-tiktok-generator-it (Published)
│   │   ├── 🇹🇷 ai-tiktok-generator-tr (Published)
│   │   ├── 🇻🇳 ai-tiktok-generator-vi (Published)
│   │   ├── 🇮🇩 ai-tiktok-generator-id (Published)
│   │   ├── 🇹🇭 ai-tiktok-generator-th (Published)
│   │   ├── 🇵🇱 ai-tiktok-generator-pl (Published)
│   │   ├── 🇳🇱 ai-tiktok-generator-nl (Published)
│   │   ├── 🇺🇦 ai-tiktok-generator-uk (Published)
│   │   └── 🇸🇪 ai-tiktok-generator-sv (Published)
│   │
│   ├── 📝 Instagram Reels Creator [GROUP]
│   │   ├── 🇺🇸 (en) ... 🇸🇪 (sv)
│   │
│   └── ... (98 more tools)
│
├── 📄 Use Case Pages (3,000 documents = 150 × 20)
│   └── ... grouped by translation set
│
├── 📄 Industry Pages (1,000 documents = 50 × 20)
│   └── ... grouped by translation set
│
├── 📄 Template Pages (2,000 documents = 100 × 20)
│   └── ... grouped by translation set
│
├── 📄 Comparison Pages (600 documents = 30 × 20)
│   └── ... grouped by translation set
│
├── 📄 Blog Posts (1,000 documents = 50 × 20)
│   └── ... grouped by translation set
│
└── 📄 Static Pages (100 documents = 5 × 20)
    └── ... grouped by translation set

📊 TOTAL: 9,700 documents in Sanity
```

#### Sanity Schema Example

```typescript
// sanity/schemas/toolPage.ts
import { defineType } from 'sanity'
import { languages } from '@/lib/i18n/locales'

export default defineType({
  name: 'toolPage',
  title: 'Tool Page',
  type: 'document',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: languages.map(lang => ({
          title: lang.name,
          value: lang.code
        }))
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'translations',
      title: 'Translations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'toolPage' }] }],
      description: 'Link to other language versions of this page'
    },
    {
      name: 'title',
      title: 'Tool Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: Rule => Rule.max(60)
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      validation: Rule => Rule.max(160)
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'headline', type: 'string', title: 'Headline' },
        { name: 'subheadline', type: 'text', title: 'Subheadline' },
        {
          name: 'mockupImage',
          type: 'image',
          title: 'Mockup Image',
          description: 'Shared across all languages'
        }
      ]
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string' },
          { name: 'description', type: 'text' },
          { name: 'icon', type: 'string' }
        ]
      }]
    },
    {
      name: 'examples',
      title: 'Example Videos',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string' },
          { name: 'thumbnail', type: 'image' },
          { name: 'videoUrl', type: 'url' },
          { name: 'category', type: 'string' }
        ]
      }]
    },
    {
      name: 'comparison',
      title: 'Comparison Table',
      type: 'object',
      fields: [
        {
          name: 'competitors',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Competitor names (not translated)'
        },
        {
          name: 'features',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'feature', type: 'string' },
              { name: 'sorovi', type: 'boolean' },
              { name: 'competitor1', type: 'boolean' },
              { name: 'competitor2', type: 'boolean' }
            ]
          }]
        }
      ]
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', type: 'string' },
          { name: 'answer', type: 'text' }
        ]
      }]
    },
    {
      name: 'relatedTools',
      title: 'Related Tools',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'toolPage' }] }]
    },
    {
      name: 'targetKeywords',
      title: 'Target Keywords',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      slug: 'slug.current'
    },
    prepare({ title, language, slug }) {
      return {
        title: `${title} (${language})`,
        subtitle: slug
      }
    }
  }
})
```

#### Sanity i18n Plugin Configuration

```typescript
// sanity/sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { documentInternationalization } from '@sanity/document-internationalization'
import schemas from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sorovi CMS',
  projectId: 'your-project-id',
  dataset: 'production',

  plugins: [
    deskTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: 'en', title: 'English' },
        { id: 'es', title: 'Spanish' },
        { id: 'zh-CN', title: 'Chinese (Simplified)' },
        { id: 'hi', title: 'Hindi' },
        { id: 'ar', title: 'Arabic' },
        { id: 'pt', title: 'Portuguese' },
        { id: 'ru', title: 'Russian' },
        { id: 'ja', title: 'Japanese' },
        { id: 'fr', title: 'French' },
        { id: 'de', title: 'German' },
        { id: 'ko', title: 'Korean' },
        { id: 'it', title: 'Italian' },
        { id: 'tr', title: 'Turkish' },
        { id: 'vi', title: 'Vietnamese' },
        { id: 'id', title: 'Indonesian' },
        { id: 'th', title: 'Thai' },
        { id: 'pl', title: 'Polish' },
        { id: 'nl', title: 'Dutch' },
        { id: 'uk', title: 'Ukrainian' },
        { id: 'sv', title: 'Swedish' },
      ],
      defaultLanguages: ['en'],
      documentTypes: [
        'toolPage',
        'useCasePage',
        'industryPage',
        'templatePage',
        'comparisonPage',
        'blogPost'
      ],
    })
  ],

  schema: {
    types: schemas,
  },
})
```

---

## Translation Workflow

### Strategy: AI + Human Review

**Phase 1: Automated Translation**
- Generate all 19 translations using AI
- Cost-effective initial launch
- Fast deployment

**Phase 2: Human Review (Priority)**
- Top 5 languages: Native speaker review
- Top 10 languages: Quality spot-check
- Remaining 10: Monitor and improve based on data

### Translation Tools

#### Option 1: OpenAI GPT-4 Turbo (Recommended)

```typescript
// lib/translate.ts
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

const languageNames = {
  'es': 'Spanish',
  'zh-CN': 'Simplified Chinese',
  'hi': 'Hindi',
  'ar': 'Arabic',
  'pt': 'Portuguese (Brazilian)',
  'ru': 'Russian',
  'ja': 'Japanese',
  'fr': 'French',
  'de': 'German',
  'ko': 'Korean',
  'it': 'Italian',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'id': 'Indonesian',
  'th': 'Thai',
  'pl': 'Polish',
  'nl': 'Dutch',
  'uk': 'Ukrainian',
  'sv': 'Swedish'
}

export async function translateContent(
  content: any,
  targetLang: string
): Promise<any> {
  const languageName = languageNames[targetLang] || targetLang

  const systemPrompt = `You are a professional translator specializing in marketing and technical content for a video creation mobile app called Sorovi.

Your task:
1. Translate the following content to ${languageName}
2. Maintain the tone: friendly, modern, tech-savvy
3. Keep brand names unchanged: "Sorovi", "TikTok", "Instagram", etc.
4. Keep technical terms in English when appropriate (AI, video, app)
5. Adapt cultural references to local context when needed
6. Ensure CTAs are compelling and natural in the target language
7. Return the same JSON structure with translated values

Important:
- Do NOT translate: URLs, image paths, video URLs, competitor names
- DO translate: all user-facing text, headings, descriptions, CTAs, FAQs
- Maintain same JSON structure and keys`

  const userPrompt = `Translate this content:\n\n${JSON.stringify(content, null, 2)}`

  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.3,
    response_format: { type: 'json_object' }
  })

  return JSON.parse(response.choices[0].message.content || '{}')
}
```

#### Translation Script

```typescript
// scripts/translate-content.ts
import { client } from '@/lib/sanity/client'
import { translateContent } from '@/lib/translate'

const LANGUAGES = [
  'es', 'zh-CN', 'hi', 'ar', 'pt', 'ru', 'ja', 'fr',
  'de', 'ko', 'it', 'tr', 'vi', 'id', 'th', 'pl',
  'nl', 'uk', 'sv'
]

async function translateDocument(docId: string, docType: string) {
  // Fetch English version
  const englishDoc = await client.fetch(`
    *[_id == $docId][0]{
      _type,
      title,
      slug,
      metaTitle,
      metaDescription,
      hero,
      features,
      examples,
      faqs,
      targetKeywords
    }
  `, { docId })

  console.log(`Translating: ${englishDoc.title}`)

  for (const lang of LANGUAGES) {
    try {
      console.log(`  → ${lang}...`)

      // Translate content
      const translated = await translateContent(englishDoc, lang)

      // Create new document
      const translatedDoc = {
        _type: docType,
        language: lang,
        title: translated.title,
        slug: {
          _type: 'slug',
          current: generateLocalizedSlug(translated.title, lang)
        },
        metaTitle: translated.metaTitle,
        metaDescription: translated.metaDescription,
        hero: translated.hero,
        features: translated.features,
        examples: englishDoc.examples, // Keep same examples
        faqs: translated.faqs,
        targetKeywords: translated.targetKeywords,
        translations: [{ _type: 'reference', _ref: docId }]
      }

      // Save to Sanity
      const created = await client.create(translatedDoc)

      // Update English version with translation reference
      await client
        .patch(docId)
        .setIfMissing({ translations: [] })
        .append('translations', [{ _type: 'reference', _ref: created._id }])
        .commit()

      console.log(`  ✓ ${lang} created: ${created._id}`)

      // Rate limiting (OpenAI has limits)
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error) {
      console.error(`  ✗ ${lang} failed:`, error)
    }
  }
}

function generateLocalizedSlug(title: string, lang: string): string {
  // Convert to lowercase and replace spaces
  let slug = title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-\u0400-\u04FF\u0600-\u06FF\u0900-\u097F\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/g, '')

  return slug
}

// Run translation
const docId = process.argv[2]
const docType = process.argv[3] || 'toolPage'

if (!docId) {
  console.error('Usage: npm run translate <document-id> [document-type]')
  process.exit(1)
}

translateDocument(docId, docType)
  .then(() => console.log('✅ Translation complete'))
  .catch(err => console.error('❌ Translation failed:', err))
```

**Usage:**
```bash
npm run translate doc-123-english toolPage
```

### Translation Cost Estimate

**Per Page:**
- Average content: ~2,000 tokens
- GPT-4 Turbo: ~$0.01 per 1K input tokens, ~$0.03 per 1K output
- Cost per translation: ~$0.04-0.08

**Total:**
- 486 base pages × 19 languages = 9,234 translations
- Estimated cost: **$370-740**
- Recommended budget: **$500**

### Quality Assurance

```typescript
// scripts/validate-translations.ts
import { client } from '@/lib/sanity/client'

async function validateTranslations() {
  const languages = ['es', 'zh-CN', 'hi', /* ... */]
  const report = []

  for (const lang of languages) {
    const docs = await client.fetch(`
      count(*[_type in ["toolPage", "useCasePage", "industryPage"] && language == $lang])
    `, { lang })

    const expectedCount = 486 // Total base pages

    report.push({
      language: lang,
      translated: docs,
      expected: expectedCount,
      coverage: `${((docs / expectedCount) * 100).toFixed(1)}%`,
      status: docs >= expectedCount * 0.95 ? '✅' : '⚠️'
    })
  }

  console.table(report)
}

validateTranslations()
```

---

## Technical Implementation

### Next.js Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // No i18n config needed - we handle routing manually
  // This gives us more control for English at root

  images: {
    domains: ['cdn.sanity.io', 'cdn.revid.ai'],
    formats: ['image/avif', 'image/webp'],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // Redirect /en/ to root
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
```

### Middleware (Language Detection)

```typescript
// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = [
  'es', 'zh-CN', 'hi', 'ar', 'pt', 'ru', 'ja',
  'fr', 'de', 'ko', 'it', 'tr', 'vi', 'id', 'th',
  'pl', 'nl', 'uk', 'sv'
]

function getLocale(request: NextRequest): string | null {
  // 1. Check cookie preference
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // 2. Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return null

  try {
    const headers = { 'accept-language': acceptLanguage }
    const languages = new Negotiator({ headers }).languages()
    const detectedLocale = match(languages, [...locales, 'en'], 'en')

    return detectedLocale === 'en' ? null : detectedLocale
  } catch {
    return null
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for these paths
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If has locale, continue
  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Detect user's preferred language
  const detectedLocale = getLocale(request)

  // If detected non-English locale, suggest it
  if (detectedLocale) {
    const response = NextResponse.next()

    // Add header suggesting locale (can be used by client)
    response.headers.set('X-Suggested-Locale', detectedLocale)
    response.headers.set('X-Suggested-Path', `/${detectedLocale}${pathname}`)

    return response
  }

  // Otherwise, continue (English at root)
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap).*)',
  ],
}
```

### Dynamic Routing (English)

```typescript
// app/tools/[slug]/page.tsx
import { client } from '@/lib/sanity/client'
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate'
import { HreflangTags } from '@/components/HreflangTags'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const tools = await client.fetch(`
    *[_type == "toolPage" && language == "en"]{
      "slug": slug.current
    }
  `)

  return tools.map((tool) => ({
    slug: tool.slug,
  }))
}

export async function generateMetadata({ params }) {
  const tool = await client.fetch(`
    *[_type == "toolPage" && slug.current == $slug && language == "en"][0]{
      title,
      metaTitle,
      metaDescription,
      hero,
      "translationSlugs": translations[]->{
        language,
        "slug": slug.current
      }
    }
  `, { slug: params.slug })

  if (!tool) return {}

  // Build alternate language URLs
  const alternates: Record<string, string> = {}
  tool.translationSlugs?.forEach((t: any) => {
    if (t.language !== 'en') {
      // Build localized path
      alternates[t.language] = `/${t.language}/tools/${t.slug}`
    }
  })

  return {
    title: tool.metaTitle || `${tool.title} - Sorovi`,
    description: tool.metaDescription,
    alternates: {
      canonical: `/tools/${params.slug}`,
      languages: alternates,
    },
    openGraph: {
      title: tool.title,
      description: tool.metaDescription,
      images: [tool.hero.mockupImage?.url],
      locale: 'en',
      type: 'website',
    },
  }
}

export default async function ToolPage({ params }) {
  const tool = await client.fetch(`
    *[_type == "toolPage" && slug.current == $slug && language == "en"][0]{
      ...,
      "translationSlugs": translations[]->{
        language,
        "slug": slug.current
      }
    }
  `, { slug: params.slug })

  if (!tool) notFound()

  return (
    <>
      <HreflangTags
        currentPath={`/tools/${params.slug}`}
        translations={tool.translationSlugs || []}
      />
      <ToolPageTemplate data={tool} locale="en" />
    </>
  )
}
```

### Dynamic Routing (Other Languages)

```typescript
// app/[locale]/[...slug]/page.tsx
import { client } from '@/lib/sanity/client'
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate'
import { notFound } from 'next/navigation'

const locales = ['es', 'zh-CN', 'hi', 'ar', 'pt', 'ru', 'ja', 'fr', 'de', 'ko', 'it', 'tr', 'vi', 'id', 'th', 'pl', 'nl', 'uk', 'sv']

const pathMappings = {
  es: {
    'herramientas': 'toolPage',
    'casos-de-uso': 'useCasePage',
    'industrias': 'industryPage',
    'plantillas': 'templatePage',
    'vs': 'comparisonPage',
    'blog': 'blogPost',
  },
  fr: {
    'outils': 'toolPage',
    'cas-d-usage': 'useCasePage',
    'industries': 'industryPage',
    'modèles': 'templatePage',
    'vs': 'comparisonPage',
    'blog': 'blogPost',
  },
  // ... other languages
}

export async function generateStaticParams() {
  const allParams = []

  for (const locale of locales) {
    const pages = await client.fetch(`
      *[_type in ["toolPage", "useCasePage", "industryPage", "templatePage", "blogPost"]
        && language == $locale]{
        _type,
        "slug": slug.current
      }
    `, { locale })

    pages.forEach(page => {
      const category = getCategoryPath(page._type, locale)
      allParams.push({
        locale,
        slug: [category, page.slug]
      })
    })
  }

  return allParams
}

function getCategoryPath(type: string, locale: string): string {
  const mapping = pathMappings[locale] || {}
  return Object.keys(mapping).find(key => mapping[key] === type) || type
}

export default async function LocalizedPage({ params }) {
  const { locale, slug } = params
  const [category, pageSlug] = slug

  // Reverse lookup document type
  const docType = pathMappings[locale]?.[category] || category

  // Fetch content
  const content = await client.fetch(`
    *[_type == $type && slug.current == $slug && language == $locale][0]{
      ...,
      "translationSlugs": translations[]->{
        language,
        "slug": slug.current
      }
    }
  `, { type: docType, slug: pageSlug, locale })

  if (!content) notFound()

  // Select appropriate template
  const Template = getTemplate(docType)

  return <Template data={content} locale={locale} />
}

function getTemplate(docType: string) {
  const templates = {
    toolPage: ToolPageTemplate,
    useCasePage: UseCaseTemplate,
    industryPage: IndustryTemplate,
    templatePage: TemplatePageTemplate,
    blogPost: BlogTemplate,
  }
  return templates[docType] || ToolPageTemplate
}
```

### Language Switcher Component

```typescript
// components/LanguageSwitcher.tsx
'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { locales } from '@/lib/i18n/locales'

export function LanguageSwitcher({ currentLocale = 'en' }) {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = locales.find(l => l.code === currentLocale) || locales[0]

  const switchLanguage = (targetLang: typeof locales[0]) => {
    let newPath = pathname

    // If currently on non-English page, remove locale prefix
    if (currentLocale !== 'en') {
      const localePrefix = `/${currentLocale}`
      if (pathname.startsWith(localePrefix)) {
        newPath = pathname.slice(localePrefix.length) || '/'
      }
    }

    // If switching to non-English, add locale prefix
    if (targetLang.code !== 'en') {
      newPath = `/${targetLang.code}${newPath}`
    }

    // Set cookie preference
    document.cookie = `NEXT_LOCALE=${targetLang.code};path=/;max-age=31536000;SameSite=Lax`

    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Select language"
      >
        <span className="text-2xl" aria-hidden="true">{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute top-full mt-2 right-0 bg-gray-900 rounded-lg shadow-xl border border-white/10 max-h-96 overflow-y-auto z-50 min-w-[200px]">
            {locales.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang)}
                className={`flex items-center gap-3 px-4 py-3 w-full hover:bg-white/10 transition-colors ${
                  lang.code === currentLocale ? 'bg-white/5 font-semibold' : ''
                }`}
              >
                <span className="text-2xl" aria-hidden="true">{lang.flag}</span>
                <span className="whitespace-nowrap">{lang.name}</span>
                {lang.code === currentLocale && (
                  <svg className="w-4 h-4 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
```

### Hreflang Tags Component

```typescript
// components/HreflangTags.tsx
export function HreflangTags({
  currentPath,
  translations
}: {
  currentPath: string
  translations: Array<{ language: string; slug: string }>
}) {
  return (
    <>
      {/* English version (at root) */}
      <link
        rel="alternate"
        hrefLang="en"
        href={`https://sorovi.ai${currentPath}`}
      />

      {/* Other language versions */}
      {translations.map((t) => {
        if (t.language === 'en') return null

        const localizedPath = getLocalizedPath(currentPath, t.slug, t.language)

        return (
          <link
            key={t.language}
            rel="alternate"
            hrefLang={t.language}
            href={`https://sorovi.ai${localizedPath}`}
          />
        )
      })}

      {/* x-default points to English */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://sorovi.ai${currentPath}`}
      />
    </>
  )
}

function getLocalizedPath(currentPath: string, slug: string, locale: string): string {
  // Map English paths to localized paths
  const pathMappings = {
    '/tools/': {
      es: '/es/herramientas/',
      fr: '/fr/outils/',
      de: '/de/werkzeuge/',
      // ... other languages
    },
    '/use-cases/': {
      es: '/es/casos-de-uso/',
      fr: '/fr/cas-d-usage/',
      // ... other languages
    },
    // ... other paths
  }

  // Find matching path and return localized version
  for (const [enPath, localizations] of Object.entries(pathMappings)) {
    if (currentPath.startsWith(enPath)) {
      return `${localizations[locale]}${slug}`
    }
  }

  return `/${locale}${currentPath}`
}
```

### Locale Configuration

```typescript
// lib/i18n/locales.ts
export const locales = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    dir: 'ltr',
    path: '',
    font: 'inter'
  },
  {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸',
    dir: 'ltr',
    path: '/es',
    font: 'inter'
  },
  {
    code: 'zh-CN',
    name: '简体中文',
    flag: '🇨🇳',
    dir: 'ltr',
    path: '/zh-CN',
    font: 'noto-sans-sc'
  },
  {
    code: 'hi',
    name: 'हिन्दी',
    flag: '🇮🇳',
    dir: 'ltr',
    path: '/hi',
    font: 'inter' // Has Devanagari support
  },
  {
    code: 'ar',
    name: 'العربية',
    flag: '🇸🇦',
    dir: 'rtl',
    path: '/ar',
    font: 'noto-sans-arabic'
  },
  {
    code: 'pt',
    name: 'Português',
    flag: '🇧🇷',
    dir: 'ltr',
    path: '/pt',
    font: 'inter'
  },
  {
    code: 'ru',
    name: 'Русский',
    flag: '🇷🇺',
    dir: 'ltr',
    path: '/ru',
    font: 'inter'
  },
  {
    code: 'ja',
    name: '日本語',
    flag: '🇯🇵',
    dir: 'ltr',
    path: '/ja',
    font: 'noto-sans-jp'
  },
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    dir: 'ltr',
    path: '/fr',
    font: 'inter'
  },
  {
    code: 'de',
    name: 'Deutsch',
    flag: '🇩🇪',
    dir: 'ltr',
    path: '/de',
    font: 'inter'
  },
  {
    code: 'ko',
    name: '한국어',
    flag: '🇰🇷',
    dir: 'ltr',
    path: '/ko',
    font: 'noto-sans-kr'
  },
  {
    code: 'it',
    name: 'Italiano',
    flag: '🇮🇹',
    dir: 'ltr',
    path: '/it',
    font: 'inter'
  },
  {
    code: 'tr',
    name: 'Türkçe',
    flag: '🇹🇷',
    dir: 'ltr',
    path: '/tr',
    font: 'inter'
  },
  {
    code: 'vi',
    name: 'Tiếng Việt',
    flag: '🇻🇳',
    dir: 'ltr',
    path: '/vi',
    font: 'inter'
  },
  {
    code: 'id',
    name: 'Bahasa',
    flag: '🇮🇩',
    dir: 'ltr',
    path: '/id',
    font: 'inter'
  },
  {
    code: 'th',
    name: 'ไทย',
    flag: '🇹🇭',
    dir: 'ltr',
    path: '/th',
    font: 'noto-sans-thai'
  },
  {
    code: 'pl',
    name: 'Polski',
    flag: '🇵🇱',
    dir: 'ltr',
    path: '/pl',
    font: 'inter'
  },
  {
    code: 'nl',
    name: 'Nederlands',
    flag: '🇳🇱',
    dir: 'ltr',
    path: '/nl',
    font: 'inter'
  },
  {
    code: 'uk',
    name: 'Українська',
    flag: '🇺🇦',
    dir: 'ltr',
    path: '/uk',
    font: 'inter'
  },
  {
    code: 'sv',
    name: 'Svenska',
    flag: '🇸🇪',
    dir: 'ltr',
    path: '/sv',
    font: 'inter'
  },
] as const

export type Locale = typeof locales[number]['code']
```

---

## SEO Implementation

### Sitemap Generation

```typescript
// app/sitemap.ts
import { client } from '@/lib/sanity/client'
import { locales } from '@/lib/i18n/locales'

export default async function sitemap() {
  const baseUrl = 'https://sorovi.ai'
  const urls = []

  // Homepage for all languages
  urls.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        locales.filter(l => l.code !== 'en').map(l => [l.code, `${baseUrl}${l.path}`])
      )
    }
  })

  // Tool pages
  const tools = await client.fetch(`
    *[_type == "toolPage"]{
      language,
      "slug": slug.current,
      _updatedAt,
      "translations": translations[]->{language, "slug": slug.current}
    }
  `)

  const toolsByEnglish = tools.filter(t => t.language === 'en')

  for (const tool of toolsByEnglish) {
    const alternates = {}

    tool.translations?.forEach(t => {
      if (t.language !== 'en') {
        const locale = locales.find(l => l.code === t.language)
        alternates[t.language] = `${baseUrl}${locale.path}/tools/${t.slug}`
      }
    })

    urls.push({
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified: new Date(tool._updatedAt),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: { languages: alternates }
    })
  }

  // ... repeat for use-cases, industries, templates, blog posts

  return urls
}
```

### Robots.txt

```typescript
// app/robots.ts
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/'],
    },
    sitemap: 'https://sorovi.ai/sitemap.xml',
  }
}
```

---

## UI/UX Adaptations

### RTL Support (Arabic)

```css
/* app/globals.css */

/* RTL support for Arabic */
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

/* Flip flex direction */
[dir="rtl"] .flex-row {
  flex-direction: row-reverse;
}

/* Mirror padding */
[dir="rtl"] .pl-4 {
  padding-left: 0;
  padding-right: 1rem;
}

[dir="rtl"] .pr-4 {
  padding-right: 0;
  padding-left: 1rem;
}

/* Mirror margins */
[dir="rtl"] .ml-auto {
  margin-left: 0;
  margin-right: auto;
}

[dir="rtl"] .mr-auto {
  margin-right: 0;
  margin-left: auto;
}

/* Flip borders */
[dir="rtl"] .border-l {
  border-left: none;
  border-right: 1px solid;
}

[dir="rtl"] .border-r {
  border-right: none;
  border-left: 1px solid;
}

/* Flip rounded corners */
[dir="rtl"] .rounded-l {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
```

### Font Loading

```typescript
// app/[locale]/layout.tsx
import { Inter } from 'next/font/google'
import { Noto_Sans_Arabic } from 'next/font/google'
import { Noto_Sans_SC } from 'next/font/google'
import { Noto_Sans_JP } from 'next/font/google'
import { Noto_Sans_KR } from 'next/font/google'
import { Noto_Sans_Thai } from 'next/font/google'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })
const arabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic' })
const chinese = Noto_Sans_SC({ subsets: ['chinese-simplified'], variable: '--font-chinese' })
const japanese = Noto_Sans_JP({ subsets: ['japanese'], variable: '--font-japanese' })
const korean = Noto_Sans_KR({ subsets: ['korean'], variable: '--font-korean' })
const thai = Noto_Sans_Thai({ subsets: ['thai'], variable: '--font-thai' })

const fontMap = {
  en: inter.variable,
  es: inter.variable,
  pt: inter.variable,
  fr: inter.variable,
  de: inter.variable,
  it: inter.variable,
  pl: inter.variable,
  nl: inter.variable,
  uk: inter.variable,
  sv: inter.variable,
  ru: inter.variable,
  tr: inter.variable,
  vi: inter.variable,
  id: inter.variable,
  hi: inter.variable,
  ar: arabic.variable,
  'zh-CN': chinese.variable,
  ja: japanese.variable,
  ko: korean.variable,
  th: thai.variable,
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const fontClass = fontMap[params.locale] || inter.variable
  const locale = locales.find(l => l.code === params.locale)
  const dir = locale?.dir || 'ltr'

  return (
    <html lang={params.locale} dir={dir} className={fontClass}>
      <body>{children}</body>
    </html>
  )
}
```

---

## Complete Site Map

### Visual Structure

```
sorovi.ai/
│
├── / (English)
│   ├── / (homepage - 1)
│   ├── /tools/ (100)
│   │   ├── /ai-tiktok-video-generator
│   │   ├── /instagram-reels-creator
│   │   ├── /youtube-shorts-creator
│   │   └── ... (97 more)
│   ├── /use-cases/ (150)
│   │   ├── /product-marketing-videos
│   │   ├── /social-media-content
│   │   └── ... (148 more)
│   ├── /industries/ (50)
│   │   ├── /e-commerce
│   │   ├── /real-estate
│   │   └── ... (48 more)
│   ├── /templates/ (100)
│   ├── /vs/ (30)
│   ├── /blog/ (50)
│   ├── /pricing (1)
│   ├── /about (1)
│   ├── /privacy (1)
│   ├── /terms (1)
│   └── /contact (1)
│
├── /es/ (Spanish) - 486 pages
│   ├── / (homepage)
│   ├── /herramientas/ (tools - 100)
│   ├── /casos-de-uso/ (use-cases - 150)
│   ├── /industrias/ (industries - 50)
│   ├── /plantillas/ (templates - 100)
│   ├── /vs/ (30)
│   ├── /blog/ (50)
│   └── ... (static pages - 5)
│
├── /zh-CN/ (Chinese) - 486 pages
│   ├── /
│   ├── /工具/ (tools)
│   ├── /用例/ (use-cases)
│   ├── /行业/ (industries)
│   ├── /模板/ (templates)
│   ├── /vs/
│   ├── /博客/ (blog)
│   └── ... (static pages)
│
├── /ja/ (Japanese) - 486 pages
├── /ar/ (Arabic, RTL) - 486 pages
├── /pt/ (Portuguese) - 486 pages
├── /ru/ (Russian) - 486 pages
├── /hi/ (Hindi) - 486 pages
├── /fr/ (French) - 486 pages
├── /de/ (German) - 486 pages
├── /ko/ (Korean) - 486 pages
├── /it/ (Italian) - 486 pages
├── /tr/ (Turkish) - 486 pages
├── /vi/ (Vietnamese) - 486 pages
├── /id/ (Indonesian) - 486 pages
├── /th/ (Thai) - 486 pages
├── /pl/ (Polish) - 486 pages
├── /nl/ (Dutch) - 486 pages
├── /uk/ (Ukrainian) - 486 pages
└── /sv/ (Swedish) - 486 pages

📊 TOTAL: 9,720 pages (486 × 20)
```

### Page Count Breakdown

```
Page Type          Base    × Languages    = Total
─────────────────────────────────────────────────
Homepage             1     ×    20        =    20
Tool Pages         100     ×    20        = 2,000
Use Case Pages     150     ×    20        = 3,000
Industry Pages      50     ×    20        = 1,000
Template Pages     100     ×    20        = 2,000
Comparison Pages    30     ×    20        =   600
Blog Posts          50     ×    20        = 1,000
Static Pages         5     ×    20        =   100
─────────────────────────────────────────────────
TOTAL              486     ×    20        = 9,720
```

---

## Implementation Timeline

### Updated 16-Week Timeline

#### **Phase 1: Foundation (Weeks 1-2)**
- Setup Next.js, Tailwind, TypeScript
- Design system implementation
- Basic architecture

#### **Phase 2: Core Pages - English Only (Weeks 3-4)**
- Homepage (English)
- Static pages (English)
- Navigation & Footer
- SEO fundamentals

#### **Phase 3: i18n Infrastructure (Weeks 5-6)**
- ✅ Week 5: Setup
  - Configure Next.js routing (English at root)
  - Sanity i18n plugin
  - Language switcher component
  - Middleware for detection
  - RTL support styles

- ✅ Week 6: Translation Pipeline
  - OpenAI translation integration
  - Bulk translation scripts
  - Quality validation scripts
  - UI dictionaries (20 languages)

#### **Phase 4: Programmatic Pages - English (Weeks 7-8)**
- Build all page templates
- Generate 486 English pages
- Test routing and SEO

#### **Phase 5: Mass Translation (Weeks 9-10)**
- ✅ Week 9: Bulk Translation
  - Translate all 486 pages to 19 languages
  - 9,234 translations total
  - Automated via scripts

- ✅ Week 10: Quality Review
  - Test all languages
  - Fix translation errors
  - Adapt cultural references

#### **Phase 6: Enhanced Features (Weeks 11-12)**
- Interactive components
- Blog system
- Templates gallery
- Comparison tables

#### **Phase 7: SEO & Optimization (Weeks 13-14)**
- Hreflang implementation
- Sitemap generation (all languages)
- Search Console setup (per language)
- Performance optimization
- RTL testing

#### **Phase 8: Testing & Launch (Weeks 15-16)**
- ✅ Week 15: Testing
  - Test all 20 languages
  - Mobile testing
  - Performance testing
  - Accessibility audit

- ✅ Week 16: Phased Launch
  - Day 1-3: Launch English + Top 5 (es, zh-CN, hi, ar, pt)
  - Day 4-7: Add Next 5 (ru, ja, fr, de, ko)
  - Week 2: Full launch (all 20 languages)

---

## Budget & Resources

### Translation Costs

| Item | Cost |
|------|------|
| OpenAI GPT-4 Turbo | $500 |
| Human review (Top 5 languages) | $2,500 |
| **Total** | **$3,000** |

### Hosting & Tools (Annual)

| Item | Monthly | Annual |
|------|---------|--------|
| Vercel Pro | $20 | $240 |
| Sanity Growth | $99 | $1,188 |
| OpenAI API (ongoing) | $25 | $300 |
| Domain (.ai) | - | $80 |
| **Total** | **$144** | **$1,808** |

### Development (If Hiring)

| Task | Hours | Cost (@$75/hr) |
|------|-------|----------------|
| Base website | 240 | $18,000 |
| i18n infrastructure | 40 | $3,000 |
| Translation system | 40 | $3,000 |
| RTL support | 20 | $1,500 |
| Testing (20 languages) | 40 | $3,000 |
| **Total** | **380** | **$28,500** |

### Total First Year

| Category | DIY | With Developer |
|----------|-----|----------------|
| Translation | $3,000 | $3,000 |
| Hosting & Tools | $1,808 | $1,808 |
| Development | $0 | $28,500 |
| **TOTAL** | **$4,808** | **$33,308** |

---

## Success Metrics

### Month 3 Goals
- ✅ 6,000+ pages indexed (300 × 20)
- ✅ 10,000+ organic visitors
- ✅ 500+ App Store clicks
- ✅ Top 3 languages identified by traffic

### Month 6 Goals
- ✅ 10,000+ pages indexed (500 × 20)
- ✅ 30,000+ organic visitors
- ✅ 1,500+ App Store clicks
- ✅ 100+ keywords ranked (all languages)
- ✅ Human-reviewed translations for top 10

### Month 12 Goals
- ✅ 20,000+ pages indexed (1,000 × 20)
- ✅ 100,000+ organic visitors/month
- ✅ 5,000+ App Store clicks/month
- ✅ Top 10 rankings in 10+ countries
- ✅ ROI positive in top 5 languages

---

## Recommendations

### Phased Rollout Strategy

**Phase 1: Launch Top 5 (Week 12)**
- English (root)
- Spanish
- Chinese
- Hindi
- Portuguese

**Why:** 60% of global internet users, test infrastructure

**Phase 2: Add Next 5 (Week 14)**
- Arabic (RTL test)
- Russian
- Japanese
- French
- German

**Why:** Additional 20% coverage, includes RTL

**Phase 3: Complete All 20 (Week 16)**
- Korean, Italian, Turkish, Vietnamese, Indonesian, Thai, Polish, Dutch, Ukrainian, Swedish

**Why:** Full global coverage, final 15%

### Benefits of Phased Approach
1. ✅ Faster initial launch
2. ✅ Test and learn
3. ✅ Reduce initial complexity
4. ✅ Optimize based on real data
5. ✅ Lower upfront costs
6. ✅ Can pause if ROI doesn't justify

---

## Conclusion

This localization strategy transforms Sorovi from a single-language website into a **global platform** with:

- **20 languages** covering 95%+ of internet users
- **9,720 pages** for maximum SEO coverage
- **English at root** for cleaner primary market URLs
- **16-week timeline** for full deployment
- **$4,808 budget** (DIY) or **$33,308** (with developer)
- **Scalable architecture** ready for future growth

**Next Steps:**
1. Approve budget and timeline
2. Set up Sanity CMS with i18n plugin
3. Configure Next.js routing
4. Begin Phase 1 development

**Ready to go global! 🌍🚀**
