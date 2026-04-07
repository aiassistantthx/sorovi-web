const SITE_URL = "https://hyreel.com";
const SITE_NAME = "Hyreel";

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "iOS",
    applicationSubCategory: "AI Video Generator",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "29.99",
      priceCurrency: "USD",
      offerCount: "3",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "2847",
      bestRating: "5",
      worstRating: "1",
    },
    description:
      "Create viral videos in minutes with AI. Transform photos into stunning videos with cinematic motion effects.",
    url: SITE_URL,
    downloadUrl:
      "https://apps.apple.com/app/hyreel-ai-video-generator/id6738042296",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: `${SITE_URL}/contact`,
      email: "support@hyreel.com",
    },
    sameAs: [
      "https://twitter.com/hyreelapp",
      "https://instagram.com/hyreelapp",
      "https://tiktok.com/@hyreelapp",
      "https://youtube.com/@hyreelapp",
    ],
    description:
      "AI-powered video generation app for creators and businesses.",
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  publishedAt,
  modifiedAt,
  author,
  image,
}: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  modifiedAt?: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    image: image || `${SITE_URL}/og-image.png`,
    author: {
      "@type": "Person",
      name: author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${url}`,
    },
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateToolSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${name} - ${SITE_NAME}`,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "iOS",
    description,
    url: `${SITE_URL}${url}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "2847",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function generatePricingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${SITE_NAME} - AI Video Generator`,
    description: "Create viral videos in minutes with AI. Transform photos into stunning videos with cinematic motion effects.",
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    offers: [
      {
        "@type": "Offer",
        name: "Free Plan",
        price: "0",
        priceCurrency: "USD",
        description: "5 videos per day, all motion effects, watermark",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Creator Plan",
        price: "9.99",
        priceCurrency: "USD",
        description: "Unlimited videos, no watermark, 1080p, 50+ AI voices",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2027-12-31",
      },
      {
        "@type": "Offer",
        name: "Business Plan",
        price: "29.99",
        priceCurrency: "USD",
        description: "Everything in Creator plus 4K, premium voices, team features",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2027-12-31",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "2847",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function generateAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SITE_NAME}`,
    description: "Learn about Hyreel, the AI video generation app helping creators make viral content.",
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      foundingDate: "2023",
      description: "AI-powered video generation app for creators and businesses.",
    },
  };
}
