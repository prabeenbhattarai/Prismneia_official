import { type ReactNode } from "react";
import { SectionTag } from "@/components/ui/SectionTag";
import { GlowOrbs } from "@/components/ui/GlowOrbs";

export function PageHero({
  tag,
  title,
  description,
  children,
}: {
  tag: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 sm:pt-48 sm:pb-20">
      <GlowOrbs variant="hero" />
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionTag>{tag}</SectionTag>
          <h1 className="mt-6 text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{description}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
