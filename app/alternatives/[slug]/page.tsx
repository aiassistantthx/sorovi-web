import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { alternatives, getAlternativeBySlug, type Alternative } from "@/lib/alternatives";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

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
      title: "Alternative Not Found - Sorovi",
    };
  }

  return {
    title: alternative.metaTitle,
    description: alternative.metaDescription,
  };
}

export default async function AlternativePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const alternative = getAlternativeBySlug(slug);

  if (!alternative) {
    notFound();
  }

  const faqSchema = generateFAQSchema(alternative.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Alternatives", url: "/alternatives" },
    { name: `${alternative.competitorName} Alternative`, url: `/alternatives/${alternative.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Alternatives", href: "/alternatives" },
              { label: `vs ${alternative.competitorName}` },
            ]}
            className="justify-center mb-6"
          />
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 mb-6">
            <span className="text-sm font-medium text-[var(--brand-primary)]">
              vs {alternative.competitorName}
            </span>
          </div>

          <Heading as="h1" gradient className="mb-4">
            {alternative.heroHeadline}
          </Heading>

          <Text variant="large" className="mb-8">
            {alternative.heroSubheadline}
          </Text>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Try Sorovi Free</Button>
            <Link href="#comparison">
              <Button size="lg" variant="secondary">
                See Comparison
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Why Switch Section */}
      <Section spacing="xl" className="bg-[var(--surface-dark)]/30">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Why Choose Sorovi Over {alternative.competitorName}?
          </Heading>
          <Text variant="large">
            {alternative.competitorDescription}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alternative.whySwitchReasons.map((reason, index) => (
            <Card key={index} variant="glass">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
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
            Sorovi vs {alternative.competitorName}: Feature Comparison
          </Heading>
          <Text variant="large">
            See how we stack up side by side
          </Text>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-[var(--text-gray-100)]">Feature</th>
                <th className="text-center py-4 px-4 text-[var(--brand-primary)] font-bold">Sorovi</th>
                <th className="text-center py-4 px-4 text-[var(--text-gray-300)]">{alternative.competitorName}</th>
              </tr>
            </thead>
            <tbody>
              {alternative.comparisonTable.map((row, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 text-[var(--text-gray-100)]">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.sorovi === "boolean" ? (
                      row.sorovi ? (
                        <span className="text-[var(--brand-primary)] text-xl">✓</span>
                      ) : (
                        <span className="text-[var(--text-gray-400)]">—</span>
                      )
                    ) : (
                      <span className="text-[var(--brand-primary)]">{row.sorovi}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.competitor === "boolean" ? (
                      row.competitor ? (
                        <span className="text-[var(--text-gray-300)]">✓</span>
                      ) : (
                        <span className="text-[var(--text-gray-400)]">—</span>
                      )
                    ) : (
                      <span className="text-[var(--text-gray-300)]">{row.competitor}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Advantages vs Limitations */}
      <Section spacing="xl" className="bg-[var(--surface-dark)]/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sorovi Advantages */}
          <div>
            <Heading as="h2" className="mb-6 text-[var(--brand-primary)]">
              Sorovi Advantages
            </Heading>
            <ul className="space-y-4">
              {alternative.soroviAdvantages.map((advantage, index) => (
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
                    {advantage}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Competitor Limitations */}
          <div>
            <Heading as="h2" className="mb-6 text-[var(--text-gray-300)]">
              {alternative.competitorName} Limitations
            </Heading>
            <ul className="space-y-4">
              {alternative.competitorLimitations.map((limitation, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[var(--text-gray-400)] flex-shrink-0 mt-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-lg text-[var(--text-gray-300)]">
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
              <p className="font-semibold text-white">{alternative.testimonial.author}</p>
              <p className="text-[var(--text-gray-300)]">{alternative.testimonial.role}</p>
            </div>
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section spacing="xl" className="bg-[var(--surface-dark)]/30">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Frequently Asked Questions
          </Heading>
          <Text variant="large">
            Common questions about switching from {alternative.competitorName} to Sorovi
          </Text>
        </div>

        <div className="max-w-6xl mx-auto">
          <Accordion items={alternative.faqs} />
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="xl">
        <div className="text-center">
          <Heading as="h2" className="mb-4">
            Ready to Switch to Sorovi?
          </Heading>
          <Text variant="large" className="mb-8">
            Join thousands of creators who made the switch. Try Sorovi free today.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Start Creating Free</Button>
            <Link href="/pricing">
              <Button size="lg" variant="secondary">
                Compare Plans
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Related Tools */}
      <Section spacing="lg" className="bg-[var(--surface-dark)]/30">
        <div className="text-center mb-8">
          <Heading as="h3" className="mb-2">
            Explore Sorovi's AI Video Tools
          </Heading>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/tools/image-to-video-ai">
            <Button variant="secondary" size="sm">Image to Video AI</Button>
          </Link>
          <Link href="/tools/ai-tiktok-video-generator">
            <Button variant="secondary" size="sm">TikTok Generator</Button>
          </Link>
          <Link href="/tools/ai-zoom-video-effect">
            <Button variant="secondary" size="sm">Zoom Effect</Button>
          </Link>
          <Link href="/tools/ai-orbit-video-effect">
            <Button variant="secondary" size="sm">Orbit Effect</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
