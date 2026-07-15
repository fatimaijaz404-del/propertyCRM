import { useState } from "react";
import { Zap, Search, FileStack, Cloud, Users, Layers } from "lucide-react";
import generateMoreSaleImg from "../assets/generate-more-sale.png";
import generateMoreSaleImg from "../assets/generate-more-sale.png";
import organizeActivitiesImg from "../assets/organize-activities.png";
import trackCampaignsImg from "../assets/track-campaigns.png";
import propertyListingImg from "../assets/property-listing.png";
import manageTeamsImg from "../assets/manage-teams.png";
const tabs = [
  {
    id: "sales",
    label: "Generate More Sales",
    image: generateMoreSaleImg,
    eyebrow: "Faster than ever",
    title: "Generating More Sales",
    description:
      "Supercharge your sales pipeline, designed to effortlessly capture and assign leads to agents for personalized customer engagement. Stay ahead in a competitive market and elevate your customer service.",
    points: [
      { icon: Cloud, title: "Work Automation", text: "Automate your business processes so your team can focus on closing deals." },
      { icon: Search, title: "Matching Properties", text: "Leads are automatically matched against properties that fit their requirements." },
      { icon: Layers, title: "Property Offers", text: "Track offers and use smart filtering to spot unsold properties that need attention." },
    ],
  },
  {
    id: "activities",
    label: "Organize Sale Activities",
    image: organizeActivitiesImg,
    eyebrow: "Stay on schedule",
    title: "Organize Your Activities & Tasks",
    description:
      "Increase efficiency with task automation that saves time and effort. Keep a complete record of calls and viewings so nothing slips through the cracks.",
    points: [
      { icon: Zap, title: "Calls", text: "Review conversations with leads to refine your conversion strategy." },
      { icon: Search, title: "Property Viewings", text: "Assign properties to agents, schedule viewings, and log outcomes." },
      { icon: FileStack, title: "Tasks", text: "Delegate tasks across the team to improve service and efficiency." },
    ],
  },
  {
    id: "campaigns",
    label: "Track Sale Campaigns",
    image: trackCampaignsImg,
    eyebrow: "Less work, more results",
    title: "Tracking Your Campaigns & Sales Queries",
    description:
      "Simplify marketing with automated email, text, and social outreach. Generate campaign reports for lead tracking and build landing pages effortlessly.",
    points: [
      { icon: Zap, title: "Email & SMS", text: "See every email and text exchange from the CRM without switching apps." },
      { icon: Search, title: "Campaigns", text: "Link leads to marketing campaigns to calculate revenue by channel." },
    ],
  },
  {
    id: "listing",
    label: "Property Listing",
    image: propertyListingImg,
    eyebrow: "All your assets, organized",
    title: "Manage Your Property Listings",
    description:
      "Add every property into the system with images, floor layouts, and location details, so your whole team works from one source of truth.",
    points: [
      { icon: FileStack, title: "Images & Layouts", text: "Store photos and floor plans alongside every listing." },
      { icon: Search, title: "Geographical Info", text: "Attach location data so agents can match leads by area." },
      { icon: Layers, title: "Promotion Materials", text: "Keep marketing assets attached to the listing they belong to." },
    ],
  },
  {
    id: "teams",
    label: "Manage Teams",
    image: manageTeamsImg,
    eyebrow: "One team, one view",
    title: "Smoothly Manage Teams",
    description:
      "Plan your team's workload, assign leads to the right agent, and track performance with reports that show exactly where things stand.",
    points: [
      { icon: Users, title: "Team Planning", text: "Assign agents to leads and properties without the back and forth." },
      { icon: Zap, title: "Sales Analytics", text: "Multi-level reports show performance across every agent and stage." },
      { icon: FileStack, title: "Lead History", text: "See the full history of every lead in one place." },
    ],
  },
];

function FeaturesOverview() {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active);
  

  return (
    <section className="bg-white py-24">
      <div className="px-8 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-3">
            CRM Property Management Features Overview
          </h2>
          <p className="text-slate-500">
            Streamline your property business and increase your sales with the power of CRM software
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-3 rounded-lg text-sm font-semibold uppercase tracking-wide transition-colors ${
                active === t.id
                  ? "bg-emerald-700 text-white"
                  : "bg-slate-100 text-emerald-700 hover:bg-slate-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image panel */}
          <div>
            <img
               src={tab.image}
              alt={tab.title}
className="w-full rounded-2xl shadow-lg border border-slate-200"            />
          </div>
          {/* Text content */}
          <div>
            <p className="text-emerald-700 font-semibold uppercase text-xs tracking-wide mb-3">
              {tab.eyebrow}
            </p>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">{tab.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-8">{tab.description}</p>

            <div className="space-y-5">
              {tab.points.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div key={i} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-emerald-700" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{point.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{point.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesOverview;