import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { audiences } from "@/lib/audiences";
import { generateAlternates } from "@/lib/seo/alternates";

export const metadata = {
  title: "AI Video Generator for Every Creator & Business | Hyreel",
  description:
    "Discover how Hyreel helps creators, small businesses, influencers, marketers, agencies, and entrepreneurs create professional video content.",
  alternates: generateAlternates("/for"),
};

export default function AudiencesPage() {
  return (
    <>
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--brand-primary)]">
              Made For You
            </span>
          </div>

          <Heading as="h1" className="mb-6">
            AI Video for Every Creator & Business
          </Heading>
          <Text variant="large" className="mb-8 max-w-3xl mx-auto">
            Whether you&apos;re a solo creator, small business, or agency team,
            Hyreel helps you create professional video content without the
            learning curve.
          </Text>
          <Button size="lg">Start Creating Free</Button>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <Link key={audience.slug} href={`/for/${audience.slug}`}>
              <Card
                variant="elevated"
                className="group cursor-pointer h-full hover:border-[var(--brand-primary)]/30 transition-all"
              >
                <div className="text-5xl mb-4">{audience.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                  {audience.name}
                </h3>
                <Text variant="small" className="mb-4 line-clamp-2">
                  {audience.description}
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
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            Ready to Transform Your Video Content?
          </Heading>
          <Text variant="large" className="mb-8 max-w-2xl mx-auto">
            Join thousands of creators and businesses using Hyreel to create
            professional AI videos. Start free — no credit card required.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Start Creating Free</Button>
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
