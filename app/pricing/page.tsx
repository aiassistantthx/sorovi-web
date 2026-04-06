import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Pricing - Sorovi",
  description: "Choose the perfect plan for your video creation needs. Start free, upgrade anytime.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out Sorovi",
    features: [
      "3 videos per month",
      "720p quality",
      "Basic AI features",
      "Sorovi watermark",
      "Limited templates",
      "Community support",
    ],
    limitations: [
      "5 videos per month limit",
      "Watermark on videos",
      "720p max quality",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Creator",
    price: "$39",
    period: "per month",
    description: "Best for individual creators",
    features: [
      "Unlimited videos",
      "1080p HD quality",
      "All AI features",
      "No watermarks",
      "100+ templates",
      "50+ AI voices",
      "Priority support",
      "Direct publishing",
    ],
    cta: "Start Creating",
    popular: true,
  },
  {
    name: "Business",
    price: "$99",
    period: "per month",
    description: "For teams and agencies",
    features: [
      "Everything in Creator",
      "4K quality",
      "Team collaboration",
      "5 team members",
      "Custom branding",
      "API access",
      "Analytics dashboard",
      "Dedicated support",
      "Custom AI training",
    ],
    cta: "Start Business Trial",
    popular: false,
  },
];

const faqs = [
  {
    q: "Can I change plans anytime?",
    a: "Yes! Upgrade, downgrade, or cancel anytime. Changes take effect immediately.",
  },
  {
    q: "What happens if I exceed my plan limits?",
    a: "On the Free plan, you'll need to upgrade. Paid plans have unlimited videos.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes, we offer a 14-day money-back guarantee on all paid plans.",
  },
  {
    q: "Can I use videos commercially?",
    a: "Absolutely! You own 100% rights to all videos you create.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <Heading as="h1" className="mb-6">
            Simple, Transparent Pricing
          </Heading>
          <Text variant="large">
            Start free, upgrade when you're ready. No hidden fees, no surprises. Cancel anytime.
          </Text>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section spacing="xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              variant="elevated"
              className={`relative overflow-visible ${
                plan.popular
                  ? "border-[var(--brand-primary)] shadow-lg shadow-[var(--brand-primary)]/10"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-[var(--brand-primary)] text-white text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold text-[var(--text-primary)]">
                    {plan.price}
                  </span>
                  <span className="text-[var(--text-muted)]">
                    /{plan.period}
                  </span>
                </div>
                <Text variant="small">{plan.description}</Text>
              </div>

              <Button
                variant={plan.popular ? "primary" : "secondary"}
                className="w-full mb-6"
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--brand-primary)] flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[var(--text-secondary)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Comparison Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Compare All Features
          </Heading>
          <Text variant="large">
            See what's included in each plan
          </Text>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-6xl mx-auto">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left py-4 px-4 text-[var(--text-primary)] font-semibold">
                  Feature
                </th>
                <th className="text-center py-4 px-4 text-[var(--text-primary)] font-semibold">
                  Free
                </th>
                <th className="text-center py-4 px-4 text-[var(--text-primary)] font-semibold bg-[var(--brand-primary)]/5 border-x border-[var(--brand-primary)]/20">
                  Creator
                </th>
                <th className="text-center py-4 px-4 text-[var(--text-primary)] font-semibold">
                  Business
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Videos per month", "3", "Unlimited", "Unlimited"],
                ["Video quality", "720p", "1080p", "4K"],
                ["AI features", "Basic", "All", "All + Custom"],
                ["Watermark", "Yes", "No", "No"],
                ["Templates", "Limited", "100+", "100+"],
                ["Team members", "1", "1", "5"],
                ["Support", "Community", "Priority", "Dedicated"],
              ].map((row, index) => (
                <tr key={index} className="border-b border-[var(--border-color)]">
                  <td className="py-4 px-4 text-[var(--text-secondary)]">
                    {row[0]}
                  </td>
                  <td className="py-4 px-4 text-center text-[var(--text-muted)]">
                    {row[1]}
                  </td>
                  <td className="py-4 px-4 text-center text-[var(--text-primary)] font-medium bg-[var(--brand-primary)]/5 border-x border-[var(--brand-primary)]/10">
                    {row[2]}
                  </td>
                  <td className="py-4 px-4 text-center text-[var(--text-primary)] font-medium">
                    {row[3]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Pricing FAQs
          </Heading>
          <Text variant="large">
            Common questions about our pricing
          </Text>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} variant="elevated">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                {faq.q}
              </h3>
              <Text variant="small">{faq.a}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            Start Creating Today
          </Heading>
          <Text variant="large" className="mb-8">
            Join 14,258+ creators making viral content with Sorovi
          </Text>
          <Button size="lg">Get Started Free</Button>
          <Text variant="small" className="mt-4 text-[var(--text-muted)]">
            No credit card required • Cancel anytime
          </Text>
        </div>
      </Section>
    </>
  );
}
