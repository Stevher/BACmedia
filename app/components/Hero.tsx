export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-black text-white overflow-hidden px-6 sm:px-10 pt-32 pb-16">

      {/* Subtle yellow glow, bottom-left */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse at 0% 100%, #ffdd15, transparent 70%)" }} />

      {/* Top: tagline */}
      <div className="max-w-7xl mx-auto w-full flex items-start justify-between gap-8">
        <div className="flex-1">
          <span className="rule-yellow mb-6 inline-block" />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500">
            Video &amp; Post Production
          </p>
        </div>
        <p className="hidden lg:block text-xs text-zinc-600 tracking-widest uppercase text-right max-w-[180px] leading-relaxed">
          Johannesburg &amp; London
        </p>
      </div>

      {/* Centre: hero type */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center py-16">
        <h1 className="text-[clamp(4rem,12vw,10rem)] font-extrabold tracking-tighter leading-[0.9] uppercase">
          <span className="block text-white">Build.</span>
          <span className="block text-white">Align.</span>
          <span className="block text-[#ffdd15]">Create.</span>
        </h1>
      </div>

      {/* Bottom: descriptor + CTAs */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
        <p className="text-base text-zinc-400 leading-relaxed max-w-sm">
          World-class production and post for brands that demand excellence — and expect discretion.
        </p>
        <div className="flex items-center gap-4 shrink-0">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffdd15] text-black text-xs font-bold tracking-widest uppercase hover:bg-yellow-300 transition-colors">
            Start a Project
          </a>
          <a href="#capabilities" className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-zinc-500 hover:text-white transition-colors group">
            Capabilities
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-zinc-700" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-700 rotate-90 origin-center mt-3">Scroll</span>
      </div>

    </section>
  );
}
