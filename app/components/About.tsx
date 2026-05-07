const credentials = [
  { value: "15+", label: "Years in Production" },
  { value: "500+", label: "Projects Delivered" },
  { value: "4K / 8K", label: "Native HDR Pipeline" },
  { value: "NDA", label: "First. Always." },
];

const trustSignals = [
  "Broadcast credits across major UK and international networks",
  "Streaming deliverables for global SVOD platforms",
  "Blue-chip corporate and financial sector clients",
  "FTSE 100 and Fortune 500 brand work",
  "Award-winning documentary and drama post",
  "Approved supplier to regulated industries",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* About */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3">
              About BAC Media
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Trusted by the Clients Who Can't Be Named
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              BAC Media is a video and post production company built around one
              principle: the work is only as good as the trust behind it. We
              operate at the intersection of creative excellence and airtight
              confidentiality.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              Our clients are household names, major broadcasters, global
              financial institutions, and regulated businesses — many of whom
              we can't name. That's exactly the point. When they need
              production work done at the highest level, without it showing up
              in someone else's showreel, they call us.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Every project is handled under strict NDAs. Every team member is
              vetted. Every deliverable is treated as if the world is watching —
              because often, it is.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Talk to us about your project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {credentials.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl bg-gray-50 border border-gray-100 p-8 text-center"
              >
                <p className="text-3xl font-extrabold text-blue-600 mb-2">{c.value}</p>
                <p className="text-sm text-gray-500 font-medium">{c.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust signals */}
        <div className="rounded-2xl bg-gray-950 text-white p-10 sm:p-14">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
              Credentials
            </p>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              A Track Record We Can Describe, If Not Always Name
            </h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {trustSignals.map((s) => (
              <li key={s} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {s}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
