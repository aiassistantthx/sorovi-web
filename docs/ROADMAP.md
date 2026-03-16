# Sorovi Web - Daily Development Roadmap

## Current State (March 2026)
- **66 total pages** deployed
- 19 tool pages, 10 alternative pages, 10 use-case pages, 15 blog posts
- SEO infrastructure: sitemap.xml, robots.txt, JSON-LD schemas, breadcrumbs
- Full navigation and footer with internal linking

## Target State
- **200+ pages** for comprehensive SEO coverage
- 100 tool pages, 30 alternative pages, 50 use-case pages, 50 blog posts

---

## Daily Tasks

### Priority 1: Add 2-3 Tool Pages Per Day

Add new tools to `lib/tools.ts` following the existing `Tool` interface. Each needs: slug, name, tagline, description, detailedDescription, icon, category, howItWorks[4], features[6], benefits[5], useCases[5], pricing, faqs[4].

**Suggested tools to add (by category):**

#### Video Generation
- ai-text-to-video, ai-slideshow-maker, ai-music-video-creator, ai-video-enhancer, ai-video-upscaler, ai-slow-motion-video, ai-time-lapse-creator, ai-video-background-remover

#### Social Media
- ai-pinterest-video-maker, ai-facebook-video-creator, ai-linkedin-video-maker, ai-twitter-video-creator, ai-snapchat-video-maker

#### E-commerce
- ai-amazon-product-video, ai-shopify-video-maker, ai-etsy-video-creator, ai-alibaba-product-video, ai-product-demo-creator

#### Content Creation
- ai-tutorial-video-maker, ai-review-video-generator, ai-news-video-creator, ai-podcast-video-maker, ai-presentation-to-video

#### Effects
- ai-slow-zoom-effect, ai-pan-video-effect, ai-tilt-shift-effect, ai-bokeh-video-effect, ai-split-screen-video, ai-before-after-video

#### Audio
- ai-background-music-generator, ai-sound-effects-creator, ai-audio-enhancer, ai-podcast-generator

### Priority 2: Add 1-2 Blog Posts Per Day

Add new posts to `lib/blog.ts` following the `BlogPost` interface. Each needs: slug, title, metaTitle, metaDescription, excerpt, content (500-600 words markdown), author, publishedAt, category, tags, readingTime, relatedTools, relatedPosts.

**Categories to cover:**
- Tutorial: step-by-step how-to guides
- Guide: comprehensive strategy guides
- Tips & Tricks: quick actionable tips
- Case Study: success stories with metrics
- Industry News: AI video industry trends
- Comparison: tool/platform comparisons

**Suggested blog topics:**
- how-to-create-product-videos-for-amazon
- best-ai-tools-for-real-estate-agents
- ai-video-marketing-for-small-business
- how-to-repurpose-photos-into-video-content
- social-media-video-trends-2026
- ai-video-for-restaurants-and-food-brands
- creating-faceless-youtube-channels-with-ai
- tiktok-algorithm-tips-for-ai-content
- instagram-reels-vs-tiktok-for-business
- ai-video-effects-comparison-zoom-vs-orbit
- how-to-batch-create-social-media-videos
- product-photography-to-video-conversion-guide
- ai-video-for-dropshipping-stores
- linkedin-video-marketing-with-ai
- ai-video-for-fitness-and-wellness-brands
- how-agencies-use-ai-video-at-scale
- pinterest-video-pins-guide
- ai-video-for-automotive-dealers
- fashion-lookbook-video-creation
- ai-video-seo-optimization-guide

### Priority 3: Add 1-2 Use Case Pages Per Day

Add to `lib/use-cases.ts` following the `UseCase` interface.

**Suggested use cases:**
- automotive-dealer-videos
- fitness-and-wellness-marketing
- travel-and-tourism-videos
- education-and-online-courses
- nonprofit-fundraising-videos
- healthcare-marketing
- beauty-and-cosmetics-brand
- home-decor-and-furniture
- tech-product-launches
- sports-and-athletics
- wedding-and-events
- music-and-entertainment
- pet-brand-marketing
- b2b-saas-marketing
- freelancer-portfolio-videos

### Priority 4: Add 1 Alternative Page Per Day

Add to `lib/alternatives.ts` following the `Alternative` interface.

**Suggested alternatives:**
- adobe-premiere, filmora, animoto, veed, flexclip, promo, biteable, renderforest, powtoon, descript, opus-clip, vidnoz, steve-ai, deepbrain, elai-io, colossyan, visla, rawshorts, lumen5, wave-video

### Priority 5: Cross-Linking and SEO

- Add `RelatedContent` component to pages that lack it
- Ensure every blog post references 2-3 tools and 2-3 other posts
- Ensure every use case references 3-4 tools
- Update sitemap.ts if new page types are added
- Optimize meta titles/descriptions based on keyword research

---

## File Reference

| File | What to Edit |
|------|-------------|
| `lib/tools.ts` | Add new tools to the `tools` array |
| `lib/alternatives.ts` | Add new alternatives to the `alternatives` array |
| `lib/use-cases.ts` | Add new use cases to the `useCases` array |
| `lib/blog.ts` | Add new blog posts to the `blogPosts` array |
| `app/sitemap.ts` | Auto-generates from all data files |
| `components/layouts/footer.tsx` | Update footer links as content grows |

## Verification After Each Session

1. `npm run build` - must pass with zero errors
2. Check the build output shows all new pages
3. Verify sitemap includes new URLs
