import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/layouts/navigation";
import { Footer } from "@/components/layouts/footer";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/schema";
import { i18n, type Locale } from "@/lib/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hyreel.com"),
  title: {
    default: "Hyreel - AI Video Generation App",
    template: "%s",
  },
  description:
    "Create viral videos in minutes with AI. TikTok, Instagram Reels, YouTube Shorts and more.",
  authors: [{ name: "Hyreel Team" }],
  creator: "Hyreel",
  publisher: "Hyreel",
  other: {
    "msapplication-TileColor": "#7c3aed",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function getDocumentLang(lang?: string): Locale {
  return i18n.locales.includes(lang as Locale) ? (lang as Locale) : i18n.defaultLocale;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: Promise<{ lang?: string }>;
}>) {
  const resolvedParams = params ? await params : undefined;
  const requestHeaders = await headers();
  const documentLang = getDocumentLang(
    requestHeaders.get("x-hyreel-locale") ?? resolvedParams?.lang
  );

  return (
    <html lang={documentLang} className={inter.variable}>
      <head>
        {/* Preload critical resources for better LCP */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://apps.apple.com" />

        {/* RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Hyreel RSS"
          href="/feed.xml"
        />

        {/* llms.txt for AI crawlers */}
        <link rel="author" href="/llms.txt" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <Navigation />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />

        {/* Umami Analytics */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src="https://umami.sparrowapps.io/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
