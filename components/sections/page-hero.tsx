import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";

interface PageHeroProps {
  badge?: {
    icon?: string;
    text: string;
  };
  breadcrumb?: {
    label: string;
    href?: string;
  }[];
  title: string;
  description: string;
  primaryCta?: {
    text: string;
    href?: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  centered?: boolean;
}

export function PageHero({
  badge,
  breadcrumb,
  title,
  description,
  primaryCta,
  secondaryCta,
  centered = true,
}: PageHeroProps) {
  return (
    <Section spacing="xl" className="relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
      </div>

      <div className={centered ? "text-center max-w-4xl mx-auto" : "max-w-4xl"}>
        {/* Breadcrumb */}
        {breadcrumb && (
          <Breadcrumb
            items={breadcrumb}
            className={centered ? "justify-center mb-6" : "mb-6"}
          />
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--brand-primary)]">
              {badge.icon && `${badge.icon} `}{badge.text}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[var(--text-primary)] mb-6">
          {title}
        </h1>

        {/* Description */}
        <Text variant="large" className={`mb-8 ${centered ? "max-w-3xl mx-auto" : ""}`}>
          {description}
        </Text>

        {/* CTA Buttons */}
        {(primaryCta || secondaryCta) && (
          <div className={`flex flex-col sm:flex-row items-center gap-4 ${centered ? "justify-center" : ""}`}>
            {primaryCta && (
              primaryCta.href ? (
                <Link href={primaryCta.href}>
                  <Button size="lg">{primaryCta.text}</Button>
                </Link>
              ) : (
                <Button size="lg">{primaryCta.text}</Button>
              )
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button size="lg" variant="secondary">
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}
