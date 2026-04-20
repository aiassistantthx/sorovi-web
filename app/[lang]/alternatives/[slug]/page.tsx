import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { alternatives, getAlternativeBySlug } from "@/lib/alternatives";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
import { getLocalizedAlternativeContent } from "@/lib/i18n/content/alternatives";
import { generateBreadcrumbSchema } from "@/lib/schema";

const SITE_URL = "https://hyreel.com";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];

  for (const locale of i18n.locales) {
    if (locale === i18n.defaultLocale) continue;
    for (const alt of alternatives) {
      params.push({ lang: locale, slug: alt.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const alt = getAlternativeBySlug(slug);

  if (!alt || !i18n.locales.includes(lang as Locale)) {
    return { title: "Not Found" };
  }

  // Get localized content if available
  const localizedContent = getLocalizedAlternativeContent(slug, lang as Locale);
  const title = localizedContent?.title || alt.title;

  return {
    title: `${title} | Hyreel`,
    description: alt.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${lang}/alternatives/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/alternatives/${slug}`
            : `${SITE_URL}/${locale}/alternatives/${slug}`,
        ])
      ),
    },
  };
}

export default async function LocalizedAlternativePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const alt = getAlternativeBySlug(slug);

  if (!alt) {
    notFound();
  }

  const t = getTranslations(lang as Locale);

  // Get localized content if available
  const localizedContent = getLocalizedAlternativeContent(slug, lang as Locale);
  const heroHeadline = localizedContent?.heroHeadline || alt.heroHeadline;
  const heroSubheadline = localizedContent?.heroSubheadline || alt.heroSubheadline;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t.home, url: `/${lang}` },
    { name: t.alternatives, url: `/${lang}/alternatives` },
    { name: `vs ${alt.competitorName}`, url: `/${lang}/alternatives/${alt.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <Breadcrumb
            items={[
              { label: t.home, href: `/${lang}` },
              { label: t.alternatives, href: `/${lang}/alternatives` },
              { label: `vs ${alt.competitorName}` },
            ]}
            className="justify-center mb-6"
          />

          <Heading as="h1" className="mb-6">
            {heroHeadline}
          </Heading>

          <Text variant="large" className="mb-8 max-w-3xl mx-auto">
            {heroSubheadline}
          </Text>

          <Button size="lg">{t.tryItFree}</Button>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Feature Comparison
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left py-4 px-4 text-[var(--text-primary)] font-semibold">
                  Feature
                </th>
                <th className="text-center py-4 px-4 text-[var(--brand-primary)] font-semibold">
                  Hyreel
                </th>
                <th className="text-center py-4 px-4 text-[var(--text-primary)] font-semibold">
                  {alt.competitorName}
                </th>
              </tr>
            </thead>
            <tbody>
              {alt.comparisonTable.map((row, index) => (
                <tr key={index} className="border-b border-[var(--border-color)]">
                  <td className="py-4 px-4 text-[var(--text-secondary)]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.hyreel === true ? "✓" : row.hyreel === false ? "✗" : row.hyreel}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.competitor === true ? "✓" : row.competitor === false ? "✗" : row.competitor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Why Creators Choose Hyreel
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {alt.hyreelAdvantages.map((advantage, index) => (
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
              <span className="text-[var(--text-secondary)]">{advantage}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="xl">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            {t.readyToCreate}
          </Heading>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">{t.startCreatingFree}</Button>
            <Link href={`/${lang}/pricing`}>
              <Button size="lg" variant="secondary">
                {t.viewPricing}
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
