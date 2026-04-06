import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  // Generate all non-default locale pages
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

  const dict = await getDictionary(lang as Locale);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    alternates: {
      canonical: `https://hyreel.com/${lang}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? "https://hyreel.com"
            : `https://hyreel.com/${locale}`,
        ])
      ),
    },
  };
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[var(--text-primary)] mb-6">
            {dict.hero.title}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{dict.hero.titleHighlight}</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 md:h-4 bg-[var(--brand-primary)]/20 -z-0" />
            </span>{" "}
            {dict.hero.titleEnd}
          </h1>
          <Text variant="large" className="mb-10 max-w-2xl mx-auto">
            {dict.hero.description}
          </Text>
          <Button size="lg" className="text-base sm:text-lg px-10 py-3">
            {dict.hero.cta}
          </Button>
        </div>
      </Section>

      {/* Features Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center mb-12">
          <Heading as="h2" className="mb-4">
            {dict.features.title}
          </Heading>
          <Text variant="large">{dict.features.subtitle}</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.features.items.map((feature, index) => (
            <Card key={index} variant="elevated">
              <div className="text-4xl mb-4">
                {["📸", "🎬", "📱", "🎤", "⚡", "✨"][index]}
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {feature.title}
              </h3>
              <Text variant="small">{feature.description}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works Section */}
      <Section spacing="xl">
        <div className="text-center mb-12">
          <Heading as="h2" className="mb-4">
            {dict.howItWorks.title}
          </Heading>
          <Text variant="large">{dict.howItWorks.subtitle}</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {dict.howItWorks.steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {step.title}
              </h3>
              <Text variant="small">{step.description}</Text>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section
        spacing="lg"
        className="border-y border-[var(--border-color)] bg-[var(--surface-light)]"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: "240,909+", label: dict.stats.videos },
            { value: "14,258+", label: dict.stats.creators },
            { value: "4.8", label: dict.stats.rating },
            { value: "150+", label: dict.stats.countries },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-1">
                {stat.value}
              </div>
              <Text variant="small" className="text-[var(--text-secondary)]">
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl">
        <div className="text-center max-w-3xl mx-auto">
          <Heading as="h2" className="mb-6">
            {dict.cta.title}
          </Heading>
          <Text variant="large" className="mb-10">
            {dict.cta.description}
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">{dict.cta.primary}</Button>
            <Link href={`/${lang}/pricing`}>
              <Button size="lg" variant="secondary">
                {dict.cta.secondary}
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
