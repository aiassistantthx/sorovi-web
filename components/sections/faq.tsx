import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: "How does photo-to-video AI work?",
    answer: "Upload any photo (selfie, product shot, stock image) and Sorovi's AI adds realistic motion, transitions, and effects. It can animate faces, create zoom effects, add parallax motion, and more — transforming static images into scroll-stopping videos in seconds.",
  },
  {
    question: "Do I need any video editing experience?",
    answer: "None at all. Sorovi is built for complete beginners. If you can tap a button, you can create professional videos. Our AI handles all the technical stuff — you just pick what looks good and hit export.",
  },
  {
    question: "What social platforms are supported?",
    answer: "All of them. TikTok (9:16), Instagram Reels (9:16), YouTube Shorts (9:16), YouTube videos (16:9), Facebook, Pinterest, and custom dimensions. You can publish directly from the app or download in HD to post manually.",
  },
  {
    question: "How fast can I create a video?",
    answer: "Most creators finish their first video in under 5 minutes. The AI generates everything in seconds — you can spend extra time customizing if you want, but it's not required. Our fastest users create 10+ videos per hour.",
  },
  {
    question: "Is there a watermark on free videos?",
    answer: "The free plan includes a small Sorovi watermark. Premium plans (starting at $39/month) remove all watermarks, unlock HD exports, and give you access to all 100+ AI features. All videos are 100% yours to use commercially.",
  },
  {
    question: "What languages does the AI support?",
    answer: "32 languages including English, Spanish, French, German, Portuguese, Chinese, Japanese, Korean, Arabic, Hindi, and more. Both AI script generation and AI voiceover work across all supported languages.",
  },
  {
    question: "Can I use my own voice and media?",
    answer: "Yes! You can record your own voiceover, upload your own photos/videos, and add your own music. Mix AI-generated content with your personal assets for complete creative control.",
  },
  {
    question: "What if I want to cancel?",
    answer: "Cancel anytime from your account settings — no questions asked. You'll keep access until the end of your billing period. We don't do annual lock-ins or cancellation fees.",
  },
];

// FAQPage Schema for SEO
const faqSchema = {
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

export function FAQSection() {
  return (
    <Section spacing="xl" className="bg-[var(--surface-light)]">
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="text-center mb-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-4">
          <span className="text-xs font-medium text-[var(--brand-primary)] uppercase tracking-wider">
            FAQ
          </span>
        </div>
        <Heading as="h2" className="mb-4">
          Questions? We&apos;ve Got Answers
        </Heading>
        <Text variant="large" className="max-w-2xl mx-auto">
          Everything you need to know about creating videos with Sorovi
        </Text>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion items={faqs} />

        {/* Links to more resources */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-[var(--border-color)] text-center">
          <Text variant="small" className="text-[var(--text-secondary)] mb-4">
            Still have questions? We&apos;re here to help.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-medium hover:bg-[var(--brand-primary)]/20 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] text-sm font-medium hover:border-[var(--brand-primary)]/30 hover:text-[var(--text-primary)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
