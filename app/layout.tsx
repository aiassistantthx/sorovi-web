import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layouts/navigation";
import { Footer } from "@/components/layouts/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sorovi - AI Video Generation App",
  description: "Create viral videos in minutes with AI. TikTok, Instagram Reels, YouTube Shorts and more.",
  keywords: ["AI video generator", "TikTok videos", "Instagram Reels", "YouTube Shorts", "video maker app"],
  authors: [{ name: "Sorovi" }],
  openGraph: {
    title: "Sorovi - AI Video Generation App",
    description: "Create viral videos in minutes with AI",
    type: "website",
    locale: "en_US",
    siteName: "Sorovi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorovi - AI Video Generation App",
    description: "Create viral videos in minutes with AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
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
