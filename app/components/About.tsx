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
    <section id="about" className="py-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-16">

        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-zinc-900">
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">About</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-normal text-white leading-snug mb-6">
                Trusted by leading brands across finance, pharma, property, and media.{" "}
                <em className="text-zinc-500">Ask us about our work — we're happy to share.</em>
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-[#ffdd15] hover:text-yellow-300 transition-colors group">
                Start a conversation
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="space-y-5">
              <p className="text-sm text-zinc-400 leading-relaxed">
                BAC Media is a video and post production company with a track record spanning financial services, pharmaceuticals, property, technology, and media. Our client list includes some of the most recognised names in their industries — and while we respect individual preferences around disclosure, we're always happy to talk through our work in conversation.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Every project is treated with the same rigour whether it's a 30-second social cut or a broadcast documentary. We operate with discretion as standard — not secrecy.
              </p>

              <div className="grid grid-cols-4 gap-3 pt-2">
                {stats.map((s) => (
                  <div key={s.label} className="bg-zinc-900 border border-zinc-800 rounded-xl py-5 text-center">
                    <p className="font-serif text-xl font-normal text-[#ffdd15] mb-1">{s.value}</p>
                    <p className="text-[10px] text-zinc-600 uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <span className="rule-yellow mb-4 inline-block" />
              <p className="font-serif text-xl font-normal text-zinc-300 leading-snug">
                A track record built across industries. Ask us about specific work — we're open.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
              {credentials.map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#ffdd15] shrink-0" />
                  <p className="text-sm text-zinc-500 leading-relaxed">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
