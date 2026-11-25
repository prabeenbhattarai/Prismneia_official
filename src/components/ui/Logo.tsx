import { useId } from "react";
import clsx from "clsx";

export function LogoMark({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="12 -4 154 202" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}t`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#13E2F4" />
          <stop offset=".48" stopColor="#078BFF" />
          <stop offset="1" stopColor="#263BFF" />
        </linearGradient>
        <linearGradient id={`${id}s`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00D9F5" />
          <stop offset=".55" stopColor="#087BFF" />
          <stop offset="1" stopColor="#2437D8" />
        </linearGradient>
        <linearGradient id={`${id}v`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#315BFF" />
          <stop offset=".55" stopColor="#762BFF" />
          <stop offset="1" stopColor="#D12BEE" />
        </linearGradient>
      </defs>
      <path d="M18 30 L88 0 L158 40 L158 82 L88 122 L88 82 L124 62 L88 42 L52 58 L52 170 L18 190 Z" fill={`url(#${id}t)`} />
      <path d="M18 30 L52 49 L52 170 L18 190 Z" fill={`url(#${id}s)`} />
      <path d="M52 49 L88 30 L124 50 L158 40 L88 0 Z" fill={`url(#${id}t)`} opacity=".96" />
      <path d="M88 82 L158 40 L158 82 L88 122 Z" fill={`url(#${id}v)`} />
      <path d="M18 30 L88 0 L88 30 L52 49 Z" fill="#16DDF2" opacity=".45" />
    </svg>
  );
}

export function Logo({ className, textClassName }: { className?: string; textClassName?: string }) {
  return (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <LogoMark className="h-9 w-auto" />
      <span className={clsx("text-2xl font-semibold tracking-[-0.04em] text-foreground", textClassName)}>
        Prismneia
      </span>
    </span>
  );
}
