import { Cloud, Map, Users, Layers } from "lucide-react";
import solutionImg from "../assets/one-window-solution.JPG";

const points = [
  { icon: Cloud, text: "Cloud enabled" },
  { icon: Map, text: "Maps" },
  { icon: Users, text: "Social media and web lead" },
  { icon: Layers, text: "Build in FMS" },
];

function OneWindowSolution() {
  return (
    <section className="bg-white py-24">
      <div className="px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT: Text content */}
        {/* LEFT: Text content */}
<div>
  <span className="inline-block border border-emerald-600 text-emerald-700 italic font-medium tracking-wide text-sm px-5 py-2 rounded-full mb-6">
    Property CRM
  </span>
  <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-8">
    One Window <span className="text-emerald-700">Solution</span>
  </h2>
  <p className="text-slate-500 leading-relaxed mb-10">
    Property CRM a cloud enabled solution will manage Sales Team, Leads Conversion, assign leads to the team, stages of leads, Activity log, Contact List with detail, Dashboard and reports.
  </p>

  <div className="space-y-6">
    {points.map((point, index) => {
      const Icon = point.icon;
      return (
        <div key={index} className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-emerald-700 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
          </div>
          <p className="font-semibold text-slate-800 text-lg">{point.text}</p>
        </div>
      );
    })}
  </div>
</div>

        {/* RIGHT: Device mockup image */}
        <div>
          <img
            src={solutionImg}
            alt="Property CRM on multiple devices"
            className="w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
}

export default OneWindowSolution;