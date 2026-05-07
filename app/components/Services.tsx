const capabilities = [
  { number: "01", title: "Offline Editing", description: "From assembly cut to picture lock. Drama, documentary, commercials, and branded content — shaped with precision and pace." },
  { number: "02", title: "Online & Finishing", description: "Conform, grade, and deliver to any broadcast or streaming spec. Complex VFX pulls, multi-version deliverables, tight deadlines." },
  { number: "03", title: "Colour Grading", description: "Cinematic, commercial, or broadcast. We work in Resolve with calibrated suites, ensuring your image lands exactly as intended on every screen." },
  { number: "04", title: "VFX & Motion Graphics", description: "Wire removal to full motion design packages and title sequences. We integrate into your pipeline at whatever stage you need." },
  { number: "05", title: "Audio Post", description: "Dialogue edit, ADR, sound design, mix, and master. Dolby Atmos, stereo, 5.1 — delivered to spec, every time." },
  { number: "06", title: "Production & Shooting", description: "Single-camera shoots to multi-camera studio builds. We produce, direct, and crew — with the same confidentiality standards throughout." },
];

export default function Services() {
  return (
    <section id="capabilities" className="py-16 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-zinc-900">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">Capabilities</h2>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">A complete in-house pipeline, from first frame to final delivery.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((c) => (
            <div key={c.title} className="group relative bg-zinc-950 border border-zinc-900 rounded-xl p-8 overflow-hidden hover:border-zinc-700 transition-all duration-400">
              {/* Yellow accent top line on hover */}
              <div className="absolute top-0 left-8 right-8 h-px bg-transparent group-hover:bg-[#ffdd15] transition-colors duration-500" />

              <span className="font-serif text-[4.5rem] font-normal leading-none text-zinc-900 group-hover:text-zinc-800 transition-colors duration-500 select-none block mb-4">
                {c.number}
              </span>

              <h3 className="font-serif text-lg font-normal text-white mb-2">{c.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
