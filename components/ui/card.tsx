import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "solid" | "bordered";
  hover?: boolean;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "glass", hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "rounded-2xl p-4 md:p-6",
          "transition-all duration-300 ease-in-out",

          // Variant styles
          variant === "glass" && [
            "bg-white/5 backdrop-blur-lg",
            "border border-white/10",
            "shadow-xl",
          ],

          variant === "solid" && [
            "bg-[var(--surface-dark)]",
            "border border-white/5",
            "shadow-lg",
          ],

          variant === "bordered" && [
            "bg-transparent",
            "border-2 border-white/20",
          ],

          // Hover effects (only on devices that support hover)
          hover && [
            "md:hover:transform md:hover:scale-[1.02]",
            "md:hover:shadow-2xl",
            variant === "glass" && "md:hover:bg-white/10 md:hover:border-white/20",
            variant === "solid" && "md:hover:border-[var(--brand-primary)]/50",
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
