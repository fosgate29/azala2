import { cn } from "@/lib/utils"

/**
 * vantagemotion.ai mark.
 *
 * A monoline "V" whose right arm keeps rising past the apex — the letterform of
 * "vantage" read as a trajectory — terminating in a solid point: the vantage
 * point the motion is heading toward.
 */
export function VantageMotionLogo({ className }: { className?: string }) {
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
      <path d="M3.5 6.5 11 18 19.5 5.5" />
      <circle cx="19.5" cy="5.5" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  )
}
