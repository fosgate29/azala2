import { AboutSection } from "@/components/about-section"
import { CtaSection } from "@/components/cta-section"
import { HeroSection } from "@/components/hero-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WhatWeBuildSection } from "@/components/what-we-build-section"
import { WhatsIncludedSection } from "@/components/whats-included-section"
import { WhoWeWorkWithSection } from "@/components/who-we-work-with-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <WhatWeBuildSection />
        <WhoWeWorkWithSection />
        <WhatsIncludedSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
