import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { ExamplesShowcaseSection } from "@/components/sections/examples-showcase";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { BenefitsSection } from "@/components/sections/benefits";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      {/* Hero - Problem statement + immediate value prop */}
      <HeroSection />

      {/* Examples - Visual proof of results (show before explain) */}
      <ExamplesShowcaseSection />

      {/* How It Works - Simple 4-step process */}
      <HowItWorksSection />

      {/* Features - Deep dive into capabilities */}
      <FeaturesSection />

      {/* Benefits - Why choose us over alternatives */}
      <BenefitsSection />

      {/* Testimonials - Real creator success stories */}
      <TestimonialsSection />

      {/* FAQ - Handle objections and reduce friction */}
      <FAQSection />

      {/* Final CTA - Convert warm visitors */}
      <CTASection />
    </>
  );
}
