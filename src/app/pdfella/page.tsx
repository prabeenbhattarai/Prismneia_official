import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { PdfellaLogo } from "@/components/ui/PdfellaLogo";
import { PdfellaSections } from "@/components/sections/PdfellaSections";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "PDFella | Edit, Convert, Organise and Secure PDFs Online",
  description:
    "PDFella is our own product: edit text, sign, convert, merge, compress and protect PDFs right in your browser.",
};

export default function PdfellaPage() {
  return (
    <>
      <PageHero
        tag="Our own product"
        title={
          <>
            Every PDF job,{" "}
            <span className="text-pdf">done in your browser.</span>
          </>
        }
        description="PDFella brings editing, conversion, organising and security into one fast workspace. Built by us, used by us, and free to try."
      >
        <div className="mt-6">
          <PdfellaLogo />
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://pdfella.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-pdf-solid px-6 py-2.5 text-[15px] font-medium text-[#ffffff] transition-opacity hover:opacity-90"
          >
            Open PDFella
            <ArrowUpRight className="size-3.5" strokeWidth={2.25} />
          </a>
          <Button href="/contact" variant="ghost" size="lg">
            Talk to us
          </Button>
        </div>
      </PageHero>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <PdfellaSections />
        </div>
      </section>

      <CTA />
    </>
  );
}
