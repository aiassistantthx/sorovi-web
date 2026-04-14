import type { MetadataRoute } from "next";
import { tools } from "@/lib/tools";
import { alternatives } from "@/lib/alternatives";
import { useCases } from "@/lib/use-cases";
import { blogPosts } from "@/lib/blog";
import { templates } from "@/lib/templates";
import { industries } from "@/lib/industries";
import { audiences } from "@/lib/audiences";
import { platforms } from "@/lib/platforms";
import { solutions } from "@/lib/solutions";
import { i18n, type Locale } from "@/lib/i18n/config";

const SITE_URL = "https://hyreel.com";

type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
  alternates?: {
    languages: Record<string, string>;
  };
};

function getLocalizedUrl(path: string, locale: Locale): string {
  if (locale === i18n.defaultLocale) {
    return `${SITE_URL}${path}`;
  }
  return `${SITE_URL}/${locale}${path}`;
}

function generateAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};

  for (const locale of i18n.locales) {
    languages[locale] = getLocalizedUrl(path, locale);
  }

  languages["x-default"] = `${SITE_URL}${path}`;

  return languages;
}

function createEntry(
  path: string,
  lastModified: Date,
  changeFrequency: SitemapEntry["changeFrequency"],
  priority: number,
  locale: Locale
): SitemapEntry {
  return {
    url: getLocalizedUrl(path, locale),
    lastModified,
    changeFrequency,
    priority: locale === i18n.defaultLocale ? priority : priority * 0.9,
    alternates: {
      languages: generateAlternates(path),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: SitemapEntry[] = [];
  const now = new Date();

  // Static pages configuration
  const staticPages = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/tools", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/use-cases", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/blog", changeFrequency: "daily" as const, priority: 0.8 },
    { path: "/pricing", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/templates", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/industries", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/for", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/platforms", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/solutions", changeFrequency: "weekly" as const, priority: 0.8 },
    {
      path: "/alternatives",
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      path: "/free-ai-video-generator",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/ai-video-no-watermark",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/cheap-ai-video-maker",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Generate entries for all locales
  for (const locale of i18n.locales) {
    // Static pages
    for (const page of staticPages) {
      entries.push(
        createEntry(page.path, now, page.changeFrequency, page.priority, locale)
      );
    }

    // Tool pages
    for (const tool of tools) {
      entries.push(
        createEntry(`/tools/${tool.slug}`, now, "weekly", 0.8, locale)
      );
    }

    // Alternative pages
    for (const alt of alternatives) {
      entries.push(
        createEntry(`/alternatives/${alt.slug}`, now, "monthly", 0.7, locale)
      );
    }

    // Use case pages
    for (const uc of useCases) {
      entries.push(
        createEntry(`/use-cases/${uc.slug}`, now, "monthly", 0.7, locale)
      );
    }

    // Blog pages
    for (const post of blogPosts) {
      entries.push(
        createEntry(
          `/blog/${post.slug}`,
          new Date(post.publishedAt),
          "monthly",
          0.6,
          locale
        )
      );
    }

    // Template pages
    for (const template of templates) {
      entries.push(
        createEntry(`/templates/${template.slug}`, now, "monthly", 0.7, locale)
      );
    }

    // Industry pages
    for (const industry of industries) {
      entries.push(
        createEntry(
          `/industries/${industry.slug}`,
          now,
          "monthly",
          0.7,
          locale
        )
      );
    }

    // Audience pages
    for (const audience of audiences) {
      entries.push(
        createEntry(`/for/${audience.slug}`, now, "monthly", 0.7, locale)
      );
    }

    // Platform pages
    for (const platform of platforms) {
      entries.push(
        createEntry(`/platforms/${platform.slug}`, now, "monthly", 0.7, locale)
      );
    }

    // Solution pages
    for (const solution of solutions) {
      entries.push(
        createEntry(`/solutions/${solution.slug}`, now, "monthly", 0.7, locale)
      );
    }
  }

  return entries;
}
