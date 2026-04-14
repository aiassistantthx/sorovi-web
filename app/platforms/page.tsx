import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { platforms } from "@/lib/platforms";
import { generateAlternates } from "@/lib/seo/alternates";

export const metadata = {
  title: "AI Video Generator for Every Social Platform | Hyreel",
  description:
    "Create optimized videos for TikTok, Instagram Reels, YouTube Shorts, Pinterest, LinkedIn, and Facebook. Platform-specific formats and effects.",
  alternates: generateAlternates("/platforms"),
};

export default function PlatformsPage() {
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
              All Platforms
            </span>
          </div>

          <Heading as="h1" className="mb-6">
            Optimized for Every Platform
          </Heading>
          <Text variant="large" className="mb-8 max-w-3xl mx-auto">
            Create videos specifically optimized for TikTok, Instagram, YouTube,
            Pinterest, LinkedIn, and more. Perfect formats, algorithm-friendly
            effects.
          </Text>
          <Button size="lg">Start Creating Free</Button>
        </div>
      </Section>

      <Section spacing="lg" className="bg-[var(--surface-light)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "6+", label: "Platforms Supported" },
            { value: "9:16", label: "Vertical Format" },
            { value: "Perfect", label: "Aspect Ratios" },
            { value: "1-Tap", label: "Export" },
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

      <Section spacing="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <Link key={platform.slug} href={`/platforms/${platform.slug}`}>
              <Card
                variant="elevated"
                className="group cursor-pointer h-full hover:border-[var(--brand-primary)]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{platform.icon}</div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition-colors">
                    {platform.name}
                  </h3>
                </div>
                <Text variant="small" className="mb-4 line-clamp-2">
                  {platform.description}
                </Text>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--surface-light)] text-[var(--text-secondary)]">
                    {platform.specs.aspectRatio}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--surface-light)] text-[var(--text-secondary)]">
                    {platform.specs.duration}
                  </span>
                </div>
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
            Create Once, Post Everywhere
          </Heading>
          <Text variant="large" className="mb-8 max-w-2xl mx-auto">
            Hyreel exports in the perfect format for every platform. Stop
            reformatting — start posting.
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
