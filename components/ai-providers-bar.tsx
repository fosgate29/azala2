const providers = ["Claude", "Grok", "ChatGPT", "Gemini"]

export function AiProvidersBar() {
  return (
    <section aria-label="AI providers we work with" className="border-b border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Working with leading AI providers
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-end md:gap-x-8">
          {providers.map((provider) => (
            <span
              key={provider}
              className="text-base font-semibold tracking-tight text-foreground/80 transition-colors hover:text-accent sm:text-lg"
            >
              {provider}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
