import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesSections } from "@/components/sections/ServicesSections";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services | Prismneia",
  description:
    "Web development, mobile apps, UI/UX design, custom CRMs, AI integration and cloud & DevOps, all from one team.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="What we do"
        title="Every layer of your product, handled by one team"
        description="From a marketing site to a full AI-integrated platform, we cover the whole stack, without juggling separate agencies for design, build and infrastructure."
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <ServicesSections />
        </div>
      </section>

      <CTA />
    </>
  );
}
