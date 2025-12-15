import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: "How does the AI video generation work?",
    answer: "Sorovi uses advanced AI models to generate scripts, voices, visuals, and edit videos automatically. Simply provide your topic or script, choose your style, and our AI handles the rest. You can customize every aspect or let the AI do it all for you.",
  },
  {
    question: "What video formats and platforms are supported?",
    answer: "Sorovi supports all major social media formats including TikTok (9:16), Instagram Reels (9:16), YouTube Shorts (9:16), YouTube videos (16:9), and custom dimensions. You can export and publish directly to TikTok, Instagram, YouTube, Facebook, and more.",
  },
  {
    question: "Do I need video editing experience?",
    answer: "Not at all! Sorovi is designed for everyone, from complete beginners to professional creators. Our AI handles all the technical aspects, and our simple editor makes customization easy. If you can type, you can create viral videos.",
  },
  {
    question: "Can I use my own voice and media?",
    answer: "Yes! While Sorovi offers 50+ AI voices and AI-generated visuals, you can also record your own voice, upload your own videos, images, and music. Mix and match AI-generated content with your own for complete creative control.",
  },
  {
    question: "Is there a watermark on free videos?",
    answer: "Our free plan includes limited features with a small watermark. Premium plans (starting at $39/month) remove all watermarks, unlock all AI features, and give you unlimited exports in HD quality. All videos are 100% yours to use commercially.",
  },
  {
    question: "How long does it take to create a video?",
    answer: "Most videos are created in under 5 minutes. The AI generates your video in seconds, and you can spend additional time customizing if you want. Our fastest users create multiple videos per hour!",
  },
  {
    question: "What languages are supported?",
    answer: "Sorovi supports 32 languages including English, Spanish, French, German, Chinese, Japanese, Korean, Arabic, Hindi, and more. Both AI script generation and AI voices are available in multiple languages.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes! All our plans are month-to-month with no long-term commitment. Cancel anytime from your account settings. If you cancel, you'll retain access until the end of your billing period.",
  },
];

export function FAQSection() {
  return (
    <Section spacing="xl">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Heading as="h2" className="mb-4">
            Frequently Asked Questions
          </Heading>
          <Text variant="large">
            Everything you need to know about Sorovi
          </Text>
        </div>

        <Accordion items={faqs} />

        {/* Links to more resources */}
        <div className="mt-12 text-center">
          <Text variant="small">
            Still have questions?{" "}
            <Link href="/support" className="text-[var(--brand-primary)] hover:text-[var(--accent-blue)] transition-colors">
              Visit our Help Center
            </Link>
            {" "}or{" "}
            <Link href="/contact" className="text-[var(--brand-primary)] hover:text-[var(--accent-blue)] transition-colors">
              contact support
            </Link>
          </Text>
        </div>
      </div>
    </Section>
  );
}
