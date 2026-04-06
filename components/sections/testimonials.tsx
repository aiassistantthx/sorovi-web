import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

const testimonials = [
  {
    quote: "I went from 500 views to 2M views on my third video. The AI just knows what works.",
    author: "Sarah K.",
    role: "Fashion Creator",
    avatar: "SK",
    stats: "2M+ views",
  },
  {
    quote: "Used to spend $2,000/month on a video editor. Now I create better content myself in minutes.",
    author: "Marcus J.",
    role: "E-commerce Owner",
    avatar: "MJ",
    stats: "10x ROI",
  },
  {
    quote: "The photo-to-video feature is insane. Upload a product shot, get a viral-ready ad. Game over.",
    author: "Elena R.",
    role: "Dropshipper",
    avatar: "ER",
    stats: "$50K/mo",
  },
  {
    quote: "My Reels engagement went up 400% after switching to Sorovi. The AI voiceover sounds natural.",
    author: "David L.",
    role: "Fitness Coach",
    avatar: "DL",
    stats: "400% growth",
  },
  {
    quote: "Finally, an AI tool that doesn't make your content look AI-generated. Quality is incredible.",
    author: "Priya M.",
    role: "Food Blogger",
    avatar: "PM",
    stats: "890K views",
  },
  {
    quote: "Went viral on TikTok within a week of using Sorovi. My agency clients are blown away.",
    author: "James T.",
    role: "Marketing Agency",
    avatar: "JT",
    stats: "15 clients",
  },
];

export function TestimonialsSection() {
  return (
    <Section spacing="xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-4">
          <span className="text-xs font-medium text-[var(--brand-primary)] uppercase tracking-wider">
            Success Stories
          </span>
        </div>
        <Heading as="h2" className="mb-4">
          Creators Are Getting Real Results
        </Heading>
        <Text variant="large" className="max-w-2xl mx-auto">
          From first-time creators to full-time influencers, see what&apos;s possible with AI-powered video.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} variant="elevated" className="relative">
            {/* Stats badge */}
            <div className="absolute -top-3 right-4">
              <span className="px-3 py-1 rounded-full bg-[var(--brand-primary)] text-white text-xs font-bold">
                {testimonial.stats}
              </span>
            </div>

            {/* Quote */}
            <div className="mb-6">
              <svg className="w-8 h-8 text-[var(--brand-primary)]/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-[var(--text-primary)] font-medium leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--accent-green)] flex items-center justify-center text-white text-sm font-bold">
                {testimonial.avatar}
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-primary)]">
                  {testimonial.author}
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom social proof bar */}
      <div className="mt-12 p-6 rounded-2xl bg-[var(--surface-light)] border border-[var(--border-color)]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-[var(--text-primary)]">
              4.8/5 on App Store
            </span>
          </div>
          <div className="hidden md:block w-px h-6 bg-[var(--border-color)]" />
          <div className="text-sm text-[var(--text-secondary)]">
            <span className="font-semibold text-[var(--text-primary)]">14,258+</span> active creators
          </div>
          <div className="hidden md:block w-px h-6 bg-[var(--border-color)]" />
          <div className="text-sm text-[var(--text-secondary)]">
            <span className="font-semibold text-[var(--text-primary)]">240,909+</span> videos created
          </div>
        </div>
      </div>
    </Section>
  );
}
