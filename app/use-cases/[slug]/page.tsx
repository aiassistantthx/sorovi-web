import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useCases, getUseCaseBySlug } from "@/lib/use-cases";
import { getToolBySlug } from "@/lib/tools";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { PageHero, PageFAQ, FinalCTA, RelatedContent } from "@/components/sections";

// Generate static params for all use cases
export async function generateStaticParams() {
  return useCases.map((useCase) => ({
    slug: useCase.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    return {
      title: "Use Case Not Found - Hyreel",
    };
  }

  return {
    title: useCase.metaTitle,
    description: useCase.metaDescription,
  };
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  // Resolve related tools
  const relatedTools = useCase.relatedTools
    .map((toolSlug) => getToolBySlug(toolSlug))
    .filter(Boolean);

  // Generate JSON-LD schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Use Cases", url: "/use-cases" },
    { name: useCase.name, url: `/use-cases/${useCase.slug}` },
  ]);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema]),
        }}
      />

      {/* Breadcrumb */}
      <Section spacing="sm" className="pb-0 md:pb-0">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Use Cases", href: "/use-cases" },
            { label: useCase.name },
          ]}
        />
      </Section>

      {/* Hero Section */}
      <PageHero
        badge={{ icon: useCase.icon, text: useCase.industry }}
        title={useCase.heroHeadline}
        description={useCase.heroSubheadline}
        primaryCta={{ text: useCase.ctaText }}
        secondaryCta={{ text: "View Pricing", href: "/pricing" }}
      />

      {/* Pain Points Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            The Challenge
          </Heading>
          <Text variant="large">
            Common problems {useCase.industry.toLowerCase()} professionals face
            with video content
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCase.painPoints.map((pain, index) => (
            <Card key={index} variant="elevated">
              <div className="text-4xl mb-4">{pain.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {pain.title}
              </h3>
              <Text variant="small">{pain.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* How Hyreel Helps Section */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            How Hyreel Helps
          </Heading>
          <Text variant="large">
            AI-powered solutions for {useCase.industry.toLowerCase()} video
            creation
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCase.howHyreelHelps.map((item, index) => (
            <Card
              key={index}
              variant="elevated"
              className="border-[var(--brand-primary)]/20"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {item.title}
              </h3>
              <Text variant="small">{item.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <Heading as="h2" className="mb-6">
              Why {useCase.industry} Professionals Choose Hyreel
            </Heading>
            <Text variant="large" className="mb-8">
              Real benefits that drive real results for your business.
            </Text>
            <ul className="space-y-4">
              {useCase.benefits.map((benefit, index) => (
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
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial */}
          <Card variant="elevated" className="border-[var(--brand-primary)]/20">
            <div className="mb-4">
              <svg
                className="w-10 h-10 text-[var(--brand-primary)]/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-lg md:text-xl text-[var(--text-primary)] leading-relaxed mb-6">
              {useCase.testimonial.quote}
            </blockquote>
            <div>
              <div className="font-semibold text-[var(--text-primary)]">
                {useCase.testimonial.author}
              </div>
              <Text variant="small" className="text-[var(--text-secondary)]">
                {useCase.testimonial.role}
              </Text>
            </div>
          </Card>
        </div>
      </Section>

      {/* Related Tools Section */}
      {relatedTools.length > 0 && (
        <RelatedContent
          title="Recommended Tools"
          subtitle={`The best Hyreel tools for ${useCase.industry.toLowerCase()} professionals`}
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

      {/* FAQ Section */}
      <PageFAQ
        title="Frequently Asked Questions"
        description={`Common questions about Hyreel for ${useCase.industry.toLowerCase()}`}
        items={useCase.faqs}
        variant="light"
      />

      {/* CTA Section */}
      <FinalCTA
        title="Ready to Get Started?"
        description={`Join thousands of ${useCase.industry.toLowerCase()} professionals using Hyreel to create amazing video content.`}
        primaryCta={{ text: useCase.ctaText }}
        secondaryCta={{ text: "View All Use Cases", href: "/use-cases" }}
      />
    </>
  );
}
