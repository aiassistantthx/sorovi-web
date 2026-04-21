import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useCases, getUseCaseBySlug } from "@/lib/use-cases";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { getLocalizedUseCaseContent } from "@/lib/i18n/content/use-cases";

const SITE_URL = "https://hyreel.com";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];

  for (const locale of i18n.locales) {
    if (locale === i18n.defaultLocale) continue;
    for (const uc of useCases) {
      params.push({ lang: locale, slug: uc.slug });
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
  const useCase = getUseCaseBySlug(slug);

  if (!useCase || !i18n.locales.includes(lang as Locale)) {
    return { title: "Not Found" };
  }

  return {
    title: useCase.title,
    description: useCase.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/use-cases/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/use-cases/${slug}`
            : `${SITE_URL}/${locale}/use-cases/${slug}`,
        ])
      ),
    },
  };
}

export default async function LocalizedUseCasePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  const t = getTranslations(lang as Locale);
  const localizedContent = getLocalizedUseCaseContent(slug, lang as Locale);
  const title = localizedContent?.title || useCase.title;
  const heroHeadline = localizedContent?.heroHeadline || useCase.title;
  const heroSubheadline = localizedContent?.heroSubheadline || useCase.description;
  const painPoints = localizedContent?.painPoints || useCase.painPoints;
  const howHyreelHelps = localizedContent?.howHyreelHelps || useCase.howHyreelHelps;
  const benefits = localizedContent?.benefits || useCase.benefits;
  const testimonial = localizedContent?.testimonial || useCase.testimonial;
  const faqs = localizedContent?.faqs || useCase.faqs;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t.home, url: `/${lang}` },
    { name: t.useCases, url: `/${lang}/use-cases` },
    { name: title, url: `/${lang}/use-cases/${useCase.slug}` },
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
              { label: t.useCases, href: `/${lang}/use-cases` },
              { label: title },
            ]}
            className="justify-center mb-6"
          />

          <div className="text-6xl mb-6">{useCase.icon}</div>

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
            {t.howHyreelHelps}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {howHyreelHelps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{item.icon || useCase.howHyreelHelps[index]?.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {item.title}
              </h3>
              <Text variant="small">{item.description}</Text>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.benefits}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
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
            {t.readyToGetStarted}
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
