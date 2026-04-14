import { i18n, type Locale } from "@/lib/i18n/config";

const SITE_URL = "https://hyreel.com";

/**
 * Generate URL with locale prefix
 * Default locale (en) has no prefix, others get /{locale} prefix
 */
export function getLocalizedUrl(path: string, locale: Locale): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === i18n.defaultLocale) {
    return `${SITE_URL}${normalizedPath}`;
  }
  return `${SITE_URL}/${locale}${normalizedPath}`;
}

/**
 * Generate hreflang alternates for a given path
 * Used in page metadata for proper international SEO
 */
export function generateAlternates(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalPath = normalizedPath === "/" ? "" : normalizedPath;

  const languages: Record<string, string> = {};

  for (const locale of i18n.locales) {
    if (locale === i18n.defaultLocale) {
      languages[locale] = `${SITE_URL}${canonicalPath || "/"}`;
    } else {
      languages[locale] = `${SITE_URL}/${locale}${canonicalPath}`;
    }
  }

  // x-default points to the default locale version
  languages["x-default"] = `${SITE_URL}${canonicalPath || "/"}`;

  return {
    canonical: `${SITE_URL}${canonicalPath || "/"}`,
    languages,
  };
}

/**
 * Generate alternates object for sitemap entries
 * Returns the format expected by Next.js MetadataRoute.Sitemap
 */
export function generateSitemapAlternates(path: string): Record<string, string> {
  const normalizedPath = path === "/" ? "" : path;
  const alternates: Record<string, string> = {};

  for (const locale of i18n.locales) {
    if (locale === i18n.defaultLocale) {
      alternates[locale] = `${SITE_URL}${normalizedPath || "/"}`;
    } else {
      alternates[locale] = `${SITE_URL}/${locale}${normalizedPath}`;
    }
  }

  alternates["x-default"] = `${SITE_URL}${normalizedPath || "/"}`;

  return alternates;
}
