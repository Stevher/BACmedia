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
    <section id="capabilities" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-8 border-b border-zinc-900">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">Capabilities</h2>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">A complete in-house pipeline, from first frame to final delivery.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900">
          {capabilities.map((c) => (
            <div key={c.title} className="group relative bg-[#0c0c0c] p-10 overflow-hidden flex flex-col hover:bg-zinc-950 transition-colors duration-500">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-zinc-900 group-hover:bg-[#ffdd15] transition-colors duration-500" />

              {/* Ghost number */}
              <span className="font-serif text-[5.5rem] font-normal leading-none text-zinc-900 group-hover:text-zinc-800 transition-colors duration-500 select-none mb-4">
                {c.number}
              </span>

              {/* Content */}
              <h3 className="font-serif text-xl font-normal text-white mb-3">{c.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
