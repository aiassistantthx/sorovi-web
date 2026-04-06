import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Save 10+ Hours Per Video",
    description: "What takes a day with traditional tools takes minutes with Sorovi. Focus on ideas, not editing.",
    stat: "5 min avg",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Save $3,000+ Per Video",
    description: "One agency video costs thousands. Sorovi gives you unlimited videos for a flat monthly fee.",
    stat: "10x cheaper",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Proven to Get Views",
    description: "400+ creators have hit 100K+ views. Our AI is trained on viral patterns that work.",
    stat: "400+ viral",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "You Own Everything",
    description: "100% commercial rights to every video. Use them, sell them, monetize them — they're yours.",
    stat: "Full rights",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "32 Languages Supported",
    description: "Reach global audiences with AI voices and translations. No translators needed.",
    stat: "32 languages",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Works on Any Device",
    description: "iOS app, Android app, and web editor. Create anywhere, anytime — even on the go.",
    stat: "All devices",
  },
];

export function BenefitsSection() {
  return (
    <Section spacing="xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-4">
          <span className="text-xs font-medium text-[var(--brand-primary)] uppercase tracking-wider">
            Why Sorovi
          </span>
        </div>
        <Heading as="h2" className="mb-4">
          The Unfair Advantage for Creators
        </Heading>
        <Text variant="large" className="max-w-2xl mx-auto">
          While others spend hours editing, you&apos;ll be posting your third video of the day.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} variant="flat" hover={false} className="group hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] flex items-center justify-center group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {benefit.title}
                  </h3>
                </div>
                <Text variant="small" className="mb-2">
                  {benefit.description}
                </Text>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[var(--brand-primary)]/10 text-xs font-medium text-[var(--brand-primary)]">
                  {benefit.stat}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
