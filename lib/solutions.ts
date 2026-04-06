export interface Solution {
  slug: string;
  name: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  problem: { title: string; description: string; points: string[] };
  solution: { title: string; description: string; points: string[] };
  benefits: Array<{ icon: string; title: string; description: string }>;
  howItWorks: Array<{ step: number; title: string; description: string }>;
  results: Array<{ value: string; label: string }>;
  testimonial: { quote: string; author: string; role: string };
  faqs: Array<{ question: string; answer: string }>;
  relatedTools: string[];
  ctaText: string;
}

export const solutions: Solution[] = [
  {
    slug: "no-editing-skills",
    name: "No Editing Skills Required",
    icon: "🎯",
    metaTitle: "Create Videos Without Editing Skills | Hyreel AI Video Generator",
    metaDescription: "No video editing experience? No problem. Hyreel's AI creates professional videos from your photos automatically. Zero learning curve, instant results.",
    heroHeadline: "Create Professional Videos Without Learning to Edit",
    heroSubheadline: "Skip the months of tutorials and expensive software. Hyreel's AI does the editing for you — just upload a photo and get a video.",
    description: "Hyreel eliminates the need for video editing skills with AI-powered automatic video creation.",
    problem: {
      title: "Video Editing is Hard",
      description: "Traditional video editing requires months of learning, expensive software, and hours of work for each video.",
      points: [
        "Editing software has steep learning curves",
        "Professional tools cost hundreds of dollars",
        "Each video takes hours to create",
        "Results still look amateur without experience",
        "No time to learn when you need content now"
      ]
    },
    solution: {
      title: "Let AI Do the Editing",
      description: "Hyreel's AI handles all the technical editing work. You provide the creative direction — a photo and an effect choice — and get professional results instantly.",
      points: [
        "Upload any photo from your camera roll",
        "Choose from cinematic motion effects",
        "AI generates professional video automatically",
        "Export and share in seconds",
        "No editing timeline, no keyframes, no complexity"
      ]
    },
    benefits: [
      {
        icon: "⏱️",
        title: "Zero Learning Curve",
        description: "Create your first video in under a minute. No tutorials needed."
      },
      {
        icon: "💰",
        title: "No Expensive Software",
        description: "$9.99/month vs. hundreds for professional editing tools."
      },
      {
        icon: "✨",
        title: "Professional Results",
        description: "Cinematic effects that look like you spent hours editing."
      },
      {
        icon: "📱",
        title: "Create Anywhere",
        description: "Full-featured iOS app — create professional videos on your phone."
      }
    ],
    howItWorks: [
      { step: 1, title: "Upload Your Photo", description: "Choose any photo from your camera roll or gallery" },
      { step: 2, title: "Select an Effect", description: "Pick from zoom, orbit, parallax, and more" },
      { step: 3, title: "AI Creates Your Video", description: "Watch as Hyreel generates professional motion" },
      { step: 4, title: "Export and Share", description: "Download or share directly to social media" }
    ],
    results: [
      { value: "< 1 min", label: "First Video" },
      { value: "0", label: "Skills Needed" },
      { value: "Pro", label: "Quality Results" },
      { value: "10 sec", label: "Per Video" }
    ],
    testimonial: {
      quote: "I've never edited a video in my life. With Hyreel, I create content that looks like I hired a professional. My followers have no idea I'm not a video expert.",
      author: "Amanda S.",
      role: "Small Business Owner"
    },
    faqs: [
      {
        question: "Do I really need zero editing experience?",
        answer: "Absolutely zero. If you can take a photo and tap a button, you can use Hyreel. The AI handles all the technical work."
      },
      {
        question: "Will my videos look amateur?",
        answer: "No! Hyreel's motion effects are designed by professionals. The results look like you spent hours editing in professional software."
      },
      {
        question: "What if I want more control?",
        answer: "Hyreel lets you customize effect intensity, speed, direction, and more. Start simple, add complexity as you get comfortable."
      },
      {
        question: "Is this easier than learning CapCut or Premiere?",
        answer: "Dramatically easier. Those tools take weeks to learn. Hyreel takes minutes. Most users create their first video in under 60 seconds."
      }
    ],
    relatedTools: ["image-to-video-ai", "ai-photo-animation", "ai-zoom-video-effect", "ai-social-media-video-maker"],
    ctaText: "Create Your First Video Free"
  },
  {
    slug: "fast-content-creation",
    name: "Fast Content Creation",
    icon: "⚡",
    metaTitle: "Create Video Content 10x Faster | Hyreel AI Video Generator",
    metaDescription: "Stop spending hours on video editing. Create professional videos in seconds with Hyreel AI. 10x faster content creation for creators and businesses.",
    heroHeadline: "Create Video Content 10x Faster",
    heroSubheadline: "What used to take hours now takes seconds. Hyreel's AI accelerates your content creation so you can post more, engage more, and grow faster.",
    description: "Hyreel dramatically accelerates video content creation from hours to seconds.",
    problem: {
      title: "Content Creation Takes Too Long",
      description: "Traditional video creation is slow. By the time you edit one video, you've missed opportunities to post more content.",
      points: [
        "Editing a single video takes 2-4 hours",
        "Platforms reward frequent posting",
        "Can't keep up with content demands",
        "Burnout from constant editing",
        "Great ideas stuck because no time to create"
      ]
    },
    solution: {
      title: "Seconds, Not Hours",
      description: "Hyreel compresses hours of editing into seconds. Create the same professional results in a fraction of the time.",
      points: [
        "Photo to video in under 10 seconds",
        "Batch create content for the week",
        "No editing timeline to navigate",
        "Create on mobile while commuting",
        "More time for strategy and engagement"
      ]
    },
    benefits: [
      {
        icon: "🚀",
        title: "10x More Content",
        description: "Create 10 videos in the time it used to take to make 1."
      },
      {
        icon: "📅",
        title: "Stay Consistent",
        description: "Never miss a posting day. Batch create your content calendar."
      },
      {
        icon: "💪",
        title: "Avoid Burnout",
        description: "Create more with less effort. Sustainable content creation."
      },
      {
        icon: "📈",
        title: "Grow Faster",
        description: "More content = more reach = faster growth."
      }
    ],
    howItWorks: [
      { step: 1, title: "Batch Upload Photos", description: "Select multiple photos for your content week" },
      { step: 2, title: "Apply Effects", description: "Choose effects for each video" },
      { step: 3, title: "Generate All", description: "AI creates all videos rapidly" },
      { step: 4, title: "Schedule and Post", description: "Export to your scheduling tool or post directly" }
    ],
    results: [
      { value: "10x", label: "Faster Creation" },
      { value: "10 sec", label: "Per Video" },
      { value: "1 Week", label: "Content in 30 min" },
      { value: "Daily", label: "Posting Possible" }
    ],
    testimonial: {
      quote: "I used to spend my entire Sunday editing content for the week. Now I batch create everything in 30 minutes. I got my weekends back.",
      author: "Marcus T.",
      role: "Content Creator"
    },
    faqs: [
      {
        question: "How much faster is Hyreel really?",
        answer: "A video that takes 2-3 hours in traditional editing takes about 10 seconds in Hyreel. That's roughly 1000x faster for each video."
      },
      {
        question: "Can I create a week's content at once?",
        answer: "Yes! Batch create by uploading multiple photos, applying effects, and generating all videos in one session. A week of content in under 30 minutes."
      },
      {
        question: "Will quality suffer at this speed?",
        answer: "No! Speed doesn't sacrifice quality. Hyreel's AI applies the same professional effects whether you create one video or fifty."
      },
      {
        question: "How does this help with consistency?",
        answer: "When content creation is fast, staying consistent is easy. No more skipping posts because you didn't have time to edit."
      }
    ],
    relatedTools: ["image-to-video-ai", "ai-short-video-maker", "ai-tiktok-video-generator", "ai-social-media-video-maker"],
    ctaText: "Start Creating Faster"
  },
  {
    slug: "viral-videos",
    name: "Create Viral Videos",
    icon: "🔥",
    metaTitle: "Create Viral Videos with AI | Hyreel - Scroll-Stopping Content",
    metaDescription: "Create videos that go viral. AI effects optimized for TikTok, Instagram, and YouTube algorithms. Scroll-stopping content that gets views.",
    heroHeadline: "Create Videos Designed to Go Viral",
    heroSubheadline: "AI effects engineered for maximum engagement. Hook viewers in the first second, keep them watching, and get your content shared.",
    description: "Hyreel creates videos with AI effects optimized for social media algorithms and viral potential.",
    problem: {
      title: "Most Videos Get Ignored",
      description: "The average social media video gets scrolled past in milliseconds. Without the right hooks and effects, your content disappears into the void.",
      points: [
        "Algorithms favor engaging content",
        "First 0.5 seconds determine if viewers stay",
        "Watch time affects reach dramatically",
        "Static or boring videos get buried",
        "Don't know what makes content viral"
      ]
    },
    solution: {
      title: "Algorithm-Optimized Effects",
      description: "Hyreel's motion effects are designed around what social media algorithms reward — strong hooks, high watch time, and engaging motion that keeps viewers watching.",
      points: [
        "Hook-first design grabs attention instantly",
        "Loop-friendly endings boost rewatches",
        "Motion patterns that maximize watch time",
        "Effects proven to drive engagement",
        "Optimized for TikTok, Instagram, YouTube"
      ]
    },
    benefits: [
      {
        icon: "👀",
        title: "Stop the Scroll",
        description: "Dynamic motion grabs attention in the first fraction of a second."
      },
      {
        icon: "⏱️",
        title: "Maximize Watch Time",
        description: "Effects that keep viewers watching until the end — and rewatching."
      },
      {
        icon: "📈",
        title: "Algorithm Boost",
        description: "Higher engagement signals push your content to more viewers."
      },
      {
        icon: "🔄",
        title: "Shareable Content",
        description: "Videos people actually want to share with friends."
      }
    ],
    howItWorks: [
      { step: 1, title: "Upload Compelling Photo", description: "Start with an image that tells a story" },
      { step: 2, title: "Choose Viral-Ready Effect", description: "Select effects optimized for engagement" },
      { step: 3, title: "AI Generates Hook", description: "First 0.5 seconds designed to stop scrolling" },
      { step: 4, title: "Post and Watch It Spread", description: "Share and let the algorithm do its work" }
    ],
    results: [
      { value: "3x", label: "More Engagement" },
      { value: "0.5 sec", label: "Hook Time" },
      { value: "High", label: "Watch Time" },
      { value: "Loop", label: "Friendly" }
    ],
    testimonial: {
      quote: "My first Hyreel video got 2 million views. The zoom effect on my product photo stopped people mid-scroll. I've never had anything go viral before.",
      author: "Kevin L.",
      role: "E-commerce Seller"
    },
    faqs: [
      {
        question: "Can AI really help make viral videos?",
        answer: "AI can't guarantee virality — no one can. But Hyreel's effects are designed around what algorithms reward: strong hooks, high watch time, and engaging motion that dramatically improves your chances."
      },
      {
        question: "What makes these effects 'viral-ready'?",
        answer: "They're engineered for attention: immediate visual impact in the first half-second, motion that keeps eyes on screen, and loop-friendly endings that encourage rewatches."
      },
      {
        question: "Which platforms does this work for?",
        answer: "TikTok, Instagram Reels, YouTube Shorts, and Facebook Reels all have similar algorithm preferences. Hyreel effects work across all of them."
      },
      {
        question: "How important is the first 0.5 seconds?",
        answer: "Critical. Most viewers decide to watch or scroll within half a second. Hyreel's effects are designed with front-loaded visual hooks."
      }
    ],
    relatedTools: ["ai-tiktok-video-generator", "ai-instagram-reels-maker", "ai-youtube-shorts-generator", "ai-zoom-video-effect"],
    ctaText: "Create Viral Content Free"
  },
  {
    slug: "product-photography-to-video",
    name: "Product Photos to Video",
    icon: "📸",
    metaTitle: "Turn Product Photos into Videos | Hyreel AI Video Generator",
    metaDescription: "Transform product photography into professional videos. AI motion effects that boost conversions. No videographer needed.",
    heroHeadline: "Turn Product Photos into Videos That Sell",
    heroSubheadline: "You have great product photos. Now turn them into conversion-driving videos without expensive video shoots or editing skills.",
    description: "Hyreel transforms existing product photography into professional marketing videos instantly.",
    problem: {
      title: "Photos Alone Don't Convert",
      description: "Product listings with video convert 20-30% better, but video production is expensive and time-consuming for every SKU.",
      points: [
        "Video production costs $200-500+ per product",
        "Can't afford video for entire catalog",
        "Static photos have lower conversion rates",
        "Competitors with video steal sales",
        "No time to film and edit for every product"
      ]
    },
    solution: {
      title: "Photos Become Videos",
      description: "Transform your existing product photography into professional videos with AI motion effects. Every product can have video without new photoshoots.",
      points: [
        "Use photos you already have",
        "AI adds cinematic motion effects",
        "Video for every SKU affordably",
        "Boost conversions without new shoots",
        "Update listings in minutes, not days"
      ]
    },
    benefits: [
      {
        icon: "💰",
        title: "90% Cost Savings",
        description: "Video for every product at a fraction of traditional production costs."
      },
      {
        icon: "📈",
        title: "30% Higher Conversions",
        description: "Product listings with video convert significantly better than photos alone."
      },
      {
        icon: "⚡",
        title: "Same-Day Videos",
        description: "New product? Create video the same day you photograph it."
      },
      {
        icon: "📦",
        title: "Full Catalog Coverage",
        description: "Finally give every product in your catalog professional video content."
      }
    ],
    howItWorks: [
      { step: 1, title: "Upload Product Photo", description: "Use your existing product photography" },
      { step: 2, title: "Select Showcase Effect", description: "Zoom, orbit, or parallax to highlight features" },
      { step: 3, title: "AI Generates Video", description: "Professional product video in seconds" },
      { step: 4, title: "Add to Listings", description: "Export for Amazon, Shopify, Etsy, and more" }
    ],
    results: [
      { value: "30%", label: "Higher Conversions" },
      { value: "90%", label: "Cost Savings" },
      { value: "100%", label: "Catalog Coverage" },
      { value: "Same Day", label: "Video Turnaround" }
    ],
    testimonial: {
      quote: "We had 500 products with photos and only 20 with video. After Hyreel, all 500 have professional videos. Our overall conversion rate increased 24%.",
      author: "Sarah M.",
      role: "Shopify Store Owner"
    },
    faqs: [
      {
        question: "What quality product photos do I need?",
        answer: "Standard e-commerce photography works great — clear, well-lit photos on clean backgrounds. Even good smartphone photos can create professional videos."
      },
      {
        question: "Which e-commerce platforms accept these videos?",
        answer: "All major platforms: Amazon, Shopify, Etsy, eBay, WooCommerce, and social shopping on TikTok, Instagram, and Pinterest."
      },
      {
        question: "Can I batch process my entire catalog?",
        answer: "Yes! Upload multiple product photos and create videos for your entire catalog efficiently. Business plan users get priority batch processing."
      },
      {
        question: "Do product videos really increase sales?",
        answer: "Research consistently shows 20-30% higher conversion rates for listings with video. Product video is one of the highest-ROI marketing investments."
      }
    ],
    relatedTools: ["ai-product-video-maker", "ai-ecommerce-video-creator", "ai-zoom-video-effect", "ai-orbit-video-effect"],
    ctaText: "Transform Your Photos Free"
  },
  {
    slug: "scale-video-production",
    name: "Scale Video Production",
    icon: "📈",
    metaTitle: "Scale Video Production Without Hiring | Hyreel AI Video Generator",
    metaDescription: "10x your video output without 10x the team. AI video generator that scales content production for agencies, teams, and high-volume creators.",
    heroHeadline: "Scale Video Production Without Scaling Costs",
    heroSubheadline: "Produce 10x more video content with the same team. AI-powered video creation that grows with your needs.",
    description: "Hyreel enables high-volume video production without proportionally increasing team size or costs.",
    problem: {
      title: "Scaling Video is Expensive",
      description: "As video demands grow, the traditional solution is hiring more editors — but that means more salaries, more management, and linear cost increases.",
      points: [
        "More content demand = more hires",
        "Video team costs scale linearly",
        "Training new editors takes time",
        "Quality varies between team members",
        "Bottlenecks when demand spikes"
      ]
    },
    solution: {
      title: "Scale Without Hiring",
      description: "Hyreel lets you 10x video output without 10x the team. AI handles the production work, letting your existing team focus on strategy and creativity.",
      points: [
        "Same team, 10x output",
        "Consistent quality at any volume",
        "No training for new hires",
        "Handle demand spikes instantly",
        "Costs don't scale linearly with content"
      ]
    },
    benefits: [
      {
        icon: "🚀",
        title: "10x Output",
        description: "Produce dramatically more content without adding headcount."
      },
      {
        icon: "💵",
        title: "Break Linear Scaling",
        description: "Costs stay flat while production volume grows."
      },
      {
        icon: "✅",
        title: "Consistent Quality",
        description: "Same professional results whether you create 10 or 1,000 videos."
      },
      {
        icon: "⚡",
        title: "Instant Capacity",
        description: "Scale up for campaigns or demand spikes immediately."
      }
    ],
    howItWorks: [
      { step: 1, title: "Batch Upload Content", description: "Upload all source photos at once" },
      { step: 2, title: "Apply Effects at Scale", description: "Set effects for batches of content" },
      { step: 3, title: "AI Generates in Parallel", description: "Multiple videos created simultaneously" },
      { step: 4, title: "Export and Deploy", description: "Download all videos for distribution" }
    ],
    results: [
      { value: "10x", label: "More Output" },
      { value: "Same", label: "Team Size" },
      { value: "Flat", label: "Cost Structure" },
      { value: "Instant", label: "Scale Up" }
    ],
    testimonial: {
      quote: "Our 3-person content team now produces more video than companies with 10+ editors. Hyreel didn't replace our team — it made them 10x more powerful.",
      author: "Jennifer K.",
      role: "Head of Content"
    },
    faqs: [
      {
        question: "How much can I actually scale?",
        answer: "There's no practical limit. Create hundreds or thousands of videos per month. The only constraint is your source content and creative direction."
      },
      {
        question: "Will quality drop at high volume?",
        answer: "No. AI applies the same professional effects whether you create 1 video or 1,000. Quality is consistent regardless of volume."
      },
      {
        question: "How does this affect my team?",
        answer: "Your team shifts from tedious editing to strategic work: content planning, creative direction, and performance optimization."
      },
      {
        question: "What about enterprise needs?",
        answer: "Business plan includes team collaboration, priority processing, and features designed for high-volume production."
      }
    ],
    relatedTools: ["ai-social-media-video-maker", "ai-product-video-maker", "image-to-video-ai", "ai-faceless-video-generator"],
    ctaText: "Start Scaling Free"
  }
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((solution) => solution.slug);
}
