"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { serviceScenes } from "@/components/ui/ServiceScenes";
import { serviceFeatures } from "@/lib/data";

export function StickyServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = serviceFeatures.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.min(count - 1, Math.max(0, Math.floor(progress * count)));
    setActive(index);
  });

  const activeService = serviceFeatures[active];
  const Icon = activeService.icon;
  const Scene = serviceScenes[active];

  return (
    <section id="services" className="relative pt-24 pb-10 sm:pt-28">
      <Reveal className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionTag>What we do</SectionTag>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Every layer of your product, handled by one team
        </h2>
        <p className="mt-5 max-w-2xl text-xl text-foreground/80 sm:text-2xl">
          One senior team across design, engineering and AI, so nothing gets lost in
          translation between five different specialists.
        </p>
      </Reveal>

      <div ref={containerRef} className="relative -mt-[14vh]" style={{ height: `${count * 85}vh` }}>
        <div className="sticky top-0 flex h-screen items-center pt-20">
          <Reveal className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[340px_1fr] lg:gap-10">
              {/* Index list — desktop */}
              <div className="hidden flex-col gap-1 lg:flex">
                {serviceFeatures.map((service, i) => (
                  <button
                    key={service.title}
                    onClick={() => {
                      const el = containerRef.current;
                      if (!el) return;
                      const target = el.offsetTop + (el.offsetHeight * i) / count + 40;
                      window.scrollTo({ top: target, behavior: "smooth" });
                    }}
                    className={`group flex items-center gap-4 rounded-xl px-4 py-3.5 text-left transition-colors ${
                      active === i ? "bg-white/[0.05]" : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`font-mono-tight text-base transition-colors ${
                        active === i ? "text-neon-cyan" : "text-muted/50"
                      }`}
                    >
                      {service.index}
                    </span>
                    <span
                      className={`text-lg font-medium transition-colors ${
                        active === i ? "text-foreground" : "text-muted"
                      }`}
                    >
                      {service.title}
                    </span>
                    {active === i && (
                      <motion.span
                        layoutId="active-service-dot"
                        className="ml-auto size-1.5 rounded-full bg-neon-cyan shadow-[0_0_8px_2px_rgba(34,224,255,0.8)]"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Mobile index row */}
              <div className="mask-fade-x -mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:hidden">
                {serviceFeatures.map((service, i) => (
                  <span
                    key={service.title}
                    className={`chip font-mono-tight shrink-0 rounded-full px-3 py-1.5 text-xs whitespace-nowrap transition-colors ${
                      active === i ? "border-neon-cyan/50 text-neon-cyan" : "text-muted"
                    }`}
                  >
                    {service.index} {service.title}
                  </span>
                ))}
              </div>

              {/* Panel */}
              <div className="glass-panel relative min-h-[420px] overflow-hidden rounded-2xl border p-7 sm:p-10">
                <div className="glow-orb absolute -top-16 -right-16 h-56 w-56 bg-neon-blue/15" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.title}
                    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="relative grid gap-8 sm:grid-cols-[1fr_220px]"
                  >
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="flex size-12 items-center justify-center rounded-xl border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan">
                          <Icon className="size-6" strokeWidth={1.75} />
                        </span>
                        <div>
                          <p className="font-mono-tight text-xs text-neon-cyan">{activeService.tag}</p>
                          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{activeService.title}</h3>
                        </div>
                      </div>

                      <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
                        {activeService.description}
                      </p>

                      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                        {activeService.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2.5 text-base text-foreground/90 sm:text-lg">
                            <Check className="mt-0.5 size-4 shrink-0 text-neon-cyan" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="hidden sm:flex sm:items-center">
                      <Scene />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
