import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FinalCTAProps {
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href?: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: "default" | "light";
}

export function FinalCTA({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "default",
}: FinalCTAProps) {
  return (
    <Section
      spacing="xl"
      className={variant === "light" ? "bg-[var(--surface-light)]" : ""}
    >
      <div className="text-center max-w-3xl mx-auto">
        <Heading as="h2" className="mb-4">
          {title}
        </Heading>
        <Text variant="large" className="mb-8">
          {description}
        </Text>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCta.href ? (
            <Link href={primaryCta.href}>
              <Button size="lg">{primaryCta.text}</Button>
            </Link>
          ) : (
            <Button size="lg">{primaryCta.text}</Button>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href}>
              <Button size="lg" variant="secondary">
                {secondaryCta.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Section>
  );
}
