import { BookCallButton } from "@/components/book-call-button"

export function CtaSection() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-8 rounded-xl border border-border/60 bg-card p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s find out where your time is going.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Start with a free 60-minute call. We&apos;ll look at your process and tell
              you honestly whether automation or AI is the right answer.
            </p>
          </div>
          <BookCallButton size="lg" className="shrink-0" />
        </div>
      </div>
    </section>
  )
}
