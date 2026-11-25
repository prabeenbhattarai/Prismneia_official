"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";

export function HumanizerDemo() {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5">
        <X className="mt-0.5 size-3.5 shrink-0 text-red-400/80" />
        <p className="text-[13px] leading-relaxed text-muted">
          &quot;Our organization leverages synergistic solutions to optimize outcomes.&quot;
        </p>
      </div>
      <div className="flex justify-center">
        <ArrowRight className="size-4 rotate-90 text-neon-cyan" />
      </div>
      <div className="flex items-start gap-2 rounded-lg border border-neon-cyan/30 bg-neon-cyan/[0.06] px-3 py-2.5">
        <Check className="mt-0.5 size-3.5 shrink-0 text-neon-cyan" />
        <p className="text-[13px] leading-relaxed text-foreground">
          &quot;We work closely with our clients to actually get results.&quot;
        </p>
      </div>
    </div>
  );
}

export function ParaphraserDemo() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
        <p className="font-mono-tight mb-2 text-[10px] uppercase text-muted/70">Original</p>
        <p className="text-[13px] leading-relaxed text-muted">
          The meeting has been rescheduled due to unforeseen circumstances.
        </p>
      </div>
      <div className="rounded-lg border border-neon-cyan/30 bg-neon-cyan/[0.06] p-3">
        <p className="font-mono-tight mb-2 text-[10px] uppercase text-neon-cyan/80">Rewritten</p>
        <p className="text-[13px] leading-relaxed text-foreground">
          We had to push the meeting back. Something came up.
        </p>
      </div>
    </div>
  );
}

export function DetectorDemo() {
  return (
    <div className="flex items-center gap-6">
      <div className="relative flex size-24 shrink-0 items-center justify-center">
        <svg viewBox="0 0 100 100" className="size-24 -rotate-90">
          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" className="text-white/10" strokeWidth="10" />
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="url(#detector-gradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 42}
            initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
            animate={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - 0.12) }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="detector-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22e0ff" />
              <stop offset="100%" stopColor="#2f6bff" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute text-lg font-semibold text-foreground">12%</span>
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">Likely human-written</p>
        <p className="mt-1 max-w-[180px] text-xs text-muted">
          Sentence-level breakdown available for every paragraph.
        </p>
      </div>
    </div>
  );
}

export function EmailDemo() {
  return (
    <div className="space-y-2 rounded-lg border border-white/10 bg-white/[0.03] p-3">
      <div className="flex gap-2 text-[13px]">
        <span className="text-muted/70">To:</span>
        <span className="text-foreground">client@company.com</span>
      </div>
      <div className="flex gap-2 border-b border-white/10 pb-2 text-[13px]">
        <span className="text-muted/70">Subject:</span>
        <span className="text-foreground">Following up on our proposal</span>
      </div>
      {["Hi Sarah,", "Just checking in on the proposal I sent last week,", "happy to jump on a call if useful."].map(
        (line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * i }}
            className="text-[13px] leading-relaxed text-muted"
          >
            {line}
          </motion.p>
        )
      )}
    </div>
  );
}

export const aiToolDemos = [HumanizerDemo, ParaphraserDemo, DetectorDemo, EmailDemo];
