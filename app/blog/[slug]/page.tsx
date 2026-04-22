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
import { generateAlternates } from "@/lib/seo/alternates";

const APP_STORE_URL = "https://apps.apple.com/us/app/sorovi-ai-photo-to-video/id6746805170";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found - Hyreel Blog",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: generateAlternates(`/blog/${post.slug}`),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug);
  const relatedTools = post.relatedTools
    .map((toolSlug) => getToolBySlug(toolSlug))
    .filter((tool) => tool !== undefined);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.metaDescription,
    url: `/blog/${post.slug}`,
    publishedAt: post.publishedAt,
    author: post.author,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
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
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Breadcrumb Navigation */}
      <Section spacing="sm" className="border-b border-[var(--border-color)]">
        <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">
            Home
          </Link>
          <svg
            className="w-3 h-3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/blog" className="hover:text-[var(--text-primary)] transition-colors">
            Blog
          </Link>
          <svg
            className="w-3 h-3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-[var(--text-secondary)] line-clamp-1">
            {post.title}
          </span>
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
              {post.readingTime} min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-base text-[var(--text-muted)]">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
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
              Related Tools
            </Heading>
            <Text variant="body" className="text-center mb-8">
              Try these AI tools mentioned in this article
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTools.map((tool) => (
                <Link key={tool.slug} href={`/tools/${tool.slug}`}>
                  <Card
                    variant="elevated"
                    className="group cursor-pointer h-full hover:border-[var(--brand-primary)]/30 transition-all"
                  >
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
              Related Articles
            </Heading>
            <Text variant="body" className="text-center mb-8">
              Continue reading about AI video creation
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                >
                  <Card
                    variant="elevated"
                    className="group cursor-pointer h-full flex flex-col hover:border-[var(--brand-primary)]/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="primary">{relatedPost.category}</Badge>
                      <span className="text-xs text-[var(--text-muted)]">
                        {relatedPost.readingTime} min
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <Text variant="small" className="line-clamp-2 flex-grow">
                      {relatedPost.excerpt}
                    </Text>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section
        spacing="xl"
        className="bg-[var(--surface-light)]"
      >
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            Ready to Create Amazing Videos?
          </Heading>
          <Text variant="large" className="mb-8">
            Start transforming your photos into stunning AI-generated videos
            today.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg">Start Creating Free</Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="secondary">
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
