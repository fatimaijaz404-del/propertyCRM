import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Property CRM software?",
    answer: "Property CRM software is a platform that helps real estate agencies manage listings, leads, and sales activities in one connected system.",
  },
  {
    question: "How can Sales CRM improve Property productivity?",
    answer: "By automating repetitive tasks, organizing leads by stage, and giving your team clear visibility into every deal, so nothing gets missed.",
  },
  {
    question: "What are the key features of a good Property CRM system?",
    answer: "Lead tracking, property listing management, campaign tracking, team collaboration tools, and reporting are the core features to look for.",
  },
  {
    question: "Is Property CRM software suitable for small businesses?",
    answer: "Yes — Property CRM scales with your team, whether you're a single agent or a growing agency with multiple projects.",
  },
  {
    question: "How does Sales CRM support customer retention?",
    answer: "By keeping a full history of every interaction, so your team can follow up at the right time with the right context.",
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1200);
  }

  return (
    <section className="bg-white py-24">
      <div className="px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT: FAQ Accordion */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-xl bg-emerald-700 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-7 h-7 text-white" strokeWidth={1.75} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">F.A.Qs</h2>
              <p className="text-slate-500">Frequently asked questions</p>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-bold text-slate-900">{faq.question}</span>
                    <span className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-emerald-700" />
                      ) : (
                        <Plus className="w-4 h-4 text-emerald-700" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Contact form */}
        <div className="relative">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
            Get In <span className="text-emerald-700">Touch</span>
          </h2>

          <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl p-8">
            <div className="absolute -right-3 top-0 bottom-0 w-3 bg-emerald-700 rounded-r-2xl"></div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition"
              />
              <textarea
                name="message"
                placeholder="Describe your requirements"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition resize-none"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-emerald-700 text-white px-8 py-3.5 rounded-lg font-medium shadow-lg shadow-emerald-700/25 hover:bg-emerald-800 transition-all duration-200 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : status === "success" ? "✓ Sent" : "Submit"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FAQs;