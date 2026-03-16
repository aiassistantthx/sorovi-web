import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

interface RelatedItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

interface RelatedContentProps {
  title?: string;
  subtitle?: string;
  items: RelatedItem[];
}

export function RelatedContent({
  title = "Related Content",
  subtitle,
  items,
}: RelatedContentProps) {
  if (items.length === 0) return null;

  return (
    <Section spacing="lg" className="bg-[var(--surface-dark)]/30">
      <div className="text-center mb-8">
        <Heading as="h3" className="mb-2">
          {title}
        </Heading>
        {subtitle && <Text variant="small">{subtitle}</Text>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.slice(0, 6).map((item, index) => (
          <Link key={index} href={item.href}>
            <Card variant="glass" className="h-full">
              {item.icon && <div className="text-3xl mb-3">{item.icon}</div>}
              <h4 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h4>
              <Text variant="small">{item.description}</Text>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
