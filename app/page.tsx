import { AboutSection } from "@/components/about-section"
import { AiProvidersBar } from "@/components/ai-providers-bar"
import { CtaSection } from "@/components/cta-section"
import { HeroSection } from "@/components/hero-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WhatWeBuildSection } from "@/components/what-we-build-section"
import { WhatsIncludedSection } from "@/components/whats-included-section"
import { WhoWeWorkWithSection } from "@/components/who-we-work-with-section"
import { Phone } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="flex items-center justify-center gap-2 border-b border-border/60 px-4 py-3 text-sm font-medium text-muted-foreground">
        <Phone aria-hidden="true" className="size-4 text-accent" />
        <span>+1 516-253-1317</span>
      </div>
      <main>
        <HeroSection />
        <AboutSection />
        <WhatWeBuildSection />
        <AiProvidersBar />
        <WhoWeWorkWithSection />
        <WhatsIncludedSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
