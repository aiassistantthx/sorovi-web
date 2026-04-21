import { notFound } from "next/navigation";
import Link from "next/link";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MarkdownRenderer } from "@/components/blog/markdown-renderer";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { getToolBySlug } from "@/lib/tools";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
import { getLocalizedBlogContent } from "@/lib/i18n/content/blog";

const SITE_URL = "https://hyreel.com";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];

  for (const locale of i18n.locales) {
    if (locale === i18n.defaultLocale) continue;
    for (const post of blogPosts) {
      params.push({ lang: locale, slug: post.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || !i18n.locales.includes(lang as Locale)) {
    return { title: "Not Found" };
  }

  const localizedContent = getLocalizedBlogContent(slug, lang as Locale);
  const metaTitle = localizedContent?.metaTitle || post.metaTitle;
  const metaDescription = localizedContent?.metaDescription || post.metaDescription;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${lang}/blog/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/blog/${slug}`
            : `${SITE_URL}/${locale}/blog/${slug}`,
        ])
      ),
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      images: ["/og-image.png"],
    },
  };
}

export default async function LocalizedBlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const t = getTranslations(lang as Locale);
  const relatedPosts = getRelatedPosts(post.slug);
  const relatedTools = post.relatedTools
    .map((toolSlug) => getToolBySlug(toolSlug))
    .filter((tool) => tool !== undefined);

  const localizedContent = getLocalizedBlogContent(slug, lang as Locale);
  const title = localizedContent?.title || post.title;
  const excerpt = localizedContent?.excerpt || post.excerpt;

  const articleSchema = generateArticleSchema({
    title: title,
    description: localizedContent?.metaDescription || post.metaDescription,
    url: `/${lang}/blog/${post.slug}`,
    publishedAt: post.publishedAt,
    author: post.author,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t.home, url: `/${lang}` },
    { name: t.blog, url: `/${lang}/blog` },
    { name: title, url: `/${lang}/blog/${post.slug}` },
  ]);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <Section spacing="sm" className="border-b border-[var(--border-color)]">
        <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <Link href={`/${lang}`} className="hover:text-[var(--text-primary)] transition-colors">
            {t.home}
          </Link>
          <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5l7 7-7 7" />
          </svg>
          <Link href={`/${lang}/blog`} className="hover:text-[var(--text-primary)] transition-colors">
            {t.blog}
          </Link>
          <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-[var(--text-secondary)] line-clamp-1">{title}</span>
        </nav>
      </Section>

      {/* Article Header */}
      <Section spacing="xl" className="relative overflow-hidden pb-0 md:pb-0">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Badge variant="primary">{post.category}</Badge>
            <span className="text-sm text-[var(--text-muted)]">
              {post.readingTime} {t.minRead}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-8">
            {title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-base text-[var(--text-muted)]">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        </div>
      </Section>

      {/* Divider */}
      <div className="max-w-xl mx-auto px-6">
        <div className="border-t border-[var(--border-color)] my-10 md:my-14" />
      </div>

      {/* Article Content */}
      <Section spacing="lg" containerSize="md" className="pt-0 md:pt-0">
        <article className="max-w-[680px] mx-auto">
          <MarkdownRenderer content={post.content} />
        </article>
      </Section>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <Section spacing="lg" className="bg-[var(--surface-light)]">
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" className="mb-2 text-center">
              {t.relatedTools}
            </Heading>
            <Text variant="body" className="text-center mb-8">
              {t.tryTheseTools}
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTools.map((tool) => (
                <Link key={tool.slug} href={`/${lang}/tools/${tool.slug}`}>
                  <Card variant="elevated" className="group cursor-pointer h-full hover:border-[var(--brand-primary)]/30 transition-all">
                    <div className="text-3xl mb-3">{tool.icon}</div>
                    <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                      {tool.name}
                    </h3>
                    <Text variant="small" className="line-clamp-2">
                      {tool.tagline}
                    </Text>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section spacing="lg">
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" className="mb-2 text-center">
              {t.relatedArticles}
            </Heading>
            <Text variant="body" className="text-center mb-8">
              {t.continueReading}
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => {
                const relatedLocalizedContent = getLocalizedBlogContent(relatedPost.slug, lang as Locale);
                const relatedTitle = relatedLocalizedContent?.title || relatedPost.title;
                const relatedExcerpt = relatedLocalizedContent?.excerpt || relatedPost.excerpt;
                return (
                <Link key={relatedPost.slug} href={`/${lang}/blog/${relatedPost.slug}`}>
                  <Card variant="elevated" className="group cursor-pointer h-full flex flex-col hover:border-[var(--brand-primary)]/30 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="primary">{relatedPost.category}</Badge>
                      <span className="text-xs text-[var(--text-muted)]">
                        {relatedPost.readingTime} min
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
                      {relatedTitle}
                    </h3>
                    <Text variant="small" className="line-clamp-2 flex-grow">
                      {relatedExcerpt}
                    </Text>
                  </Card>
                </Link>
              );
              })}
            </div>
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            {t.readyToCreate}
          </Heading>
          <Text variant="large" className="mb-8">
            {t.startTransforming}
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">{t.startCreatingFree}</Button>
            <Link href={`/${lang}/blog`}>
              <Button size="lg" variant="secondary">
                {t.backToBlog}
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
