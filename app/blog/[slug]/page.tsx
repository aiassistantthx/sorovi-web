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
      title: "Post Not Found - Sorovi Blog",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
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
      <Section spacing="sm" className="border-b border-white/5">
        <nav className="flex items-center gap-2 text-sm text-[var(--text-gray-500)]">
          <Link href="/" className="hover:text-white transition-colors">
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
          <Link href="/blog" className="hover:text-white transition-colors">
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
          <span className="text-[var(--text-gray-300)] line-clamp-1">
            {post.title}
          </span>
        </nav>
      </Section>

      {/* Article Header */}
      <Section spacing="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Badge variant="primary">{post.category}</Badge>
            <span className="text-sm text-[var(--text-gray-500)]">
              {post.readingTime} min read
            </span>
          </div>

          <Heading as="h1" className="mb-6">
            {post.title}
          </Heading>

          <div className="flex items-center justify-center gap-4 text-sm text-[var(--text-gray-500)]">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-gray-500)]" />
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

      {/* Article Content */}
      <Section spacing="lg" containerSize="md">
        <article className="max-w-3xl mx-auto">
          <MarkdownRenderer content={post.content} />
        </article>
      </Section>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <Section spacing="lg" className="bg-[var(--surface-dark)]/30">
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
                    variant="glass"
                    className="group cursor-pointer h-full hover:border-[var(--brand-primary)]/50 transition-all"
                  >
                    <div className="text-3xl mb-3">{tool.icon}</div>
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
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
                    variant="glass"
                    className="group cursor-pointer h-full flex flex-col hover:border-[var(--brand-primary)]/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="primary">{relatedPost.category}</Badge>
                      <span className="text-xs text-[var(--text-gray-500)]">
                        {relatedPost.readingTime} min
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
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
        className="bg-gradient-to-b from-transparent via-[var(--surface-dark)]/30 to-transparent"
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
            <Button size="lg">Start Creating Free</Button>
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
