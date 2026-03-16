export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  icon: string;
  category: string;
  howItWorks: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  benefits: string[];
  useCases: string[];
  pricing: {
    free: string;
    creator: string;
    business: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const tools: Tool[] = [
  {
    slug: "ai-script-generator",
    name: "AI Script Generator",
    tagline: "Generate engaging video scripts in seconds",
    description: "Transform your ideas into compelling video scripts using advanced AI. Perfect for TikTok, YouTube Shorts, Instagram Reels, and more.",
    detailedDescription: "Our AI Script Generator revolutionizes content creation by transforming simple ideas into professional, engaging video scripts instantly. Whether you're creating short-form content for TikTok and Instagram Reels or long-form videos for YouTube, our advanced AI understands your topic, audience, and style preferences to craft scripts that capture attention and drive engagement. With support for 32 languages and multiple content formats, you can create scripts optimized for any platform or niche. Say goodbye to writer's block and spend more time creating amazing videos.",
    icon: "✍️",
    category: "Content Creation",
    howItWorks: [
      {
        step: "1",
        title: "Enter Your Topic",
        description: "Tell our AI what your video is about. Just a few words or a detailed brief—whatever works for you."
      },
      {
        step: "2",
        title: "Choose Your Style",
        description: "Select the tone, length, and format. Casual, professional, educational, or entertaining—you decide."
      },
      {
        step: "3",
        title: "Generate & Refine",
        description: "Get your script instantly. Edit, regenerate sections, or use it as-is. Full creative control."
      },
      {
        step: "4",
        title: "Create Your Video",
        description: "Use the script with our AI voice, avatars, and video editor to create your complete video."
      }
    ],
    features: [
      {
        icon: "🎯",
        title: "Multiple Formats",
        description: "Scripts optimized for TikTok, YouTube, Instagram, and more"
      },
      {
        icon: "🎨",
        title: "Customizable Tone",
        description: "Professional, casual, funny, educational—over 20 writing styles"
      },
      {
        icon: "⚡",
        title: "Instant Generation",
        description: "Get complete scripts in under 10 seconds"
      },
      {
        icon: "🔄",
        title: "Unlimited Revisions",
        description: "Regenerate sections or entire scripts until it's perfect"
      },
      {
        icon: "📏",
        title: "Length Control",
        description: "15-second clips to 10-minute videos—any length you need"
      },
      {
        icon: "🌍",
        title: "32 Languages",
        description: "Generate scripts in any of our supported languages"
      }
    ],
    benefits: [
      "Save hours of writing time",
      "Never face writer's block again",
      "Optimized for engagement and retention",
      "SEO-friendly titles and hooks",
      "Consistent quality across all videos"
    ],
    useCases: [
      "Product reviews and unboxing",
      "Educational content and tutorials",
      "Entertainment and comedy skits",
      "Marketing and promotional videos",
      "News and commentary videos"
    ],
    pricing: {
      free: "10 scripts per month",
      creator: "Unlimited scripts",
      business: "Unlimited + custom brand voice"
    },
    faqs: [
      {
        question: "How long are the generated scripts?",
        answer: "You control the length. Scripts can range from 15-second short-form content to 10+ minute long-form videos. Just specify your desired duration."
      },
      {
        question: "Can I edit the generated scripts?",
        answer: "Absolutely! You can edit every word, regenerate specific sections, or use the script as inspiration. Full creative control is yours."
      },
      {
        question: "What video formats are supported?",
        answer: "Our scripts are optimized for TikTok (9:16), YouTube Shorts (9:16), Instagram Reels (9:16), YouTube videos (16:9), and custom formats."
      },
      {
        question: "Does it work in languages other than English?",
        answer: "Yes! We support 32 languages including Spanish, French, German, Chinese, Japanese, Arabic, and more."
      }
    ]
  },
  {
    slug: "ai-voice-generator",
    name: "AI Voice Generator",
    tagline: "Professional voiceovers in 50+ AI voices",
    description: "Create natural-sounding voiceovers for your videos using advanced AI voices. No recording equipment needed.",
    detailedDescription: "Experience studio-quality voiceovers without expensive recording equipment or voice actors. Our AI Voice Generator uses cutting-edge neural voice technology to create incredibly realistic voiceovers in over 50 unique voices across 32 languages. Whether you need a professional narrator, an energetic presenter, or a warm conversational tone, our diverse voice library has you covered. Customize speed, pitch, pauses, and emotional delivery to match your content perfectly. From YouTube videos and TikTok content to e-learning courses and audiobooks, create professional audio that sounds authentically human—in seconds, not hours.",
    icon: "🎙️",
    category: "Audio",
    howItWorks: [
      {
        step: "1",
        title: "Input Your Script",
        description: "Paste your script or use our AI Script Generator to create one automatically."
      },
      {
        step: "2",
        title: "Choose a Voice",
        description: "Browse 50+ AI voices in different genders, ages, and accents. Preview before selecting."
      },
      {
        step: "3",
        title: "Customize Settings",
        description: "Adjust speed, pitch, and emphasis. Add pauses and emotional tone for natural delivery."
      },
      {
        step: "4",
        title: "Generate & Download",
        description: "Get your high-quality voiceover instantly. Use it in your video or download separately."
      }
    ],
    features: [
      {
        icon: "🎭",
        title: "50+ AI Voices",
        description: "Male, female, young, mature—voices for every type of content"
      },
      {
        icon: "🌍",
        title: "32 Languages",
        description: "Native-sounding voices in multiple languages and accents"
      },
      {
        icon: "🎚️",
        title: "Voice Customization",
        description: "Control speed, pitch, pauses, and emotional tone"
      },
      {
        icon: "⚡",
        title: "Instant Generation",
        description: "Get voiceovers in seconds, not hours"
      },
      {
        icon: "🎵",
        title: "Background Music",
        description: "Add AI-generated music that perfectly matches your voice"
      },
      {
        icon: "💾",
        title: "High Quality Audio",
        description: "Crystal-clear 48kHz audio quality for professional results"
      }
    ],
    benefits: [
      "No expensive recording equipment needed",
      "Record in any language without hiring voice actors",
      "Consistent quality across all videos",
      "Unlimited takes and revisions",
      "Professional sound in minutes"
    ],
    useCases: [
      "YouTube videos and narration",
      "TikTok and short-form content",
      "E-learning and training videos",
      "Audiobooks and podcasts",
      "Product demos and explainers"
    ],
    pricing: {
      free: "5 minutes of voice per month",
      creator: "Unlimited voice generation",
      business: "Unlimited + voice cloning"
    },
    faqs: [
      {
        question: "How realistic are the AI voices?",
        answer: "Our AI voices use the latest neural voice technology. Most listeners can't tell the difference from human voices. Preview them yourself to hear the quality."
      },
      {
        question: "Can I use my own voice?",
        answer: "Yes! Business plan includes voice cloning technology where we create an AI version of your voice from a short sample."
      },
      {
        question: "What languages are supported?",
        answer: "We support 32 languages with native-sounding accents including English, Spanish, French, German, Chinese, Japanese, Arabic, Hindi, and more."
      },
      {
        question: "Can I adjust the voice after generation?",
        answer: "Absolutely! You can adjust speed, pitch, add pauses, change emphasis, or regenerate specific sentences until it's perfect."
      }
    ]
  },
  {
    slug: "ai-avatar-creator",
    name: "AI Avatar Creator",
    tagline: "Create realistic AI avatars for your videos",
    description: "Generate photorealistic AI avatars that speak your script. No filming, no camera needed—just select an avatar and bring your content to life.",
    detailedDescription: "Create professional video content without ever stepping in front of a camera. Our AI Avatar Creator generates photorealistic digital presenters that speak your script with natural movements, expressions, and perfect lip synchronization in 32 languages. Choose from over 100 diverse avatars or create a custom branded avatar that represents your business. Perfect for educational content, product demos, corporate training, news updates, and social media videos. With customizable backgrounds, gestures, and appearances, you can maintain a consistent on-camera presence across all your videos while saving time and resources. No filming equipment, no scheduling—just professional video content on demand.",
    icon: "🎭",
    category: "Visual",
    howItWorks: [
      {
        step: "1",
        title: "Choose an Avatar",
        description: "Browse 100+ diverse AI avatars or create a custom avatar that matches your brand."
      },
      {
        step: "2",
        title: "Add Your Script",
        description: "Input your script or use our AI to generate one. The avatar will speak it naturally."
      },
      {
        step: "3",
        title: "Customize Appearance",
        description: "Adjust background, lighting, clothing, and gestures to match your video style."
      },
      {
        step: "4",
        title: "Generate Your Video",
        description: "Watch your avatar come to life. Edit, regenerate, or combine with other content."
      }
    ],
    features: [
      {
        icon: "👥",
        title: "100+ Avatars",
        description: "Diverse selection of ages, ethnicities, and professional styles"
      },
      {
        icon: "🎨",
        title: "Custom Avatars",
        description: "Create branded avatars that represent your business"
      },
      {
        icon: "💬",
        title: "Natural Lip Sync",
        description: "Perfect lip synchronization in 32 languages"
      },
      {
        icon: "🎬",
        title: "Multiple Gestures",
        description: "Natural hand movements and expressions"
      },
      {
        icon: "🌈",
        title: "Custom Backgrounds",
        description: "Green screen or choose from 1000+ backgrounds"
      },
      {
        icon: "⚡",
        title: "Fast Rendering",
        description: "High-quality avatar videos in minutes"
      }
    ],
    benefits: [
      "No camera or filming equipment needed",
      "Consistent on-camera presence",
      "Create videos without showing your face",
      "Professional appearance every time",
      "Multiple avatars for different content types"
    ],
    useCases: [
      "Educational content and courses",
      "Product demonstrations",
      "News and updates",
      "Corporate training videos",
      "Social media content"
    ],
    pricing: {
      free: "Limited avatar access, watermark",
      creator: "All avatars, no watermark",
      business: "Custom branded avatars"
    },
    faqs: [
      {
        question: "How realistic are the AI avatars?",
        answer: "Our avatars use photorealistic rendering with natural movements, expressions, and perfect lip sync. Many viewers can't distinguish them from real people."
      },
      {
        question: "Can I create my own avatar?",
        answer: "Yes! Business plan includes custom avatar creation where we can create an AI avatar based on photos or match your brand identity."
      },
      {
        question: "Do the avatars speak multiple languages?",
        answer: "Absolutely! All avatars can speak in any of our 32 supported languages with perfect lip sync and natural pronunciation."
      },
      {
        question: "Can I use different backgrounds?",
        answer: "Yes! You can use green screen for custom backgrounds, or choose from our library of 1000+ professional backgrounds and settings."
      }
    ]
  },
  {
    slug: "image-to-video-ai",
    name: "Image to Video AI",
    tagline: "Transform any photo into stunning AI video in seconds",
    description: "Turn your photos into professional AI-generated videos with cinematic motion effects. Create viral TikTok, Instagram Reels, and YouTube Shorts from a single image.",
    detailedDescription: "Transform still images into captivating videos with Sorovi's powerful Image to Video AI technology. Our advanced AI analyzes your photos and creates smooth, professional-quality videos with realistic camera movements including zoom, orbit, follow, and 3D parallax effects. Perfect for content creators, e-commerce sellers, social media marketers, and anyone who wants to bring their photos to life. No video editing skills required—just upload your image and watch our AI create magic. Sorovi's iOS app makes it easy to create viral content for TikTok, Instagram Reels, and YouTube Shorts directly from your phone. Join over 500,000 creators who trust Sorovi to transform their images into scroll-stopping videos.",
    icon: "🎬",
    category: "Video Generation",
    howItWorks: [
      {
        step: "1",
        title: "Upload Your Image",
        description: "Choose any photo from your camera roll, gallery, or take a new one. Product shots, portraits, landscapes—any image works."
      },
      {
        step: "2",
        title: "Select Motion Effect",
        description: "Pick from AI-powered effects: Zoom In/Out, Orbit 360°, Follow Subject, 3D Parallax, Dolly Zoom, and more."
      },
      {
        step: "3",
        title: "Customize Duration & Style",
        description: "Set video length (2-30 seconds), adjust motion speed, add music, and fine-tune the AI generation settings."
      },
      {
        step: "4",
        title: "Generate & Share",
        description: "AI generates your video in seconds. Export directly to TikTok, Instagram, YouTube, or save to your device."
      }
    ],
    features: [
      {
        icon: "🔄",
        title: "AI Zoom Effect",
        description: "Smooth cinematic zoom in/out that adds depth and focus to any image"
      },
      {
        icon: "🌀",
        title: "360° Orbit Motion",
        description: "Stunning orbital camera movement around your subject for dynamic videos"
      },
      {
        icon: "🎯",
        title: "Follow Subject AI",
        description: "AI tracks and follows the main subject with natural camera movements"
      },
      {
        icon: "📦",
        title: "3D Parallax Effect",
        description: "Creates realistic depth and dimension from flat 2D images"
      },
      {
        icon: "⚡",
        title: "Instant Generation",
        description: "Get your AI video in under 10 seconds—no waiting, no rendering delays"
      },
      {
        icon: "📱",
        title: "Mobile-First iOS App",
        description: "Create and share videos directly from your iPhone—optimized for creators on the go"
      }
    ],
    benefits: [
      "No video editing skills required",
      "Create viral content from a single photo",
      "Save hours compared to manual video editing",
      "Professional cinematic quality every time",
      "Optimized for TikTok, Reels, and Shorts",
      "Works with any image type—products, portraits, landscapes"
    ],
    useCases: [
      "E-commerce product videos for Amazon, Shopify, Etsy",
      "TikTok and Instagram Reels content creation",
      "Real estate property showcases",
      "Fashion and beauty brand marketing",
      "Travel and lifestyle content",
      "Before/after transformation videos"
    ],
    pricing: {
      free: "5 videos per day, watermark",
      creator: "Unlimited videos, no watermark",
      business: "Unlimited + commercial license"
    },
    faqs: [
      {
        question: "How does image to video AI work?",
        answer: "Our AI analyzes your image to understand depth, subjects, and composition. It then generates realistic camera movements and motion effects, creating smooth video transitions that bring your photo to life. The process takes just seconds."
      },
      {
        question: "What types of images work best for AI video generation?",
        answer: "Sorovi works with any image, but best results come from high-resolution photos with clear subjects. Product photos, portraits, landscapes, and food photography all produce stunning results. Images with 3D depth elements create especially impressive parallax effects."
      },
      {
        question: "Can I create videos for commercial use?",
        answer: "Yes! Creator and Business plans include full commercial rights to use your AI-generated videos for marketing, advertising, e-commerce listings, and any business purpose."
      },
      {
        question: "How long can AI-generated videos be?",
        answer: "Videos can be 2 to 30 seconds long. For social media, we recommend 5-15 seconds for optimal engagement. You can also loop videos seamlessly for longer content."
      },
      {
        question: "Is there a free version of Image to Video AI?",
        answer: "Yes! Sorovi offers 5 free AI videos per day. Free videos include a small watermark. Upgrade to Creator plan for unlimited videos without watermarks."
      },
      {
        question: "What motion effects are available?",
        answer: "Sorovi offers multiple AI motion effects: Zoom In/Out, Orbit 360°, Follow Subject, 3D Parallax, Dolly Zoom, Pan, Tilt, and custom combinations. Each effect can be customized for speed and intensity."
      },
      {
        question: "Can I add music to my AI videos?",
        answer: "Absolutely! Sorovi includes a library of royalty-free music tracks, or you can add your own audio. Music is automatically synced to your video's motion for professional results."
      },
      {
        question: "Is Sorovi available on Android?",
        answer: "Sorovi is currently available for iOS (iPhone and iPad). Android version is in development—join our waitlist to be notified when it launches."
      }
    ]
  },
  {
    slug: "ai-tiktok-video-generator",
    name: "AI TikTok Video Generator",
    tagline: "Create viral TikTok videos from photos instantly",
    description: "Transform your images into TikTok-ready AI videos with trending effects, perfect 9:16 format, and viral-optimized motion. No editing skills needed.",
    detailedDescription: "Sorovi's AI TikTok Video Generator is built specifically for creators who want to dominate the For You Page. Our AI understands what makes TikTok content go viral—dynamic motion, eye-catching effects, and perfect pacing. Upload any photo and watch it transform into a scroll-stopping video optimized for the TikTok algorithm. Whether you're showcasing products, creating lifestyle content, or building your personal brand, Sorovi helps you create professional TikTok videos in seconds, not hours. Join thousands of creators who've gained millions of views using Sorovi's AI-powered video generation.",
    icon: "📱",
    category: "Social Media",
    howItWorks: [
      {
        step: "1",
        title: "Upload Your Photo",
        description: "Choose any image—product shot, selfie, or creative photo. Our AI optimizes it for TikTok's 9:16 format automatically."
      },
      {
        step: "2",
        title: "Choose Viral Effect",
        description: "Select from TikTok-trending effects: Zoom reveal, Orbit showcase, Follow cam, 3D pop-out, and more viral-proven animations."
      },
      {
        step: "3",
        title: "Add Music & Captions",
        description: "Pick trending sounds or add your own audio. Include text overlays and captions for maximum engagement."
      },
      {
        step: "4",
        title: "Export to TikTok",
        description: "One-tap export directly to TikTok app. Perfect format, perfect quality, ready for the FYP."
      }
    ],
    features: [
      {
        icon: "🔥",
        title: "Viral-Optimized Effects",
        description: "AI effects proven to boost engagement and FYP placement"
      },
      {
        icon: "📐",
        title: "Perfect 9:16 Format",
        description: "Auto-crop and optimize for TikTok's vertical video format"
      },
      {
        icon: "🎵",
        title: "Trending Sound Integration",
        description: "Access to viral sounds and music synced to your video"
      },
      {
        icon: "⚡",
        title: "10-Second Generation",
        description: "Create TikTok-ready videos faster than editing apps"
      },
      {
        icon: "📤",
        title: "One-Tap TikTok Export",
        description: "Share directly to TikTok without leaving Sorovi"
      },
      {
        icon: "💬",
        title: "Auto Captions",
        description: "Add engaging text overlays and captions automatically"
      }
    ],
    benefits: [
      "Create content faster than your competition",
      "No video editing experience required",
      "Effects optimized for algorithm engagement",
      "Consistent posting schedule made easy",
      "Professional quality from any photo"
    ],
    useCases: [
      "Product showcase videos",
      "Before/after transformations",
      "Lifestyle and aesthetic content",
      "Small business marketing",
      "Personal brand building",
      "Trend participation videos"
    ],
    pricing: {
      free: "5 TikTok videos per day",
      creator: "Unlimited videos, all effects",
      business: "Unlimited + analytics, scheduling"
    },
    faqs: [
      {
        question: "Is Sorovi better than CapCut for TikTok videos?",
        answer: "Sorovi is designed specifically for turning photos into videos, while CapCut is a general editor. If you want to create dynamic videos from still images with AI motion effects, Sorovi produces better results faster. Many creators use both tools together."
      },
      {
        question: "What makes a TikTok video go viral?",
        answer: "Viral TikToks typically have strong hooks in the first 1-2 seconds, dynamic motion, trending sounds, and emotional engagement. Sorovi's AI effects are designed to create attention-grabbing motion that keeps viewers watching."
      },
      {
        question: "Can I use trending TikTok sounds?",
        answer: "You can add any audio after exporting to TikTok. Sorovi also includes royalty-free music that's safe for monetization. For trending sounds, add them directly in TikTok after importing your video."
      },
      {
        question: "How often should I post on TikTok?",
        answer: "Most successful creators post 1-3 times daily. With Sorovi, you can create a day's worth of content in minutes, making consistent posting achievable even with a busy schedule."
      },
      {
        question: "Does Sorovi add a watermark to TikTok videos?",
        answer: "Free plan includes a small Sorovi watermark. Creator and Business plans remove all watermarks for professional, clean videos."
      },
      {
        question: "Can I create product videos for TikTok Shop?",
        answer: "Absolutely! Sorovi is perfect for TikTok Shop sellers. Create professional product videos that showcase your items with cinematic motion effects. Business plan includes commercial usage rights."
      }
    ]
  },
  {
    slug: "ai-instagram-reels-maker",
    name: "AI Instagram Reels Maker",
    tagline: "Create stunning Reels from photos with AI motion",
    description: "Transform your Instagram photos into eye-catching Reels with AI-powered motion effects. Professional quality, Reels-optimized format, instant creation.",
    detailedDescription: "Stand out in the Instagram Reels feed with Sorovi's AI-powered video creation. Our intelligent algorithms transform your best photos into dynamic, scroll-stopping Reels with cinematic motion effects. Whether you're an influencer, brand, or casual creator, Sorovi helps you create professional Reels content without expensive equipment or editing software. The AI automatically optimizes for Instagram's algorithm—perfect aspect ratio, engaging motion, and attention-grabbing effects that boost engagement and reach. Create a week's worth of Reels content in minutes.",
    icon: "📸",
    category: "Social Media",
    howItWorks: [
      {
        step: "1",
        title: "Select Your Best Photo",
        description: "Choose any high-quality image. Products, portraits, travel shots—Sorovi makes them all Reels-ready."
      },
      {
        step: "2",
        title: "Apply AI Motion Effect",
        description: "Choose from Instagram-optimized effects: Elegant zoom, Smooth orbit, Dynamic follow, Parallax depth."
      },
      {
        step: "3",
        title: "Customize & Brand",
        description: "Add your brand colors, text overlays, and choose from curated Instagram-friendly music."
      },
      {
        step: "4",
        title: "Share to Instagram",
        description: "Export in perfect Reels format (9:16). Post directly or schedule for later."
      }
    ],
    features: [
      {
        icon: "✨",
        title: "Instagram-Optimized",
        description: "Effects and formats designed specifically for Reels algorithm"
      },
      {
        icon: "🎨",
        title: "Aesthetic Presets",
        description: "Beautiful color grades and styles matching Instagram aesthetics"
      },
      {
        icon: "📊",
        title: "Engagement-Boosting Motion",
        description: "AI motion patterns proven to increase watch time and shares"
      },
      {
        icon: "🔗",
        title: "Direct Instagram Share",
        description: "One-tap sharing to Instagram Reels and Stories"
      },
      {
        icon: "📝",
        title: "Text & Caption Tools",
        description: "Add stylish text overlays that match your brand"
      },
      {
        icon: "🎵",
        title: "Instagram Music Library",
        description: "Access Instagram-safe music and trending audio"
      }
    ],
    benefits: [
      "Create Reels faster than native Instagram tools",
      "Consistent aesthetic across all content",
      "Boost engagement with dynamic motion",
      "No video editing skills needed",
      "Professional influencer-quality results"
    ],
    useCases: [
      "Influencer content creation",
      "Brand and business marketing",
      "Product launches and reveals",
      "Portfolio showcases",
      "Travel and lifestyle content",
      "Fashion and beauty reveals"
    ],
    pricing: {
      free: "5 Reels per day, watermark",
      creator: "Unlimited Reels, no watermark",
      business: "Unlimited + brand kit, analytics"
    },
    faqs: [
      {
        question: "What's the best video length for Instagram Reels?",
        answer: "Instagram Reels perform best between 7-15 seconds for maximum engagement. Sorovi lets you create videos from 3-60 seconds, but we recommend keeping Reels short and impactful for best results."
      },
      {
        question: "Can I use Sorovi videos for Instagram Stories too?",
        answer: "Yes! Sorovi videos are perfect for both Reels and Stories. The 9:16 format works for both, and you can easily share to either format directly from the app."
      },
      {
        question: "How do I get more views on Instagram Reels?",
        answer: "Key factors include posting when your audience is active, using trending audio, creating hooks in the first second, and having dynamic motion that keeps viewers watching. Sorovi's AI effects are designed to maximize watch time."
      },
      {
        question: "Does Sorovi work with Instagram's music library?",
        answer: "After exporting your Sorovi video to Instagram, you can add any music from Instagram's library. Sorovi also includes royalty-free music if you prefer to add audio before posting."
      },
      {
        question: "Can I create carousel Reels?",
        answer: "Sorovi creates single video Reels. For multi-image content, create separate videos from each image and combine them in Instagram or use our built-in merge feature."
      },
      {
        question: "Is there a difference between Reels and TikTok video optimization?",
        answer: "While both use 9:16 format, Sorovi optimizes effects slightly differently for each platform based on what performs best. Instagram favors slightly more polished, aesthetic content while TikTok rewards raw energy. Our AI adapts accordingly."
      }
    ]
  },
  {
    slug: "ai-youtube-shorts-generator",
    name: "AI YouTube Shorts Generator",
    tagline: "Create YouTube Shorts from images with AI",
    description: "Turn photos into engaging YouTube Shorts with AI-powered motion effects. Perfect format, high quality, optimized for YouTube's algorithm.",
    detailedDescription: "Tap into YouTube's fastest-growing format with Sorovi's AI Shorts Generator. Transform any image into a captivating Short video that captures viewer attention and drives channel growth. Our AI creates smooth, professional motion effects that keep viewers watching—crucial for YouTube's watch-time algorithm. Whether you're growing a new channel or adding Shorts to your content mix, Sorovi helps you create more content faster without sacrificing quality. Perfect for product showcases, tutorials, reactions, and any content that starts with a compelling image.",
    icon: "▶️",
    category: "Social Media",
    howItWorks: [
      {
        step: "1",
        title: "Upload Any Image",
        description: "Start with a photo that tells your story. Thumbnails, product shots, or any compelling image works."
      },
      {
        step: "2",
        title: "Add AI Motion",
        description: "Choose cinematic motion effects that bring your image to life and hold viewer attention."
      },
      {
        step: "3",
        title: "Optimize for YouTube",
        description: "Add titles, subscribe prompts, and optimize for YouTube's Shorts algorithm."
      },
      {
        step: "4",
        title: "Upload to YouTube",
        description: "Export in YouTube-perfect quality and format. Upload directly from your device."
      }
    ],
    features: [
      {
        icon: "📺",
        title: "YouTube-Optimized Quality",
        description: "1080p export quality perfect for YouTube's standards"
      },
      {
        icon: "⏱️",
        title: "60-Second Ready",
        description: "Create Shorts up to 60 seconds with perfect pacing"
      },
      {
        icon: "🔔",
        title: "Subscribe CTA Tools",
        description: "Add subscribe prompts and channel branding"
      },
      {
        icon: "📈",
        title: "Algorithm-Friendly Motion",
        description: "Effects designed to maximize watch time and retention"
      },
      {
        icon: "🎬",
        title: "Cinematic Effects",
        description: "Professional camera movements that look studio-produced"
      },
      {
        icon: "💾",
        title: "High-Quality Export",
        description: "No compression artifacts—YouTube-ready files"
      }
    ],
    benefits: [
      "Grow your YouTube channel with consistent Shorts",
      "Create more content with less effort",
      "Professional quality without expensive equipment",
      "Repurpose existing images as video content",
      "Optimized for YouTube's recommendation algorithm"
    ],
    useCases: [
      "Channel growth and subscriber building",
      "Product reviews and unboxings",
      "Educational and tutorial content",
      "Gaming and entertainment clips",
      "News and commentary",
      "Lifestyle and vlog content"
    ],
    pricing: {
      free: "5 Shorts per day",
      creator: "Unlimited Shorts, 4K export",
      business: "Unlimited + channel branding"
    },
    faqs: [
      {
        question: "What's the best length for YouTube Shorts?",
        answer: "YouTube Shorts can be up to 60 seconds. For optimal engagement, we recommend 15-30 seconds for most content. Sorovi lets you create any length from 3-60 seconds."
      },
      {
        question: "Do YouTube Shorts help channel growth?",
        answer: "Yes! Shorts are YouTube's fastest-growing format and can significantly boost subscriber counts. Many channels have gained thousands of subscribers from Shorts content reaching new audiences."
      },
      {
        question: "Can I monetize Shorts made with Sorovi?",
        answer: "Absolutely! Videos created with Sorovi Creator and Business plans are fully monetizable on YouTube. You own the content and all monetization rights."
      },
      {
        question: "What resolution should YouTube Shorts be?",
        answer: "YouTube recommends 1080x1920 (9:16 vertical) for Shorts. Sorovi exports in this exact format at full 1080p quality for optimal playback."
      },
      {
        question: "Can I add voiceover to my Shorts?",
        answer: "Yes! Use Sorovi's AI Voice Generator to add professional voiceovers to your Shorts. You can also record and add your own voice after exporting."
      },
      {
        question: "How is Sorovi different from YouTube's built-in Shorts editor?",
        answer: "YouTube's editor is basic—cut, crop, add music. Sorovi transforms static images into dynamic videos with AI motion effects that aren't possible in the YouTube app. Create cinematic content from any photo."
      }
    ]
  },
  {
    slug: "ai-zoom-video-effect",
    name: "AI Zoom Video Effect",
    tagline: "Cinematic zoom effects powered by AI",
    description: "Create stunning zoom in and zoom out videos from any photo with AI. Smooth, cinematic camera movements that bring your images to life.",
    detailedDescription: "Add Hollywood-style zoom effects to your photos with Sorovi's AI Zoom Video Effect. Our advanced AI creates incredibly smooth, natural-looking zoom movements that transform static images into dynamic video content. Unlike basic ken burns effects, Sorovi's AI understands depth, subjects, and composition to create intelligent zoom paths that focus on what matters most in your image. Perfect for product reveals, dramatic intros, focus transitions, and creating that cinematic feeling that makes content stand out. Whether you're zooming in to highlight details or zooming out for the big reveal, Sorovi delivers professional results instantly.",
    icon: "🔍",
    category: "Effects",
    howItWorks: [
      {
        step: "1",
        title: "Upload Your Photo",
        description: "Choose any image. AI analyzes composition, depth, and focal points automatically."
      },
      {
        step: "2",
        title: "Choose Zoom Style",
        description: "Select Zoom In, Zoom Out, or Dolly Zoom. AI suggests optimal start and end points."
      },
      {
        step: "3",
        title: "Adjust Parameters",
        description: "Fine-tune zoom speed, duration, and focal area. Preview in real-time."
      },
      {
        step: "4",
        title: "Generate & Export",
        description: "AI generates smooth zoom video in seconds. Export to any platform."
      }
    ],
    features: [
      {
        icon: "🎯",
        title: "Smart Focal Detection",
        description: "AI automatically identifies the best focal points in your image"
      },
      {
        icon: "🎬",
        title: "Cinematic Smoothness",
        description: "Butter-smooth zoom curves that look professionally filmed"
      },
      {
        icon: "⚙️",
        title: "Customizable Speed",
        description: "Control zoom speed from slow dramatic to fast reveal"
      },
      {
        icon: "🔄",
        title: "Zoom In/Out Options",
        description: "Choose direction and create compound zoom effects"
      },
      {
        icon: "📐",
        title: "Depth-Aware Processing",
        description: "AI understands 3D depth for realistic zoom perspective"
      },
      {
        icon: "⚡",
        title: "Instant Preview",
        description: "See results before final render—adjust in real-time"
      }
    ],
    benefits: [
      "Create cinematic content from any photo",
      "No video equipment or gimbal needed",
      "Smooth, professional zoom movements",
      "Perfect for product reveals and intros",
      "Stand out with dynamic content"
    ],
    useCases: [
      "Product reveal videos",
      "Dramatic video intros",
      "Real estate property tours",
      "Art and photography showcases",
      "Social media content",
      "E-commerce product videos"
    ],
    pricing: {
      free: "5 zoom videos per day",
      creator: "Unlimited, all zoom styles",
      business: "Unlimited + batch processing"
    },
    faqs: [
      {
        question: "What's the difference between AI zoom and Ken Burns effect?",
        answer: "Traditional Ken Burns is simple linear movement. Sorovi's AI Zoom understands your image's depth and composition, creating intelligent zoom paths with natural acceleration curves and smart focal point detection. The result looks like professional camera movement, not a basic digital effect."
      },
      {
        question: "Can I control where the zoom focuses?",
        answer: "Yes! While AI automatically detects focal points, you can manually adjust the start and end positions of your zoom. Drag to set exactly where the zoom begins and ends."
      },
      {
        question: "What is Dolly Zoom effect?",
        answer: "Dolly Zoom (also called Vertigo effect) simultaneously zooms in while moving backward (or vice versa). It creates a dramatic perspective shift often used in films. Sorovi's AI can simulate this effect from a single photo."
      },
      {
        question: "How long can zoom videos be?",
        answer: "Zoom effect videos can be 2-30 seconds. For social media, 3-8 seconds usually works best. Longer zooms work great for cinematic intros or when you want a slow, dramatic reveal."
      },
      {
        question: "Can I combine zoom with other effects?",
        answer: "Absolutely! Combine zoom with orbit, parallax, or follow effects for complex, cinematic camera movements that make your content truly unique."
      },
      {
        question: "Does the zoom quality degrade on close-ups?",
        answer: "Sorovi's AI uses super-resolution technology to maintain quality during extreme zooms. Start with high-resolution images for best results, but even standard photos produce great zoom videos."
      }
    ]
  },
  {
    slug: "ai-orbit-video-effect",
    name: "AI Orbit Video Effect",
    tagline: "360° orbital camera motion from any photo",
    description: "Create stunning 360° orbit videos that rotate around your subject using AI. Transform flat images into dynamic 3D-like showcases.",
    detailedDescription: "Make your images come alive with Sorovi's revolutionary AI Orbit Video Effect. Our AI technology creates the illusion of a camera orbiting around your subject—from a single 2D photo. This effect, previously only achievable with expensive camera equipment and studio setups, is now available instantly from any image. Perfect for product showcases, portrait reveals, and creating that 'wow' factor that stops scrollers in their tracks. The AI intelligently separates foreground from background, creating realistic depth and perspective as the virtual camera moves around your subject. No 3D modeling required—just upload and watch the magic happen.",
    icon: "🌀",
    category: "Effects",
    howItWorks: [
      {
        step: "1",
        title: "Upload Your Image",
        description: "Choose a photo with a clear subject. Products, people, objects—AI handles all types."
      },
      {
        step: "2",
        title: "AI Analyzes Depth",
        description: "Our AI separates subject from background and calculates 3D depth for realistic orbit."
      },
      {
        step: "3",
        title: "Customize Orbit Path",
        description: "Choose orbit direction, angle, and speed. Preview the motion before rendering."
      },
      {
        step: "4",
        title: "Generate Video",
        description: "AI creates smooth orbital motion video. Export and share anywhere."
      }
    ],
    features: [
      {
        icon: "🔄",
        title: "360° Orbit Motion",
        description: "Full circular movement around your subject from any angle"
      },
      {
        icon: "🎭",
        title: "AI Subject Separation",
        description: "Intelligent foreground/background detection for realistic depth"
      },
      {
        icon: "🎚️",
        title: "Adjustable Orbit Path",
        description: "Control direction, angle, speed, and orbit radius"
      },
      {
        icon: "📐",
        title: "3D Depth Generation",
        description: "Creates realistic 3D perspective from 2D images"
      },
      {
        icon: "✨",
        title: "Parallax Background",
        description: "Background moves naturally as camera orbits"
      },
      {
        icon: "🔁",
        title: "Seamless Loop Option",
        description: "Create perfect loops for continuous playback"
      }
    ],
    benefits: [
      "Create 3D-style videos from 2D photos",
      "No expensive camera equipment needed",
      "Perfect for product showcases",
      "Unique effect that stands out",
      "Professional quality in seconds"
    ],
    useCases: [
      "E-commerce product 360° views",
      "Jewelry and watch showcases",
      "Art and collectible displays",
      "Portrait and headshot reveals",
      "Real estate interior tours",
      "Social media wow-factor content"
    ],
    pricing: {
      free: "3 orbit videos per day",
      creator: "Unlimited orbits, all angles",
      business: "Unlimited + batch processing"
    },
    faqs: [
      {
        question: "How does AI create orbit motion from a flat image?",
        answer: "Sorovi's AI uses depth estimation and subject segmentation to understand the 3D structure of your image. It then generates new perspectives as if a camera were moving around the scene, filling in details using AI generation. The result is convincing orbital motion from a single photo."
      },
      {
        question: "What images work best for orbit effect?",
        answer: "Images with a clear, distinct subject work best—products, portraits, objects. The AI needs to separate the subject from the background. Photos with busy, cluttered compositions may produce less dramatic results."
      },
      {
        question: "Can I do a full 360° rotation?",
        answer: "You can create orbits of any angle—subtle 10° movements to dramatic 180° sweeps. Full 360° is possible but works best with symmetric subjects like products. For most content, 30-90° orbits look most natural."
      },
      {
        question: "Does the background change during orbit?",
        answer: "Yes! The AI creates realistic parallax movement in the background as the camera orbits. This adds to the 3D illusion and makes the effect more convincing than simple rotation."
      },
      {
        question: "Can I use orbit effect for product videos?",
        answer: "Absolutely—this is one of the most popular use cases! E-commerce sellers use Sorovi's orbit effect to create dynamic product showcases that dramatically outperform static images."
      },
      {
        question: "Is orbit effect available on the free plan?",
        answer: "Yes! Free users get 3 orbit videos per day. Upgrade to Creator for unlimited orbit videos and access to all orbit angles and customization options."
      }
    ]
  },
  {
    slug: "ai-product-video-maker",
    name: "AI Product Video Maker",
    tagline: "Turn product photos into sales-driving videos",
    description: "Create professional product videos from still photos using AI. Perfect for Amazon, Shopify, Etsy, and e-commerce sellers who want to boost conversions.",
    detailedDescription: "Sorovi's AI Product Video Maker is the ultimate tool for e-commerce sellers who want to increase sales with compelling product videos. Upload any product photo and our AI instantly generates a polished, conversion-optimized video with cinematic motion, dynamic angles, and professional lighting effects. Whether you sell on Amazon, Shopify, Etsy, or your own store, product videos consistently outperform static images in click-through rates and conversions. Sorovi eliminates the need for expensive product videography sessions, studio rentals, and professional editing. Create videos that highlight product details, showcase features from multiple angles, and present your items in the best possible light. Batch-process your entire catalog in minutes instead of days, and keep your listings fresh with seasonal variations and A/B test versions. Trusted by over 50,000 e-commerce sellers worldwide.",
    icon: "🛒",
    category: "E-commerce",
    howItWorks: [
      {
        step: "1",
        title: "Upload Product Photos",
        description: "Upload one or more product images. Clean product-on-white backgrounds work great, but any photo will do."
      },
      {
        step: "2",
        title: "Select Video Style",
        description: "Choose from e-commerce optimized templates: Hero Showcase, Feature Highlight, Lifestyle Context, or 360° Spin."
      },
      {
        step: "3",
        title: "Customize for Your Store",
        description: "Add your brand logo, price callouts, feature badges, and choose platform-specific aspect ratios for Amazon, Shopify, or social ads."
      },
      {
        step: "4",
        title: "Export & List",
        description: "Download in marketplace-ready formats. Upload directly to your product listings or use in advertising campaigns."
      }
    ],
    features: [
      {
        icon: "📦",
        title: "Product-Focused AI",
        description: "AI trained specifically on product photography for optimal showcase results"
      },
      {
        icon: "🏪",
        title: "Marketplace Templates",
        description: "Pre-built templates optimized for Amazon, Shopify, Etsy, and eBay listings"
      },
      {
        icon: "🏷️",
        title: "Price & Feature Callouts",
        description: "Add dynamic text overlays highlighting price, features, and selling points"
      },
      {
        icon: "📐",
        title: "Multi-Format Export",
        description: "Export in square, landscape, or vertical formats for any marketplace or ad platform"
      },
      {
        icon: "⚡",
        title: "Batch Processing",
        description: "Process your entire product catalog at once—hundreds of videos in minutes"
      },
      {
        icon: "🔄",
        title: "A/B Test Variants",
        description: "Generate multiple video versions to test which converts best"
      }
    ],
    benefits: [
      "Increase product listing conversion rates by up to 80%",
      "Save thousands on professional product videography",
      "Create videos for your entire catalog in one session",
      "Stand out from competitors using only static images",
      "Boost ad performance with dynamic product creatives"
    ],
    useCases: [
      "Amazon product listing videos",
      "Shopify store product showcases",
      "Facebook and Instagram product ads",
      "Etsy listing enhancements",
      "Product launch announcements"
    ],
    pricing: {
      free: "3 product videos per day, watermark",
      creator: "Unlimited videos, no watermark",
      business: "Unlimited + batch processing, brand kit"
    },
    faqs: [
      {
        question: "Does product video really increase sales?",
        answer: "Yes. Studies consistently show that product listings with video see 20-80% higher conversion rates compared to static images alone. Video helps shoppers understand products better and builds trust in your brand."
      },
      {
        question: "What product photos work best?",
        answer: "High-resolution images with clean backgrounds work best, but Sorovi's AI can handle any product photo. We recommend at least one clear front-facing shot. Multiple angles help create richer videos with more dynamic motion."
      },
      {
        question: "Can I add text and branding to product videos?",
        answer: "Absolutely! Add your logo, brand colors, price tags, feature badges, sale banners, and custom text overlays. Business plan includes a full brand kit for consistent styling across all videos."
      },
      {
        question: "What video formats do Amazon and Shopify support?",
        answer: "Sorovi exports in all marketplace-compatible formats. Amazon accepts MP4 up to 500MB in 16:9 or 1:1. Shopify supports any format. We auto-optimize resolution and file size for each platform."
      }
    ]
  },
  {
    slug: "ai-video-from-image",
    name: "AI Video from Image",
    tagline: "Generate AI video from any image instantly",
    description: "Create stunning AI-generated videos from your photos. Advanced neural networks transform still images into fluid, natural-looking video clips with realistic motion.",
    detailedDescription: "Sorovi's AI Video from Image technology represents the cutting edge of generative AI applied to video creation. Our proprietary neural network models analyze your input image to understand scene composition, subject matter, lighting conditions, and depth relationships, then synthesize entirely new video frames that extend your image into a believable, natural-looking video sequence. Unlike simple pan-and-zoom effects, Sorovi generates actual new visual content: leaves sway in the wind, water ripples realistically, hair moves naturally, and clouds drift across skies. The result is a video that looks like it was captured with a real camera. This technology opens creative possibilities that were previously impossible without professional videography. Perfect for artists, content creators, marketers, and anyone who wants to bring their images to life with AI-generated motion that looks and feels authentic.",
    icon: "🎞️",
    category: "Video Generation",
    howItWorks: [
      {
        step: "1",
        title: "Provide Your Image",
        description: "Upload any photo—portraits, landscapes, product shots, artwork, or AI-generated images. Higher resolution yields better results."
      },
      {
        step: "2",
        title: "Choose Motion Type",
        description: "Select how the AI should animate your image: natural motion, camera movement, subject animation, or full scene generation."
      },
      {
        step: "3",
        title: "Set Duration & Parameters",
        description: "Choose video length from 2-15 seconds. Adjust motion intensity, generation quality, and output resolution."
      },
      {
        step: "4",
        title: "Generate & Download",
        description: "AI generates your video in seconds. Preview, regenerate with different seeds, or download in your preferred format."
      }
    ],
    features: [
      {
        icon: "🧠",
        title: "Generative AI Motion",
        description: "Creates real new video frames, not just panning or zooming across your image"
      },
      {
        icon: "🌊",
        title: "Natural Element Animation",
        description: "Water, clouds, fire, foliage, and more animate with physically accurate motion"
      },
      {
        icon: "👤",
        title: "Subject Animation",
        description: "People and animals gain subtle, lifelike movements and expressions"
      },
      {
        icon: "🎨",
        title: "Style Preservation",
        description: "Maintains the exact artistic style, colors, and mood of your original image"
      },
      {
        icon: "🔀",
        title: "Multiple Variations",
        description: "Generate different motion interpretations from the same image with seed control"
      },
      {
        icon: "📱",
        title: "iOS App Integration",
        description: "Full-featured mobile experience with camera roll integration and direct sharing"
      }
    ],
    benefits: [
      "Transform any still image into lifelike video content",
      "Create videos that look genuinely filmed, not artificially animated",
      "No videography skills or equipment needed",
      "Works with photos, illustrations, and AI-generated art",
      "Generate multiple unique video variations from one image"
    ],
    useCases: [
      "Bringing digital art and illustrations to life",
      "Creating atmospheric background videos for presentations",
      "Social media content from travel and landscape photos",
      "Animated product scenes for advertising",
      "Music video visuals and creative projects"
    ],
    pricing: {
      free: "5 AI videos per day, standard quality",
      creator: "Unlimited videos, HD quality",
      business: "Unlimited + 4K quality, API access"
    },
    faqs: [
      {
        question: "How is AI video from image different from simple video effects?",
        answer: "Traditional effects just pan, zoom, or rotate your existing image. Sorovi's AI actually generates new video frames with real motion: water flows, hair moves, clouds drift. It creates content that didn't exist in your original photo, resulting in natural-looking video."
      },
      {
        question: "What types of images produce the best AI videos?",
        answer: "Images with dynamic elements—water, sky, nature, hair, fabric—produce the most impressive results because the AI has clear elements to animate. But any image works. Portraits gain subtle expressions, and even abstract art gets fascinating motion."
      },
      {
        question: "Can I control what moves in the video?",
        answer: "Yes. You can guide the AI by selecting motion type (natural elements, camera movement, or subject animation) and adjusting intensity. Advanced controls let you mask specific areas for more or less motion."
      },
      {
        question: "How long does AI video generation take?",
        answer: "Most videos generate in 10-30 seconds depending on duration and quality settings. Higher resolution and longer videos take slightly more time. You can preview at standard quality and then render final output in HD or 4K."
      }
    ]
  },
  {
    slug: "ai-social-media-video-maker",
    name: "AI Social Media Video Maker",
    tagline: "One photo, videos for every social platform",
    description: "Create platform-optimized videos for TikTok, Instagram, YouTube, Facebook, and more from a single image. AI handles formatting, effects, and optimization for each platform.",
    detailedDescription: "Stop creating content separately for every social media platform. Sorovi's AI Social Media Video Maker lets you upload one photo and instantly generate optimized videos for TikTok, Instagram Reels, YouTube Shorts, Facebook, Pinterest, LinkedIn, and Twitter/X. Our AI understands what performs best on each platform—the ideal aspect ratio, video length, motion style, and pacing that drives engagement. Create a consistent multi-platform content strategy without spending hours reformatting and re-editing. Each platform gets its own tailored version: fast-paced and trendy for TikTok, polished and aesthetic for Instagram, professional for LinkedIn, and attention-grabbing for Facebook. Maintain brand consistency across channels while respecting each platform's unique audience expectations. Perfect for social media managers, small business owners, and creators who need to maintain an active presence across multiple platforms without a full production team.",
    icon: "📲",
    category: "Social Media",
    howItWorks: [
      {
        step: "1",
        title: "Upload Your Image",
        description: "Start with any compelling photo. Product shots, lifestyle images, event photos, or branded graphics."
      },
      {
        step: "2",
        title: "Select Your Platforms",
        description: "Choose which social media platforms you want videos for. Select one or all—Sorovi optimizes each version independently."
      },
      {
        step: "3",
        title: "Customize Per Platform",
        description: "Adjust effects, add platform-specific text overlays, hashtag suggestions, and choose music that fits each audience."
      },
      {
        step: "4",
        title: "Export All Versions",
        description: "Download all platform-optimized versions at once. Each file is named and formatted for its target platform."
      }
    ],
    features: [
      {
        icon: "🌐",
        title: "7+ Platform Support",
        description: "Optimized exports for TikTok, Instagram, YouTube, Facebook, Pinterest, LinkedIn, and Twitter"
      },
      {
        icon: "📐",
        title: "Auto Aspect Ratios",
        description: "Automatic 9:16, 1:1, 16:9, and 4:5 formatting per platform requirements"
      },
      {
        icon: "🎯",
        title: "Platform-Smart Effects",
        description: "AI selects motion styles that perform best on each specific platform"
      },
      {
        icon: "📊",
        title: "Engagement Optimization",
        description: "Video pacing and hooks tailored to each platform's algorithm preferences"
      },
      {
        icon: "📅",
        title: "Bulk Content Creation",
        description: "Create a full week of multi-platform content from a handful of images"
      },
      {
        icon: "🏷️",
        title: "Hashtag Suggestions",
        description: "AI-generated hashtag recommendations specific to each platform and niche"
      }
    ],
    benefits: [
      "Save hours managing multi-platform content creation",
      "Maintain consistent branding across all social channels",
      "Post optimized content on every platform simultaneously",
      "No need for separate editing tools per platform",
      "Increase reach by being active on more platforms"
    ],
    useCases: [
      "Social media managers handling multiple client accounts",
      "Small businesses maintaining presence on all platforms",
      "Influencers repurposing content across channels",
      "Marketing teams creating multi-channel campaigns",
      "E-commerce brands promoting products on every platform"
    ],
    pricing: {
      free: "3 multi-platform exports per day",
      creator: "Unlimited exports, all platforms",
      business: "Unlimited + scheduling, team collaboration"
    },
    faqs: [
      {
        question: "Does Sorovi create different videos for each platform?",
        answer: "Yes! Each platform version is independently optimized. TikTok gets fast-paced, trendy effects. Instagram Reels gets polished, aesthetic motion. LinkedIn gets professional, subtle animation. Each version has the right aspect ratio, length, and style for its platform."
      },
      {
        question: "Can I customize each platform's version separately?",
        answer: "Absolutely. While Sorovi auto-optimizes each version, you have full control to adjust effects, text, music, and duration for each platform individually. You can also exclude platforms you don't need."
      },
      {
        question: "What platforms are supported?",
        answer: "Sorovi supports TikTok (9:16), Instagram Reels/Stories (9:16), Instagram Feed (1:1, 4:5), YouTube Shorts (9:16), Facebook Feed (16:9, 1:1), Pinterest (2:3), LinkedIn (16:9), and Twitter/X (16:9, 1:1)."
      },
      {
        question: "Can I schedule posts directly from Sorovi?",
        answer: "Business plan includes scheduling capabilities. For free and Creator plans, you can download all platform versions and use your preferred scheduling tool to post them."
      }
    ]
  },
  {
    slug: "ai-video-generator-app",
    name: "AI Video Generator App",
    tagline: "The #1 AI video generator app for iPhone",
    description: "Create professional AI-generated videos right from your iPhone. Sorovi is the top-rated iOS app for transforming photos into stunning videos with AI-powered effects.",
    detailedDescription: "Sorovi is the highest-rated AI video generator app on the App Store, designed from the ground up for iPhone and iPad. Unlike web-based tools that feel clunky on mobile, Sorovi delivers a native iOS experience with instant camera roll integration, haptic feedback, intuitive gesture controls, and optimized performance that takes full advantage of Apple's Neural Engine. Create professional-quality AI videos in seconds, right from your phone. No uploads to sketchy servers, no waiting for cloud processing—Sorovi's on-device AI processes your images locally for faster results and complete privacy. With over 500,000 downloads and a 4.8-star rating, Sorovi is the go-to app for creators, marketers, and everyday users who want to create scroll-stopping video content. Available exclusively on iOS with features including real-time preview, one-tap social sharing, iCloud sync, and Apple Watch companion for remote triggering.",
    icon: "📱",
    category: "Video Generation",
    howItWorks: [
      {
        step: "1",
        title: "Download from App Store",
        description: "Get Sorovi free from the App Store. Works on iPhone 12 and newer, iPad with M1 or later."
      },
      {
        step: "2",
        title: "Choose a Photo",
        description: "Select from your camera roll, take a new photo, or import from Files. The app integrates natively with iOS."
      },
      {
        step: "3",
        title: "Apply AI Effects",
        description: "Browse and preview effects in real-time. Swipe through zoom, orbit, parallax, follow, and more with live previews."
      },
      {
        step: "4",
        title: "Share Everywhere",
        description: "Use iOS share sheet to send to any app—TikTok, Instagram, Messages, AirDrop, or save to Photos."
      }
    ],
    features: [
      {
        icon: "🍎",
        title: "Native iOS Experience",
        description: "Built for iPhone with haptic feedback, gestures, and Apple Neural Engine optimization"
      },
      {
        icon: "🔒",
        title: "On-Device Processing",
        description: "AI runs locally on your device for speed and privacy—no cloud uploads required"
      },
      {
        icon: "👆",
        title: "Real-Time Preview",
        description: "See effects applied live as you browse—no waiting for renders to preview"
      },
      {
        icon: "📤",
        title: "Native Share Sheet",
        description: "Share to any iOS app with one tap using the native share extension"
      },
      {
        icon: "☁️",
        title: "iCloud Sync",
        description: "Your projects sync across iPhone and iPad via iCloud automatically"
      },
      {
        icon: "⚡",
        title: "Neural Engine Speed",
        description: "Leverages Apple's Neural Engine for AI processing up to 10x faster than cloud"
      }
    ],
    benefits: [
      "Create professional videos anywhere, anytime from your phone",
      "No internet connection needed for basic effects",
      "Privacy-first with on-device AI processing",
      "Seamless integration with iOS ecosystem",
      "Fastest AI video generation on any mobile platform"
    ],
    useCases: [
      "On-the-go content creation for social media",
      "Quick product videos at trade shows or events",
      "Real-time content during travel and adventures",
      "Instant video creation from iPhone camera",
      "Mobile-first marketing for small businesses"
    ],
    pricing: {
      free: "5 videos per day, watermark",
      creator: "$9.99/mo — unlimited, no watermark",
      business: "$29.99/mo — all features, commercial license"
    },
    faqs: [
      {
        question: "Is Sorovi free to download?",
        answer: "Yes! Sorovi is free to download from the App Store. The free plan includes 5 videos per day with a small watermark. Upgrade to Creator or Business for unlimited videos and additional features."
      },
      {
        question: "What iPhone models are supported?",
        answer: "Sorovi works on iPhone 12 and newer (A14 Bionic chip or later). For the best experience, we recommend iPhone 14 or newer. iPad with M1 chip or later is also supported."
      },
      {
        question: "Does Sorovi work offline?",
        answer: "Basic AI effects work entirely offline using on-device processing. Some advanced generative effects require an internet connection for cloud AI processing. Offline mode is great for creating content while traveling."
      },
      {
        question: "How does Sorovi compare to other AI video apps?",
        answer: "Sorovi is the only AI video generator app with full on-device processing, meaning faster results and better privacy. Our 4.8-star App Store rating and 500,000+ downloads reflect the quality difference. We also offer more AI effect types than any competing app."
      }
    ]
  },
  {
    slug: "ai-faceless-video-generator",
    name: "AI Faceless Video Generator",
    tagline: "Create viral videos without showing your face",
    description: "Generate engaging faceless video content using AI. Perfect for creators who want to build an audience and monetize content without appearing on camera.",
    detailedDescription: "Sorovi's AI Faceless Video Generator empowers a new generation of content creators who prefer to stay behind the scenes. Not everyone wants to be on camera, and that should never limit your creative potential or earning ability. Our AI transforms your images, ideas, and concepts into polished, engaging videos that captivate audiences without requiring you to show your face. Create compelling content for faceless YouTube channels, anonymous TikTok accounts, educational content, product reviews, motivational pages, and niche topic channels. Sorovi's AI handles the visual storytelling through dynamic image animations, cinematic motion effects, and intelligent scene composition. Pair these visuals with our AI voiceover tool for complete faceless videos that rival traditional on-camera content in engagement and watch time. Thousands of creators are building six-figure faceless channels using Sorovi's AI video technology. Join the faceless content revolution and start creating today.",
    icon: "🎭",
    category: "Content Creation",
    howItWorks: [
      {
        step: "1",
        title: "Choose Your Content Angle",
        description: "Select your niche—motivational, educational, product reviews, storytelling, or any topic. No camera needed."
      },
      {
        step: "2",
        title: "Upload Supporting Images",
        description: "Add images that illustrate your content. Stock photos, product shots, screenshots, or AI-generated visuals."
      },
      {
        step: "3",
        title: "Add AI Voiceover & Motion",
        description: "Generate narration with AI voices and apply cinematic motion effects that keep viewers engaged throughout."
      },
      {
        step: "4",
        title: "Publish Anonymously",
        description: "Export your polished faceless video and publish to YouTube, TikTok, or any platform without ever showing your face."
      }
    ],
    features: [
      {
        icon: "🎭",
        title: "Zero Face Required",
        description: "Full video creation pipeline that never requires you to appear on camera"
      },
      {
        icon: "🎙️",
        title: "AI Narration",
        description: "Professional voiceovers in 50+ realistic AI voices across 32 languages"
      },
      {
        icon: "🎬",
        title: "Cinematic Image Animation",
        description: "Transform static images into dynamic scenes with AI motion effects"
      },
      {
        icon: "📝",
        title: "Auto-Generated Captions",
        description: "Synchronized captions and subtitles for accessibility and engagement"
      },
      {
        icon: "🎵",
        title: "Background Music Library",
        description: "Royalty-free music and ambient sounds matched to your content mood"
      },
      {
        icon: "📊",
        title: "Niche Templates",
        description: "Pre-built templates for popular faceless content niches and formats"
      }
    ],
    benefits: [
      "Build a profitable content channel without showing your face",
      "Maintain complete privacy and anonymity online",
      "Create content at scale without filming constraints",
      "No need for lighting, camera, or appearance preparation",
      "Focus purely on great content rather than on-camera performance"
    ],
    useCases: [
      "Faceless YouTube channels in education, finance, or tech niches",
      "Anonymous TikTok motivational and quote accounts",
      "Product review channels without unboxing on camera",
      "Historical and documentary-style content",
      "Meditation, ASMR, and ambient content creation"
    ],
    pricing: {
      free: "3 faceless videos per day",
      creator: "Unlimited videos, all AI voices",
      business: "Unlimited + batch creation, scheduling"
    },
    faqs: [
      {
        question: "Can faceless content really go viral?",
        answer: "Absolutely. Some of the biggest channels on YouTube and TikTok are faceless. Channels like 'Bright Side' (44M subscribers) and countless motivational accounts prove that great content doesn't require a face. Sorovi helps you create that same quality content."
      },
      {
        question: "What niches work best for faceless content?",
        answer: "Top-performing faceless niches include personal finance, technology explainers, motivational content, history and facts, product reviews, cooking recipes, nature and relaxation, and educational tutorials. Sorovi has templates optimized for each of these."
      },
      {
        question: "Can I monetize faceless videos?",
        answer: "Yes! Faceless videos are fully eligible for monetization on YouTube, TikTok Creator Fund, and other platforms. Creator and Business plan videos come with full commercial rights. Many Sorovi users earn significant revenue from faceless channels."
      },
      {
        question: "Do I need to record my own voice?",
        answer: "No. Sorovi includes 50+ AI voices that sound natural and professional. Choose a voice that fits your content style, or use your own voice if you prefer. Many successful faceless creators use AI voices exclusively."
      }
    ]
  },
  {
    slug: "ai-short-video-maker",
    name: "AI Short Video Maker",
    tagline: "Create viral short-form videos in seconds",
    description: "Generate attention-grabbing short videos optimized for virality. AI creates the perfect hook, pacing, and motion to maximize views on TikTok, Reels, and Shorts.",
    detailedDescription: "Short-form video is the most powerful content format in social media today, and Sorovi's AI Short Video Maker helps you master it. Our AI is trained on millions of viral short videos to understand exactly what makes content go viral: the perfect hook timing, optimal pacing, attention-retaining motion patterns, and engagement-driving effects. Upload any photo and Sorovi generates a short video engineered for maximum watch time and shareability. The AI automatically structures your video with a strong opening hook in the first 0.5 seconds, maintains visual interest throughout with dynamic motion, and creates a satisfying conclusion that encourages replays and shares. Whether you're building a following, promoting a brand, or just creating for fun, Sorovi takes the guesswork out of short-form video creation. Our users report an average 3x increase in engagement after switching to Sorovi-generated short videos compared to static posts.",
    icon: "⚡",
    category: "Social Media",
    howItWorks: [
      {
        step: "1",
        title: "Upload Your Image",
        description: "Choose a high-impact photo. The AI analyzes visual elements to determine the best short-form video approach."
      },
      {
        step: "2",
        title: "Select Duration & Style",
        description: "Pick your target length: 3, 7, 15, or 30 seconds. Choose a vibe: dramatic, energetic, elegant, or cinematic."
      },
      {
        step: "3",
        title: "AI Optimizes for Virality",
        description: "Our algorithm structures the video with a strong hook, engaging middle, and replay-worthy ending."
      },
      {
        step: "4",
        title: "Publish & Track",
        description: "Export in perfect format for any platform. Track performance and iterate on what works."
      }
    ],
    features: [
      {
        icon: "🪝",
        title: "AI Hook Generator",
        description: "Creates attention-grabbing openings in the critical first 0.5 seconds"
      },
      {
        icon: "⏱️",
        title: "Precision Timing",
        description: "AI paces motion effects to maintain attention throughout the entire video"
      },
      {
        icon: "🔁",
        title: "Loop-Optimized",
        description: "Creates seamless loops that encourage replays and boost algorithm ranking"
      },
      {
        icon: "📈",
        title: "Virality Score",
        description: "AI rates your video's viral potential before you post and suggests improvements"
      },
      {
        icon: "🎵",
        title: "Beat-Synced Motion",
        description: "Motion effects sync to music beats for satisfying, shareable videos"
      },
      {
        icon: "🏆",
        title: "Trending Style Library",
        description: "Effect presets based on currently trending video styles and formats"
      }
    ],
    benefits: [
      "Engineered specifically for short-form video virality",
      "Save time with AI that understands viral content patterns",
      "Increase watch time with optimized pacing and hooks",
      "Create more content in less time to maintain posting frequency",
      "Data-driven approach to short-form video creation"
    ],
    useCases: [
      "Daily social media content creation",
      "Brand awareness short-form campaigns",
      "Quick product teasers and announcements",
      "Event highlights and recaps",
      "Trend-jacking with fast content turnaround"
    ],
    pricing: {
      free: "5 short videos per day",
      creator: "Unlimited shorts, virality scoring",
      business: "Unlimited + trend analytics, team features"
    },
    faqs: [
      {
        question: "What makes a short video go viral?",
        answer: "Viral short videos share common traits: a hook that grabs attention in under 1 second, dynamic motion that maintains interest, optimal length for the platform (7-15 seconds usually works best), and a satisfying or surprising element that encourages replays. Sorovi's AI bakes all of these patterns into every video."
      },
      {
        question: "What's the ideal length for short-form videos?",
        answer: "It depends on the platform and content type. TikTok sweet spot is 7-15 seconds. Instagram Reels perform well at 7-20 seconds. YouTube Shorts can go up to 60 seconds but shorter often works better. Sorovi lets you create any length from 3-60 seconds."
      },
      {
        question: "How does the virality score work?",
        answer: "Sorovi's AI analyzes your generated video against patterns from millions of viral videos. It scores hook strength, motion engagement, pacing, and visual appeal on a 1-100 scale. Scores above 70 indicate strong viral potential. The AI also suggests specific improvements to boost your score."
      },
      {
        question: "Can I create short videos with music?",
        answer: "Yes! Sorovi includes a library of trending and royalty-free music. The AI syncs motion effects to musical beats for a polished, professional feel. You can also add platform-specific trending sounds after exporting."
      }
    ]
  },
  {
    slug: "ai-ecommerce-video-creator",
    name: "AI E-commerce Video Creator",
    tagline: "Product videos that sell — powered by AI",
    description: "Create conversion-optimized product videos, ad creatives, and marketing content for your online store. Built specifically for e-commerce brands and sellers.",
    detailedDescription: "Sorovi's AI E-commerce Video Creator is purpose-built for online retailers who understand that video content drives sales. Our AI goes beyond simple product animation—it creates strategically crafted marketing videos designed to convert browsers into buyers. Generate hero product videos for your homepage, lifestyle context videos showing products in use, feature highlight reels that communicate value, comparison videos, seasonal promotional content, and retargeting ad creatives—all from your existing product photography. The AI understands e-commerce best practices: it highlights product details at the right moment, creates urgency with dynamic motion, and presents your products with the visual quality of a professional studio shoot. Integrate with your Shopify, WooCommerce, or BigCommerce store to pull product images automatically and generate videos at scale. Our e-commerce customers report an average 35% increase in conversion rates and 25% reduction in return rates when adding AI-generated product videos to their listings.",
    icon: "💰",
    category: "E-commerce",
    howItWorks: [
      {
        step: "1",
        title: "Connect Your Store or Upload",
        description: "Link your Shopify, WooCommerce, or BigCommerce store for automatic product import, or upload images manually."
      },
      {
        step: "2",
        title: "Choose Video Purpose",
        description: "Select your goal: product listing video, social ad creative, homepage hero, email marketing, or retargeting ad."
      },
      {
        step: "3",
        title: "AI Creates Your Video",
        description: "Our e-commerce-trained AI generates a conversion-optimized video with strategic motion, text overlays, and call-to-action."
      },
      {
        step: "4",
        title: "Deploy Across Channels",
        description: "Export for your product pages, social ads, email campaigns, or marketplace listings. Track performance metrics."
      }
    ],
    features: [
      {
        icon: "🛍️",
        title: "Store Integration",
        description: "Direct integration with Shopify, WooCommerce, and BigCommerce for automatic product import"
      },
      {
        icon: "🎯",
        title: "Conversion-Optimized",
        description: "AI trained on high-converting e-commerce videos to maximize purchase intent"
      },
      {
        icon: "📣",
        title: "Ad Creative Generator",
        description: "Create Facebook, Instagram, and Google Shopping ad creatives in bulk"
      },
      {
        icon: "🏷️",
        title: "Dynamic Pricing Overlays",
        description: "Auto-generate sale badges, price comparisons, and limited-time offer graphics"
      },
      {
        icon: "📊",
        title: "Performance Analytics",
        description: "Track which video styles drive the most conversions for your products"
      },
      {
        icon: "🔄",
        title: "Seasonal Auto-Updates",
        description: "Automatically refresh videos with seasonal themes, holiday branding, and sale events"
      }
    ],
    benefits: [
      "Increase product page conversion rates by up to 35%",
      "Reduce return rates with better product visualization",
      "Scale video content across thousands of SKUs",
      "Create ad creatives faster than agencies at a fraction of the cost",
      "Keep listings fresh with seasonal and promotional variations"
    ],
    useCases: [
      "Shopify and WooCommerce product page videos",
      "Facebook and Instagram dynamic product ads",
      "Google Shopping video listings",
      "Email marketing product showcases",
      "Amazon and marketplace enhanced listings"
    ],
    pricing: {
      free: "3 e-commerce videos per day",
      creator: "Unlimited videos, store integration",
      business: "Unlimited + analytics, API, bulk generation"
    },
    faqs: [
      {
        question: "How does Sorovi integrate with my Shopify store?",
        answer: "Install the Sorovi Shopify app from the App Store, connect your account, and your product catalog syncs automatically. Select any product and Sorovi pulls its images to generate videos. You can also push finished videos directly back to your product pages."
      },
      {
        question: "Can I create videos for my entire product catalog?",
        answer: "Yes! Business plan includes bulk generation. Upload your catalog or connect your store, and Sorovi generates videos for every product. Process hundreds of SKUs in a single session with consistent quality and branding."
      },
      {
        question: "What types of e-commerce videos can I create?",
        answer: "Sorovi creates product showcase videos, feature highlights, lifestyle context videos, comparison videos, unboxing-style reveals, 360-degree product views, ad creatives for social media, and promotional/sale announcement videos."
      },
      {
        question: "Do product videos really reduce return rates?",
        answer: "Yes. Research shows that product videos help customers understand size, color, texture, and functionality better than photos alone. This leads to more informed purchase decisions and fewer returns. Our customers report 15-25% fewer returns after adding product videos."
      }
    ]
  },
  {
    slug: "ai-photo-animation",
    name: "AI Photo Animation",
    tagline: "Bring any photo to life with AI animation",
    description: "Animate your photos with stunning AI-powered motion. Watch portraits smile, landscapes come alive, and still moments transform into living memories.",
    detailedDescription: "Sorovi's AI Photo Animation breathes life into your most treasured images with astonishing realism. Our advanced generative AI doesn't just move your photo around—it actually animates the content within it. Watch as portrait subjects blink, smile, and turn their heads naturally. See ocean waves crash against shores, trees sway in a gentle breeze, and campfires flicker with warm light. This technology is perfect for creating living portraits from family photos, animating historical images, bringing artwork to life, or creating magical moments from everyday snapshots. Sorovi's animation AI understands the physics of the real world: hair flows with gravity, fabric drapes naturally, water follows fluid dynamics, and facial expressions progress through realistic muscle movements. The result is animation so convincing it feels like discovering hidden video footage you never knew existed. Whether you're preserving memories, creating art, or generating engaging social content, AI Photo Animation transforms the ordinary into the extraordinary.",
    icon: "✨",
    category: "Effects",
    howItWorks: [
      {
        step: "1",
        title: "Select Your Photo",
        description: "Choose any photo—portraits, landscapes, pets, artwork, or vintage images. The AI adapts its animation approach to the content."
      },
      {
        step: "2",
        title: "Choose Animation Style",
        description: "Select from natural motion, portrait animation, weather effects, or artistic interpretation. Each style creates a different feel."
      },
      {
        step: "3",
        title: "Adjust Animation Intensity",
        description: "Control how much movement the AI adds. Subtle for elegant results, dramatic for eye-catching content."
      },
      {
        step: "4",
        title: "Save & Share Your Living Photo",
        description: "Export as video or Live Photo. Share on social media or keep as a living memory in your gallery."
      }
    ],
    features: [
      {
        icon: "😊",
        title: "Portrait Animation",
        description: "Faces gain natural expressions—blinks, smiles, subtle head movements"
      },
      {
        icon: "🌊",
        title: "Nature Animation",
        description: "Water, clouds, trees, and weather elements move with realistic physics"
      },
      {
        icon: "🖼️",
        title: "Artwork Activation",
        description: "Paintings and illustrations gain mesmerizing animated movement"
      },
      {
        icon: "📸",
        title: "Live Photo Export",
        description: "Save as iOS Live Photo for press-and-hold animation on lock screen"
      },
      {
        icon: "🎚️",
        title: "Intensity Control",
        description: "Adjust animation strength from whisper-subtle to dramatically dynamic"
      },
      {
        icon: "🔁",
        title: "Seamless Loops",
        description: "Perfectly looping animations for wallpapers, displays, and social media"
      }
    ],
    benefits: [
      "Transform cherished still photos into living memories",
      "Create mesmerizing content that captivates social media audiences",
      "Bring artwork and illustrations to life for galleries and portfolios",
      "No animation skills or software knowledge required",
      "Export as video, GIF, or Live Photo for any use case"
    ],
    useCases: [
      "Animating family photos and old memories",
      "Creating living portraits for digital frames",
      "Bringing historical photos to life for educational content",
      "Social media content that stands out from static posts",
      "Animated artwork for digital galleries and NFTs"
    ],
    pricing: {
      free: "5 animations per day, standard quality",
      creator: "Unlimited animations, HD quality",
      business: "Unlimited + 4K, batch animation, API"
    },
    faqs: [
      {
        question: "How realistic is the photo animation?",
        answer: "Sorovi's AI produces remarkably realistic animation. Portrait subjects exhibit natural eye blinks, micro-expressions, and subtle head movements. Nature elements follow real-world physics. Most viewers initially believe they're watching actual video footage rather than animated photos."
      },
      {
        question: "Can I animate old or vintage photographs?",
        answer: "Yes! Sorovi works beautifully with old photographs, including black-and-white images. The AI is trained to handle lower resolution and aged photos gracefully. Many users love bringing grandparents' photos and historical images to life."
      },
      {
        question: "What's the difference between animation and video effects?",
        answer: "Video effects (zoom, orbit, parallax) move the camera around your image. Photo animation actually changes the content of your image—making people move, water flow, and nature come alive. Animation creates new visual content that didn't exist in the original photo."
      },
      {
        question: "Can I save animations as Live Photos on iPhone?",
        answer: "Yes! Sorovi exports directly as iOS Live Photos. Set them as wallpaper and press-and-hold to see the animation play. It's a magical way to keep animated memories on your lock screen."
      }
    ]
  },
  {
    slug: "ai-3d-photo-video",
    name: "AI 3D Photo Video",
    tagline: "Turn flat photos into immersive 3D videos",
    description: "Create stunning 3D depth videos from ordinary 2D photos using AI. Add realistic parallax, depth-of-field effects, and dimensional movement to any image.",
    detailedDescription: "Sorovi's AI 3D Photo Video technology transforms ordinary flat photographs into immersive three-dimensional video experiences. Our AI uses advanced monocular depth estimation to understand the spatial relationships in your image, then generates convincing 3D parallax motion where foreground elements move independently from the background—just like viewing a real 3D scene. The effect creates a captivating sense of depth and dimension that makes viewers feel like they're looking through a window rather than at a flat screen. This technology excels with landscapes, architectural photos, street scenes, and any image with natural depth layers. The AI automatically identifies depth planes, separates visual elements, and generates smooth multi-layer parallax motion with intelligent inpainting to fill occluded areas. Add depth-of-field effects where the focus shifts between foreground and background elements for a cinematic, DSLR-quality look. Perfect for real estate virtual tours, travel content, artistic photography, and creating premium social media posts that demand attention through dimensional motion.",
    icon: "🧊",
    category: "Effects",
    howItWorks: [
      {
        step: "1",
        title: "Upload Any 2D Photo",
        description: "Select a photo with depth—landscapes, rooms, streets, or any scene with foreground and background elements."
      },
      {
        step: "2",
        title: "AI Maps 3D Depth",
        description: "Our neural network analyzes your image and creates a precise depth map, identifying layers and spatial relationships."
      },
      {
        step: "3",
        title: "Customize 3D Motion",
        description: "Choose parallax direction, depth intensity, camera sway pattern, and optional depth-of-field focus effects."
      },
      {
        step: "4",
        title: "Render & Export",
        description: "AI generates your 3D video with smooth parallax motion. Export for social media, presentations, or digital displays."
      }
    ],
    features: [
      {
        icon: "🗺️",
        title: "AI Depth Mapping",
        description: "Neural network creates precise depth maps from any 2D photograph"
      },
      {
        icon: "📊",
        title: "Multi-Layer Parallax",
        description: "Foreground, midground, and background move at different speeds for realistic depth"
      },
      {
        icon: "🎯",
        title: "Focus Shift Effect",
        description: "Cinematic depth-of-field transitions between foreground and background elements"
      },
      {
        icon: "🖌️",
        title: "AI Inpainting",
        description: "Intelligently fills hidden areas revealed during 3D motion for seamless results"
      },
      {
        icon: "🔄",
        title: "Multi-Direction Sway",
        description: "Horizontal, vertical, circular, or figure-eight camera motion patterns"
      },
      {
        icon: "📐",
        title: "Depth Intensity Control",
        description: "Adjust how pronounced the 3D effect appears from subtle to dramatic"
      }
    ],
    benefits: [
      "Add stunning dimensionality to any flat photograph",
      "Create premium content that stands out from 2D posts",
      "No 3D camera, LiDAR scanner, or special equipment needed",
      "Professional parallax results from a single 2D image",
      "Mesmerizing depth effect that stops viewers mid-scroll"
    ],
    useCases: [
      "Real estate virtual property showcases with depth",
      "Travel photography with immersive 3D movement",
      "Architectural visualization and interior design",
      "Art and photography portfolio enhancement",
      "Premium social media content with dimensional feel"
    ],
    pricing: {
      free: "3 3D videos per day, standard depth",
      creator: "Unlimited, advanced depth control",
      business: "Unlimited + 4K parallax, batch processing"
    },
    faqs: [
      {
        question: "How does AI create 3D from a flat 2D photo?",
        answer: "Sorovi's AI uses monocular depth estimation—a neural network trained on millions of images with known depth data. It analyzes visual cues like perspective, occlusion, relative size, and atmospheric haze to predict the distance of every pixel from the camera, then uses this depth map to create parallax motion."
      },
      {
        question: "What photos work best for the 3D effect?",
        answer: "Photos with clear depth layers produce the most impressive results—landscapes with foreground flowers, streets with buildings receding into distance, rooms with furniture at various depths. The more natural depth separation in your scene, the more dramatic the 3D effect."
      },
      {
        question: "What happens to hidden areas when layers separate?",
        answer: "When foreground elements move and reveal areas that weren't visible in the original photo, Sorovi's AI inpainting fills these gaps intelligently. The AI generates plausible visual content based on surrounding context, ensuring seamless, artifact-free 3D motion."
      },
      {
        question: "Can I adjust the depth map manually?",
        answer: "Yes! While the AI-generated depth map is accurate for most images, you can manually refine depth assignments using our depth editor. Paint areas as closer or farther to fine-tune the 3D effect to your creative vision."
      }
    ]
  },
  {
    slug: "ai-follow-video-effect",
    name: "AI Follow Video Effect",
    tagline: "AI camera tracking that follows your subject",
    description: "Create dynamic follow-cam videos from still photos using AI. The virtual camera intelligently tracks and follows your subject for cinematic tracking shots.",
    detailedDescription: "Sorovi's AI Follow Video Effect simulates the look of professional tracking shots and follow-cam footage from a single still photograph. Our AI identifies the primary subject in your image—whether a person, product, vehicle, animal, or any focal point—and generates smooth camera movement that follows and frames the subject dynamically. The result mimics the work of a skilled camera operator with a gimbal, dolly, or drone, creating that coveted cinematic tracking feel without any actual camera movement. The AI understands composition rules and automatically maintains aesthetically pleasing framing as the virtual camera moves, keeping your subject in focus while the background shifts naturally with perspective-correct parallax. Choose from multiple follow styles: steady track, dynamic chase, smooth glide, orbital follow, or reveal-and-track. Each creates a distinct cinematic mood perfect for different types of content. This effect transforms static portraits into editorial-quality motion content, product shots into premium commercial footage, and ordinary snapshots into professional tracking shots that command attention.",
    icon: "🎯",
    category: "Effects",
    howItWorks: [
      {
        step: "1",
        title: "Upload Your Photo",
        description: "Choose an image with a clear subject. The AI automatically detects what to track—people, products, animals, or objects."
      },
      {
        step: "2",
        title: "Select Follow Style",
        description: "Choose your tracking style: Steady Track, Dynamic Chase, Smooth Glide, Orbital Follow, or Reveal-and-Track."
      },
      {
        step: "3",
        title: "Adjust Tracking Parameters",
        description: "Fine-tune camera speed, follow distance, motion smoothness, and framing preferences."
      },
      {
        step: "4",
        title: "Generate Tracking Video",
        description: "AI creates your follow-cam video with smooth, professional tracking motion. Preview and export."
      }
    ],
    features: [
      {
        icon: "🎯",
        title: "Intelligent Subject Detection",
        description: "AI automatically identifies and locks onto the primary subject in your image"
      },
      {
        icon: "🎬",
        title: "5 Follow Styles",
        description: "Steady Track, Dynamic Chase, Smooth Glide, Orbital Follow, and Reveal-and-Track modes"
      },
      {
        icon: "🎥",
        title: "Gimbal-Smooth Motion",
        description: "Digitally stabilized camera movement that mimics professional gimbal footage"
      },
      {
        icon: "📐",
        title: "Composition-Aware Framing",
        description: "AI maintains rule-of-thirds and aesthetic framing throughout the tracking motion"
      },
      {
        icon: "🔍",
        title: "Multi-Subject Support",
        description: "Track multiple subjects or switch focus between elements during the video"
      },
      {
        icon: "⚡",
        title: "Real-Time Preview",
        description: "See the tracking motion applied live before committing to final render"
      }
    ],
    benefits: [
      "Achieve professional tracking shots without a camera operator",
      "No gimbal, dolly, or drone equipment needed",
      "Create dynamic motion that guides viewer attention",
      "Professional cinematic quality from a single still photo",
      "Multiple tracking styles for different creative needs"
    ],
    useCases: [
      "Portrait and fashion editorial content",
      "Product tracking shots for e-commerce and ads",
      "Sports and action subject highlights",
      "Pet and animal content creation",
      "Architectural and real estate subject reveals"
    ],
    pricing: {
      free: "3 follow videos per day",
      creator: "Unlimited, all follow styles",
      business: "Unlimited + multi-subject tracking, batch"
    },
    faqs: [
      {
        question: "How does AI follow a subject in a still image?",
        answer: "Sorovi's AI identifies your subject, then simulates camera movement around and toward the subject while keeping it in frame. The background shifts with perspective-correct parallax while the subject remains the focal point. It's like a virtual camera operator tracking your subject through the scene."
      },
      {
        question: "What's the difference between follow and orbit effects?",
        answer: "Orbit rotates the camera around your subject from a fixed distance, like circling an object. Follow simulates the camera moving alongside or toward your subject, like a camera operator walking with the subject. Follow feels more dynamic and directional; orbit feels more showcase-oriented."
      },
      {
        question: "Can I choose what the camera follows?",
        answer: "Yes! While AI auto-detects the main subject, you can tap to select any element in your image as the tracking target. You can also set up multi-point tracking where the camera shifts focus between different subjects during the video."
      },
      {
        question: "What follow style works best for product videos?",
        answer: "For products, 'Reveal-and-Track' works great—it starts wide and smoothly tracks in toward your product. 'Smooth Glide' is perfect for luxury items, creating an elegant sliding motion. 'Orbital Follow' works well for showing products from multiple angles."
      }
    ]
  }
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((tool) => tool.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(tools.map((tool) => tool.category)));
}
