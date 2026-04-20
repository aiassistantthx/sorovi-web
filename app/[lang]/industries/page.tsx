import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { industries } from "@/lib/industries";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
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
    title: "Industries - AI Video Solutions by Industry | Hyreel",
    description: "Discover how Hyreel helps businesses in different industries create engaging video content with AI.",
    alternates: {
      canonical: `${SITE_URL}/${lang}/industries`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/industries`
            : `${SITE_URL}/${locale}/industries`,
        ])
      ),
    },
  };
}

export default async function LocalizedIndustriesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const t = getTranslations(lang as Locale);

  return (
    <>
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <Heading as="h1" className="mb-6">
            {t.industries}
          </Heading>
          <Text variant="large" className="mb-8">
            See how businesses across industries use Hyreel to create engaging content.
          </Text>
          <Button size="lg">{t.getStartedFree}</Button>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} variant="elevated" className="group cursor-pointer">
              <Link href={`/${lang}/industries/${industry.slug}`}>
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                  {industry.name}
                </h2>
                <Text variant="small" className="mb-4 line-clamp-2">
                  {industry.heroSubheadline}
                </Text>
                <div className="flex items-center gap-2 text-[var(--brand-primary)] text-sm font-medium">
                  {t.learnMore}
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
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
