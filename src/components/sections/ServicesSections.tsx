"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { serviceFeatures } from "@/lib/data";
import { serviceScenes } from "@/components/ui/ServiceScenes";

export function ServicesSections() {
  return (
    <div className="space-y-6">
      {serviceFeatures.map((service, i) => {
        const Icon = service.icon;
        const Scene = serviceScenes[i];
        return (
          <div
            key={service.id}
            id={service.id}
            className="glass-panel scroll-mt-28 rounded-2xl border p-7 sm:p-10"
          >
            <div className="grid gap-8 sm:grid-cols-[1fr_220px]">
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-xl border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-mono-tight text-xs text-neon-cyan">{service.tag}</p>
                    <h2 className="text-2xl font-semibold tracking-tight">{service.title}</h2>
                  </div>
                </div>

                <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
                  {service.description}
                </p>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check className="mt-0.5 size-4 shrink-0 text-neon-cyan" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Button href="/contact" className="mt-7" showArrow>
                  Talk to us about {service.title.toLowerCase()}
                </Button>
              </div>

              <div className="hidden sm:flex sm:items-center">
                <Scene />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
