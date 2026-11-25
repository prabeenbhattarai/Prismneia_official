import { techStack } from "@/lib/data";

export function LogoMarquee() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="border-t border-slate-200 bg-[#ffffff] py-6 shadow-[0_-12px_40px_-20px_rgba(0,0,0,0.5)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="font-mono-tight mb-4 text-center text-xs font-bold tracking-wide text-slate-500 uppercase">
          Engineered with the tools serious products run on
        </p>
      </div>
      <div className="mask-fade-x relative overflow-hidden">
        <div className="animate-marquee flex w-max gap-10">
          {doubled.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono-tight text-lg font-bold text-[#07122e] sm:text-xl"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
