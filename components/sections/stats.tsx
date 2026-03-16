import { Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";

const stats = [
  { value: "240,909+", label: "Videos Created" },
  { value: "14,258+", label: "Active Creators" },
  { value: "400+", label: "Viral Creators" },
  { value: "32", label: "Languages" },
];

export function StatsSection() {
  return (
    <Section spacing="lg" className="border-y border-white/10 bg-[var(--surface-dark)]/30">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              {stat.value}
            </div>
            <Text variant="small" className="text-[var(--text-gray-300)]">
              {stat.label}
            </Text>
          </div>
        ))}
      </div>
    </Section>
  );
}
