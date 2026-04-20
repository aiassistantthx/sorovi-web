import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BlogFilter } from "@/components/blog/blog-filter";
import { blogPosts, getAllBlogCategories } from "@/lib/blog";
import { generateAlternates } from "@/lib/seo/alternates";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Blog - AI Video Creation Tips, Guides & Tutorials | Hyreel",
  description:
    "Learn how to create stunning AI-generated videos. Tips, tutorials, and guides on photo-to-video AI, TikTok content, Instagram Reels, e-commerce video, and more.",
  alternates: generateAlternates("/blog"),
  openGraph: {
    title: "Hyreel Blog - AI Video Creation Tips & Tutorials",
    description:
      "Tips, tutorials, and guides on AI video creation for TikTok, Instagram, and more.",
    images: ["/og-image.png"],
  },
};

export default function BlogPage() {
  const categories = getAllBlogCategories();

  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog" },
            ]}
            className="justify-center mb-6"
          />
          <Heading as="h1" className="mb-6">
            Hyreel Blog
          </Heading>
          <Text variant="large" className="max-w-2xl mx-auto">
            Tips, tutorials, and guides to help you create better AI-generated
            videos. Stay up to date with the latest in AI video creation.
          </Text>
        </div>
      </Section>

      {/* Blog Posts */}
      <Section spacing="xl">
        <BlogFilter posts={sortedPosts} categories={categories} />
      </Section>
    </>
  );
}
