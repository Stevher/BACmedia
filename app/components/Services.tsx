const capabilities = [
  { title: "Offline Editing", description: "From assembly cut to picture lock. Drama, documentary, commercials, and branded content — shaped with precision and pace." },
  { title: "Online & Finishing", description: "Conform, grade, and deliver to any broadcast or streaming spec. Complex VFX pulls, multi-version deliverables, tight deadlines — no compromise." },
  { title: "Colour Grading", description: "Cinematic, commercial, or broadcast. We work in Resolve with calibrated suites, ensuring your image lands exactly as intended on every screen." },
  { title: "VFX & Motion Graphics", description: "Wire removal to full motion design packages and title sequences. We integrate into your pipeline at whatever stage you need." },
  { title: "Audio Post", description: "Dialogue edit, ADR, sound design, mix, and master for broadcast, cinema, and digital. Dolby Atmos, stereo, 5.1 — delivered to spec, every time." },
  { title: "Production & Shooting", description: "Single-camera shoots to multi-camera studio builds. We produce, direct, and crew — with the same confidentiality standards throughout." },
];

export default function Services() {
  return (
    <section id="capabilities" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-900">
          <div>
            <span className="rule-yellow mb-4 inline-block" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Capabilities</h2>
          </div>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed sm:text-right">
            A complete in-house pipeline. From first frame to final delivery.
          </p>
        </div>

        {/* List */}
        <div className="divide-y divide-zinc-900">
          {capabilities.map((c, i) => (
            <div key={c.title} className="group grid grid-cols-12 gap-6 py-8 hover:bg-zinc-950 -mx-6 px-6 sm:-mx-10 sm:px-10 transition-colors duration-300 cursor-default">
              <div className="col-span-1 hidden sm:flex items-start pt-1">
                <span className="text-xs text-zinc-700 font-mono tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <h3 className="text-lg font-bold text-white group-hover:text-[#ffdd15] transition-colors duration-300">{c.title}</h3>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <p className="text-sm text-zinc-500 leading-relaxed">{c.description}</p>
              </div>
              <div className="col-span-1 hidden sm:flex items-start justify-end pt-1">
                <svg className="w-4 h-4 text-zinc-800 group-hover:text-[#ffdd15] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
