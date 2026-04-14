import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { audiences, getAudienceBySlug } from "@/lib/audiences";
import { getToolBySlug } from "@/lib/tools";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generateAlternates } from "@/lib/seo/alternates";
import { PageHero, PageFAQ, FinalCTA, RelatedContent } from "@/components/sections";

export async function generateStaticParams() {
  return audiences.map((audience) => ({ slug: audience.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const audience = getAudienceBySlug(slug);

  if (!audience) {
    return { title: "Not Found - Hyreel" };
  }

  return {
    title: audience.metaTitle,
    description: audience.metaDescription,
    alternates: generateAlternates(`/for/${audience.slug}`),
  };
}

export default async function AudiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const audience = getAudienceBySlug(slug);

  if (!audience) {
    notFound();
  }

  const relatedTools = audience.relatedTools
    .map((toolSlug) => getToolBySlug(toolSlug))
    .filter(Boolean);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "For", url: "/for" },
    { name: audience.name, url: `/for/${audience.slug}` },
  ]);

  const faqSchema = generateFAQSchema(audience.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, faqSchema]),
        }}
      />

      <Section spacing="sm" className="pb-0 md:pb-0">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "For", href: "/for" },
            { label: audience.name },
          ]}
        />
      </Section>

      <PageHero
        badge={{ icon: audience.icon, text: `For ${audience.name}` }}
        title={audience.heroHeadline}
        description={audience.heroSubheadline}
        primaryCta={{ text: audience.ctaText }}
        secondaryCta={{ text: "View Pricing", href: "/pricing" }}
      />

      <Section spacing="lg" className="border-y border-[var(--border-color)] bg-[var(--surface-light)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {audience.stats.map((stat, index) => (
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
            Challenges You Face
          </Heading>
          <Text variant="large">
            We understand the struggles of {audience.name.toLowerCase()}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audience.painPoints.map((point, index) => (
            <Card key={index} variant="elevated">
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {point.title}
              </h3>
              <Text variant="small">{point.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            How Hyreel Helps
          </Heading>
          <Text variant="large">
            Solutions designed for {audience.name.toLowerCase()}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audience.benefits.map((benefit, index) => (
            <Card
              key={index}
              variant="elevated"
              className="border-[var(--brand-primary)]/20"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {benefit.title}
              </h3>
              <Text variant="small">{benefit.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section spacing="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <Heading as="h2" className="mb-6">
              Features for {audience.name}
            </Heading>
            <ul className="space-y-4">
              {audience.features.map((feature, index) => (
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
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

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
              &ldquo;{audience.testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <div className="font-semibold text-[var(--text-primary)]">
                {audience.testimonial.author}
              </div>
              <Text variant="small" className="text-[var(--text-secondary)]">
                {audience.testimonial.role}
              </Text>
            </div>
          </Card>
        </div>
      </Section>

      {relatedTools.length > 0 && (
        <RelatedContent
          title="Recommended Tools"
          subtitle={`The best Hyreel tools for ${audience.name.toLowerCase()}`}
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
        description={`Common questions about Hyreel for ${audience.name.toLowerCase()}`}
        items={audience.faqs}
        variant="light"
        includeSchema={false}
      />

      <FinalCTA
        title={`Ready to Transform Your ${audience.name} Content?`}
        description={`Join thousands of ${audience.name.toLowerCase()} using Hyreel to create professional video content.`}
        primaryCta={{ text: audience.ctaText }}
        secondaryCta={{ text: "View All Audiences", href: "/for" }}
      />
    </>
  );
}
