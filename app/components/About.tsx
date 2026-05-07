const credentials = [
  { value: "15+", label: "Years in Production" },
  { value: "500+", label: "Projects Delivered" },
  { value: "4K / 8K", label: "Native HDR Pipeline" },
  { value: "NDA", label: "First. Always." },
];

const trustSignals = [
  "Broadcast credits across major UK and international networks",
  "Streaming deliverables for global SVOD platforms",
  "Financial services and pharmaceutical sector specialists",
  "FTSE 100 and JSE-listed brand work",
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
            <p className="text-sm font-semibold tracking-widest uppercase text-[#ffdd15] mb-3">
              About BAC Media
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Production That Earns Trust, Then Keeps It
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              BAC Media is a video and post production company with a track
              record spanning financial services, pharmaceuticals, property,
              technology, and media. We've worked with household names and
              global brands — some of whom we can introduce you to, many of
              whom prefer to stay quietly in the credits.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              Our work is built on two things: the quality of the craft and
              the trust of our clients. Every project is treated with the same
              rigour whether it's a 30-second social cut or a broadcast
              documentary — and every team member operates under NDA as
              standard.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              If you're working on something that can't afford to go wrong —
              creatively or commercially — you're in the right place.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#ffdd15] font-semibold hover:text-yellow-300 transition-colors"
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
                <p className="text-3xl font-extrabold text-[#ffdd15] mb-2">{c.value}</p>
                <p className="text-sm text-gray-500 font-medium">{c.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="rounded-2xl bg-gray-950 text-white p-10 sm:p-14">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#ffdd15] mb-3">
              Credentials
            </p>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              A Track Record Across Industries
            </h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {trustSignals.map((s) => (
              <li key={s} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                <svg className="w-5 h-5 text-[#ffdd15] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
