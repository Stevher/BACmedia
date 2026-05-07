const capabilities = [
  {
    title: "Offline Editing",
    description:
      "From assembly cut to picture lock. We work across long-form drama, documentary, commercials, and branded content — shaping story with precision and pace.",
  },
  {
    title: "Online & Finishing",
    description:
      "Conform, grade, and deliver to any broadcast or streaming specification. We handle complex VFX pulls, multi-version deliverables, and tight turnaround deadlines without compromise.",
  },
  {
    title: "Colour Grading",
    description:
      "Cinematic, commercial, or broadcast — our DI pipeline handles every format. We work in Resolve with calibrated suites, ensuring your image is exactly what was intended on every screen.",
  },
  {
    title: "VFX & Motion Graphics",
    description:
      "From invisible wire removal and clean-up to full motion design packages and title sequences. We integrate seamlessly into your post pipeline at whatever stage you need us.",
  },
  {
    title: "Audio Post",
    description:
      "Dialogue edit, ADR, sound design, mix, and master for broadcast, cinema, and digital. Delivered to any spec — Dolby Atmos, stereo, 5.1 — on time, every time.",
  },
  {
    title: "Production & Shooting",
    description:
      "Full production capability from single-camera shoots to multi-camera studio builds. We produce, direct, and crew — with the same confidentiality standards applied throughout.",
  },
];

export default function Services() {
  return (
    <section id="capabilities" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#ffdd15] mb-3">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            End-to-End Post Production
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            A complete in-house pipeline — from first assembly to final
            delivery. One team, total accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className="group p-8 bg-[#0f0f0f] hover:bg-[#151515] transition-colors duration-300"
            >
              <div className="w-7 h-7 rounded-full bg-[#ffdd15] text-black text-xs font-bold flex items-center justify-center mb-5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
