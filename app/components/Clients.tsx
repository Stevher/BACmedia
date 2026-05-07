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
    <section id="clients" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-8 border-b border-zinc-900">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">Selected Clients</h2>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">Finance, pharma, property, technology, and media.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900">
          {clients.map((c) => (
            <div key={c.name} className="group relative bg-[#0c0c0c] px-8 py-9 hover:bg-zinc-950 transition-colors duration-300 overflow-hidden">
              {/* Hover accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-zinc-900 group-hover:bg-[#ffdd15] transition-colors duration-500" />

              <h3 className="font-serif text-xl sm:text-2xl font-normal text-zinc-400 group-hover:text-white transition-colors duration-300 leading-snug mb-2">
                {c.name}
              </h3>
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-zinc-700 group-hover:text-zinc-500 transition-colors duration-300">
                {c.industry}
              </p>
            </div>
          ))}

          {/* NDA tile */}
          <div className="bg-[#0c0c0c] px-8 py-9 flex flex-col justify-center">
            <h3 className="font-serif text-xl sm:text-2xl font-normal italic text-zinc-700 leading-snug mb-2">
              And many more…
            </h3>
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-zinc-800">
              Confidential / NDA
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
