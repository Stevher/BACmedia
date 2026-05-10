export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[var(--bg)] overflow-hidden">

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at 0% 100%, #ffdd15, transparent 65%)" }} />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] opacity-[0.03]"
          style={{ background: "radial-gradient(ellipse at 100% 50%, #ffdd15, transparent 70%)" }} />
      </div>

      {/* Eyebrow */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 pt-32 flex items-center justify-between">
        <span className="label-tag">Video &amp; Post Production</span>
        <span className="hidden sm:block text-[11px] tracking-[0.2em] uppercase" style={{ color: "var(--muted)" }}>Est. 2009</span>
      </div>

      {/* Headline */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 sm:px-10 py-16 sm:py-20">
        <h1 className="font-serif text-[clamp(4rem,10.5vw,9.5rem)] leading-[0.95] tracking-tight mb-10">
          Build.{" "}
          <em className="not-italic" style={{ color: "var(--accent)" }}>Align.</em>{" "}
          Create.
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-20">
          <p className="text-base max-w-xs leading-relaxed" style={{ color: "var(--muted)" }}>
            World-class production and post for brands that demand excellence — and expect discretion.
          </p>
          <div className="flex items-center gap-6 shrink-0">
            <a href="#contact" className="inline-flex items-center px-7 py-3 text-[11px] font-bold tracking-[0.15em] uppercase transition-opacity hover:opacity-90"
              style={{ background: "var(--accent)", color: "#000" }}>
              Start a Project
            </a>
            <a href="#capabilities" className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase transition-colors group"
              style={{ color: "var(--muted)" }}>
              Capabilities
              <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 pb-10 pt-5 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--border)" }}>
        <p className="text-[11px] tracking-[0.2em] uppercase" style={{ color: "var(--muted)" }}>
          Johannesburg · Cape Town · London
        </p>
        <p className="hidden sm:block text-[11px] tracking-[0.15em] uppercase opacity-40" style={{ color: "var(--muted)" }}>
          NDA standard on every project
        </p>
      </div>

    </section>
  );
}
