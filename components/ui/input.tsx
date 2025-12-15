import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = "text", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--text-gray-300)] mb-2">
            {label}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl",
            "bg-white/5 backdrop-blur-lg",
            "border border-white/10",
            "text-white placeholder:text-[var(--text-gray-500)]",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-[var(--brand-purple)] focus:border-transparent",
            "focus:bg-white/10",
            "hover:border-white/20",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
