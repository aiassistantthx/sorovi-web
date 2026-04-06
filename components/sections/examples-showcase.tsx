import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import Link from "next/link";

const examples = [
  {
    title: "Product Showcase",
    category: "E-commerce",
    views: "1.2M",
    badge: "Photo → Video",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Day in My Life",
    category: "Lifestyle",
    views: "2.3M",
    badge: "AI Avatar",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Recipe Tutorial",
    category: "Food",
    views: "890K",
    badge: "AI Script",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Fitness Challenge",
    category: "Health",
    views: "1.5M",
    badge: "Photo → Video",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Tech Review",
    category: "Tech",
    views: "560K",
    badge: "AI Voice",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Fashion Haul",
    category: "Fashion",
    views: "980K",
    badge: "AI Avatar",
    gradient: "from-rose-500/20 to-pink-500/20",
  },
];

export function ExamplesShowcaseSection() {
  return (
    <Section spacing="xl" id="examples">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-4">
          <span className="text-xs font-medium text-[var(--brand-primary)] uppercase tracking-wider">
            Results
          </span>
        </div>
        <Heading as="h2" className="mb-4">
          Created by Sorovi, Watched by Millions
        </Heading>
        <Text variant="large" className="max-w-2xl mx-auto">
          Real videos from real creators. Each made in under 5 minutes using AI — no fancy equipment required.
        </Text>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        {examples.map((example, index) => (
          <Card key={index} variant="elevated" className="group cursor-pointer p-3 md:p-4 hover:shadow-xl transition-all">
            {/* Video Placeholder */}
            <div className={`relative aspect-[9/16] max-h-[280px] md:max-h-[320px] bg-gradient-to-br ${example.gradient} rounded-xl mb-3 overflow-hidden`}>
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--text-primary)]/5 group-hover:bg-[var(--text-primary)]/10 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[var(--brand-primary)] ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-[var(--brand-primary)] text-[10px] md:text-xs font-medium text-white">
                {example.badge}
              </div>

              {/* Views */}
              <div className="absolute bottom-2 right-2 px-2 py-1 rounded-full bg-white/95 shadow-sm text-[10px] md:text-xs font-semibold text-[var(--text-primary)]">
                {example.views}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="text-[10px] md:text-xs text-[var(--brand-primary)] font-medium mb-0.5">
                {example.category}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-[var(--text-primary)] line-clamp-1">
                {example.title}
              </h3>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link href="/tools">
          <Button size="lg">
            Explore All AI Tools
          </Button>
        </Link>
        <Text variant="small" className="text-[var(--text-muted)] mt-3">
          42+ creative tools for every type of content
        </Text>
      </div>
    </Section>
  );
}
