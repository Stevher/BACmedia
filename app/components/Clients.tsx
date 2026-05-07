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
    <section id="clients" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#ffdd15] mb-3">
            Selected Clients
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Brands That Trust Us
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            We work across financial services, pharmaceuticals, property,
            technology, and media — alongside many more clients whose work
            remains confidential.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center px-6 py-7 bg-[#0f0f0f] hover:bg-[#151515] transition-colors duration-300"
            >
              <span className="text-sm font-semibold text-gray-300 text-center leading-snug">
                {client}
              </span>
            </div>
          ))}
          <div className="flex items-center justify-center px-6 py-7 bg-[#0f0f0f]">
            <span className="text-sm font-medium text-gray-600 text-center leading-snug italic">
              + more under NDA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
