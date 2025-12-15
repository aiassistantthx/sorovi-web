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
          "rounded-2xl p-6",
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

          // Hover effects
          hover && [
            "hover:transform hover:scale-[1.02]",
            "hover:shadow-2xl",
            variant === "glass" && "hover:bg-white/10 hover:border-white/20",
            variant === "solid" && "hover:border-[var(--brand-purple)]/50",
            variant === "bordered" && "hover:border-[var(--brand-purple)]",
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
