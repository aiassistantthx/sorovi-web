import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

const steps = [
  {
    number: "01",
    title: "Choose Your Style",
    description: "Select from 100+ templates or start from scratch. Pick your video format: TikTok, Instagram Reels, YouTube Shorts, or custom.",
    features: ["100+ templates", "All social formats", "Custom dimensions"],
  },
  {
    number: "02",
    title: "Add Your Content",
    description: "Type your script or let AI generate one for you. Choose from 50+ AI voices or record your own. Add AI-generated visuals or upload your own.",
    features: ["AI script generation", "50+ voices", "AI-generated visuals"],
  },
  {
    number: "03",
    title: "Customize & Edit",
    description: "Fine-tune your video with our simple editor. Add music, captions, transitions, and effects. Preview in real-time.",
    features: ["Simple editor", "Auto-captions", "Real-time preview"],
  },
  {
    number: "04",
    title: "Export & Share",
    description: "Download in HD quality or publish directly to TikTok, Instagram, and YouTube. No watermarks, unlimited exports.",
    features: ["HD quality", "Direct publishing", "No watermarks"],
  },
];

export function HowItWorksSection() {
  return (
    <Section spacing="xl">
      <div className="text-center mb-10">
        <Heading as="h2" className="mb-4">
          Four Easy Steps to Create Your Video
        </Heading>
        <Text variant="large" className="max-w-2xl mx-auto">
          From idea to viral video in minutes. No editing experience needed.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connector line - hidden on mobile, shown on larger screens */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[var(--brand-primary)] to-transparent -translate-x-4" />
            )}

            {/* Step number */}
            <div className="relative">
              <div className="text-6xl font-bold text-[var(--text-gray-700)] mb-4">
                {step.number}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-white mb-3">
              {step.title}
            </h3>
            <Text variant="small" className="mb-4">
              {step.description}
            </Text>

            {/* Features list */}
            <ul className="space-y-2">
              {step.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-gray-300)]">
                  <svg className="w-4 h-4 text-[var(--brand-secondary)] flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
