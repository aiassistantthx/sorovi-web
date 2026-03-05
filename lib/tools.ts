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
