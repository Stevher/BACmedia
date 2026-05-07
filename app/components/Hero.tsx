export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[#0c0c0c] text-white overflow-hidden px-6 sm:px-10 pt-32 pb-12">

      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] opacity-[0.05]"
        style={{ background: "radial-gradient(ellipse at 0% 100%, #ffdd15, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="rule-yellow" />
          <p className="text-[11px] tracking-[0.25em] uppercase text-zinc-500">Video &amp; Post Production</p>
        </div>
        <p className="hidden sm:block text-[11px] tracking-[0.2em] uppercase text-zinc-700">Est. 2009</p>
      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center py-14">
        <h1 className="font-serif text-[clamp(3.5rem,9vw,8.5rem)] font-normal leading-[1.05] tracking-tight text-white max-w-4xl">
          Build. Align.{" "}
          <em className="not-italic text-[#ffdd15]">Create.</em>
        </h1>
        <p className="mt-6 text-base text-zinc-500 max-w-sm leading-relaxed font-light">
          World-class production and post for brands that demand excellence — and expect discretion.
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-6 border-t border-zinc-900">
        <p className="text-[11px] tracking-[0.2em] uppercase text-zinc-600">
          Johannesburg · Cape Town · London
        </p>
        <div className="flex items-center gap-6">
          <a href="#contact" className="inline-flex items-center px-6 py-2.5 bg-[#ffdd15] text-black text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-yellow-300 transition-colors">
            Start a Project
          </a>
          <a href="#capabilities" className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-zinc-500 hover:text-white transition-colors group">
            Capabilities
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
