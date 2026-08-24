import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium tracking-wide ring-offset-background transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-sm bg-maroon text-maroon-foreground hover:bg-maroon-deep",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "rounded-sm border border-ink/20 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
        secondary:
          "rounded-sm bg-stone text-ink hover:bg-sand",
        ghost:
          "rounded-sm text-ink hover:bg-transparent hover:text-maroon",
        link: "text-maroon underline-offset-4 hover:underline",
        light:
          "rounded-sm bg-paper text-ink hover:bg-paper-deep",
        "ghost-light":
          "rounded-sm text-paper hover:bg-transparent hover:text-brass-soft",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-sm px-3",
        lg: "h-12 rounded-sm px-8 text-[0.95rem] tracking-wide",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
