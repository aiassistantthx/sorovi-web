import { notFound } from "next/navigation";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { industries, getIndustryBySlug } from "@/lib/industries";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { getLocalizedIndustryContent } from "@/lib/i18n/content/industries";

const SITE_URL = "https://hyreel.com";
const APP_STORE_URL = "https://apps.apple.com/us/app/sorovi-ai-photo-to-video/id6746805170";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];

  for (const locale of i18n.locales) {
    if (locale === i18n.defaultLocale) continue;
    for (const industry of industries) {
      params.push({ lang: locale, slug: industry.slug });
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
  const industry = getIndustryBySlug(slug);

  if (!industry || !i18n.locales.includes(lang as Locale)) {
    return { title: "Not Found" };
  }

  const localizedContent = getLocalizedIndustryContent(slug, lang as Locale);
  const metaTitle = localizedContent?.metaTitle || `AI Video for ${industry.name}`;
  const metaDescription = localizedContent?.metaDescription || industry.description;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${lang}/industries/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/industries/${slug}`
            : `${SITE_URL}/${locale}/industries/${slug}`,
        ])
      ),
    },
  };
}

export default async function LocalizedIndustryPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const t = getTranslations(lang as Locale);
  const localizedContent = getLocalizedIndustryContent(slug, lang as Locale);

  const name = localizedContent?.name || industry.name;
  const heroHeadline = localizedContent?.heroHeadline || `AI Video for ${industry.name}`;
  const heroSubheadline = localizedContent?.heroSubheadline || industry.description;
  const ctaText = localizedContent?.ctaText || industry.ctaText;

  const challenges = localizedContent?.challenges?.map((c, i) => ({
    icon: industry.challenges[i]?.icon || "",
    title: c.title,
    description: c.description,
  })) || industry.challenges;

  const solutions = localizedContent?.solutions?.map((s, i) => ({
    icon: industry.solutions[i]?.icon || "",
    title: s.title,
    description: s.description,
  })) || industry.solutions;

  const videoTypes = localizedContent?.videoTypes || industry.videoTypes;
  const benefits = localizedContent?.benefits || industry.benefits;

  const stats = localizedContent?.stats?.map((s, i) => ({
    value: industry.stats[i]?.value || "",
    label: s.label,
  })) || industry.stats;

  const testimonial = localizedContent?.testimonial || industry.testimonial;
  const faqs = localizedContent?.faqs || industry.faqs;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t.home, url: `/${lang}` },
    { name: t.industries, url: `/${lang}/industries` },
    { name: name, url: `/${lang}/industries/${industry.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <Breadcrumb
            items={[
              { label: t.home, href: `/${lang}` },
              { label: t.industries, href: `/${lang}/industries` },
              { label: name },
            ]}
            className="justify-center mb-6"
          />

          <div className="text-6xl mb-6">{industry.icon}</div>

          <Heading as="h1" className="mb-6">
            {heroHeadline}
          </Heading>

          <Text variant="large" className="mb-8 max-w-3xl mx-auto">
            {heroSubheadline}
          </Text>

          <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg">{ctaText}</Button>
          </Link>
        </div>
      </Section>

      {/* Challenges Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.challengesIn?.replace("{name}", name) || `Challenges in ${name}`}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <Card key={index} variant="elevated">
              <div className="text-3xl mb-3">{challenge.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {challenge.title}
              </h3>
              <Text variant="small">{challenge.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Solutions Section */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.solutionsFor?.replace("{name}", name) || `How Hyreel Solves ${name} Video Challenges`}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} variant="elevated">
              <div className="text-3xl mb-3">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {solution.title}
              </h3>
              <Text variant="small">{solution.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Video Types Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.videoTypesFor?.replace("{name}", name) || `Video Types for ${name}`}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videoTypes.map((videoType, index) => (
            <Card key={index} variant="flat">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {videoType.title}
              </h3>
              <Text variant="small">{videoType.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.benefitsFor?.replace("{name}", name) || `Benefits for ${name}`}
          </Heading>
        </div>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[var(--brand-primary)] mt-1">✓</span>
                <Text>{benefit}</Text>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Stats Section */}
      <Section spacing="lg" className="bg-[var(--brand-primary)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center text-white">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial Section */}
      <Section spacing="xl">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6">&quot;</div>
          <Text variant="large" className="italic mb-6">
            {testimonial.quote}
          </Text>
          <div>
            <div className="font-semibold text-[var(--text-primary)]">{testimonial.author}</div>
            <Text variant="small">{testimonial.role}</Text>
          </div>
        </div>
      </Section>

      {/* FAQs Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            {t.frequentlyAskedQuestions}
          </Heading>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {faq.question}
              </h3>
              <Text variant="small">{faq.answer}</Text>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            {t.readyToTransformContent?.replace("{name}", name) || `Ready to Transform Your ${name} Content?`}
          </Heading>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg">{ctaText}</Button>
            </Link>
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
