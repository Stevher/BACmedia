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
    <section id="process" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-8 border-b border-zinc-900">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">Our Process</h2>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">Rigorous. Transparent. Confidential.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900">
          {steps.map((s) => (
            <div key={s.number} className="bg-zinc-950 p-10 group hover:bg-zinc-900/50 transition-colors duration-500">
              <p className="font-serif text-7xl font-normal text-zinc-900 mb-8 leading-none group-hover:text-[#ffdd15]/10 transition-colors duration-500 select-none">
                {s.number}
              </p>
              <h3 className="text-sm font-semibold text-white tracking-wide mb-3">{s.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
