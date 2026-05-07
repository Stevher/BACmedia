const capabilities = [
  { title: "Offline Editing", description: "From assembly cut to picture lock. Drama, documentary, commercials, and branded content — shaped with precision and pace." },
  { title: "Online & Finishing", description: "Conform, grade, and deliver to any broadcast or streaming spec. Complex VFX pulls, multi-version deliverables, tight deadlines." },
  { title: "Colour Grading", description: "Cinematic, commercial, or broadcast. We work in Resolve with calibrated suites, ensuring your image lands exactly as intended on every screen." },
  { title: "VFX & Motion Graphics", description: "Wire removal to full motion design packages and title sequences. We integrate into your pipeline at whatever stage you need." },
  { title: "Audio Post", description: "Dialogue edit, ADR, sound design, mix, and master. Dolby Atmos, stereo, 5.1 — delivered to spec, every time." },
  { title: "Production & Shooting", description: "Single-camera shoots to multi-camera studio builds. We produce, direct, and crew — with the same confidentiality standards throughout." },
];

export default function Services() {
  return (
    <section id="capabilities" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-8 border-b border-zinc-900">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">Capabilities</h2>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">A complete in-house pipeline, from first frame to final delivery.</p>
        </div>

        <div className="divide-y divide-zinc-900">
          {capabilities.map((c, i) => (
            <div key={c.title} className="group grid grid-cols-12 gap-4 py-7 hover:bg-zinc-950/60 -mx-6 px-6 sm:-mx-10 sm:px-10 transition-colors duration-300 cursor-default">
              <span className="col-span-1 hidden sm:block text-[11px] text-zinc-700 font-mono pt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="col-span-12 sm:col-span-3 text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">{c.title}</h3>
              <p className="col-span-12 sm:col-span-7 text-sm text-zinc-500 leading-relaxed">{c.description}</p>
              <div className="col-span-1 hidden sm:flex justify-end pt-0.5">
                <svg className="w-3.5 h-3.5 text-zinc-800 group-hover:text-[#ffdd15] group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
