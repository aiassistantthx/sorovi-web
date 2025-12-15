import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

export function CTASection() {
  return (
    <Section spacing="xl" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--brand-purple)] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--brand-pink)] to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <Heading as="h2" className="mb-4">
          Your Stories Deserve More Views
        </Heading>
        <Text variant="large" className="mb-8">
          Join 14,258+ creators who are already making viral content with Sorovi.
          Start creating professional videos in minutes, not hours.
        </Text>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button size="lg">
            Download for iOS
          </Button>
          <Button size="lg" variant="secondary">
            Download for Android
          </Button>
        </div>

        <Text variant="small" className="text-[var(--text-gray-500)]">
          No credit card required • Free plan available • Cancel anytime
        </Text>
      </div>
    </Section>
  );
}
