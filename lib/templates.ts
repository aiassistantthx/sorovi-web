export interface VideoTemplate {
  slug: string;
  name: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  category: string;
  platforms: string[];
  aspectRatio: string;
  duration: string;
  bestFor: string[];
  features: Array<{ icon: string; title: string; description: string }>;
  examples: Array<{ title: string; description: string; effect: string }>;
  useCases: string[];
  tips: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedTemplates: string[];
  ctaText: string;
}

export const templates: VideoTemplate[] = [
  {
    slug: "tiktok-video-templates",
    name: "TikTok Video Templates",
    icon: "🎵",
    metaTitle: "TikTok Video Templates | Sorovi - Viral TikTok Content",
    metaDescription: "Create viral TikTok videos with AI templates. Photo-to-video effects optimized for the For You Page. Trending formats, perfect 9:16 ratio, instant creation.",
    heroHeadline: "TikTok Templates That Go Viral",
    heroSubheadline: "AI-powered video templates designed for TikTok's algorithm. Create scroll-stopping content optimized for the For You Page in seconds.",
    description: "Professional TikTok video templates with AI motion effects optimized for maximum engagement and FYP placement.",
    category: "Social Media",
    platforms: ["TikTok"],
    aspectRatio: "9:16",
    duration: "15-60 sec",
    bestFor: ["Creators", "Brands", "Small Businesses", "Influencers"],
    features: [
      {
        icon: "📱",
        title: "Perfect 9:16 Format",
        description: "Every template is optimized for TikTok's vertical format with safe zones for text and UI elements."
      },
      {
        icon: "⚡",
        title: "Hook-First Design",
        description: "Templates designed with strong visual hooks in the first 0.5 seconds to stop the scroll."
      },
      {
        icon: "🔄",
        title: "Loop-Friendly",
        description: "Smooth endings that encourage rewatches, boosting your watch time and algorithm performance."
      },
      {
        icon: "🎯",
        title: "Trend-Ready Effects",
        description: "Motion effects that match current TikTok trends without requiring complex editing skills."
      }
    ],
    examples: [
      {
        title: "Product Reveal",
        description: "Dramatic zoom-in effect perfect for product launches and new arrivals",
        effect: "Zoom"
      },
      {
        title: "360 Showcase",
        description: "Orbit effect that shows products or outfits from every angle",
        effect: "Orbit"
      },
      {
        title: "Cinematic Pan",
        description: "Smooth horizontal movement for storytelling and travel content",
        effect: "Pan"
      },
      {
        title: "Depth Pop",
        description: "3D parallax effect that makes flat images feel alive and dynamic",
        effect: "Parallax"
      }
    ],
    useCases: [
      "Product launches and reveals",
      "Fashion and outfit showcases",
      "Food and recipe teasers",
      "Travel and destination content",
      "Before/after transformations",
      "Daily vlogs from photos"
    ],
    tips: [
      "Use the first 0.5 seconds for your hook — motion grabs attention instantly",
      "Add trending sounds directly in TikTok after exporting from Sorovi",
      "Create 3-5 variations of the same content to test what performs best",
      "Post during peak hours: 7-9am, 12-3pm, 7-11pm in your target timezone"
    ],
    faqs: [
      {
        question: "What makes TikTok templates different from other formats?",
        answer: "TikTok templates are optimized for vertical 9:16 format with fast hooks, loop-friendly endings, and motion patterns the algorithm rewards. The effects maximize watch time and completion rate — key metrics for FYP placement."
      },
      {
        question: "Can I add TikTok sounds to Sorovi videos?",
        answer: "Export your Sorovi video and add trending sounds directly in TikTok before posting. This ensures you're using the latest trending audio for maximum reach."
      },
      {
        question: "How many TikTok videos should I post per day?",
        answer: "1-3 TikToks per day is ideal for growth. With Sorovi templates, you can create a full day's content in under 5 minutes."
      },
      {
        question: "Do these templates work for TikTok Shop?",
        answer: "Yes! Product-focused templates are perfect for TikTok Shop listings and shoppable content. Add product links after posting."
      }
    ],
    relatedTemplates: ["instagram-reels-templates", "youtube-shorts-templates", "product-video-templates"],
    ctaText: "Create TikTok Videos Free"
  },
  {
    slug: "instagram-reels-templates",
    name: "Instagram Reels Templates",
    icon: "📸",
    metaTitle: "Instagram Reels Templates | Sorovi - Professional Reels in Seconds",
    metaDescription: "Create professional Instagram Reels with AI templates. Cinematic effects, perfect aspect ratios, and brand-ready designs for maximum engagement.",
    heroHeadline: "Instagram Reels That Get Saved & Shared",
    heroSubheadline: "Professional Reels templates with cinematic motion effects. Create content that drives saves, shares, and follows — optimized for Instagram's algorithm.",
    description: "Polished Instagram Reels templates designed for brand consistency, high engagement, and professional aesthetic.",
    category: "Social Media",
    platforms: ["Instagram"],
    aspectRatio: "9:16",
    duration: "15-90 sec",
    bestFor: ["Brands", "Businesses", "Creators", "Photographers"],
    features: [
      {
        icon: "✨",
        title: "Premium Aesthetic",
        description: "Elevated motion effects that maintain the polished, curated look Instagram audiences expect."
      },
      {
        icon: "🎨",
        title: "Brand Consistency",
        description: "Templates that complement your feed aesthetic and maintain visual cohesion across your grid."
      },
      {
        icon: "📊",
        title: "Engagement Optimized",
        description: "Effects designed to increase saves and shares — the key metrics Instagram's algorithm prioritizes."
      },
      {
        icon: "🔗",
        title: "Shopping Ready",
        description: "Templates perfect for product tags and Instagram Shopping integration."
      }
    ],
    examples: [
      {
        title: "Luxury Zoom",
        description: "Slow, elegant zoom effect perfect for premium brands and products",
        effect: "Slow Zoom"
      },
      {
        title: "Editorial Pan",
        description: "Magazine-style movement for fashion and lifestyle content",
        effect: "Pan"
      },
      {
        title: "Product Spotlight",
        description: "Focus-pull effect that draws attention to product details",
        effect: "Focus"
      },
      {
        title: "Carousel Motion",
        description: "Smooth transitions perfect for multi-image storytelling",
        effect: "Slide"
      }
    ],
    useCases: [
      "Product showcases and launches",
      "Brand storytelling",
      "Behind-the-scenes content",
      "Portfolio and portfolio reveals",
      "Seasonal campaigns",
      "User-generated content enhancement"
    ],
    tips: [
      "Instagram rewards saves and shares — create content worth saving",
      "Use cover frames that look good in your grid preview",
      "Add captions for accessibility and silent viewing",
      "Post Reels between 11am-1pm and 7-9pm for best reach"
    ],
    faqs: [
      {
        question: "How are Instagram Reels templates different from TikTok?",
        answer: "Instagram Reels templates focus on polished, brand-consistent aesthetics. While TikTok rewards raw and trendy, Instagram audiences expect more curated, premium-looking content."
      },
      {
        question: "Can I use Reels templates for Instagram Stories?",
        answer: "Yes! The 9:16 aspect ratio works perfectly for Stories. Reels templates add cinematic quality to Story content."
      },
      {
        question: "Do Reels templates work with Instagram Shopping?",
        answer: "Absolutely. Product-focused templates are designed for easy product tagging. Showcase products beautifully and make them shoppable."
      },
      {
        question: "How do I maintain brand consistency with templates?",
        answer: "Use the same motion styles and effects across all your Reels. Sorovi lets you save preferences so every video matches your brand aesthetic."
      }
    ],
    relatedTemplates: ["tiktok-video-templates", "product-video-templates", "fashion-video-templates"],
    ctaText: "Create Instagram Reels Free"
  },
  {
    slug: "youtube-shorts-templates",
    name: "YouTube Shorts Templates",
    icon: "▶️",
    metaTitle: "YouTube Shorts Templates | Sorovi - Grow Your Channel Faster",
    metaDescription: "Create YouTube Shorts that grow your channel with AI templates. Optimized for discovery, subscriber conversion, and watch time. Professional Shorts in seconds.",
    heroHeadline: "YouTube Shorts That Grow Your Channel",
    heroSubheadline: "Templates designed for YouTube's Shorts algorithm. Maximize discovery, drive subscribers, and complement your long-form content strategy.",
    description: "YouTube Shorts templates optimized for channel growth, subscriber conversion, and algorithmic discovery.",
    category: "Social Media",
    platforms: ["YouTube"],
    aspectRatio: "9:16",
    duration: "15-60 sec",
    bestFor: ["YouTubers", "Creators", "Educators", "Brands"],
    features: [
      {
        icon: "📈",
        title: "Discovery Optimized",
        description: "Templates designed around YouTube Shorts' recommendation signals — watch time and engagement."
      },
      {
        icon: "🔔",
        title: "Subscriber Conversion",
        description: "Strategic pacing that encourages viewers to subscribe and watch your long-form content."
      },
      {
        icon: "🎬",
        title: "Channel Cohesion",
        description: "Shorts that complement your existing YouTube content style and branding."
      },
      {
        icon: "💰",
        title: "Monetization Ready",
        description: "Professional quality that meets YouTube Partner Program standards for Shorts monetization."
      }
    ],
    examples: [
      {
        title: "Tutorial Teaser",
        description: "Quick tip format perfect for educational channels",
        effect: "Zoom + Text"
      },
      {
        title: "Highlight Clip",
        description: "Dramatic motion for showcasing key moments",
        effect: "Dynamic Zoom"
      },
      {
        title: "Behind The Scenes",
        description: "Casual feel for connecting with your audience",
        effect: "Parallax"
      },
      {
        title: "Product Review Flash",
        description: "Quick showcase format for review channels",
        effect: "Orbit"
      }
    ],
    useCases: [
      "Channel growth and subscriber acquisition",
      "Long-form video teasers and previews",
      "Quick tips and educational snippets",
      "Behind-the-scenes content",
      "Highlight reels from longer videos",
      "Trend participation and challenges"
    ],
    tips: [
      "Use Shorts to reach new audiences, then convert them to long-form viewers",
      "Add subscribe CTAs naturally within your Shorts",
      "Create Shorts between long-form uploads to maintain algorithm momentum",
      "YouTube Shorts perform well 24/7 — no specific posting time needed"
    ],
    faqs: [
      {
        question: "How do YouTube Shorts help channel growth?",
        answer: "Shorts reach viewers who wouldn't find your long-form content through search. YouTube's Shorts algorithm recommends content to new audiences, making it the fastest way to grow subscribers in 2024."
      },
      {
        question: "Can I monetize YouTube Shorts made with Sorovi?",
        answer: "Yes! Sorovi Creator and Business plan videos are fully monetizable through YouTube's Shorts Fund and Partner Program. You own all content and revenue rights."
      },
      {
        question: "Should I repurpose TikToks as YouTube Shorts?",
        answer: "You can, but original Shorts often perform better. Sorovi lets you create platform-specific versions from the same source image for best results on each platform."
      },
      {
        question: "How often should I post YouTube Shorts?",
        answer: "3-7 Shorts per week is ideal for growth. With Sorovi, creating a week's worth of Shorts takes under 30 minutes."
      }
    ],
    relatedTemplates: ["tiktok-video-templates", "instagram-reels-templates", "tutorial-video-templates"],
    ctaText: "Create YouTube Shorts Free"
  },
  {
    slug: "product-video-templates",
    name: "Product Video Templates",
    icon: "🛒",
    metaTitle: "Product Video Templates | Sorovi - E-commerce Videos That Convert",
    metaDescription: "Create product videos that boost sales with AI templates. Professional showcase videos for Amazon, Shopify, Etsy, and social commerce. Photo-to-video in seconds.",
    heroHeadline: "Product Videos That Boost Conversions",
    heroSubheadline: "Transform product photos into professional showcase videos. Templates designed to increase sales on Amazon, Shopify, Etsy, and social commerce platforms.",
    description: "E-commerce product video templates optimized for conversion across marketplaces and social shopping platforms.",
    category: "E-commerce",
    platforms: ["Amazon", "Shopify", "Etsy", "Social Commerce"],
    aspectRatio: "1:1, 4:5, 9:16",
    duration: "15-30 sec",
    bestFor: ["E-commerce Sellers", "DTC Brands", "Dropshippers", "Handmade Sellers"],
    features: [
      {
        icon: "💰",
        title: "Conversion Focused",
        description: "Motion patterns proven to increase product listing conversion rates by 20-30%."
      },
      {
        icon: "🔍",
        title: "Detail Showcase",
        description: "Zoom and orbit effects that highlight product features, textures, and craftsmanship."
      },
      {
        icon: "📦",
        title: "Multi-Platform Export",
        description: "Export in formats optimized for Amazon, Shopify, Etsy, eBay, and social platforms."
      },
      {
        icon: "⚡",
        title: "Batch Processing",
        description: "Create videos for your entire catalog quickly with consistent professional quality."
      }
    ],
    examples: [
      {
        title: "Hero Product Shot",
        description: "Dramatic zoom that makes products look premium and desirable",
        effect: "Zoom"
      },
      {
        title: "360 Product View",
        description: "Simulated rotation showing products from every angle",
        effect: "Orbit"
      },
      {
        title: "Detail Focus",
        description: "Close-up movement highlighting textures and quality",
        effect: "Macro Zoom"
      },
      {
        title: "Lifestyle Context",
        description: "Subtle motion for product-in-use imagery",
        effect: "Parallax"
      }
    ],
    useCases: [
      "Amazon product listings",
      "Shopify product pages",
      "Etsy listing videos",
      "Instagram Shopping posts",
      "TikTok Shop content",
      "Facebook Marketplace listings"
    ],
    tips: [
      "Use clean, white-background photos for the most professional results",
      "Create both square (1:1) for feeds and vertical (9:16) for Stories/Reels",
      "Focus on your product's key differentiator with zoom effects",
      "Add lifestyle shots to help customers visualize ownership"
    ],
    faqs: [
      {
        question: "Do product videos really increase sales?",
        answer: "Yes! Product listings with video see 20-30% higher conversion rates across all major marketplaces. Video helps customers understand products better, reducing hesitation and returns."
      },
      {
        question: "What product photo quality do I need?",
        answer: "Clear, well-lit product photos work best. Standard e-commerce photography on white backgrounds produces excellent results. Even good smartphone photos can create professional videos."
      },
      {
        question: "Can I create videos for my entire catalog?",
        answer: "Yes! Sorovi supports batch processing so you can create videos for hundreds of SKUs efficiently. Business plan users get priority batch processing."
      },
      {
        question: "What platforms accept product videos?",
        answer: "Amazon, Shopify, Etsy, eBay, Walmart, WooCommerce, and all major marketplaces accept video. Social platforms like TikTok Shop and Instagram Shopping also support product videos."
      }
    ],
    relatedTemplates: ["instagram-reels-templates", "tiktok-video-templates", "fashion-video-templates"],
    ctaText: "Create Product Videos Free"
  },
  {
    slug: "real-estate-video-templates",
    name: "Real Estate Video Templates",
    icon: "🏠",
    metaTitle: "Real Estate Video Templates | Sorovi - Property Videos from Photos",
    metaDescription: "Create stunning real estate videos from listing photos. Virtual tours, property showcases, and social media content for agents. Professional videos in seconds.",
    heroHeadline: "Property Videos That Sell Homes Faster",
    heroSubheadline: "Transform listing photos into cinematic property videos. Create virtual tours, social content, and video listings without expensive videography.",
    description: "Real estate video templates for property showcases, virtual tours, and social media marketing from MLS listing photos.",
    category: "Real Estate",
    platforms: ["MLS", "Zillow", "Social Media", "YouTube"],
    aspectRatio: "16:9, 9:16, 1:1",
    duration: "30-90 sec",
    bestFor: ["Real Estate Agents", "Brokerages", "Property Managers", "Developers"],
    features: [
      {
        icon: "🏡",
        title: "Virtual Tour Style",
        description: "Smooth zoom and pan effects that simulate walking through the property."
      },
      {
        icon: "📸",
        title: "MLS Photo Ready",
        description: "Works perfectly with standard MLS listing photos — no special photography needed."
      },
      {
        icon: "📱",
        title: "Social Media Optimized",
        description: "Export formats for Instagram, TikTok, YouTube, and Facebook property marketing."
      },
      {
        icon: "🏷️",
        title: "Branding Options",
        description: "Add your logo, contact info, and property details as text overlays."
      }
    ],
    examples: [
      {
        title: "Room Walkthrough",
        description: "Smooth pan across interior spaces showing flow and layout",
        effect: "Pan"
      },
      {
        title: "Exterior Reveal",
        description: "Dramatic zoom out revealing the full property and landscaping",
        effect: "Zoom Out"
      },
      {
        title: "Feature Highlight",
        description: "Focus on selling points like kitchens, views, and finishes",
        effect: "Zoom"
      },
      {
        title: "Aerial Feel",
        description: "Subtle drift effect simulating drone-style footage",
        effect: "Parallax"
      }
    ],
    useCases: [
      "Property listing videos",
      "Social media property promotion",
      "Open house announcements",
      "New listing notifications",
      "Virtual tour supplements",
      "Agent personal branding"
    ],
    tips: [
      "Use wide-angle interior shots for the best room walkthrough effect",
      "Create both landscape (16:9) for MLS and vertical (9:16) for social media",
      "Add property details as text overlays for auto-playing videos",
      "Post property videos to Instagram Reels for massive local reach"
    ],
    faqs: [
      {
        question: "Can Sorovi replace professional real estate videography?",
        answer: "Sorovi is perfect for creating professional-quality videos from listing photos when traditional videography isn't practical. Many agents use Sorovi for every listing and reserve professional video for luxury properties."
      },
      {
        question: "What listing photo quality works best?",
        answer: "Standard MLS-quality photos work perfectly. Wide-angle shots, good lighting, and clean compositions produce the best results. Higher resolution photos create higher quality videos."
      },
      {
        question: "Can I add my branding and contact info?",
        answer: "Yes! Add your logo, brokerage info, contact details, and property specifics as text overlays. Create branded videos that drive inquiries directly to you."
      },
      {
        question: "How do top agents use real estate video templates?",
        answer: "Top agents create video for every listing, post property Reels daily, use video in email campaigns, and maintain a consistent social media presence with property content."
      }
    ],
    relatedTemplates: ["instagram-reels-templates", "youtube-shorts-templates", "tiktok-video-templates"],
    ctaText: "Create Property Videos Free"
  },
  {
    slug: "fashion-video-templates",
    name: "Fashion Video Templates",
    icon: "👗",
    metaTitle: "Fashion Video Templates | Sorovi - Lookbook & Collection Videos",
    metaDescription: "Create stunning fashion videos from lookbook photos. Collection showcases, product reveals, and runway-style content for fashion brands. AI-powered video creation.",
    heroHeadline: "Fashion Videos That Stop the Scroll",
    heroSubheadline: "Transform lookbook photos and product shots into runway-worthy fashion videos. Create collection showcases, product reveals, and editorial content instantly.",
    description: "Fashion video templates for lookbooks, collections, product showcases, and editorial content from existing photography.",
    category: "Fashion",
    platforms: ["Instagram", "TikTok", "Pinterest", "E-commerce"],
    aspectRatio: "9:16, 4:5, 1:1",
    duration: "15-60 sec",
    bestFor: ["Fashion Brands", "Designers", "Boutiques", "Fashion Influencers"],
    features: [
      {
        icon: "✨",
        title: "Editorial Motion",
        description: "Elegant camera movements that match the premium aesthetic of fashion content."
      },
      {
        icon: "🌀",
        title: "Garment Showcase",
        description: "Orbit and zoom effects that highlight fabric, silhouettes, and design details."
      },
      {
        icon: "🎨",
        title: "Brand Aesthetic",
        description: "Consistent motion styles that maintain your brand's visual identity across all content."
      },
      {
        icon: "📱",
        title: "Multi-Format Export",
        description: "Create content for Instagram, TikTok, Pinterest, and your e-commerce site from one photo."
      }
    ],
    examples: [
      {
        title: "Collection Reveal",
        description: "Dramatic zoom perfect for new drop announcements",
        effect: "Zoom"
      },
      {
        title: "Lookbook Motion",
        description: "Editorial-style movement for campaign imagery",
        effect: "Pan"
      },
      {
        title: "Detail Focus",
        description: "Close-up movement showcasing fabric and craftsmanship",
        effect: "Macro Zoom"
      },
      {
        title: "Lifestyle Depth",
        description: "Subtle parallax for on-model photography",
        effect: "Parallax"
      }
    ],
    useCases: [
      "Collection launches and drops",
      "Lookbook content",
      "Product detail showcases",
      "Behind-the-scenes content",
      "Seasonal campaigns",
      "Fashion week content"
    ],
    tips: [
      "Use consistent motion styles across your collection for cohesive branding",
      "Zoom effects work beautifully for fabric texture and detail shots",
      "Create both feed posts (4:5) and Reels (9:16) from the same lookbook shot",
      "Pinterest video performs exceptionally well for fashion — don't skip it"
    ],
    faqs: [
      {
        question: "What types of fashion photos work best?",
        answer: "Lookbook shots, flat lays, on-model photography, and product details all work beautifully. High-resolution images with clean backgrounds produce the most polished fashion videos."
      },
      {
        question: "Is Sorovi suitable for luxury fashion brands?",
        answer: "Absolutely. Sorovi's cinematic motion effects create elevated, polished content that meets luxury brand standards. Many fashion brands use Sorovi to maintain their premium visual identity at scale."
      },
      {
        question: "Can I showcase fabric texture and details?",
        answer: "Yes! Sorovi's zoom effects are perfect for highlighting fabric texture, stitching details, and design elements. The AI creates smooth close-up movements that draw attention to craftsmanship."
      },
      {
        question: "How can fashion brands use these templates?",
        answer: "Create content for every new drop, generate lookbook videos from existing photography, maintain consistent social media presence, and showcase product details that photos alone can't capture."
      }
    ],
    relatedTemplates: ["instagram-reels-templates", "product-video-templates", "tiktok-video-templates"],
    ctaText: "Create Fashion Videos Free"
  },
  {
    slug: "food-video-templates",
    name: "Food Video Templates",
    icon: "🍽️",
    metaTitle: "Food Video Templates | Sorovi - Mouthwatering Food Content",
    metaDescription: "Create drool-worthy food videos from photos. Restaurant marketing, recipe content, and food delivery listings. AI-powered food video creation in seconds.",
    heroHeadline: "Food Videos That Make Mouths Water",
    heroSubheadline: "Transform food photography into appetite-inducing videos. Create content for restaurants, food brands, and delivery apps that drives orders and reservations.",
    description: "Food video templates for restaurants, food brands, recipe content, and delivery app listings.",
    category: "Food & Beverage",
    platforms: ["Instagram", "TikTok", "Google Business", "Delivery Apps"],
    aspectRatio: "9:16, 1:1, 4:5",
    duration: "15-30 sec",
    bestFor: ["Restaurants", "Food Brands", "Food Bloggers", "Recipe Creators"],
    features: [
      {
        icon: "🍕",
        title: "Appetite Appeal",
        description: "Motion effects designed to make food look irresistible and crave-worthy."
      },
      {
        icon: "🔍",
        title: "Texture Showcase",
        description: "Zoom effects that highlight the textures, toppings, and details that make dishes special."
      },
      {
        icon: "📲",
        title: "Delivery App Ready",
        description: "Export formats optimized for DoorDash, Uber Eats, and other delivery platforms."
      },
      {
        icon: "⚡",
        title: "Daily Special Ready",
        description: "Create videos for menu changes and specials instantly — snap a photo, get a video."
      }
    ],
    examples: [
      {
        title: "Hero Dish",
        description: "Dramatic zoom that makes the dish the star",
        effect: "Zoom"
      },
      {
        title: "Table Scene",
        description: "Slow pan across multiple dishes for table spreads",
        effect: "Pan"
      },
      {
        title: "Topping Detail",
        description: "Close-up movement highlighting garnishes and textures",
        effect: "Macro Zoom"
      },
      {
        title: "Ambiance",
        description: "Subtle parallax for restaurant atmosphere shots",
        effect: "Parallax"
      }
    ],
    useCases: [
      "Daily specials promotion",
      "Menu item showcases",
      "Delivery app listings",
      "Social media marketing",
      "Google Business Profile content",
      "Recipe content creation"
    ],
    tips: [
      "Well-lit photos with good plating produce the best videos",
      "Zoom effects are perfect for showcasing toppings and textures",
      "Create videos for your top sellers and feature them in delivery app listings",
      "Post food videos during meal times for maximum engagement and orders"
    ],
    faqs: [
      {
        question: "What kind of food photos work best?",
        answer: "Well-lit food photos with good plating produce the best videos. Natural light or soft artificial lighting, clean backgrounds, and appetizing presentation all help. Even smartphone food photos can create great videos."
      },
      {
        question: "Can I create videos for delivery app listings?",
        answer: "Yes! Sorovi videos work perfectly on DoorDash, Uber Eats, Grubhub, and other delivery platforms. Video listings receive significantly more orders than photo-only listings."
      },
      {
        question: "How can restaurants use food video templates?",
        answer: "Post daily specials as Reels, create TikTok content around signature dishes, update Google Business Profile with video, and showcase seasonal menu items."
      },
      {
        question: "Can I add menu prices and info to videos?",
        answer: "Yes! Add text overlays with dish names, prices, ingredients, and your restaurant's contact information. Create branded content that drives viewers to order."
      }
    ],
    relatedTemplates: ["instagram-reels-templates", "tiktok-video-templates", "product-video-templates"],
    ctaText: "Create Food Videos Free"
  },
  {
    slug: "travel-video-templates",
    name: "Travel Video Templates",
    icon: "✈️",
    metaTitle: "Travel Video Templates | Sorovi - Stunning Destination Content",
    metaDescription: "Create cinematic travel videos from photos. Destination showcases, travel vlogs, and tourism marketing. Transform travel photography into scroll-stopping content.",
    heroHeadline: "Travel Videos That Inspire Wanderlust",
    heroSubheadline: "Transform your travel photography into cinematic destination videos. Create content that inspires followers and showcases the beauty of every location.",
    description: "Travel video templates for destination content, travel vlogs, tourism marketing, and wanderlust-inspiring social media.",
    category: "Travel",
    platforms: ["Instagram", "TikTok", "YouTube", "Pinterest"],
    aspectRatio: "9:16, 16:9, 1:1",
    duration: "15-60 sec",
    bestFor: ["Travel Creators", "Tourism Boards", "Hotels", "Travel Agencies"],
    features: [
      {
        icon: "🌍",
        title: "Cinematic Feel",
        description: "Epic motion effects that capture the grandeur and beauty of destinations."
      },
      {
        icon: "📸",
        title: "Photo-to-Vlog",
        description: "Transform static travel photos into dynamic video content for travel vlogs."
      },
      {
        icon: "🗺️",
        title: "Destination Showcase",
        description: "Effects optimized for landscapes, architecture, and scenic views."
      },
      {
        icon: "✨",
        title: "Dreamy Aesthetic",
        description: "Motion styles that evoke the wanderlust feeling travel content needs."
      }
    ],
    examples: [
      {
        title: "Landscape Epic",
        description: "Slow zoom across dramatic landscapes and views",
        effect: "Slow Zoom"
      },
      {
        title: "City Explorer",
        description: "Pan across architecture and urban scenes",
        effect: "Pan"
      },
      {
        title: "Detail Discovery",
        description: "Close-up motion for cultural details and local moments",
        effect: "Zoom"
      },
      {
        title: "Depth of Place",
        description: "3D parallax creating immersive destination feel",
        effect: "Parallax"
      }
    ],
    useCases: [
      "Destination showcases",
      "Travel vlog supplements",
      "Hotel and resort marketing",
      "Tourism promotion",
      "Trip recap content",
      "Location guides and recommendations"
    ],
    tips: [
      "Landscape shots work beautifully with slow zoom effects",
      "Create vertical content for TikTok/Reels and landscape for YouTube",
      "Add location tags and travel-related hashtags for discovery",
      "Sunset and golden hour photos create the most engaging travel videos"
    ],
    faqs: [
      {
        question: "What travel photos work best with these templates?",
        answer: "Landscapes, cityscapes, landmarks, and scenic views all work beautifully. Wide-angle shots with clear subjects produce cinematic results. Golden hour and blue hour photos are especially stunning."
      },
      {
        question: "Can I create travel vlogs from just photos?",
        answer: "Yes! Many travel creators use Sorovi to turn their trip photos into vlog-style content. Add music in your editing app for the complete travel vlog feel."
      },
      {
        question: "How can hotels use travel video templates?",
        answer: "Hotels use templates for room tours, property showcases, amenity highlights, and destination content. Create content that inspires bookings from existing property photography."
      },
      {
        question: "What platforms work best for travel video content?",
        answer: "Instagram Reels and TikTok for discovery, YouTube for travel vlogs, and Pinterest for travel inspiration. Create platform-specific versions for best results on each."
      }
    ],
    relatedTemplates: ["instagram-reels-templates", "youtube-shorts-templates", "tiktok-video-templates"],
    ctaText: "Create Travel Videos Free"
  },
  {
    slug: "fitness-video-templates",
    name: "Fitness Video Templates",
    icon: "💪",
    metaTitle: "Fitness Video Templates | Sorovi - Workout & Transformation Content",
    metaDescription: "Create dynamic fitness videos from photos. Workout showcases, transformation reveals, and gym content. AI-powered fitness video creation for trainers and influencers.",
    heroHeadline: "Fitness Content That Motivates Action",
    heroSubheadline: "Transform workout photos and transformation pics into dynamic fitness videos. Create content that inspires followers and showcases results.",
    description: "Fitness video templates for workout content, transformation reveals, gym marketing, and fitness influencer social media.",
    category: "Fitness",
    platforms: ["Instagram", "TikTok", "YouTube"],
    aspectRatio: "9:16, 1:1",
    duration: "15-30 sec",
    bestFor: ["Personal Trainers", "Fitness Influencers", "Gyms", "Fitness Brands"],
    features: [
      {
        icon: "🔥",
        title: "High Energy Feel",
        description: "Dynamic motion effects that match the energy of fitness content."
      },
      {
        icon: "📊",
        title: "Transformation Ready",
        description: "Templates perfect for before/after reveals and progress showcases."
      },
      {
        icon: "💪",
        title: "Muscle Definition",
        description: "Lighting-enhancing zoom effects that showcase physique and form."
      },
      {
        icon: "🏋️",
        title: "Workout Showcase",
        description: "Movement patterns perfect for exercise demonstrations and gym content."
      }
    ],
    examples: [
      {
        title: "Transformation Reveal",
        description: "Dramatic zoom for before/after comparisons",
        effect: "Zoom"
      },
      {
        title: "Physique Showcase",
        description: "Slow pan highlighting progress and definition",
        effect: "Pan"
      },
      {
        title: "Gym Atmosphere",
        description: "Dynamic parallax for workout environment shots",
        effect: "Parallax"
      },
      {
        title: "Exercise Focus",
        description: "Form-focused movement for workout demonstrations",
        effect: "Slow Zoom"
      }
    ],
    useCases: [
      "Client transformation showcases",
      "Workout demonstrations",
      "Gym marketing content",
      "Fitness progress updates",
      "Personal training promotion",
      "Supplement and product content"
    ],
    tips: [
      "Good gym lighting makes a huge difference in video quality",
      "Transformation content performs exceptionally well — showcase client results",
      "Create content for both motivational posts and educational workout tips",
      "Post fitness content in the morning when workout motivation is highest"
    ],
    faqs: [
      {
        question: "How can personal trainers use fitness templates?",
        answer: "Showcase client transformations, create workout tip content, promote services, and build a consistent content presence that attracts new clients."
      },
      {
        question: "Do transformation videos perform well on social media?",
        answer: "Transformation content is among the highest-performing fitness content. Dramatic before/after reveals with motion effects drive massive engagement."
      },
      {
        question: "Can I use fitness templates for workout demonstrations?",
        answer: "Yes! Create dynamic content from workout photos. While not full exercise tutorials, they work great for highlighting specific exercises and form."
      },
      {
        question: "What photo quality do I need for fitness content?",
        answer: "Good lighting is key. Gym lighting works, but photos near windows or in well-lit areas produce the best results. Clear, in-focus photos are essential."
      }
    ],
    relatedTemplates: ["instagram-reels-templates", "tiktok-video-templates", "youtube-shorts-templates"],
    ctaText: "Create Fitness Videos Free"
  },
  {
    slug: "tutorial-video-templates",
    name: "Tutorial Video Templates",
    icon: "📚",
    metaTitle: "Tutorial Video Templates | Sorovi - Educational Content Made Easy",
    metaDescription: "Create engaging tutorial videos from screenshots and images. Step-by-step guides, how-to content, and educational videos. AI-powered tutorial creation.",
    heroHeadline: "Tutorial Videos That Teach Effectively",
    heroSubheadline: "Transform screenshots and step images into engaging tutorial videos. Create educational content that's clear, professional, and easy to follow.",
    description: "Tutorial video templates for educational content, how-to guides, product tutorials, and step-by-step demonstrations.",
    category: "Education",
    platforms: ["YouTube", "TikTok", "Instagram", "Course Platforms"],
    aspectRatio: "16:9, 9:16, 1:1",
    duration: "30-90 sec",
    bestFor: ["Educators", "Course Creators", "SaaS Companies", "Tech Tutorials"],
    features: [
      {
        icon: "📖",
        title: "Step-by-Step Flow",
        description: "Motion patterns that guide viewers through processes clearly and logically."
      },
      {
        icon: "🎯",
        title: "Focus Attention",
        description: "Zoom effects that draw attention to specific areas of screenshots and images."
      },
      {
        icon: "🖥️",
        title: "Screen Content Ready",
        description: "Templates optimized for screenshots, UI images, and digital content."
      },
      {
        icon: "📝",
        title: "Text Overlay Friendly",
        description: "Space and pacing designed for adding explanatory text and annotations."
      }
    ],
    examples: [
      {
        title: "Feature Highlight",
        description: "Zoom to specific UI elements or features",
        effect: "Zoom"
      },
      {
        title: "Process Overview",
        description: "Pan across full screens or dashboards",
        effect: "Pan"
      },
      {
        title: "Detail Explain",
        description: "Close-up focus on specific buttons or areas",
        effect: "Focus Zoom"
      },
      {
        title: "Context Setting",
        description: "Slight movement keeping full context visible",
        effect: "Subtle Parallax"
      }
    ],
    useCases: [
      "Software tutorials",
      "How-to guides",
      "Feature explanations",
      "Onboarding content",
      "Quick tips and tricks",
      "Educational course content"
    ],
    tips: [
      "Clean, high-resolution screenshots produce the best tutorial videos",
      "Use zoom effects to draw attention to specific UI elements",
      "Add text overlays explaining each step for clarity",
      "Create both short-form (tips) and long-form (full tutorials) content"
    ],
    faqs: [
      {
        question: "Can I create software tutorials with Sorovi?",
        answer: "Yes! Upload screenshots and use zoom/pan effects to guide viewers through interfaces. Add text overlays to explain each step clearly."
      },
      {
        question: "What image types work best for tutorials?",
        answer: "Clean screenshots, UI images, and step-by-step process images work best. High resolution ensures text remains readable in the video."
      },
      {
        question: "How can SaaS companies use tutorial templates?",
        answer: "Create feature announcement videos, onboarding content, help documentation videos, and social media tips that drive product adoption."
      },
      {
        question: "Can I use tutorials on course platforms?",
        answer: "Yes! Tutorial videos work great in online courses. Create engaging video content from screenshots and diagrams to supplement your course material."
      }
    ],
    relatedTemplates: ["youtube-shorts-templates", "product-video-templates", "instagram-reels-templates"],
    ctaText: "Create Tutorial Videos Free"
  }
];

export function getTemplateBySlug(slug: string): VideoTemplate | undefined {
  return templates.find((template) => template.slug === slug);
}

export function getTemplatesByCategory(category: string): VideoTemplate[] {
  return templates.filter((template) => template.category === category);
}

export function getAllTemplateCategories(): string[] {
  return Array.from(new Set(templates.map((template) => template.category)));
}

export function getAllTemplateSlugs(): string[] {
  return templates.map((template) => template.slug);
}
