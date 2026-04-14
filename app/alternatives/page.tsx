import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { alternatives } from "@/lib/alternatives";
import { generateAlternates } from "@/lib/seo/alternates";

export const metadata = {
  title: "AI Video Generator Alternatives & Comparisons | Hyreel",
  description:
    "Compare Hyreel to popular AI video generators like Canva, Synthesia, Runway, CapCut, and more. See why creators choose Hyreel for photo-to-video AI.",
  alternates: generateAlternates("/alternatives"),
  openGraph: {
    title: "AI Video Generator Alternatives - Hyreel vs Competitors",
    description:
      "Compare Hyreel to Canva, Synthesia, Runway, CapCut, and other AI video tools.",
    images: ["/og-image.png"],
  },
};

export default function AlternativesPage() {
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
              Alternatives
            </span>
          </div>

          <Heading as="h1" className="mb-6">
            Hyreel vs Other AI Video Tools
          </Heading>
          <Text variant="large" className="mb-8 max-w-3xl mx-auto">
            See how Hyreel compares to popular AI video generators. We specialize
            in transforming photos into stunning videos with cinematic motion effects.
          </Text>
          <Button size="lg">Try Hyreel Free</Button>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alternatives.map((alt) => (
            <Link key={alt.slug} href={`/alternatives/${alt.slug}`}>
              <Card
                variant="elevated"
                className="group cursor-pointer h-full hover:border-[var(--brand-primary)]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--surface-light)] flex items-center justify-center text-2xl font-bold text-[var(--text-secondary)]">
                    {alt.competitorName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition-colors">
                      Hyreel vs {alt.competitorName}
                    </h3>
                    <Text variant="small" className="text-[var(--text-muted)]">
                      Compare features
                    </Text>
                  </div>
                </div>
                <Text variant="small" className="mb-4 line-clamp-2">
                  {alt.heroSubheadline}
                </Text>
                <div className="flex items-center gap-2 text-[var(--brand-primary)] text-sm font-medium">
                  See Comparison
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
            Why Creators Choose Hyreel
          </Heading>
          <Text variant="large" className="mb-8 max-w-2xl mx-auto">
            Specialized in photo-to-video AI with cinematic motion effects.
            Start free — no credit card required.
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
