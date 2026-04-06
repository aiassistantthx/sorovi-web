import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

export function CTASection() {
  return (
    <Section spacing="xl" className="relative overflow-hidden bg-gradient-to-b from-[var(--surface-light)] to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
      </div>

      <div className="text-center max-w-3xl mx-auto">
        {/* Urgency indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-primary)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-primary)]"></span>
          </span>
          <span className="text-sm font-medium text-[var(--brand-primary)]">
            2,847 creators signed up this week
          </span>
        </div>

        <Heading as="h2" className="mb-4">
          Your First Viral Video Is One Tap Away
        </Heading>
        <Text variant="large" className="mb-8">
          Join 14,258+ creators who stopped struggling with editing software and started posting content that actually gets views.
        </Text>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button size="lg" className="min-w-[200px]">
            Download for iOS
          </Button>
          <Button size="lg" variant="secondary" className="min-w-[200px]">
            Download for Android
          </Button>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Free plan available
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Cancel anytime
          </div>
        </div>

        {/* App Store badges placeholder */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="flex items-center gap-3 px-4 py-2 bg-black rounded-lg">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-gray-400">Download on the</div>
              <div className="text-sm font-semibold text-white">App Store</div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-black rounded-lg">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19 0 .5-.25.92-.59 1.19l-2.39 1.38-2.5-2.5 2.5-2.5 2.39 1.24m-15.6-9.9L15.54 12l-2.27 2.27-8.49-8.49.78-.56z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-gray-400">Get it on</div>
              <div className="text-sm font-semibold text-white">Google Play</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
