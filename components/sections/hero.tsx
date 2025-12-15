import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

export function HeroSection() {
  return (
    <Section spacing="xl" className="relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-cyan)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[var(--brand-secondary)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 mb-8 hover:border-white/20 transition-colors">
          <span className="text-sm font-medium text-[var(--accent-blue)]">
            ✨ #1 AI Video Generation App
          </span>
        </div>

        {/* Hero Heading */}
        <Heading as="h1" gradient className="mb-4">
          Create Viral Videos in Minutes with AI
        </Heading>

        {/* Hero Description */}
        <Text variant="large" className="mb-6 max-w-3xl mx-auto">
          Transform your ideas into stunning TikTok, Instagram Reels, and YouTube Shorts
          with the power of AI. No editing skills required.
        </Text>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button size="lg">Download for iOS</Button>
          <Button size="lg" variant="secondary">
            Download for Android
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[var(--text-gray-300)]">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--accent-cyan)] border-2 border-[var(--bg-dark)]"
                />
              ))}
            </div>
            <span>Loved by <strong className="text-white">14,258+</strong> creators</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span><strong className="text-white">4.8</strong> rating on App Store</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
