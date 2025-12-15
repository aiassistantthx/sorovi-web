import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-xl font-semibold",
          "transition-all duration-200 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-dark)]",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",

          // Variant styles
          variant === "primary" && [
            "bg-[var(--brand-primary)]",
            "text-white",
            "shadow-lg shadow-[var(--brand-primary)]/30",
            "hover:shadow-xl hover:shadow-[var(--brand-primary)]/50",
            "hover:bg-[var(--accent-blue)]",
            "hover:-translate-y-0.5",
            "focus:ring-[var(--brand-primary)]",
          ],

          variant === "secondary" && [
            "bg-white/10 backdrop-blur-lg",
            "border border-white/20",
            "text-white",
            "hover:bg-white/20 hover:border-white/30",
            "focus:ring-white/50",
          ],

          variant === "outline" && [
            "bg-transparent",
            "border-2 border-[var(--brand-primary)]",
            "text-[var(--brand-primary)]",
            "hover:bg-[var(--brand-primary)] hover:text-white",
            "focus:ring-[var(--brand-primary)]",
          ],

          variant === "ghost" && [
            "bg-transparent",
            "text-[var(--text-gray-300)]",
            "hover:bg-white/10 hover:text-white",
            "focus:ring-white/50",
          ],

          // Size styles
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",

          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
