import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

const features = [
  {
    icon: "📸",
    title: "Photo-to-Video AI",
    description: "Upload a single photo and watch AI turn it into a dynamic video with motion, transitions, and effects. Perfect for product shots and selfies.",
    highlight: "Most Popular",
  },
  {
    icon: "✍️",
    title: "AI Script Writer",
    description: "Tell AI your topic and get a viral-ready script in seconds. Optimized for hooks, retention, and call-to-actions that convert.",
    highlight: null,
  },
  {
    icon: "🎭",
    title: "100+ AI Avatars",
    description: "Choose from realistic AI presenters or create your own digital twin. No camera, no filming, no awkward retakes.",
    highlight: null,
  },
  {
    icon: "🎙️",
    title: "50+ AI Voices",
    description: "Natural-sounding voiceovers in 32 languages. Clone your own voice or pick from our library of professional tones.",
    highlight: null,
  },
  {
    icon: "🎬",
    title: "One-Tap Templates",
    description: "100+ templates for every niche: product reviews, tutorials, stories, memes, educational content, and more.",
    highlight: null,
  },
  {
    icon: "📲",
    title: "Direct Publishing",
    description: "Export in HD to TikTok, Instagram, YouTube, and more. No watermarks on paid plans. Schedule posts directly from the app.",
    highlight: null,
  },
];

export function FeaturesSection() {
  return (
    <Section spacing="xl" className="bg-[var(--surface-light)]">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-4">
          <span className="text-xs font-medium text-[var(--brand-primary)] uppercase tracking-wider">
            Features
          </span>
        </div>
        <Heading as="h2" className="mb-4">
          Everything You Need to Go Viral
        </Heading>
        <Text variant="large" className="max-w-2xl mx-auto">
          Professional video creation tools that used to cost thousands, now powered by AI and available on your phone.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} variant="elevated" className="relative">
            {feature.highlight && (
              <div className="absolute -top-3 left-4">
                <span className="px-3 py-1 rounded-full bg-[var(--brand-primary)] text-white text-xs font-medium">
                  {feature.highlight}
                </span>
              </div>
            )}
            <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mb-4">
              <span className="text-2xl">{feature.icon}</span>
            </div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              {feature.title}
            </h3>
            <Text variant="small">{feature.description}</Text>
          </Card>
        ))}
      </div>
    </Section>
  );
}
