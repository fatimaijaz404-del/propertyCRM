import testimonialImg from "../assets/testimonial-woman.JPG";

const testimonials = [
  {
    quote:
      "Property CRM has really changed our ability to follow up with customers and make sure we're being responsive and interacting with them when they want.",
    name: "Alex Anderson",
    role: "CEO, Digital Startup",
  },
  {
    quote:
      "Property CRM has truly revolutionized our capacity to stay connected with clients, ensuring that we promptly address their needs and engage with them at their convenience.",
    name: "Jennifer Doe",
    role: "CFO, Connect",
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT: Image */}
        <div>
          <img
            src={testimonialImg}
            alt="Happy Property CRM customer"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* RIGHT: Testimonials */}
        <div>
          <p className="text-emerald-700 font-semibold uppercase italic tracking-wide text-sm mb-4">
            Our Testimonials
          </p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-12">
            What our <span className="text-emerald-700">customers</span> said about us
          </h2>

          <div className="space-y-10">
            {testimonials.map((t, index) => (
              <div key={index} className="border-l-4 border-emerald-700 pl-6">
                <p className="text-slate-600 leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;