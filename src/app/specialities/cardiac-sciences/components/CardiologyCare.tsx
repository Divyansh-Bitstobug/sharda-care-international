"use client";
import React, { useState } from "react";

const allFeatures = [
  {
    title: "Multidisciplinary Team",
    description:
      "Integrated cardiologists, surgeons, and trained nurses ensuring highly coordinated, specialized patient care.",
    side: "left",
  },
  {
    title: "Comprehensive Care",
    description:
      "End-to-end diagnosis, personalized treatment, and holistic rehabilitation for a diverse spectrum of heart conditions.",
    side: "right",
  },
  {
    title: "Advanced Interventions",
    description:
      "Managing complex heart conditions utilizing next-generation therapies and minimally invasive surgical techniques.",
    side: "left",
  },
  {
    title: "Modern Infrastructure",
    description:
      "State-of-the-art cath labs, modular operating theaters, and dedicated ICUs with advanced patient monitoring.",
    side: "right",
  },
  {
    title: "24/7 Emergency Care",
    description:
      "Round-the-clock rapid response and critical care for heart attacks and acute cardiac emergencies.",
    side: "left",
  },
  {
    title: "Leading Expertise",
    description:
      "The region's fastest-growing cardiac program, guided by highly experienced cardiologists and surgeons.",
    side: "right",
  },
];

const CardiologyCare = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA]">
      {/* Hide scrollbar styles for mobile carousel */}
      <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Title + Buttons */}
      <div className="text-center pt-16 pb-8">
        <h2 className="text-4xl md:text-5xl font-medium mb-6">
          Cardiac Sciences
        </h2>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#E3396C] to-[#EC7E4B] text-white font-medium text-sm hover:opacity-90 transition-opacity">
            Enquire Now
          </button>
          <button className="group rounded-lg p-[1px] bg-gradient-to-r from-[#E3396C] to-[#EC7E4B] shadow-sm">
            <div className="px-6 py-2.5 rounded-lg bg-white group-hover:bg-[hsl(0,70%,95%)] transition-colors h-full w-full">
              <span className="bg-gradient-to-r from-[#E3396C] to-[#EC7E4B] bg-clip-text text-transparent font-medium text-sm">
                Find A Doctor
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="md:hidden">
        {/* Features Carousel (Swipeable) */}
        <div
          className="flex overflow-x-auto snap-x snap-mandatory hide-scroll gap-6 px-6 mb-8 w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {allFeatures.map((f, i) => (
            <div key={i} className="snap-center shrink-0 w-[85%] text-left">
              <h3 className="text-xl font-medium mb-2 text-[#1c1c28]">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Heart + Circle */}
        <div
          className="relative flex justify-center"
          style={{ minHeight: "320px" }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[300px] top-0">
            <img
              src="/cardiac-sciences/bg-circle.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative z-10 w-[250px] h-[320px] -mt-1">
            <img
              src="/cardiac-sciences/heart.png"
              alt="Heart"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div
        className="hidden md:block relative max-w-6xl mx-auto px-4 pb-0"
        style={{ minHeight: "580px" }}
      >
        {/* Circle */}
        <div className="absolute left-1/2 top-[5%] -translate-x-1/2 w-[560px] h-[560px]">
          <img
            src="/cardiac-sciences/bg-circle.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Heart */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[400px] z-40"
          style={{ top: "-2%", height: "650px" }}
        >
          <img
            src="/cardiac-sciences/heart.png"
            alt="Heart"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Left top */}
        <div className="absolute left-[3%] top-[2%] w-[300px] text-right">
          <h3 className="text-lg font-medium mb-1">Multidisciplinary Team</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Integrated cardiologists, surgeons, and trained nurses ensuring
            highly coordinated, specialized patient care.
          </p>
        </div>
        {/* Left middle */}
        <div className="absolute left-[-7%] top-[36%] w-[300px] text-right">
          <h3 className="text-lg font-medium mb-1">Advanced Interventions</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Managing complex heart conditions utilizing next-generation
            therapies and minimally invasive surgical techniques.
          </p>
        </div>
        {/* Left bottom */}
        <div className="absolute left-[-3%] top-[68%] w-[300px] text-right">
          <h3 className="text-lg font-medium mb-1">24/7 Emergency Care</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Round-the-clock rapid response and critical care for heart attacks
            and acute cardiac emergencies.
          </p>
        </div>

        {/* Right top */}
        <div className="absolute right-[3%] top-[2%] w-[300px] text-left">
          <h3 className="text-lg font-medium mb-1">Comprehensive Care</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            End-to-end diagnosis, personalized treatment, and holistic
            rehabilitation for a diverse spectrum of heart conditions.
          </p>
        </div>
        {/* Right middle */}
        <div className="absolute right-[-7%] top-[36%] w-[300px] text-left">
          <h3 className="text-lg font-medium mb-1">Modern Infrastructure</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            State-of-the-art cath labs, modular operating theaters, and
            dedicated ICUs with advanced patient monitoring.
          </p>
        </div>
        {/* Right bottom */}
        <div className="absolute right-[-3%] top-[68%] w-[300px] text-left">
          <h3 className="text-lg font-medium mb-1">Leading Expertise</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The region's fastest-growing cardiac program, guided by highly
            experienced cardiologists and surgeons.
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="relative z-30 bg-white md:mt-[-60px] pt-24 pb-16 flex flex-col items-center justify-center">
        <button className="group rounded-full p-[1px] bg-gradient-to-r from-[#E3396C] to-[#EC7E4B] mb-4">
          <div className="px-6 py-2.5 rounded-full bg-white group-hover:bg-[hsl(0,70%,95%)] transition-colors h-full w-full">
            <span className="bg-gradient-to-r from-[#E3396C] to-[#EC7E4B] bg-clip-text text-transparent font-medium text-sm">
              About Us
            </span>
          </div>
        </button>
        <div className="max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center">
          <p className="text-muted-foreground leading-relaxed text-base mb-6 transition-all duration-300">
            ShardaCare - Healthcity brings together a multidisciplinary team of
            top cardiac surgeons and heart failure specialists to give patients
            with end-stage heart disease a second chance at life. We integrate
            advanced diagnostics, high-risk surgery, mechanical circulatory
            support, and long-term rehabilitation under one roof.
            {!isExpanded ? (
              <span className="text-gray-400"> With evidence-based ...</span>
            ) : (
              <span>
                {" "}
                With evidence-based practices and protocol-driven evaluations,
                our institute is fully equipped to manage severe heart failure
                requiring timely transplantation and intensive postoperative
                care.
              </span>
            )}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-2.5 rounded-full gap-2 bg-gradient-to-r from-[#E3396C] to-[#EC7E4B] text-white font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            {isExpanded ? "Read Less" : "Read More"}
            <span className="bg-white rounded-full p-1 flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M3.45521 9.61943C3.45521 9.49276 3.50187 9.36609 3.60187 9.26609C3.79521 9.07276 4.11521 9.07276 4.30854 9.26609L8.00187 12.9594L11.6952 9.26609C11.8885 9.07276 12.2085 9.07276 12.4019 9.26609C12.5952 9.45943 12.5952 9.77943 12.4019 9.97276L8.35521 14.0194C8.16187 14.2128 7.84188 14.2128 7.64854 14.0194L3.60187 9.97276C3.50187 9.87276 3.45521 9.74609 3.45521 9.61943Z"
                  fill="#0F0F0F"
                />
                <path
                  d="M7.5 13.552V2.33203C7.5 2.0587 7.72667 1.83203 8 1.83203C8.27333 1.83203 8.5 2.0587 8.5 2.33203V13.552C8.5 13.8254 8.27333 14.052 8 14.052C7.72667 14.052 7.5 13.8254 7.5 13.552Z"
                  fill="#0F0F0F"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardiologyCare;
