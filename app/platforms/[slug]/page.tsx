import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { platforms, getPlatformBySlug } from "@/lib/platforms";
import { getToolBySlug } from "@/lib/tools";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generateAlternates } from "@/lib/seo/alternates";
import { PageHero, PageFAQ, FinalCTA, RelatedContent } from "@/components/sections";

export async function generateStaticParams() {
  return platforms.map((platform) => ({ slug: platform.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform) {
    return { title: "Not Found - Hyreel" };
  }

  return {
    title: platform.metaTitle,
    description: platform.metaDescription,
    alternates: generateAlternates(`/platforms/${platform.slug}`),
  };
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform) {
    notFound();
  }

  const relatedTools = platform.relatedTools
    .map((toolSlug) => getToolBySlug(toolSlug))
    .filter(Boolean);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Platforms", url: "/platforms" },
    { name: platform.name, url: `/platforms/${platform.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Section spacing="sm" className="pb-0 md:pb-0">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Platforms", href: "/platforms" },
            { label: platform.name },
          ]}
        />
      </Section>

      <PageHero
        badge={{ icon: platform.icon, text: platform.name }}
        title={platform.heroHeadline}
        description={platform.heroSubheadline}
        primaryCta={{ text: platform.ctaText }}
        secondaryCta={{ text: "All Platforms", href: "/platforms" }}
      />

      <Section spacing="lg" className="border-y border-[var(--border-color)] bg-[var(--surface-light)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {platform.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-1">
                {stat.value}
              </div>
              <Text variant="small" className="text-[var(--text-secondary)]">
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Optimized for {platform.name}
          </Heading>
          <Text variant="large">
            Features designed for {platform.name} success
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {platform.features.map((feature, index) => (
            <Card key={index} variant="elevated">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {feature.title}
              </h3>
              <Text variant="small">{feature.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <Heading as="h2" className="mb-6">
              {platform.name} Specs
            </Heading>
            <Card variant="elevated">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-[var(--border-color)]">
                  <span className="text-[var(--text-secondary)]">Aspect Ratio</span>
                  <span className="font-semibold text-[var(--text-primary)]">{platform.specs.aspectRatio}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[var(--border-color)]">
                  <span className="text-[var(--text-secondary)]">Duration</span>
                  <span className="font-semibold text-[var(--text-primary)]">{platform.specs.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[var(--text-secondary)]">Resolution</span>
                  <span className="font-semibold text-[var(--text-primary)]">{platform.specs.resolution}</span>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Heading as="h2" className="mb-6">
              Best Practices
            </Heading>
            <ul className="space-y-3">
              {platform.bestPractices.map((practice, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--brand-primary)] flex-shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text-secondary)]">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Content Ideas for {platform.name}
          </Heading>
          <Text variant="large">
            Popular content types that perform well
          </Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {platform.contentTypes.map((type, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-[var(--surface-light)] border border-[var(--border-color)]"
            >
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                {type.title}
              </h3>
              <Text variant="small">{type.description}</Text>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Algorithm Tips
          </Heading>
          <Text variant="large">
            How to get {platform.name} to promote your content
          </Text>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card variant="elevated">
            <ul className="space-y-4">
              {platform.algorithmTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-primary)] text-white text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-[var(--text-secondary)]">{tip}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {relatedTools.length > 0 && (
        <RelatedContent
          title="Recommended Tools"
          subtitle={`The best Hyreel tools for ${platform.name}`}
          items={relatedTools.map((tool) => ({
            title: tool!.name,
            description: tool!.tagline,
            href: `/tools/${tool!.slug}`,
            icon: tool!.icon,
          }))}
          ctaText="Try It Free"
          variant="default"
          columns={4}
        />
      )}

      <PageFAQ
        title="Frequently Asked Questions"
        description={`Common questions about Hyreel for ${platform.name}`}
        items={platform.faqs}
        variant="light"
        includeSchema={false}
      />

      <FinalCTA
        title={`Start Creating ${platform.name} Videos`}
        description={`Join thousands of creators making viral ${platform.name} content with Hyreel.`}
        primaryCta={{ text: platform.ctaText }}
        secondaryCta={{ text: "All Platforms", href: "/platforms" }}
      />
    </>
  );
}
