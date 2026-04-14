import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { industries, getIndustryBySlug } from "@/lib/industries";
import { getToolBySlug } from "@/lib/tools";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generateAlternates } from "@/lib/seo/alternates";
import { PageHero, PageFAQ, FinalCTA, RelatedContent } from "@/components/sections";

// Generate static params for all industries
export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Not Found - Hyreel",
    };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: generateAlternates(`/industries/${industry.slug}`),
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  // Resolve related tools
  const relatedTools = industry.relatedTools
    .map((toolSlug) => getToolBySlug(toolSlug))
    .filter(Boolean);

  // Generate JSON-LD schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
    { name: industry.name, url: `/industries/${industry.slug}` },
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
            { label: "Industries", href: "/industries" },
            { label: industry.name },
          ]}
        />
      </Section>

      {/* Hero Section */}
      <PageHero
        badge={{ icon: industry.icon, text: industry.name }}
        title={industry.heroHeadline}
        description={industry.heroSubheadline}
        primaryCta={{ text: industry.ctaText }}
        secondaryCta={{ text: "View Pricing", href: "/pricing" }}
      />

      {/* Stats Section */}
      <Section spacing="lg" className="border-y border-[var(--border-color)] bg-[var(--surface-light)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {industry.stats.map((stat, index) => (
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

      {/* Challenges Section */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Challenges in {industry.name}
          </Heading>
          <Text variant="large">
            Common video marketing problems businesses face
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {industry.challenges.map((challenge, index) => (
            <Card key={index} variant="elevated">
              <div className="text-4xl mb-4">{challenge.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {challenge.title}
              </h3>
              <Text variant="small">{challenge.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Solutions Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            How Hyreel Helps
          </Heading>
          <Text variant="large">
            AI-powered video solutions for {industry.name.toLowerCase()}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {industry.solutions.map((solution, index) => (
            <Card
              key={index}
              variant="elevated"
              className="border-[var(--brand-primary)]/20"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {solution.title}
              </h3>
              <Text variant="small">{solution.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Video Types Section */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Video Types for {industry.name}
          </Heading>
          <Text variant="large">
            Content formats that work best in your industry
          </Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {industry.videoTypes.map((type, index) => (
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

      {/* Benefits Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <Heading as="h2" className="mb-6">
              Benefits for {industry.name}
            </Heading>
            <Text variant="large" className="mb-8">
              Real results that drive business growth.
            </Text>
            <ul className="space-y-4">
              {industry.benefits.map((benefit, index) => (
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
              "{industry.testimonial.quote}"
            </blockquote>
            <div>
              <div className="font-semibold text-[var(--text-primary)]">
                {industry.testimonial.author}
              </div>
              <Text variant="small" className="text-[var(--text-secondary)]">
                {industry.testimonial.role}
              </Text>
            </div>
          </Card>
        </div>
      </Section>

      {/* Related Tools Section */}
      {relatedTools.length > 0 && (
        <RelatedContent
          title="Recommended Tools"
          subtitle={`The best Hyreel tools for ${industry.name.toLowerCase()}`}
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
        description={`Common questions about Hyreel for ${industry.name.toLowerCase()}`}
        items={industry.faqs}
        variant="light"
        includeSchema={true}
      />

      {/* CTA Section */}
      <FinalCTA
        title={`Ready to Transform ${industry.name} Video?`}
        description={`Join thousands of ${industry.name.toLowerCase()} businesses using Hyreel to create professional video content.`}
        primaryCta={{ text: industry.ctaText }}
        secondaryCta={{ text: "View All Industries", href: "/industries" }}
      />
    </>
  );
}
