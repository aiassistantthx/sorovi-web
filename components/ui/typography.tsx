import * as React from "react";
import { cn } from "@/lib/utils/cn";

// Heading Component
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  gradient?: boolean;
  children: React.ReactNode;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = "h2", gradient = false, className, children, ...props }, ref) => {
    return (
      <Tag
        ref={ref as any}
        className={cn(
          "font-bold leading-tight tracking-tight",
          Tag === "h1" && "text-5xl md:text-6xl lg:text-7xl",
          Tag === "h2" && "text-3xl md:text-4xl lg:text-5xl",
          Tag === "h3" && "text-2xl md:text-3xl lg:text-4xl",
          Tag === "h4" && "text-xl md:text-2xl lg:text-3xl",
          Tag === "h5" && "text-lg md:text-xl lg:text-2xl",
          Tag === "h6" && "text-base md:text-lg lg:text-xl",
          gradient && "bg-gradient-to-r from-[var(--brand-primary)] to-[var(--accent-green)] bg-clip-text text-transparent",
          !gradient && "text-white",
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = "Heading";

// Text Component
export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "large" | "small" | "muted";
  children: React.ReactNode;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant = "body", className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "leading-relaxed",
          variant === "large" && "text-lg md:text-xl text-[var(--text-gray-100)]",
          variant === "body" && "text-base md:text-lg text-[var(--text-gray-300)]",
          variant === "small" && "text-sm md:text-base text-[var(--text-gray-300)]",
          variant === "muted" && "text-sm md:text-base text-[var(--text-gray-500)]",
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";
