import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { PdfellaMark, PdfellaWordmark } from "@/components/ui/PdfellaLogo";
import { PdfellaDemo } from "@/components/ui/PdfellaDemo";

const bullets = [
  "Edit existing text with a double-click",
  "PDF to Word and images",
  "Sign, redact and annotate",
  "Files stay on your device",
];

const tools = ["Edit PDF", "PDF to Word", "Merge", "Split", "Compress", "Sign", "Redact", "Protect", "Unlock"];

export function Pdfella() {
  return (
    <section id="pdfella" className="relative pt-0 pb-14 sm:pb-20">
      <Reveal className="w-full px-6 lg:px-12">
        <div className="pdf-surface relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <SectionTag>Our successful product</SectionTag>

              <div className="mt-8 flex items-center gap-5">
                <PdfellaMark className="h-16 w-auto drop-shadow-[0_12px_30px_rgba(14,122,98,0.55)] sm:h-20" />
                <PdfellaWordmark className="text-6xl sm:text-7xl" />
              </div>

              <h2 className="mt-8 max-w-xl text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Everything PDF, <span className="font-serif-display font-normal text-pdf italic">right in your browser</span>
              </h2>
              <p className="mt-5 max-w-xl text-xl text-foreground/80 sm:text-2xl">
                Edit text, sign, convert, compress and protect documents in seconds. No
                installs, and most tools need no account.
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-lg text-foreground/90">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-pdf/15 text-pdf">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="https://pdfella.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-pdf-solid px-7 py-3.5 text-base font-medium text-white shadow-[0_10px_30px_-8px_rgba(14,122,98,0.7)] transition-transform hover:-translate-y-0.5"
                >
                  Open PDFella
                  <ArrowUpRight className="size-4" strokeWidth={2.25} />
                </a>
                <Link
                  href="/pdfella"
                  className="btn-ghost inline-flex items-center rounded-full px-7 py-3.5 text-base"
                >
                  See all tools
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="chip rounded-full px-4 py-1.5 text-sm text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <PdfellaDemo />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
