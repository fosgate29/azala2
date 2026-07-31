export function WhoWeWorkWithSection() {
  return (
    <section id="who-we-work-with" className="border-b border-border/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Who We Work With
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Any size business — small to medium.
            </h2>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-6 sm:p-8">
            <p className="text-balance text-xl leading-relaxed sm:text-2xl">
              The process is the same either way:{" "}
              <span className="text-accent">understand first, automate second.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
