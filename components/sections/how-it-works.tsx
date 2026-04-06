import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

const steps = [
  {
    number: "1",
    title: "Upload a Photo",
    description: "Drop in any photo — a selfie, product shot, or stock image. Our AI handles the rest.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Pick a Style",
    description: "Choose from 100+ viral templates or let AI suggest the best format for your content.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "AI Does the Work",
    description: "In seconds, AI generates motion, voiceover, music, and captions. Edit if you want, or ship as-is.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Post Everywhere",
    description: "Export in HD and publish directly to TikTok, Instagram, YouTube — no watermarks.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <Section spacing="xl" className="bg-[var(--surface-light)]">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-4">
          <span className="text-xs font-medium text-[var(--brand-primary)] uppercase tracking-wider">
            How It Works
          </span>
        </div>
        <Heading as="h2" className="mb-4">
          From Photo to Viral Video in 4 Steps
        </Heading>
        <Text variant="large" className="max-w-2xl mx-auto">
          No editing skills needed. No expensive software. Just upload, tap, and post.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connection line for desktop */}
        <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[var(--brand-primary)]/20 via-[var(--brand-primary)]/40 to-[var(--brand-primary)]/20" />

        {steps.map((step, index) => (
          <div key={index} className="relative text-center">
            {/* Step number circle */}
            <div className="relative z-10 mb-6 inline-flex">
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[var(--brand-primary)] shadow-lg shadow-[var(--brand-primary)]/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-[var(--brand-primary)]">
                  {step.number}
                </span>
              </div>
            </div>

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] mb-4">
              {step.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              {step.title}
            </h3>
            <Text variant="small" className="max-w-xs mx-auto">
              {step.description}
            </Text>
          </div>
        ))}
      </div>

      {/* Time indicator */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[var(--border-color)] shadow-sm">
          <svg className="w-5 h-5 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-medium text-[var(--text-primary)]">
            Average time: <span className="text-[var(--brand-primary)]">under 5 minutes</span>
          </span>
        </div>
      </div>
    </Section>
  );
}
