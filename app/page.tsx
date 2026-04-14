import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { ExamplesShowcaseSection } from "@/components/sections/examples-showcase";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { BenefitsSection } from "@/components/sections/benefits";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { generateSoftwareApplicationSchema } from "@/lib/schema";
import { generateAlternates } from "@/lib/seo/alternates";

export const metadata: Metadata = {
  alternates: generateAlternates("/"),
};

export default function Home() {
  const appSchema = generateSoftwareApplicationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

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
