"use client";
import Image from "next/image";
import React, { useState } from "react";

// --- Dummy Data ---
const treatmentsData = [
  {
    id: "peripheral-angioplasty",
    title: "Peripheral Angioplasty",
    description:
      "Peripheral angioplasty is a minimally invasive procedure designed to open narrowed or blocked arteries in the peripheral vascular system. Often involving the placement of a stent to keep the artery open, it helps alleviate symptoms like leg pain and cramping while reducing the risk of severe complications related to peripheral artery disease.",
    imgSrc:
      "/cardiac-sciences/peripheral.jpg",
  },
  {
    id: "cabg",
    title: "Coronary Artery Bypass Graft Surgery (CABG)",
    description:
      "CABG surgery treats severe coronary artery disease by using a healthy blood vessel to bypass blocked arteries. This creates a new pathway, restoring optimal blood flow to the heart and significantly lowering the risk of heart attacks.",
    imgSrc: "/cardiac-sciences/cabg.jpg",
  },
  {
    id: "coronary-angiography",
    title: "Coronary Angiography",
    description:
      "A vital diagnostic procedure using X-ray imaging and contrast dye to clearly visualize the heart’s blood vessels. It allows our experts to pinpoint blockages and abnormalities, forming the critical first step in developing an effective treatment plan.",
    imgSrc: "/cardiac-sciences/coronory.jpg",
  },
  {
    id: "angioplasty-stent",
    title: "Angioplasty & Stent Placement",
    description:
      "A minimally invasive procedure to open clogged heart arteries. A tiny balloon widens the vessel, and a wire mesh stent is permanently placed to keep it open, quickly restoring blood flow, relieving chest pain, and preventing heart damage.",
    imgSrc:
      "/cardiac-sciences/heart.jpg",
  },
  {
    id: "minimally-invasive",
    title: "Minimally Invasive Cardiac Surgery",
    description:
      "A modern alternative to open-heart surgery. Using specialized instruments through small incisions, our surgeons perform complex treatments like valve repairs. This advanced approach ensures significantly less pain, minimal scarring, reduced infection risks, and a much faster recovery.",
    imgSrc:
      "/cardiac-sciences/minimal.jpg",
  },
];

// --- Subcomponents ---

// Arrow Icon SVG
const ArrowIcon = ({ active }: { active: boolean }) => {
  return (
    <div
      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
        active
          ? "bg-white border-transparent"
          : "bg-transparent border-gray-300"
      }`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active ? "text-[#E3396C]" : "text-gray-400"}
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </div>
  );
};

// --- Main Component ---
const OurTreatments: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="treatment" className="py-8 md:py-16 bg-[#FCFDFD]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-3 text-[#333]">
            Our Treatments
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Team approach and compassionate care for holistic heart health
          </p>
        </div>

        {/* ============================== */}
        {/* DESKTOP VIEW                   */}
        {/* ============================== */}
        <div className="hidden md:flex border border-gray-100 rounded-2xl overflow-hidden bg-white min-h-[400px]">
          {/* Left Side: Tabs */}
          <div className="w-[35%] flex flex-col border-r border-gray-100">
            {treatmentsData.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-5 text-left flex h-full justify-between items-center transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#E3396C] to-[#EC7E4B] text-white z-10"
                      : "bg-white text-gray-700 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                  }`}
                >
                  <span
                    className={`font-medium pr-4 ${
                      isActive ? "text-white" : "text-[#1c1c28]"
                    }`}
                  >
                    {item.title}
                  </span>
                  <ArrowIcon active={isActive} />
                </button>
              );
            })}
          </div>

          {/* Right Side: Content Area */}
          <div className="p-4 w-[65%] relative flex">
            <div
              className=""
              style={{
                // Refined dotted background to match screenshot exactly
                backgroundColor: "#FAFAFA",
                backgroundImage:
                  "radial-gradient(#D1D5DB 1.5px, transparent 1.5px)",
                backgroundSize: "22px 22px",
                borderRadius: "16px",
              }}
            >
              {/* items-stretch ensures the text container and image container match heights */}
              <div className="flex flex-row items-stretch gap-8 w-full h-full relative z-10 bg-white/40 p-4 rounded-2xl backdrop-blur-[1px]">
                {/* Text Description */}
                <div className="w-1/2 flex flex-col justify-start pt-2">
                  <h3 className="text-xl font-semibold mb-4 text-[#333]">
                    {treatmentsData[activeTab].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {treatmentsData[activeTab].description}
                  </p>
                </div>

                {/* Image */}
                {/* h-full and object-cover forces the image to perfectly fill the matched height */}
                <div className="w-1/2">
                  <Image
                    src={treatmentsData[activeTab].imgSrc}
                    alt={treatmentsData[activeTab].title}
                    width={1000}
                    height={1000}
                    className="rounded-xl object-cover w-full h-[300px] shadow-sm"
                    style={{ minHeight: "260px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================== */}
        {/* MOBILE VIEW                    */}
        {/* ============================== */}
        <div className="md:hidden flex flex-col space-y-3">
          {treatmentsData.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <div key={item.id} className="flex flex-col">
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-4 rounded-xl flex justify-between items-center transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-[#E3396C] to-[#EC7E4B] text-white shadow-sm"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  <span
                    className={`text-sm font-medium text-left pr-4 ${
                      isActive ? "text-white" : "text-[#1c1c28]"
                    }`}
                  >
                    {item.title}
                  </span>
                  <ArrowIcon active={isActive} />
                </button>

                {/* Accordion Content */}
                {isActive && (
                  <div
                    className="mt-2 border border-gray-100 rounded-xl p-4 shadow-sm transition-all duration-300 ease-in-out relative"
                    style={{
                      backgroundColor: "#FAFAFA",
                      backgroundImage:
                        "radial-gradient(#D1D5DB 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  >
                    <div className="bg-white/60 backdrop-blur-[2px] rounded-lg p-2">
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="rounded-lg mb-4 w-full h-48 object-cover"
                      />
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTreatments;
