import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";
import { useCases, getUseCaseBySlug, type UseCase } from "@/lib/use-cases";
import { getToolBySlug } from "@/lib/tools";
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

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
      title: "Use Case Not Found - Sorovi",
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
  const faqSchema = generateFAQSchema(useCase.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Use Cases", url: "/use-cases" },
    { name: useCase.name, url: `/use-cases/${useCase.slug}` },
  ]);

  const combinedSchema = [faqSchema, breadcrumbSchema];

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema),
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
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="text-center">
          {/* Industry Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 mb-6">
            <span className="text-sm font-medium text-[var(--brand-primary)]">
              {useCase.icon} {useCase.industry}
            </span>
          </div>

          <Heading as="h1" gradient className="mb-4">
            {useCase.heroHeadline}
          </Heading>

          <Text variant="large" className="mb-8 max-w-3xl mx-auto">
            {useCase.heroSubheadline}
          </Text>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">{useCase.ctaText}</Button>
            <Link href="/pricing">
              <Button size="lg" variant="secondary">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Pain Points Section */}
      <Section spacing="xl" className="bg-[var(--surface-dark)]/30">
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
            <Card key={index} variant="glass">
              <div className="text-4xl mb-4">{pain.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {pain.title}
              </h3>
              <Text variant="small">{pain.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* How Sorovi Helps Section */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            How Sorovi Helps
          </Heading>
          <Text variant="large">
            AI-powered solutions for {useCase.industry.toLowerCase()} video
            creation
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCase.howSoroviHelps.map((item, index) => (
            <Card
              key={index}
              variant="glass"
              className="border-[var(--brand-primary)]/20"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <Text variant="small">{item.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section spacing="xl" className="bg-[var(--surface-dark)]/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <Heading as="h2" className="mb-6">
              Why {useCase.industry} Professionals Choose Sorovi
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
                  <span className="text-base text-[var(--text-gray-100)]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial */}
          <Card variant="glass" className="border-[var(--brand-primary)]/20">
            <div className="mb-4">
              <svg
                className="w-10 h-10 text-[var(--brand-primary)]/50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-6">
              {useCase.testimonial.quote}
            </blockquote>
            <div>
              <div className="font-semibold text-white">
                {useCase.testimonial.author}
              </div>
              <Text variant="small" className="text-[var(--text-gray-300)]">
                {useCase.testimonial.role}
              </Text>
            </div>
          </Card>
        </div>
      </Section>

      {/* Related Tools Section */}
      {relatedTools.length > 0 && (
        <Section spacing="xl">
          <div className="text-center mb-10">
            <Heading as="h2" className="mb-4">
              Recommended Tools
            </Heading>
            <Text variant="large">
              The best Sorovi tools for {useCase.industry.toLowerCase()}{" "}
              professionals
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedTools.map((tool, index) => (
              <Card
                key={index}
                variant="glass"
                className="group cursor-pointer hover:border-[var(--brand-primary)]/50 transition-all"
              >
                <Link href={`/tools/${tool!.slug}`}>
                  <div className="text-3xl md:text-4xl mb-3">{tool!.icon}</div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1 group-hover:text-[var(--brand-primary)] transition-colors">
                    {tool!.name}
                  </h3>
                  <Text variant="small" className="mb-3 line-clamp-2">
                    {tool!.tagline}
                  </Text>
                  <div className="flex items-center gap-1 text-[var(--brand-primary)] text-sm font-medium">
                    Try It Free
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ Section */}
      <Section spacing="xl" className="bg-[var(--surface-dark)]/30">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Frequently Asked Questions
          </Heading>
          <Text variant="large">
            Common questions about Sorovi for {useCase.industry.toLowerCase()}
          </Text>
        </div>

        <div className="max-w-6xl mx-auto">
          <Accordion items={useCase.faqs} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            Ready to Get Started?
          </Heading>
          <Text variant="large" className="mb-8 max-w-2xl mx-auto">
            Join thousands of {useCase.industry.toLowerCase()} professionals
            using Sorovi to create amazing video content.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">{useCase.ctaText}</Button>
            <Link href="/use-cases">
              <Button size="lg" variant="secondary">
                View All Use Cases
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
