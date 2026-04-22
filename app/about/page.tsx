import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateAboutPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generateAlternates } from "@/lib/seo/alternates";
import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/us/app/sorovi-ai-photo-to-video/id6746805170";

export const metadata = {
  title: "About Us - Hyreel AI Video Generation",
  description:
    "Learn about Hyreel's mission to democratize video creation with AI. Founded in 2023, we've helped 14,000+ creators make 240,000+ videos.",
  alternates: generateAlternates("/about"),
  openGraph: {
    title: "About Hyreel - AI Video Generation App",
    description:
      "Making video creation accessible to everyone with AI technology.",
    images: ["/og-image.png"],
  },
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
  const aboutSchema = generateAboutPageSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
            className="justify-center mb-6"
          />
          <Heading as="h1" className="mb-6">
            Making Video Creation Accessible to Everyone
          </Heading>
          <Text variant="large">
            Hyreel was born from a simple belief: everyone has stories worth sharing, but not everyone has the time, skills, or budget to create professional videos. We&apos;re changing that with AI.
          </Text>
        </div>
      </Section>

      {/* Stats Section */}
      <Section spacing="lg" className="bg-[var(--surface-light)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-2">
                {stat.value}
              </div>
              <Text variant="small" className="text-[var(--text-secondary)]">
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
        <div className="max-w-3xl mx-auto space-y-6">
          <Text variant="body">
            In 2023, our founders noticed a growing gap: social media was exploding with video content, but creating quality videos remained expensive and time-consuming. Small businesses, content creators, and educators were left behind.
          </Text>
          <Text variant="body">
            We built Hyreel to level the playing field. Using cutting-edge AI technology, we made it possible to create professional videos in minutes instead of hours, at a fraction of traditional costs.
          </Text>
          <Text variant="body">
            Today, over 14,000 creators use Hyreel to share their stories, grow their businesses, and connect with audiences worldwide. From product reviews to educational content, our AI helps bring ideas to life.
          </Text>
        </div>
      </Section>

      {/* Values Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
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
            <Card key={index} variant="elevated">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
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
          <Text variant="body" className="mb-8 max-w-3xl mx-auto">
            Our platform combines multiple AI technologies to deliver a seamless video creation experience. From script generation to voice synthesis, visual creation to editing, every step is powered by advanced machine learning models.
          </Text>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {["GPT-4", "Stable Diffusion", "ElevenLabs", "Custom Models"].map((tech, index) => (
              <Card key={index} variant="elevated" className="text-center">
                <Text variant="small" className="font-semibold text-[var(--text-primary)]">
                  {tech}
                </Text>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            Join Our Community
          </Heading>
          <Text variant="large" className="mb-8">
            Be part of the AI video revolution. Start creating professional content today.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Get Started Free
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
