import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionTag } from "@/components/ui/SectionTag";
import { solutionsMenu } from "@/lib/data";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Solutions | Prismneia",
  description:
    "Software built for how your industry actually works, startups, retail, healthcare, finance, government and legacy modernization.",
};

const industries = solutionsMenu.columns.flatMap((c) => c.items);

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        tag="Solutions by industry"
        title="Software shaped around your industry, not the other way around"
        description="Every sector has its own compliance, workflows and customers. Here's how we approach the ones we work in most."
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              const id = industry.href.split("#")[1];
              return (
                <div
                  key={industry.title}
                  id={id}
                  className="card-hover glass-panel scroll-mt-28 rounded-2xl border p-7"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold">{industry.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{industry.description}</p>
                  <a
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-neon-cyan"
                  >
                    Discuss your project
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              );
            })}
          </div>

          <div className="glass-panel relative mt-10 overflow-hidden rounded-2xl border p-8 sm:p-10">
            <SectionTag>Don&apos;t see your industry?</SectionTag>
            <h2 className="mt-4 max-w-lg text-2xl font-semibold tracking-tight">
              We've likely built something adjacent, so let's talk about yours
            </h2>
            <Button href="/contact" className="mt-6" showArrow>
              Start a project
            </Button>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
