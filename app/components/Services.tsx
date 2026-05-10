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
    <section id="capabilities" className="py-24 sm:py-32" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="mb-16">
          <span className="label-tag mb-5 inline-flex">Capabilities</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-serif text-5xl sm:text-6xl leading-[1]">
              Everything in-house,{" "}
              <em className="not-italic" style={{ color: "var(--accent)" }}>start to finish.</em>
            </h2>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              A complete pipeline under one roof — from first brief to final delivery.
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {capabilities.map((c) => (
            <div key={c.title}
              className="group grid grid-cols-12 items-baseline gap-4 py-7"
              style={{ borderBottom: "1px solid var(--border)" }}>
              <span className="col-span-1 text-xs tabular-nums gh-accent">{c.number}</span>
              <h3 className="col-span-4 font-serif text-2xl leading-snug gh-text">{c.title}</h3>
              <p className="col-span-7 text-sm leading-relaxed gh-text">{c.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
