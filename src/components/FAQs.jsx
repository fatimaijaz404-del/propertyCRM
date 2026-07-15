import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is Property CRM software?",
    answer:
      "It's a digital platform that helps real estate businesses manage leads and customer relationships in one place. It centralizes property and client data, automates repetitive tasks, and keeps every conversation organized in a single dashboard.",
  },
  {
    question: "How does it improve my team's productivity?",
    answer:
      "By automating routine work like lead assignment and follow-ups, and giving your team a clear view of every deal's stage. Agents spend less time on admin and more time closing.",
  },
  {
    question: "What features should I look for in a CRM?",
    answer:
      "Look for solid contact and lead management, a visual sales pipeline, integrated communication, reporting, and easy access from any device. Integration with your existing marketing tools is a big plus too.",
  },
  {
    question: "Is this suitable for a small real estate business?",
    answer:
      "Yes. Smaller teams often benefit the most since the CRM keeps every lead and listing organized from day one, without needing a large operations team to manage it.",
  },
  {
    question: "Can it help with retaining customers long-term?",
    answer:
      "It tracks every past interaction so you can follow up at the right time with the right message. That consistency is usually what keeps clients coming back for future deals.",
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="bg-white py-24">
      <div className="px-8 max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-3">
            F.A.Qs
          </p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <Plus
                    className={`w-5 h-5 text-emerald-700 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQs;