import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "elevated" | "flat" | "bordered";
  hover?: boolean;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "elevated", hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "rounded-2xl p-4 md:p-6",
          "transition-all duration-300 ease-in-out",

          // Variant styles
          variant === "elevated" && [
            "bg-white",
            "border border-[var(--border-color)]",
            "shadow-md",
          ],

          variant === "flat" && [
            "bg-[var(--surface-light)]",
            "border border-[var(--border-color)]",
          ],

          variant === "bordered" && [
            "bg-white",
            "border-2 border-[var(--border-color)]",
          ],

          // Hover effects (only on devices that support hover)
          hover && [
            "md:hover:transform md:hover:scale-[1.02]",
            "md:hover:shadow-lg",
            variant === "elevated" && "md:hover:border-[var(--brand-primary)]/30",
            variant === "flat" && "md:hover:bg-white md:hover:shadow-md",
            variant === "bordered" && "md:hover:border-[var(--brand-primary)]",
          ],

          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
