import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { AiTexLogo } from "@/components/ui/AiTexLogo";
import { AiTexHeroVisual } from "@/components/ui/AiTexHeroVisual";
import { aiTexToolsFeatures } from "@/lib/data";

export function Platforms() {
  return (
    <section id="aitextools" className="relative pt-10 pb-10 sm:pb-14 lg:pt-32">
      <Reveal className="w-full px-6 lg:px-12">
        <div className="relative rounded-[2rem] px-8 pt-8 sm:px-12 sm:pt-12 lg:px-16 lg:pt-16">
          <div className="atx-surface absolute inset-0 rounded-[2rem]" aria-hidden />
          <div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_1fr]">
            <div className="relative self-center pb-8 sm:pb-12 lg:pb-16">
              <SectionTag>Our successful product</SectionTag>

              <div className="mt-8 text-6xl sm:text-7xl">
                <AiTexLogo />
              </div>

              <h2 className="mt-8 max-w-xl text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Write with AI,{" "}
                <span className="text-gradient">deliver like human</span>
              </h2>
              <p className="mt-5 max-w-xl text-xl text-foreground/80 sm:text-2xl">
                Humanize, paraphrase, detect and write emails in one tab, without juggling four
                different tools.
              </p>

              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {aiTexToolsFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <li key={f.id} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-border-strong bg-white/[0.04] text-neon-cyan">
                        <Icon className="size-[18px]" strokeWidth={1.75} />
                      </span>
                      <span>
                        <span className="block text-lg font-semibold text-foreground">{f.name}</span>
                        <span className="block text-[15px] text-foreground/70">{f.tagline}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href="/aitextools" variant="white" size="lg" showArrow>
                  Try AiTexTools
                </Button>
                <Button href="/contact" variant="ghost" size="lg">
                  Talk to us
                </Button>
              </div>
            </div>

            {/* pops out above the panel and sits on its bottom edge */}
            <div className="relative mx-auto w-full max-w-[560px] self-end lg:-mt-28 lg:-mb-11 lg:w-[116%] lg:max-w-[680px] lg:justify-self-center">
              <AiTexHeroVisual />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
