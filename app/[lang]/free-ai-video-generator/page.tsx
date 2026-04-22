import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
import { commonCopy, type NonEnLocale } from "@/lib/i18n/content/localized-fallbacks";
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

  const t = getTranslations(lang as Locale);

  return {
    title: `${t.freeAIVideoGenerator} | Hyreel`,
    description: t.downloadHyreelCta,
    alternates: {
      canonical: `${SITE_URL}/${lang}/free-ai-video-generator`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/free-ai-video-generator`
            : `${SITE_URL}/${locale}/free-ai-video-generator`,
        ])
      ),
    },
  };
}

export default async function LocalizedFreeAIVideoGeneratorPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const t = getTranslations(lang as Locale);
  const c = commonCopy(lang as NonEnLocale);

  return (
    <>
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--accent-green)]">
              {t.noCreditCard}
            </span>
          </div>

          <Heading as="h1" className="mb-6">
            {t.freeAIVideoGenerator}
          </Heading>

          <Text variant="large" className="mb-8">
            {c.desc(t.freeAIVideoGenerator)} {t.noCreditCard}.
          </Text>

          <Button size="lg">{t.startCreatingFree}</Button>
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.features}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: t.videosPerMonth, description: t.planDescFree },
            { title: t.quality720p, description: t.basicAiFeatures },
            { title: t.aiVideoTools, description: c.featureDesc[0] },
          ].map((feature, index) => (
            <Card key={index} variant="elevated" className="text-center">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {feature.title}
              </h3>
              <Text variant="small">{feature.description}</Text>
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
