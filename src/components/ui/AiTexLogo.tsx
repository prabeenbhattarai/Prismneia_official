import { useId } from "react";
import clsx from "clsx";

// The "A" doubles as the first letter of the wordmark: pen-nib right leg,
// chat-bubble crossbar. Sized in em so it scales with the surrounding text.
export function AiTexMark({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 64 68" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}l`} x1="0" y1="1" x2="0.6" y2="0">
          <stop offset="0" stopColor="#1d6bff" />
          <stop offset="1" stopColor="#22c8f0" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#12b8d6" />
          <stop offset="1" stopColor="#2de0c8" />
        </linearGradient>
        <linearGradient id={`${id}n`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2f7bff" />
          <stop offset="1" stopColor="#1a3fd8" />
        </linearGradient>
      </defs>
      {/* left leg + apex */}
      <path d="M3 62 L24 11 Q27 4 33.5 4.5 Q40 5 42 11.5 L47 26 L37.5 26 L33 15.5 L15.5 62 Z" fill={`url(#${id}l)`} />
      {/* chat-bubble crossbar */}
      <rect x="17" y="35" width="29" height="14" rx="7" fill={`url(#${id}b)`} />
      <circle cx="26" cy="42" r="1.7" fill="#06323f" opacity="0.75" />
      <circle cx="31.5" cy="42" r="1.7" fill="#06323f" opacity="0.75" />
      <circle cx="37" cy="42" r="1.7" fill="#06323f" opacity="0.75" />
      {/* pen-nib right leg */}
      <path d="M41.5 13 L58 52 L52.5 65 L43 53 L35.5 28 Z" fill={`url(#${id}n)`} />
      <path d="M52 52 L52.5 61" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="51.5" cy="49" r="1.8" fill="#ffffff" fillOpacity="0.8" />
    </svg>
  );
}

export function AiTexWordmark({ className }: { className?: string }) {
  return (
    <span className={clsx("font-semibold tracking-[-0.03em] text-foreground", className)}>
      <span className="text-[#17c6c9]">i</span>Tex<span className="text-[#17c6c9]">T</span>ools
    </span>
  );
}

export function AiTexLogo({ className }: { className?: string }) {
  return (
    <span className={clsx("inline-flex items-end gap-[0.06em] leading-none", className)}>
      <AiTexMark className="mb-[0.02em] h-[1.05em] w-auto drop-shadow-[0_6px_18px_rgba(34,200,240,0.45)]" />
      <AiTexWordmark />
    </span>
  );
}
