const steps = [
  {
    number: "01",
    title: "Brief & Discovery",
    description:
      "Every project begins with a thorough brief. We take time to understand your creative vision, technical requirements, delivery specs, and any sensitivities — before a single frame is touched.",
  },
  {
    number: "02",
    title: "Pipeline Design",
    description:
      "We map a bespoke workflow around your project — camera formats, VFX pulls, versioning requirements, and broadcaster deliverables — so nothing is left to chance in post.",
  },
  {
    number: "03",
    title: "Production & Capture",
    description:
      "Where we're involved on the shoot, our on-set team ensures the production pipeline feeds seamlessly into post. Consistent metadata, organised rushes, no surprises in the edit.",
  },
  {
    number: "04",
    title: "Post Production",
    description:
      "Offline, online, grade, VFX, and audio — handled in-house or with our trusted partner network. You have a single point of contact throughout, with regular reviews built into the schedule.",
  },
  {
    number: "05",
    title: "Review & Approval",
    description:
      "Secure, private review links for client feedback. No public sharing, no third-party platforms that compromise confidentiality. Notes are tracked, actioned, and signed off at each stage.",
  },
  {
    number: "06",
    title: "Delivery & Archive",
    description:
      "Masters delivered to spec, on time. We handle QC, broadcast compliance, and multi-platform versioning. Your assets are securely archived and accessible when you need them.",
  },
];

export default function Work() {
  return (
    <section id="process" className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#ffdd15] mb-3">
            How We Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            A Process Built for High-Stakes Projects
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Rigorous. Transparent. Confidential. Our workflow is designed for
            clients where getting it right — and keeping it private — is
            non-negotiable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.number}
              className="rounded-2xl bg-gray-900 border border-gray-800 p-8 hover:border-gray-600 transition-colors"
            >
              <p className="text-4xl font-extrabold text-[#ffdd15]/30 mb-4 leading-none">
                {s.number}
              </p>
              <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
