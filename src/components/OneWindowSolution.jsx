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
        <div>
          <p className="text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-4">
            Property CRM
          </p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
            One Window <span className="text-emerald-700">Solution</span>
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Property CRM is a cloud-enabled solution that manages your sales team, lead conversion, stages of leads, activity logs, contact lists in detail, dashboards, and reports.
          </p>

          <div className="space-y-4">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-emerald-700" strokeWidth={1.75} />
                  </div>
                  <p className="font-medium text-slate-800">{point.text}</p>
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