import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AiTexLogo } from "@/components/ui/AiTexLogo";
import { Button } from "@/components/ui/Button";
import { AiToolsSections } from "@/components/sections/AiToolsSections";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "AiTexTools | Humanizer, Paraphraser, AI Detector & Email Writer",
  description:
    "AiTexTools is our own product: humanize AI text, paraphrase, detect AI content and write emails, all in one tab, without juggling four different tools.",
};

export default function AiTexToolsPage() {
  return (
    <>
      <PageHero
        tag="Our own product"
        title={
          <>
            One tab. Four AI writing tools.{" "}
            <span className="text-gradient">Zero tab-switching.</span>
          </>
        }
        description="AiTexTools bundles a humanizer, paraphraser, AI detector and email writer into a single workspace, built by us, used by us, and available to your team."
      >
        <div className="mt-6">
          <AiTexLogo className="text-4xl" />
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact" size="lg" showArrow>
            Get early access
          </Button>
          <Button href="/pdfella" variant="ghost" size="lg">
            Also see PDFella
          </Button>
        </div>
      </PageHero>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <AiToolsSections />
        </div>
      </section>

      <CTA />
    </>
  );
}
