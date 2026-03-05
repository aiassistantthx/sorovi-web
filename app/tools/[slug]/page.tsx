import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";
import { tools, getToolBySlug, type Tool } from "@/lib/tools";

// Generate static params for all tools
export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool Not Found - Sorovi",
    };
  }

  return {
    title: `${tool.name} - ${tool.tagline} | Sorovi`,
    description: tool.description,
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="text-center">
          {/* Category Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 mb-6">
            <span className="text-sm font-medium text-[var(--brand-primary)]">
              {tool.icon} {tool.category}
            </span>
          </div>

          <Heading as="h1" gradient className="mb-4">
            {tool.name}
          </Heading>

          <Text variant="large" className="mb-8">
            {tool.description}
          </Text>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Try It Free</Button>
            <Link href="/pricing">
              <Button size="lg" variant="secondary">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Detailed Description */}
      <Section spacing="lg" className="bg-[var(--surface-dark)]/30">
        <div className="max-w-4xl mx-auto">
          <Text variant="large" className="text-center leading-relaxed">
            {tool.detailedDescription}
          </Text>
        </div>
      </Section>

      {/* How It Works */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            How It Works
          </Heading>
          <Text variant="large">
            {tool.name} in 4 simple steps
          </Text>
        </div>

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
              <h3 className="text-xl font-semibold text-white mb-3">
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
            <Card key={index} variant="glass">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <Text variant="small">{feature.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefits & Use Cases */}
      <Section spacing="xl" className="bg-[var(--surface-dark)]/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div>
            <Heading as="h2" className="mb-6">
              Why Use {tool.name}?
            </Heading>
            <ul className="space-y-4">
              {tool.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[var(--brand-primary)] flex-shrink-0 mt-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--text-gray-100)]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <Heading as="h2" className="mb-6">
              Perfect For
            </Heading>
            <ul className="space-y-4">
              {tool.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[var(--accent-green)] flex-shrink-0 mt-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg text-[var(--text-gray-100)]">
                    {useCase}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Why Choose This Tool */}
      <Section spacing="xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Why {tool.name} is Essential for Content Creators
            </Heading>
            <Text variant="large">
              Discover how this tool transforms your video creation workflow
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Save Time & Resources
                </h3>
                <Text variant="small" className="leading-relaxed">
                  What used to take hours now takes minutes. {tool.name} automates the most time-consuming
                  parts of video production, allowing you to focus on creativity and strategy. Whether you're
                  a solo creator or managing a team, you'll dramatically increase your content output without
                  compromising quality.
                </Text>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Professional Quality
                </h3>
                <Text variant="small" className="leading-relaxed">
                  Get studio-grade results without the studio-grade price tag. Our advanced AI technology
                  delivers professional-quality output that rivals content created by experienced teams with
                  expensive equipment. Every aspect is optimized for engagement and viewer retention.
                </Text>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Scale Your Content
                </h3>
                <Text variant="small" className="leading-relaxed">
                  Create multiple videos per day across different platforms and formats. {tool.name} makes it
                  easy to maintain a consistent posting schedule, test different content styles, and reach
                  broader audiences. Perfect for content creators, marketers, and businesses looking to expand
                  their digital presence.
                </Text>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Always Improving
                </h3>
                <Text variant="small" className="leading-relaxed">
                  Our AI models are continuously updated with the latest trends and best practices in video
                  content. You automatically benefit from improvements in quality, new features, and expanded
                  capabilities—keeping your content competitive and engaging.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section spacing="xl" className="bg-[var(--surface-dark)]/30">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Frequently Asked Questions
          </Heading>
          <Text variant="large">
            Everything you need to know about {tool.name}
          </Text>
        </div>

        <div className="max-w-6xl mx-auto">
          <Accordion items={tool.faqs} />
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="xl">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            Ready to Get Started?
          </Heading>
          <Text variant="large" className="mb-8">
            Join 14,258+ creators using Sorovi to create amazing videos
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Start Creating Free</Button>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
