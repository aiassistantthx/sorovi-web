import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { alternatives } from "@/lib/alternatives";
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
    title: "Alternatives - Compare Hyreel to Other Tools | Hyreel",
    description: "Compare Hyreel to other video creation tools. See why creators choose Hyreel for AI video generation.",
    alternates: {
      canonical: `${SITE_URL}/${lang}/alternatives`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/alternatives`
            : `${SITE_URL}/${locale}/alternatives`,
        ])
      ),
    },
  };
}

export default async function LocalizedAlternativesPage({
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
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <Heading as="h1" className="mb-6">
            Hyreel Alternatives & Comparisons
          </Heading>
          <Text variant="large" className="mb-8">
            See how Hyreel compares to other video creation tools.
          </Text>
          <Button size="lg">Try Hyreel Free</Button>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alternatives.map((alt, index) => (
            <Card key={index} variant="elevated" className="group cursor-pointer">
              <Link href={`/${lang}/alternatives/${alt.slug}`}>
                <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                  Hyreel vs {alt.competitorName}
                </h2>
                <Text variant="small" className="mb-4 line-clamp-2">
                  {alt.heroSubheadline}
                </Text>
                <div className="flex items-center gap-2 text-[var(--brand-primary)] text-sm font-medium">
                  Compare
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
