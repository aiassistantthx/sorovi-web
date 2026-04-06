import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageFAQ, FinalCTA } from "@/components/sections";

export const metadata = {
  title: "Free AI Video Generator | Hyreel - Create Videos from Photos Free",
  description:
    "Create professional AI videos from photos for free. No credit card, no watermark on basic videos, 5 free videos daily. Transform photos into viral content.",
  alternates: {
    canonical: "https://hyreel.app/free-ai-video-generator",
  },
};

const faqs = [
  {
    question: "Is Hyreel really free?",
    answer:
      "Yes! Hyreel offers a generous free tier with 5 videos per day. You can create professional AI videos without spending a penny. No credit card required to start.",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "Free users get 5 videos per day, access to all motion effects (zoom, orbit, parallax), standard resolution exports, and direct social media sharing. It's a fully functional experience.",
  },
  {
    question: "Is there a watermark on free videos?",
    answer:
      "Free plan videos include a small Hyreel watermark. Upgrade to Creator ($9.99/mo) or Business ($29.99/mo) for watermark-free exports.",
  },
  {
    question: "How long can I use the free plan?",
    answer:
      "Forever! The free plan doesn't expire. Create 5 videos every day, indefinitely. Upgrade only when you need more volume or watermark-free exports.",
  },
  {
    question: "What happens if I need more than 5 videos?",
    answer:
      "Upgrade to Creator plan for unlimited videos at $9.99/month. That's less than the cost of a single stock video clip.",
  },
  {
    question: "Do I need to provide payment info for the free plan?",
    answer:
      "No! Download the app and start creating immediately. No credit card, no payment info, no commitments.",
  },
];

export default function FreeAIVideoGeneratorPage() {
  return (
    <>
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--brand-primary)]">
              100% Free to Start
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-[var(--text-primary)] mb-6">
            Free AI Video Generator
          </h1>
          <Text variant="large" className="mb-8 max-w-2xl mx-auto">
            Create professional videos from photos without spending a dime. 5
            free videos every day, forever. No credit card required.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Start Creating Free</Button>
            <Link href="/pricing">
              <Button size="lg" variant="secondary">
                Compare Plans
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section spacing="lg" className="border-y border-[var(--border-color)] bg-[var(--surface-light)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: "5", label: "Free Videos Daily" },
            { value: "$0", label: "Cost to Start" },
            { value: "All", label: "Effects Included" },
            { value: "Forever", label: "Free Plan Duration" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-1">
                {stat.value}
              </div>
              <Text variant="small" className="text-[var(--text-secondary)]">
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            What You Get for Free
          </Heading>
          <Text variant="large">
            A fully-featured experience at zero cost
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: "🎬",
              title: "5 Videos Per Day",
              description:
                "Create up to 5 professional videos every single day. That's 150 videos per month, completely free.",
            },
            {
              icon: "✨",
              title: "All Motion Effects",
              description:
                "Access every effect: zoom, orbit, parallax, pan, and more. No effects locked behind paywalls.",
            },
            {
              icon: "📱",
              title: "Full iOS App",
              description:
                "Complete mobile experience. Create, edit, and share professional videos from your phone.",
            },
            {
              icon: "🎤",
              title: "AI Voice Included",
              description:
                "Add professional voiceovers with AI-generated voices. Multiple languages available.",
            },
            {
              icon: "🎵",
              title: "Music Library",
              description:
                "Access royalty-free music to complete your videos. No copyright worries.",
            },
            {
              icon: "📤",
              title: "Direct Sharing",
              description:
                "Export directly to TikTok, Instagram, YouTube, and more. One-tap social sharing.",
            },
          ].map((feature, index) => (
            <Card key={index} variant="elevated">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {feature.title}
              </h3>
              <Text variant="small">{feature.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Free vs. Paid Plans
          </Heading>
          <Text variant="large">
            See what you get at each tier
          </Text>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card variant="elevated">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border-color)]">
                    <th className="text-left py-4 px-4 font-semibold text-[var(--text-primary)]">
                      Feature
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-[var(--text-primary)]">
                      Free
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-[var(--brand-primary)]">
                      Creator $9.99/mo
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-[var(--text-primary)]">
                      Business $29.99/mo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Videos per day", "5", "Unlimited", "Unlimited"],
                    ["Motion effects", "All", "All", "All"],
                    ["Resolution", "1080p", "1080p", "4K"],
                    ["Watermark", "Yes", "No", "No"],
                    ["AI voices", "Basic", "50+", "50+ Premium"],
                    ["Priority processing", "No", "Yes", "Yes"],
                    ["Team features", "No", "No", "Yes"],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-[var(--border-color)] last:border-0"
                    >
                      <td className="py-4 px-4 text-[var(--text-secondary)]">
                        {row[0]}
                      </td>
                      <td className="py-4 px-4 text-center">{row[1]}</td>
                      <td className="py-4 px-4 text-center font-medium text-[var(--brand-primary)]">
                        {row[2]}
                      </td>
                      <td className="py-4 px-4 text-center">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </Section>

      <PageFAQ
        title="Frequently Asked Questions"
        description="Common questions about the free plan"
        items={faqs}
        variant="default"
        includeSchema={true}
      />

      <FinalCTA
        title="Start Creating Free Today"
        description="No credit card. No commitment. Just free professional videos."
        primaryCta={{ text: "Create Free Videos" }}
        secondaryCta={{ text: "View Pricing", href: "/pricing" }}
      />
    </>
  );
}
