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
const APP_STORE_URL = "https://apps.apple.com/us/app/sorovi-ai-photo-to-video/id6746805170";

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

  const localizedContent = getLocalizedPlatformContent(slug, lang as Locale);
  const metaTitle = localizedContent?.metaTitle || `AI Video for ${platform.name}`;
  const metaDescription = localizedContent?.metaDescription || platform.metaDescription;

  return {
    title: metaTitle,
    description: metaDescription,
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
  const heroHeadline = localizedContent?.heroHeadline || platform.heroHeadline;
  const heroSubheadline = localizedContent?.heroSubheadline || platform.heroSubheadline;
  const description = localizedContent?.description || platform.description;
  const features = localizedContent?.features || platform.features;
  const bestPractices = localizedContent?.bestPractices || platform.bestPractices;
  const contentTypes = localizedContent?.contentTypes || platform.contentTypes;
  const algorithmTips = localizedContent?.algorithmTips || platform.algorithmTips;
  const stats = localizedContent?.stats || platform.stats;
  const faqs = localizedContent?.faqs || platform.faqs;
  const ctaText = localizedContent?.ctaText || platform.ctaText;

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

          <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg">{ctaText}</Button>
          </Link>
        </div>
      </Section>

      <Section spacing="lg" className="bg-[var(--surface-light)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-[var(--brand-primary)]">{stat.value}</div>
              <Text variant="small">{stat.label}</Text>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.optimizedFor.replace("{name}", name)}
          </Heading>
          <Text variant="large" className="max-w-2xl mx-auto">
            {description}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} variant="elevated">
              <div className="text-3xl mb-3">{platform.features[index]?.icon || "✨"}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {feature.title}
              </h3>
              <Text variant="small">{feature.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <Heading as="h2" className="mb-6">
              {t.bestPractices}
            </Heading>
            <ul className="space-y-3">
              {bestPractices.map((practice, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[var(--brand-primary)] mt-1">✓</span>
                  <Text>{practice}</Text>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading as="h2" className="mb-6">
              {t.algorithmTips}
            </Heading>
            <ul className="space-y-3">
              {algorithmTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[var(--brand-primary)] mt-1">💡</span>
                  <Text>{tip}</Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.contentTypes}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contentTypes.map((content, index) => (
            <Card key={index} variant="flat">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {content.title}
              </h3>
              <Text variant="small">{content.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.frequentlyAskedQuestions}
          </Heading>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} variant="flat">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {faq.question}
              </h3>
              <Text>{faq.answer}</Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section spacing="xl">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            {t.readyToCreateContent.replace("{name}", name)}
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
