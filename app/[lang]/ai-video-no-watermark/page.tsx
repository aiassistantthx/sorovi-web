import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { i18n, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

const SITE_URL = "https://hyreel.com";

export async function generateStaticParams() {
  return i18n.locales
    .filter((locale) => locale !== i18n.defaultLocale)
    .map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    return { title: "Not Found" };
  }

  return {
    title: "AI Video Generator Without Watermark | Hyreel",
    description: "Create professional AI videos without watermarks. Clean exports for TikTok, Instagram, and YouTube. No branding on your content.",
    alternates: {
      canonical: `${SITE_URL}/${lang}/ai-video-no-watermark`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/ai-video-no-watermark`
            : `${SITE_URL}/${locale}/ai-video-no-watermark`,
        ])
      ),
    },
  };
}

export default async function LocalizedNoWatermarkPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  return (
    <>
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <Heading as="h1" className="mb-6">
            AI Video Without Watermark
          </Heading>

          <Text variant="large" className="mb-8">
            Create professional videos with no watermarks or branding. Your content, your way.
          </Text>

          <Button size="lg">Start Creating</Button>
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Why No Watermark Matters
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            "Professional appearance for your brand",
            "Better engagement on social media",
            "Use videos for commercial purposes",
            "Build your personal brand",
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[var(--border-color)]"
            >
              <svg
                className="w-5 h-5 text-[var(--accent-green)] flex-shrink-0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--text-secondary)]">{benefit}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="xl">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            Get Started
          </Heading>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Try Hyreel</Button>
            <Link href={`/${lang}/pricing`}>
              <Button size="lg" variant="secondary">
                View Plans
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
