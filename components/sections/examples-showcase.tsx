import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

const examples = [
  {
    title: "Product Review",
    category: "E-commerce",
    views: "1.2M",
    badge: "100% AI Generated",
  },
  {
    title: "Fitness Tutorial",
    category: "Health & Fitness",
    views: "890K",
    badge: "Avatar + Media",
  },
  {
    title: "Recipe Video",
    category: "Food & Cooking",
    views: "2.1M",
    badge: "100% AI Generated",
  },
  {
    title: "Tech Explainer",
    category: "Education",
    views: "560K",
    badge: "AI Script + Voice",
  },
  {
    title: "Travel Vlog",
    category: "Travel",
    views: "1.5M",
    badge: "100% AI Generated",
  },
  {
    title: "Fashion Trends",
    category: "Fashion",
    views: "980K",
    badge: "Avatar + Media",
  },
];

export function ExamplesShowcaseSection() {
  return (
    <Section spacing="xl" className="bg-[var(--surface-dark)]/30">
      <div className="text-center mb-10">
        <Heading as="h2" className="mb-4">
          240,909+ Videos Created by Creators Like You
        </Heading>
        <Text variant="large">
          From product reviews to educational content, see what's possible with Sorovi. Every video below was created with our AI tools in under 5 minutes.
        </Text>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {examples.map((example, index) => (
          <Card key={index} variant="glass" className="group cursor-pointer p-3 md:p-4">
            {/* Video Placeholder */}
            <div className="relative aspect-[9/16] max-h-[280px] md:max-h-[320px] bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--accent-cyan)]/20 rounded-xl mb-3 overflow-hidden">
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[var(--brand-primary)]/90 backdrop-blur-lg text-xs font-medium text-white">
                {example.badge}
              </div>

              {/* Views */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-lg text-xs font-medium text-white">
                👁 {example.views} views
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="text-xs text-[var(--brand-primary)] font-medium mb-1">
                {example.category}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-white line-clamp-1">
                {example.title}
              </h3>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button size="lg">
          Explore 42+ More Tools
        </Button>
      </div>
    </Section>
  );
}
