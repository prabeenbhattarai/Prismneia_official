"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type MegaMenuData } from "@/lib/data";

export function MegaMenuPanel({
  menu,
  floating = false,
  onNavigate,
}: {
  menu: MegaMenuData | null;
  floating?: boolean;
  onNavigate: () => void;
}) {
  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          key={menu.label}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute inset-x-0 top-full z-40 hidden lg:block"
        >
          <div className={floating ? "pt-2" : "mx-auto max-w-[1440px] px-6 lg:px-10"}>
            <div
              className={`mega-panel grid grid-cols-3 gap-8 border p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ${
                floating ? "rounded-3xl" : "rounded-2xl rounded-t-none border-t-0"
              }`}
            >
              <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-6">
                {menu.columns.map((column, colIdx) => (
                  <div key={colIdx} className="space-y-4">
                    {column.heading && (
                      <p className="font-mono-tight text-[13px] uppercase text-muted/70">
                        {column.heading}
                      </p>
                    )}
                    <ul className="space-y-1">
                      {column.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.title}>
                            <Link
                              href={item.href}
                              onClick={onNavigate}
                              className="group flex items-start gap-3 rounded-xl p-2.5 -ml-2.5 transition-colors hover:bg-white/[0.04]"
                            >
                              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-white/[0.03] text-neon-cyan transition-colors group-hover:border-neon-cyan/40">
                                <Icon className="size-4" strokeWidth={1.75} />
                              </span>
                              <span>
                                <span className="block text-lg font-semibold text-foreground">
                                  {item.title}
                                </span>
                                <span className="mt-0.5 block text-[15px] leading-snug text-muted">
                                  {item.description}
                                </span>
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-neon-blue/15 via-white/[0.02] to-transparent p-6">
                <div
                  className="glow-orb absolute -top-10 -right-10 h-40 w-40 bg-neon-cyan/30"
                  aria-hidden
                />
                <p className="font-mono-tight relative text-[11px] uppercase text-neon-cyan">
                  {menu.featured.eyebrow}
                </p>
                <p className="relative mt-2 text-lg font-semibold text-foreground">
                  {menu.featured.title}
                </p>
                <p className="relative mt-2 text-[13px] leading-relaxed text-muted">
                  {menu.featured.description}
                </p>
                <Link
                  href={menu.featured.href}
                  onClick={onNavigate}
                  className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-neon-cyan"
                >
                  {menu.featured.ctaLabel}
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
