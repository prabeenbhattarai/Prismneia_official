import Link from "next/link";
import { LogoMark } from "@/components/ui/Logo";

const footerColumns = [
  {
    heading: "Services",
    links: [
      { label: "Web Development", href: "/services#web-development" },
      { label: "Mobile Apps", href: "/services#mobile-app-development" },
      { label: "UI/UX Design", href: "/services#ui-ux-design" },
      { label: "Custom CRM & Software", href: "/services#custom-crm-software" },
      { label: "AI Integration", href: "/services#ai-integration" },
      { label: "Cloud & DevOps", href: "/services#cloud-devops" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Startups & Founders", href: "/solutions#startups-founders" },
      { label: "Retail & eCommerce", href: "/solutions#retail-ecommerce" },
      { label: "Healthcare", href: "/solutions#healthcare" },
      { label: "Finance & Fintech", href: "/solutions#finance-fintech" },
      { label: "Government", href: "/solutions#government-enterprise" },
      { label: "Legacy Modernization", href: "/solutions#legacy-modernization" },
    ],
  },
  {
    heading: "AiTexTools",
    links: [
      { label: "Humanizer", href: "/aitextools#humanizer" },
      { label: "Paraphraser", href: "/aitextools#paraphraser" },
      { label: "AI Detector", href: "/aitextools#detector" },
      { label: "Email Writer", href: "/aitextools#email" },
    ],
  },
  {
    heading: "PDFella",
    links: [
      { label: "Edit PDF", href: "/pdfella#edit" },
      { label: "Convert", href: "/pdfella#convert" },
      { label: "Organise", href: "/pdfella#organise" },
      { label: "Security", href: "/pdfella#security" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="spectrum-line" />
      <div className="glow-orb absolute bottom-0 left-1/2 h-72 w-[560px] -translate-x-1/2 bg-neon-blue/10" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 pt-20 pb-0">
        <div className="grid grid-cols-2 gap-10 pb-4 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="font-mono-tight text-sm uppercase text-muted/70">{col.heading}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-base text-muted transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          aria-hidden
          className="pointer-events-none mt-10 flex select-none items-end justify-center gap-[1.5vw] overflow-hidden"
          style={{ maskImage: "linear-gradient(to bottom, black 28%, rgba(0,0,0,0.06) 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 28%, rgba(0,0,0,0.06) 100%)" }}
        >
          <LogoMark className="mb-[-2vw] h-[12vw] w-auto" />
          <span className="text-[16.5vw] leading-[0.82] font-semibold tracking-[-0.05em] text-foreground">
            Prismneia
          </span>
        </div>

        <p className="font-mono-tight relative pb-6 pt-2 text-center text-xs text-muted">
          © {new Date().getFullYear()} Prismneia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
