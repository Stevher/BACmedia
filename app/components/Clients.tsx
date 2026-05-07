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
    <section id="clients" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-900">
          <div>
            <span className="rule-yellow mb-4 inline-block" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Selected Clients</h2>
          </div>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed sm:text-right">
            Trusted by leading brands across finance, pharma, property, and media.
          </p>
        </div>

        {/* Client list — editorial typographic treatment */}
        <div className="divide-y divide-zinc-900">
          {clients.map((client) => (
            <div key={client} className="group flex items-center justify-between py-5 hover:bg-zinc-950 -mx-6 px-6 sm:-mx-10 sm:px-10 transition-colors duration-200 cursor-default">
              <span className="text-xl sm:text-2xl font-bold text-zinc-400 group-hover:text-white transition-colors duration-300 tracking-tight">
                {client}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-[#ffdd15] transition-colors duration-300 shrink-0 ml-4" />
            </div>
          ))}
          <div className="flex items-center justify-between py-5 -mx-6 px-6 sm:-mx-10 sm:px-10">
            <span className="text-base text-zinc-700 italic">Plus many more under NDA</span>
          </div>
        </div>

      </div>
    </section>
  );
}
