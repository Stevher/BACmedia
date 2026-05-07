const clients = [
  "PSG Financial Services",
  "Momentum",
  "Novo Nordisk",
  "Pharma Dynamics",
  "SolarEdge",
  "Core Productions",
  "Pam Golding Properties",
  "Pixel Nation",
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3">
            Selected Clients
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Brands That Trust Us
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            We work across financial services, pharmaceuticals, property,
            technology, and media — alongside many more clients whose work
            remains confidential.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center px-6 py-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all duration-300"
            >
              <span className="text-sm font-semibold text-gray-700 text-center leading-snug">
                {client}
              </span>
            </div>
          ))}

          {/* NDA placeholder */}
          <div className="flex items-center justify-center px-6 py-6 rounded-2xl bg-white border border-dashed border-gray-200">
            <span className="text-sm font-medium text-gray-400 text-center leading-snug italic">
              + many more under NDA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
