import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generatePricingSchema } from "@/lib/schema";
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
    en: "Pricing - AI Video Generator Plans | Hyreel",
    es: "Precios - Planes de Generador de Video con IA | Hyreel",
    de: "Preise - KI-Videogenerator-Pläne | Hyreel",
    fr: "Tarifs - Plans de Générateur Vidéo IA | Hyreel",
    pt: "Preços - Planos de Gerador de Vídeo IA | Hyreel",
    ru: "Цены - Тарифы AI Видео Генератора | Hyreel",
    it: "Prezzi - Piani Generatore Video IA | Hyreel",
    nl: "Prijzen - AI-Videogenerator Plannen | Hyreel",
    pl: "Cennik - Plany Generatora Wideo AI | Hyreel",
    ja: "料金 - AIビデオジェネレータープラン | Hyreel",
    ko: "가격 - AI 비디오 생성기 플랜 | Hyreel",
    zh: "定价 - AI视频生成器计划 | Hyreel",
  };

  const descriptions: Record<Locale, string> = {
    en: "Choose the perfect plan for your video creation needs. Free plan available, Creator $39/mo, Business $99/mo.",
    es: "Elige el plan perfecto para tus necesidades de creación de video. Plan gratuito disponible, Creator $39/mes, Business $99/mes.",
    de: "Wählen Sie den perfekten Plan für Ihre Videoerstellung. Kostenloser Plan verfügbar, Creator $39/Monat, Business $99/Monat.",
    fr: "Choisissez le plan parfait pour vos besoins de création vidéo. Plan gratuit disponible, Creator 39$/mois, Business 99$/mois.",
    pt: "Escolha o plano perfeito para suas necessidades de criação de vídeo. Plano gratuito disponível, Creator $39/mês, Business $99/mês.",
    ru: "Выберите идеальный план для создания видео. Бесплатный план, Creator $39/мес, Business $99/мес.",
    it: "Scegli il piano perfetto per le tue esigenze di creazione video. Piano gratuito disponibile, Creator $39/mese, Business $99/mese.",
    nl: "Kies het perfecte plan voor uw videocreatie. Gratis plan beschikbaar, Creator $39/maand, Business $99/maand.",
    pl: "Wybierz idealny plan do tworzenia wideo. Darmowy plan dostępny, Creator $39/mies., Business $99/mies.",
    ja: "ビデオ制作に最適なプランをお選びください。無料プラン、Creator $39/月、Business $99/月。",
    ko: "비디오 제작에 완벽한 플랜을 선택하세요. 무료 플랜, Creator $39/월, Business $99/월.",
    zh: "选择适合您视频创作需求的完美计划。免费计划，Creator $39/月，Business $99/月。",
  };

  return {
    title: titles[lang as Locale],
    description: descriptions[lang as Locale],
    alternates: {
      canonical: `${SITE_URL}/${lang}/pricing`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/pricing`
            : `${SITE_URL}/${locale}/pricing`,
        ])
      ),
    },
  };
}

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out Hyreel",
    features: [
      "3 videos per month",
      "720p quality",
      "Basic AI features",
      "Hyreel watermark",
      "Limited templates",
      "Community support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Creator",
    price: "$39",
    period: "per month",
    description: "Best for individual creators",
    features: [
      "Unlimited videos",
      "1080p HD quality",
      "All AI features",
      "No watermarks",
      "100+ templates",
      "50+ AI voices",
      "Priority support",
      "Direct publishing",
    ],
    cta: "Start Creating",
    popular: true,
  },
  {
    name: "Business",
    price: "$99",
    period: "per month",
    description: "For teams and agencies",
    features: [
      "Everything in Creator",
      "4K quality",
      "Team collaboration",
      "5 team members",
      "Custom branding",
      "API access",
      "Analytics dashboard",
      "Dedicated support",
      "Custom AI training",
    ],
    cta: "Start Business Trial",
    popular: false,
  },
];

const faqs = [
  {
    q: "Can I change plans anytime?",
    a: "Yes! Upgrade, downgrade, or cancel anytime. Changes take effect immediately.",
  },
  {
    q: "What happens if I exceed my plan limits?",
    a: "On the Free plan, you'll need to upgrade. Paid plans have unlimited videos.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes, we offer a 14-day money-back guarantee on all paid plans.",
  },
  {
    q: "Can I use videos commercially?",
    a: "Absolutely! You own 100% rights to all videos you create.",
  },
];

export default async function LocalizedPricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const t = getTranslations(lang as Locale);
  const pricingSchema = generatePricingSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <Heading as="h1" className="mb-6">
            {t.pricingPageTitle}
          </Heading>
          <Text variant="large">
            {t.pricingPageSubtitle}
          </Text>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section spacing="xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              variant="elevated"
              className={`relative overflow-visible ${
                plan.popular
                  ? "border-[var(--brand-primary)] shadow-lg shadow-[var(--brand-primary)]/10"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-[var(--brand-primary)] text-white text-sm font-medium">
                    {t.mostPopular}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold text-[var(--text-primary)]">
                    {plan.price}
                  </span>
                  <span className="text-[var(--text-muted)]">
                    /{plan.period}
                  </span>
                </div>
                <Text variant="small">{plan.description}</Text>
              </div>

              <Button
                variant={plan.popular ? "primary" : "secondary"}
                className="w-full mb-6"
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--brand-primary)] flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[var(--text-secondary)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section spacing="xl">
        <div className="text-center mb-10">
          <Heading as="h2" className="mb-4">
            Pricing FAQs
          </Heading>
          <Text variant="large">
            Common questions about our pricing
          </Text>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} variant="elevated">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                {faq.q}
              </h3>
              <Text variant="small">{faq.a}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            {t.readyToCreate}
          </Heading>
          <Text variant="large" className="mb-8">
            {t.joinCreators}
          </Text>
          <Button size="lg">{t.getStartedFree}</Button>
          <Text variant="small" className="mt-4 text-[var(--text-muted)]">
            {t.noCreditCard}
          </Text>
        </div>
      </Section>
    </>
  );
}
