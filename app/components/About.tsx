const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "200+", label: "Clients Served" },
  { value: "$50M+", label: "In Client Revenue Generated" },
  { value: "15", label: "Team Members" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3">
              About Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              We're Not Your Average Agency
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              BAC Media was founded on a simple belief: great marketing should
              be fearless, strategic, and deeply human. We partner with brands
              who want more than just impressions — they want impact.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              From scrappy startups to established enterprises, we bring
              full-service expertise and an ownership mentality to every
              engagement. Your wins are our wins.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Let's talk about your brand
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-gray-50 border border-gray-100 p-8 text-center"
              >
                <p className="text-4xl font-extrabold text-blue-600 mb-2">{s.value}</p>
                <p className="text-sm text-gray-500 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
