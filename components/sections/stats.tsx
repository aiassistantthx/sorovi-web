import { Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

const stats = [
  {
    value: "240,909+",
    label: "Videos Created",
    subtext: "this month alone"
  },
  {
    value: "<5 min",
    label: "Average Creation Time",
    subtext: "from idea to export"
  },
  {
    value: "400+",
    label: "Viral Creators",
    subtext: "hit 100K+ views"
  },
  {
    value: "$0",
    label: "Upfront Cost",
    subtext: "free plan available"
  },
];

export function StatsSection() {
  return (
    <Section spacing="lg" className="border-y border-[var(--border-color)] bg-[var(--surface-light)]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-1">
              {stat.value}
            </div>
            <div className="text-sm md:text-base font-medium text-[var(--text-primary)] mb-0.5">
              {stat.label}
            </div>
            <Text variant="small" className="text-[var(--text-muted)]">
              {stat.subtext}
            </Text>
          </div>
        ))}
      </div>
    </Section>
  );
}
