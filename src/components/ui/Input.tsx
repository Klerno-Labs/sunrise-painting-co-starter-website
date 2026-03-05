import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, label, error, ...props }, ref) => {
    return (
      <div className="relative group">
        {label && (
          <label htmlFor={id} className="block text-sm font-semibold text-text-heading mb-2">
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          className={cn(
            "w-full border-2 bg-surface px-4 py-3 rounded-md text-text-heading transition-colors focus:outline-none focus:ring-0 placeholder:text-text-muted",
            error ? "border-red-500 focus:border-red-500" : "border-border-light focus:border-secondary",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;