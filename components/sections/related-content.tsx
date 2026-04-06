import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

interface RelatedItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
  badge?: string;
  meta?: string;
}

interface RelatedContentProps {
  title?: string;
  subtitle?: string;
  items: RelatedItem[];
  ctaText?: string;
  viewAllHref?: string;
  viewAllText?: string;
  variant?: "default" | "light";
  columns?: 2 | 3 | 4;
}

export function RelatedContent({
  title = "Related Content",
  subtitle,
  items,
  ctaText,
  viewAllHref,
  viewAllText,
  variant = "light",
  columns = 3,
}: RelatedContentProps) {
  if (items.length === 0) return null;

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <Section
      spacing="lg"
      className={variant === "light" ? "bg-[var(--surface-light)]" : ""}
    >
      <div className="text-center mb-8">
        <Heading as="h3" className="mb-2">
          {title}
        </Heading>
        {subtitle && <Text variant="small">{subtitle}</Text>}
      </div>

      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 max-w-5xl mx-auto`}>
        {items.slice(0, columns === 4 ? 4 : 6).map((item, index) => (
          <Link key={index} href={item.href}>
            <Card
              variant="elevated"
              className="h-full group cursor-pointer hover:border-[var(--brand-primary)]/30 transition-all"
            >
              {/* Badge and Meta */}
              {(item.badge || item.meta) && (
                <div className="flex items-center justify-between mb-3">
                  {item.badge && <Badge variant="primary">{item.badge}</Badge>}
                  {item.meta && (
                    <span className="text-xs text-[var(--text-muted)]">
                      {item.meta}
                    </span>
                  )}
                </div>
              )}

              {/* Icon */}
              {item.icon && <div className="text-3xl mb-3">{item.icon}</div>}

              {/* Title */}
              <h4 className="text-base md:text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
                {item.title}
              </h4>

              {/* Description */}
              <Text variant="small" className="line-clamp-2">
                {item.description}
              </Text>

              {/* CTA Text */}
              {ctaText && (
                <div className="flex items-center gap-1 text-[var(--brand-primary)] text-sm font-medium mt-3">
                  {ctaText}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </Card>
          </Link>
        ))}
      </div>

      {/* View All Link */}
      {viewAllHref && viewAllText && (
        <div className="text-center mt-8">
          <Link href={viewAllHref}>
            <Button variant="secondary">{viewAllText}</Button>
          </Link>
        </div>
      )}
    </Section>
  );
}
