import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Blog | Prismneia",
  description: "Notes on shipping software well, coming soon from the AiTexTools team.",
};

export default function BlogPage() {
  return (
    <PageHero
      tag="Blog"
      title="We're just getting started"
      description="No posts yet, but we'll be writing about shipping software well, integrating AI into real products, and running a lean studio. Check back soon, or follow along on our socials."
    >
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-panel rounded-2xl border p-6">
            <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-white/[0.03] text-muted">
              <FileText className="size-4" />
            </span>
            <div className="mt-4 h-3 w-3/4 rounded-full bg-white/10" />
            <div className="mt-2 h-3 w-1/2 rounded-full bg-white/5" />
            <p className="font-mono-tight mt-4 text-[11px] uppercase text-muted/60">Coming soon</p>
          </div>
        ))}
      </div>
    </PageHero>
  );
}
