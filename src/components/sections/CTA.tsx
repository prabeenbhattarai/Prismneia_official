import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GlowOrbs } from "@/components/ui/GlowOrbs";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <GlowOrbs variant="section" />
      <Reveal className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Let&apos;s build your <span className="text-gradient">next system</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-foreground/80 sm:text-2xl">
          Tell us what you&apos;re running into: a slow site, an outdated CRM, a manual
          process begging for AI. We&apos;ll reply within one business day.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" size="lg" showArrow>
            Start a project
          </Button>
          <Button href="/services" variant="ghost" size="lg">
            View our services
          </Button>
        </div>
        <p className="font-mono-tight mt-8 text-xs text-muted">
          hello@prismneia.com · Working with teams worldwide
        </p>
      </Reveal>
    </section>
  );
}
