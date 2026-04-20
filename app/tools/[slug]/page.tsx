import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { tools, getToolBySlug, type Tool } from "@/lib/tools";
import {
  generateBreadcrumbSchema,
  generateToolSchema,
  generateHowToSchema,
  generateVideoGallerySchema,
} from "@/lib/schema";
import { generateAlternates } from "@/lib/seo/alternates";

// Generate static params for all tools
export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool Not Found - Hyreel",
    };
  }

  return {
    title: tool.name,
    description: tool.description,
    alternates: generateAlternates(`/tools/${tool.slug}`),
    openGraph: {
      title: `${tool.name} — ${tool.tagline}`,
      description: tool.description,
      type: "website",
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${tool.name} — ${tool.tagline}`,
      description: tool.description,
      images: ["/og-image.png"],
    },
  };
}

// Video examples mapped to tool slugs
const toolVideos: Record<string, string[]> = {
  "ai-zoom-video-effect": ["/videos/tools/gen-ai-zoom-video-effect-1.mp4", "/videos/tools/gen-ai-zoom-video-effect-2.mp4", "/videos/tools/fp-zoom-3.mp4"],
  "ai-orbit-video-effect": ["/videos/tools/gen-ai-orbit-video-effect-1.mp4", "/videos/tools/gen-ai-orbit-video-effect-2.mp4", "/videos/tools/gen-ai-orbit-video-effect-3.mp4"],
  "ai-follow-video-effect": ["/videos/tools/gen-ai-follow-video-effect-1.mp4", "/videos/tools/gen-ai-follow-video-effect-2.mp4", "/videos/tools/gen-ai-follow-video-effect-3.mp4"],
  "ai-parallax-video-effect": ["/videos/tools/gen-ai-parallax-video-effect-1.mp4", "/videos/tools/gen-ai-parallax-video-effect-2.mp4", "/videos/tools/fp-pan-3.mp4"],
  "image-to-video-ai": ["/videos/tools/gen-image-to-video-ai-1.mp4", "/videos/tools/gen-image-to-video-ai-2.mp4", "/videos/tools/gen-image-to-video-ai-3.mp4"],
  "ai-video-from-image": ["/videos/tools/gen-ai-video-from-image-1.mp4", "/videos/tools/gen-image-to-video-ai-2.mp4", "/videos/tools/gen-image-to-video-ai-3.mp4"],
  "ai-video-generator-app": ["/videos/tools/gen-image-to-video-ai-1.mp4", "/videos/tools/gen-ai-follow-video-effect-1.mp4", "/videos/tools/gen-ai-orbit-video-effect-1.mp4"],
  "ai-short-video-maker": ["/videos/tools/gen-ai-short-video-maker-1.mp4", "/videos/tools/gen-ai-follow-video-effect-3.mp4", "/videos/tools/gen-ai-zoom-video-effect-1.mp4"],
  "ai-tiktok-video-generator": ["/videos/tools/gen-ai-tiktok-video-generator-1.mp4", "/videos/tools/gen-ai-tiktok-video-generator-2.mp4", "/videos/tools/gen-ai-instagram-reels-maker-1.mp4"],
  "ai-instagram-reels-maker": ["/videos/tools/gen-ai-instagram-reels-maker-1.mp4", "/videos/tools/gen-ai-tiktok-video-generator-1.mp4", "/videos/tools/gen-ai-social-media-video-maker-1.mp4"],
  "ai-youtube-shorts-generator": ["/videos/tools/gen-ai-youtube-shorts-generator-1.mp4", "/videos/tools/gen-ai-youtube-shorts-generator-2.mp4", "/videos/tools/gen-ai-youtube-shorts-generator-3.mp4"],
  "ai-social-media-video-maker": ["/videos/tools/gen-ai-social-media-video-maker-1.mp4", "/videos/tools/gen-ai-tiktok-video-generator-1.mp4", "/videos/tools/gen-ai-instagram-reels-maker-1.mp4"],
  "ai-faceless-video-generator": ["/videos/tools/gen-ai-faceless-video-generator-1.mp4", "/videos/tools/gen-ai-faceless-video-generator-2.mp4", "/videos/tools/gen-ai-script-generator-1.mp4"],
  "ai-product-video-maker": ["/videos/tools/gen-ai-product-video-maker-1.mp4", "/videos/tools/gen-ai-product-video-maker-2.mp4", "/videos/tools/gen-ai-ecommerce-video-creator-1.mp4"],
  "ai-ecommerce-video-creator": ["/videos/tools/gen-ai-ecommerce-video-creator-1.mp4", "/videos/tools/gen-ai-ecommerce-video-creator-2.mp4", "/videos/tools/gen-ai-product-video-maker-1.mp4"],
  "ai-photo-animation": ["/videos/tools/gen-ai-photo-animation-1.mp4", "/videos/tools/gen-ai-photo-animation-2.mp4", "/videos/tools/gen-ai-parallax-video-effect-1.mp4"],
  "ai-3d-photo-video": ["/videos/tools/gen-ai-3d-photo-video-1.mp4", "/videos/tools/gen-ai-3d-photo-video-2.mp4", "/videos/tools/gen-ai-orbit-video-effect-2.mp4"],
  "ai-script-generator": ["/videos/tools/gen-ai-script-generator-1.mp4", "/videos/tools/gen-ai-faceless-video-generator-1.mp4", "/videos/tools/gen-ai-voice-generator-1.mp4"],
  "ai-voice-generator": ["/videos/tools/gen-ai-voice-generator-1.mp4", "/videos/tools/gen-ai-voice-generator-2.mp4", "/videos/tools/gen-ai-voice-generator-3.mp4"],
  "ai-avatar-creator": ["/videos/tools/gen-ai-avatar-creator-1.mp4", "/videos/tools/gen-ai-avatar-creator-2.mp4", "/videos/tools/gen-ai-follow-video-effect-2.mp4"],
};

function getRelatedTools(currentTool: Tool): Tool[] {
  // First try same category, then fill with other tools
  const sameCategory = tools.filter(
    (t) => t.category === currentTool.category && t.slug !== currentTool.slug
  );
  const otherTools = tools.filter(
    (t) => t.category !== currentTool.category && t.slug !== currentTool.slug
  );
  return [...sameCategory, ...otherTools].slice(0, 3);
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Tools", url: "/tools" },
    { name: tool.name, url: `/tools/${tool.slug}` },
  ]);
  const toolSchema = generateToolSchema({
    name: tool.name,
    description: tool.description,
    url: `/tools/${tool.slug}`,
  });
  const howToSchema = generateHowToSchema({
    name: `How to use ${tool.name}`,
    description: tool.description,
    steps: tool.howItWorks.map((step) => ({
      title: step.title,
      description: step.description,
    })),
    totalTime: "PT2M",
    tool: "Hyreel App",
  });
  const relatedTools = getRelatedTools(tool);
  const videos = toolVideos[tool.slug] || [];
  const videoGallerySchema = videos.length > 0 ? generateVideoGallerySchema({
    name: `${tool.name} Examples`,
    description: `Video examples created with ${tool.name}`,
    videos: videos.map((src, index) => ({
      name: `${tool.name} Example ${index + 1}`,
      description: `Example video created with ${tool.name} by Hyreel`,
      contentUrl: src,
    })),
  }) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {videoGallerySchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGallerySchema) }}
        />
      )}

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
              { label: "Tools", href: "/tools" },
              { label: tool.name },
            ]}
            className="justify-center mb-6"
          />
          {/* Category Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--brand-primary)]">
              {tool.icon} {tool.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-[var(--text-primary)] mb-4">
            {tool.name}
          </h1>

          <Text variant="large" className="mb-8 max-w-3xl mx-auto">
            {tool.description}
          </Text>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg">Try It Free</Button>
            <a href="#how-it-works">
              <Button size="lg" variant="secondary">
                See How It Works
              </Button>
            </a>
          </div>

          {/* Social Proof Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--accent-green)] border-2 border-white"
                  />
                ))}
              </div>
              <span>
                Loved by <strong className="text-[var(--text-primary)]">14,258+</strong>{" "}
                creators
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span>
                <strong className="text-[var(--text-primary)]">4.8</strong> on App Store
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Bar */}
      <Section
        spacing="sm"
        className="border-y border-[var(--border-color)] bg-[var(--surface-light)]"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: "240,909+", label: "Videos Created" },
            { value: "4.8 ★", label: "App Store Rating" },
            { value: "14,258+", label: "Active Creators" },
            { value: "< 30s", label: "Video Creation Time" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-1">
                {stat.value}
              </div>
              <Text variant="small" className="text-[var(--text-secondary)]">
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      {/* Video Examples */}
      {videos.length > 0 && (
        <Section spacing="xl">
          <div className="text-center mb-10">
            <Heading as="h2" className="mb-4">
              See It in Action
            </Heading>
            <Text variant="large">
              Real examples created with {tool.name}
            </Text>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {videos.map((src, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden bg-[var(--surface-light)] border border-[var(--border-color)] aspect-[9/16]"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Key Highlights */}
      <Section spacing="xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tool.benefits.slice(0, 3).map((benefit, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-[var(--surface-light)] border border-[var(--border-color)] hover:border-[var(--brand-primary)]/30 transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-4">
                <svg
                  className="w-5 h-5 text-[var(--brand-primary)]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section spacing="xl" id="how-it-works" className="bg-[var(--surface-light)]">
        <div className="text-center mb-4">
          <Heading as="h2" className="mb-4">
            How It Works
          </Heading>
          <Text variant="large">
            {tool.name} in {tool.howItWorks.length} simple steps
          </Text>
        </div>
        <p className="text-base text-[var(--text-secondary)] leading-relaxed text-center max-w-3xl mx-auto mb-10">
          {tool.detailedDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tool.howItWorks.map((step, index) => (
            <div key={index}>
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/30">
                  <span className="text-2xl font-bold text-[var(--brand-primary)]">
                    {step.step}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                {step.title}
              </h3>
              <Text variant="small">{step.description}</Text>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Features & Capabilities
          </Heading>
          <Text variant="large">
            Everything you need in one powerful tool
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tool.features.map((feature, index) => (
            <Card key={index} variant="elevated">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {feature.title}
              </h3>
              <Text variant="small">{feature.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Why Use {tool.name}?
          </Heading>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {tool.benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[var(--border-color)]"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/30 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[var(--accent-green)]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-base md:text-lg text-[var(--text-secondary)]">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Perfect For
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tool.useCases.map((useCase, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl bg-[var(--surface-light)] border border-[var(--border-color)]"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/30 flex items-center justify-center">
                <span className="text-sm font-bold text-[var(--brand-primary)]">
                  {index + 1}
                </span>
              </div>
              <span className="text-base text-[var(--text-secondary)] pt-1">
                {useCase}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Mid-page CTA */}
      <Section spacing="lg" className="bg-[var(--surface-light)]">
        <div className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[var(--brand-primary)]/10 to-[var(--accent-green)]/10 border border-[var(--brand-primary)]/20">
          <Heading as="h3" className="mb-4">
            Ready to try {tool.name}?
          </Heading>
          <Text variant="large" className="mb-6">
            Start creating videos for free — no credit card required
          </Text>
          <Button size="lg">Get Started Free</Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Frequently Asked Questions
          </Heading>
          <Text variant="large">
            Everything you need to know about {tool.name}
          </Text>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion items={tool.faqs} />
          <div className="text-center mt-8">
            <Text variant="small">
              Still have questions?{" "}
              <Link
                href="/contact"
                className="text-[var(--brand-primary)] hover:underline"
              >
                Contact support
              </Link>
            </Text>
          </div>
        </div>
      </Section>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <Section spacing="xl" className="bg-[var(--surface-light)]">
          <div className="text-center mb-10">
            <Heading as="h2" className="mb-4">
              Related Tools
            </Heading>
            <Text variant="large">
              Explore more AI video creation tools
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedTools.map((related) => (
              <Link
                key={related.slug}
                href={`/tools/${related.slug}`}
                className="block"
              >
                <Card variant="elevated">
                  <div className="text-3xl mb-3">{related.icon}</div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {related.name}
                  </h3>
                  <Text variant="small">{related.tagline}</Text>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/tools">
              <Button variant="secondary">View All Tools</Button>
            </Link>
          </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section spacing="xl">
        <div className="text-center">
          <Heading as="h2" className="mb-4">
            Start Creating with {tool.name}
          </Heading>
          <Text variant="large" className="mb-6">
            Download Hyreel and turn your photos into videos today
          </Text>

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-[var(--text-secondary)]">
              <strong className="text-[var(--text-primary)]">4.8</strong> rating · 14,258+
              creators
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link href="https://apps.apple.com/app/hyreel-ai-video-generator/id6738042296">
              <Button size="lg">Download for iOS</Button>
            </Link>
            <Button size="lg" variant="secondary">
              Android Coming Soon
            </Button>
          </div>

          <Text variant="small" className="text-[var(--text-muted)]">
            Free to start · No credit card required
          </Text>
        </div>
      </Section>
    </>
  );
}
