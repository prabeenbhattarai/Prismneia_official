import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { GithubIcon, LinkedInIcon, XIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Contact | Prismneia",
  description: "Tell us about your project. We reply within one business day.",
};

const details = [
  { icon: Mail, label: "Email", value: "hello@prismneia.com" },
  { icon: MapPin, label: "Based in", value: "Working with teams worldwide" },
  { icon: Clock, label: "Response time", value: "Within one business day" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Get in touch"
        title="Let's talk about what you're building"
        description="Whether it's a new site, a legacy system that needs modernizing, or you want to try AiTexTools, tell us where you're at."
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <ContactForm />

            <div className="space-y-3">
              {details.map((d) => (
                <div key={d.label} className="glass-panel flex items-center gap-4 rounded-2xl border p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan">
                    <d.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm text-muted">{d.label}</p>
                    <p className="text-lg font-medium text-foreground">{d.value}</p>
                  </div>
                </div>
              ))}

              <div className="glass-panel rounded-2xl border p-5">
                <p className="text-sm text-muted">Follow along</p>
                <div className="mt-3 flex items-center gap-3">
                  {[GithubIcon, LinkedInIcon, XIcon, InstagramIcon].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label="Social link"
                      className="btn-ghost flex size-9 items-center justify-center rounded-full"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
