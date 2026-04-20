import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { i18n, type Locale } from "@/lib/i18n/config";
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

  return {
    title: "Privacy Policy - Hyreel",
    description: "Read about how Hyreel collects, uses, and protects your personal information.",
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

  return (
    <Section spacing="xl">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <Heading as="h1" className="mb-6">Privacy Policy</Heading>
        <Text className="text-[var(--text-muted)] mb-8">Last updated: December 2025</Text>

        <div className="space-y-8">
          <div>
            <Heading as="h2" className="text-2xl mb-4">1. Information We Collect</Heading>
            <Text className="mb-4">
              We collect information you provide directly to us, such as when you create an account,
              upload content, or contact us for support.
            </Text>
          </div>

          <div>
            <Heading as="h2" className="text-2xl mb-4">2. How We Use Your Information</Heading>
            <Text className="mb-4">
              We use the information we collect to provide, maintain, and improve our services,
              process transactions, and communicate with you.
            </Text>
          </div>

          <div>
            <Heading as="h2" className="text-2xl mb-4">3. Information Sharing</Heading>
            <Text className="mb-4">
              We do not share your personal information with third parties except as described
              in this policy or with your consent.
            </Text>
          </div>

          <div>
            <Heading as="h2" className="text-2xl mb-4">4. Data Security</Heading>
            <Text className="mb-4">
              We take reasonable measures to help protect your personal information from loss,
              theft, misuse, and unauthorized access.
            </Text>
          </div>

          <div>
            <Heading as="h2" className="text-2xl mb-4">5. Contact Us</Heading>
            <Text>
              If you have any questions about this Privacy Policy, please contact us at{" "}
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
