import { useId } from "react";

const rays = [
  { color: "#ff4d6d", y: 196 },
  { color: "#ff9f43", y: 226 },
  { color: "#ffe14d", y: 256 },
  { color: "#3ddc97", y: 286 },
  { color: "#22e0ff", y: 316 },
  { color: "#4d7cff", y: 346 },
  { color: "#a46bff", y: 376 },
];

// Glass prism splitting one white beam into a spectrum. Pure SVG, no assets.
export function PrismBeam({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 640 440"
      fill="none"
      aria-hidden
      className={`prism-beam ${className}`}
    >
      <defs>
        <linearGradient id={`${id}-in`} x1="90" y1="0" x2="272" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="210" y1="60" x2="450" y2="270" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22e0ff" stopOpacity="0.35" />
          <stop offset="0.5" stopColor="#4d7cff" stopOpacity="0.12" />
          <stop offset="1" stopColor="#a46bff" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id={`${id}-edge`} x1="210" y1="60" x2="450" y2="270" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22e0ff" />
          <stop offset="1" stopColor="#a46bff" />
        </linearGradient>
        {rays.map((r, i) => (
          <linearGradient key={r.color} id={`${id}-ray${i}`} x1="402" y1="0" x2="640" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor={r.color} stopOpacity="0.95" />
            <stop offset="1" stopColor={r.color} stopOpacity="0" />
          </linearGradient>
        ))}
        <filter id={`${id}-blur`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* spectrum rays: soft glow wedge + crisp core */}
      {rays.map((r, i) => (
        <g key={r.color} className="prism-ray" style={{ animationDelay: `${i * 0.35}s` }}>
          <path
            d={`M402 186 L640 ${r.y - 16} L640 ${r.y + 16} Z`}
            fill={`url(#${id}-ray${i})`}
            opacity="0.35"
            filter={`url(#${id}-blur)`}
          />
          <path d={`M402 186 L640 ${r.y}`} stroke={`url(#${id}-ray${i})`} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      ))}

      {/* incoming white beam */}
      <path d="M90 232 L272 166" stroke={`url(#${id}-in)`} strokeWidth="9" opacity="0.3" filter={`url(#${id}-blur)`} />
      <path d="M90 232 L272 166" stroke={`url(#${id}-in)`} strokeWidth="2.5" strokeLinecap="round" />

      {/* prism body */}
      <polygon points="330,60 210,270 450,270" fill={`url(#${id}-glass)`} />
      <polygon
        points="330,60 210,270 450,270"
        stroke={`url(#${id}-edge)`}
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* inner facet highlight */}
      <polyline points="330,60 330,270" stroke="currentColor" strokeOpacity="0.14" strokeWidth="1" />
      <path d="M272 166 L402 186" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
