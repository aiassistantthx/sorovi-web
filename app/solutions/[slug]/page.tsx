import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { solutions, getSolutionBySlug } from "@/lib/solutions";
import { getToolBySlug } from "@/lib/tools";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generateAlternates } from "@/lib/seo/alternates";
import { PageHero, PageFAQ, FinalCTA, RelatedContent } from "@/components/sections";

export async function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return { title: "Not Found - Hyreel" };
  }

  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    alternates: generateAlternates(`/solutions/${solution.slug}`),
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const relatedTools = solution.relatedTools
    .map((toolSlug) => getToolBySlug(toolSlug))
    .filter(Boolean);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solutions" },
    { name: solution.name, url: `/solutions/${solution.slug}` },
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
            { label: "Solutions", href: "/solutions" },
            { label: solution.name },
          ]}
        />
      </Section>

      <PageHero
        badge={{ icon: solution.icon, text: "Solution" }}
        title={solution.heroHeadline}
        description={solution.heroSubheadline}
        primaryCta={{ text: solution.ctaText }}
        secondaryCta={{ text: "All Solutions", href: "/solutions" }}
      />

      <Section spacing="lg" className="border-y border-[var(--border-color)] bg-[var(--surface-light)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {solution.results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-1">
                {result.value}
              </div>
              <Text variant="small" className="text-[var(--text-secondary)]">
                {result.label}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      {/* Problem Section */}
      <Section spacing="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Card variant="elevated" className="border-red-200 bg-red-50/50">
            <div className="text-4xl mb-4">😫</div>
            <Heading as="h2" className="mb-4 text-red-900">
              {solution.problem.title}
            </Heading>
            <Text className="mb-6 text-red-800">
              {solution.problem.description}
            </Text>
            <ul className="space-y-3">
              {solution.problem.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-red-800">{point}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="elevated" className="border-green-200 bg-green-50/50">
            <div className="text-4xl mb-4">✨</div>
            <Heading as="h2" className="mb-4 text-green-900">
              {solution.solution.title}
            </Heading>
            <Text className="mb-6 text-green-800">
              {solution.solution.description}
            </Text>
            <ul className="space-y-3">
              {solution.solution.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-800">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Benefits
          </Heading>
          <Text variant="large">
            What you get with Hyreel
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solution.benefits.map((benefit, index) => (
            <Card key={index} variant="elevated">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {benefit.title}
              </h3>
              <Text variant="small">{benefit.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            How It Works
          </Heading>
          <Text variant="large">
            Simple steps to solve your challenge
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {solution.howItWorks.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {step.title}
              </h3>
              <Text variant="small">{step.description}</Text>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="max-w-3xl mx-auto">
          <Card variant="elevated" className="text-center">
            <div className="text-6xl mb-6">&ldquo;</div>
            <blockquote className="text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed mb-6">
              {solution.testimonial.quote}
            </blockquote>
            <div>
              <div className="font-semibold text-[var(--text-primary)]">
                {solution.testimonial.author}
              </div>
              <Text variant="small" className="text-[var(--text-secondary)]">
                {solution.testimonial.role}
              </Text>
            </div>
          </Card>
        </div>
      </Section>

      {relatedTools.length > 0 && (
        <RelatedContent
          title="Recommended Tools"
          subtitle="The best Hyreel tools for this solution"
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
        description={`Common questions about ${solution.name.toLowerCase()}`}
        items={solution.faqs}
        variant="light"
        includeSchema={false}
      />

      <FinalCTA
        title="Ready to Solve This Challenge?"
        description="Join thousands using Hyreel to overcome video content obstacles."
        primaryCta={{ text: solution.ctaText }}
        secondaryCta={{ text: "All Solutions", href: "/solutions" }}
      />
    </>
  );
}
