"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { ProcessGraph } from "@/components/ui/ProcessGraph";
import { processSteps } from "@/lib/data";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = processSteps.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.min(count - 1, Math.max(0, Math.floor(progress * count)));
    setActive(index);
  });

  return (
    <section className="relative pt-10 pb-16 sm:pt-12 sm:pb-20">
      <Reveal className="w-full px-6 lg:px-12">
        <SectionTag>How we work</SectionTag>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          A process built to remove surprises
        </h2>
      </Reveal>

      <div ref={containerRef} className="relative -mt-[14vh]" style={{ height: `${count * 70}vh` }}>
        <div className="sticky top-0 flex h-screen items-center pt-20">
          <div className="w-full px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-10">
              <div className="flex flex-col gap-6">
              <ul className="font-mono-tight h-fit space-y-1.5 text-lg">
                {processSteps.map((step, i) => (
                  <li
                    key={step.step}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 uppercase transition-colors duration-300 ${
                      i === active
                        ? "border-neon-cyan/50 bg-neon-cyan/[0.08] text-foreground"
                        : "border-transparent text-muted"
                    }`}
                  >
                    <span className={i === active ? "text-neon-cyan" : "text-neon-cyan/60"}>
                      {step.step}
                    </span>
                    {step.title}
                    {i === active && (
                      <span className="ml-auto size-1.5 rounded-full bg-neon-cyan shadow-[0_0_8px_2px_rgba(34,224,255,0.8)]" />
                    )}
                  </li>
                ))}
              </ul>
              <p className="max-w-[320px] px-4 text-lg leading-relaxed text-foreground/80">
                {processSteps[active].description}
              </p>
              </div>

              <ProcessGraph variant={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
