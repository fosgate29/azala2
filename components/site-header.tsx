import { VantageMotionLogo } from "@/components/vantage-motion-logo"
import { BookCallButton } from "@/components/book-call-button"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "What We Build", href: "#what-we-build" },
  { label: "Who We Work With", href: "#who-we-work-with" },
  { label: "What's Included", href: "#whats-included" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="vantagemotion.ai home">
          <VantageMotionLogo className="h-5 w-5 text-accent" />
          <span className="text-base font-semibold tracking-tight">vantagemotion.ai</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="tel:5162531317"
            className="text-xs font-medium text-accent transition-colors hover:text-foreground sm:text-sm"
            aria-label="Call us at 516-253-1317"
          >
            516-253-1317
          </a>
          <BookCallButton className="h-9 px-3 text-[0.7rem] sm:px-4 sm:text-[0.8rem]" />
        </div>
      </div>
    </header>
  )
}
