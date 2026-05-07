export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950" />
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #2563eb44 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7c3aed33 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase text-blue-400 border border-blue-800 rounded-full bg-blue-950/50">
          Full-Service Marketing Agency
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Bold Ideas.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
            Real Results.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
          BAC Media partners with brands to craft compelling campaigns, amplify
          their voice, and drive measurable growth across every channel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-base hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/40"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-colors"
          >
            See Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
