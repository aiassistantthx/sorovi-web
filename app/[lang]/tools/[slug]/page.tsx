import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { tools, getToolBySlug, type Tool } from "@/lib/tools";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
import { getLocalizedToolContent } from "@/lib/i18n/content/tools";
import {
  generateBreadcrumbSchema,
  generateToolSchema,
} from "@/lib/schema";

const SITE_URL = "https://hyreel.com";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];

  for (const locale of i18n.locales) {
    if (locale === i18n.defaultLocale) continue;
    for (const tool of tools) {
      params.push({ lang: locale, slug: tool.slug });
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
  const tool = getToolBySlug(slug);

  if (!tool || !i18n.locales.includes(lang as Locale)) {
    return { title: "Not Found" };
  }

  // Get localized content if available
  const localizedContent = getLocalizedToolContent(slug, lang as Locale);
  const name = localizedContent?.name || tool.name;
  const description = localizedContent?.description || tool.description;

  return {
    title: `${name} | Hyreel`,
    description: description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/tools/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/tools/${slug}`
            : `${SITE_URL}/${locale}/tools/${slug}`,
        ])
      ),
    },
  };
}

function getRelatedTools(currentTool: Tool): Tool[] {
  const sameCategory = tools.filter(
    (t) => t.category === currentTool.category && t.slug !== currentTool.slug
  );
  const otherTools = tools.filter(
    (t) => t.category !== currentTool.category && t.slug !== currentTool.slug
  );
  return [...sameCategory, ...otherTools].slice(0, 3);
}

export default async function LocalizedToolPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const t = getTranslations(lang as Locale);

  // Get localized content if available
  const localizedContent = getLocalizedToolContent(slug, lang as Locale);
  const toolName = localizedContent?.name || tool.name;
  const toolDescription = localizedContent?.description || tool.description;
  const toolDetailedDescription = localizedContent?.detailedDescription || tool.detailedDescription;
  const toolHowItWorks = localizedContent?.howItWorks || tool.howItWorks;
  const toolFeatures = localizedContent?.features || tool.features;
  const toolFaqs = localizedContent?.faqs || tool.faqs;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t.home, url: `/${lang}` },
    { name: t.tools, url: `/${lang}/tools` },
    { name: toolName, url: `/${lang}/tools/${tool.slug}` },
  ]);
  const toolSchema = generateToolSchema({
    name: toolName,
    description: toolDescription,
    url: `/${lang}/tools/${tool.slug}`,
  });
  const relatedTools = getRelatedTools(tool);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />

      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <Breadcrumb
            items={[
              { label: t.home, href: `/${lang}` },
              { label: t.tools, href: `/${lang}/tools` },
              { label: toolName },
            ]}
            className="justify-center mb-6"
          />
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--brand-primary)]">
              {tool.icon} {tool.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-[var(--text-primary)] mb-4">
            {toolName}
          </h1>

          <Text variant="large" className="mb-8 max-w-3xl mx-auto">
            {toolDescription}
          </Text>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">{t.tryItFree}</Button>
            <a href="#how-it-works">
              <Button size="lg" variant="secondary">
                {t.howItWorks}
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section spacing="xl" id="how-it-works" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.howItWorks}
          </Heading>
          <Text variant="large">
            {toolName} {t.inSimpleSteps.replace("{count}", String(toolHowItWorks.length))}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolHowItWorks.map((step, index) => (
            <div key={index}>
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/30">
                  <span className="text-2xl font-bold text-[var(--brand-primary)]">
                    {step.step}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                {step.title}
              </h3>
              <Text variant="small">{step.description}</Text>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.featuresCapabilities}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolFeatures.map((feature, index) => (
            <Card key={index} variant="elevated">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {feature.title}
              </h3>
              <Text variant="small">{feature.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.frequentlyAskedQuestions}
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion items={toolFaqs} />
          <div className="text-center mt-8">
            <Text variant="small">
              {t.stillHaveQuestions}{" "}
              <Link
                href={`/${lang}/contact`}
                className="text-[var(--brand-primary)] hover:underline"
              >
                {t.contactSupport}
              </Link>
            </Text>
          </div>
        </div>
      </Section>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <Section spacing="xl">
          <div className="text-center mb-10">
            <Heading as="h2" className="mb-4">
              {t.relatedTools}
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedTools.map((related) => (
              <Link
                key={related.slug}
                href={`/${lang}/tools/${related.slug}`}
                className="block"
              >
                <Card variant="elevated">
                  <div className="text-3xl mb-3">{related.icon}</div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {related.name}
                  </h3>
                  <Text variant="small">{related.tagline}</Text>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href={`/${lang}/tools`}>
              <Button variant="secondary">{t.viewAllTools}</Button>
            </Link>
          </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center">
          <Heading as="h2" className="mb-4">
            {t.startCreatingWith.replace("{name}", toolName)}
          </Heading>
          <Text variant="large" className="mb-6">
            {t.downloadHyreelCta}
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">{t.downloadForIOS}</Button>
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
