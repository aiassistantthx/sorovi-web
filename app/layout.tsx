import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layouts/navigation";
import { Footer } from "@/components/layouts/footer";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hyreel.com"),
  title: {
    default: "Hyreel - AI Video Generation App",
    template: "%s | Hyreel",
  },
  description: "Create viral videos in minutes with AI. TikTok, Instagram Reels, YouTube Shorts and more.",
  authors: [{ name: "Hyreel Team" }],
  creator: "Hyreel",
  publisher: "Hyreel",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hyreel - AI Video Generation App",
    description: "Create viral videos in minutes with AI. Transform photos into stunning videos for TikTok, Instagram Reels, and YouTube Shorts.",
    type: "website",
    locale: "en_US",
    siteName: "Hyreel",
    url: "https://hyreel.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hyreel - AI Video Generation App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyreel - AI Video Generation App",
    description: "Create viral videos in minutes with AI",
    images: ["/og-image.png"],
    creator: "@hyreelapp",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
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
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
