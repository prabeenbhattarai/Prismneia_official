import { Hero } from "@/components/sections/Hero";
import { StickyServices } from "@/components/sections/StickyServices";
import { Platforms } from "@/components/sections/Platforms";
import { Pdfella } from "@/components/sections/Pdfella";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StickyServices />
      <Platforms />
      <Pdfella />
      <Process />
      <CTA />
    </>
  );
}
