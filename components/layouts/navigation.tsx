"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/translations";
import { Container } from "./container";

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];
  const locale = i18n.locales.includes(firstSegment as Locale)
    ? (firstSegment as Locale)
    : i18n.defaultLocale;
  const t = getTranslations(locale);
  const prefix = locale === i18n.defaultLocale ? "" : `/${locale}`;
  const navLinks = [
    { label: t.tools, href: `${prefix}/tools` },
    { label: t.templates, href: `${prefix}/templates` },
    { label: t.useCases, href: `${prefix}/use-cases` },
    { label: t.industries, href: `${prefix}/industries` },
    { label: t.pricing, href: `${prefix}/pricing` },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-[var(--border-color)] shadow-sm"
          : "bg-white"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={prefix || "/"}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="text-2xl font-bold text-[var(--text-primary)]">
              Hyreel
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="https://apps.apple.com/us/app/sorovi-ai-photo-to-video/id6746805170" target="_blank" rel="noopener noreferrer">
              <Button size="sm">{t.downloadForIOS}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--text-primary)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={t.viewAll}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--border-color)]">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="https://apps.apple.com/us/app/sorovi-ai-photo-to-video/id6746805170" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="w-full">
                  {t.downloadForIOS}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
