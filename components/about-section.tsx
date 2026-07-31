import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
              <Image
                src="/images/process-mapping.png"
                alt="A sunlit table with a monitor displaying a workflow diagram, a coffee cup, and notes"
                width={880}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              About
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Process first. Tools second.
            </h2>
            <div className="mt-6 flex flex-col gap-5 leading-relaxed text-muted-foreground">
              <p>
                We&apos;re a business automation consultancy working across business
                analysis, operations, commercial workflows, and AI automation.
              </p>
              <p>
                Our approach starts with process, not tools. Before any automation goes
                in, we map how work actually moves through your business — where time
                gets lost, where handoffs break down, where manual effort could
                disappear. Then we design solutions that fix the real problem, not just
                the symptom.
              </p>
              <p>
                That background spans requirements engineering and system design —
                connecting what a business needs with what actually gets built.
              </p>
              <p className="border-l-2 border-accent pl-5 text-foreground">
                The goal is simple: find where time is being lost, design a better
                process, and implement automation that creates measurable value — not
                automation for its own sake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
