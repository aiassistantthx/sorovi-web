export interface Platform {
  slug: string;
  name: string;
  icon: string;
  color: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  specs: { aspectRatio: string; duration: string; resolution: string };
  features: Array<{ icon: string; title: string; description: string }>;
  bestPractices: string[];
  contentTypes: Array<{ title: string; description: string }>;
  algorithmTips: string[];
  stats: Array<{ value: string; label: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedTools: string[];
  ctaText: string;
}

export const platforms: Platform[] = [
  {
    slug: "tiktok",
    name: "TikTok",
    icon: "🎵",
    color: "#000000",
    metaTitle: "AI Video Generator for TikTok | Hyreel - Create Viral TikToks",
    metaDescription: "Create viral TikTok videos from photos in seconds. AI effects optimized for the For You Page. Perfect 9:16 format, hook-first design, algorithm-friendly.",
    heroHeadline: "Create TikToks That Hit the For You Page",
    heroSubheadline: "AI-powered video creation optimized for TikTok's algorithm. Turn photos into scroll-stopping content that gets views, likes, and follows.",
    description: "Hyreel creates TikTok-optimized videos with effects designed to maximize FYP placement and engagement.",
    specs: { aspectRatio: "9:16", duration: "15-60 sec", resolution: "1080x1920" },
    features: [
      {
        icon: "📱",
        title: "Perfect 9:16 Format",
        description: "Every video is optimized for TikTok's vertical format with safe zones for text and UI."
      },
      {
        icon: "⚡",
        title: "Hook-First Design",
        description: "Strong visual hooks in the first 0.5 seconds to stop the scroll and capture attention."
      },
      {
        icon: "🔄",
        title: "Loop-Friendly Endings",
        description: "Smooth endings that encourage rewatches, boosting your watch time metrics."
      },
      {
        icon: "🎯",
        title: "FYP-Optimized Effects",
        description: "Motion patterns designed around what TikTok's algorithm rewards."
      }
    ],
    bestPractices: [
      "Post 1-3 times daily for consistent growth",
      "Use trending sounds (add in TikTok after export)",
      "First 0.5 seconds must hook viewers",
      "Encourage comments with questions or CTAs",
      "Post during peak hours: 7-9am, 12-3pm, 7-11pm",
      "Use relevant hashtags (3-5 per video)"
    ],
    contentTypes: [
      { title: "Product Showcases", description: "Dynamic product reveals with zoom effects" },
      { title: "Before/After", description: "Transformation content with dramatic motion" },
      { title: "Day in My Life", description: "Photo compilations with cinematic transitions" },
      { title: "Tips & Tricks", description: "Educational content with engaging visuals" },
      { title: "Trend Participation", description: "On-trend content with viral potential" },
      { title: "Behind the Scenes", description: "Authentic glimpses with dynamic movement" }
    ],
    algorithmTips: [
      "Watch time is king — keep viewers watching until the end",
      "Rewatches count double — make loop-worthy content",
      "Comments boost reach more than likes",
      "Shares to DMs signal high-quality content",
      "Post consistently — the algorithm rewards regularity",
      "Engage with comments in the first hour"
    ],
    stats: [
      { value: "1B+", label: "Monthly Active Users" },
      { value: "52", label: "Minutes/Day Average" },
      { value: "9:16", label: "Optimal Ratio" },
      { value: "15-60s", label: "Best Duration" }
    ],
    faqs: [
      {
        question: "Will Hyreel videos perform well on TikTok?",
        answer: "Yes! Hyreel's effects are specifically designed to maximize watch time and engagement — the key signals TikTok uses for FYP placement."
      },
      {
        question: "Can I add trending sounds?",
        answer: "Export your Hyreel video and add trending sounds directly in TikTok before posting. This ensures you're using the latest audio."
      },
      {
        question: "How many TikToks should I post per day?",
        answer: "1-3 TikToks daily is optimal for growth. With Hyreel, you can create a full day's content in under 5 minutes."
      },
      {
        question: "Do these videos work for TikTok Shop?",
        answer: "Absolutely! Product-focused videos are perfect for TikTok Shop listings and shoppable content."
      }
    ],
    relatedTools: ["ai-tiktok-video-generator", "ai-short-video-maker", "image-to-video-ai", "ai-zoom-video-effect"],
    ctaText: "Create TikTok Videos Free"
  },
  {
    slug: "instagram",
    name: "Instagram Reels",
    icon: "📸",
    color: "#E4405F",
    metaTitle: "AI Video Generator for Instagram Reels | Hyreel",
    metaDescription: "Create professional Instagram Reels from photos. AI effects for maximum engagement, saves, and shares. Perfect for brands and creators.",
    heroHeadline: "Create Reels That Get Saved and Shared",
    heroSubheadline: "Professional Instagram Reels with cinematic motion effects. Build your brand, grow your following, drive engagement.",
    description: "Hyreel creates Instagram-optimized Reels designed for maximum saves, shares, and follower growth.",
    specs: { aspectRatio: "9:16", duration: "15-90 sec", resolution: "1080x1920" },
    features: [
      {
        icon: "✨",
        title: "Premium Aesthetic",
        description: "Elevated motion effects that match Instagram's polished, curated expectations."
      },
      {
        icon: "🎨",
        title: "Brand Consistency",
        description: "Maintain your visual identity across all Reels content."
      },
      {
        icon: "💾",
        title: "Save-Worthy Content",
        description: "Effects designed to create content worth saving — Instagram's top engagement signal."
      },
      {
        icon: "🛍️",
        title: "Shopping Ready",
        description: "Perfect for product tags and Instagram Shopping integration."
      }
    ],
    bestPractices: [
      "Post 3-5 Reels per week for optimal reach",
      "Focus on saves and shares over likes",
      "Use cover frames that look good in your grid",
      "Add captions for accessibility",
      "Post between 11am-1pm and 7-9pm",
      "Engage with comments within the first hour"
    ],
    contentTypes: [
      { title: "Product Reveals", description: "Elegant showcases with slow zoom effects" },
      { title: "Behind the Scenes", description: "Authentic brand moments with dynamic motion" },
      { title: "Tutorials", description: "Step-by-step content with clear visuals" },
      { title: "Lifestyle Content", description: "Aspirational imagery with cinematic movement" },
      { title: "User-Generated Style", description: "Authentic-feeling content that resonates" },
      { title: "Seasonal Campaigns", description: "Timely content with professional polish" }
    ],
    algorithmTips: [
      "Saves and shares matter more than likes",
      "Watch time determines reach",
      "Cross-post to Stories for bonus visibility",
      "Consistent posting beats viral attempts",
      "Hashtags still work — use 5-10 relevant ones",
      "Collaborations boost reach significantly"
    ],
    stats: [
      { value: "2B+", label: "Monthly Active Users" },
      { value: "30%", label: "Time on Reels" },
      { value: "9:16", label: "Optimal Ratio" },
      { value: "15-30s", label: "Best Duration" }
    ],
    faqs: [
      {
        question: "How are Instagram Reels different from TikTok?",
        answer: "Instagram audiences expect more polished, curated content. Hyreel's Reels templates focus on premium aesthetics while TikTok templates emphasize trend-readiness."
      },
      {
        question: "Can I use Reels for Instagram Shopping?",
        answer: "Yes! Product-focused videos are perfect for adding product tags. Showcase products beautifully and make them shoppable."
      },
      {
        question: "How often should I post Reels?",
        answer: "3-5 Reels per week is optimal for most accounts. With Hyreel, you can create a full week's content in under 30 minutes."
      },
      {
        question: "Do Reels help grow followers?",
        answer: "Absolutely! Reels reach non-followers through Explore and the Reels tab. They're the fastest organic growth tool on Instagram."
      }
    ],
    relatedTools: ["ai-instagram-reels-maker", "ai-social-media-video-maker", "image-to-video-ai", "ai-product-video-maker"],
    ctaText: "Create Instagram Reels Free"
  },
  {
    slug: "youtube-shorts",
    name: "YouTube Shorts",
    icon: "▶️",
    color: "#FF0000",
    metaTitle: "AI Video Generator for YouTube Shorts | Hyreel",
    metaDescription: "Create YouTube Shorts that grow your channel. AI effects optimized for discovery and subscriber conversion. Professional Shorts in seconds.",
    heroHeadline: "Grow Your YouTube Channel with AI Shorts",
    heroSubheadline: "Reach new audiences, convert viewers to subscribers, and accelerate your channel growth with professional Shorts.",
    description: "Hyreel creates YouTube Shorts optimized for discovery, subscriber conversion, and channel growth.",
    specs: { aspectRatio: "9:16", duration: "15-60 sec", resolution: "1080x1920" },
    features: [
      {
        icon: "📈",
        title: "Discovery Optimized",
        description: "Effects designed around YouTube's Shorts recommendation signals."
      },
      {
        icon: "🔔",
        title: "Subscriber Conversion",
        description: "Strategic pacing that encourages viewers to subscribe."
      },
      {
        icon: "🎬",
        title: "Channel Cohesion",
        description: "Shorts that complement your long-form content style."
      },
      {
        icon: "💰",
        title: "Monetization Ready",
        description: "Professional quality that meets YouTube Partner Program standards."
      }
    ],
    bestPractices: [
      "Post 3-7 Shorts per week for growth",
      "Use Shorts to tease long-form content",
      "Add subscribe CTAs naturally",
      "Maintain between long-form uploads",
      "YouTube Shorts work 24/7 — no specific best time",
      "Link to longer videos in comments"
    ],
    contentTypes: [
      { title: "Channel Teasers", description: "Previews of long-form content" },
      { title: "Quick Tips", description: "Value-packed educational snippets" },
      { title: "Highlights", description: "Best moments from longer videos" },
      { title: "Behind the Scenes", description: "Personal connection content" },
      { title: "Trends", description: "Trending challenges and formats" },
      { title: "Q&A Clips", description: "Answers to common questions" }
    ],
    algorithmTips: [
      "Shorts reach audiences who wouldn't find your long-form",
      "Watch time and completion rate drive recommendations",
      "Shorts viewers often convert to long-form subscribers",
      "Consistency matters more than posting time",
      "Original Shorts often outperform cross-posts",
      "Engaging titles and thumbnails still matter"
    ],
    stats: [
      { value: "2B+", label: "Monthly Logged-in Users" },
      { value: "50B+", label: "Daily Shorts Views" },
      { value: "9:16", label: "Optimal Ratio" },
      { value: "< 60s", label: "Maximum Duration" }
    ],
    faqs: [
      {
        question: "How do Shorts help channel growth?",
        answer: "Shorts reach viewers who wouldn't find your long-form content. YouTube's Shorts algorithm recommends to new audiences, making it the fastest growth tool in 2024."
      },
      {
        question: "Can I monetize Shorts made with Hyreel?",
        answer: "Yes! Creator and Business plan videos are fully monetizable through YouTube's Shorts Fund and Partner Program."
      },
      {
        question: "Should I repurpose TikToks as Shorts?",
        answer: "You can, but original Shorts often perform better. Hyreel lets you create platform-specific versions for best results."
      },
      {
        question: "How many Shorts should I post?",
        answer: "3-7 Shorts per week is ideal. With Hyreel, creating a week's worth takes under 30 minutes."
      }
    ],
    relatedTools: ["ai-youtube-shorts-generator", "ai-short-video-maker", "image-to-video-ai", "ai-zoom-video-effect"],
    ctaText: "Create YouTube Shorts Free"
  },
  {
    slug: "pinterest",
    name: "Pinterest",
    icon: "📌",
    color: "#E60023",
    metaTitle: "AI Video Generator for Pinterest | Hyreel - Video Pins That Convert",
    metaDescription: "Create Pinterest video pins that drive traffic and sales. AI video effects optimized for Pinterest's discovery-focused audience.",
    heroHeadline: "Create Video Pins That Drive Traffic and Sales",
    heroSubheadline: "Pinterest users are ready to buy. Reach them with professional video pins that inspire action and drive conversions.",
    description: "Hyreel creates Pinterest-optimized video pins designed for discovery and conversion.",
    specs: { aspectRatio: "2:3 or 9:16", duration: "15-60 sec", resolution: "1000x1500" },
    features: [
      {
        icon: "🔍",
        title: "Discovery Optimized",
        description: "Video pins surface in search and recommendations for months."
      },
      {
        icon: "🛒",
        title: "Shopping Intent",
        description: "Pinterest users are 3x more likely to purchase. Reach them with video."
      },
      {
        icon: "⏰",
        title: "Evergreen Content",
        description: "Pinterest videos drive traffic for months, not hours like other platforms."
      },
      {
        icon: "📈",
        title: "High Engagement",
        description: "Video pins get 3x more engagement than static pins."
      }
    ],
    bestPractices: [
      "Use 2:3 aspect ratio for optimal feed display",
      "Add text overlay — many watch without sound",
      "Include your URL in the pin description",
      "Pin consistently — 5-10 pins per day",
      "Use keyword-rich descriptions for search",
      "Create multiple pins per piece of content"
    ],
    contentTypes: [
      { title: "Product Showcases", description: "Shoppable product videos with detail views" },
      { title: "Tutorials", description: "How-to content with step-by-step visuals" },
      { title: "Inspiration", description: "Aspirational lifestyle content" },
      { title: "DIY Projects", description: "Creative process videos" },
      { title: "Recipes", description: "Food content with appetizing motion" },
      { title: "Style Guides", description: "Fashion and decor inspiration" }
    ],
    algorithmTips: [
      "Pinterest is a search engine — use keywords",
      "Fresh pins are prioritized over repins",
      "Vertical content performs best",
      "Consistency beats viral attempts",
      "Rich pins provide more context",
      "Save to relevant boards for better distribution"
    ],
    stats: [
      { value: "450M+", label: "Monthly Active Users" },
      { value: "3x", label: "Higher Purchase Intent" },
      { value: "2:3", label: "Optimal Ratio" },
      { value: "Months", label: "Content Lifespan" }
    ],
    faqs: [
      {
        question: "Do video pins perform better than images?",
        answer: "Yes! Video pins get 3x more engagement than static pins and stand out in the feed. Pinterest is prioritizing video content."
      },
      {
        question: "What aspect ratio works best?",
        answer: "2:3 (1000x1500) is optimal for the Pinterest feed. 9:16 also works well for Idea Pins."
      },
      {
        question: "How long do Pinterest videos drive traffic?",
        answer: "Unlike other platforms, Pinterest content has a long lifespan. A video pin can drive traffic for months or even years."
      },
      {
        question: "Should I add text to Pinterest videos?",
        answer: "Yes! Many Pinterest users browse without sound. Text overlays ensure your message gets across."
      }
    ],
    relatedTools: ["ai-product-video-maker", "ai-social-media-video-maker", "image-to-video-ai", "ai-zoom-video-effect"],
    ctaText: "Create Pinterest Videos Free"
  },
  {
    slug: "linkedin",
    name: "LinkedIn",
    icon: "💼",
    color: "#0A66C2",
    metaTitle: "AI Video Generator for LinkedIn | Hyreel - Professional Video Content",
    metaDescription: "Create professional LinkedIn video content. AI video effects for B2B marketing, thought leadership, and professional branding.",
    heroHeadline: "Stand Out in the LinkedIn Feed with Video",
    heroSubheadline: "Professional video content that builds your personal brand and drives B2B engagement. Stand out in a sea of text posts.",
    description: "Hyreel creates LinkedIn-optimized videos for professional branding and B2B marketing.",
    specs: { aspectRatio: "1:1 or 16:9", duration: "30-90 sec", resolution: "1080x1080" },
    features: [
      {
        icon: "👔",
        title: "Professional Aesthetic",
        description: "Polished, business-appropriate motion effects."
      },
      {
        icon: "🎯",
        title: "B2B Focused",
        description: "Content styles that resonate with professional audiences."
      },
      {
        icon: "📊",
        title: "Thought Leadership",
        description: "Build authority with professional video content."
      },
      {
        icon: "🤝",
        title: "Engagement Driver",
        description: "Video posts get 5x more engagement on LinkedIn."
      }
    ],
    bestPractices: [
      "Square (1:1) format works best in feed",
      "Add captions — 80% watch without sound",
      "Keep it professional but human",
      "Post 2-3 videos per week",
      "Best times: Tuesday-Thursday, 8-10am",
      "Include a clear call-to-action"
    ],
    contentTypes: [
      { title: "Product Demos", description: "B2B product showcases" },
      { title: "Company Updates", description: "News and announcements" },
      { title: "Thought Leadership", description: "Industry insights and expertise" },
      { title: "Team Spotlights", description: "Humanize your brand" },
      { title: "Case Studies", description: "Customer success stories" },
      { title: "Event Highlights", description: "Conference and event content" }
    ],
    algorithmTips: [
      "Native video outperforms YouTube links",
      "First-hour engagement is critical",
      "Dwell time (time spent viewing) matters",
      "Comments drive reach more than likes",
      "Tag relevant people and companies",
      "Video posts get 5x more engagement"
    ],
    stats: [
      { value: "900M+", label: "Members" },
      { value: "5x", label: "More Engagement" },
      { value: "1:1", label: "Optimal Ratio" },
      { value: "30-90s", label: "Best Duration" }
    ],
    faqs: [
      {
        question: "Does video work for B2B on LinkedIn?",
        answer: "Absolutely! LinkedIn video gets 5x more engagement than other post types. It's essential for B2B marketing and personal branding."
      },
      {
        question: "What aspect ratio works best?",
        answer: "Square (1:1) performs best in the feed. Landscape (16:9) works for more cinematic content."
      },
      {
        question: "Should I add captions?",
        answer: "Yes! 80% of LinkedIn users watch video without sound. Captions are essential for getting your message across."
      },
      {
        question: "How professional should LinkedIn videos be?",
        answer: "Professional but authentic. Overly polished corporate videos often underperform compared to genuine, human content."
      }
    ],
    relatedTools: ["ai-product-video-maker", "ai-social-media-video-maker", "image-to-video-ai", "ai-zoom-video-effect"],
    ctaText: "Create LinkedIn Videos Free"
  },
  {
    slug: "facebook-reels",
    name: "Facebook Reels",
    icon: "📘",
    color: "#1877F2",
    metaTitle: "AI Video Generator for Facebook Reels | Hyreel",
    metaDescription: "Create Facebook Reels that reach billions. AI video effects optimized for Facebook's massive audience. Cross-post from Instagram or create native.",
    heroHeadline: "Reach Billions with Facebook Reels",
    heroSubheadline: "Tap into Facebook's massive audience with professional Reels. More reach than organic posts, bonus revenue potential.",
    description: "Hyreel creates Facebook Reels optimized for the platform's massive reach and engagement.",
    specs: { aspectRatio: "9:16", duration: "15-90 sec", resolution: "1080x1920" },
    features: [
      {
        icon: "🌍",
        title: "Massive Reach",
        description: "Access Facebook's 3B+ users through Reels distribution."
      },
      {
        icon: "💰",
        title: "Bonus Eligible",
        description: "Facebook Reels bonus program pays for views."
      },
      {
        icon: "🔄",
        title: "Cross-Post Ready",
        description: "Same content works on Instagram Reels."
      },
      {
        icon: "👥",
        title: "Older Demographics",
        description: "Reach audiences 35+ who aren't on TikTok."
      }
    ],
    bestPractices: [
      "Native Reels often outperform cross-posts",
      "Facebook audience skews older than TikTok",
      "Add captions for sound-off viewing",
      "Post consistently for algorithm favor",
      "Engage with comments quickly",
      "Use trending audio when relevant"
    ],
    contentTypes: [
      { title: "Entertaining Content", description: "Fun, shareable videos" },
      { title: "Product Showcases", description: "E-commerce and retail content" },
      { title: "How-To Videos", description: "Educational and helpful content" },
      { title: "Behind the Scenes", description: "Authentic brand moments" },
      { title: "Trending Formats", description: "Popular formats adapted for Facebook" },
      { title: "Local Business", description: "Community-focused content" }
    ],
    algorithmTips: [
      "Original content is prioritized over reposts",
      "Watch time drives recommendations",
      "Shares indicate high-quality content",
      "Consistent posting builds momentum",
      "Engaging first few seconds matter",
      "Cross-posting from IG works but native is better"
    ],
    stats: [
      { value: "3B+", label: "Monthly Active Users" },
      { value: "35+", label: "Core Demographics" },
      { value: "9:16", label: "Optimal Ratio" },
      { value: "Bonus", label: "Revenue Potential" }
    ],
    faqs: [
      {
        question: "Should I cross-post Instagram Reels to Facebook?",
        answer: "You can, but native Facebook Reels often perform better. Hyreel makes it easy to create content for both platforms."
      },
      {
        question: "How is Facebook Reels different from TikTok?",
        answer: "Facebook's audience is older (35+) and often prefers different content styles. Less trend-focused, more evergreen and informative."
      },
      {
        question: "Can I earn money from Facebook Reels?",
        answer: "Yes! Facebook's Reels bonus program pays creators for views. Quality, engaging Reels can generate meaningful revenue."
      },
      {
        question: "What content works best?",
        answer: "Entertaining, informative, and shareable content. Think less viral trends, more evergreen value."
      }
    ],
    relatedTools: ["ai-social-media-video-maker", "ai-short-video-maker", "image-to-video-ai", "ai-instagram-reels-maker"],
    ctaText: "Create Facebook Reels Free"
  }
];

export function getPlatformBySlug(slug: string): Platform | undefined {
  return platforms.find((platform) => platform.slug === slug);
}

export function getAllPlatformSlugs(): string[] {
  return platforms.map((platform) => platform.slug);
}
