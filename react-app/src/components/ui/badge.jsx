import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--brand-forest)] text-white hover:bg-[var(--brand-moss)]",
        active:
          "bg-[var(--status-active-bg)] text-[var(--status-active-text)] border border-[#C4D6C0]",
        pending:
          "bg-[var(--status-pending-bg)] text-[var(--status-pending-text)] border border-[#E6D9B6]",
        inreview:
          "bg-[var(--status-inreview-bg)] text-[var(--status-inreview-text)] border border-[#CADAE6]",
        complete:
          "bg-[var(--status-complete-bg)] text-[var(--status-complete-text)] border border-[#BFE0CA]",
        action:
          "bg-[var(--status-action-bg)] text-[var(--status-action-text)] border border-[#F5C6C6]",
        secondary:
          "bg-[#E4E7DC] text-[var(--text-primary)] border border-[var(--border)]",
        outline:
          "border border-[var(--border)] text-[var(--text-primary)] bg-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />)
}

export { Badge, badgeVariants }
