"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Loader2, Sparkles } from "lucide-react";

export type ToolId = "humanizer" | "paraphraser" | "detector" | "email";

type Sentence = { text: string; ai: boolean };

type ToolDef = {
  tab: string;
  button: string;
  busy: string;
  inLabel: string;
  outLabel: string;
  placeholder: string;
  input: string;
  output?: string;
  sentences?: Sentence[];
};

const TABS: { id: ToolId; label: string }[] = [
  { id: "humanizer", label: "Humanize AI Text" },
  { id: "paraphraser", label: "Paraphrase Text" },
  { id: "detector", label: "Detect AI" },
  { id: "email", label: "Email Writer" },
];

const TOOLS: Record<ToolId, ToolDef> = {
  humanizer: {
    tab: "Humanize AI Text",
    button: "Humanize",
    busy: "Humanizing...",
    inLabel: "Paste your AI-generated text",
    outLabel: "Human-sounding result",
    placeholder: "Paste your AI-generated text here...",
    input:
      "Artificial intelligence has revolutionized the way we interact with technology. It is important to note that AI systems are designed to process vast amounts of data efficiently.",
    output:
      "AI has completely changed how we use tech every day. What's fascinating is how these systems crunch through huge amounts of data in ways our brains simply can't match.",
  },
  paraphraser: {
    tab: "Paraphrase Text",
    button: "Paraphrase",
    busy: "Rewriting...",
    inLabel: "Original text",
    outLabel: "Rewritten, same meaning",
    placeholder: "Paste the text you want to rewrite...",
    input:
      "The meeting has been rescheduled due to unforeseen circumstances. We apologise for any inconvenience this may cause.",
    output:
      "We had to push the meeting back because something came up. Sorry for the hassle, and thanks for being flexible.",
  },
  detector: {
    tab: "Detect AI",
    button: "Check text",
    busy: "Scanning...",
    inLabel: "Text to check",
    outLabel: "Sentence by sentence",
    placeholder: "Paste text to check for AI-like patterns...",
    input:
      "In conclusion, it is important to note that technology continues to transform various industries. Honestly, I just wanted a faster way to get my notes down. It worked better than I expected.",
    sentences: [
      { text: "In conclusion, it is important to note that technology continues to transform various industries.", ai: true },
      { text: "Honestly, I just wanted a faster way to get my notes down.", ai: false },
      { text: "It worked better than I expected.", ai: false },
    ],
  },
  email: {
    tab: "Email Writer",
    button: "Write email",
    busy: "Drafting...",
    inLabel: "What should the email say?",
    outLabel: "Your draft",
    placeholder: "Describe the email you need...",
    input: "Follow up with Sarah about the proposal I sent last week. Friendly, short.",
    output:
      "Hi Sarah,\n\nJust checking in on the proposal I sent over last week. Happy to jump on a quick call if that would help.\n\nBest,\nAlex",
  },
};

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export function ToolWorkspace({ tool }: { tool: ToolId }) {
  const def = TOOLS[tool];
  const reduce = useReducedMotion();
  const [typedIn, setTypedIn] = useState("");
  const [typedOut, setTypedOut] = useState("");
  const [revealed, setRevealed] = useState(0);
  const [stage, setStage] = useState<"typing" | "click" | "busy" | "done">("typing");

  useEffect(() => {
    if (reduce) {
      setTypedIn(def.input);
      setTypedOut(def.output ?? "");
      setRevealed(def.sentences?.length ?? 0);
      setStage("done");
      return;
    }

    let cancelled = false;

    const type = async (setter: (v: string) => void, text: string, speed: number) => {
      for (let i = 1; i <= text.length; i += 1) {
        if (cancelled) return;
        setter(text.slice(0, i));
        await sleep(speed);
      }
    };

    const run = async () => {
      while (!cancelled) {
        setTypedIn("");
        setTypedOut("");
        setRevealed(0);
        setStage("typing");
        await sleep(500);
        await type(setTypedIn, def.input, 16);
        await sleep(450);
        if (cancelled) return;
        setStage("click");
        await sleep(450);
        if (cancelled) return;
        setStage("busy");
        await sleep(1100);
        if (cancelled) return;
        setStage("done");
        if (def.sentences) {
          for (let i = 1; i <= def.sentences.length; i += 1) {
            if (cancelled) return;
            setRevealed(i);
            await sleep(750);
          }
        } else {
          await type(setTypedOut, def.output ?? "", 14);
        }
        await sleep(3600);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [tool, def, reduce]);

  const busy = stage === "busy";
  const pressed = stage === "click";

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#ffffff] shadow-[0_40px_100px_-25px_rgba(0,0,0,0.7)]">
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-red-400" />
        <span className="size-2.5 rounded-full bg-yellow-400" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        <span className="font-mono-tight ml-3 rounded-md bg-[#ffffff] px-3 py-1 text-[11px] text-slate-500">
          prismneia.com
        </span>
      </div>

      <div className="p-4 sm:p-6">
        {/* tabs */}
        <div className="grid grid-cols-2 gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1 sm:grid-cols-4">
          {TABS.map((t) => (
            <span
              key={t.id}
              className={`rounded-lg px-3 py-2 text-center text-sm font-semibold transition-colors duration-300 ${
                t.id === tool ? "bg-[#4f5bf0] text-white shadow-sm" : "text-slate-500"
              }`}
            >
              {t.label}
            </span>
          ))}
        </div>

        {/* controls */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-xs font-medium">
            <span className="rounded-md bg-[#ffffff] px-3 py-1 text-slate-900 shadow-sm">Normal</span>
            <span className="px-3 py-1 text-slate-400">Premium</span>
          </div>
          <span className="ml-auto rounded-lg border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
            English
          </span>
          <span className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
            Basic
          </span>
        </div>

        {/* panes */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <p className="font-mono-tight mb-2 text-[11px] tracking-wider text-slate-400 uppercase">{def.inLabel}</p>
            <div className="min-h-[190px] rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-[15px] leading-relaxed whitespace-pre-line text-slate-800">
              {typedIn || <span className="text-slate-400">{def.placeholder}</span>}
              {stage === "typing" && (
                <span className="ml-px inline-block h-4 w-0.5 translate-y-0.5 animate-pulse bg-[#4f5bf0]" />
              )}
            </div>
          </div>

          <div>
            <p className="font-mono-tight mb-2 text-[11px] tracking-wider text-slate-400 uppercase">{def.outLabel}</p>
            <div className="relative min-h-[190px] rounded-xl border border-slate-200 bg-[#ffffff] p-4 text-[15px] leading-relaxed whitespace-pre-line text-slate-800">
              {busy && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl bg-[#ffffff]/90">
                  <Loader2 className="size-6 animate-spin text-[#4f5bf0]" />
                  <p className="text-sm font-medium text-slate-500">{def.busy}</p>
                </div>
              )}

              {def.sentences ? (
                <div className="space-y-2.5">
                  {def.sentences.slice(0, revealed).map((s, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className={`rounded-lg px-2.5 py-1.5 text-sm ${
                        s.ai ? "bg-amber-100 text-amber-950" : "bg-emerald-50 text-emerald-950"
                      }`}
                    >
                      {s.text}
                      <span
                        className={`ml-2 inline-block rounded-full px-2 py-0.5 align-middle text-[10px] font-semibold ${
                          s.ai ? "bg-amber-200 text-amber-900" : "bg-emerald-200 text-emerald-900"
                        }`}
                      >
                        {s.ai ? "AI-like pattern" : "Reads human"}
                      </span>
                    </motion.p>
                  ))}
                </div>
              ) : (
                <>
                  {typedOut}
                  {stage === "done" && typedOut.length < (def.output ?? "").length && (
                    <span className="ml-px inline-block h-4 w-0.5 translate-y-0.5 animate-pulse bg-[#4f5bf0]" />
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* action */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="hidden text-sm text-slate-400 sm:block">
            {stage === "done" ? (
              <span className="inline-flex items-center gap-1.5 text-emerald-600">
                <Check className="size-4" strokeWidth={3} /> Done
              </span>
            ) : (
              "Paste text or upload a file"
            )}
          </p>
          <motion.span
            animate={{ scale: pressed ? 0.94 : 1 }}
            transition={{ duration: 0.18 }}
            className="ml-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4f5bf0] to-[#7c5cff] px-6 py-3 text-base font-semibold text-white shadow-[0_10px_28px_-8px_rgba(79,91,240,0.7)]"
          >
            <Sparkles className="size-4" />
            {def.button}
          </motion.span>
        </div>
      </div>
    </div>
  );
}
