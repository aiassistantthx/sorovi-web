# Sorovi Website

Official website for Sorovi - AI Video Generation Mobile App

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)
[![Sanity CMS](https://img.shields.io/badge/Sanity-CMS-f03e2f)](https://www.sanity.io/)

## 🚀 Project Overview

A modern, multi-language website with programmatic SEO featuring:

- **20 Languages** - Global reach covering 95%+ of internet users
- **9,720 Pages** - Programmatically generated SEO-optimized landing pages
- **Modern Design** - Dark theme with glassmorphism and neon accents
- **Mobile-First** - Responsive design optimized for all devices
- **High Performance** - Lightning-fast with Next.js 14 and edge deployment

## 📋 Features

### Core Features
- ✅ Multi-language support (20 languages)
- ✅ Programmatic SEO with auto-generated pages
- ✅ Dark theme with custom design system
- ✅ Sanity CMS for content management
- ✅ AI-powered translations
- ✅ App Store integration
- ✅ Analytics and tracking

### Page Types
- Homepage
- 100+ Tool pages
- 150+ Use case pages
- 50+ Industry pages
- 100+ Template pages
- 30+ Comparison pages
- 50+ Blog posts
- Legal pages

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Smooth animations

### CMS & Content
- **Sanity CMS** - Headless content management
- **GROQ** - Query language for content
- **Portable Text** - Rich text rendering

### Deployment & Tools
- **Vercel** - Edge hosting platform
- **Git** - Version control
- **ESLint** - Code linting
- **next-sitemap** - SEO sitemaps

## 📦 Project Structure

```
sorovi/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles with design tokens
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── sections/         # Page sections
│   ├── templates/        # Page templates
│   └── layouts/          # Layout components
├── lib/                  # Utilities and helpers
│   ├── utils/           # Helper functions
│   ├── api/             # API utilities
│   └── sanity/          # Sanity client config
├── sanity/              # Sanity CMS configuration
│   ├── schemas/         # Content schemas
│   └── lib/             # Sanity helpers
├── types/               # TypeScript type definitions
├── public/              # Static assets
│   └── images/          # Image assets
├── docs/                # Project documentation
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sorovi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

   Then edit `.env.local` and add your API keys:
   - Sanity project ID and token
   - OpenAI API key (for translations)
   - Analytics IDs

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### First-Time Setup

1. **Create Sanity project** (if not done)
   ```bash
   npm install -g @sanity/cli
   sanity init
   ```

2. **Deploy Sanity Studio** (optional)
   ```bash
   cd sanity
   sanity deploy
   ```

3. **Add content** - Log into Sanity Studio and add your first content

## 🎨 Design System

### Colors

```css
/* Brand Colors */
--brand-purple: #8B5CF6
--brand-pink: #EC4899

/* Backgrounds */
--bg-dark: #0F0F1E
--surface-dark: #1A1A2E

/* Accents */
--neon-blue: #3B82F6
--neon-green: #10B981
--neon-orange: #F97316
```

### Spacing Scale (8px base)
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px
- 5xl: 128px

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Sanity CMS
npm run sanity       # Start Sanity Studio locally
```

## 🌍 Multi-Language Support

The website supports 20 languages:

1. English (en) - Root level
2. Spanish (es)
3. Chinese (zh-CN)
4. Hindi (hi)
5. Arabic (ar) - RTL support
6. Portuguese (pt)
7. Russian (ru)
8. Japanese (ja)
9. French (fr)
10. German (de)
11. Korean (ko)
12. Italian (it)
13. Turkish (tr)
14. Vietnamese (vi)
15. Indonesian (id)
16. Thai (th)
17. Polish (pl)
18. Dutch (nl)
19. Ukrainian (uk)
20. Swedish (sv)

### URL Structure

- English (default): `/tools/ai-video-generator`
- Other languages: `/es/herramientas/generador-video-ia`

## 📊 SEO Strategy

### Programmatic SEO
- 500+ keyword combinations targeted
- Unique content per page
- Structured data (Schema.org)
- Hreflang tags for all languages
- XML sitemaps per language

### Performance Targets
- Lighthouse Score: 90+
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

## 🚢 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Configure environment variables** in Vercel dashboard

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Environment Variables

Required environment variables for production:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`
- `OPENAI_API_KEY`
- `NEXT_PUBLIC_GA_ID`

## 📖 Documentation

Detailed documentation is available in the `/docs` folder:

- [Master Implementation Plan](docs/MASTER-IMPLEMENTATION-PLAN.md)
- [Localization Strategy](docs/sorovi-localization-strategy.md)
- [Website Plan](docs/sorovi-website-plan.md)
- [Page Structures Analysis](docs/revid-ai-page-structures.md)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

All rights reserved - Sorovi © 2025

## 🔗 Links

- Website: [sorovi.ai](https://sorovi.ai)
- App Store: [Download iOS App](https://apps.apple.com/app/sorovi)
- Google Play: [Download Android App](https://play.google.com/store/apps/details?id=ai.sorovi)

## 📧 Contact

For questions or support, please contact the development team.

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
