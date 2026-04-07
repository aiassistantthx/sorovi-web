export interface Audience {
  slug: string;
  name: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  painPoints: Array<{ icon: string; title: string; description: string }>;
  benefits: Array<{ icon: string; title: string; description: string }>;
  features: string[];
  useCases: string[];
  testimonial: { quote: string; author: string; role: string };
  stats: Array<{ value: string; label: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedTools: string[];
  ctaText: string;
}

export const audiences: Audience[] = [
  {
    slug: "creators",
    name: "Content Creators",
    icon: "🎨",
    metaTitle: "AI Video Generator for Content Creators | Hyreel",
    metaDescription: "Create viral TikToks, Reels, and Shorts 10x faster. AI video effects designed for content creators. No editing skills needed. Start free.",
    heroHeadline: "Create 10x More Content Without Burning Out",
    heroSubheadline: "AI-powered video creation designed for content creators. Turn photos into scroll-stopping videos in seconds, not hours.",
    description: "Hyreel helps content creators produce more high-quality video content without the editing grind.",
    painPoints: [
      {
        icon: "⏰",
        title: "Editing Takes Forever",
        description: "Spending 3-4 hours editing a single video leaves no time for strategy, engagement, or rest."
      },
      {
        icon: "📉",
        title: "Algorithm Demands Consistency",
        description: "Platforms reward daily posting, but creating that much quality content is exhausting."
      },
      {
        icon: "💸",
        title: "Can't Afford Pro Tools",
        description: "Professional editing software costs hundreds and takes months to learn."
      },
      {
        icon: "🎬",
        title: "Video Ideas Stuck as Photos",
        description: "Great content ideas trapped in your camera roll because filming takes too long."
      }
    ],
    benefits: [
      {
        icon: "⚡",
        title: "Create in Seconds",
        description: "Upload a photo, choose an effect, get a video. What took hours now takes 10 seconds."
      },
      {
        icon: "📱",
        title: "Create Anywhere",
        description: "Full-featured iOS app means you can create professional videos on the go."
      },
      {
        icon: "🔥",
        title: "Algorithm-Optimized",
        description: "Effects designed to maximize watch time and engagement on TikTok, Instagram, YouTube."
      },
      {
        icon: "💰",
        title: "Creator-Friendly Pricing",
        description: "Free tier with 5 videos/day. Unlimited videos for less than a coffee per week."
      }
    ],
    features: [
      "Photo-to-video AI with cinematic motion effects",
      "TikTok, Reels, Shorts optimized formats",
      "50+ AI voices for voiceovers",
      "Batch creation for content calendars",
      "No watermark on paid plans",
      "Direct social media export"
    ],
    useCases: [
      "Daily TikTok content creation",
      "Instagram Reels for engagement",
      "YouTube Shorts for channel growth",
      "Behind-the-scenes content",
      "Product reviews and unboxings",
      "Travel and lifestyle content"
    ],
    testimonial: {
      quote: "I went from posting twice a week to daily. My followers grew 5x in 3 months. Hyreel is the secret weapon every creator needs.",
      author: "Maya K.",
      role: "TikTok Creator, 120K Followers"
    },
    stats: [
      { value: "10x", label: "Faster Content Creation" },
      { value: "5", label: "Free Videos Daily" },
      { value: "50+", label: "AI Voices" },
      { value: "4.8", label: "App Store Rating" }
    ],
    faqs: [
      {
        question: "Do I need editing experience to use Hyreel?",
        answer: "Not at all! Hyreel is designed for creators of all skill levels. Upload a photo, tap an effect, and your video is ready. The AI handles all the complex editing automatically."
      },
      {
        question: "Can I create content for multiple platforms?",
        answer: "Yes! Hyreel exports in formats optimized for TikTok, Instagram Reels, YouTube Shorts, and more. Create once, post everywhere."
      },
      {
        question: "How many videos can I create?",
        answer: "Free users get 5 videos per day. Creator plan ($9.99/mo) offers unlimited videos — perfect for daily content schedules."
      },
      {
        question: "Will my videos look like everyone else's?",
        answer: "No! You provide your own photos, so every video is unique to your brand. The AI adds professional motion effects to YOUR content."
      }
    ],
    relatedTools: ["ai-tiktok-video-generator", "ai-instagram-reels-maker", "ai-youtube-shorts-generator", "image-to-video-ai"],
    ctaText: "Start Creating Free"
  },
  {
    slug: "small-business",
    name: "Small Business",
    icon: "🏪",
    metaTitle: "AI Video Marketing for Small Business | Hyreel",
    metaDescription: "Create professional marketing videos without hiring a team. AI video generator for small business owners. Affordable, fast, no skills needed.",
    heroHeadline: "Professional Video Marketing Without the Agency Price Tag",
    heroSubheadline: "Create scroll-stopping marketing videos for your small business. No video team needed — just your product photos and Hyreel's AI.",
    description: "Hyreel empowers small businesses to compete with big brands through professional video content.",
    painPoints: [
      {
        icon: "💰",
        title: "Video Production is Expensive",
        description: "Hiring videographers or agencies costs thousands — money most small businesses don't have."
      },
      {
        icon: "⏳",
        title: "No Time to Learn Editing",
        description: "Running a business leaves no time to master complex video editing software."
      },
      {
        icon: "📱",
        title: "Competitors Have Better Content",
        description: "Watching big brands dominate social media while you're stuck with static photos."
      },
      {
        icon: "🎯",
        title: "DIY Videos Look Amateur",
        description: "Your attempts at video look unprofessional compared to competitor content."
      }
    ],
    benefits: [
      {
        icon: "✨",
        title: "Professional Results Instantly",
        description: "Transform product photos into polished marketing videos that look like agency work."
      },
      {
        icon: "💵",
        title: "Fraction of Agency Cost",
        description: "Create unlimited videos for less than one hour of agency work. ROI from day one."
      },
      {
        icon: "📈",
        title: "Boost Sales with Video",
        description: "Product listings with video convert 20-30% better. Video ads outperform static by 3x."
      },
      {
        icon: "🚀",
        title: "Launch Products Faster",
        description: "New product? Create marketing videos the same day. No waiting for production schedules."
      }
    ],
    features: [
      "Product showcase videos from photos",
      "Social media marketing content",
      "E-commerce listing videos",
      "Ad creative generation",
      "Brand-consistent templates",
      "Batch processing for catalogs"
    ],
    useCases: [
      "Product launch videos",
      "Social media marketing",
      "E-commerce listings (Amazon, Shopify)",
      "Facebook and Instagram ads",
      "Email marketing content",
      "Website product pages"
    ],
    testimonial: {
      quote: "We used to spend $500 per product video. Now we create them ourselves in minutes. Our conversion rate increased 35% and we're saving thousands monthly.",
      author: "James T.",
      role: "Owner, E-commerce Store"
    },
    stats: [
      { value: "30%", label: "Higher Conversions" },
      { value: "90%", label: "Cost Savings" },
      { value: "Minutes", label: "Video Creation" },
      { value: "Unlimited", label: "Videos/Month" }
    ],
    faqs: [
      {
        question: "Is Hyreel worth it for a small business?",
        answer: "Absolutely. Video content drives 30% higher conversions and 3x better ad performance. At $9.99/month for unlimited videos, you'll see ROI from your first sale boost."
      },
      {
        question: "What kind of business videos can I create?",
        answer: "Product showcases, social media ads, e-commerce listings, promotional content, behind-the-scenes, and more. Any product photo can become an engaging video."
      },
      {
        question: "Do I need product photography experience?",
        answer: "Basic product photos work great. Well-lit photos on clean backgrounds produce the best results, but even smartphone photos create professional videos."
      },
      {
        question: "Can I use Hyreel videos for paid ads?",
        answer: "Yes! Hyreel videos work perfectly for Facebook, Instagram, TikTok, and Google ads. Video ads consistently outperform static images."
      }
    ],
    relatedTools: ["ai-product-video-maker", "ai-ecommerce-video-creator", "ai-social-media-video-maker", "image-to-video-ai"],
    ctaText: "Start Free Trial"
  },
  {
    slug: "influencers",
    name: "Influencers",
    icon: "⭐",
    metaTitle: "AI Video Generator for Influencers | Hyreel",
    metaDescription: "Create sponsored content and brand partnerships faster. AI video effects for influencers. Maintain posting consistency while scaling brand deals.",
    heroHeadline: "Scale Your Brand Deals Without Sacrificing Quality",
    heroSubheadline: "Create stunning sponsored content in minutes. More brand partnerships, consistent posting, no burnout.",
    description: "Hyreel helps influencers produce more content and land more brand deals.",
    painPoints: [
      {
        icon: "🤝",
        title: "Brand Deals Need Fast Turnaround",
        description: "Brands want content quickly, but quality video takes time you don't have."
      },
      {
        icon: "📅",
        title: "Can't Maintain Posting Schedule",
        description: "Brand work takes over, leaving no time for organic content that grew your audience."
      },
      {
        icon: "😫",
        title: "Content Creation Burnout",
        description: "The pressure to constantly create is exhausting and unsustainable."
      },
      {
        icon: "💼",
        title: "Turning Down Opportunities",
        description: "Saying no to brand deals because you can't handle the production workload."
      }
    ],
    benefits: [
      {
        icon: "⚡",
        title: "Deliver Faster",
        description: "Create brand content in minutes instead of hours. Meet tight deadlines easily."
      },
      {
        icon: "📈",
        title: "Take More Deals",
        description: "Handle 3x more brand partnerships when content creation is 10x faster."
      },
      {
        icon: "🎨",
        title: "Maintain Your Aesthetic",
        description: "Consistent visual style across all content — organic and sponsored."
      },
      {
        icon: "💪",
        title: "Avoid Burnout",
        description: "Create more with less effort. Sustainable content creation that doesn't drain you."
      }
    ],
    features: [
      "Fast sponsored content creation",
      "Brand-consistent effects and styles",
      "UGC-style authentic videos",
      "Multi-platform export",
      "Batch content creation",
      "Professional without overproduction"
    ],
    useCases: [
      "Sponsored product showcases",
      "Brand partnership content",
      "Unboxing and review videos",
      "Lifestyle and aesthetic content",
      "Story and Reels content",
      "Organic engagement posts"
    ],
    testimonial: {
      quote: "I doubled my brand deals this year because I can deliver content twice as fast. Brands love working with me now because I never miss deadlines.",
      author: "Sofia R.",
      role: "Lifestyle Influencer, 250K Followers"
    },
    stats: [
      { value: "2x", label: "More Brand Deals" },
      { value: "10x", label: "Faster Delivery" },
      { value: "0", label: "Missed Deadlines" },
      { value: "Daily", label: "Posting Consistency" }
    ],
    faqs: [
      {
        question: "Can I use Hyreel for sponsored content?",
        answer: "Absolutely! Hyreel is perfect for brand partnerships. Create professional product showcases that meet brand standards while maintaining your authentic style."
      },
      {
        question: "Will brands know I used AI?",
        answer: "Your photos, your content — Hyreel just adds professional motion. The result looks like you spent hours editing, not like AI-generated content."
      },
      {
        question: "How do I maintain my aesthetic?",
        answer: "Use consistent effects and styles across your content. Hyreel lets you save preferences so every video matches your brand."
      },
      {
        question: "Is it worth the investment?",
        answer: "At $9.99/month, one extra brand deal pays for years of Hyreel. Most influencers see ROI within the first week."
      }
    ],
    relatedTools: ["ai-instagram-reels-maker", "ai-tiktok-video-generator", "ai-product-video-maker", "image-to-video-ai"],
    ctaText: "Start Creating Free"
  },
  {
    slug: "marketers",
    name: "Digital Marketers",
    icon: "📊",
    metaTitle: "AI Video for Digital Marketing | Hyreel",
    metaDescription: "Create video ads and marketing content at scale. AI video generator for digital marketers. Test more creatives, reduce costs, improve ROAS.",
    heroHeadline: "Test 10x More Creatives Without 10x the Budget",
    heroSubheadline: "Generate video ad variations in seconds. A/B test at scale, find winners faster, maximize your ROAS.",
    description: "Hyreel helps digital marketers produce more video creatives while reducing production costs.",
    painPoints: [
      {
        icon: "💸",
        title: "Creative Production is Expensive",
        description: "Video ads cost $200-500 each to produce. Testing at scale burns through budgets."
      },
      {
        icon: "⏱️",
        title: "Slow Creative Iteration",
        description: "Waiting days for new ad variations kills campaign momentum when you find winners."
      },
      {
        icon: "📉",
        title: "Creative Fatigue",
        description: "Ads stop performing, but refreshing creatives is a constant production headache."
      },
      {
        icon: "🎯",
        title: "Can't Test Enough Variations",
        description: "Limited testing means you might be missing your best-performing creative."
      }
    ],
    benefits: [
      {
        icon: "🔁",
        title: "Unlimited Variations",
        description: "Generate dozens of ad variations from one product photo. Test everything."
      },
      {
        icon: "⚡",
        title: "Instant Refresh",
        description: "Creative fatigue? New variations in seconds. Keep campaigns performing."
      },
      {
        icon: "📈",
        title: "Better ROAS",
        description: "More testing = faster winners. Reduce CPA by finding what works."
      },
      {
        icon: "💰",
        title: "90% Cost Reduction",
        description: "Create video ads for pennies instead of hundreds. Reallocate to media spend."
      }
    ],
    features: [
      "Rapid ad creative generation",
      "A/B test variations at scale",
      "UGC-style authentic ads",
      "Platform-specific formats",
      "Batch processing",
      "Fast iteration on winners"
    ],
    useCases: [
      "Facebook and Instagram ads",
      "TikTok ad creatives",
      "Google Video ads",
      "Pinterest promoted pins",
      "Snapchat ads",
      "Performance marketing campaigns"
    ],
    testimonial: {
      quote: "We cut our creative costs by 80% and improved ROAS by 40%. Testing 50 variations instead of 5 helped us find winners we would have missed.",
      author: "Ryan M.",
      role: "Performance Marketing Manager"
    },
    stats: [
      { value: "80%", label: "Cost Reduction" },
      { value: "40%", label: "ROAS Improvement" },
      { value: "10x", label: "More Testing" },
      { value: "Seconds", label: "New Creatives" }
    ],
    faqs: [
      {
        question: "Do AI-generated ads perform as well as traditional video?",
        answer: "Often better! The ability to test 10x more variations means you find winners faster. Many marketers report improved ROAS after switching to Hyreel."
      },
      {
        question: "What ad platforms work with Hyreel videos?",
        answer: "All major platforms: Meta (Facebook/Instagram), TikTok, Google, Pinterest, Snapchat, LinkedIn. Export in optimized formats for each."
      },
      {
        question: "How do I create variations quickly?",
        answer: "From one product photo, generate dozens of variations with different effects, speeds, and focal points. Each takes seconds to create."
      },
      {
        question: "Can I use Hyreel for client work?",
        answer: "Yes! Business plan includes features for agencies and freelancers managing multiple clients."
      }
    ],
    relatedTools: ["ai-product-video-maker", "ai-social-media-video-maker", "ai-faceless-video-generator", "image-to-video-ai"],
    ctaText: "Start Free Trial"
  },
  {
    slug: "agencies",
    name: "Marketing Agencies",
    icon: "🏢",
    metaTitle: "AI Video for Marketing Agencies | Hyreel",
    metaDescription: "Scale video production for all your clients. AI video generator for agencies. Higher margins, faster delivery, happier clients.",
    heroHeadline: "Deliver Video for Every Client Without Hiring More Editors",
    heroSubheadline: "Scale your agency's video capabilities 10x. Higher margins, faster turnaround, clients who think you have a full production team.",
    description: "Hyreel helps agencies deliver professional video content at scale with better margins.",
    painPoints: [
      {
        icon: "👥",
        title: "Can't Scale Video Team",
        description: "Hiring editors for every client is expensive. Video becomes unprofitable."
      },
      {
        icon: "💰",
        title: "Thin Margins on Video",
        description: "Client budgets are limited, but production costs stay high."
      },
      {
        icon: "⏰",
        title: "Delivery Bottlenecks",
        description: "Multiple clients need content simultaneously. Someone always waits."
      },
      {
        icon: "🚫",
        title: "Turning Down Video Work",
        description: "Saying no to video projects because you can't handle the workload."
      }
    ],
    benefits: [
      {
        icon: "🚀",
        title: "10x Output",
        description: "One team member produces what used to require a full production team."
      },
      {
        icon: "💵",
        title: "Higher Margins",
        description: "Reduce production costs 80%. Offer competitive rates with healthy profits."
      },
      {
        icon: "📋",
        title: "Multi-Client Management",
        description: "Handle video for all clients efficiently. No more bottlenecks."
      },
      {
        icon: "✅",
        title: "Never Miss Deadlines",
        description: "Instant video creation means you always deliver on time."
      }
    ],
    features: [
      "Multi-client workflow",
      "Brand-specific presets per client",
      "White-label delivery",
      "Batch content creation",
      "Team collaboration",
      "Priority processing"
    ],
    useCases: [
      "Social media content calendars",
      "Ad creative production",
      "E-commerce client videos",
      "Real estate client content",
      "Restaurant marketing",
      "Multi-brand management"
    ],
    testimonial: {
      quote: "Video went from our least profitable service to our highest margin offering. We produce 200+ client videos monthly with a team of two.",
      author: "Michael L.",
      role: "Agency Founder"
    },
    stats: [
      { value: "200+", label: "Videos/Month" },
      { value: "80%", label: "Cost Savings" },
      { value: "10x", label: "More Clients" },
      { value: "2", label: "Team Members" }
    ],
    faqs: [
      {
        question: "Can we white-label Hyreel videos?",
        answer: "Yes! Business plan videos have no Hyreel branding. Present them as your agency's production."
      },
      {
        question: "How do we manage multiple clients?",
        answer: "Save brand-specific presets and styles for each client. Switch between brands instantly while maintaining consistency."
      },
      {
        question: "Is there team access?",
        answer: "Business plan includes team collaboration features. Multiple team members can create content under one account."
      },
      {
        question: "What's the ROI for agencies?",
        answer: "Most agencies see positive ROI within the first week. Video becomes a profit center instead of a cost center."
      }
    ],
    relatedTools: ["ai-social-media-video-maker", "ai-product-video-maker", "ai-instagram-reels-maker", "ai-tiktok-video-generator"],
    ctaText: "Start Agency Trial"
  },
  {
    slug: "freelancers",
    name: "Freelancers",
    icon: "💼",
    metaTitle: "AI Video for Freelancers | Hyreel",
    metaDescription: "Add video services to your freelance offering. AI video generator for freelancers. Take more clients, deliver faster, earn more.",
    heroHeadline: "Add Video to Your Services Without Learning to Edit",
    heroSubheadline: "Offer professional video creation to your clients. No editing skills required — just Hyreel's AI and your creativity.",
    description: "Hyreel helps freelancers expand their service offerings with professional video.",
    painPoints: [
      {
        icon: "🎓",
        title: "Video Requires New Skills",
        description: "Learning video editing takes months. Time you could spend earning."
      },
      {
        icon: "🚫",
        title: "Turning Down Video Requests",
        description: "Clients want video, but you can't deliver. Money left on the table."
      },
      {
        icon: "💻",
        title: "Expensive Software",
        description: "Professional editing tools cost hundreds. Hard to justify for occasional use."
      },
      {
        icon: "⏰",
        title: "Video Takes Too Long",
        description: "Even simple videos eat into your hourly rate."
      }
    ],
    benefits: [
      {
        icon: "➕",
        title: "New Revenue Stream",
        description: "Add video services instantly. Charge premium rates for professional results."
      },
      {
        icon: "⚡",
        title: "Fast Delivery",
        description: "Create client videos in minutes. Better hourly rate, happier clients."
      },
      {
        icon: "🎯",
        title: "No Learning Curve",
        description: "Professional videos from day one. No months of tutorials."
      },
      {
        icon: "💰",
        title: "Affordable Tools",
        description: "$9.99/month pays for itself with one small video project."
      }
    ],
    features: [
      "Professional video without editing skills",
      "Client-ready quality instantly",
      "Multiple export formats",
      "Brand customization",
      "Fast turnaround",
      "Portfolio-worthy results"
    ],
    useCases: [
      "Social media management",
      "Content marketing services",
      "E-commerce product content",
      "Marketing campaigns",
      "Brand content creation",
      "Video as an add-on service"
    ],
    testimonial: {
      quote: "I added video to my social media packages and increased my rates by 40%. Clients think I'm a video expert. Hyreel does all the work.",
      author: "Ashley P.",
      role: "Freelance Social Media Manager"
    },
    stats: [
      { value: "40%", label: "Rate Increase" },
      { value: "New", label: "Revenue Stream" },
      { value: "0", label: "Learning Curve" },
      { value: "$9.99", label: "Monthly Cost" }
    ],
    faqs: [
      {
        question: "Can I really offer video services without experience?",
        answer: "Yes! Hyreel handles all the technical work. You provide creative direction and client communication — the AI creates professional videos."
      },
      {
        question: "How should I price video services?",
        answer: "Most freelancers charge $50-200 per video depending on complexity. With Hyreel creating videos in minutes, your hourly rate skyrockets."
      },
      {
        question: "Will clients know I'm using AI?",
        answer: "The videos look professionally edited. Clients see quality results — they don't need to know your workflow."
      },
      {
        question: "What if a client has specific requests?",
        answer: "Hyreel offers multiple effects and styles. You can customize motion, speed, and format to match any client brief."
      }
    ],
    relatedTools: ["ai-social-media-video-maker", "ai-product-video-maker", "image-to-video-ai", "ai-instagram-reels-maker"],
    ctaText: "Start Free Trial"
  },
  {
    slug: "entrepreneurs",
    name: "Entrepreneurs",
    icon: "🚀",
    metaTitle: "AI Video for Entrepreneurs | Hyreel",
    metaDescription: "Launch and market your business with professional video. AI video generator for entrepreneurs. Bootstrap-friendly, fast, no team needed.",
    heroHeadline: "Market Your Startup Like You Have a Video Team",
    heroSubheadline: "Professional marketing videos on a bootstrap budget. Launch products, build your brand, compete with funded competitors.",
    description: "Hyreel helps entrepreneurs create professional marketing content without the enterprise budget.",
    painPoints: [
      {
        icon: "💰",
        title: "No Budget for Video Production",
        description: "Every dollar counts. Professional video feels out of reach."
      },
      {
        icon: "🏃",
        title: "Wearing Too Many Hats",
        description: "You're CEO, marketer, and janitor. No time to learn video editing."
      },
      {
        icon: "🆚",
        title: "Competing with Funded Startups",
        description: "Competitors with millions have video teams. You have hustle."
      },
      {
        icon: "⏰",
        title: "Need to Move Fast",
        description: "Speed is your advantage, but video production is slow."
      }
    ],
    benefits: [
      {
        icon: "🎯",
        title: "Launch Faster",
        description: "Product video ready the same day you photograph it. Speed to market."
      },
      {
        icon: "💪",
        title: "Compete with Giants",
        description: "Professional video quality without the enterprise budget."
      },
      {
        icon: "⚡",
        title: "Do More Solo",
        description: "Marketing videos, product demos, social content — all by yourself."
      },
      {
        icon: "📈",
        title: "Bootstrap-Friendly",
        description: "$9.99/month. ROI from your first video view."
      }
    ],
    features: [
      "Product launch videos",
      "Social media marketing",
      "Pitch deck videos",
      "Product demo content",
      "Ad creatives",
      "Brand building content"
    ],
    useCases: [
      "Product launches",
      "Crowdfunding campaigns",
      "Social media marketing",
      "Website product pages",
      "Email campaigns",
      "Investor presentations"
    ],
    testimonial: {
      quote: "Launched my DTC brand with zero video budget. Hyreel videos look like I hired an agency. Raised our seed round with product videos made on my phone.",
      author: "David C.",
      role: "Founder, DTC Startup"
    },
    stats: [
      { value: "$0", label: "Video Team Cost" },
      { value: "Same Day", label: "Launch Videos" },
      { value: "Pro", label: "Quality Results" },
      { value: "Solo", label: "Creator" }
    ],
    faqs: [
      {
        question: "Is Hyreel really enough for a startup's video needs?",
        answer: "For most early-stage needs, absolutely. Product videos, social content, ad creatives — Hyreel handles it all. Save the agency budget for when you're funded."
      },
      {
        question: "Can I create pitch deck videos?",
        answer: "Yes! Create compelling product demonstrations and visual stories that bring your pitch to life."
      },
      {
        question: "How does this compare to hiring a freelancer?",
        answer: "A single freelance video costs $200-500. Hyreel gives you unlimited videos for $9.99/month. Do the math."
      },
      {
        question: "Will investors take AI-made videos seriously?",
        answer: "Investors care about traction and product, not production budgets. Professional-looking videos show you're resourceful and execution-focused."
      }
    ],
    relatedTools: ["ai-product-video-maker", "ai-social-media-video-maker", "image-to-video-ai", "ai-ecommerce-video-creator"],
    ctaText: "Start Building Free"
  },
  {
    slug: "content-teams",
    name: "Content Teams",
    icon: "👥",
    metaTitle: "AI Video for Content Teams | Hyreel",
    metaDescription: "Scale your team's video output without scaling headcount. AI video generator for content teams. More content, same team, better results.",
    heroHeadline: "10x Your Team's Video Output Without New Hires",
    heroSubheadline: "Empower every team member to create professional video. Scale content production without scaling costs.",
    description: "Hyreel helps content teams produce more video without increasing headcount or budget.",
    painPoints: [
      {
        icon: "🧑‍🤝‍🧑",
        title: "Team Can't Keep Up",
        description: "Content demands grow, but headcount stays the same."
      },
      {
        icon: "🎬",
        title: "Video Bottleneck",
        description: "Only one or two people can create video. Everything waits for them."
      },
      {
        icon: "💼",
        title: "Can't Justify More Hires",
        description: "Budget for new video editors isn't happening this quarter."
      },
      {
        icon: "📊",
        title: "Inconsistent Quality",
        description: "Different team members produce different quality levels."
      }
    ],
    benefits: [
      {
        icon: "👥",
        title: "Everyone Creates Video",
        description: "No editing skills required. Every team member can produce professional video."
      },
      {
        icon: "📈",
        title: "10x Output",
        description: "Same team, 10x more video content. Meet growing demands."
      },
      {
        icon: "✅",
        title: "Consistent Quality",
        description: "Same professional results regardless of who creates the video."
      },
      {
        icon: "💰",
        title: "No New Hires",
        description: "Scale production without scaling headcount or budget."
      }
    ],
    features: [
      "Team collaboration features",
      "Brand consistency controls",
      "Shared presets and styles",
      "Approval workflows",
      "Usage analytics",
      "Priority support"
    ],
    useCases: [
      "Social media content",
      "Marketing campaigns",
      "Product content",
      "Internal communications",
      "Sales enablement",
      "Brand content"
    ],
    testimonial: {
      quote: "Our 3-person content team now produces more video than companies with 10 editors. Hyreel democratized video creation across our entire organization.",
      author: "Jennifer K.",
      role: "Head of Content"
    },
    stats: [
      { value: "10x", label: "More Content" },
      { value: "Same", label: "Team Size" },
      { value: "100%", label: "Quality Consistency" },
      { value: "All", label: "Team Members" }
    ],
    faqs: [
      {
        question: "How many team members can use Hyreel?",
        answer: "Business plan includes team collaboration features. Add team members as needed — everyone can create professional video."
      },
      {
        question: "How do we maintain brand consistency?",
        answer: "Create shared presets, approved effects, and brand guidelines within Hyreel. Everyone creates on-brand content automatically."
      },
      {
        question: "Do we need to train the team?",
        answer: "Minimal training needed. Hyreel is intuitive — most team members are productive within 10 minutes."
      },
      {
        question: "Can we track team usage?",
        answer: "Business plan includes analytics and reporting on team video creation activity."
      }
    ],
    relatedTools: ["ai-social-media-video-maker", "ai-product-video-maker", "ai-instagram-reels-maker", "image-to-video-ai"],
    ctaText: "Start Team Trial"
  },
  {
    slug: "realtors",
    name: "Real Estate Agents",
    icon: "🏠",
    metaTitle: "AI Video for Real Estate Agents | Hyreel",
    metaDescription: "Create stunning property videos from listing photos. Stand out in your market with professional video tours. No videographer needed.",
    heroHeadline: "Win More Listings with Professional Property Videos",
    heroSubheadline: "Transform your listing photos into cinematic property tours in seconds. Stand out from every other agent in your market with video on every listing.",
    description: "Hyreel helps real estate agents create professional property videos that win listings and attract buyers.",
    painPoints: [
      {
        icon: "💰",
        title: "Video Production is Expensive",
        description: "Professional property videos cost $300-1,000+ per listing, eating into your commission."
      },
      {
        icon: "⏰",
        title: "No Time for Video",
        description: "Between showings, open houses, and client calls, coordinating video shoots is impossible."
      },
      {
        icon: "🏃",
        title: "Listings Move Fast",
        description: "In hot markets, waiting for a videographer means missing the crucial first 48 hours."
      },
      {
        icon: "🆚",
        title: "Competing Agents Have Video",
        description: "Top agents in your market use video for every listing. Static photos don't compete."
      }
    ],
    benefits: [
      {
        icon: "🎬",
        title: "Video for Every Listing",
        description: "Create professional property tours for every listing, not just luxury properties."
      },
      {
        icon: "⚡",
        title: "Same-Day Delivery",
        description: "Get property videos live the same day you photograph. No waiting for production."
      },
      {
        icon: "📱",
        title: "Social Media Ready",
        description: "Create Instagram Reels and TikToks that build your personal brand and attract clients."
      },
      {
        icon: "💵",
        title: "Save Thousands Monthly",
        description: "Replace expensive videography with unlimited AI videos for less than one shoot."
      }
    ],
    features: [
      "Property tour videos from listing photos",
      "Cinematic zoom and pan effects",
      "Custom branding and contact info",
      "MLS and Zillow compatible exports",
      "Social media vertical videos",
      "Batch processing for multiple listings"
    ],
    useCases: [
      "Listing video tours",
      "Open house promotions",
      "Just listed announcements",
      "Neighborhood showcases",
      "Agent personal branding",
      "Social media content"
    ],
    testimonial: {
      quote: "I used to only do video for luxury listings. Now every property gets a video tour. My inquiries are up 40% and sellers notice immediately.",
      author: "David K.",
      role: "Real Estate Agent, RE/MAX"
    },
    stats: [
      { value: "403%", label: "More Inquiries with Video" },
      { value: "$500+", label: "Saved per Listing" },
      { value: "< 60s", label: "Video Creation" },
      { value: "100%", label: "Listings with Video" }
    ],
    faqs: [
      {
        question: "Can I add my branding to property videos?",
        answer: "Yes! Add your logo, name, phone number, brokerage, and contact info to every video. Build your brand with every listing."
      },
      {
        question: "Do these work on MLS and Zillow?",
        answer: "Absolutely. Hyreel exports standard MP4 videos accepted by all MLS systems, Zillow, Realtor.com, Redfin, and every real estate platform."
      },
      {
        question: "How long are property tour videos?",
        answer: "You control the length. Create 15-second social clips or 2-3 minute full tours. Most agents create both from the same photos."
      },
      {
        question: "Is this better than hiring a videographer?",
        answer: "For most listings, yes. You save hundreds and get instant results. For luxury properties, Hyreel complements drone footage perfectly."
      }
    ],
    relatedTools: ["image-to-video-ai", "ai-zoom-video-effect", "ai-parallax-video-effect", "ai-3d-photo-video"],
    ctaText: "Create Property Videos Free"
  },
  {
    slug: "coaches",
    name: "Coaches & Consultants",
    icon: "🎯",
    metaTitle: "AI Video for Coaches & Consultants | Hyreel",
    metaDescription: "Build your coaching brand with professional video content. Create course promos, social content, and client testimonial videos without filming.",
    heroHeadline: "Build Your Coaching Brand with Professional Video",
    heroSubheadline: "Create content that positions you as the expert. Transform your photos, graphics, and testimonials into videos that attract high-ticket clients.",
    description: "Hyreel helps coaches and consultants create professional video content that builds authority and attracts clients.",
    painPoints: [
      {
        icon: "📹",
        title: "Camera Shy or Time Poor",
        description: "Not everyone loves being on camera, and filming eats into coaching time."
      },
      {
        icon: "🎬",
        title: "Video Feels Overwhelming",
        description: "Equipment, editing, lighting — the production process is intimidating."
      },
      {
        icon: "💼",
        title: "Building Authority Online",
        description: "You know your stuff, but static posts don't convey expertise like video does."
      },
      {
        icon: "📱",
        title: "Content Demands",
        description: "LinkedIn, Instagram, and TikTok all want video. You can't keep up with all platforms."
      }
    ],
    benefits: [
      {
        icon: "✨",
        title: "Professional Without Filming",
        description: "Create polished video content from photos, testimonials, and graphics. No camera required."
      },
      {
        icon: "🎯",
        title: "Position as an Expert",
        description: "Video content builds credibility and trust. Stand out from text-only coaches."
      },
      {
        icon: "📈",
        title: "Attract Better Clients",
        description: "Professional content attracts higher-ticket clients who value quality."
      },
      {
        icon: "⏱️",
        title: "Save Hours Weekly",
        description: "Create a week's content in 30 minutes instead of spending days filming and editing."
      }
    ],
    features: [
      "Testimonial videos from client quotes",
      "Course promotional content",
      "Social media thought leadership",
      "Workshop and event promotion",
      "Before/after transformation content",
      "Lead magnet videos"
    ],
    useCases: [
      "LinkedIn thought leadership",
      "Instagram coaching content",
      "Course and program promotion",
      "Client success stories",
      "Workshop announcements",
      "Lead generation content"
    ],
    testimonial: {
      quote: "I tripled my course sales after adding Hyreel videos to my funnel. Clients say the videos convinced them I was the real deal.",
      author: "Jennifer B.",
      role: "Business Coach"
    },
    stats: [
      { value: "3x", label: "Course Sales" },
      { value: "Higher", label: "Quality Leads" },
      { value: "Minutes", label: "Content Creation" },
      { value: "0", label: "Camera Time" }
    ],
    faqs: [
      {
        question: "Can I create testimonial videos without filming clients?",
        answer: "Yes! Turn client photos, quotes, and results into professional testimonial videos. Many coaches use this for clients who prefer not to be on camera."
      },
      {
        question: "What kind of content works for LinkedIn?",
        answer: "Thought leadership videos from your graphics and quotes, client success stories, and promotional content for your services all perform well on LinkedIn."
      },
      {
        question: "Can I promote my courses with Hyreel?",
        answer: "Absolutely. Create compelling course promo videos from screenshots, testimonials, and course imagery. Many coaches see significant sales increases."
      },
      {
        question: "I'm not tech-savvy. Is this difficult?",
        answer: "Not at all. Upload a photo, choose an effect, get a video. If you can use Instagram, you can use Hyreel."
      }
    ],
    relatedTools: ["image-to-video-ai", "ai-social-media-video-maker", "ai-zoom-video-effect", "ai-testimonial-video-maker"],
    ctaText: "Start Building Your Brand Free"
  },
  {
    slug: "photographers",
    name: "Photographers",
    icon: "📷",
    metaTitle: "AI Video for Photographers | Hyreel",
    metaDescription: "Transform your photography into video content. Add motion to your best shots. Expand your services without learning video editing.",
    heroHeadline: "Give Your Photography a New Dimension",
    heroSubheadline: "Transform your best photos into mesmerizing videos. Add a new revenue stream, create social content, and deliver more value to clients — all from your existing work.",
    description: "Hyreel helps photographers add video services, create social content, and bring their images to life.",
    painPoints: [
      {
        icon: "📹",
        title: "Clients Want Video Too",
        description: "Everyone asks for video now, but learning videography is a whole new skillset."
      },
      {
        icon: "💰",
        title: "Missing Revenue Opportunities",
        description: "Video photographers charge more, but the equipment and learning curve is steep."
      },
      {
        icon: "📱",
        title: "Portfolio Needs Video",
        description: "Static portfolios don't perform on social media. Video gets all the engagement."
      },
      {
        icon: "⏰",
        title: "Not Enough Hours",
        description: "Between shoots, editing, and client work, there's no time to learn video editing."
      }
    ],
    benefits: [
      {
        icon: "🎬",
        title: "Add Video Services",
        description: "Offer video deliverables to clients without buying video equipment or learning editing."
      },
      {
        icon: "💵",
        title: "New Revenue Stream",
        description: "Charge for video add-ons. Many photographers add $200-500 per client."
      },
      {
        icon: "📱",
        title: "Social Media Content",
        description: "Turn your portfolio into engaging video content that attracts new clients."
      },
      {
        icon: "✨",
        title: "Bring Photos to Life",
        description: "Create cinematic motion from your best shots. See your work in a new way."
      }
    ],
    features: [
      "Photo-to-video with cinematic motion",
      "Portfolio showcase videos",
      "Client delivery add-on",
      "Social media reels from shoots",
      "Wedding highlight videos",
      "Behind-the-scenes content"
    ],
    useCases: [
      "Client video deliverables",
      "Portfolio showcase content",
      "Wedding and event highlights",
      "Social media marketing",
      "Real estate listing videos",
      "Product photography videos"
    ],
    testimonial: {
      quote: "I added video packages to my wedding photography. Clients love getting video of their photos. I charge $300 extra and it takes me 10 minutes.",
      author: "Nicole R.",
      role: "Wedding Photographer"
    },
    stats: [
      { value: "$300+", label: "Extra per Client" },
      { value: "10min", label: "Creation Time" },
      { value: "New", label: "Revenue Stream" },
      { value: "5x", label: "Portfolio Engagement" }
    ],
    faqs: [
      {
        question: "Can I offer video as an add-on service?",
        answer: "Absolutely! Many photographers charge $200-500 for video packages. Turn client photos into videos and add a new revenue stream without new skills."
      },
      {
        question: "What types of photography work best?",
        answer: "Portrait, wedding, real estate, product, and landscape photography all create stunning videos. Any high-quality photo can become engaging video content."
      },
      {
        question: "Will this replace real videography?",
        answer: "For some projects, yes. For others, Hyreel complements video footage beautifully. It's perfect for clients who want video but didn't hire a videographer."
      },
      {
        question: "How do I price video add-ons?",
        answer: "Most photographers charge $200-500 depending on the number of images. Since creation takes minutes, your margin is excellent."
      }
    ],
    relatedTools: ["image-to-video-ai", "ai-parallax-video-effect", "ai-zoom-video-effect", "ai-3d-photo-video"],
    ctaText: "Start Creating Video Free"
  }
];

export function getAudienceBySlug(slug: string): Audience | undefined {
  return audiences.find((audience) => audience.slug === slug);
}

export function getAllAudienceSlugs(): string[] {
  return audiences.map((audience) => audience.slug);
}
