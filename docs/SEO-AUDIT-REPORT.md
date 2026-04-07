# SEO Audit Report: hyreel.com

**Audit Date:** April 6, 2026
**Audited By:** Technical SEO Specialist
**Site Type:** SaaS Landing Site - AI Video Generator App

---

## Executive Summary

| Metric | Value |
|--------|-------|
| **Overall SEO Health Score** | **72/100** |
| Total Pages Analyzed | ~119 |
| Critical Issues | 4 |
| High Priority Issues | 6 |
| Medium Priority Issues | 8 |
| Low Priority Issues | 5 |

**Verdict:** The site has a solid technical foundation built on Next.js with good server-side rendering, proper security headers, and strong structured data implementation. However, critical sitemap gaps, missing canonical tags, and incomplete Open Graph implementation require immediate attention.

---

## Site Architecture Overview

### Page Distribution (Confirmed Live)

| Section | Pages | In Sitemap | Status |
|---------|-------|------------|--------|
| Static Pages | 9 | 9 | OK |
| Tools | 20 | 20 | OK |
| Alternatives | 10 | 10 | OK |
| Use Cases | 10 | 10 | OK |
| Blog | 15 | 15 | OK |
| Templates | 10 | 0 | MISSING |
| Industries | 8 | 0 | MISSING |
| Audience (/for/) | 8 | 0 | MISSING |
| Platforms | 6 | 0 | MISSING |
| Solutions | 5 | 0 | MISSING |
| **Total** | **~101** | **64** | **37 pages missing** |

---

## Detailed Analysis by Category

### 1. Crawlability (Score: 65/100)

#### robots.txt Analysis

**Status:** CONFIGURED with Cloudflare Managed Content Signals

```
User-agent: *
Content-Signal: search=yes,ai-train=no
Allow: /
Disallow: /api/

Sitemap: https://hyreel.com/sitemap.xml
```

**Findings:**

| Item | Status | Notes |
|------|--------|-------|
| robots.txt exists | PASS | Properly configured |
| Sitemap declared | PASS | Located at /sitemap.xml |
| Content-Signal headers | PASS | Modern AI crawler management |
| AI training blocked | PASS | Blocks ClaudeBot, GPTBot, etc. |
| Search allowed | PASS | Allows traditional search indexing |

**AI Crawler Blocking (Cloudflare Managed):**
- Amazonbot: Blocked
- Applebot-Extended: Blocked
- Bytespider: Blocked
- CCBot: Blocked
- ClaudeBot: Blocked
- Google-Extended: Blocked
- GPTBot: Blocked
- meta-externalagent: Blocked

#### sitemap.xml Analysis

**Status:** CRITICAL ISSUES

| Metric | Value |
|--------|-------|
| Total URLs in sitemap | 64 |
| Expected URLs | ~101 |
| Missing URLs | ~37 (37%) |
| Format | Valid XML |
| lastmod present | Yes |
| changefreq present | Yes |
| priority present | Yes |

**Missing Sections in Sitemap:**
1. `/templates/` (10 pages) - All missing
2. `/industries/` (8 pages) - All missing
3. `/for/` (8 pages) - All missing
4. `/platforms/` (6 pages) - All missing
5. `/solutions/` (5 pages) - All missing

**Index Pages Not in Sitemap:**
- `/templates` (returns 200)
- `/industries` (returns 200)
- `/for` (returns 200)
- `/platforms` (returns 200)
- `/solutions` (returns 200)

---

### 2. Indexability (Score: 70/100)

#### Canonical Tags

| Page Type | Canonical Present | Status |
|-----------|------------------|--------|
| Homepage | NO | CRITICAL |
| Tools pages | YES | OK |
| Blog posts | NO | CRITICAL |
| Alternatives | YES | OK |
| Use cases | NO | CRITICAL |

**Sample Canonical Found:**
```html
<link rel="canonical" href="https://hyreel.com/tools/ai-script-generator"/>
```

#### Meta Tags Implementation

**Homepage:**
```html
<title>Hyreel - AI Video Generation App</title>
<meta name="description" content="Create viral videos in minutes with AI. TikTok, Instagram Reels, YouTube Shorts and more."/>
<meta name="keywords" content="AI video generator,TikTok videos,Instagram Reels,YouTube Shorts,video maker app"/>
```

| Element | Status | Issue |
|---------|--------|-------|
| Title tag | PASS | 35 chars - Good length |
| Meta description | PASS | 86 chars - Good length |
| Keywords meta | WARNING | Deprecated, no SEO value |
| Author meta | PASS | "Hyreel" |

**Sample Tool Page (AI Script Generator):**
```html
<title>AI Script Generator | Hyreel</title>
<meta name="description" content="Transform your ideas into compelling video scripts using advanced AI. Perfect for TikTok, YouTube Shorts, Instagram Reels, and more."/>
```

**Sample Blog Post:**
```html
<title>How to Create Viral TikTok Videos from Photos | Hyreel Blog</title>
<meta name="description" content="Learn step-by-step how to turn your photos into viral TikTok videos using AI. Tips on effects, timing, and trends that get you on the For You Page."/>
```

**Sample Alternative Page:**
```html
<title>Canva AI Video Generator Alternative | Hyreel - Better for Photo to Video</title>
<meta name="description" content="Looking for a Canva alternative for AI video generation? Hyreel transforms photos into videos with cinematic motion effects. Free trial, no watermark on paid plans."/>
```

#### Heading Structure

**Homepage Heading Hierarchy:**
```
H1: Turn Photos Into [Viral Videos]
  H2: Created by Hyreel, Watched by Millions
    H3: Product Showcase
    H3: Day in My Life
    H3: Recipe Tutorial
    H3: Fitness Challenge
    H3: Tech Review
    H3: Fashion Haul
  H2: From Photo to Viral Video in 4 Steps
    H3: Upload a Photo
    H3: Pick a Style
    H3: AI Does the Work
    H3: Post Everywhere
  H2: Everything You Need to Go Viral
    H3: Photo-to-Video AI
    H3: AI Script Writer
    H3: 100+ AI Avatars
    H3: 50+ AI Voices
    H3: One-Tap Templates
    H3: Direct Publishing
```

**Status:** PASS - Proper hierarchical structure with single H1

---

### 3. Security (Score: 95/100)

#### HTTP Headers Analysis

| Header | Value | Status |
|--------|-------|--------|
| HTTPS | Enforced | PASS |
| HSTS | max-age=63072000; includeSubDomains; preload | PASS |
| X-Frame-Options | DENY | PASS |
| X-Content-Type-Options | nosniff | PASS |
| Referrer-Policy | strict-origin-when-cross-origin | PASS |
| Permissions-Policy | camera=(), microphone=(), geolocation=() | PASS |
| Content-Security-Policy | Not set | MEDIUM |

**SSL/TLS:** Valid certificate with HSTS preload enabled

---

### 4. URL Structure (Score: 90/100)

#### URL Patterns

| Pattern | Example | Status |
|---------|---------|--------|
| Static pages | /pricing, /about | PASS |
| Tools | /tools/ai-script-generator | PASS |
| Blog | /blog/how-to-create-viral-tiktok-videos | PASS |
| Alternatives | /alternatives/canva | PASS |
| Use cases | /use-cases/product-videos-for-ecommerce | PASS |

**Positive Findings:**
- Clean, semantic URLs
- No URL parameters on content pages
- Lowercase URLs
- Hyphens for word separation
- No file extensions

#### Redirect Analysis

| Test | Result | Redirects |
|------|--------|-----------|
| http:// to https:// | PASS | 1 redirect |
| www to non-www | PASS | 1 redirect |
| Trailing slash | PASS | Consistent (no trailing) |

---

### 5. Mobile Optimization (Score: 85/100)

#### Viewport Configuration
```html
<meta name="viewport" content="width=device-width, initial-scale=1"/>
```
**Status:** PASS

#### Responsive Design Indicators
- Uses Tailwind CSS responsive classes (sm:, md:, lg:)
- Mobile-first breakpoints detected
- Touch-friendly button sizes (py-3 padding)

#### Potential Issues
- Large hero text sizes may cause overflow on very small screens
- Some pricing table content requires horizontal scroll on mobile

---

### 6. Core Web Vitals Analysis (Score: 75/100)

*Note: This is a source code analysis, not field data from CrUX*

#### LCP (Largest Contentful Paint) Signals

| Factor | Finding | Impact |
|--------|---------|--------|
| Font preloading | 1 font preloaded (Inter) | POSITIVE |
| CSS inlined/external | External CSS with data-precedence | POSITIVE |
| JavaScript async | All scripts async loaded | POSITIVE |
| Image optimization | No visible img tags in source | NEUTRAL |
| Next.js cache | HIT (prerendered) | POSITIVE |

**Recommendation:** The page uses Server-Side Rendering (SSR) with static prerendering which is optimal for LCP.

#### INP (Interaction to Next Paint) Signals

| Factor | Finding | Impact |
|--------|---------|--------|
| JavaScript bundle | 11 async chunks | MONITOR |
| Event handlers | Standard React patterns | NEUTRAL |
| Third-party scripts | None detected in head | POSITIVE |

#### CLS (Cumulative Layout Shift) Signals

| Factor | Finding | Impact |
|--------|---------|--------|
| Font display | woff2 preloaded | POSITIVE |
| Image dimensions | Unable to verify (no visible img) | UNKNOWN |
| Dynamic content | JavaScript-rendered sections | MONITOR |

---

### 7. Structured Data (Score: 88/100)

#### Homepage Schema

**Organization Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hyreel",
  "url": "https://hyreel.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "url": "https://hyreel.com/contact",
    "email": "support@hyreel.com"
  },
  "sameAs": [
    "https://twitter.com/hyreelapp",
    "https://instagram.com/hyreelapp",
    "https://tiktok.com/@hyreelapp",
    "https://youtube.com/@hyreelapp"
  ],
  "description": "AI-powered video generation app for creators and businesses."
}
```
**Status:** PASS

**WebSite Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Hyreel",
  "url": "https://hyreel.com"
}
```
**Status:** PASS - Missing SearchAction (recommended)

**FAQPage Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does photo-to-video AI work?",
      "acceptedAnswer": {...}
    },
    // 7 more FAQ items
  ]
}
```
**Status:** PASS - 8 FAQ items properly marked up

#### Blog Post Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Create Viral TikTok Videos from Photos",
  "description": "...",
  "url": "https://hyreel.com/blog/how-to-create-viral-tiktok-videos-from-photos",
  "datePublished": "2026-01-08T10:00:00Z",
  "author": {
    "@type": "Organization",
    "name": "Hyreel Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Hyreel",
    "url": "https://hyreel.com"
  }
}
```

| Field | Status | Issue |
|-------|--------|-------|
| datePublished | PASS | Present |
| dateModified | MISSING | Add for freshness signals |
| author | WARNING | Organization, not Person |
| image | MISSING | Required for Article schema |

#### Tools Pages Schema

**BreadcrumbList Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://hyreel.com/"},
    {"@type": "ListItem", "position": 2, "name": "Tools", "item": "https://hyreel.com/tools"},
    {"@type": "ListItem", "position": 3, "name": "AI Script Generator", "item": "https://hyreel.com/tools/ai-script-generator"}
  ]
}
```
**Status:** PASS

#### Missing Schema Opportunities

| Page Type | Recommended Schema | Priority |
|-----------|-------------------|----------|
| Pricing | Product/Offer | HIGH |
| Tools | SoftwareApplication | MEDIUM |
| About | AboutPage | LOW |
| Blog | BlogPosting (instead of Article) | LOW |

---

### 8. JavaScript Rendering (Score: 90/100)

#### Framework Detection
- **Framework:** Next.js (detected via x-nextjs-cache, turbopack chunks)
- **Rendering:** Server-Side Rendering (SSR) with Static Site Generation (SSG)
- **Cache Status:** HIT (prerendered pages)

#### JavaScript Analysis

| Metric | Value | Status |
|--------|-------|--------|
| Script chunks | 11 | ACCEPTABLE |
| Async loading | All async | OPTIMAL |
| Turbopack | Enabled | OPTIMAL |
| Bundle splitting | Yes | OPTIMAL |

**Key Scripts Detected:**
```
/_next/static/chunks/turbopack-70c4e1e24d1ad05e.js
/_next/static/chunks/[hash].js (multiple chunks)
```

**Verdict:** The site uses modern SSR/SSG which ensures content is crawlable without JavaScript execution. This is optimal for both traditional search engines and AI crawlers.

---

### 9. E-E-A-T Signals (Score: 65/100)

#### Experience
| Signal | Finding | Score |
|--------|---------|-------|
| Customer stats | 240,909+ videos, 14,258+ creators | GOOD |
| Founded date | 2023 | GOOD |
| Social proof | Video examples shown | GOOD |

#### Expertise
| Signal | Finding | Score |
|--------|---------|-------|
| Blog content | 15 educational articles | GOOD |
| Author attribution | "Hyreel Team" (not individuals) | NEEDS WORK |
| Technical depth | Good how-to content | GOOD |

#### Authoritativeness
| Signal | Finding | Score |
|--------|---------|-------|
| Social profiles | 4 platforms linked | GOOD |
| Contact info | Email + contact page | GOOD |
| About page | Company story present | GOOD |

#### Trustworthiness
| Signal | Finding | Score |
|--------|---------|-------|
| HTTPS | Enforced | EXCELLENT |
| Privacy policy | /privacy exists | GOOD |
| Terms of service | /terms exists | GOOD |
| Pricing transparency | Clear pricing page | EXCELLENT |
| Refund policy | 14-day money-back mentioned | GOOD |

---

### 10. AI Search Readiness / Citability (Score: 70/100)

#### Content Citability Analysis

**Positive Signals:**
- Clear, factual statements in content
- Structured FAQs with definitive answers
- Specific pricing information ($0, $39, $99)
- Quantified claims (32 languages, 100+ templates, 50+ voices)
- Step-by-step how-to content in blog

**Areas for Improvement:**
- Add dateModified to articles for freshness
- Include author bios with expertise credentials
- Add more original research/statistics
- Include case studies with specific results

#### AI Crawler Access

| Crawler | Access | Notes |
|---------|--------|-------|
| ClaudeBot | BLOCKED | robots.txt disallow |
| GPTBot | BLOCKED | robots.txt disallow |
| Perplexity | ALLOWED | Not explicitly blocked |
| Traditional Googlebot | ALLOWED | Full access |

**Content-Signal Header:** `search=yes, ai-train=no`

This configuration allows search indexing but prevents AI training, which is a balanced approach for citation without data harvesting.

---

## Open Graph & Social Sharing (Score: 60/100)

#### Current Implementation

```html
<meta property="og:title" content="Hyreel - AI Video Generation App"/>
<meta property="og:description" content="Create viral videos in minutes with AI"/>
<meta property="og:site_name" content="Hyreel"/>
<meta property="og:locale" content="en_US"/>
<meta property="og:type" content="website"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Hyreel - AI Video Generation App"/>
<meta name="twitter:description" content="Create viral videos in minutes with AI"/>
```

#### Missing Elements

| Element | Status | Priority |
|---------|--------|----------|
| og:image | MISSING | CRITICAL |
| og:url | MISSING | HIGH |
| twitter:image | MISSING | CRITICAL |
| og:image:width | MISSING | MEDIUM |
| og:image:height | MISSING | MEDIUM |
| og:image:alt | MISSING | MEDIUM |

---

## Internal Linking Analysis (Score: 80/100)

#### Homepage Internal Links

**Navigation Links:**
- /tools
- /templates
- /use-cases
- /industries
- /pricing
- /blog
- /contact

**Footer Links:**
- /tools
- /use-cases
- /pricing
- /blog
- /about
- /contact
- /alternatives/canva
- /alternatives/capcut
- /alternatives/runway
- /alternatives/synthesia
- /alternatives/pika-ai
- /privacy
- /terms

**Issues:**
- No links to /for/ audience pages from homepage
- No links to /platforms/ pages from homepage
- No links to /solutions/ pages from homepage
- Only 5 of 10 alternatives linked in footer

---

## Issues Summary

### Critical Issues (Fix Immediately)

1. **37 Pages Missing from Sitemap**
   - Impact: Google may not discover ~37% of pages
   - Fix: Add /templates/, /industries/, /for/, /platforms/, /solutions/ to sitemap.xml

2. **Missing Canonical Tags on Key Pages**
   - Affected: Homepage, blog posts, use-cases
   - Impact: Potential duplicate content issues
   - Fix: Add `<link rel="canonical">` to all pages

3. **Missing OG:image on All Pages**
   - Impact: Poor social sharing appearance, no images in shares
   - Fix: Add og:image with 1200x630px recommended size

4. **Missing Article Images in Schema**
   - Impact: Blog posts won't qualify for rich results
   - Fix: Add image property to Article schema

### High Priority Issues

5. **No dateModified in Article Schema**
   - Impact: Reduced freshness signals
   - Fix: Add dateModified to all blog articles

6. **Author Attribution Not Personal**
   - Impact: Weaker E-E-A-T signals
   - Fix: Consider adding individual author profiles

7. **Missing Alternatives Index Page**
   - /alternatives returns 404
   - Impact: Broken navigation, wasted crawl budget
   - Fix: Create /alternatives index page or remove from breadcrumbs

8. **Missing SearchAction in WebSite Schema**
   - Impact: No sitelinks search box eligibility
   - Fix: Add SearchAction to WebSite schema

9. **No SoftwareApplication Schema on Tools**
   - Impact: Missing rich result opportunities
   - Fix: Add SoftwareApplication schema to tool pages

10. **Pricing Page Missing Product/Offer Schema**
    - Impact: No pricing rich results
    - Fix: Add Product schema with Offer for each plan

### Medium Priority Issues

11. **Keywords Meta Tag Present (Deprecated)**
    - No SEO value, can be removed

12. **Missing Content-Security-Policy Header**
    - Security improvement opportunity

13. **Blog Author is Organization, Not Person**
    - Add Person schema with credentials

14. **Limited Internal Linking to New Sections**
    - /for/, /platforms/, /solutions/ poorly linked

15. **Pricing Table Mobile Usability**
    - Horizontal scroll required on mobile

16. **Missing og:url Meta Tag**
    - Add to improve Open Graph accuracy

17. **No Image Alt Text Verification Possible**
    - Need to verify image accessibility

18. **WebSite Schema Missing potentialAction**
    - Add for search box eligibility

### Low Priority Issues

19. **No hreflang Tags (if international)**
    - Only needed if targeting multiple languages

20. **No structured data on About page**
    - Add AboutPage schema

21. **Consider BlogPosting Instead of Article**
    - More specific schema for blog content

22. **Social Profiles May Need Verification**
    - Ensure linked profiles are active

23. **Large Text on Small Screens**
    - Test hero section on <320px screens

---

## Quick Wins (Can Implement Today)

### 1. Fix Sitemap (30 minutes)
Add missing URLs to sitemap.xml:
```xml
<!-- Templates -->
<url><loc>https://hyreel.com/templates</loc></url>
<url><loc>https://hyreel.com/templates/tiktok-video-templates</loc></url>
<!-- ... 9 more -->

<!-- Industries -->
<url><loc>https://hyreel.com/industries</loc></url>
<url><loc>https://hyreel.com/industries/e-commerce</loc></url>
<!-- ... 7 more -->

<!-- For/Audience -->
<url><loc>https://hyreel.com/for</loc></url>
<url><loc>https://hyreel.com/for/creators</loc></url>
<!-- ... 7 more -->

<!-- Platforms -->
<url><loc>https://hyreel.com/platforms</loc></url>
<url><loc>https://hyreel.com/platforms/tiktok</loc></url>
<!-- ... 5 more -->

<!-- Solutions -->
<url><loc>https://hyreel.com/solutions</loc></url>
<url><loc>https://hyreel.com/solutions/viral-videos</loc></url>
<!-- ... 4 more -->
```

### 2. Add Canonical Tags (1 hour)
Add to layout or page templates:
```html
<link rel="canonical" href="https://hyreel.com{pathname}"/>
```

### 3. Add OG:image (1 hour)
```html
<meta property="og:image" content="https://hyreel.com/og-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Hyreel - AI Video Generation App"/>
<meta name="twitter:image" content="https://hyreel.com/og-image.jpg"/>
```

### 4. Add dateModified to Articles (30 minutes)
Update Article schema:
```json
{
  "@type": "Article",
  "datePublished": "2026-01-08T10:00:00Z",
  "dateModified": "2026-04-01T10:00:00Z"
}
```

### 5. Remove Keywords Meta Tag (5 minutes)
Remove from all pages:
```html
<!-- Remove this line -->
<meta name="keywords" content="..."/>
```

---

## Prioritized Action Plan

### Week 1: Critical Fixes
- [ ] Update sitemap.xml with all 37 missing pages
- [ ] Implement canonical tags site-wide
- [ ] Create and add OG images to all pages
- [ ] Add image property to Article schema

### Week 2: High Priority
- [ ] Add dateModified to all articles
- [ ] Create /alternatives index page
- [ ] Add SearchAction to WebSite schema
- [ ] Implement SoftwareApplication schema on tools

### Week 3: Medium Priority
- [ ] Add Product/Offer schema to pricing
- [ ] Improve internal linking to /for/, /platforms/, /solutions/
- [ ] Add Content-Security-Policy header
- [ ] Create author profiles with bios

### Week 4: Polish
- [ ] Audit and fix mobile usability issues
- [ ] Test all social sharing
- [ ] Remove deprecated meta tags
- [ ] Add AboutPage schema

---

## Technical Specifications

### Server Configuration
- **Hosting:** Cloudflare (detected via cf-ray header)
- **CDN:** Cloudflare
- **Framework:** Next.js with Turbopack
- **Cache:** Static prerendering enabled (x-nextjs-prerender: 1)
- **Cache TTL:** 1 year (s-maxage=31536000)

### Page Performance Indicators
- **Prerendering:** Enabled (x-nextjs-cache: HIT)
- **Stale Time:** 300 seconds
- **Font Loading:** Preloaded woff2
- **CSS Loading:** Single external stylesheet with data-precedence

### Security Configuration
- **HTTPS:** Enforced
- **HSTS:** Enabled with preload (2-year max-age)
- **Frame Protection:** DENY
- **MIME Sniffing:** Blocked
- **Referrer:** strict-origin-when-cross-origin

---

## Appendix: Full Sitemap URLs (64 indexed)

### Static Pages (9)
1. https://hyreel.com
2. https://hyreel.com/tools
3. https://hyreel.com/use-cases
4. https://hyreel.com/blog
5. https://hyreel.com/pricing
6. https://hyreel.com/about
7. https://hyreel.com/contact
8. https://hyreel.com/privacy
9. https://hyreel.com/terms

### Tools (20)
10-29. /tools/ai-script-generator, ai-voice-generator, ai-avatar-creator, etc.

### Alternatives (10)
30-39. /alternatives/canva, synthesia, runway, capcut, luma-ai, pika-ai, heygen, invideo-ai, pictory, fliki

### Use Cases (10)
40-49. /use-cases/product-videos-for-ecommerce, tiktok-content-creation, etc.

### Blog (15)
50-64. /blog/how-to-create-viral-tiktok-videos-from-photos, etc.

---

## Report Generated

- **Date:** April 6, 2026
- **Tool:** Manual Technical SEO Audit
- **Next Audit Recommended:** May 6, 2026 (after fixes implemented)
