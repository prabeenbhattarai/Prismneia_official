"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Sparkles } from "lucide-react";
import { AiTexLogo } from "@/components/ui/AiTexLogo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { ToolWorkspace, type ToolId } from "@/components/ui/ToolWorkspace";
import { aiTexToolsFeatures } from "@/lib/data";

const revealStep = {
  id: "reveal",
  name: "Live product",
  tagline: "See it in your browser",
  icon: Sparkles,
};

const toolIds: ToolId[] = ["humanizer", "paraphraser", "detector", "email"];

export function Platforms() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const toolCount = aiTexToolsFeatures.length;
  const count = toolCount + 1;
  const isReveal = active === toolCount;
  const listItems = [...aiTexToolsFeatures, revealStep];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.min(count - 1, Math.max(0, Math.floor(progress * count)));
    setActive(index);
  });

  return (
    <section id="aitextools" className="relative pt-10 pb-0 sm:pt-12">
      <Reveal className="w-full px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionTag>Our successful product</SectionTag>
            <h2 className="mt-5 flex flex-wrap items-end gap-x-5 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Meet
              <AiTexLogo className="text-5xl sm:text-7xl lg:text-8xl" />
            </h2>
          </div>
          <p className="max-w-md text-lg text-foreground sm:text-xl">
            Humanize, paraphrase, detect and write emails, in one tab, without juggling
            four different tools.
          </p>
        </div>
      </Reveal>

      <div ref={containerRef} className="relative -mt-[14vh]" style={{ height: `${count * 85}vh` }}>
        <div className="sticky top-0 flex h-screen items-center pt-20">
          <div className="w-full px-6 lg:px-12" style={{ perspective: 1600 }}>
            <div className="grid gap-6 lg:grid-cols-[340px_1fr_1fr] lg:gap-6">
              <div className="flex flex-col gap-2">
                {listItems.map((f, i) => {
                  const FIcon = f.icon;
                  return (
                    <button
                      key={f.id}
                      onClick={() => {
                        const el = containerRef.current;
                        if (!el) return;
                        const target = el.offsetTop + (el.offsetHeight * i) / count + 40;
                        window.scrollTo({ top: target, behavior: "smooth" });
                      }}
                      className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition-colors duration-300 ${
                        i === active
                          ? "border-neon-cyan/50 bg-neon-cyan/[0.08]"
                          : "border-border bg-white/[0.015]"
                      }`}
                    >
                      <span
                        className={`flex size-12 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                          i === active
                            ? "border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan"
                            : "border-border bg-white/[0.03] text-muted"
                        }`}
                      >
                        <FIcon className="size-6" strokeWidth={1.75} />
                      </span>
                      <span>
                        <span
                          className={`block text-xl font-semibold ${
                            i === active ? "text-foreground" : "text-muted"
                          }`}
                        >
                          {f.name}
                        </span>
                        <span className="mt-1 block text-sm text-muted">{f.tagline}</span>
                      </span>
                    </button>
                  );
                })}

                <Button href="/aitextools" showArrow className="mt-2 justify-center">
                  Try AiTexTools
                </Button>
              </div>

              {isReveal ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key="reveal"
                    initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -40, scale: 0.96, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-2"
                  >
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#ffffff] shadow-[0_40px_100px_-25px_rgba(0,0,0,0.7)]">
                      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                        <span className="size-2.5 rounded-full bg-red-400" />
                        <span className="size-2.5 rounded-full bg-yellow-400" />
                        <span className="size-2.5 rounded-full bg-emerald-400" />
                        <span className="font-mono-tight ml-3 rounded-md bg-[#ffffff] px-3 py-1 text-[11px] text-slate-500">
                          prismneia.com
                        </span>
                      </div>
                      <div className="relative w-full" style={{ aspectRatio: "2000 / 1122" }}>
                        <Image
                          src="/images/aitextools/homepage.webp"
                          alt="AiTexTools full homepage"
                          fill
                          sizes="1100px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`workspace-${active}`}
                    initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -40, scale: 0.96, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-2"
                  >
                    <ToolWorkspace tool={toolIds[active]} />
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
