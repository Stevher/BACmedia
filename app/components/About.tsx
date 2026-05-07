const stats = [
  { value: "15+", label: "Years" },
  { value: "500+", label: "Projects" },
  { value: "4K/8K", label: "HDR Pipeline" },
  { value: "NDA", label: "Standard" },
];

const credentials = [
  "Broadcast credits across major UK and international networks",
  "Streaming deliverables for global SVOD platforms",
  "Financial services and pharmaceutical sector specialists",
  "FTSE 100 and JSE-listed brand work",
  "Award-winning documentary and drama post",
  "Approved supplier to regulated industries",
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-28">

        {/* About block */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-900">
            <div>
              <span className="rule-yellow mb-4 inline-block" />
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">About</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: statement */}
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-8">
                Trusted by the world's most demanding brands. Many of whom we can't name. That's exactly the point.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#ffdd15] hover:text-yellow-300 transition-colors group">
                Start a conversation
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right: body + stats */}
            <div className="space-y-8">
              <p className="text-zinc-400 leading-relaxed">
                BAC Media is a video and post production company with a track record spanning financial services,
                pharmaceuticals, property, technology, and media. We've worked with household names and global brands —
                some of whom we can introduce you to, many of whom prefer to stay quietly in the credits.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Every project is treated with the same rigour whether it's a 30-second social cut or a broadcast documentary.
                Every team member operates under NDA as standard. If you're working on something that can't afford to go
                wrong — creatively or commercially — you're in the right place.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 rounded-xl overflow-hidden mt-10">
                {stats.map((s) => (
                  <div key={s.label} className="bg-zinc-950 py-6 text-center">
                    <p className="text-2xl font-extrabold text-[#ffdd15] mb-1">{s.value}</p>
                    <p className="text-xs text-zinc-600 uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Credentials block */}
        <div className="border-t border-zinc-900 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <span className="rule-yellow mb-4 inline-block" />
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                A track record we can describe, if not always name.
              </h3>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#ffdd15] shrink-0" />
                  <p className="text-sm text-zinc-400 leading-relaxed">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
