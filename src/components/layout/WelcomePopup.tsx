"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";

const STORAGE_KEY = "prismneia_welcome_seen";
const SHOW_AFTER_MS = 4000;

const topics = ["Website", "Mobile app", "CRM", "AI", "Other"];

function markSeen() {
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {}
}

export function WelcomePopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState<string>(topics[0]);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const firstField = useRef<HTMLInputElement>(null);

  // first visit only, never on the contact page
  useEffect(() => {
    if (pathname === "/contact") return;
    let seen = false;
    try {
      seen = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (seen) return;
    const t = setTimeout(() => setOpen(true), SHOW_AFTER_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  const close = () => {
    setOpen(false);
    markSeen();
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        markSeen();
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focus = setTimeout(() => firstField.current?.focus(), 350);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      clearTimeout(focus);
    };
  }, [open]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      markSeen();
    }, 700);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-title"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="relative my-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-border-strong bg-background-elevated shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]"
          >
            <div className="spectrum-line" />
            <div className="glow-orb absolute -top-24 -right-24 h-48 w-48 bg-neon-blue/20" aria-hidden />

            <button
              onClick={close}
              aria-label="Close"
              className="btn-ghost absolute top-3.5 right-3.5 z-10 flex size-8 items-center justify-center rounded-full"
            >
              <X className="size-4" />
            </button>

            <div className="relative p-6 sm:p-7">
              {sent ? (
                <div className="flex flex-col items-center py-4 text-center">
                  <span className="flex size-12 items-center justify-center rounded-full border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan">
                    <Check className="size-6" />
                  </span>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight">Thanks, we have it</h2>
                  <p className="mt-2 max-w-sm text-[15px] text-foreground/80">
                    We will reply within one business day with some first thoughts.
                  </p>
                  <button onClick={close} className="btn-neon mt-6 rounded-full px-6 py-2.5 text-[15px]">
                    Back to the site
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <LogoMark className="h-7 w-auto" />
                    <span className="font-mono-tight text-xs tracking-wider text-neon-cyan uppercase">
                      Let&apos;s talk
                    </span>
                  </div>

                  <h2 id="welcome-title" className="mt-4 text-2xl leading-tight font-semibold tracking-tight">
                    What are you thinking of building?
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">
                    Tell us in a sentence or two. We reply within one business day.
                  </p>

                  <form onSubmit={onSubmit} className="mt-5 space-y-4">
                    <div>
                      <span className="field-label field-label-sm">I want help with</span>
                      <div className="flex flex-wrap gap-2">
                        {topics.map((t) => (
                          <button
                            key={t}
                            type="button"
                            aria-pressed={topic === t}
                            onClick={() => setTopic(t)}
                            className="choice-chip choice-chip-sm"
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="wp-idea" className="field-label field-label-sm">Your idea</label>
                      <textarea
                        id="wp-idea"
                        required
                        rows={2}
                        placeholder="A customer portal for our team, a mobile app for bookings..."
                        className="field field-sm resize-none"
                      />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label htmlFor="wp-name" className="field-label field-label-sm">Name</label>
                        <input ref={firstField} id="wp-name" required type="text" placeholder="Jane Smith" className="field field-sm" />
                      </div>
                      <div>
                        <label htmlFor="wp-email" className="field-label field-label-sm">Email</label>
                        <input id="wp-email" required type="email" placeholder="jane@company.com" className="field field-sm" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-neon flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-[15px] disabled:opacity-70"
                    >
                      {loading ? "Sending..." : "Start the conversation"}
                      {!loading && <ArrowRight className="size-4" />}
                    </button>

                    <button
                      type="button"
                      onClick={close}
                      className="block w-full text-center text-sm text-muted transition-colors hover:text-foreground"
                    >
                      Maybe later
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
