import type { Metadata } from "next";
import { i18n, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Hyreel - AI Video Generator",
  description: "Create viral videos from photos with AI",
};

export async function generateStaticParams() {
  return i18n.locales
    .filter((locale) => locale !== i18n.defaultLocale)
    .map((lang) => ({ lang }));
}

export default async function LocalizedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  return <>{children}</>;
}
