import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageFAQ, FinalCTA } from "@/components/sections";

export const metadata = {
  title: "Affordable AI Video Maker | Hyreel - Pro Videos from $9.99/mo",
  description:
    "The most affordable AI video generator with professional results. Unlimited videos from $9.99/month. Cheaper than Canva, Synthesia, and traditional video production.",
  alternates: {
    canonical: "https://hyreel.app/cheap-ai-video-maker",
  },
};

const faqs = [
  {
    question: "Is Hyreel really the cheapest AI video maker?",
    answer:
      "Hyreel offers one of the best value propositions in AI video. At $9.99/mo for unlimited videos, you pay less than most competitors charge for 10-20 videos. Plus, there's a free tier with 5 videos/day.",
  },
  {
    question: "How does Hyreel compare to Canva Pro pricing?",
    answer:
      "Canva Pro costs $12.99/mo and includes limited AI video features. Hyreel Creator is $9.99/mo with unlimited AI video creation and superior motion effects. Better AI video at a lower price.",
  },
  {
    question: "Is cheap quality low quality?",
    answer:
      "Absolutely not! Hyreel's low pricing comes from efficient AI technology, not compromised quality. You get professional cinematic effects that rival expensive production. The price reflects smart technology, not inferior output.",
  },
  {
    question: "What's the catch with the free plan?",
    answer:
      "No catch! Free plan gives you 5 videos daily with a small watermark. It's fully functional — we just hope you'll upgrade when you need more volume or watermark-free exports.",
  },
  {
    question: "How much would this cost with traditional video production?",
    answer:
      "A single professionally produced video costs $200-$500 minimum. With Hyreel, you create unlimited videos for $9.99/month. One subscription costs less than 5% of a single traditional video.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes! No contracts, no commitments. Cancel anytime and your subscription ends at the end of your billing period. You can always come back to the free plan.",
  },
];

const competitors = [
  { name: "Hyreel Creator", price: "$9.99/mo", videos: "Unlimited", note: "Best value" },
  { name: "Canva Pro", price: "$12.99/mo", videos: "Limited AI", note: "" },
  { name: "Synthesia", price: "$29/mo", videos: "10 min", note: "Avatar only" },
  { name: "Runway", price: "$15/mo", videos: "Credits", note: "Complex" },
  { name: "InVideo AI", price: "$25/mo", videos: "50 videos", note: "Stock based" },
  { name: "Pictory", price: "$25/mo", videos: "30 videos", note: "Text based" },
];

export default function CheapAIVideoMakerPage() {
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
              Best Value
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-[var(--text-primary)] mb-6">
            Affordable AI Video Maker
          </h1>
          <Text variant="large" className="mb-8 max-w-2xl mx-auto">
            Professional AI videos without the professional price tag. Unlimited
            videos from just $9.99/month. Free plan available.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Start Free</Button>
            <Link href="/pricing">
              <Button size="lg" variant="secondary">
                See Pricing
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section spacing="lg" className="border-y border-[var(--border-color)] bg-[var(--surface-light)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: "$0", label: "To Start" },
            { value: "$9.99", label: "Unlimited Plan" },
            { value: "70%", label: "Cheaper Than Competitors" },
            { value: "∞", label: "Videos Per Month" },
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
            Price Comparison
          </Heading>
          <Text variant="large">
            See how Hyreel stacks up against the competition
          </Text>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card variant="elevated">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border-color)]">
                    <th className="text-left py-4 px-4 font-semibold text-[var(--text-primary)]">
                      Tool
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-[var(--text-primary)]">
                      Price
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-[var(--text-primary)]">
                      Videos
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-[var(--text-primary)]">
                      Note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((comp, index) => (
                    <tr
                      key={index}
                      className={`border-b border-[var(--border-color)] last:border-0 ${
                        index === 0 ? "bg-[var(--brand-primary)]/5" : ""
                      }`}
                    >
                      <td className={`py-4 px-4 font-medium ${
                        index === 0 ? "text-[var(--brand-primary)]" : "text-[var(--text-primary)]"
                      }`}>
                        {comp.name}
                      </td>
                      <td className={`py-4 px-4 text-center font-semibold ${
                        index === 0 ? "text-[var(--brand-primary)]" : ""
                      }`}>
                        {comp.price}
                      </td>
                      <td className="py-4 px-4 text-center text-[var(--text-secondary)]">
                        {comp.videos}
                      </td>
                      <td className={`py-4 px-4 text-center text-sm ${
                        index === 0 ? "text-[var(--brand-primary)] font-medium" : "text-[var(--text-secondary)]"
                      }`}>
                        {comp.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Why We Can Offer Lower Prices
          </Heading>
          <Text variant="large">
            Smart technology, not compromised quality
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: "🤖",
              title: "Efficient AI",
              description:
                "Our AI is optimized for speed and efficiency. Lower compute costs mean lower prices for you.",
            },
            {
              icon: "📱",
              title: "Mobile-First",
              description:
                "By focusing on mobile, we avoid expensive cloud rendering infrastructure other tools require.",
            },
            {
              icon: "🎯",
              title: "Focused Product",
              description:
                "We do one thing exceptionally well: photo-to-video. No bloat means no bloated prices.",
            },
            {
              icon: "📈",
              title: "Volume Model",
              description:
                "More users at lower prices beats fewer users at higher prices. We chose accessibility.",
            },
            {
              icon: "🚫",
              title: "No Stock Libraries",
              description:
                "We don't license expensive stock footage. You provide photos; we add motion.",
            },
            {
              icon: "💡",
              title: "Smart Engineering",
              description:
                "Modern tech stack and lean operations. Savings passed directly to customers.",
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

      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Cost Comparison: Hyreel vs Traditional
          </Heading>
          <Text variant="large">
            The math speaks for itself
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card variant="elevated" className="border-red-200">
            <h3 className="text-xl font-semibold text-red-800 mb-4">
              Traditional Video Production
            </h3>
            <ul className="space-y-3">
              {[
                "1 product video: $300-500",
                "10 videos: $3,000-5,000",
                "100 videos: $30,000-50,000",
                "Waiting time: Days to weeks",
                "Revisions: Extra cost",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-red-700">
                  <span className="text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="elevated" className="border-[var(--brand-primary)]/30">
            <h3 className="text-xl font-semibold text-[var(--brand-primary)] mb-4">
              Hyreel Creator Plan
            </h3>
            <ul className="space-y-3">
              {[
                "Unlimited videos: $9.99/mo",
                "10 videos: $9.99/mo",
                "100 videos: $9.99/mo",
                "Creation time: Seconds",
                "Revisions: Unlimited, free",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-green-700">
                  <span className="text-[var(--brand-primary)]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <PageFAQ
        title="Frequently Asked Questions"
        description="Common questions about Hyreel pricing"
        items={faqs}
        variant="light"
        includeSchema={true}
      />

      <FinalCTA
        title="Start Creating Affordable Videos"
        description="Professional AI videos at a fraction of the cost. Start free today."
        primaryCta={{ text: "Start Free" }}
        secondaryCta={{ text: "View Pricing", href: "/pricing" }}
      />
    </>
  );
}
