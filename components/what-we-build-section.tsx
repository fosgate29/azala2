import { Bot, FileStack, Plug, Settings2, Workflow } from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const solutions = [
  {
    icon: Workflow,
    title: "Workflow automation",
    description: "Eliminate repetitive manual steps.",
  },
  {
    icon: Bot,
    title: "AI assistants",
    description: "For internal ops or customer-facing support.",
  },
  {
    icon: FileStack,
    title: "Document processing",
    description: "Extract, structure, and route information automatically.",
  },
  {
    icon: Plug,
    title: "CRM/ERP integrations",
    description: "Connect the systems you already run on.",
  },
  {
    icon: Settings2,
    title: "Custom automation systems",
    description: "Built around how your business runs.",
  },
]

export function WhatWeBuildSection() {
  return (
    <section id="what-we-build" className="border-b border-border/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            What We Build
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            AI and automation solutions, designed around your operations.
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            We design and implement AI and automation solutions for companies that want
            to streamline repetitive work, improve data flow between systems, and make
            operations more scalable:
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card
              key={solution.title}
              className="h-full gap-5 py-6 ring-border/70 transition-colors hover:ring-accent/50"
            >
              <CardHeader className="gap-4">
                <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-accent">
                  <solution.icon className="size-5" aria-hidden="true" />
                </span>
                <CardTitle className="text-lg">{solution.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
