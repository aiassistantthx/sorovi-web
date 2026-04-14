import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { alternatives, getAlternativeBySlug } from "@/lib/alternatives";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generateAlternates } from "@/lib/seo/alternates";
import { PageHero, PageFAQ, FinalCTA, RelatedContent } from "@/components/sections";

export async function generateStaticParams() {
  return alternatives.map((alt) => ({
    slug: alt.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const alternative = getAlternativeBySlug(slug);

  if (!alternative) {
    return {
      title: "Alternative Not Found - Hyreel",
    };
  }

  return {
    title: alternative.metaTitle,
    description: alternative.metaDescription,
    alternates: generateAlternates(`/alternatives/${alternative.slug}`),
  };
}

export default async function AlternativePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const alternative = getAlternativeBySlug(slug);

  if (!alternative) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Alternatives", url: "/alternatives" },
    { name: `${alternative.competitorName} Alternative`, url: `/alternatives/${alternative.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Alternatives", href: "/alternatives" },
          { label: `vs ${alternative.competitorName}` },
        ]}
        badge={{ text: `vs ${alternative.competitorName}` }}
        title={alternative.heroHeadline}
        description={alternative.heroSubheadline}
        primaryCta={{ text: "Try Hyreel Free" }}
        secondaryCta={{ text: "See Comparison", href: "#comparison" }}
      />

      {/* Why Switch Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Why Choose Hyreel Over {alternative.competitorName}?
          </Heading>
          <Text variant="large">
            {alternative.competitorDescription}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alternative.whySwitchReasons.map((reason, index) => (
            <Card key={index} variant="elevated">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {reason.title}
              </h3>
              <Text variant="small">{reason.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section spacing="xl" id="comparison">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Hyreel vs {alternative.competitorName}: Feature Comparison
          </Heading>
          <Text variant="large">
            See how we stack up side by side
          </Text>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left py-4 px-4 text-[var(--text-secondary)]">Feature</th>
                <th className="text-center py-4 px-4 text-[var(--brand-primary)] font-bold">Hyreel</th>
                <th className="text-center py-4 px-4 text-[var(--text-secondary)]">{alternative.competitorName}</th>
              </tr>
            </thead>
            <tbody>
              {alternative.comparisonTable.map((row, index) => (
                <tr key={index} className="border-b border-[var(--border-color)] hover:bg-[var(--surface-light)] transition-colors">
                  <td className="py-4 px-4 text-[var(--text-secondary)]">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.hyreel === "boolean" ? (
                      row.hyreel ? (
                        <span className="text-[var(--brand-primary)] text-xl">✓</span>
                      ) : (
                        <span className="text-[var(--text-muted)]">—</span>
                      )
                    ) : (
                      <span className="text-[var(--brand-primary)]">{row.hyreel}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.competitor === "boolean" ? (
                      row.competitor ? (
                        <span className="text-[var(--text-secondary)]">✓</span>
                      ) : (
                        <span className="text-[var(--text-muted)]">—</span>
                      )
                    ) : (
                      <span className="text-[var(--text-secondary)]">{row.competitor}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Advantages vs Limitations */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hyreel Advantages */}
          <div>
            <Heading as="h2" className="mb-6 text-[var(--brand-primary)]">
              Hyreel Advantages
            </Heading>
            <ul className="space-y-4">
              {alternative.hyreelAdvantages.map((advantage, index) => (
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
                  <span className="text-lg text-[var(--text-secondary)]">
                    {advantage}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Competitor Limitations */}
          <div>
            <Heading as="h2" className="mb-6 text-[var(--text-secondary)]">
              {alternative.competitorName} Limitations
            </Heading>
            <ul className="space-y-4">
              {alternative.competitorLimitations.map((limitation, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[var(--text-muted)] flex-shrink-0 mt-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-lg text-[var(--text-secondary)]">
                    {limitation}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      {alternative.testimonial && (
        <Section spacing="xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl text-[var(--brand-primary)]/30 mb-6">"</div>
            <Text variant="large" className="italic mb-6">
              {alternative.testimonial.quote}
            </Text>
            <div>
              <p className="font-semibold text-[var(--text-primary)]">{alternative.testimonial.author}</p>
              <p className="text-[var(--text-secondary)]">{alternative.testimonial.role}</p>
            </div>
          </div>
        </Section>
      )}

      {/* FAQ */}
      <PageFAQ
        title="Frequently Asked Questions"
        description={`Common questions about switching from ${alternative.competitorName} to Hyreel`}
        items={alternative.faqs}
        variant="light"
      />

      {/* CTA */}
      <FinalCTA
        title="Ready to Switch to Hyreel?"
        description="Join thousands of creators who made the switch. Try Hyreel free today."
        primaryCta={{ text: "Start Creating Free" }}
        secondaryCta={{ text: "Compare Plans", href: "/pricing" }}
      />

      {/* Related Tools */}
      <RelatedContent
        title="Explore Hyreel's AI Video Tools"
        items={[
          { title: "Image to Video AI", description: "Transform photos into videos", href: "/tools/image-to-video-ai" },
          { title: "TikTok Generator", description: "Create viral TikTok content", href: "/tools/ai-tiktok-video-generator" },
          { title: "Zoom Effect", description: "Cinematic zoom animations", href: "/tools/ai-zoom-video-effect" },
          { title: "Orbit Effect", description: "3D orbital camera motion", href: "/tools/ai-orbit-video-effect" },
        ]}
        columns={4}
      />
    </>
  );
}
