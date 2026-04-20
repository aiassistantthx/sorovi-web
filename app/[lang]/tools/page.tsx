import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { tools, getAllCategories } from "@/lib/tools";
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

  const titles: Record<Locale, string> = {
    en: "AI Video Tools - Hyreel",
    es: "Herramientas de Video IA - Hyreel",
    de: "KI-Video-Tools - Hyreel",
    fr: "Outils Vidéo IA - Hyreel",
    pt: "Ferramentas de Vídeo IA - Hyreel",
    ru: "AI Инструменты для Видео - Hyreel",
    it: "Strumenti Video IA - Hyreel",
    nl: "AI-Videotools - Hyreel",
    pl: "Narzędzia Wideo AI - Hyreel",
    ja: "AIビデオツール - Hyreel",
    ko: "AI 비디오 도구 - Hyreel",
    zh: "AI视频工具 - Hyreel",
  };

  return {
    title: titles[lang as Locale],
    description: "Explore our suite of AI-powered video creation tools.",
    alternates: {
      canonical: `${SITE_URL}/${lang}/tools`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/tools`
            : `${SITE_URL}/${locale}/tools`,
        ])
      ),
    },
  };
}

const categories = getAllCategories();

export default async function LocalizedToolsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  return (
    <>
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <Heading as="h1" className="mb-6">
            AI Video Creation Tools
          </Heading>
          <Text variant="large" className="mb-8">
            Everything you need to create professional videos with AI.
          </Text>
          <Button size="lg">Start Creating Free</Button>
        </div>
      </Section>

      <Section spacing="lg" className="bg-[var(--surface-light)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "100+", label: "AI Tools" },
            { value: "14,258+", label: "Active Users" },
            { value: "240,909+", label: "Videos Created" },
            { value: "32", label: "Languages" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-2">
                {stat.value}
              </div>
              <Text variant="small" className="text-[var(--text-secondary)]">
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      {categories.map((category, categoryIndex) => {
        const categoryTools = tools.filter((tool) => tool.category === category);

        return (
          <Section
            key={categoryIndex}
            spacing="xl"
            className={categoryIndex % 2 === 0 ? "bg-[var(--surface-light)]" : ""}
          >
            <div className="mb-10">
              <Heading as="h2" className="mb-4">
                {category} Tools
              </Heading>
              <Text variant="large">
                Powerful AI tools for {category.toLowerCase()}
              </Text>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {categoryTools.map((tool, index) => (
                <Card key={index} variant="elevated" className="group cursor-pointer hover:border-[var(--brand-primary)]/30 transition-all">
                  <Link href={`/${lang}/tools/${tool.slug}`}>
                    <div className="text-3xl md:text-5xl mb-2 md:mb-4">{tool.icon}</div>
                    <h3 className="text-base md:text-xl font-semibold text-[var(--text-primary)] mb-1 md:mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
                      {tool.name}
                    </h3>
                    <Text variant="small" className="mb-2 md:mb-4 line-clamp-2 hidden sm:block">
                      {tool.tagline}
                    </Text>
                    <div className="flex items-center gap-1 md:gap-2 text-[var(--brand-primary)] text-xs md:text-sm font-medium">
                      Learn More
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </Section>
        );
      })}

      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            Ready to Create Amazing Videos?
          </Heading>
          <Text variant="large" className="mb-8">
            Start using our AI tools today. No credit card required.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Get Started Free</Button>
            <Link href={`/${lang}/pricing`}>
              <Button size="lg" variant="secondary">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
