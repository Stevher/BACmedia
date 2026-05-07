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
    <section id="clients" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#ffdd15] mb-3">Selected Clients</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Brands That Trust Us</h2>
          <p className="mt-4 text-base text-gray-400 max-w-2xl mx-auto">
            We work across financial services, pharmaceuticals, property, technology, and media — alongside many more clients whose work remains confidential.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-zinc-700/30 border border-zinc-700/30 rounded-2xl overflow-hidden">
          {clients.map((client) => (
            <div key={client} className="flex items-center justify-center px-6 py-7 bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300">
              <span className="text-sm font-semibold text-gray-300 text-center leading-snug">{client}</span>
            </div>
          ))}
          <div className="flex items-center justify-center px-6 py-7 bg-zinc-900">
            <span className="text-sm text-zinc-600 text-center italic">+ more under NDA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
