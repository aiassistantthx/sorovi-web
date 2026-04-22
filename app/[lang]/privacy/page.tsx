import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
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

  const t = getTranslations(lang as Locale);

  return {
    title: `${t.privacyTitle} - Hyreel`,
    description: t.privacySection1Text,
    alternates: {
      canonical: `${SITE_URL}/${lang}/privacy`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/privacy`
            : `${SITE_URL}/${locale}/privacy`,
        ])
      ),
    },
  };
}

export default async function LocalizedPrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const t = getTranslations(lang as Locale);

  return (
    <Section spacing="xl">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <Heading as="h1" className="mb-6">{t.privacyTitle}</Heading>
        <Text className="text-[var(--text-muted)] mb-8">{t.privacyLastUpdated}</Text>

        <div className="space-y-8">
          <div>
            <Heading as="h2" className="text-2xl mb-4">{t.privacySection1Title}</Heading>
            <Text className="mb-4">
              {t.privacySection1Text}
            </Text>
          </div>

          <div>
            <Heading as="h2" className="text-2xl mb-4">{t.privacySection2Title}</Heading>
            <Text className="mb-4">
              {t.privacySection2Text}
            </Text>
          </div>

          <div>
            <Heading as="h2" className="text-2xl mb-4">{t.privacySection3Title}</Heading>
            <Text className="mb-4">
              {t.privacySection3Text}
            </Text>
          </div>

          <div>
            <Heading as="h2" className="text-2xl mb-4">{t.privacySection4Title}</Heading>
            <Text className="mb-4">
              {t.privacySection4Text}
            </Text>
          </div>

          <div>
            <Heading as="h2" className="text-2xl mb-4">{t.privacySection5Title}</Heading>
            <Text>
              {t.privacySection5Text}{" "}
              <a href="mailto:privacy@hyreel.com" className="text-[var(--brand-primary)]">
                privacy@hyreel.com
              </a>
            </Text>
          </div>
        </div>
      </div>
    </Section>
  );
}
