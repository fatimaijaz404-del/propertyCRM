const features = [
  {
    title: "Property Listing",
    description: "Manage and display your real estate listings with real-time updates.",
  },
  {
    title: "Sale Funnel",
    description: "Refine your search with customizable filters to find the right properties fast.",
  },
  {
    title: "Multi Projects",
    description: "Manage multiple projects at once, keeping every team organized and productive.",
  },
  {
    title: "Web Leads",
    description: "Connect with the right prospects through targeted web lead capture.",
  },
  {
    title: "Social Media Integration",
    description: "Stay connected and grow your audience directly from the CRM.",
  },
  {
    title: "Call Centre & Meetings",
    description: "24/7 support and meeting scheduling built into your workflow.",
  },
];

function Features() {
  return (
    <section id="features" className="px-8 py-24 max-w-7xl mx-auto">

      <div className="text-center mb-16">
        <p className="text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-3">
          Features
        </p>
        <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
          Everything your sales team needs
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
              <div className="w-4 h-4 rounded-sm bg-emerald-700"></div>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Features;