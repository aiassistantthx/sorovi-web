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
    en: "Contact Us - Hyreel",
    es: "Contáctanos - Hyreel",
    de: "Kontakt - Hyreel",
    fr: "Contactez-nous - Hyreel",
    pt: "Contato - Hyreel",
    ru: "Контакты - Hyreel",
    it: "Contattaci - Hyreel",
    nl: "Contact - Hyreel",
    pl: "Kontakt - Hyreel",
    ja: "お問い合わせ - Hyreel",
    ko: "문의하기 - Hyreel",
    zh: "联系我们 - Hyreel",
  };

  return {
    title: titles[lang as Locale],
    description: "Get in touch with the Hyreel team for support, partnerships, or press inquiries.",
    alternates: {
      canonical: `${SITE_URL}/${lang}/contact`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/contact`
            : `${SITE_URL}/${locale}/contact`,
        ])
      ),
    },
  };
}

export default async function LocalizedContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const t = getTranslations(lang as Locale);

  const contacts = [
    {
      title: "General Support",
      email: "support@hyreel.com",
      description: "For help with your account, billing, or technical issues.",
    },
    {
      title: "Sales",
      email: "sales@hyreel.com",
      description: "For enterprise plans, custom solutions, and partnerships.",
    },
    {
      title: "Press & Media",
      email: "press@hyreel.com",
      description: "For press inquiries, interviews, and media resources.",
    },
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
            Get in Touch
          </Heading>
          <Text variant="large">
            We'd love to hear from you. Reach out to us through any of the channels below.
          </Text>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <Card key={index} variant="elevated">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {contact.title}
              </h3>
              <a
                href={`mailto:${contact.email}`}
                className="text-[var(--brand-primary)] hover:underline block mb-3"
              >
                {contact.email}
              </a>
              <Text variant="small">{contact.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center max-w-3xl mx-auto">
          <Heading as="h2" className="mb-6">
            Follow Us
          </Heading>
          <div className="flex justify-center gap-6">
            {[
              { name: "Twitter", url: "https://twitter.com/hyreelapp" },
              { name: "Instagram", url: "https://instagram.com/hyreelapp" },
              { name: "TikTok", url: "https://tiktok.com/@hyreelapp" },
              { name: "YouTube", url: "https://youtube.com/@hyreelapp" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
