import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "About Us - Sorovi",
  description: "Learn about Sorovi's mission to democratize video creation with AI technology",
};

const teamValues = [
  {
    icon: "🎯",
    title: "Our Mission",
    description: "Empower everyone to create professional videos without technical barriers. We believe creativity shouldn't be limited by skills or budget.",
  },
  {
    icon: "💡",
    title: "Innovation First",
    description: "We're pushing the boundaries of AI technology to make video creation faster, easier, and more accessible than ever before.",
  },
  {
    icon: "🤝",
    title: "Community Driven",
    description: "Built with feedback from 14,000+ creators worldwide. Your success drives our product development.",
  },
  {
    icon: "🌍",
    title: "Global Impact",
    description: "Supporting creators in 32 languages across 150+ countries. Breaking down language and geographic barriers.",
  },
];

const stats = [
  { value: "240,909+", label: "Videos Created" },
  { value: "14,258+", label: "Active Creators" },
  { value: "32", label: "Languages" },
  { value: "2023", label: "Founded" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/10 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <Heading as="h1" gradient className="mb-6">
            Making Video Creation Accessible to Everyone
          </Heading>
          <Text variant="large">
            Sorovi was born from a simple belief: everyone has stories worth sharing, but not everyone has the time, skills, or budget to create professional videos. We're changing that with AI.
          </Text>
        </div>
      </Section>

      {/* Stats Section */}
      <Section spacing="lg" className="bg-[var(--surface-dark)]/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <Text variant="small" className="text-[var(--text-gray-300)]">
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Story Section */}
      <Section spacing="xl">
        <Heading as="h2" className="mb-6 text-center">
          Our Story
        </Heading>
        <div className="space-y-6">
          <Text variant="body">
            In 2023, our founders noticed a growing gap: social media was exploding with video content, but creating quality videos remained expensive and time-consuming. Small businesses, content creators, and educators were left behind.
          </Text>
          <Text variant="body">
            We built Sorovi to level the playing field. Using cutting-edge AI technology, we made it possible to create professional videos in minutes instead of hours, at a fraction of traditional costs.
          </Text>
          <Text variant="body">
            Today, over 14,000 creators use Sorovi to share their stories, grow their businesses, and connect with audiences worldwide. From product reviews to educational content, our AI helps bring ideas to life.
          </Text>
        </div>
      </Section>

      {/* Values Section */}
      <Section spacing="xl" className="bg-[var(--surface-dark)]/30">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            What We Stand For
          </Heading>
          <Text variant="large">
            Our values guide every decision we make
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamValues.map((value, index) => (
            <Card key={index} variant="glass">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>
              <Text variant="small">{value.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Technology Section */}
      <Section spacing="xl">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            Powered by Cutting-Edge AI
          </Heading>
          <Text variant="body" className="mb-8">
            Our platform combines multiple AI technologies to deliver a seamless video creation experience. From script generation to voice synthesis, visual creation to editing, every step is powered by advanced machine learning models.
          </Text>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["GPT-4", "Stable Diffusion", "ElevenLabs", "Custom Models"].map((tech, index) => (
              <Card key={index} variant="glass" className="text-center">
                <Text variant="small" className="font-semibold text-white">
                  {tech}
                </Text>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl" className="bg-gradient-to-b from-transparent via-[var(--surface-dark)]/30 to-transparent">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            Join Our Community
          </Heading>
          <Text variant="large" className="mb-8">
            Be part of the AI video revolution. Start creating professional content today.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--brand-primary)] text-white font-medium hover:bg-[var(--accent-lime)] transition-colors"
            >
              Get Started Free
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
