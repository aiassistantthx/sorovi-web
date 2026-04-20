import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { industries, getIndustryBySlug } from "@/lib/industries";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { getLocalizedIndustryContent } from "@/lib/i18n/content/industries";

const SITE_URL = "https://hyreel.com";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];

  for (const locale of i18n.locales) {
    if (locale === i18n.defaultLocale) continue;
    for (const industry of industries) {
      params.push({ lang: locale, slug: industry.slug });
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
  const industry = getIndustryBySlug(slug);

  if (!industry || !i18n.locales.includes(lang as Locale)) {
    return { title: "Not Found" };
  }

  return {
    title: `AI Video for ${industry.name}`,
    description: industry.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/industries/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/industries/${slug}`
            : `${SITE_URL}/${locale}/industries/${slug}`,
        ])
      ),
    },
  };
}

export default async function LocalizedIndustryPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const t = getTranslations(lang as Locale);
  const localizedContent = getLocalizedIndustryContent(slug, lang as Locale);
  const name = localizedContent?.name || industry.name;
  const heroHeadline = localizedContent?.heroHeadline || `AI Video for ${industry.name}`;
  const heroSubheadline = localizedContent?.heroSubheadline || industry.description;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t.home, url: `/${lang}` },
    { name: t.industries, url: `/${lang}/industries` },
    { name: name, url: `/${lang}/industries/${industry.slug}` },
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
              { label: t.industries, href: `/${lang}/industries` },
              { label: name },
            ]}
            className="justify-center mb-6"
          />

          <div className="text-6xl mb-6">{industry.icon}</div>

          <Heading as="h1" className="mb-6">
            {heroHeadline}
          </Heading>

          <Text variant="large" className="mb-8 max-w-3xl mx-auto">
            {heroSubheadline}
          </Text>

          <Button size="lg">{t.startCreatingFree}</Button>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.solutionsFor.replace("{name}", name)}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industry.solutions.map((solution, index) => (
            <Card key={index} variant="elevated">
              <div className="text-3xl mb-3">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {solution.title}
              </h3>
              <Text variant="small">{solution.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            {t.readyToTransformContent.replace("{name}", name)}
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
