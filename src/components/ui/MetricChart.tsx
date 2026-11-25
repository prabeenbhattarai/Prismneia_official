function generateSeries(n: number, seedOffset: number, peak: number) {
  const points: number[] = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const trend = Math.pow(t, 1.4) * peak;
    const seed = Math.sin((i + seedOffset) * 12.9898) * 43758.5453;
    const frac = seed - Math.floor(seed);
    const noise = (frac - 0.5) * peak * 0.32 * (0.35 + t);
    points.push(Math.max(peak * 0.01, trend + noise));
  }
  return points;
}

const width = 600;
const height = 200;

function formatCompact(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return `${Math.round(n)}`;
}

export function MetricChart({
  label,
  peak,
  seedOffset,
  changeLabel,
  footerLeft,
  footerRight,
  accent = "#7c5cff",
}: {
  label: string;
  peak: number;
  seedOffset: number;
  changeLabel: string;
  footerLeft: string;
  footerRight: string;
  accent?: string;
}) {
  const series = generateSeries(48, seedOffset, peak);
  const value = Math.max(...series);
  const chartMax = peak * 1.08;

  const linePoints = series
    .map((v, i) => {
      const x = (i / (series.length - 1)) * width;
      const y = height - (v / chartMax) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const areaPoints = `0,${height} ${linePoints} ${width},${height}`;

  const yLabels = [0, chartMax * 0.25, chartMax * 0.5, chartMax * 0.75, chartMax].map(formatCompact);
  const reversedLabels = [...yLabels].reverse();
  const gradientId = `metricFill-${label.replace(/\s+/g, "")}`;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#ffffff] p-7 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-slate-900">{label}</p>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-600">
          {changeLabel}
        </span>
      </div>
      <p className="mt-3 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
        {Math.round(value).toLocaleString()}
      </p>

      <div className="mt-4">
        <svg viewBox={`-4 -8 ${width + 60} ${height + 16}`} className="h-44 w-full overflow-visible sm:h-52">
          {reversedLabels.map((lbl, i) => {
            const y = (i / (yLabels.length - 1)) * height;
            return (
              <g key={lbl + i}>
                <line x1={0} x2={width} y1={y} y2={y} stroke="#e2e8f0" strokeWidth={1} />
                <text x={width + 10} y={y} dy="0.32em" fontSize={13} fill="#cbd5e1">
                  {lbl}
                </text>
              </g>
            );
          })}
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity={0.22} />
              <stop offset="100%" stopColor={accent} stopOpacity={0} />
            </linearGradient>
          </defs>
          <polygon points={areaPoints} fill={`url(#${gradientId})`} />
          <polyline points={linePoints} fill="none" stroke={accent} strokeWidth={2} strokeLinejoin="round" />
        </svg>
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-3 text-sm text-slate-400">
        <span>{footerLeft}</span>
        <span>{footerRight}</span>
      </div>
    </div>
  );
}
