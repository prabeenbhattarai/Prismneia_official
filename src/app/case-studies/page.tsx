import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Case Studies | Prismneia",
  description: "Real project results from Prismneia, published as they ship.",
};

export default function CaseStudiesPage() {
  return (
    <PageHero
      tag="Case studies"
      title="Our first case studies are on their way"
      description="We're a young studio. Rather than recycle someone else's numbers, we're waiting until we have our own real results to share. As projects ship, they'll show up here."
    >
      <div className="glass-panel mt-10 flex max-w-xl items-start gap-4 rounded-2xl border p-6">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan">
          <Sparkles className="size-5" />
        </span>
        <div>
          <p className="text-sm font-medium text-foreground">Want to be our first?</p>
          <p className="mt-1 text-sm text-muted">
            Work with us now and we'll feature your project (with your approval) as one
            of our first published case studies.
          </p>
          <Button href="/contact" className="mt-4" showArrow>
            Start a project
          </Button>
        </div>
      </div>
    </PageHero>
  );
}
