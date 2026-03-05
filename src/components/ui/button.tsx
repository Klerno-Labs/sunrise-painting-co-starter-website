import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          {
            // Primary
            'bg-primary text-white hover:bg-primary-light focus-visible:ring-primary': variant === 'primary',
            // Secondary
            'bg-secondary text-white hover:bg-secondary-light focus-visible:ring-secondary': variant === 'secondary',
            // Accent
            'bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent': variant === 'accent',
            // Outline
            'border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary': variant === 'outline',
            // Ghost
            'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-primary': variant === 'ghost',
            // Sizes
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }