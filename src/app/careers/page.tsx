import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionTag } from "@/components/ui/SectionTag";

export const metadata: Metadata = {
  title: "Careers | Prismneia",
  description: "Join a small, senior team building web, mobile, AI-integrated systems and the AiTexTools product.",
};

const lookingFor = [
  "You'd rather ship something good this week than something perfect next quarter.",
  "You can explain a technical decision to someone who isn't technical.",
  "You've worked across the stack, or want to.",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        tag="Careers"
        title="No open roles right now, but we're always meeting good people"
        description="We're a small team by choice. When we do hire, we look for senior generalists over specialists, people comfortable moving between design, code and client conversations."
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="glass-panel rounded-2xl border p-8 sm:p-10">
            <SectionTag>What we look for</SectionTag>
            <ul className="mt-6 max-w-xl list-disc space-y-4 pl-5 marker:text-neon-cyan">
              {lookingFor.map((item) => (
                <li key={item} className="text-[15px] leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-xl text-sm text-muted">
              Nothing open at the moment, but if that sounds like you, send us a note and
              your work and we'll keep it on file for when a seat opens up.
            </p>
            <Button href="/contact" className="mt-6" showArrow>
              Introduce yourself
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
