"use client";
import Image from "next/image";
import React, { useState } from "react";

// --- Data ---
const ailmentsData = [
  {
    id: "cad",
    title: "Coronary Artery Disease (CAD)",
    description:
      "Coronary Artery Disease (CAD) occurs when the arteries supplying blood to the heart become narrowed or blocked. This condition can lead to serious complications like angina (chest pain), heart attacks, or heart failure. CAD is effectively managed through lifestyle changes, medications, and procedures like angioplasty or bypass surgery. Consult our specialists for an accurate diagnosis and a personalized treatment plan.",
    imgSrc: "/cardiac-sciences/peripheral.png",
  },
  {
    id: "heart-attack",
    title: "Heart Attack (Myocardial Infarction)",
    description:
      "A heart attack occurs when blood supply to your heart is severely blocked, requiring immediate care to prevent irreversible damage. Symptoms include severe chest pain, breathlessness, and sweating. Rapid treatment using clot-busting medications, emergency angioplasty, or stenting restores blood flow and quickly saves lives.",
    imgSrc: "/cardiac-sciences/peripheral.png",
  },
  {
    id: "heart-failure",
    title: "Heart Failure",
    description:
      "Heart failure is a chronic condition where your heart cannot pump enough blood to meet bodily needs, causing extreme fatigue, breathlessness, and fluid buildup. Our specialists effectively manage this using targeted medications, lifestyle changes, and advanced therapies like pacemakers or mechanical circulatory support devices.",
    imgSrc: "/cardiac-sciences/peripheral.png",
  },
  {
    id: "valvular-heart-diseases",
    title: "Valvular Heart Diseases",
    description:
      "Valvular heart disease involves damaged heart valves that cannot open or close correctly. This restricts normal blood flow, forcing your heart to overwork, causing extreme fatigue and irregular heartbeats. Treatments range from medical monitoring to advanced minimally invasive repairs or complete surgical valve replacements.",
    imgSrc: "/cardiac-sciences/peripheral.png",
  },
  {
    id: "hypertension",
    title: "Hypertension & Preventive Cardiology",
    description:
      "Hypertension, or high blood pressure, forces your heart to overwork, significantly increasing risks of heart attacks and strokes. Often presenting without symptoms, it is a silent killer. Our preventive approach uses early detection, personalized lifestyle coaching, and precise medical management to safeguard long-term health.",
    imgSrc: "/cardiac-sciences/peripheral.png",
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
const Ailments: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-8 md:py-16 bg-[#FCFDFD]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-gray-900">
            Ailments
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
            {ailmentsData.map((item, index) => {
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
              className="w-full"
              style={{
                // Refined dotted background
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
                    {ailmentsData[activeTab].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {ailmentsData[activeTab].description}
                  </p>
                </div>

                {/* Image */}
                <div className="w-1/2">
                  <Image
                    src={ailmentsData[activeTab].imgSrc}
                    alt={ailmentsData[activeTab].title}
                    width={1000}
                    height={1000}
                    className="rounded-xl object-cover w-full h-full shadow-sm"
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
          {ailmentsData.map((item, index) => {
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
                      <Image
                        src={item.imgSrc}
                        alt={item.title}
                        width={800}
                        height={600}
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

export default Ailments;