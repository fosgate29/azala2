import { cn } from "@/lib/utils"

export function AzalaLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path d="M3 20 12 4l9 16" />
      <path d="M8 15h8" />
    </svg>
  )
}
