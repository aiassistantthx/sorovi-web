import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { templates, getTemplateBySlug } from "@/lib/templates";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generateAlternates } from "@/lib/seo/alternates";
import { PageHero, PageFAQ, FinalCTA, RelatedContent } from "@/components/sections";

// Generate static params for all templates
export async function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    return {
      title: "Template Not Found - Hyreel",
    };
  }

  return {
    title: template.metaTitle,
    description: template.metaDescription,
    alternates: generateAlternates(`/templates/${template.slug}`),
  };
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  // Get related templates
  const relatedTemplates = template.relatedTemplates
    .map((slug) => getTemplateBySlug(slug))
    .filter(Boolean);

  // Generate JSON-LD schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Templates", url: "/templates" },
    { name: template.name, url: `/templates/${template.slug}` },
  ]);

  const faqSchema = generateFAQSchema(template.faqs);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, faqSchema]),
        }}
      />

      {/* Breadcrumb */}
      <Section spacing="sm" className="pb-0 md:pb-0">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Templates", href: "/templates" },
            { label: template.name },
          ]}
        />
      </Section>

      {/* Hero Section */}
      <PageHero
        badge={{ icon: template.icon, text: template.category }}
        title={template.heroHeadline}
        description={template.heroSubheadline}
        primaryCta={{ text: template.ctaText }}
        secondaryCta={{ text: "View All Templates", href: "/templates" }}
      />

      {/* Specs Section */}
      <Section spacing="lg" className="border-y border-[var(--border-color)] bg-[var(--surface-light)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-1">
              {template.aspectRatio}
            </div>
            <Text variant="small" className="text-[var(--text-secondary)]">
              Aspect Ratio
            </Text>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-1">
              {template.duration}
            </div>
            <Text variant="small" className="text-[var(--text-secondary)]">
              Duration
            </Text>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-1">
              {template.platforms.length}+
            </div>
            <Text variant="small" className="text-[var(--text-secondary)]">
              Platforms
            </Text>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-1">
              Seconds
            </div>
            <Text variant="small" className="text-[var(--text-secondary)]">
              Creation Time
            </Text>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Template Features
          </Heading>
          <Text variant="large">
            Everything you need for professional {template.name.toLowerCase()}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {template.features.map((feature, index) => (
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

      {/* Examples Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Template Examples
          </Heading>
          <Text variant="large">
            Motion effects included in {template.name.toLowerCase()}
          </Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {template.examples.map((example, index) => (
            <Card
              key={index}
              variant="elevated"
              className="text-center"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-xs font-medium mb-3">
                {example.effect}
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {example.title}
              </h3>
              <Text variant="small">{example.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section spacing="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <Heading as="h2" className="mb-6">
              Perfect For
            </Heading>
            <Text variant="large" className="mb-6">
              Use cases for {template.name.toLowerCase()}
            </Text>
            <ul className="space-y-3">
              {template.useCases.map((useCase, index) => (
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
                  <span className="text-base text-[var(--text-secondary)]">
                    {useCase}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Card variant="elevated" className="border-[var(--brand-primary)]/20">
            <Heading as="h3" className="mb-4">
              Best For
            </Heading>
            <div className="flex flex-wrap gap-2 mb-6">
              {template.bestFor.map((audience, index) => (
                <span
                  key={index}
                  className="px-3 py-2 rounded-lg bg-[var(--surface-light)] text-[var(--text-primary)] text-sm font-medium"
                >
                  {audience}
                </span>
              ))}
            </div>
            <Heading as="h3" className="mb-4">
              Platforms
            </Heading>
            <div className="flex flex-wrap gap-2">
              {template.platforms.map((platform, index) => (
                <span
                  key={index}
                  className="px-3 py-2 rounded-lg bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-medium"
                >
                  {platform}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Tips Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Pro Tips
          </Heading>
          <Text variant="large">
            Get the most out of {template.name.toLowerCase()}
          </Text>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card variant="elevated">
            <ul className="space-y-4">
              {template.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-primary)] text-white text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-base text-[var(--text-secondary)]">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Related Templates Section */}
      {relatedTemplates.length > 0 && (
        <RelatedContent
          title="Related Templates"
          subtitle="Explore more templates for your content needs"
          items={relatedTemplates.map((t) => ({
            title: t!.name,
            description: t!.description,
            href: `/templates/${t!.slug}`,
            icon: t!.icon,
          }))}
          ctaText="View Template"
          variant="default"
          columns={3}
        />
      )}

      {/* FAQ Section */}
      <PageFAQ
        title="Frequently Asked Questions"
        description={`Common questions about ${template.name.toLowerCase()}`}
        items={template.faqs}
        variant="light"
        includeSchema={false}
      />

      {/* CTA Section */}
      <FinalCTA
        title={`Start Creating ${template.name}`}
        description={`Join thousands of creators using Hyreel templates to create professional video content.`}
        primaryCta={{ text: template.ctaText }}
        secondaryCta={{ text: "View All Templates", href: "/templates" }}
      />
    </>
  );
}
