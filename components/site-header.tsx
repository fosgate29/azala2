import { AzalaLogo } from "@/components/azala-logo"
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
        <a href="#top" className="flex items-center gap-2" aria-label="Azala home">
          <AzalaLogo className="h-5 w-5 text-accent" />
          <span className="text-base font-semibold tracking-tight">Azala</span>
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

        <BookCallButton className="h-9 shrink-0 px-3 text-[0.7rem] sm:px-4 sm:text-[0.8rem]" />
      </div>
    </header>
  )
}
