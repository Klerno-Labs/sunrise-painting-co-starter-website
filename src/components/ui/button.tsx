import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-primary text-white hover:bg-[#0a2238] focus-visible:ring-primary": variant === "primary",
            "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary": variant === "secondary",
            "bg-accent text-white hover:brightness-110 shadow-md focus-visible:ring-accent": variant === "accent",
            "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-400": variant === "outline",
            "px-4 py-2 text-sm rounded-md": size === "sm",
            "px-6 py-3 rounded-lg text-base": size === "md",
            "px-8 py-4 rounded-lg text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };