import { techStack } from "@/lib/data";

export function LogoMarquee() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="bg-neon-blue py-6">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="font-mono-tight mb-4 text-center text-[11px] font-bold text-background uppercase">
          Engineered with the tools serious products run on
        </p>
      </div>
      <div className="mask-fade-x relative overflow-hidden">
        <div className="animate-marquee flex w-max gap-10">
          {doubled.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono-tight text-lg font-bold text-background sm:text-xl"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
