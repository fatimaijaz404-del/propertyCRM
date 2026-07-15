import { useState } from "react";

function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    market: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  }

  return (
    <section id="home" className="relative overflow-hidden">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100 rounded-full blur-3xl opacity-40 -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl opacity-60 -z-10 -translate-x-1/3"></div>

      <div className="grid md:grid-cols-2 gap-16 items-center px-8 py-24 max-w-7xl mx-auto">

        {/* LEFT: Text content */}
        <div>
          <p className="text-amber-700 font-semibold tracking-wide uppercase text-sm mb-4">
            Real Estate CRM
          </p>
          <h1 className="text-5xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Enhance your sales funnel with one connected CRM.
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Property CRM helps developers and brokers automate lead tracking, manage listings, and close deals faster — without switching between five different tools.
          </p>

          

        {/* RIGHT: Lead capture form */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-300/40 p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-1">Book a Demo</h2>
          <p className="text-sm text-slate-500 mb-6">Tell us a bit about your business and we'll be in touch.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
            />
            <select
              name="market"
              value={formData.market}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
            >
              <option value="">Select Market</option>
              <option value="uae">UAE</option>
              <option value="ksa">KSA</option>
              <option value="pakistan">Pakistan</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Describe your requirements"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition resize-none"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-amber-700 text-white px-6 py-3.5 rounded-lg font-medium shadow-lg shadow-amber-700/25 hover:bg-amber-800 hover:shadow-xl transition-all duration-200 disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : status === "success" ? "✓ Sent — We'll be in touch" : "Book a Demo"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Hero;