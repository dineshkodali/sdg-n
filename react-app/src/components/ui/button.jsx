import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[9px] text-[13px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-sage)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--brand-forest)] text-white hover:bg-[var(--brand-moss)] shadow-sm",
        secondary:
          "bg-[#E4E7DC] text-[var(--text-primary)] hover:bg-[#D5DACA] border border-transparent",
        outline:
          "border border-[var(--border)] bg-white text-[var(--text-primary)] hover:bg-[#F3F3EC] hover:border-[var(--brand-sage)]",
        ghost:
          "text-[var(--text-primary)] hover:bg-[#E8EDE2] hover:text-[var(--brand-forest)]",
        destructive:
          "bg-[var(--status-action-text)] text-white hover:bg-[#7A2121]",
        dark:
          "bg-[var(--brand-ink)] text-white hover:bg-[var(--brand-forest)]",
        link:
          "text-[var(--brand-forest)] underline-offset-4 hover:underline",
      },
      size: {
        xs: "h-[28px] px-2.5 text-xs rounded-[8px]",
        sm: "h-[34px] px-3.5 text-xs rounded-[8px]",
        default: "h-[40px] px-4 py-2 rounded-[9px]",
        md: "h-[40px] px-4 py-2 rounded-[9px]",
        lg: "h-[46px] px-6 text-sm rounded-[10px]",
        xl: "h-[52px] px-8 text-base rounded-[10px]",
        icon: "h-10 w-10 rounded-[9px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
