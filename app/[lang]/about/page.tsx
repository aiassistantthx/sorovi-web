import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
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

  const titles: Record<Locale, string> = {
    en: "About Us - Hyreel",
    es: "Sobre Nosotros - Hyreel",
    de: "Über Uns - Hyreel",
    fr: "À Propos - Hyreel",
    pt: "Sobre Nós - Hyreel",
    ru: "О Нас - Hyreel",
    it: "Chi Siamo - Hyreel",
    nl: "Over Ons - Hyreel",
    pl: "O Nas - Hyreel",
    ja: "会社概要 - Hyreel",
    ko: "회사 소개 - Hyreel",
    zh: "关于我们 - Hyreel",
  };

  const t = getTranslations(lang as Locale);

  return {
    title: titles[lang as Locale],
    description: t.aboutHeroSubtitle,
    alternates: {
      canonical: `${SITE_URL}/${lang}/about`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/about`
            : `${SITE_URL}/${locale}/about`,
        ])
      ),
    },
  };
}

export default async function LocalizedAboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const t = getTranslations(lang as Locale);

  const values = [
    { title: t.aboutValueInnovation, description: t.aboutValueInnovationDesc },
    { title: t.aboutValueAccessibility, description: t.aboutValueAccessibilityDesc },
    { title: t.aboutValueCommunity, description: t.aboutValueCommunityDesc },
  ];

  return (
    <>
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <Heading as="h1" className="mb-6">
            {t.aboutHeroTitle}
          </Heading>
          <Text variant="large">
            {t.aboutHeroSubtitle}
          </Text>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <Heading as="h2" className="mb-6">{t.aboutOurStory}</Heading>
            <Text className="mb-6">
              {t.aboutStoryPara1}
            </Text>
            <Text className="mb-6">
              {t.aboutStoryPara2}
            </Text>
          </div>
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "240,909+", label: t.videosCreated },
            { value: "14,258+", label: t.activeCreators },
            { value: "32", label: t.languages },
            { value: "2023", label: t.aboutFounded },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[var(--text-primary)] mb-2">
                {stat.value}
              </div>
              <Text variant="small">{stat.label}</Text>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="xl">
        <div className="max-w-4xl mx-auto">
          <Heading as="h2" className="mb-8 text-center">{t.aboutOurValues}</Heading>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} variant="elevated">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                  {value.title}
                </h3>
                <Text variant="small">{value.description}</Text>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
