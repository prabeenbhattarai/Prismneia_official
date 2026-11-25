"use client";

import { Check } from "lucide-react";
import { aiTexToolsFeatures } from "@/lib/data";
import { aiToolDemos } from "@/components/ui/AiToolDemos";

export function AiToolsSections() {
  return (
    <div className="space-y-6">
      {aiTexToolsFeatures.map((feature, i) => {
        const Icon = feature.icon;
        const Demo = aiToolDemos[i];
        const reversed = i % 2 === 1;
        return (
          <div
            key={feature.id}
            id={feature.id}
            className="glass-panel scroll-mt-28 overflow-hidden rounded-2xl border p-7 sm:p-10"
          >
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span className="flex size-12 items-center justify-center rounded-xl border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan">
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {feature.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-neon-cyan">{feature.tagline}</p>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                  {feature.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check className="mt-0.5 size-4 shrink-0 text-neon-cyan" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                <Demo />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
