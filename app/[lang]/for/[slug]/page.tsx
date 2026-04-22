import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { audiences, getAudienceBySlug } from "@/lib/audiences";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
import { getLocalizedAudienceContent } from "@/lib/i18n/content/audiences";
import { generateBreadcrumbSchema } from "@/lib/schema";

const SITE_URL = "https://hyreel.com";
const APP_STORE_URL = "https://apps.apple.com/us/app/sorovi-ai-photo-to-video/id6746805170";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];

  for (const locale of i18n.locales) {
    if (locale === i18n.defaultLocale) continue;
    for (const audience of audiences) {
      params.push({ lang: locale, slug: audience.slug });
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
  const audience = getAudienceBySlug(slug);

  if (!audience || !i18n.locales.includes(lang as Locale)) {
    return { title: "Not Found" };
  }

  // Get localized content if available
  const localizedContent = getLocalizedAudienceContent(slug, lang as Locale);
  const audienceName = localizedContent?.name || audience.name;
  const metaTitle = localizedContent?.metaTitle || `Hyreel for ${audienceName}`;
  const metaDescription = localizedContent?.metaDescription || audience.description;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${lang}/for/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/for/${slug}`
            : `${SITE_URL}/${locale}/for/${slug}`,
        ])
      ),
    },
  };
}

export default async function LocalizedForPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const audience = getAudienceBySlug(slug);

  if (!audience) {
    notFound();
  }

  const t = getTranslations(lang as Locale);

  // Get localized content if available
  const localizedContent = getLocalizedAudienceContent(slug, lang as Locale);
  const audienceName = localizedContent?.name || audience.name;
  const heroHeadline = localizedContent?.heroHeadline || audience.heroHeadline;
  const heroSubheadline = localizedContent?.heroSubheadline || audience.heroSubheadline;
  const description = localizedContent?.description || audience.description;
  const benefits = localizedContent?.benefits || audience.benefits;
  const features = localizedContent?.features || audience.features;
  const ctaText = localizedContent?.ctaText || audience.ctaText;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t.home, url: `/${lang}` },
    { name: t.forAudience, url: `/${lang}/for` },
    { name: audienceName, url: `/${lang}/for/${audience.slug}` },
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
              { label: t.forAudience, href: `/${lang}/for` },
              { label: audienceName },
            ]}
            className="justify-center mb-6"
          />

          <div className="text-6xl mb-6">{audience.icon}</div>

          <Heading as="h1" className="mb-6">
            {heroHeadline}
          </Heading>

          <Text variant="large" className="mb-8 max-w-3xl mx-auto">
            {heroSubheadline}
          </Text>

          <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg">{ctaText}</Button>
            </Link>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.whyLoveHyreel.replace("{name}", audienceName)}
          </Heading>
          <Text variant="large" className="max-w-3xl mx-auto">
            {description}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl bg-[var(--surface-light)] border border-[var(--border-color)]"
            >
              <span className="text-2xl">{benefit.icon}</span>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-1">{benefit.title}</h3>
                <Text variant="small">{benefit.description}</Text>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.featuresFor.replace("{name}", audienceName)}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} variant="elevated">
              <Text className="text-[var(--text-secondary)]">{feature}</Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section spacing="xl">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            {t.readyToCreate}
          </Heading>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg">{ctaText}</Button>
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
