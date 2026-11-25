"use client";

import { type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Circle, Loader2 } from "lucide-react";

const mainNodes = [
  { id: "n1", x: 90, y: 520 },
  { id: "n2", x: 300, y: 380 },
  { id: "n3", x: 540, y: 460 },
  { id: "n4", x: 780, y: 220 },
];

const mainEdges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
];

const decorativeNodes = [
  { id: "d1", x: 190, y: 210, to: 1 },
  { id: "d2", x: 60, y: 330, to: 1 },
  { id: "d3", x: 420, y: 630, to: 2 },
  { id: "d4", x: 660, y: 600, to: 2 },
  { id: "d5", x: 900, y: 470, to: 3 },
  { id: "d6", x: 720, y: 80, to: 3 },
];

type Variant = {
  labels: [string, string, string, string];
  sideLabels: [string, string, string, string, string, string];
  card: { title: string; subtitle: string; body: string };
  panelTitle: string;
  panel: ReactNode;
};

function Row({ state, children, meta }: { state: "done" | "active" | "todo"; children: ReactNode; meta?: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5">
      <span
        className={`flex size-5 shrink-0 items-center justify-center rounded-full ${
          state === "done"
            ? "bg-emerald-100 text-emerald-600"
            : state === "active"
              ? "bg-blue-100 text-blue-600"
              : "bg-slate-100 text-slate-400"
        }`}
      >
        {state === "done" ? (
          <Check className="size-3" strokeWidth={3} />
        ) : state === "active" ? (
          <Loader2 className="size-3 animate-spin" />
        ) : (
          <Circle className="size-2.5" />
        )}
      </span>
      <span className={`text-[13px] font-medium ${state === "todo" ? "text-slate-400" : "text-slate-800"}`}>{children}</span>
      {meta && (
        <span
          className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-semibold ${
            state === "done"
              ? "bg-emerald-50 text-emerald-700"
              : state === "active"
                ? "bg-blue-50 text-blue-700"
                : "bg-slate-100 text-slate-500"
          }`}
        >
          {meta}
        </span>
      )}
    </div>
  );
}

function BoardCard({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-slate-200 bg-[#ffffff] px-2.5 py-2 text-[11px] font-medium text-slate-700 shadow-sm">{children}</div>;
}

function BoardColumn({ title, tone, children }: { title: string; tone: string; children: ReactNode }) {
  return (
    <div className="rounded-xl bg-slate-50 p-2">
      <p className={`mb-2 px-1 text-[10px] font-semibold tracking-wide uppercase ${tone}`}>{title}</p>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

export const processVariants: Variant[] = [
  {
    labels: ["GOALS", "USERS", "SYSTEMS", "BRIEF"],
    sideLabels: ["Stakeholders", "Interviews", "Analytics", "Current tools", "Constraints", "Budget"],
    card: {
      title: "Prismneia",
      subtitle: "Kickoff booked",
      body: "We map your goals, users and existing systems before any design or code.",
    },
    panelTitle: "Discovery brief",
    panel: (
      <div className="space-y-2">
        <Row state="done" meta="Done">Business goals and success measures</Row>
        <Row state="done" meta="Done">Stakeholder interviews</Row>
        <Row state="active" meta="In progress">Audit of current systems</Row>
        <Row state="todo" meta="Next">Scope, risks and timeline</Row>
      </div>
    ),
  },
  {
    labels: ["WIREFRAME", "PROTOTYPE", "REVIEW", "APPROVE"],
    sideLabels: ["User flows", "Components", "Brand", "Accessibility", "Feedback", "Sign-off"],
    card: {
      title: "Client",
      subtitle: "Just now",
      body: "The prototype feels right. Happy to approve and move into build.",
    },
    panelTitle: "Design review",
    panel: (
      <div className="space-y-2">
        <Row state="done" meta="Approved">Wireframes for every key screen</Row>
        <Row state="active" meta="In review">Interactive prototype</Row>
        <Row state="todo" meta="Drafting">Design system and components</Row>
        <Row state="todo" meta="Next">Final sign-off</Row>
      </div>
    ),
  },
  {
    labels: ["SPRINT 1", "SPRINT 2", "SPRINT 3", "DEMO"],
    sideLabels: ["Planning", "Code review", "Testing", "Staging", "Standup", "Backlog"],
    card: {
      title: "Prismneia",
      subtitle: "Weekly demo",
      body: "This week's build is ready to review. Notes are in your shared project space.",
    },
    panelTitle: "Sprint board",
    panel: (
      <div className="grid grid-cols-3 gap-2">
        <BoardColumn title="To do" tone="text-slate-500">
          <BoardCard>Reporting views</BoardCard>
          <BoardCard>Email notifications</BoardCard>
        </BoardColumn>
        <BoardColumn title="In progress" tone="text-blue-600">
          <BoardCard>User roles and access</BoardCard>
          <BoardCard>Data import</BoardCard>
        </BoardColumn>
        <BoardColumn title="Done" tone="text-emerald-600">
          <BoardCard>Sign-in</BoardCard>
          <BoardCard>Dashboard</BoardCard>
        </BoardColumn>
      </div>
    ),
  },
  {
    labels: ["DEPLOY", "MONITOR", "SUPPORT", "IMPROVE"],
    sideLabels: ["QA", "Staging", "Handover", "Documentation", "Training", "Support plan"],
    card: {
      title: "Prismneia",
      subtitle: "Go-live",
      body: "Release checklist complete. We monitor the launch and stay on call.",
    },
    panelTitle: "Release checklist",
    panel: (
      <div className="space-y-2">
        <Row state="done" meta="Passed">Quality assurance and testing</Row>
        <Row state="done" meta="Verified">Staging sign-off</Row>
        <Row state="done" meta="Live">Production release</Row>
        <Row state="active" meta="Ongoing">Monitoring and support</Row>
      </div>
    ),
  },
];

export function ProcessGraph({ variant }: { variant: number }) {
  const v = processVariants[variant];

  return (
    <div
      className="relative h-[560px] w-full overflow-hidden rounded-2xl border border-border bg-background-elevated/40 sm:h-[620px]"
      style={{ perspective: 1600 }}
    >
      <div className="bg-dots mask-fade-b pointer-events-none absolute inset-0 opacity-80" />

      <svg viewBox="0 0 1000 700" className="absolute inset-0 h-full w-full" fill="none">
        {decorativeNodes.map((n) => {
          const target = mainNodes[n.to];
          return (
            <line
              key={`edge-${n.id}`}
              x1={n.x}
              y1={n.y}
              x2={target.x}
              y2={target.y}
              stroke="currentColor" className="text-white/15"
              strokeWidth={1}
            />
          );
        })}

        {mainEdges.map(([from, to]) => {
          const a = mainNodes[from];
          const b = mainNodes[to];
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(34,224,255,0.45)"
              strokeWidth={1.5}
            />
          );
        })}

        {decorativeNodes.map((n) => (
          <rect key={n.id} x={n.x - 4} y={n.y - 4} width={8} height={8} fill="currentColor" className="text-white/25" />
        ))}

        {mainNodes.map((n) => (
          <rect
            key={n.id}
            x={n.x - 6}
            y={n.y - 6}
            width={12}
            height={12}
            className="animate-pulse-glow"
            fill="var(--neon-cyan)"
          />
        ))}
      </svg>

      {decorativeNodes.map((n, i) => (
        <span
          key={n.id}
          className="font-mono-tight absolute text-xs whitespace-nowrap text-muted/70"
          style={{ left: `${(n.x / 1000) * 100}%`, top: `${(n.y / 700) * 100}%`, transform: "translate(8px, -6px)" }}
        >
          {v.sideLabels[i]}
        </span>
      ))}

      {mainNodes.map((n, i) => (
        <span
          key={n.id}
          className="font-mono-tight absolute text-base font-bold whitespace-nowrap text-neon-cyan sm:text-lg"
          style={{ left: `${(n.x / 1000) * 100}%`, top: `${(n.y / 700) * 100}%`, transform: "translate(12px, -10px)" }}
        >
          {v.labels[i]}
        </span>
      ))}

      <AnimatePresence mode="wait">
        <motion.div
          key={`card-${variant}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="glass-panel absolute top-[8%] left-[6%] flex w-[280px] items-start gap-3 rounded-xl border p-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] sm:left-[8%]"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-neon-cyan to-neon-violet text-[11px] font-bold text-background">
            P
          </span>
          <div>
            <p className="text-xs font-semibold text-foreground">
              {v.card.title} <span className="font-normal text-muted">· {v.card.subtitle}</span>
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{v.card.body}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute top-[6%] right-[4%] hidden h-[70%] w-[44%] rounded-xl border border-white/10 bg-[#ffffff] p-5 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.85)] lg:block"
        style={{
          transform: "rotateY(-10deg) rotateX(5deg) rotateZ(1deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="flex items-center gap-1.5 border-b border-slate-200 pb-3">
          <span className="size-2 rounded-full bg-red-400" />
          <span className="size-2 rounded-full bg-yellow-400" />
          <span className="size-2 rounded-full bg-emerald-400" />
          <span className="font-mono-tight ml-2 flex items-center gap-1 text-[11px] text-slate-500">
            {v.panelTitle}
          </span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={`panel-${variant}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            {v.panel}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
