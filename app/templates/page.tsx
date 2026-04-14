import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { templates, getAllTemplateCategories } from "@/lib/templates";
import { generateAlternates } from "@/lib/seo/alternates";

export const metadata = {
  title: "Video Templates - AI Video Templates for Every Platform | Hyreel",
  description:
    "Explore AI video templates for TikTok, Instagram Reels, YouTube Shorts, products, real estate, fashion, food, and more. Create professional videos from photos in seconds.",
  alternates: generateAlternates("/templates"),
};

export default function TemplatesPage() {
  const categories = getAllTemplateCategories();

  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--brand-primary)]">
              Video Templates
            </span>
          </div>

          <Heading as="h1" className="mb-6">
            AI Video Templates for Every Platform
          </Heading>
          <Text variant="large" className="mb-8 max-w-3xl mx-auto">
            Professional video templates optimized for TikTok, Instagram, YouTube,
            and more. Transform photos into scroll-stopping content with AI motion
            effects.
          </Text>
          <Button size="lg">Browse All Templates</Button>
        </div>
      </Section>

      {/* Stats */}
      <Section spacing="lg" className="bg-[var(--surface-light)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10+", label: "Template Categories" },
            { value: "50+", label: "Motion Effects" },
            { value: "All", label: "Major Platforms" },
            { value: "Seconds", label: "Video Creation" },
          ].map((stat, index) => (
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

      {/* Templates by Category */}
      {categories.map((category, categoryIndex) => {
        const categoryTemplates = templates.filter(
          (template) => template.category === category
        );

        return (
          <Section
            key={categoryIndex}
            spacing="xl"
            className={
              categoryIndex % 2 === 0 ? "" : "bg-[var(--surface-light)]"
            }
          >
            <div className="mb-10">
              <Heading as="h2" className="mb-4">
                {category} Templates
              </Heading>
              <Text variant="large">
                Professional video templates for {category.toLowerCase()} content
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryTemplates.map((template, index) => (
                <Link
                  key={index}
                  href={`/templates/${template.slug}`}
                  className="block"
                >
                  <Card
                    variant="elevated"
                    className="group cursor-pointer h-full hover:border-[var(--brand-primary)]/30 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl md:text-5xl">{template.icon}</div>
                      <Badge variant="primary">{template.category}</Badge>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                      {template.name}
                    </h3>
                    <Text variant="small" className="mb-3 line-clamp-2">
                      {template.description}
                    </Text>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.platforms.slice(0, 3).map((platform, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-[var(--surface-light)] text-[var(--text-secondary)]"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--brand-primary)] text-sm font-medium">
                      View Template
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Section>
        );
      })}

      {/* Platform Quick Links */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Templates by Platform
          </Heading>
          <Text variant="large">
            Find templates optimized for your favorite platforms
          </Text>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { name: "TikTok", icon: "🎵", slug: "tiktok-video-templates" },
            { name: "Instagram", icon: "📸", slug: "instagram-reels-templates" },
            { name: "YouTube", icon: "▶️", slug: "youtube-shorts-templates" },
            { name: "E-commerce", icon: "🛒", slug: "product-video-templates" },
          ].map((platform, index) => (
            <Link
              key={index}
              href={`/templates/${platform.slug}`}
              className="group"
            >
              <Card
                variant="elevated"
                className="text-center hover:border-[var(--brand-primary)]/30 transition-all"
              >
                <div className="text-4xl mb-2">{platform.icon}</div>
                <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition-colors">
                  {platform.name}
                </h3>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            Ready to Create Professional Videos?
          </Heading>
          <Text variant="large" className="mb-8 max-w-2xl mx-auto">
            Choose a template, upload your photo, and create scroll-stopping
            videos in seconds. Start free — no credit card required.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Start Creating Free</Button>
            <Link href="/pricing">
              <Button size="lg" variant="secondary">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
