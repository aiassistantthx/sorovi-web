const SITE_URL = "https://hyreel.com";
const SITE_NAME = "Hyreel";

// Testimonials data for Review schema
const testimonialReviews = [
  {
    author: "Sarah K.",
    role: "Fashion Creator",
    reviewBody:
      "I went from 500 views to 2M views on my third video. The AI just knows what works.",
    ratingValue: 5,
  },
  {
    author: "Marcus J.",
    role: "E-commerce Owner",
    reviewBody:
      "Used to spend $2,000/month on a video editor. Now I create better content myself in minutes.",
    ratingValue: 5,
  },
  {
    author: "Elena R.",
    role: "Dropshipper",
    reviewBody:
      "The photo-to-video feature is insane. Upload a product shot, get a viral-ready ad. Game over.",
    ratingValue: 5,
  },
  {
    author: "David L.",
    role: "Fitness Coach",
    reviewBody:
      "My Reels engagement went up 400% after switching to Hyreel. The AI voiceover sounds natural.",
    ratingValue: 5,
  },
  {
    author: "Priya M.",
    role: "Food Blogger",
    reviewBody:
      "Finally, an AI tool that doesn't make your content look AI-generated. Quality is incredible.",
    ratingValue: 5,
  },
  {
    author: "James T.",
    role: "Marketing Agency",
    reviewBody:
      "Went viral on TikTok within a week of using Hyreel. My agency clients are blown away.",
    ratingValue: 5,
  },
];

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
      highPrice: "99",
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
    review: testimonialReviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
        jobTitle: review.role,
      },
      reviewBody: review.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.ratingValue,
        bestRating: 5,
        worstRating: 1,
      },
    })),
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

export function generateReviewSchema(reviews: Array<{
  author: string;
  role?: string;
  reviewBody: string;
  ratingValue?: number;
}>) {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      url: SITE_URL,
    },
    author: {
      "@type": "Person",
      name: review.author,
      ...(review.role && { jobTitle: review.role }),
    },
    reviewBody: review.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.ratingValue || 5,
      bestRating: 5,
      worstRating: 1,
    },
  }));
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
    },
    contactPoint: {
      "@type": "ContactPoint",
      url: `${SITE_URL}/contact`,
      email: "support@hyreel.com",
    },
    sameAs: [
      "https://twitter.com/hyreelapp",
      "https://instagram.com/hyreelapp",
      "https://tiktok.com/@hyreelapp",
      "https://youtube.com/@hyreelapp",
    ],
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
    description:
      "Create viral videos in minutes with AI. Transform photos into stunning videos with cinematic motion effects.",
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
        description: "3 videos per month, 720p quality, basic features",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Creator Plan",
        price: "39",
        priceCurrency: "USD",
        description:
          "Unlimited videos, no watermark, 1080p, 50+ AI voices, priority support",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2027-12-31",
      },
      {
        "@type": "Offer",
        name: "Business Plan",
        price: "99",
        priceCurrency: "USD",
        description:
          "Everything in Creator plus 4K, team collaboration, API access, dedicated support",
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
    description:
      "Learn about Hyreel, the AI video generation app helping creators make viral content.",
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      foundingDate: "2023",
      description:
        "AI-powered video generation app for creators and businesses.",
    },
  };
}

export function generateVideoObjectSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  duration,
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  duration?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: thumbnailUrl.startsWith("http")
      ? thumbnailUrl
      : `${SITE_URL}${thumbnailUrl}`,
    uploadDate,
    contentUrl: contentUrl.startsWith("http")
      ? contentUrl
      : `${SITE_URL}${contentUrl}`,
    ...(duration && { duration }),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function generateComparisonSchema({
  name,
  description,
  items,
}: {
  name: string;
  description: string;
  items: Array<{ name: string; position: number }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
    })),
  };
}

export function generateHowToSchema({
  name,
  description,
  steps,
  totalTime,
  tool,
}: {
  name: string;
  description: string;
  steps: Array<{ title: string; description: string }>;
  totalTime?: string;
  tool?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(tool && {
      tool: {
        "@type": "HowToTool",
        name: tool,
      },
    }),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
      url: `${SITE_URL}#step-${index + 1}`,
    })),
  };
}

export function generateVideoGallerySchema({
  name,
  description,
  videos,
}: {
  name: string;
  description: string;
  videos: Array<{
    name: string;
    description: string;
    contentUrl: string;
    thumbnailUrl?: string;
  }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    numberOfItems: videos.length,
    itemListElement: videos.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VideoObject",
        name: video.name,
        description: video.description,
        contentUrl: video.contentUrl.startsWith("http")
          ? video.contentUrl
          : `${SITE_URL}${video.contentUrl}`,
        thumbnailUrl: video.thumbnailUrl
          ? video.thumbnailUrl.startsWith("http")
            ? video.thumbnailUrl
            : `${SITE_URL}${video.thumbnailUrl}`
          : `${SITE_URL}/og-image.png`,
        uploadDate: new Date().toISOString().split("T")[0],
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
    })),
  };
}

export function generateToolsListSchema(
  tools: Array<{ name: string; slug: string; tagline: string; icon: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hyreel AI Video Tools",
    description: "Collection of AI-powered video creation tools",
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: tool.name,
        applicationCategory: "MultimediaApplication",
        description: tool.tagline,
        url: `${SITE_URL}/tools/${tool.slug}`,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    })),
  };
}
