import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { templates, getTemplateBySlug } from "@/lib/templates";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { getLocalizedTemplateContent } from "@/lib/i18n/content/templates";

const SITE_URL = "https://hyreel.com";
const APP_STORE_URL = "https://apps.apple.com/us/app/sorovi-ai-photo-to-video/id6746805170";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];

  for (const locale of i18n.locales) {
    if (locale === i18n.defaultLocale) continue;
    for (const template of templates) {
      params.push({ lang: locale, slug: template.slug });
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
  const template = getTemplateBySlug(slug);

  if (!template || !i18n.locales.includes(lang as Locale)) {
    return { title: "Not Found" };
  }

  const localizedContent = getLocalizedTemplateContent(slug, lang as Locale);
  const title = localizedContent?.metaTitle || `${template.name} Template`;
  const description = localizedContent?.metaDescription || localizedContent?.description || template.description;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/templates/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/templates/${slug}`
            : `${SITE_URL}/${locale}/templates/${slug}`,
        ])
      ),
    },
  };
}

export default async function LocalizedTemplatePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  const t = getTranslations(lang as Locale);
  const localizedContent = getLocalizedTemplateContent(slug, lang as Locale);
  const name = localizedContent?.name || template.name;
  const heroHeadline = localizedContent?.heroHeadline || template.heroHeadline;
  const heroSubheadline = localizedContent?.heroSubheadline || template.heroSubheadline;

  // Build localized features by merging with template data (for icons)
  const features = template.features.map((feature, index) => ({
    icon: feature.icon,
    title: localizedContent?.features?.[index]?.title || feature.title,
    description: localizedContent?.features?.[index]?.description || feature.description,
  }));

  const ctaText = localizedContent?.ctaText || template.ctaText;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t.home, url: `/${lang}` },
    { name: t.templates, url: `/${lang}/templates` },
    { name: name, url: `/${lang}/templates/${template.slug}` },
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
              { label: t.templates, href: `/${lang}/templates` },
              { label: name },
            ]}
            className="justify-center mb-6"
          />

          <div className="text-6xl mb-6">{template.icon}</div>

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

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.templateFeatures}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white border border-[var(--border-color)]"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {feature.title}
              </h3>
              <Text variant="small">{feature.description}</Text>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="xl">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            {t.readyToUseTemplate}
          </Heading>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg">{t.startCreating}</Button>
            </Link>
            <Link href={`/${lang}/templates`}>
              <Button size="lg" variant="secondary">
                {t.browseAllTemplates}
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
