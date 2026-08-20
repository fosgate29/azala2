const providers = [
  {
    name: "Claude",
    logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/anthropic/light.svg",
  },
  {
    name: "Grok",
    logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/xai/light.svg",
  },
  {
    name: "ChatGPT",
    logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/openai/light.svg",
  },
  {
    name: "Gemini",
    logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google-gemini/light.svg",
  },
]

export function AiProvidersBar() {
  return (
    <section aria-label="AI providers we work with" className="border-b border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Working with leading AI providers
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-end md:gap-x-8">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground/80 transition-colors hover:text-accent sm:text-lg"
            >
              <img
                src={provider.logo}
                alt={`${provider.name} symbol`}
                width="24"
                height="24"
                loading="lazy"
                className="size-5 object-contain opacity-85 sm:size-6"
              />
              <span>{provider.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
