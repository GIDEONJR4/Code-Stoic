import React, { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingData = [
    {
      title: "Basic",
      description: "Best for startups and early-stage research.",
      monthly: 10,
      annual: 100,
      features: [
        "Access to basic labeling tools",
        "Up to 5,000 data rows per month",
        "Standard quality assurance (QA)",
        "Export in common formats (JSON, CSV)",
      ],
      isPopular: false,
    },
    {
      title: "Pro",
      description: "Perfect for scaling models and production-ready AI.",
      monthly: 30,
      annual: 300,
      features: [
        "Priority RLHF (Human Feedback) workflows",
        "Up to 50,000 data rows per month",
        "Advanced Multi-stage QA & verification",
        "Priority email and chat support",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      description: "For brands requiring localized African context at scale.",
      monthly: 50,
      annual: 500,
      features: [
        "Unlimited data labeling & annotation",
        "Dedicated team of specialized local annotators",
        "Custom-built AI training platforms",
        "On-premise deployment options",
      ],
      isPopular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="flex items-center justify-center flex-col py-20 px-4 bg-white font-sans"
    >
      <h1 className="font-medium text-4xl md:text-[52px] text-slate-800 text-center">
        Flexible Pricing Plans
      </h1>
      <p className="text-base/7 text-zinc-500 max-w-sm text-center mt-4">
        Choose a plan that supports your business growth and digital goals.
      </p>

      {/* Toggle Switch */}
      <div className="mt-6 flex bg-zinc-100 p-1.5 rounded-full">
        <button
          onClick={() => setIsAnnual(false)}
          className={`px-4 py-2 rounded-full text-xs cursor-pointer transition ${
            !isAnnual ? "bg-zinc-800 text-white shadow-sm" : "text-gray-600"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsAnnual(true)}
          className={`px-4 py-2 rounded-full text-xs cursor-pointer transition ${
            isAnnual ? "bg-zinc-800 text-white shadow-sm" : "text-gray-600"
          }`}
        >
          Annually
        </button>
      </div>

      {/* Pricing Cards Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className={`border border-zinc-200 rounded-2xl p-6 flex flex-col items-start max-w-md transition duration-300 hover:-translate-y-1 ${
              plan.isPopular ? "bg-gray-100 shadow-sm" : "bg-white"
            }`}
          >
            <h1 className="font-medium text-3xl text-slate-800 mt-1">
              {plan.title}
            </h1>
            <p className="text-sm text-zinc-500 mt-2">{plan.description}</p>

            <h1 className="font-medium text-5xl text-slate-800 mt-6">
              ${isAnnual ? plan.annual : plan.monthly}
              <span className="text-sm text-zinc-400 font-normal ml-1">
                /{isAnnual ? "yr" : "mo"}
              </span>
            </h1>

            <button
              className={`w-full px-4 py-3 rounded-full cursor-pointer text-sm mt-8 transition-colors ${
                plan.isPopular
                  ? "bg-gray-800 hover:bg-gray-900 text-white"
                  : "border border-zinc-300/80 text-slate-600 bg-zinc-100 hover:bg-zinc-200/70"
              }`}
            >
              Get Started
            </button>

            <div className="w-full mt-8 space-y-2.5 pb-4">
              {plan.features.map((feature, fIndex) => (
                <p
                  key={fIndex}
                  className="flex items-center gap-3 text-sm text-zinc-500"
                >
                  <span className="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0">
                    <span className="size-1.5 rounded-full bg-zinc-800"></span>
                  </span>
                  {feature}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
