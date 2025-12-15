import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-purple)]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-pink)]/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 mb-8">
            <span className="text-sm font-medium bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-pink)] bg-clip-text text-transparent">
              ✨ #1 AI Video Generation App
            </span>
          </div>

          {/* Hero Heading */}
          <Heading as="h1" gradient className="mb-6">
            Create Viral Videos
            <br />
            in Minutes with AI
          </Heading>

          {/* Hero Description */}
          <Text variant="large" className="mb-8 max-w-2xl mx-auto">
            Transform your ideas into stunning TikTok, Instagram Reels, and YouTube Shorts
            with the power of AI. No editing skills required.
          </Text>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Download for iOS</Button>
            <Button size="lg" variant="secondary">
              Download for Android
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-[var(--text-gray-300)]">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-purple)] to-[var(--brand-pink)] border-2 border-[var(--bg-dark)]"
                />
              ))}
            </div>
            <span>Loved by 14,258+ creators worldwide</span>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section spacing="lg" className="bg-[var(--surface-dark)]/50">
        <div className="text-center mb-16">
          <Heading as="h2" className="mb-4">
            Everything You Need
          </Heading>
          <Text variant="large" className="max-w-2xl mx-auto">
            Powerful AI tools to create professional videos in seconds
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} variant="glass">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-purple)] to-[var(--brand-pink)] flex items-center justify-center mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <Text variant="small">{feature.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section spacing="lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-pink)] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <Text variant="small">{stat.label}</Text>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" className="bg-gradient-to-br from-[var(--brand-purple)]/10 to-[var(--brand-pink)]/10 border-y border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <Heading as="h2" className="mb-4">
            Ready to Create Amazing Videos?
          </Heading>
          <Text variant="large" className="mb-8">
            Join thousands of creators who are already making viral content with Sorovi
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Get Started for Free</Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

// Data
const features = [
  {
    icon: "🤖",
    title: "AI Script Generator",
    description: "Generate engaging scripts for your videos with AI in seconds",
  },
  {
    icon: "🎭",
    title: "AI Avatars",
    description: "Choose from 100+ AI avatars or create your own custom avatar",
  },
  {
    icon: "🎨",
    title: "Templates & Styles",
    description: "100+ professional templates for every type of content",
  },
  {
    icon: "🎵",
    title: "AI Music & Voice",
    description: "50+ unique voices and AI-generated background music",
  },
  {
    icon: "✂️",
    title: "Smart Editor",
    description: "Super-simple editor with AI-powered suggestions",
  },
  {
    icon: "📱",
    title: "Multi-Platform",
    description: "Export for TikTok, Instagram, YouTube, and more",
  },
];

const stats = [
  { value: "240K+", label: "Videos Created" },
  { value: "14K+", label: "Active Creators" },
  { value: "400+", label: "Viral Videos" },
  { value: "32", label: "Languages" },
];
