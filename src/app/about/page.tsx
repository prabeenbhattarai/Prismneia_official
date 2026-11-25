import type { Metadata } from "next";
import { Rocket, Users, MessageSquare, MapPin } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTag } from "@/components/ui/SectionTag";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About | Prismneia",
  description:
    "Prismneia is a software studio building web, mobile and AI-integrated systems, and our own products, AiTexTools and PDFella.",
};

const values = [
  {
    icon: Rocket,
    title: "Ship fast, ship right",
    description: "Weekly demos over quarterly reveals, so you see real progress, not a status report.",
  },
  {
    icon: Users,
    title: "Senior, not outsourced",
    description: "The people who scope your project are the same people who build it.",
  },
  {
    icon: MessageSquare,
    title: "Plain-English, always",
    description: "No jargon walls. If we can't explain a decision simply, we haven't finished thinking it through.",
  },
  {
    icon: MapPin,
    title: "Global, async-friendly",
    description: "We work with teams worldwide, with clear async updates and overlap hours that suit you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About us"
        title="Software built by people who'd rather ship than meet"
        description="Prismneia is a small, senior software studio. We build web, mobile and AI-integrated systems for businesses worldwide, and we build our own products, AiTexTools and PDFella, alongside it."
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="glass-panel rounded-2xl border p-8 sm:p-10">
            <SectionTag>Why we exist</SectionTag>
            <h2 className="mt-5 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Most businesses don't need five vendors. They need one team that gets it.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
              We started Prismneia because we kept seeing the same problem: a business
              hires an agency for a website, another for their app, a freelancer for their
              CRM, and nobody talks to each other. We wanted to be the team that handles
              all of it, and, along the way, we built AiTexTools, an AI writing toolkit
              we now use ourselves every day.
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="card-hover glass-panel rounded-2xl border p-6">
                <span className="flex size-11 items-center justify-center rounded-xl border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan">
                  <value.icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
