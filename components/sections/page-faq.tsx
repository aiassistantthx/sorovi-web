import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

interface PageFAQProps {
  title?: string;
  description?: string;
  items: FAQItem[];
  showContactLink?: boolean;
  variant?: "default" | "light";
  includeSchema?: boolean;
}

export function PageFAQ({
  title = "Frequently Asked Questions",
  description,
  items,
  showContactLink = true,
  variant = "light",
  includeSchema = false,
}: PageFAQProps) {
  // FAQPage Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Section
      spacing="xl"
      className={variant === "light" ? "bg-[var(--surface-light)]" : ""}
    >
      {/* Schema markup */}
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="text-center mb-10">
        <Heading as="h2" className="mb-4">
          {title}
        </Heading>
        {description && (
          <Text variant="large">{description}</Text>
        )}
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion items={items} />

        {showContactLink && (
          <div className="text-center mt-8">
            <Text variant="small">
              Still have questions?{" "}
              <Link
                href="/contact"
                className="text-[var(--brand-primary)] hover:underline"
              >
                Contact support
              </Link>
            </Text>
          </div>
        )}
      </div>
    </Section>
  );
}
