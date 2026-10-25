import { VantageMotionLogo } from "@/components/vantage-motion-logo"

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <VantageMotionLogo className="h-4 w-4 text-accent" />
          <span className="text-sm font-semibold tracking-tight">vantagemotion.ai</span>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="tel:5162531317"
            className="text-sm font-medium text-accent transition-colors hover:text-foreground"
            aria-label="Call us at 516-253-1317"
          >
            516-253-1317
          </a>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Business Analysis · Process Engineering · AI Automation
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} vantagemotion.ai. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
