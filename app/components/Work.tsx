const projects = [
  {
    category: "Brand Campaign",
    title: "Elevating a Regional Bank's Digital Presence",
    result: "312% increase in digital leads",
    tags: ["Social Media", "SEO", "Content"],
    color: "from-blue-600 to-cyan-500",
  },
  {
    category: "Video Production",
    title: "Product Launch Film for a Tech Startup",
    result: "2.4M views in first 30 days",
    tags: ["Video", "Distribution", "PR"],
    color: "from-violet-600 to-purple-500",
  },
  {
    category: "Digital Strategy",
    title: "Scaling an E-Commerce Brand to 7 Figures",
    result: "8x ROAS across paid channels",
    tags: ["Paid Ads", "Analytics", "CRO"],
    color: "from-rose-600 to-orange-500",
  },
  {
    category: "Brand Identity",
    title: "Rebranding a 20-Year-Old Retail Chain",
    result: "42% lift in brand recognition",
    tags: ["Strategy", "Design", "Web"],
    color: "from-emerald-600 to-teal-500",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
            Our Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Results We're Proud Of
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A snapshot of the campaigns and projects we've delivered for clients
            across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${p.color}`} />
              <div className="p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                  {p.category}
                </p>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  {p.title}
                </h3>
                <p className={`text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${p.color} mb-4`}>
                  {p.result}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
