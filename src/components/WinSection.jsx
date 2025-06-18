import React from "react";

const stats = [
  {
    title: "Top 1%",
    subtitle: "Among elite agents across Ontario",
  },
  {
    title: "15+ Years",
    subtitle: "Trusted expertise in buying & selling homes",
  },
  {
    title: "$45M+",
    subtitle: "Total closed sales & investments",
  },
];

const WinSection = () => {
  return (
    <div className="bg-[#f8f6f3] py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-wide">
          WE WIN <span className="text-red-500 font-semibold">WHEN YOU WIN</span>
        </h2>
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          Empowering buyers and sellers to unlock the full potential of real estate —
          while delivering exceptional value, insight, and confidence at every step.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition duration-300 rounded-lg p-6"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.title}</h3>
              <p className="text-sm text-gray-500">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinSection;
