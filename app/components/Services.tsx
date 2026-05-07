const services = [
  {
    icon: "📣",
    title: "Digital Marketing",
    description:
      "Data-driven campaigns across search, social, and display that put your brand in front of the right audience at the right time.",
  },
  {
    icon: "🎬",
    title: "Video & Content Production",
    description:
      "From brand films to social reels, we produce scroll-stopping content that tells your story and drives engagement.",
  },
  {
    icon: "🎨",
    title: "Brand Strategy & Design",
    description:
      "We build cohesive brand identities — from positioning and messaging to visual systems that stand out in a crowded market.",
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    description:
      "Turn raw data into actionable strategy. We track what matters and optimize every campaign for maximum ROI.",
  },
  {
    icon: "📰",
    title: "PR & Communications",
    description:
      "Earn media coverage, build credibility, and manage your reputation with targeted press and communications campaigns.",
  },
  {
    icon: "💻",
    title: "Web & Digital Experience",
    description:
      "High-performance websites and landing pages designed to convert — built fast, built to last, and built for your users.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Services Built to Move the Needle
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Every service we offer is designed with one goal in mind: growth
            that compounds over time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
