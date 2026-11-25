import { type ReactNode } from "react";

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div className="chip font-mono-tight inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase text-muted">
      <span className="size-1.5 rounded-full bg-neon-cyan shadow-[0_0_8px_2px_rgba(34,224,255,0.8)]" />
      {children}
    </div>
  );
}
