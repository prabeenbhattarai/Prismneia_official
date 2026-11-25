import { Check, FilePen, FileText, Layers, Lock, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const features: { id: string; icon: LucideIcon; title: string; description: string; bullets: string[] }[] = [
  {
    id: "edit",
    icon: FilePen,
    title: "Edit",
    description: "Change what is already on the page, add your signature and mark up documents without leaving the tab.",
    bullets: ["Double-click to edit existing text", "Sign, highlight and annotate", "Everything runs in your browser"],
  },
  {
    id: "convert",
    icon: FileText,
    title: "Convert",
    description: "Move between PDF, Word and images when a document needs to be in a different shape.",
    bullets: ["PDF to Word", "PDF to JPG and back to PDF", "PNG, JPG and WEBP supported"],
  },
  {
    id: "organise",
    icon: Layers,
    title: "Organise",
    description: "Tidy up the pile: combine files, pull pages apart and shrink large documents.",
    bullets: ["Merge PDFs into one", "Split by page", "Compress large files"],
  },
  {
    id: "security",
    icon: Lock,
    title: "Security",
    description: "Protect what matters, open what you own and remove what should not be shared.",
    bullets: ["Protect with a password", "Unlock your own PDFs", "Redact sensitive details"],
  },
];

export function PdfellaSections() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <Reveal key={f.id}>
            <div id={f.id} className="pdf-surface h-full scroll-mt-32 rounded-3xl p-8 sm:p-10">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-pdf/15 text-pdf">
                <Icon className="size-7" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{f.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-foreground/80 sm:text-xl">{f.description}</p>
              <ul className="mt-6 space-y-3">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-lg text-foreground/90">
                    <Check className="mt-1 size-4 shrink-0 text-pdf" strokeWidth={3} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
