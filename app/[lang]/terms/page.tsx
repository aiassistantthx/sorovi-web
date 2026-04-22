import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
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
    title: `${t.terms} - Hyreel`,
    description: t.privacySection2Text,
    alternates: {
      canonical: `${SITE_URL}/${lang}/terms`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/terms`
            : `${SITE_URL}/${locale}/terms`,
        ])
      ),
    },
  };
}

export default async function LocalizedTermsPage({
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
  const sections = [
    {
      title: `1. ${t.terms}`,
      text: t.privacySection2Text,
    },
    {
      title: `2. ${t.useCases}`,
      text: c.desc(t.aiVideoTools),
    },
    {
      title: `3. ${t.privacySection1Title.replace("1. ", "")}`,
      text: t.privacySection1Text,
    },
    {
      title: `4. ${t.privacySection4Title.replace("4. ", "")}`,
      text: t.privacySection4Text,
    },
  ];

  return (
    <Section spacing="xl">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <Heading as="h1" className="mb-6">{t.terms}</Heading>
        <Text className="text-[var(--text-muted)] mb-8">{t.privacyLastUpdated}</Text>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <Heading as="h2" className="text-2xl mb-4">{section.title}</Heading>
              <Text className="mb-4">{section.text}</Text>
            </div>
          ))}

          <div>
            <Heading as="h2" className="text-2xl mb-4">5. {t.contact}</Heading>
            <Text>
              {t.privacySection5Text}{" "}
              <a href="mailto:legal@hyreel.com" className="text-[var(--brand-primary)]">
                legal@hyreel.com
              </a>
            </Text>
          </div>
        </div>
      </div>
    </Section>
  );
}
