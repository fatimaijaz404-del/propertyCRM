function Features() {
  return (
    <section id="features" className="bg-sky-50/60 py-24">
      <div className="px-8 max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-3">
            Features
          </p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Everything your sales team needs
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-700" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;