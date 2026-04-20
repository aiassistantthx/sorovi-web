import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { platforms, getPlatformBySlug } from "@/lib/platforms";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { getLocalizedPlatformContent } from "@/lib/i18n/content/platforms";

const SITE_URL = "https://hyreel.com";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];

  for (const locale of i18n.locales) {
    if (locale === i18n.defaultLocale) continue;
    for (const platform of platforms) {
      params.push({ lang: locale, slug: platform.slug });
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
  const platform = getPlatformBySlug(slug);

  if (!platform || !i18n.locales.includes(lang as Locale)) {
    return { title: "Not Found" };
  }

  return {
    title: `AI Video for ${platform.name}`,
    description: platform.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/platforms/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/platforms/${slug}`
            : `${SITE_URL}/${locale}/platforms/${slug}`,
        ])
      ),
    },
  };
}

export default async function LocalizedPlatformPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const platform = getPlatformBySlug(slug);

  if (!platform) {
    notFound();
  }

  const t = getTranslations(lang as Locale);
  const localizedContent = getLocalizedPlatformContent(slug, lang as Locale);
  const name = localizedContent?.name || platform.name;
  const heroHeadline = localizedContent?.heroHeadline || `Create ${platform.name} Videos with AI`;
  const heroSubheadline = localizedContent?.heroSubheadline || platform.description;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t.home, url: `/${lang}` },
    { name: t.platforms, url: `/${lang}/platforms` },
    { name: name, url: `/${lang}/platforms/${platform.slug}` },
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
              { label: t.platforms, href: `/${lang}/platforms` },
              { label: name },
            ]}
            className="justify-center mb-6"
          />

          <div className="text-6xl mb-6">{platform.icon}</div>

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
            {t.optimizedFor.replace("{name}", name)}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {platform.features.map((feature, index) => (
            <Card key={index} variant="elevated">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {feature.title}
              </h3>
              <Text variant="small">{feature.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            {t.readyToCreateContent.replace("{name}", name)}
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
