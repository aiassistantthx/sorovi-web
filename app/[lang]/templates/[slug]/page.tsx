import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { templates, getTemplateBySlug } from "@/lib/templates";
import { i18n, type Locale } from "@/lib/i18n/config";
import { generateBreadcrumbSchema } from "@/lib/schema";

const SITE_URL = "https://hyreel.com";

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

  return {
    title: `${template.name} Template`,
    description: template.description,
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

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `/${lang}` },
    { name: "Templates", url: `/${lang}/templates` },
    { name: template.name, url: `/${lang}/templates/${template.slug}` },
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
              { label: "Home", href: `/${lang}` },
              { label: "Templates", href: `/${lang}/templates` },
              { label: template.name },
            ]}
            className="justify-center mb-6"
          />

          <div className="text-6xl mb-6">{template.icon}</div>

          <Heading as="h1" className="mb-6">
            {template.name}
          </Heading>

          <Text variant="large" className="mb-8 max-w-3xl mx-auto">
            {template.description}
          </Text>

          <Button size="lg">Use This Template</Button>
        </div>
      </Section>

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Template Features
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {template.features.map((feature, index) => (
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
            Ready to Use This Template?
          </Heading>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Start Creating</Button>
            <Link href={`/${lang}/templates`}>
              <Button size="lg" variant="secondary">
                Browse All Templates
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
