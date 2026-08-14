import Image from "next/image"

import { BookCallButton } from "@/components/book-call-button"
import { Button } from "@/components/ui/button"

const disciplines = ["Business Analysis", "Process Engineering", "AI Automation"]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              vantagemotion.ai
            </p>
            <h1 className="text-pretty text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              We help businesses do AI right — starting with the process, not the tool.
            </h1>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Putting AI on a broken process only makes it fail faster. Sometimes the
              answer is AI. Sometimes it isn&apos;t. We&apos;ll tell you honestly.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <BookCallButton size="lg" />
              <Button
                render={<a href="#what-we-build" />}
                nativeButton={false}
                variant="ghost"
                className="h-12 rounded-full px-5 text-sm text-muted-foreground hover:text-foreground"
              >
                See what we build
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
              <Image
                src="/images/hero-operations.png"
                alt="A bright desk with a laptop showing a dashboard beside a cup of coffee"
                width={880}
                height={620}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <ul className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border/60 pt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {disciplines.map((item, index) => (
            <li key={item} className="flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden="true" className="text-accent">
                  ·
                </span>
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
