export function HeroVideoBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video absolute inset-0 h-full w-full object-cover opacity-80"
      >
        <source
          src="https://cdn.sanity.io/files/3do82whm/next/d6c7093efba62774174acbb327fe5b340dc33781.webm"
          type="video/webm"
        />
      </video>
      <div className="absolute inset-0 bg-background/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/10 to-transparent" />
    </div>
  );
}
