export function PdfFileBadge({
  label,
  color,
  className = "",
  style,
}: {
  label: string;
  color: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)] ${className}`} style={style} aria-hidden>
      <svg viewBox="0 0 72 88" className="h-full w-full">
        <path d="M8 2 H46 L70 26 V78 a8 8 0 0 1 -8 8 H8 a8 8 0 0 1 -8 -8 V10 A8 8 0 0 1 8 2 Z" fill={color} />
        <path d="M46 2 V20 a6 6 0 0 0 6 6 H70 Z" fill="#ffffff" fillOpacity="0.32" />
        <g transform="rotate(-18 36 56)">
          <rect x="6" y="44" width="60" height="22" rx="5" fill="#ffffff" />
          <text
            x="36"
            y="60"
            textAnchor="middle"
            fontSize="13"
            fontWeight="800"
            fill={color}
            fontFamily="var(--font-geist-sans), Arial, sans-serif"
          >
            {label}
          </text>
        </g>
      </svg>
    </div>
  );
}
