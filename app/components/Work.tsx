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
    <section id="process" className="py-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-zinc-900">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">Our Process</h2>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">Rigorous. Transparent. Confidential.</p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[1.4rem] top-3 bottom-3 w-px bg-zinc-800 sm:left-[1.6rem]" />

          <div className="space-y-0">
            {steps.map((s, i) => (
              <div key={s.number} className="group relative grid grid-cols-[3.5rem_1fr] sm:grid-cols-[4rem_1fr] lg:grid-cols-[4rem_20rem_1fr] items-start gap-x-6 lg:gap-x-10 py-8">

                {/* Node */}
                <div className="relative z-10 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-zinc-800 bg-zinc-950 group-hover:border-[#ffdd15]/60 transition-colors duration-300 mt-0.5">
                  <span className="font-serif text-[11px] text-zinc-600 group-hover:text-[#ffdd15] transition-colors duration-300 tabular-nums leading-none">
                    {i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-normal text-zinc-400 group-hover:text-white transition-colors duration-300 leading-snug pt-0.5 lg:col-span-1">
                  {s.title}
                </h3>

                {/* Description — full width on mobile (spans both cols), right col on lg */}
                <p className="col-start-2 lg:col-start-3 col-end-[-1] text-sm text-zinc-600 leading-relaxed group-hover:text-zinc-400 transition-colors duration-300 mt-1 lg:mt-0.5">
                  {s.description}
                </p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
