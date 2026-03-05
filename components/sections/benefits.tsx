import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

const benefits = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Create professional videos in minutes, not hours. Our AI handles all the heavy lifting so you can focus on your content and creativity.",
  },
  {
    icon: "💰",
    title: "Cost Effective",
    description: "Save thousands on video production. One video with a traditional agency costs $3,000+. With Sorovi, create unlimited videos for a fraction of the cost.",
  },
  {
    icon: "🎨",
    title: "Unlimited Creativity",
    description: "100+ templates, 50+ voices, AI-generated visuals, and complete customization. Every tool you need to bring your vision to life.",
  },
  {
    icon: "📈",
    title: "Proven Results",
    description: "Over 400 creators have reached 100K+ views using Sorovi. Our AI is optimized for viral content that performs on every platform.",
  },
  {
    icon: "🔒",
    title: "You Own Everything",
    description: "100% ownership of all videos you create. Use them commercially, sell them, or do whatever you want. No hidden fees or licenses.",
  },
  {
    icon: "🌍",
    title: "Global Reach",
    description: "Create content in 32 languages with AI voices and translations. Reach audiences worldwide without hiring translators or voice actors.",
  },
];

export function BenefitsSection() {
  return (
    <Section spacing="xl" className="bg-gradient-to-b from-transparent via-[var(--surface-dark)]/30 to-transparent">
      <div className="text-center mb-10">
        <Heading as="h2" className="mb-4">
          Why Creators Love Sorovi
        </Heading>
        <Text variant="large">
          Everything you need to create, edit, and publish viral videos—all in one place
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} variant="glass" hover={false} className="hover:border-[var(--brand-purple)]/50 transition-all">
            <div className="text-5xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {benefit.title}
            </h3>
            <Text variant="small">
              {benefit.description}
            </Text>
          </Card>
        ))}
      </div>
    </Section>
  );
}
