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
    title: "Terms of Service - Hyreel",
    description: "Read the terms and conditions for using Hyreel's AI video generation services.",
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

  return (
    <Section spacing="xl">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <Heading as="h1" className="mb-6">Terms of Service</Heading>
        <Text className="text-[var(--text-muted)] mb-8">Last updated: December 2025</Text>

        <div className="space-y-8">
          <div>
            <Heading as="h2" className="text-2xl mb-4">1. Acceptance of Terms</Heading>
            <Text className="mb-4">
              By accessing or using Hyreel, you agree to be bound by these Terms of Service
              and our Privacy Policy.
            </Text>
          </div>

          <div>
            <Heading as="h2" className="text-2xl mb-4">2. Use of Service</Heading>
            <Text className="mb-4">
              You may use our service only for lawful purposes and in accordance with these Terms.
              You agree not to use the service for any illegal or unauthorized purpose.
            </Text>
          </div>

          <div>
            <Heading as="h2" className="text-2xl mb-4">3. User Content</Heading>
            <Text className="mb-4">
              You retain all rights to content you upload. By uploading content, you grant us
              a license to use it to provide our services. You are responsible for ensuring
              you have the rights to any content you upload.
            </Text>
          </div>

          <div>
            <Heading as="h2" className="text-2xl mb-4">4. Intellectual Property</Heading>
            <Text className="mb-4">
              The service and its original content, features, and functionality are owned by
              Hyreel and are protected by international copyright, trademark, and other laws.
            </Text>
          </div>

          <div>
            <Heading as="h2" className="text-2xl mb-4">5. Contact</Heading>
            <Text>
              Questions about these Terms? Contact us at{" "}
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
