export function GlowOrbs({ variant = "hero" }: { variant?: "hero" | "section" }) {
  if (variant === "section") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="glow-orb h-[420px] w-[420px] bg-neon-blue/20"
          style={{ top: "-10%", left: "50%", transform: "translateX(-50%)" }}
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="glow-orb animate-float-slow h-[520px] w-[520px] bg-neon-cyan/25"
        style={{ top: "-12%", left: "-8%" }}
      />
      <div
        className="glow-orb animate-float-slow h-[460px] w-[460px] bg-neon-violet/20"
        style={{ top: "5%", right: "-10%", animationDelay: "1.5s" }}
      />
      <div
        className="glow-orb h-[380px] w-[380px] bg-neon-blue/20"
        style={{ bottom: "-15%", left: "35%" }}
      />
    </div>
  );
}
