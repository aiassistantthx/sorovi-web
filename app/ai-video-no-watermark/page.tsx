import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageFAQ, FinalCTA } from "@/components/sections";
import { generateAlternates } from "@/lib/seo/alternates";

export const metadata = {
  title: "AI Video Generator Without Watermark | Hyreel - Clean Pro Videos",
  description:
    "Create professional AI videos without watermarks. Clean, brand-ready videos for business, marketing, and social media. Starting at $39/month.",
  alternates: generateAlternates("/ai-video-no-watermark"),
};

const faqs = [
  {
    question: "How do I get videos without watermarks?",
    answer:
      "Subscribe to Hyreel Creator ($39/mo) or Business ($99/mo) plan. All videos on paid plans export without any Hyreel branding or watermarks.",
  },
  {
    question: "Can I use watermark-free videos for commercial purposes?",
    answer:
      "Yes! Videos created on paid plans are fully yours for any commercial use — marketing, ads, client work, resale. No attribution required.",
  },
  {
    question: "What's the difference between Creator and Business plans?",
    answer:
      "Both are watermark-free. Creator ($39/mo) is for individual creators with 1080p and 50+ AI voices. Business ($99/mo) adds 4K resolution, premium AI voices, team collaboration, API access, and dedicated support.",
  },
  {
    question: "Is there a way to remove watermarks from free plan videos?",
    answer:
      "No, free plan videos always include the watermark. To get clean exports, upgrade to a paid plan. The watermark ensures free users can still create and test before committing.",
  },
  {
    question: "Can I try watermark-free before subscribing?",
    answer:
      "We offer a 7-day free trial of Creator plan. Create unlimited watermark-free videos during the trial to make sure Hyreel is right for you.",
  },
  {
    question: "Do watermark-free videos have any other limitations?",
    answer:
      "No! Watermark-free videos are identical to watermarked ones in every other way — same effects, same quality, same features. The only difference is no Hyreel branding.",
  },
];

export default function AIVideoNoWatermarkPage() {
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
              No Watermark
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-[var(--text-primary)] mb-6">
            AI Videos Without Watermarks
          </h1>
          <Text variant="large" className="mb-8 max-w-2xl mx-auto">
            Clean, professional videos with no branding. Perfect for business,
            marketing, and brand content. Starting at just $9.99/month.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Start 7-Day Free Trial</Button>
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
            { value: "0", label: "Watermarks" },
            { value: "$9.99", label: "Starting Price" },
            { value: "Unlimited", label: "Videos" },
            { value: "100%", label: "Commercial Use" },
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
            Why Watermark-Free Matters
          </Heading>
          <Text variant="large">
            Professional content demands professional presentation
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: "💼",
              title: "Brand Credibility",
              description:
                "Watermarks signal amateur content. Clean videos establish your brand as professional and trustworthy.",
            },
            {
              icon: "📈",
              title: "Higher Conversions",
              description:
                "Marketing videos without watermarks convert better. Viewers focus on your message, not distracting branding.",
            },
            {
              icon: "🤝",
              title: "Client Ready",
              description:
                "Deliver work to clients without third-party logos. Present videos as your professional production.",
            },
            {
              icon: "📱",
              title: "Social Media Polish",
              description:
                "Stand out in feeds with clean content. Watermarks make content look like ads for someone else.",
            },
            {
              icon: "🎯",
              title: "Ad Platform Approved",
              description:
                "Some ad platforms reject videos with watermarks. Clean content ensures ad approval.",
            },
            {
              icon: "✨",
              title: "Premium Perception",
              description:
                "Watermark-free content signals investment in quality. Your audience notices the difference.",
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
            Watermark-Free Plans
          </Heading>
          <Text variant="large">
            Choose the plan that fits your needs
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card variant="elevated" className="border-[var(--brand-primary)]/30">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                Creator
              </h3>
              <div className="text-4xl font-bold text-[var(--brand-primary)]">
                $9.99
                <span className="text-lg text-[var(--text-secondary)]">/mo</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                "Unlimited videos",
                "No watermarks",
                "All motion effects",
                "1080p resolution",
                "50+ AI voices",
                "Priority processing",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--brand-primary)] flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text-secondary)]">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">Start Free Trial</Button>
          </Card>

          <Card variant="elevated">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                Business
              </h3>
              <div className="text-4xl font-bold text-[var(--text-primary)]">
                $29.99
                <span className="text-lg text-[var(--text-secondary)]">/mo</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                "Everything in Creator",
                "4K resolution",
                "Premium AI voices",
                "Team collaboration",
                "Brand presets",
                "Priority support",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--brand-primary)] flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text-secondary)]">{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="secondary" className="w-full">
              Start Free Trial
            </Button>
          </Card>
        </div>
      </Section>

      <PageFAQ
        title="Frequently Asked Questions"
        description="Common questions about watermark-free videos"
        items={faqs}
        variant="default"
        includeSchema={true}
      />

      <FinalCTA
        title="Get Clean, Professional Videos"
        description="Start your 7-day free trial. No watermarks. No commitment."
        primaryCta={{ text: "Start Free Trial" }}
        secondaryCta={{ text: "View All Plans", href: "/pricing" }}
      />
    </>
  );
}
