const clients = [
  { name: "PSG Financial Services", industry: "Financial Services" },
  { name: "FNB", industry: "Banking" },
  { name: "Standard Bank", industry: "Banking" },
  { name: "Momentum", industry: "Financial Services" },
  { name: "Novo Nordisk", industry: "Pharmaceuticals" },
  { name: "Pharma Dynamics", industry: "Pharmaceuticals" },
  { name: "SolarEdge", industry: "Energy Technology" },
  { name: "Core Productions", industry: "Production" },
  { name: "Pam Golding Properties", industry: "Property" },
  { name: "Pixel Nation", industry: "Digital Media" },
  { name: "Partners in Performance", industry: "Consulting" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 sm:py-32" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="mb-16">
          <span className="label-tag mb-5 inline-flex">Selected Clients</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-serif text-5xl sm:text-6xl leading-[1]">
              Trusted across{" "}
              <em className="not-italic" style={{ color: "var(--accent)" }}>every major sector.</em>
            </h2>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              Finance, pharma, property, technology, and media.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {clients.map((c) => (
            <div key={c.name} className="group cell-hover px-8 py-8">
              <div className="gh-line w-5 mb-5" />
              <h3 className="gh-text font-serif text-xl leading-snug mb-2">{c.name}</h3>
              <p className="text-[11px] tracking-[0.12em] uppercase" style={{ color: "var(--muted)", opacity: 0.45 }}>
                {c.industry}
              </p>
            </div>
          ))}

          <div className="px-8 py-8" style={{ background: "var(--surface)" }}>
            <div className="w-5 mb-5" style={{ height: "1px", background: "transparent" }} />
            <h3 className="font-serif text-xl italic leading-snug mb-2" style={{ color: "var(--muted)", opacity: 0.4 }}>
              And more besides.
            </h3>
            <p className="text-[11px] tracking-[0.12em] uppercase" style={{ color: "var(--muted)", opacity: 0.3 }}>
              Available on request
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
