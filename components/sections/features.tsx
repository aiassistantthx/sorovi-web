import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

const features = [
  {
    icon: "🤖",
    title: "AI Script Generator",
    description: "Generate engaging scripts for your videos with AI in seconds. Just provide a topic and let our AI create compelling narratives.",
  },
  {
    icon: "🎭",
    title: "AI Avatars & Actors",
    description: "Choose from 100+ AI avatars or create your own custom avatar. No need for cameras or actors—our AI brings your content to life.",
  },
  {
    icon: "🎨",
    title: "Video Templates & Styles",
    description: "100+ professional templates for every type of content. From product reviews to educational videos, we've got you covered.",
  },
  {
    icon: "🎵",
    title: "AI Voice & Music",
    description: "50+ unique AI voices in 32 languages plus AI-generated background music. Create the perfect audio for your videos.",
  },
  {
    icon: "✂️",
    title: "Super-Simple Editor",
    description: "Intuitive drag-and-drop editor with AI-powered suggestions. Edit like a pro without any experience.",
  },
  {
    icon: "📱",
    title: "Multi-Platform Export",
    description: "Export for TikTok, Instagram, YouTube, and more. Publish directly or download in HD quality with no watermarks.",
  },
];

export function FeaturesSection() {
  return (
    <Section spacing="xl" className="bg-[var(--surface-dark)]/30">
      <div className="text-center mb-16">
        <Heading as="h2" className="mb-4">
          Everything You Need to Create Amazing Videos
        </Heading>
        <Text variant="large" className="max-w-2xl mx-auto">
          Powerful AI tools combined with simple editing—all in one place
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} variant="glass">
            <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)] flex items-center justify-center mb-4">
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
  );
}
