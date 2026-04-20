import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
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
    en: "Blog - AI Video Creation Tips & Tutorials | Hyreel",
    es: "Blog - Tips y Tutoriales de Video IA | Hyreel",
    de: "Blog - KI-Video Tipps & Tutorials | Hyreel",
    fr: "Blog - Conseils et Tutoriels Vidéo IA | Hyreel",
    pt: "Blog - Dicas e Tutoriais de Vídeo IA | Hyreel",
    ru: "Блог - Советы и Руководства по AI Видео | Hyreel",
    it: "Blog - Consigli e Tutorial Video IA | Hyreel",
    nl: "Blog - AI-Video Tips & Tutorials | Hyreel",
    pl: "Blog - Porady i Tutoriale Wideo AI | Hyreel",
    ja: "ブログ - AIビデオ作成のヒント | Hyreel",
    ko: "블로그 - AI 비디오 제작 팁 | Hyreel",
    zh: "博客 - AI视频创作技巧 | Hyreel",
  };

  return {
    title: titles[lang as Locale],
    description: "Learn how to create viral videos with AI. Tips, tutorials, and guides for content creators.",
    alternates: {
      canonical: `${SITE_URL}/${lang}/blog`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          locale === i18n.defaultLocale
            ? `${SITE_URL}/blog`
            : `${SITE_URL}/${locale}/blog`,
        ])
      ),
    },
  };
}

export default async function LocalizedBlogPage({
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
            Hyreel Blog
          </Heading>
          <Text variant="large">
            Tips, tutorials, and insights for creating viral video content with AI.
          </Text>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} variant="elevated" className="group cursor-pointer">
              <Link href={`/${lang}/blog/${post.slug}`}>
                <div className="mb-4">
                  <span className="text-xs text-[var(--brand-primary)] font-medium uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <Text variant="small" className="mb-4 line-clamp-3">
                  {post.excerpt}
                </Text>
                <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
                  <span>{post.author}</span>
                  <span>{post.readingTime} min read</span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
