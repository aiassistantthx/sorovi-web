import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { FeaturesSection } from "@/components/sections/features";
import { ExamplesShowcaseSection } from "@/components/sections/examples-showcase";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { BenefitsSection } from "@/components/sections/benefits";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      {/* Hero Section - Above the fold */}
      <HeroSection />

      {/* Statistics - Social proof */}
      <StatsSection />

      {/* Features - What we offer */}
      <FeaturesSection />

      {/* Examples - Showcase what's possible */}
      <ExamplesShowcaseSection />

      {/* How It Works - Clear process */}
      <HowItWorksSection />

      {/* Benefits - Why choose us */}
      <BenefitsSection />

      {/* FAQ - Answer common questions */}
      <FAQSection />

      {/* Final CTA - Convert visitors */}
      <CTASection />
    </>
  );
}
