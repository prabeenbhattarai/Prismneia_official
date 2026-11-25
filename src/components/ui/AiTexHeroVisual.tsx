"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CreditCard,
  FileText,
  Fingerprint,
  LayoutDashboard,
  LogOut,
  Mail,
  Repeat2,
  User,
  Wand2,
} from "lucide-react";
import { AiTexMark } from "@/components/ui/AiTexLogo";

// Cutout is 1456x1732 px. The dashboard below is laid out on a 1280x840 canvas and
// warped onto the tablet screen with a perspective matrix, so the text stays crisp.
const IMG_W = 1456;
const IMG_H = 1732;
const DESIGN_W = 1280;
const DESIGN_H = 840;
const SCREEN_MATRIX = "matrix3d(1.05354284,0.10893296,0,0.0001219904,0.07243878,0.83968137,0,-0.0001202553,0,0,1,0,74.4375,618.6375,0,1)";

const nav = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "AI Humanizer", icon: Wand2 },
  { label: "File Humanizer", icon: FileText },
  { label: "Paraphraser", icon: Repeat2 },
  { label: "AI Detector", icon: Fingerprint },
  { label: "Email Writer", icon: Mail },
];

const stats = [
  { label: "Current plan", value: "Pro", sub: "Active", bar: 100 },
  { label: "Humanizer remaining", value: "60.0K", sub: "words", bar: 82 },
  { label: "Detector remaining", value: "70.0K", sub: "words", bar: 90 },
  { label: "AI generation remaining", value: "50.0K", sub: "words", bar: 74 },
];

const tools = [
  { name: "AI Humanizer", text: "Turn AI text into natural, human writing", icon: Wand2 },
  { name: "AI Detector", text: "Detect AI-generated content in seconds", icon: Fingerprint },
  { name: "Paraphraser", text: "Rewrite text and keep the meaning", icon: Repeat2 },
  { name: "Email Writer", text: "Write professional emails, right tone", icon: Mail },
];

const recent = [
  { text: "A client emailed me saying four of my article...", meta: "Humanizer · 7 days ago" },
  { text: "Sub 5 or Otto bins to collect daily clean up...", meta: "Paraphraser · 24 days ago" },
  { text: "In today's competitive e-commerce environment...", meta: "Detector · 33 days ago" },
];

function Dashboard() {
  return (
    <div className="flex h-full w-full bg-[#0b0f17] text-[#ffffff]" style={{ fontSize: 22 }}>
      {/* sidebar */}
      <aside className="flex w-[270px] shrink-0 flex-col border-r border-[#1b2332] bg-[#0d121c] p-6">
        <div className="flex items-center gap-2.5">
          <AiTexMark className="h-[38px] w-auto" />
          <span className="text-[30px] font-semibold tracking-tight">
            <span className="text-[#2de0c8]">i</span>Tex<span className="text-[#2de0c8]">T</span>ools
          </span>
        </div>

        <div className="mt-7 flex items-center gap-3 rounded-2xl border border-[#1b2332] bg-[#111826] p-3.5">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4f6bff] to-[#2de0c8] text-[22px] font-semibold">
            J
          </span>
          <div className="min-w-0">
            <p className="text-[22px] font-semibold">jack</p>
            <p className="truncate text-[15px] text-[#8b95a7]">jack@aitextools.com</p>
          </div>
        </div>

        <p className="mt-7 mb-2 text-[14px] tracking-widest text-[#5d6779] uppercase">AI tools</p>
        <ul className="space-y-1">
          {nav.map((n) => {
            const Icon = n.icon;
            return (
              <li
                key={n.label}
                className={`flex items-center gap-3.5 rounded-xl px-3.5 py-3 text-[20px] ${
                  n.active ? "bg-[#1a2333] text-[#ffffff]" : "text-[#9aa4b6]"
                }`}
              >
                <Icon className="size-[22px]" strokeWidth={1.75} />
                {n.label}
              </li>
            );
          })}
        </ul>

        <p className="mt-6 mb-2 text-[14px] tracking-widest text-[#5d6779] uppercase">Account</p>
        <ul className="space-y-1 text-[20px] text-[#9aa4b6]">
          <li className="flex items-center gap-3.5 px-3.5 py-2.5">
            <User className="size-[22px]" strokeWidth={1.75} /> Profile
          </li>
          <li className="flex items-center gap-3.5 px-3.5 py-2.5">
            <CreditCard className="size-[22px]" strokeWidth={1.75} /> Plans & Billing
          </li>
        </ul>

        <div className="mt-auto flex items-center gap-3.5 px-3.5 py-2.5 text-[20px] text-[#9aa4b6]">
          <LogOut className="size-[22px]" strokeWidth={1.75} /> Logout
        </div>
      </aside>

      {/* main */}
      <main className="flex min-w-0 flex-1 flex-col p-8">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[46px] leading-none font-semibold tracking-tight">Welcome back, jack</h3>
            <p className="mt-3 text-[20px] text-[#8b95a7]">Choose a tool to get started, or pick up where you left off.</p>
          </div>
          <span className="rounded-xl border border-[#232d40] bg-[#111826] px-5 py-2.5 text-[18px] text-[#c7cfdd]">Manage plan</span>
        </div>

        <div className="mt-7 grid grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-[#1b2332] bg-[#111826] p-4">
              <p className="text-[16px] text-[#8b95a7]">{s.label}</p>
              <p className="mt-2 text-[36px] leading-none font-semibold">{s.value}</p>
              <p className="mt-1 text-[15px] text-[#5d6779]">{s.sub}</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#1b2332]">
                <div className="h-full rounded-full bg-gradient-to-r from-[#3b82f6] to-[#2de0c8]" style={{ width: `${s.bar}%` }} />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-7 text-[24px] font-semibold">AI Tools</p>
        <div className="mt-3 grid grid-cols-2 gap-4">
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.name} className="flex items-center gap-4 rounded-2xl border border-[#1b2332] bg-[#111826] p-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#16294d] text-[#5b9bff]">
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <p className="text-[21px] font-semibold">{t.name}</p>
                  <p className="truncate text-[16px] text-[#8b95a7]">{t.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-[24px] font-semibold">Recent activity</p>
        <div className="mt-3 space-y-2.5">
          {recent.map((r) => (
            <div key={r.text} className="flex items-center justify-between rounded-xl border border-[#1b2332] bg-[#111826] px-4 py-3">
              <p className="truncate text-[18px] text-[#d6dce8]">{r.text}</p>
              <p className="ml-4 shrink-0 text-[15px] text-[#5d6779]">{r.meta}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export function AiTexHeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.36);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / IMG_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 90, scale: 0.88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ type: "spring", stiffness: 110, damping: 17, delay: 0.1 }}
      style={{ transformOrigin: "50% 100%" }}
    >
      <div ref={ref} className="relative w-full" style={{ aspectRatio: `${IMG_W} / ${IMG_H}` }}>
        <Image
          src="/images/aitextools/aitextools-cutout.webp"
          alt="A person holding a tablet showing the AiTexTools dashboard"
          width={IMG_W}
          height={IMG_H}
          sizes="(min-width: 1024px) 560px, 92vw"
          quality={92}
          className="hand-fade h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
          priority={false}
        />
        {/* crisp live dashboard warped onto the tablet screen */}
        <div
          className="pointer-events-none absolute top-0 left-0 origin-top-left"
          style={{ width: IMG_W, height: IMG_H, transform: `scale(${scale})` }}
          aria-hidden
        >
          <div
            className="absolute top-0 left-0 overflow-hidden"
            style={{
              width: DESIGN_W,
              height: DESIGN_H,
              borderRadius: 44,
              transformOrigin: "0 0",
              transform: SCREEN_MATRIX,
            }}
          >
            <Dashboard />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
