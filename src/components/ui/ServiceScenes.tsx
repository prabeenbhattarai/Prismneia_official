"use client";

import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

export function WebScene() {
  return (
    <div className="w-full rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
      <div className="mb-2 flex gap-1">
        <span className="size-1.5 rounded-full bg-red-400/60" />
        <span className="size-1.5 rounded-full bg-yellow-400/60" />
        <span className="size-1.5 rounded-full bg-emerald-400/60" />
      </div>
      <div className="h-16 rounded-md bg-gradient-to-br from-neon-cyan/15 to-neon-violet/10" />
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-2/3 rounded-full bg-white/15" />
        <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
      </div>
      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue"
          initial={{ width: "0%" }}
          animate={{ width: "92%" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function MobileScene() {
  return (
    <div className="flex justify-center">
      <div className="w-24 rounded-2xl border border-white/10 bg-white/[0.03] p-2">
        <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-white/20" />
        <div className="h-14 rounded-lg bg-gradient-to-br from-neon-violet/20 to-neon-cyan/15" />
        <div className="mt-2 grid grid-cols-3 gap-1">
          <div className="h-4 rounded bg-white/10" />
          <div className="h-4 rounded bg-white/10" />
          <div className="h-4 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export function DesignScene() {
  return (
    <div className="relative h-[104px] w-full rounded-lg border border-white/10 bg-white/[0.03] p-3">
      <motion.div
        className="absolute h-10 w-10 rounded-lg border border-neon-cyan/40 bg-neon-cyan/10"
        style={{ top: 14, left: 16 }}
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute size-8 rounded-full border border-neon-violet/40 bg-neon-violet/10"
        style={{ top: 30, left: 60 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.4, repeat: Infinity }}
      />
      <div className="absolute right-3 bottom-3 left-3 h-1.5 rounded-full bg-white/10" />
      <motion.div
        className="absolute"
        style={{ top: 46, left: 96 }}
        animate={{ x: [0, 6, 0], y: [0, 4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <MousePointer2 className="size-4 text-neon-cyan" fill="currentColor" />
      </motion.div>
    </div>
  );
}

export function CrmScene() {
  return (
    <div className="w-full space-y-1.5 rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
      {[
        { w: "w-full", tone: "bg-neon-cyan/20" },
        { w: "w-5/6", tone: "bg-white/10" },
        { w: "w-full", tone: "bg-white/10" },
        { w: "w-2/3", tone: "bg-neon-violet/20" },
      ].map((row, i) => (
        <div key={i} className={`h-4 ${row.w} rounded ${row.tone}`} />
      ))}
    </div>
  );
}

export function AiScene() {
  return (
    <div className="w-full space-y-2">
      <div className="max-w-[75%] rounded-lg rounded-bl-sm bg-white/[0.06] px-2.5 py-1.5 text-[11px] text-foreground">
        Summarize last week&apos;s tickets
      </div>
      <div className="ml-auto max-w-[80%] rounded-lg rounded-br-sm bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 px-2.5 py-1.5 text-[11px] text-foreground">
        Done, 3 themes found.
      </div>
    </div>
  );
}

export function CloudScene() {
  return (
    <div className="w-full space-y-1.5 rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
      <div className="flex items-end gap-1.5" style={{ height: 44 }}>
        {[40, 65, 50, 80, 60].map((h, i) => (
          <motion.div
            key={i}
            className="w-full rounded-t bg-gradient-to-t from-neon-blue/30 to-neon-cyan"
            initial={{ height: "10%" }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.8, delay: i * 0.08 }}
          />
        ))}
      </div>
      <div className="flex items-center gap-1.5 text-[10px] text-muted">
        <span className="size-1.5 rounded-full bg-emerald-400" />
        99.98% uptime
      </div>
    </div>
  );
}

export const serviceScenes = [WebScene, MobileScene, DesignScene, CrmScene, AiScene, CloudScene];
