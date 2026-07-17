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
      <div className="px-8 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img
              src={testimonialImg}
              alt="Happy Property CRM customer"
              className="w-full h-auto"
            />
          </div>

          <div className="md:border-l md:border-slate-200 md:pl-16">
            <p className="text-emerald-700 font-semibold uppercase italic tracking-wide text-sm mb-4">
              Our Testimonials
            </p>
            <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What our <span className="text-emerald-700">customers</span> said about us
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          {testimonials.map((t, index) => (
            <div key={index} className="flex flex-col">
              <p className="text-slate-500 leading-relaxed italic flex-1">
                "{t.quote}"
              </p>
              <div className="mt-6">
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;