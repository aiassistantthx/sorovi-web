import { cn } from "@/lib/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "primary";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variant === "default" &&
          "bg-white/10 text-[var(--text-gray-100)] border border-white/10",
        variant === "outline" &&
          "bg-transparent text-[var(--text-gray-300)] border border-white/20",
        variant === "primary" &&
          "bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] border border-[var(--brand-primary)]/30",
        className
      )}
    >
      {children}
    </span>
  );
}
