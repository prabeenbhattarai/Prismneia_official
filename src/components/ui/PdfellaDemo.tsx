"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Check, FileText, FileUp } from "lucide-react";
import { PdfFileBadge } from "@/components/ui/PdfFileBadge";

// 0 = drag a file in, 1 = uploading, 2 = editor opens + text edit, 3 = sign + save
const DURATIONS = [2800, 1200, 3400, 3200];
const TOOLS = ["Select", "Edit text", "Markup", "Sign", "Redact", "Shapes", "Comment"];

function Cursor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`size-6 drop-shadow-[0_3px_5px_rgba(0,0,0,0.4)] ${className}`} aria-hidden>
      <path d="M5 3 L5 19 L9.5 15 L12.5 21.5 L15.2 20.3 L12.2 13.9 L18 13.5 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function PdfellaDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [over, setOver] = useState(false);
  const [typed, setTyped] = useState("30");
  const [saved, setSaved] = useState(false);

  // phase clock
  useEffect(() => {
    if (reduce) {
      setPhase(3);
      setTyped("14");
      setSaved(true);
      return;
    }
    if (!inView) return;
    const t = setTimeout(() => {
      if (phase === 3) {
        setPhase(0);
        setCycle((c) => c + 1);
      } else {
        setPhase((p) => p + 1);
      }
    }, DURATIONS[phase]);
    return () => clearTimeout(t);
  }, [phase, inView, reduce]);

  // dropzone highlight right before the drop
  useEffect(() => {
    if (reduce) return;
    setOver(false);
    if (phase !== 0) return;
    const t = setTimeout(() => setOver(true), 1500);
    return () => clearTimeout(t);
  }, [phase, cycle, reduce]);

  // text edit: 30 -> 14, then "saved"
  useEffect(() => {
    if (reduce) return;
    if (phase < 2) {
      setTyped("30");
      setSaved(false);
      return;
    }
    if (phase === 3) {
      const t = setTimeout(() => setSaved(true), 1900);
      return () => clearTimeout(t);
    }
    const seq = ["3", "", "1", "14"];
    let i = 0;
    let iv: ReturnType<typeof setInterval> | undefined;
    const t0 = setTimeout(() => {
      iv = setInterval(() => {
        setTyped(seq[i]);
        i += 1;
        if (i >= seq.length && iv) clearInterval(iv);
      }, 300);
    }, 1300);
    return () => {
      clearTimeout(t0);
      if (iv) clearInterval(iv);
    };
  }, [phase, reduce]);

  const showDrop = phase < 2;
  const editing = phase === 2;

  return (
    <div ref={ref} className="relative mx-auto h-[470px] w-full max-w-[580px] sm:h-[500px]">
      {/* paper stack behind */}
      <div className="absolute inset-x-6 top-6 bottom-4 -rotate-3 rounded-[2rem] bg-[#ffffff]/40" />
      <div className="absolute inset-x-3 top-8 bottom-2 rotate-2 rounded-[2rem] bg-[#ffffff]/60" />

      <AnimatePresence mode="wait">
        {showDrop ? (
          <motion.div
            key="drop"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="paper-shadow absolute inset-x-0 top-6 bottom-4 rounded-[2rem] bg-[#ffffff] p-5"
          >
            <div
              className={`flex h-full flex-col items-center justify-center rounded-3xl border-2 border-dashed px-6 text-center transition-colors duration-300 ${
                over || phase === 1 ? "border-[#0e7a62] bg-emerald-50/70" : "border-slate-300 bg-transparent"
              }`}
            >
              {phase === 0 ? (
                <>
                  <span className="flex size-16 items-center justify-center rounded-2xl bg-emerald-50 text-[#0e7a62]">
                    <FileUp className="size-8" strokeWidth={1.75} />
                  </span>
                  <p className="mt-5 text-2xl font-semibold text-slate-900">Drop your files here</p>
                  <p className="mt-1 text-sm text-slate-500">or</p>
                  <span className="mt-4 inline-flex items-center rounded-xl bg-[#0e7a62] px-6 py-3 text-base font-medium text-[#ffffff]">
                    Upload document
                  </span>
                  <p className="mt-5 text-xs text-slate-500">PDF, PNG, JPG, WEBP · up to 100 MB</p>
                </>
              ) : (
                <div className="w-full max-w-[300px]">
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#ffffff] p-4 text-left shadow-sm">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                      <FileText className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-900">agreement.pdf</p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                          className="h-full rounded-full bg-[#0e7a62]"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-medium text-slate-600">Opening editor...</p>
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="editor"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="paper-shadow absolute inset-x-0 top-4 bottom-2 flex flex-col overflow-hidden rounded-3xl bg-[#ffffff]"
          >
            {/* title bar */}
            <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-yellow-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-medium text-slate-600">agreement.pdf</span>
              <span
                className={`ml-auto inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-medium text-[#ffffff] transition-colors duration-300 ${
                  saved ? "bg-emerald-600" : "bg-[#0e7a62]"
                }`}
              >
                {saved ? (
                  <>
                    <Check className="size-3.5" strokeWidth={3} /> Saved
                  </>
                ) : (
                  "Save changes"
                )}
              </span>
            </div>

            {/* toolbar */}
            <div className="flex gap-1.5 overflow-hidden border-b border-slate-200 px-3 py-2">
              {TOOLS.map((tool) => {
                const active = (editing && tool === "Edit text") || (phase === 3 && tool === "Sign");
                return (
                  <span
                    key={tool}
                    className={`shrink-0 rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors duration-300 ${
                      active ? "bg-emerald-100 text-[#0b6755]" : "text-slate-500"
                    }`}
                  >
                    {tool}
                  </span>
                );
              })}
            </div>

            {/* body */}
            <div className="flex min-h-0 flex-1 gap-3 bg-slate-100 p-3">
              <div className="relative min-w-0 flex-1 overflow-hidden rounded-lg bg-[#ffffff] p-5 shadow-sm">
                <p className="text-base font-semibold text-slate-900">Project Agreement</p>
                <p className="mt-0.5 text-[10px] text-slate-400">Prepared for the client · 12 March</p>
                <div className="mt-4 space-y-3 text-[12px] leading-snug text-slate-700">
                  <p>1. Scope: design and delivery of the new company website.</p>
                  <p>
                    2. Payment terms:{" "}
                    <span className="relative inline-block">
                      <span
                        className={`rounded px-0.5 transition-colors duration-300 ${
                          editing
                            ? "bg-emerald-100 text-slate-900 outline outline-1 outline-[#0e7a62]"
                            : phase === 3
                              ? "text-[#0b6755]"
                              : ""
                        }`}
                      >
                        {typed || " "}
                        {editing && (
                          <span className="ml-px inline-block h-3 w-px translate-y-0.5 animate-pulse bg-[#0e7a62]" />
                        )}
                      </span>
                      {editing && (
                        <motion.span
                          initial={{ x: 120, y: 70, opacity: 0 }}
                          animate={{ x: 8, y: 6, opacity: 1 }}
                          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                          className="pointer-events-none absolute top-1/2 left-1/2 z-10"
                        >
                          <Cursor />
                        </motion.span>
                      )}
                    </span>{" "}
                    days from the date of invoice.
                  </p>
                  <p>3. Delivery: within eight weeks of kickoff.</p>
                  <p>4. Revisions: two rounds of changes included.</p>
                </div>

                <div className="absolute right-5 bottom-4 left-5">
                  <svg viewBox="0 0 200 50" className="h-11 w-40 text-[#0b3d91]" aria-hidden>
                    {phase === 3 && (
                      <motion.path
                        d="M6 34 C 18 6, 30 6, 28 30 C 27 42, 40 14, 52 22 C 60 28, 54 40, 66 30 C 78 20, 84 34, 96 28 C 112 20, 120 38, 140 24 L 190 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
                      />
                    )}
                  </svg>
                  <div className="border-t border-slate-300 pt-1 text-[9px] text-slate-400">Signature</div>
                </div>
              </div>

              <div className="hidden w-36 shrink-0 flex-col gap-3 rounded-lg bg-[#ffffff] p-3 text-[11px] shadow-sm sm:flex">
                <p className="font-mono-tight text-[9px] tracking-wider text-slate-400 uppercase">
                  {phase === 3 ? "Signature" : "Edited text"}
                </p>
                {phase === 3 ? (
                  <>
                    <div>
                      <p className="text-slate-400">Style</p>
                      <p className="font-medium text-slate-800">Drawn</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Colour</p>
                      <p className="flex items-center gap-1.5 font-medium text-slate-800">
                        <span className="size-2.5 rounded-full bg-[#0b3d91]" /> Blue
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <p className="text-slate-400">Font</p>
                      <p className="font-medium text-slate-800">Helvetica · matched</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Size</p>
                      <p className="font-medium text-slate-800">12 pt</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Colour</p>
                      <p className="font-medium text-slate-800">Original</p>
                    </div>
                  </>
                )}
                <p className="mt-auto text-[10px] leading-snug text-slate-400">
                  {phase === 3 ? "Draw, type or upload." : "Double-click any text and type."}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* file being dragged in */}
      {phase === 0 && !reduce && (
        <motion.div
          key={`drag-${cycle}`}
          initial={{ x: 230, y: -90, rotate: 12, opacity: 0, scale: 1 }}
          animate={{ x: 0, y: 40, rotate: 0, opacity: [0, 1, 1, 1], scale: [1, 1, 1, 0.92] }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute top-[30%] left-1/2 z-20 -ml-10"
        >
          <PdfFileBadge label="PDF" color="#e5342f" className="h-24 w-20" />
          <Cursor className="absolute -right-3 -bottom-3" />
        </motion.div>
      )}

      {/* floating file types, only while the drop zone is showing */}
      <motion.div
        animate={{ opacity: phase === 0 ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none"
        aria-hidden
      >
        <PdfFileBadge label="DOCX" color="#2f6bff" className="badge-float absolute top-1/4 -right-6 h-24 w-20" style={{ ["--r" as string]: "10deg", animationDelay: "1.2s" }} />
        <PdfFileBadge label="JPG" color="#7c3aed" className="badge-float absolute bottom-24 -left-6 h-24 w-20" style={{ ["--r" as string]: "-6deg", animationDelay: "2.2s" }} />
        <PdfFileBadge label="XLSX" color="#16a34a" className="badge-float absolute -right-3 bottom-2 h-24 w-20" style={{ ["--r" as string]: "8deg", animationDelay: "3s" }} />
      </motion.div>
    </div>
  );
}
