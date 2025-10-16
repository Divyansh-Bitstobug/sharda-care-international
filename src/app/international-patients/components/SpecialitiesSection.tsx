"use client";
import Image from "next/image";
import React, { useState } from "react";

const FORM_WIDTH = 370; // match this width to your fixed form sidebar

const specialties = [
  { icon: "/assets/home/cardiac.svg", label: "Cardiac Sciences" },
  { icon: "/assets/home/oncology.svg", label: "Oncology" },
  { icon: "/assets/home/neuroscience.svg", label: "Neuroscience" },
  { icon: "/assets/home/orthopedic.svg", label: "Orthopedic" },
  { icon: "/assets/home/urology.svg", label: "Urology" },
  { icon: "/assets/home/gi.svg", label: "GI Surgeries" },
  { icon: "/assets/home/ent.svg", label: "ENT" },
  { icon: "/assets/home/critical.svg", label: "Critical Care" },
];

const SpecialtiesSection: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="flex flex-row w-full px-8 py-12 items-start justify-between max-w-[1300px]">
      {/* Main content */}
      <div className="flex-1 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center w-full my-6">
            {/* Left dashed line */}
            <div
              className="flex-1"
              style={{
                borderTop: "2px dashed transparent",
                borderImage:
                  "repeating-linear-gradient(to right, #D1D5DB 0 12px, transparent 12px 32px)",
                borderImageSlice: 1,
              }}
            />
            <h2 className="mx-4 text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#E3376D] to-[#ED814A] bg-clip-text text-transparent inline-block">
              Specialties
            </h2>
            {/* Right dashed line */}
            <div
              className="flex-1"
              style={{
                borderTop: "2px dashed transparent",
                borderImage:
                  "repeating-linear-gradient(to right, #D1D5DB 0 12px, transparent 12px 32px)",
                borderImageSlice: 1,
              }}
            />
          </div>

          <p className="text-xs md:text-sm text-[#4B4B4B] max-w-xl mx-auto">
            Max Healthcare understands the challenges of seeking treatment
            abroad. Our tailored services ensure a seamless experience for
            international patients.
          </p>
        </div>
        {/* Specialties Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-x-6 md:gap-y-9 gap-x-3 gap-y-6">
          {specialties.map((item, idx) => (
            <div
              key={idx}
              className="bg-white hover:bg-gradient-to-r from-[#E3376D] to-[#ED814A] p-[1px] rounded-xl flex items-center justify-center"
            >
              <button
                key={item.label}
                className="relative flex items-center text-[10px] md:text-base gap-2 px-4 py-3 rounded-xl border border-[#000000]/10 bg-white text-black font-semibold overflow-hidden transition w-full"
              >
                {/* Gradient border overlay, visible only on hover */}
                <span
                  className="pointer-events-none absolute inset-0 rounded-xl border border-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(white, white) padding-box, linear-gradient(90deg, #E3376D, #ED814A) border-box",
                  }}
                />
                <span className="z-10">
                  <Image src={item.icon} alt="icon" width={20} height={20} />
                </span>
                <span className="z-10">{item.label}</span>
              </button>
            </div>
          ))}

          {/* View All Button Fills Last Cell */}
          <button className="md:flex hidden items-center justify-between px-4 py-3 rounded-lg border border-[#34ACE1] text-[#34ACE1] bg-[#F9FDFF] font-semibold">
            View All
            <div className="bg-[#34ACE1] rounded-full p-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="white"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
        {/* mobile view all button */}
        <div className="md:hidden w-full flex items-center justify-center mt-5">
          <button className="flex items-center text-xs justify-between px-4 py-3 rounded-lg border border-[#34ACE1] text-[#34ACE1] bg-[#F9FDFF] font-semibold w-[200px]">
            View All
            <div className="bg-[#34ACE1] rounded-full p-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="white"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Spacer for fixed form on right */}
      <div
        className="hidden md:block"
        style={{
          width: FORM_WIDTH,
          minWidth: FORM_WIDTH,
          flexShrink: 0,
          height: "1px",
        }}
      />
    </section>
  );
};

export default SpecialtiesSection;
