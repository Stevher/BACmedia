const steps = [
  { number: "01", title: "Brief & Discovery", description: "We take time to understand your creative vision, technical requirements, delivery specs, and sensitivities — before a single frame is touched." },
  { number: "02", title: "Pipeline Design", description: "A bespoke workflow mapped to your project — camera formats, VFX pulls, versioning requirements, broadcaster deliverables. Nothing left to chance." },
  { number: "03", title: "Production & Capture", description: "Where we're on the shoot, our team ensures the pipeline feeds seamlessly into post. Organised rushes, consistent metadata, no surprises." },
  { number: "04", title: "Post Production", description: "Offline, online, grade, VFX, and audio. In-house or via our trusted partner network. Single point of contact, regular reviews built in." },
  { number: "05", title: "Review & Approval", description: "Secure, private review links. No public platforms, no compromised confidentiality. Notes tracked, actioned, and signed off at every stage." },
  { number: "06", title: "Delivery & Archive", description: "Masters to spec, on time. QC, broadcast compliance, multi-platform versioning. Assets securely archived and accessible when you need them." },
];

export default function Work() {
  return (
    <section id="process" className="py-24 sm:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="mb-16">
          <span className="label-tag mb-5 inline-flex">Process</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-serif text-5xl sm:text-6xl leading-[1]">
              Rigorous from{" "}
              <em className="not-italic" style={{ color: "var(--accent)" }}>brief to delivery.</em>
            </h2>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              Every project follows the same disciplined approach — whatever the scale.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-4 bottom-4" style={{ left: "0.875rem", width: "1px", background: "var(--border)" }} />

          {steps.map((s, i) => (
            <div key={s.number}
              className="group relative grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_18rem_1fr] items-start gap-x-8 lg:gap-x-12 py-8"
              style={{ borderBottom: "1px solid var(--border)" }}>

              {/* Node */}
              <div className="gh-node relative z-10 flex items-center justify-center rounded-full"
                style={{ width: "1.75rem", height: "1.75rem", border: "1px solid", background: "var(--bg)", marginTop: "0.1rem" }}>
                <span className="text-[10px] tabular-nums" style={{ color: "var(--muted)" }}>{i + 1}</span>
              </div>

              <h3 className="gh-text font-serif text-2xl leading-snug pt-0.5">{s.title}</h3>

              <p className="col-start-2 lg:col-start-3 col-end-[-1] text-sm leading-relaxed mt-1 lg:mt-0.5"
                style={{ color: "var(--muted)" }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
