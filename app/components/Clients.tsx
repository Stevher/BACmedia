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
    <section id="clients" className="py-16 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-zinc-900">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">Selected Clients</h2>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">Finance, pharma, property, technology, and media.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((c) => (
            <div key={c.name} className="group relative bg-zinc-950 border border-zinc-900 rounded-xl px-7 py-7 hover:border-zinc-700 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-7 right-7 h-px bg-transparent group-hover:bg-[#ffdd15] transition-colors duration-500" />

              <h3 className="font-serif text-xl font-normal text-zinc-400 group-hover:text-white transition-colors duration-300 leading-snug mb-1.5">
                {c.name}
              </h3>
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-zinc-700 group-hover:text-zinc-500 transition-colors duration-300">
                {c.industry}
              </p>
            </div>
          ))}

          <div className="bg-zinc-950 border border-zinc-900 rounded-xl px-7 py-7 flex flex-col justify-center">
            <h3 className="font-serif text-xl font-normal italic text-zinc-700 leading-snug mb-1.5">
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
