export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 60%, #ffdd1533 0%, transparent 55%), radial-gradient(circle at 75% 30%, #ffdd1522 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase text-[#ffdd15] border border-[#ffdd15]/30 rounded-full bg-[#ffdd15]/10">
          Video &amp; Post Production
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          <span className="text-[#ffdd15]">Build.</span>{" "}
          <span className="text-[#ffdd15]">Align.</span>{" "}
          <span className="text-[#ffdd15]">Create.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
          BAC Media delivers world-class video production and post for the
          brands that can't afford to compromise — on quality or
          confidentiality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#ffdd15] text-black font-bold hover:bg-yellow-300 transition-colors"
          >
            Start a Project
          </a>
          <a
            href="#capabilities"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Our Capabilities
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
