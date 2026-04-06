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
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",

          // Variant styles
          variant === "primary" && [
            "bg-[var(--brand-primary)]",
            "text-white",
            "shadow-lg shadow-[var(--brand-primary)]/20",
            "hover:shadow-xl hover:shadow-[var(--brand-primary)]/30",
            "hover:bg-[var(--brand-primary-hover)]",
            "hover:-translate-y-0.5",
            "focus:ring-[var(--brand-primary)]",
          ],

          variant === "secondary" && [
            "bg-[var(--surface-light)]",
            "border border-[var(--border-color)]",
            "text-[var(--text-primary)]",
            "hover:bg-[var(--surface-alt)] hover:border-[var(--border-strong)]",
            "focus:ring-[var(--border-strong)]",
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
            "text-[var(--text-secondary)]",
            "hover:bg-[var(--surface-light)] hover:text-[var(--text-primary)]",
            "focus:ring-[var(--border-color)]",
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
