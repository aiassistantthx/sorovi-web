import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { alternatives, getAlternativeBySlug } from "@/lib/alternatives";
import { getToolBySlug } from "@/lib/tools";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
import { getLocalizedAlternativeContent } from "@/lib/i18n/content/alternatives";
import { getLocalizedToolContent } from "@/lib/i18n/content/tools";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { PageHero, PageFAQ, FinalCTA, RelatedContent } from "@/components/sections";

const SITE_URL = "https://hyreel.com";
const APP_STORE_URL = "https://apps.apple.com/us/app/sorovi-ai-photo-to-video/id6746805170";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];

  for (const locale of i18n.locales) {
    if (locale === i18n.defaultLocale) continue;
    for (const alt of alternatives) {
      params.push({ lang: locale, slug: alt.slug });
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
  const alt = getAlternativeBySlug(slug);

  if (!alt || !i18n.locales.includes(lang as Locale)) {
    return { title: "Not Found" };
  }

  // Get localized content if available
  const localizedContent = getLocalizedAlternativeContent(slug, lang as Locale);
  const metaTitle = localizedContent?.metaTitle || alt.metaTitle;
  const metaDescription = localizedContent?.metaDescription || alt.metaDescription;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${lang}/alternatives/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/alternatives/${slug}`
            : `${SITE_URL}/${locale}/alternatives/${slug}`,
        ])
      ),
    },
  };
}

export default async function LocalizedAlternativePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const alt = getAlternativeBySlug(slug);

  if (!alt) {
    notFound();
  }

  const t = getTranslations(lang as Locale);

  // Get localized content if available, fallback to English
  const localizedContent = getLocalizedAlternativeContent(slug, lang as Locale);

  // Use localized content with fallback to original English content
  const heroHeadline = localizedContent?.heroHeadline || alt.heroHeadline;
  const heroSubheadline = localizedContent?.heroSubheadline || alt.heroSubheadline;
  const competitorDescription = localizedContent?.competitorDescription || alt.competitorDescription;
  const whySwitchReasons = localizedContent?.whySwitchReasons || alt.whySwitchReasons;
  const comparisonTable = localizedContent?.comparisonTable || alt.comparisonTable;
  const hyreelAdvantages = localizedContent?.hyreelAdvantages || alt.hyreelAdvantages;
  const competitorLimitations = localizedContent?.competitorLimitations || alt.competitorLimitations;
  const testimonial = localizedContent?.testimonial || alt.testimonial;
  const faqs = localizedContent?.faqs || alt.faqs;
  const relatedToolItems = [
    { slug: "image-to-video-ai", href: `/${lang}/tools/image-to-video-ai` },
    { slug: "ai-tiktok-video-generator", href: `/${lang}/tools/ai-tiktok-video-generator` },
    { slug: "ai-zoom-video-effect", href: `/${lang}/tools/ai-zoom-video-effect` },
    { slug: "ai-orbit-video-effect", href: `/${lang}/tools/ai-orbit-video-effect` },
  ].map((item) => {
    const tool = getToolBySlug(item.slug);
    const localizedTool = getLocalizedToolContent(item.slug, lang as Locale);

    return {
      title: localizedTool?.name || tool?.name || item.slug,
      description: localizedTool?.description || tool?.description || "",
      href: item.href,
    };
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t.home, url: `/${lang}` },
    { name: t.alternatives, url: `/${lang}/alternatives` },
    { name: `vs ${alt.competitorName}`, url: `/${lang}/alternatives/${alt.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <PageHero
        breadcrumb={[
          { label: t.home, href: `/${lang}` },
          { label: t.alternatives, href: `/${lang}/alternatives` },
          { label: `vs ${alt.competitorName}` },
        ]}
        badge={{ text: `vs ${alt.competitorName}` }}
        title={heroHeadline}
        description={heroSubheadline}
        primaryCta={{ text: t.tryItFree, href: APP_STORE_URL }}
        secondaryCta={{ text: t.seeComparison, href: "#comparison" }}
      />

      {/* Why Switch Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {`${t.whyChooseHyreel} vs ${alt.competitorName}`}
          </Heading>
          <Text variant="large">
            {competitorDescription}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whySwitchReasons.map((reason, index) => (
            <Card key={index} variant="elevated">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {reason.title}
              </h3>
              <Text variant="small">{reason.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section spacing="xl" id="comparison">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {`Hyreel vs ${alt.competitorName}: ${t.featureComparison}`}
          </Heading>
          <Text variant="large">
            {t.featureComparison}
          </Text>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left py-4 px-4 text-[var(--text-secondary)]">{t.feature}</th>
                <th className="text-center py-4 px-4 text-[var(--brand-primary)] font-bold">Hyreel</th>
                <th className="text-center py-4 px-4 text-[var(--text-secondary)]">{alt.competitorName}</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, index) => (
                <tr key={index} className="border-b border-[var(--border-color)] hover:bg-[var(--surface-light)] transition-colors">
                  <td className="py-4 px-4 text-[var(--text-secondary)]">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.hyreel === "boolean" ? (
                      row.hyreel ? (
                        <span className="text-[var(--brand-primary)] text-xl">&#10003;</span>
                      ) : (
                        <span className="text-[var(--text-muted)]">-</span>
                      )
                    ) : (
                      <span className="text-[var(--brand-primary)]">{row.hyreel}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.competitor === "boolean" ? (
                      row.competitor ? (
                        <span className="text-[var(--text-secondary)]">&#10003;</span>
                      ) : (
                        <span className="text-[var(--text-muted)]">-</span>
                      )
                    ) : (
                      <span className="text-[var(--text-secondary)]">{row.competitor}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Advantages vs Limitations */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hyreel Advantages */}
          <div>
            <Heading as="h2" className="mb-6 text-[var(--brand-primary)]">
              {t.benefitsFor.replace("{name}", "Hyreel")}
            </Heading>
            <ul className="space-y-4">
              {hyreelAdvantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[var(--brand-primary)] flex-shrink-0 mt-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--text-secondary)]">
                    {advantage}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Competitor Limitations */}
          <div>
            <Heading as="h2" className="mb-6 text-[var(--text-secondary)]">
              {`${alt.competitorName} ${t.painPoints}`}
            </Heading>
            <ul className="space-y-4">
              {competitorLimitations.map((limitation, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[var(--text-muted)] flex-shrink-0 mt-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-lg text-[var(--text-secondary)]">
                    {limitation}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      {testimonial && (
        <Section spacing="xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl text-[var(--brand-primary)]/30 mb-6">&quot;</div>
            <Text variant="large" className="italic mb-6">
              {testimonial.quote}
            </Text>
            <div>
              <p className="font-semibold text-[var(--text-primary)]">{testimonial.author}</p>
              <p className="text-[var(--text-secondary)]">{testimonial.role}</p>
            </div>
          </div>
        </Section>
      )}

      {/* FAQ */}
      <PageFAQ
        title={t.frequentlyAskedQuestions}
        description={t.readyToSwitch}
        items={faqs}
        variant="light"
        showContactLink={false}
      />

      {/* CTA */}
      <FinalCTA
        title={t.readyToSwitch}
        description={t.joinCreators}
        primaryCta={{ text: t.startCreatingFree, href: APP_STORE_URL }}
        secondaryCta={{ text: t.viewPricing, href: `/${lang}/pricing` }}
      />

      {/* Related Tools */}
      <RelatedContent
        title={t.relatedTools}
        items={relatedToolItems}
        columns={4}
      />
    </>
  );
}
