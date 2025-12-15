import * as React from "react";
import { cn } from "@/lib/utils/cn";
import { Container } from "./container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  spacing?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      container = true,
      containerSize = "xl",
      spacing = "lg",
      children,
      ...props
    },
    ref
  ) => {
    const content = container ? (
      <Container size={containerSize}>{children}</Container>
    ) : (
      children
    );

    return (
      <section
        ref={ref}
        className={cn(
          "w-full",
          spacing === "sm" && "py-6 md:py-10",
          spacing === "md" && "py-10 md:py-14",
          spacing === "lg" && "py-14 md:py-20",
          spacing === "xl" && "py-20 md:py-28",
          className
        )}
        {...props}
      >
        {content}
      </section>
    );
  }
);

Section.displayName = "Section";
