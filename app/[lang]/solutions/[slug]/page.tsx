import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { solutions, getSolutionBySlug } from "@/lib/solutions";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { getLocalizedSolutionContent } from "@/lib/i18n/content/solutions";

const SITE_URL = "https://hyreel.com";
const APP_STORE_URL = "https://apps.apple.com/us/app/sorovi-ai-photo-to-video/id6746805170";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];

  for (const locale of i18n.locales) {
    if (locale === i18n.defaultLocale) continue;
    for (const solution of solutions) {
      params.push({ lang: locale, slug: solution.slug });
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
  const solution = getSolutionBySlug(slug);

  if (!solution || !i18n.locales.includes(lang as Locale)) {
    return { title: "Not Found" };
  }

  const localizedContent = getLocalizedSolutionContent(slug, lang as Locale);
  const title = localizedContent?.metaTitle || solution.metaTitle;
  const description = localizedContent?.metaDescription || solution.metaDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/solutions/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/solutions/${slug}`
            : `${SITE_URL}/${locale}/solutions/${slug}`,
        ])
      ),
    },
  };
}

export default async function LocalizedSolutionPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const t = getTranslations(lang as Locale);
  const localizedContent = getLocalizedSolutionContent(slug, lang as Locale);
  const name = localizedContent?.name || solution.name;
  const heroHeadline = localizedContent?.heroHeadline || solution.name;
  const heroSubheadline = localizedContent?.heroSubheadline || solution.description;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t.home, url: `/${lang}` },
    { name: t.solutions, url: `/${lang}/solutions` },
    { name: name, url: `/${lang}/solutions/${solution.slug}` },
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
              { label: t.solutions, href: `/${lang}/solutions` },
              { label: name },
            ]}
            className="justify-center mb-6"
          />

          <div className="text-6xl mb-6">{solution.icon}</div>

          <Heading as="h1" className="mb-6">
            {heroHeadline}
          </Heading>

          <Text variant="large" className="mb-8 max-w-3xl mx-auto">
            {heroSubheadline}
          </Text>

          <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg">{t.startCreatingFree}</Button>
            </Link>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.keyBenefits}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {solution.benefits.map((benefit, index) => {
            const localizedBenefit = localizedContent?.benefits?.[index];
            return (
              <Card key={index} variant="elevated">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                  {localizedBenefit?.title || benefit.title}
                </h3>
                <Text variant="small">{localizedBenefit?.description || benefit.description}</Text>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            {t.readyToGetStarted}
          </Heading>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg">{t.startCreatingFree}</Button>
            </Link>
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
