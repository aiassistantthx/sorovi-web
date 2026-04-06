export interface Industry {
  slug: string;
  name: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  challenges: Array<{ icon: string; title: string; description: string }>;
  solutions: Array<{ icon: string; title: string; description: string }>;
  videoTypes: Array<{ title: string; description: string }>;
  benefits: string[];
  stats: Array<{ value: string; label: string }>;
  testimonial: { quote: string; author: string; role: string };
  relatedTools: string[];
  relatedUseCases: string[];
  faqs: Array<{ question: string; answer: string }>;
  ctaText: string;
}

export const industries: Industry[] = [
  {
    slug: "e-commerce",
    name: "E-commerce",
    icon: "🛒",
    metaTitle: "AI Video Marketing for E-commerce | Hyreel",
    metaDescription: "Create product videos that sell. Transform product photos into scroll-stopping videos for Amazon, Shopify, and Etsy. Boost conversions by 30%.",
    heroHeadline: "AI Video Marketing for E-commerce",
    heroSubheadline: "Turn product photos into high-converting videos for Amazon, Shopify, Etsy, and more. Create professional product showcases in seconds, not days.",
    description: "E-commerce businesses using AI video to boost product listings, increase conversions, and stand out in crowded marketplaces.",
    challenges: [
      {
        icon: "💸",
        title: "High Production Costs",
        description: "Professional product videos cost $500-2,000 each, making it impossible to cover your entire catalog."
      },
      {
        icon: "⏳",
        title: "Slow Turnaround",
        description: "Traditional video production takes days or weeks, delaying product launches and seasonal campaigns."
      },
      {
        icon: "📉",
        title: "Lower Conversion Rates",
        description: "Listings with only static images convert 20-30% lower than those with video content."
      },
      {
        icon: "🏆",
        title: "Competitive Pressure",
        description: "Competitors with video content win the Buy Box more often and rank higher in search results."
      }
    ],
    solutions: [
      {
        icon: "📸",
        title: "Photo-to-Video in Seconds",
        description: "Upload product photos and get professional videos with cinematic motion effects instantly."
      },
      {
        icon: "🔄",
        title: "Scale Across Your Catalog",
        description: "Create videos for hundreds of SKUs quickly. Cover your entire inventory affordably."
      },
      {
        icon: "🎬",
        title: "Multiple Video Styles",
        description: "Zoom effects, 360° orbits, parallax motion — choose the style that sells your products best."
      },
      {
        icon: "📱",
        title: "Direct Platform Export",
        description: "Export optimized for Amazon, Shopify, eBay, TikTok Shop, and all major marketplaces."
      }
    ],
    videoTypes: [
      { title: "Product Showcase", description: "360° rotation and zoom effects to highlight product details" },
      { title: "Lifestyle Videos", description: "Products in context with motion and atmosphere" },
      { title: "Before/After", description: "Show product transformations and results" },
      { title: "Unboxing Style", description: "Create excitement around product packaging" },
      { title: "Size & Scale", description: "Help customers understand product dimensions" },
      { title: "Feature Highlights", description: "Zoom into specific product features" }
    ],
    benefits: [
      "Increase conversion rates by up to 30% with video listings",
      "Cover your entire product catalog affordably",
      "Launch new products with video from day one",
      "Win more Buy Box placements on Amazon",
      "Reduce returns with better product visualization",
      "Stand out from competitors with professional motion content"
    ],
    stats: [
      { value: "30%", label: "Avg. Conversion Lift" },
      { value: "73%", label: "Buyers prefer video" },
      { value: "< 30s", label: "Video creation time" },
      { value: "10x", label: "Cheaper than studios" }
    ],
    testimonial: {
      quote: "We went from having videos on 5% of our listings to 100% in a single weekend. Our conversion rate jumped 24% in the first month.",
      author: "Sarah M.",
      role: "Shopify Store Owner, 500+ SKUs"
    },
    relatedTools: ["image-to-video-ai", "ai-product-video-maker", "ai-ecommerce-video-creator", "ai-zoom-video-effect"],
    relatedUseCases: ["product-videos-for-ecommerce", "amazon-product-videos", "shopify-store-videos"],
    faqs: [
      {
        question: "What e-commerce platforms support Hyreel videos?",
        answer: "Hyreel videos work on all major platforms including Amazon, Shopify, Etsy, eBay, WooCommerce, BigCommerce, and Walmart. Videos export as standard MP4 files accepted everywhere."
      },
      {
        question: "Can I create videos for my entire product catalog?",
        answer: "Yes! Hyreel is designed for scale. Many sellers create videos for hundreds of SKUs in a single day. Our unlimited plans make it affordable to cover your entire inventory."
      },
      {
        question: "What kind of product photos work best?",
        answer: "Clear, well-lit photos on white or clean backgrounds work best. Standard product photography produces excellent results. Even smartphone photos work if the product is clearly visible."
      },
      {
        question: "Do product videos really increase sales?",
        answer: "Yes. Studies show product listings with video convert 20-30% higher than static images. Video also reduces returns by helping customers better understand what they're buying."
      },
      {
        question: "How do I upload videos to Amazon?",
        answer: "Export your video from Hyreel, then upload to Amazon through Seller Central > Manage Inventory > Edit > Product Videos. Hyreel exports in Amazon's required format automatically."
      }
    ],
    ctaText: "Create Product Videos Free"
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "🏠",
    metaTitle: "AI Video for Real Estate Agents & Brokers | Hyreel",
    metaDescription: "Create stunning property tour videos from listing photos. Generate professional real estate videos in seconds. Perfect for MLS, Zillow, and social media.",
    heroHeadline: "AI Video for Real Estate Professionals",
    heroSubheadline: "Transform listing photos into cinematic property tour videos. Create professional real estate content for MLS, Zillow, and social media in seconds.",
    description: "Real estate agents and brokers using AI video to create property tours, listing showcases, and marketing content from photos.",
    challenges: [
      {
        icon: "📹",
        title: "Expensive Videography",
        description: "Professional property videos cost $300-1,000+ per listing, eating into commission margins."
      },
      {
        icon: "⏰",
        title: "Time-Sensitive Listings",
        description: "Hot markets move fast. Waiting for videographers means missing the crucial first 48 hours."
      },
      {
        icon: "🏃",
        title: "Busy Schedule",
        description: "Between showings, open houses, and client calls, there's no time to coordinate video shoots."
      },
      {
        icon: "📊",
        title: "Standing Out Online",
        description: "Listings compete against hundreds of others. Static photos don't capture attention like video."
      }
    ],
    solutions: [
      {
        icon: "🏡",
        title: "Photos to Tours Instantly",
        description: "Upload listing photos and get a professional video tour in under a minute. No scheduling, no waiting."
      },
      {
        icon: "🎥",
        title: "Cinematic Motion Effects",
        description: "Ken Burns zoom, smooth pans, and parallax effects make every room look stunning."
      },
      {
        icon: "📱",
        title: "Social-Ready Content",
        description: "Create vertical videos for Instagram Reels, TikTok, and Facebook Stories from the same photos."
      },
      {
        icon: "💼",
        title: "Brand Your Videos",
        description: "Add your logo, contact info, and branding to every property video you create."
      }
    ],
    videoTypes: [
      { title: "Property Tours", description: "Full walkthrough videos from listing photos" },
      { title: "Room Showcases", description: "Highlight specific rooms with zoom and pan effects" },
      { title: "Exterior Features", description: "Show off curb appeal, yards, and outdoor spaces" },
      { title: "Neighborhood Highlights", description: "Showcase local amenities and lifestyle" },
      { title: "Agent Introduction", description: "Personal branding videos for listings" },
      { title: "Just Listed/Sold", description: "Announcement videos for social media" }
    ],
    benefits: [
      "Create listing videos same-day, not next-week",
      "Save $300-1,000 per listing on videography costs",
      "Generate 3x more engagement on MLS and Zillow",
      "Stand out with professional video in every listing",
      "Create social content that builds your personal brand",
      "Close faster with better visual marketing"
    ],
    stats: [
      { value: "403%", label: "More inquiries with video" },
      { value: "< 60s", label: "Video creation time" },
      { value: "$500+", label: "Saved per listing" },
      { value: "2.5x", label: "More shares on social" }
    ],
    testimonial: {
      quote: "I used to only do videos for luxury listings. Now every one of my listings has a video tour. My inquiries are through the roof.",
      author: "Michael R.",
      role: "Real Estate Agent, RE/MAX"
    },
    relatedTools: ["image-to-video-ai", "ai-zoom-video-effect", "ai-parallax-video-effect", "ai-3d-photo-video"],
    relatedUseCases: ["real-estate-listing-videos", "property-tour-videos"],
    faqs: [
      {
        question: "Can I use Hyreel videos on MLS and Zillow?",
        answer: "Yes! Hyreel exports standard MP4 videos that are accepted on all MLS systems, Zillow, Realtor.com, Redfin, and every major real estate platform."
      },
      {
        question: "What photo quality do I need for good results?",
        answer: "Standard real estate listing photos work great. If you have professional photography, even better. Hyreel's AI enhances motion regardless of starting quality."
      },
      {
        question: "Can I add my branding and contact info?",
        answer: "Yes. Hyreel supports custom branding including your logo, name, phone number, and brokerage info on all videos."
      },
      {
        question: "How long are the property tour videos?",
        answer: "You control the length. Create 15-second social clips or 2-3 minute full property tours. Most agents create both from the same photos."
      },
      {
        question: "Is this better than hiring a videographer?",
        answer: "For most listings, yes. You save hundreds of dollars and get results immediately. For luxury properties, Hyreel videos complement drone footage and professional tours."
      }
    ],
    ctaText: "Create Property Videos Free"
  },
  {
    slug: "fashion-apparel",
    name: "Fashion & Apparel",
    icon: "👗",
    metaTitle: "AI Video for Fashion Brands & Clothing Stores | Hyreel",
    metaDescription: "Create stunning fashion videos from product photos. Show clothing in motion, highlight details, and boost sales with AI-generated video content.",
    heroHeadline: "AI Video for Fashion & Apparel Brands",
    heroSubheadline: "Transform flat-lay and model photos into dynamic fashion videos. Show how clothing moves, fits, and feels — without expensive video shoots.",
    description: "Fashion brands and clothing retailers using AI video to showcase apparel in motion, highlight details, and drive online sales.",
    challenges: [
      {
        icon: "💰",
        title: "High Production Costs",
        description: "Fashion video shoots with models, studios, and crews cost $5,000-20,000+ per campaign."
      },
      {
        icon: "📅",
        title: "Seasonal Pressure",
        description: "New collections drop constantly. There's no time to produce videos for every piece."
      },
      {
        icon: "👀",
        title: "Static Doesn't Sell",
        description: "Customers want to see how clothing moves and flows. Static photos can't capture fabric quality."
      },
      {
        icon: "📱",
        title: "Social Content Demands",
        description: "TikTok and Instagram require constant video content. Static posts don't perform anymore."
      }
    ],
    solutions: [
      {
        icon: "✨",
        title: "Bring Clothes to Life",
        description: "Add natural motion to flat-lays and model shots. Show how fabric moves and drapes."
      },
      {
        icon: "🔍",
        title: "Highlight Details",
        description: "Zoom into stitching, textures, and design details that photos can't capture."
      },
      {
        icon: "🎨",
        title: "Multiple Angles",
        description: "Create orbit and rotation effects to show garments from every angle."
      },
      {
        icon: "📲",
        title: "Social-First Content",
        description: "Generate TikTok and Reels-ready videos from your existing product photography."
      }
    ],
    videoTypes: [
      { title: "Lookbook Videos", description: "Bring editorial photography to life with motion" },
      { title: "Product Details", description: "Zoom into textures, buttons, stitching, and materials" },
      { title: "Outfit Showcases", description: "Show complete looks with dynamic transitions" },
      { title: "Collection Reveals", description: "Dramatic reveals for new product launches" },
      { title: "Size & Fit", description: "Help customers visualize how items fit" },
      { title: "Styling Videos", description: "Show different ways to wear the same piece" }
    ],
    benefits: [
      "Create video content for every SKU affordably",
      "Show fabric movement and quality customers want to see",
      "Keep up with TikTok and Instagram content demands",
      "Launch new collections with video from day one",
      "Reduce returns by showing how clothes actually look",
      "Stand out in crowded fashion marketplaces"
    ],
    stats: [
      { value: "85%", label: "Want to see products in video" },
      { value: "40%", label: "Higher engagement" },
      { value: "< 30s", label: "Per video creation" },
      { value: "50%", label: "Lower return rates" }
    ],
    testimonial: {
      quote: "Our TikTok engagement went up 5x after we started using Hyreel. We now create video for every new arrival — something impossible before.",
      author: "Emma L.",
      role: "Marketing Director, Fashion Brand"
    },
    relatedTools: ["image-to-video-ai", "ai-zoom-video-effect", "ai-orbit-video-effect", "ai-parallax-video-effect"],
    relatedUseCases: ["fashion-brand-videos", "clothing-store-videos"],
    faqs: [
      {
        question: "Does Hyreel work with flat-lay photos?",
        answer: "Yes! Hyreel works great with flat-lays, on-model shots, hanger photos, and lifestyle imagery. Each photo type creates different motion effects."
      },
      {
        question: "Can I show fabric movement?",
        answer: "Hyreel's AI adds natural motion that suggests fabric flow and drape. While it's not the same as actual video, customers get a much better sense of the garment than static photos."
      },
      {
        question: "What video formats work best for fashion?",
        answer: "Vertical 9:16 for TikTok and Reels, square 1:1 for Instagram feed, and 16:9 for website and YouTube. Hyreel exports in all formats."
      },
      {
        question: "How do I create content for my entire catalog?",
        answer: "Hyreel is built for scale. Fashion brands create videos for hundreds of SKUs in a single session. Batch process your product photos efficiently."
      },
      {
        question: "Can I add music and branding?",
        answer: "Yes. Add your logo, brand colors, and trending audio to create on-brand content ready for your social channels."
      }
    ],
    ctaText: "Create Fashion Videos Free"
  },
  {
    slug: "food-restaurant",
    name: "Food & Restaurant",
    icon: "🍽️",
    metaTitle: "AI Video for Restaurants & Food Brands | Hyreel",
    metaDescription: "Create mouth-watering food videos from photos. Perfect for restaurant menus, food delivery apps, and social media marketing.",
    heroHeadline: "AI Video for Food & Restaurant Marketing",
    heroSubheadline: "Transform food photography into scroll-stopping videos that make customers hungry. Perfect for menus, delivery apps, and social media.",
    description: "Restaurants, food brands, and delivery services using AI video to showcase dishes and drive orders.",
    challenges: [
      {
        icon: "📸",
        title: "Food Photography Isn't Enough",
        description: "Static food photos struggle to compete on social media where video dominates engagement."
      },
      {
        icon: "💰",
        title: "Video Production Costs",
        description: "Professional food videography with proper lighting and styling costs $1,000+ per session."
      },
      {
        icon: "📅",
        title: "Menu Changes Frequently",
        description: "Seasonal menus and daily specials make it impossible to keep video content current."
      },
      {
        icon: "📱",
        title: "Social Media Demands",
        description: "TikTok food content requires constant posting. Static images get buried in algorithms."
      }
    ],
    solutions: [
      {
        icon: "🍔",
        title: "Make Food Look Irresistible",
        description: "Add motion that highlights textures, steam, and details that make dishes look delicious."
      },
      {
        icon: "⚡",
        title: "Create Videos Instantly",
        description: "Turn any food photo into video in seconds. Update content as often as your menu changes."
      },
      {
        icon: "🎬",
        title: "Cinematic Effects",
        description: "Smooth zooms, dramatic reveals, and appetizing motion that stops the scroll."
      },
      {
        icon: "📲",
        title: "Ready for Delivery Apps",
        description: "Create video content for DoorDash, Uber Eats, and your own ordering platforms."
      }
    ],
    videoTypes: [
      { title: "Dish Showcases", description: "Dramatic reveals and appetizing close-ups" },
      { title: "Menu Highlights", description: "Featured items and daily specials" },
      { title: "Behind the Kitchen", description: "Show preparation and fresh ingredients" },
      { title: "Chef Features", description: "Highlight your culinary team and expertise" },
      { title: "Atmosphere Videos", description: "Capture your restaurant's vibe and experience" },
      { title: "Delivery Promos", description: "Content for delivery app listings" }
    ],
    benefits: [
      "Make every dish look irresistible with motion",
      "Keep up with social media's demand for video content",
      "Update content instantly when menus change",
      "Stand out on delivery apps with video listings",
      "Drive more orders with appetizing content",
      "Save thousands on food videography costs"
    ],
    stats: [
      { value: "65%", label: "More engagement than photos" },
      { value: "35%", label: "Higher order rates" },
      { value: "< 30s", label: "Per dish video" },
      { value: "3x", label: "More social shares" }
    ],
    testimonial: {
      quote: "Our Instagram went from 500 to 15,000 followers after we started posting Hyreel food videos daily. Orders from social are up 40%.",
      author: "Chef Marco D.",
      role: "Restaurant Owner"
    },
    relatedTools: ["image-to-video-ai", "ai-zoom-video-effect", "ai-instagram-reels-maker", "ai-tiktok-video-generator"],
    relatedUseCases: ["restaurant-menu-videos", "food-brand-videos"],
    faqs: [
      {
        question: "What kind of food photos work best?",
        answer: "Well-lit, overhead or 45-degree angle food photography works best. Professional food photos are ideal, but even good smartphone shots produce great results."
      },
      {
        question: "Can Hyreel add steam or motion effects to food?",
        answer: "Hyreel adds subtle motion that makes food look more appetizing — smooth zooms, gentle movements, and detail highlights. It suggests steam and freshness through motion."
      },
      {
        question: "How do I use videos on DoorDash or Uber Eats?",
        answer: "Export your Hyreel videos and upload them to your merchant dashboard. Video listings get significantly more views and orders than photo-only listings."
      },
      {
        question: "How often should I post food videos?",
        answer: "For social media, daily posting drives the best results. With Hyreel, you can create a week's worth of content in one session."
      },
      {
        question: "Can I create videos for my entire menu?",
        answer: "Yes! Many restaurants create videos for every menu item. It's fast and affordable to cover your full menu with Hyreel."
      }
    ],
    ctaText: "Create Food Videos Free"
  },
  {
    slug: "beauty-cosmetics",
    name: "Beauty & Cosmetics",
    icon: "💄",
    metaTitle: "AI Video for Beauty & Cosmetic Brands | Hyreel",
    metaDescription: "Create stunning beauty videos from product photos. Show makeup, skincare, and cosmetics in motion. Perfect for social media and e-commerce.",
    heroHeadline: "AI Video for Beauty & Cosmetics",
    heroSubheadline: "Transform product photos into glamorous beauty videos. Show textures, swatches, and products in motion — without expensive shoots.",
    description: "Beauty brands and cosmetic companies using AI video to showcase products, demonstrate textures, and drive sales.",
    challenges: [
      {
        icon: "✨",
        title: "Texture Is Everything",
        description: "Customers need to see product texture, shimmer, and finish — static photos can't capture it."
      },
      {
        icon: "📱",
        title: "TikTok & Reels Pressure",
        description: "Beauty brands need constant video content for social algorithms. Production can't keep up."
      },
      {
        icon: "💰",
        title: "High Production Standards",
        description: "Beauty videography requires perfect lighting and expensive production to look premium."
      },
      {
        icon: "🎨",
        title: "Large SKU Counts",
        description: "Dozens of shades and products mean thousands of pieces of content needed."
      }
    ],
    solutions: [
      {
        icon: "💫",
        title: "Show Shimmer & Texture",
        description: "Motion effects highlight product shine, sparkle, and texture better than any photo."
      },
      {
        icon: "🔍",
        title: "Close-Up Details",
        description: "Zoom effects show product quality, packaging details, and color payoff."
      },
      {
        icon: "🎬",
        title: "Premium Look & Feel",
        description: "Cinematic motion gives every product video a high-end, editorial quality."
      },
      {
        icon: "📲",
        title: "Social-Ready Content",
        description: "Create TikTok, Reels, and YouTube Shorts content from your product photography."
      }
    ],
    videoTypes: [
      { title: "Product Reveals", description: "Dramatic packaging and product unveils" },
      { title: "Texture Close-Ups", description: "Show shimmer, glitter, and finish in motion" },
      { title: "Swatch Videos", description: "Color payoff and shade comparisons" },
      { title: "Routine Videos", description: "Product application order and combinations" },
      { title: "Before/After", description: "Show transformation and results" },
      { title: "Collection Launches", description: "New product and collection announcements" }
    ],
    benefits: [
      "Show product texture and finish in motion",
      "Create content for every shade and SKU",
      "Keep up with social media content demands",
      "Achieve premium production value affordably",
      "Launch new products with video from day one",
      "Drive higher conversion rates online"
    ],
    stats: [
      { value: "80%", label: "Want to see products in video" },
      { value: "50%", label: "Higher conversion rates" },
      { value: "< 30s", label: "Per product video" },
      { value: "4x", label: "Social engagement lift" }
    ],
    testimonial: {
      quote: "We create video for every single shade now. Our TikTok went viral three times last month. Hyreel changed our content game completely.",
      author: "Jessica K.",
      role: "Social Media Manager, Beauty Brand"
    },
    relatedTools: ["image-to-video-ai", "ai-zoom-video-effect", "ai-orbit-video-effect", "ai-tiktok-video-generator"],
    relatedUseCases: ["beauty-brand-videos", "cosmetics-marketing-videos"],
    faqs: [
      {
        question: "Can Hyreel capture product shimmer and sparkle?",
        answer: "Yes! The motion effects highlight reflective surfaces, shimmer particles, and texture in ways static photos can't. Customers see how products actually look."
      },
      {
        question: "How do I create videos for all my shades?",
        answer: "Hyreel handles scale easily. Create videos for your entire shade range in one session. Many beauty brands process 50+ products in an afternoon."
      },
      {
        question: "What video styles work best for beauty?",
        answer: "Slow zooms for texture, orbits for packaging, and quick cuts for social perform best. Hyreel supports all these styles."
      },
      {
        question: "Can I use these on my e-commerce site?",
        answer: "Absolutely. Hyreel videos work on Shopify, Sephora, Ulta vendor portals, Amazon, and all beauty retail platforms."
      },
      {
        question: "Do I need professional product photography?",
        answer: "Professional photos produce the best results, but Hyreel works with any clear product image. Good lighting is the key factor."
      }
    ],
    ctaText: "Create Beauty Videos Free"
  },
  {
    slug: "fitness-wellness",
    name: "Fitness & Wellness",
    icon: "💪",
    metaTitle: "AI Video for Fitness Brands & Gyms | Hyreel",
    metaDescription: "Create engaging fitness videos from photos. Perfect for gyms, personal trainers, supplement brands, and wellness businesses.",
    heroHeadline: "AI Video for Fitness & Wellness",
    heroSubheadline: "Transform workout photos and product shots into motivating video content. Perfect for gyms, trainers, and supplement brands.",
    description: "Fitness businesses, gyms, and wellness brands using AI video for marketing, social content, and product promotion.",
    challenges: [
      {
        icon: "📹",
        title: "Content Production Time",
        description: "Filming workouts and editing videos takes hours away from training clients and running your business."
      },
      {
        icon: "📱",
        title: "Social Media Demands",
        description: "Fitness audiences expect daily video content. Keeping up with posting schedules is exhausting."
      },
      {
        icon: "💰",
        title: "Equipment & Editing",
        description: "Quality fitness video requires good cameras, lighting, and editing skills most trainers don't have."
      },
      {
        icon: "🏋️",
        title: "Showcasing Equipment",
        description: "Gyms need to show off facilities and equipment, but photo galleries don't capture the energy."
      }
    ],
    solutions: [
      {
        icon: "⚡",
        title: "Photos to Content Instantly",
        description: "Turn workout photos, gym shots, and product images into engaging video in seconds."
      },
      {
        icon: "🎬",
        title: "Dynamic Motion Effects",
        description: "Add energy and movement to static images that match fitness content expectations."
      },
      {
        icon: "📲",
        title: "Social-First Content",
        description: "Create TikTok, Reels, and Stories content from your existing photos and graphics."
      },
      {
        icon: "🏢",
        title: "Facility Tours",
        description: "Transform gym photos into virtual tour videos that attract new members."
      }
    ],
    videoTypes: [
      { title: "Workout Teasers", description: "High-energy previews of training sessions" },
      { title: "Gym Tours", description: "Virtual walkthroughs of facilities and equipment" },
      { title: "Transformation Stories", description: "Before/after client success showcases" },
      { title: "Supplement Showcases", description: "Product videos for nutrition brands" },
      { title: "Trainer Promos", description: "Personal branding content for coaches" },
      { title: "Class Announcements", description: "Promote new classes and schedules" }
    ],
    benefits: [
      "Create daily social content without filming",
      "Turn client progress photos into motivating content",
      "Showcase your gym or studio professionally",
      "Promote supplements and products with video",
      "Build your personal brand as a trainer",
      "Attract new members with engaging content"
    ],
    stats: [
      { value: "70%", label: "Higher engagement" },
      { value: "< 60s", label: "Content creation time" },
      { value: "3x", label: "More leads from video" },
      { value: "Daily", label: "Posting now possible" }
    ],
    testimonial: {
      quote: "I used to spend Sundays filming content. Now I create a week's worth in 30 minutes with Hyreel. My client inquiries doubled.",
      author: "Marcus T.",
      role: "Personal Trainer & Gym Owner"
    },
    relatedTools: ["image-to-video-ai", "ai-zoom-video-effect", "ai-instagram-reels-maker", "ai-tiktok-video-generator"],
    relatedUseCases: ["fitness-trainer-videos", "gym-marketing-videos"],
    faqs: [
      {
        question: "Can I create workout videos from photos?",
        answer: "Yes! While Hyreel doesn't replace actual workout demonstrations, it creates engaging teasers, announcements, and promotional content from your training photos."
      },
      {
        question: "How do gyms use Hyreel?",
        answer: "Gyms create facility tours, equipment showcases, class announcements, and member success stories. It's perfect for social media marketing and website content."
      },
      {
        question: "Can I use client transformation photos?",
        answer: "Absolutely. Before/after transformation videos perform incredibly well on social media. Just ensure you have client permission for their photos."
      },
      {
        question: "What about supplement and product videos?",
        answer: "Hyreel works great for supplement brands. Create product showcases, ingredient highlights, and promotional content from your product photography."
      },
      {
        question: "Is this good for personal trainers?",
        answer: "Yes! Personal trainers use Hyreel for social content, client progress videos, promotional material, and building their personal brand online."
      }
    ],
    ctaText: "Create Fitness Videos Free"
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    icon: "✈️",
    metaTitle: "AI Video for Hotels, Travel & Tourism | Hyreel",
    metaDescription: "Create stunning destination videos from photos. Perfect for hotels, resorts, travel agencies, and tourism marketing.",
    heroHeadline: "AI Video for Travel & Hospitality",
    heroSubheadline: "Transform destination photos into cinematic travel videos. Perfect for hotels, resorts, travel agencies, and tourism boards.",
    description: "Travel businesses, hotels, and tourism companies using AI video to showcase destinations and drive bookings.",
    challenges: [
      {
        icon: "📸",
        title: "Photos Don't Capture the Experience",
        description: "Static images can't convey the feeling of being at a destination. Video tells a better story."
      },
      {
        icon: "💰",
        title: "Video Production Costs",
        description: "Professional destination videos with travel, crews, and equipment cost $10,000+."
      },
      {
        icon: "🌍",
        title: "Multiple Properties/Destinations",
        description: "Hotels with multiple locations can't afford video for every property and room type."
      },
      {
        icon: "📅",
        title: "Seasonal Content Needs",
        description: "Destinations need fresh content for each season, but production can't keep up."
      }
    ],
    solutions: [
      {
        icon: "🎬",
        title: "Cinematic Destination Content",
        description: "Transform photos into dreamy travel videos with smooth motion and atmospheric effects."
      },
      {
        icon: "🏨",
        title: "Virtual Property Tours",
        description: "Create video tours of every room type, amenity, and property from existing photography."
      },
      {
        icon: "⚡",
        title: "Content for Every Season",
        description: "Quickly create seasonal content from your photo library without new shoots."
      },
      {
        icon: "📲",
        title: "Social Travel Content",
        description: "Generate TikTok and Reels content that inspires wanderlust and drives bookings."
      }
    ],
    videoTypes: [
      { title: "Destination Showcases", description: "Dreamy videos that inspire travel" },
      { title: "Property Tours", description: "Virtual walkthroughs of rooms and amenities" },
      { title: "Experience Highlights", description: "Show activities, dining, and attractions" },
      { title: "Seasonal Promotions", description: "Content for holidays and peak seasons" },
      { title: "Social Inspiration", description: "Short-form content for travel dreaming" },
      { title: "Booking Drivers", description: "Conversion-focused promotional videos" }
    ],
    benefits: [
      "Create video for every property and room type",
      "Show destinations in motion that inspires booking",
      "Keep content fresh for every season",
      "Stand out on OTAs and booking platforms",
      "Drive social engagement with travel content",
      "Save thousands on video production"
    ],
    stats: [
      { value: "67%", label: "Book after watching video" },
      { value: "4x", label: "Higher booking rates" },
      { value: "< 60s", label: "Per video creation" },
      { value: "85%", label: "Watch travel video before booking" }
    ],
    testimonial: {
      quote: "We created video tours for all 200 rooms in a single day. Our website conversion rate jumped 35%. Guests say the videos sold them.",
      author: "Christina M.",
      role: "Marketing Director, Boutique Hotel Chain"
    },
    relatedTools: ["image-to-video-ai", "ai-parallax-video-effect", "ai-zoom-video-effect", "ai-3d-photo-video"],
    relatedUseCases: ["hotel-room-videos", "destination-marketing-videos"],
    faqs: [
      {
        question: "Can hotels create videos for every room type?",
        answer: "Yes! Hyreel makes it affordable and fast to create video tours for every room category, suite, and property. Many hotels cover their entire inventory in one day."
      },
      {
        question: "What destinations work best for Hyreel?",
        answer: "Any destination with good photography works well. Beach resorts, mountain lodges, city hotels, tours, and attractions all create beautiful video content."
      },
      {
        question: "Can I use these on booking platforms?",
        answer: "Yes. Hyreel videos work on Booking.com, Expedia, Airbnb, your own website, and all travel platforms that support video."
      },
      {
        question: "How do travel agencies use Hyreel?",
        answer: "Agencies create destination showcase videos, package promotions, and social content from supplier photography. It's perfect for selling the dream."
      },
      {
        question: "What about seasonal content?",
        answer: "Hyreel makes seasonal content easy. Create winter, summer, holiday, and special event content from your photo library without new shoots."
      }
    ],
    ctaText: "Create Travel Videos Free"
  },
  {
    slug: "education-online-courses",
    name: "Education & Online Courses",
    icon: "📚",
    metaTitle: "AI Video for Online Courses & Education | Hyreel",
    metaDescription: "Create engaging educational videos from slides and images. Perfect for course creators, educators, and e-learning platforms.",
    heroHeadline: "AI Video for Education & Online Courses",
    heroSubheadline: "Transform slides, diagrams, and images into engaging educational videos. Perfect for course creators and online educators.",
    description: "Educators, course creators, and e-learning platforms using AI video to create engaging learning content.",
    challenges: [
      {
        icon: "🎥",
        title: "Video Production Complexity",
        description: "Creating quality educational video requires equipment, editing skills, and time most educators don't have."
      },
      {
        icon: "😴",
        title: "Static Content Is Boring",
        description: "Students disengage from static slides and text. Video increases retention and completion rates."
      },
      {
        icon: "📚",
        title: "Large Course Libraries",
        description: "Converting existing courses to video is a massive undertaking with traditional methods."
      },
      {
        icon: "⏰",
        title: "Content Update Needs",
        description: "Course material needs frequent updates, but re-filming is time-consuming and expensive."
      }
    ],
    solutions: [
      {
        icon: "📊",
        title: "Slides to Video",
        description: "Transform presentations and slides into dynamic video content with motion and interest."
      },
      {
        icon: "🎬",
        title: "Engaging Motion",
        description: "Add professional motion effects that keep students engaged and improve retention."
      },
      {
        icon: "⚡",
        title: "Rapid Content Creation",
        description: "Convert entire courses to video format quickly. Update content instantly when needed."
      },
      {
        icon: "🌍",
        title: "Scale to Multiple Languages",
        description: "Create video versions of courses for different markets and languages."
      }
    ],
    videoTypes: [
      { title: "Lecture Videos", description: "Engaging presentations from slide content" },
      { title: "Concept Explainers", description: "Visual explanations of complex topics" },
      { title: "Course Promos", description: "Marketing videos for course sales pages" },
      { title: "Module Introductions", description: "Chapter and section openers" },
      { title: "Summary Videos", description: "Key takeaways and review content" },
      { title: "Social Teasers", description: "Short-form educational content" }
    ],
    benefits: [
      "Convert existing slides and materials to video",
      "Increase student engagement and completion rates",
      "Update course content without re-filming",
      "Create promotional content for course marketing",
      "Scale content across multiple courses quickly",
      "Look more professional without video expertise"
    ],
    stats: [
      { value: "95%", label: "Students prefer video" },
      { value: "75%", label: "Higher completion rates" },
      { value: "< 60s", label: "Per video creation" },
      { value: "2x", label: "Course sales with video" }
    ],
    testimonial: {
      quote: "I converted my entire 40-lesson course to video in one weekend. Student completion rates went from 23% to 67%. Complete game changer.",
      author: "Dr. Amanda P.",
      role: "Online Course Creator"
    },
    relatedTools: ["image-to-video-ai", "ai-zoom-video-effect", "ai-parallax-video-effect", "ai-youtube-shorts-generator"],
    relatedUseCases: ["online-course-videos", "educational-content-creation"],
    faqs: [
      {
        question: "Can I convert PowerPoint slides to video?",
        answer: "Yes! Export slides as images and Hyreel transforms them into engaging video content with professional motion effects. Perfect for lecture videos."
      },
      {
        question: "How does video improve course completion?",
        answer: "Studies show video content increases engagement by 95% and course completion by up to 75%. Students find video more engaging than static slides."
      },
      {
        question: "Can I update videos when course content changes?",
        answer: "Yes. Simply upload new slides or images and generate updated videos in seconds. No re-filming required."
      },
      {
        question: "What about course promo videos?",
        answer: "Hyreel creates excellent course promotional videos. Use course screenshots, testimonial photos, and results imagery for compelling sales page content."
      },
      {
        question: "Does this work for live courses too?",
        answer: "Yes! Create supplementary video materials, course previews, and promotional content to complement live teaching."
      }
    ],
    ctaText: "Create Course Videos Free"
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((industry) => industry.slug);
}
