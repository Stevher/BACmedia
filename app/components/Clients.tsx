const clients = [
  "PSG Financial Services",
  "FNB",
  "Standard Bank",
  "Momentum",
  "Novo Nordisk",
  "Pharma Dynamics",
  "SolarEdge",
  "Core Productions",
  "Pam Golding Properties",
  "Pixel Nation",
  "Partners in Performance",
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-8 border-b border-zinc-900">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">Selected Clients</h2>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">Finance, pharma, property, technology, and media.</p>
        </div>

        <div className="divide-y divide-zinc-900">
          {clients.map((client) => (
            <div key={client} className="group flex items-center justify-between py-5 hover:bg-zinc-950/60 -mx-6 px-6 sm:-mx-10 sm:px-10 transition-colors duration-200">
              <span className="font-serif text-xl sm:text-2xl font-normal text-zinc-500 group-hover:text-white transition-colors duration-300">
                {client}
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-[#ffdd15] transition-colors duration-300 shrink-0" />
            </div>
          ))}
          <div className="py-5 -mx-6 px-6 sm:-mx-10 sm:px-10">
            <span className="text-sm text-zinc-700 italic">And many more under NDA</span>
          </div>
        </div>

      </div>
    </section>
  );
}
