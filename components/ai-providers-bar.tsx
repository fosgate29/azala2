const services = [
  ["Claude", "anthropic"],
  ["Grok", "grok-xai"],
  ["Docs", "google-docs"],
  ["Sheets", "google-sheets"],
  ["Stripe", "stripe"],
  ["Salesforce", "salesforce"],
  ["Slack", "slack"],
  ["Meta", "meta"],
  ["Gmail", "gmail"],
  ["Zoom", "zoom"],
  ["Drive", "google-drive"],
  ["Notion", "notion"],
  ["Gemini", "google-gemini"],
] as const

const serviceItems = [...services, ...services]

export function AiProvidersBar() {
  return (
    <section aria-label="Services we work with" className="overflow-hidden border-b border-border/60 py-4">
      <div className="flex w-max animate-[service-ticker_34s_linear_infinite] items-center gap-3 px-4 motion-reduce:animate-none sm:gap-4">
        {serviceItems.map(([name, slug], index) => (
          <div
            key={`${name}-${index}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/85 transition-colors hover:border-accent hover:text-accent"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${slug}/default.svg`}
              alt={`${name} symbol`}
              width="20"
              height="20"
              loading="lazy"
              className="size-5 object-contain opacity-90"
            />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
