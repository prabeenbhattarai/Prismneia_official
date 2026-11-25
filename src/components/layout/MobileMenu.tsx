"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { servicesMenu, solutionsMenu, webMenu, resourceLinks, type MegaMenuData } from "@/lib/data";

const megaMenus: MegaMenuData[] = [servicesMenu, solutionsMenu, webMenu];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-background/98 fixed inset-0 z-50 overflow-y-auto backdrop-blur-xl lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Link href="/" onClick={onClose}>
              <Logo />
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="btn-ghost flex size-9 items-center justify-center rounded-full text-lg"
            >
              ✕
            </button>
          </div>

          <div className="space-y-1 px-5 py-6">
            {megaMenus.map((menu) => (
              <div key={menu.label} className="border-b border-border/70">
                <button
                  onClick={() => setExpanded(expanded === menu.label ? null : menu.label)}
                  className="flex w-full items-center justify-between py-4 text-left text-xl font-medium"
                >
                  {menu.label}
                  <ChevronDown
                    className={`size-4 text-muted transition-transform ${
                      expanded === menu.label ? "rotate-180 text-neon-cyan" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expanded === menu.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-1 pb-4">
                        {menu.columns.flatMap((c) => c.items).map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={onClose}
                              className="flex items-center gap-3 rounded-lg px-2 py-2.5 active:bg-white/5"
                            >
                              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-white/[0.03] text-neon-cyan">
                                <Icon className="size-4" strokeWidth={1.75} />
                              </span>
                              <span>
                                <span className="block text-sm font-medium">{item.title}</span>
                                <span className="block text-xs text-muted">{item.description}</span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="border-b border-border/70">
              <button
                onClick={() => setExpanded(expanded === "Resources" ? null : "Resources")}
                className="flex w-full items-center justify-between py-4 text-left text-xl font-medium"
              >
                Resources
                <ChevronDown
                  className={`size-4 text-muted transition-transform ${
                    expanded === "Resources" ? "rotate-180 text-neon-cyan" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expanded === "Resources" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-1 pb-4">
                      {resourceLinks.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={onClose}
                          className="rounded-lg px-2 py-2.5 text-sm font-medium active:bg-white/5"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col gap-3 px-5 pb-10">
            <Button href="/contact" variant="ghost" onClick={onClose}>
              Log in
            </Button>
            <Button href="/contact" variant="neon" showArrow onClick={onClose}>
              Get a quote
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
