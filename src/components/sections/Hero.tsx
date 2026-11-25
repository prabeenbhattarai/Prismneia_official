"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroVideoBackground } from "@/components/ui/HeroVideoBackground";
import { PrismBeam } from "@/components/ui/PrismBeam";
import { LogoMarquee } from "@/components/sections/LogoMarquee";

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] flex-col overflow-hidden">
      <HeroVideoBackground />

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="pointer-events-none absolute top-1/2 right-0 hidden w-[58%] max-w-[900px] -translate-y-[46%] lg:block"
      >
        <PrismBeam className="h-auto w-full" />
      </motion.div>

      <div className="relative flex flex-1 flex-col justify-center pt-20">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl leading-[1.03] font-semibold tracking-tight sm:text-7xl lg:text-8xl"
            >
              <span className="text-gradient">Digital systems</span> that run your business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-5 max-w-xl text-xl leading-relaxed text-foreground sm:text-2xl"
            >
              Web, mobile, CRMs and AI integration. One team, every layer of the stack.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              <Button href="/contact" size="lg" showArrow>
                Start a project
              </Button>
              <Button href="/services" variant="ghost" size="lg">
                Explore services
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative shrink-0">
        <LogoMarquee />
      </div>
    </section>
  );
}
