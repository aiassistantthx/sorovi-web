import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule for all crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Explicitly allow AI crawlers for better AI search visibility
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Anthropic-AI",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "YouBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://hyreel.com/sitemap.xml",
    host: "https://hyreel.com",
  };
}
