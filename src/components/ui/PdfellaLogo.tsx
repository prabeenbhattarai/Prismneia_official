import { useId } from "react";
import clsx from "clsx";

export function PdfellaMark({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}t`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14917a" />
          <stop offset="1" stopColor="#0a604d" />
        </linearGradient>
        <linearGradient id={`${id}s`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe08a" />
          <stop offset="1" stopColor="#f5b928" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="62" height="62" rx="17" fill={`url(#${id}t)`} />
      <rect x="1.5" y="1.5" width="61" height="61" rx="16.5" fill="none" stroke="#ffffff" strokeOpacity="0.18" />
      <path
        d="M20 11 H35 L47 23 V47 a4.5 4.5 0 0 1 -4.5 4.5 H20 a4.5 4.5 0 0 1 -4.5 -4.5 V15.5 A4.5 4.5 0 0 1 20 11 Z"
        fill="#ffffff"
      />
      <path d="M35 11 V19 a4 4 0 0 0 4 4 H47 Z" fill="#cfe6df" />
      <path
        d="M24.5 43 V27 H31.5 a5.2 5.2 0 0 1 0 10.4 H24.5"
        fill="none"
        stroke="#0e7a62"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47.5 33 Q48.6 40.4 56 41.5 Q48.6 42.6 47.5 50 Q46.4 42.6 39 41.5 Q46.4 40.4 47.5 33 Z"
        fill={`url(#${id}s)`}
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PdfellaWordmark({ className }: { className?: string }) {
  return (
    <span className={clsx("inline-flex items-baseline leading-none", className)}>
      <span className="font-bold tracking-[-0.045em] text-foreground">PDF</span>
      <span className="font-serif-display ml-[0.04em] text-[1.18em] font-normal tracking-[-0.01em] text-pdf italic">
        ella
      </span>
    </span>
  );
}

export function PdfellaLogo({ className, textClassName }: { className?: string; textClassName?: string }) {
  return (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <PdfellaMark className="h-10 w-auto" />
      <PdfellaWordmark className={clsx("text-3xl", textClassName)} />
    </span>
  );
}
