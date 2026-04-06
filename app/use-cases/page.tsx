import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useCases, getAllIndustries } from "@/lib/use-cases";

export const metadata = {
  title: "Use Cases - How Businesses Use Hyreel AI Video | Hyreel",
  description:
    "Discover how businesses across e-commerce, social media, real estate, fashion, and more use Hyreel to create professional AI videos that drive results.",
};

export default function UseCasesPage() {
  const industries = getAllIndustries();

  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--brand-primary)]">
              Use Cases
            </span>
          </div>

          <Heading as="h1" className="mb-6">
            AI Video for Every Industry
          </Heading>
          <Text variant="large" className="mb-8 max-w-3xl mx-auto">
            See how businesses across industries use Hyreel to create
            professional video content that drives engagement, conversions, and
            growth.
          </Text>
          <Button size="lg">Start Creating Free</Button>
        </div>
      </Section>

      {/* Stats */}
      <Section spacing="lg" className="bg-[var(--surface-light)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10+", label: "Industries Served" },
            { value: "14,258+", label: "Active Businesses" },
            { value: "30%", label: "Avg. Conversion Lift" },
            { value: "10x", label: "Faster Content Creation" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-2">
                {stat.value}
              </div>
              <Text variant="small" className="text-[var(--text-secondary)]">
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases by Industry */}
      {industries.map((industry, industryIndex) => {
        const industryUseCases = useCases.filter(
          (uc) => uc.industry === industry
        );

        return (
          <Section
            key={industryIndex}
            spacing="xl"
            className={
              industryIndex % 2 === 0 ? "bg-[var(--surface-light)]" : ""
            }
          >
            <div className="mb-10">
              <Heading as="h2" className="mb-4">
                {industry}
              </Heading>
              <Text variant="large">
                AI video solutions for {industry.toLowerCase()} professionals
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryUseCases.map((useCase, index) => (
                <Card
                  key={index}
                  variant="elevated"
                  className="group cursor-pointer hover:border-[var(--brand-primary)]/30 transition-all"
                >
                  <Link href={`/use-cases/${useCase.slug}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl md:text-5xl">
                        {useCase.icon}
                      </div>
                      <Badge variant="primary">{useCase.industry}</Badge>
                    </div>
                    <h3 className="text-base md:text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                      {useCase.name}
                    </h3>
                    <Text variant="small" className="mb-4 line-clamp-3">
                      {useCase.description}
                    </Text>
                    <div className="flex items-center gap-2 text-[var(--brand-primary)] text-sm font-medium">
                      Learn More
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
        );
      })}

      {/* CTA Section */}
      <Section
        spacing="xl"
        className="bg-[var(--surface-light)]"
      >
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            Ready to Transform Your Video Content?
          </Heading>
          <Text variant="large" className="mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using Hyreel to create professional AI
            videos. Start free -- no credit card required.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Get Started Free</Button>
            <Link href="/pricing">
              <Button size="lg" variant="secondary">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
