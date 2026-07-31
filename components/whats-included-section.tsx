import { Check } from "lucide-react"

const included = [
  "Process assessment and honest recommendation (AI or not)",
  "Custom-designed automation/AI solution",
  "Implementation",
  "4 free 30-minute support sessions after launch",
  "Training for small teams",
  "Full integration with your existing systems",
]

export function WhatsIncludedSection() {
  return (
    <section id="whats-included" className="border-b border-border/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            What&apos;s Included
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything in every engagement.
          </h2>
        </div>

        <ul className="mt-10 grid gap-x-10 gap-y-1 sm:grid-cols-2">
          {included.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 border-b border-border/60 py-5"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Check className="size-3.5" aria-hidden="true" />
              </span>
              <span className="text-pretty leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
