import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

export function HeroSection() {
  return (
    <Section spacing="xl" className="relative overflow-hidden">
      {/* Background gradient effects - soft for light theme */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
      </div>

      <div className="text-center max-w-4xl mx-auto">
        {/* H1 - solid dark text with highlighted word */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[var(--text-primary)] mb-6">
          Turn Photos Into{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Viral Videos</span>
            <span className="absolute bottom-2 left-0 right-0 h-3 md:h-4 bg-[var(--brand-primary)]/20 -z-0" />
          </span>
          {" "}in Minutes
        </h1>

        {/* Subheading */}
        <Text variant="large" className="mb-10 max-w-2xl mx-auto">
          No editing skills needed. Hyreel&apos;s AI creates scroll-stopping TikToks, Reels, and Shorts from a single photo.
        </Text>

        {/* Single CTA Button */}
        <Button size="lg" className="text-base sm:text-lg px-10 py-3">
          Start Creating
        </Button>
      </div>
    </Section>
  );
}
