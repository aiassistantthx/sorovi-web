"use client";

import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import { i18n, type Locale } from "@/lib/i18n/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

const copy: Record<Locale, {
  title: string;
  description: string;
  home: string;
  support: string;
  helpfulLinks: string;
  about: string;
  pricing: string;
  contact: string;
  privacy: string;
}> = {
  en: {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist. It might have been moved or deleted.",
    home: "Go to Homepage",
    support: "Contact Support",
    helpfulLinks: "Here are some helpful links instead:",
    about: "About Us",
    pricing: "Pricing",
    contact: "Contact",
    privacy: "Privacy Policy",
  },
  es: {
    title: "Página no encontrada",
    description: "La página que buscas no existe. Puede haberse movido o eliminado.",
    home: "Ir al inicio",
    support: "Contactar soporte",
    helpfulLinks: "Prueba con estos enlaces útiles:",
    about: "Sobre nosotros",
    pricing: "Precios",
    contact: "Contacto",
    privacy: "Política de privacidad",
  },
  de: {
    title: "Seite nicht gefunden",
    description: "Die gesuchte Seite existiert nicht. Sie wurde möglicherweise verschoben oder gelöscht.",
    home: "Zur Startseite",
    support: "Support kontaktieren",
    helpfulLinks: "Diese Links könnten helfen:",
    about: "Über uns",
    pricing: "Preise",
    contact: "Kontakt",
    privacy: "Datenschutz",
  },
  fr: {
    title: "Page introuvable",
    description: "La page que vous recherchez n'existe pas. Elle a peut-être été déplacée ou supprimée.",
    home: "Retour à l'accueil",
    support: "Contacter le support",
    helpfulLinks: "Voici quelques liens utiles :",
    about: "À propos",
    pricing: "Tarifs",
    contact: "Contact",
    privacy: "Confidentialité",
  },
  pt: {
    title: "Página não encontrada",
    description: "A página que você procura não existe. Ela pode ter sido movida ou excluída.",
    home: "Ir para o início",
    support: "Contatar suporte",
    helpfulLinks: "Veja alguns links úteis:",
    about: "Sobre nós",
    pricing: "Preços",
    contact: "Contato",
    privacy: "Política de privacidade",
  },
  ru: {
    title: "Страница не найдена",
    description: "Страница, которую вы ищете, не существует. Возможно, она была перемещена или удалена.",
    home: "На главную",
    support: "Связаться с поддержкой",
    helpfulLinks: "Вот несколько полезных ссылок:",
    about: "О нас",
    pricing: "Цены",
    contact: "Контакты",
    privacy: "Политика конфиденциальности",
  },
  it: {
    title: "Pagina non trovata",
    description: "La pagina che cerchi non esiste. Potrebbe essere stata spostata o eliminata.",
    home: "Vai alla home",
    support: "Contatta supporto",
    helpfulLinks: "Ecco alcuni link utili:",
    about: "Chi siamo",
    pricing: "Prezzi",
    contact: "Contatti",
    privacy: "Privacy",
  },
  nl: {
    title: "Pagina niet gevonden",
    description: "De pagina die je zoekt bestaat niet. Deze is mogelijk verplaatst of verwijderd.",
    home: "Naar startpagina",
    support: "Neem contact op",
    helpfulLinks: "Probeer deze nuttige links:",
    about: "Over ons",
    pricing: "Prijzen",
    contact: "Contact",
    privacy: "Privacybeleid",
  },
  pl: {
    title: "Nie znaleziono strony",
    description: "Strona, której szukasz, nie istnieje. Mogła zostać przeniesiona lub usunięta.",
    home: "Przejdź do strony głównej",
    support: "Skontaktuj się z pomocą",
    helpfulLinks: "Oto kilka przydatnych linków:",
    about: "O nas",
    pricing: "Cennik",
    contact: "Kontakt",
    privacy: "Polityka prywatności",
  },
  ja: {
    title: "ページが見つかりません",
    description: "お探しのページは存在しません。移動または削除された可能性があります。",
    home: "ホームへ戻る",
    support: "サポートに連絡",
    helpfulLinks: "こちらのリンクもご利用ください:",
    about: "会社情報",
    pricing: "料金",
    contact: "お問い合わせ",
    privacy: "プライバシーポリシー",
  },
  ko: {
    title: "페이지를 찾을 수 없습니다",
    description: "찾고 있는 페이지가 존재하지 않습니다. 이동되었거나 삭제되었을 수 있습니다.",
    home: "홈으로 이동",
    support: "지원팀 문의",
    helpfulLinks: "다음 링크를 확인해 보세요:",
    about: "회사 소개",
    pricing: "가격",
    contact: "문의",
    privacy: "개인정보 처리방침",
  },
  zh: {
    title: "页面未找到",
    description: "你要查找的页面不存在，可能已被移动或删除。",
    home: "返回首页",
    support: "联系客服",
    helpfulLinks: "你也可以查看这些链接：",
    about: "关于我们",
    pricing: "定价",
    contact: "联系",
    privacy: "隐私政策",
  },
};

function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return i18n.locales.includes(segment as Locale) ? (segment as Locale) : i18n.defaultLocale;
}

export default function NotFound() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const prefix = locale === i18n.defaultLocale ? "" : `/${locale}`;
  const t = copy[locale];

  return (
    <Section spacing="xl" className="relative overflow-hidden min-h-[70vh] flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-green)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--accent-green)] bg-clip-text text-transparent">
            404
          </div>
        </div>

        {/* Error Message */}
        <Heading as="h1" className="mb-4">
          {t.title}
        </Heading>
        <Text variant="large" className="mb-8">
          {t.description}
        </Text>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href={prefix || "/"}>
            <Button size="lg">
              {t.home}
            </Button>
          </Link>
          <Link href={`${prefix}/contact`}>
            <Button size="lg" variant="secondary">
              {t.support}
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="space-y-3">
          <Text variant="small" className="text-[var(--text-gray-500)] mb-4">
            {t.helpfulLinks}
          </Text>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href={`${prefix}/about`} className="text-[var(--brand-primary)] hover:text-[var(--accent-lime)] transition-colors">
              {t.about}
            </Link>
            <Link href={`${prefix}/pricing`} className="text-[var(--brand-primary)] hover:text-[var(--accent-lime)] transition-colors">
              {t.pricing}
            </Link>
            <Link href={`${prefix}/contact`} className="text-[var(--brand-primary)] hover:text-[var(--accent-lime)] transition-colors">
              {t.contact}
            </Link>
            <Link href={`${prefix}/privacy`} className="text-[var(--brand-primary)] hover:text-[var(--accent-lime)] transition-colors">
              {t.privacy}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
