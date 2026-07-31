import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// TODO: replace with your Calendly link, e.g. https://calendly.com/azala/60min
export const CALENDLY_URL = ""

const sizeClasses = {
  sm: "h-9 px-4 text-[0.8rem]",
  lg: "h-12 px-6 text-sm",
} as const

export function BookCallButton({
  className,
  size = "sm",
  variant = "default",
}: {
  className?: string
  size?: "sm" | "lg"
  variant?: "default" | "outline"
}) {
  const label = "Book a 60 minutes free call"

  const sharedProps = {
    variant,
    className: cn(
      "gap-2 rounded-full font-medium",
      sizeClasses[size],
      className,
    ),
  }

  const content = (
    <>
      <span className="truncate">{label}</span>
      <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
    </>
  )

  if (!CALENDLY_URL) {
    return (
      <Button type="button" {...sharedProps}>
        {content}
      </Button>
    )
  }

  return (
    <Button
      render={
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" />
      }
      nativeButton={false}
      {...sharedProps}
    >
      {content}
    </Button>
  )
}
