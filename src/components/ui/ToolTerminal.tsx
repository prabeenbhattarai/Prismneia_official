import { type ReactNode } from "react";
import { TerminalSquare } from "lucide-react";

export function ToolTerminal({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      className="h-full rounded-2xl border border-white/10 bg-[#ffffff] p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
      style={{ transform: "rotateY(-6deg) rotateX(3deg) rotateZ(0.5deg)", transformStyle: "preserve-3d" }}
    >
      <div className="flex items-center gap-1.5 border-b border-slate-200 pb-3">
        <span className="size-3 rounded-full bg-red-400" />
        <span className="size-3 rounded-full bg-yellow-400" />
        <span className="size-3 rounded-full bg-emerald-400" />
        <span className="font-mono-tight ml-2 flex items-center gap-1.5 text-sm text-slate-500">
          <TerminalSquare className="size-4 text-blue-600" />
          {title}
        </span>
      </div>
      <pre className="font-mono-tight mt-5 text-base leading-relaxed text-slate-800 sm:text-lg">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export const line = (children: ReactNode) => <div className="whitespace-pre-wrap">{children}</div>;
