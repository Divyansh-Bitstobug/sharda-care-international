"use client";
import TechnologiesSwiper from "@/components/TechnologiesSwiper";
import Image from "next/image";
import React from "react";

const FORM_WIDTH = 370; // width reserved for the form sidebar

const technologies = [
  {
    img: "/assets/home/technologies1.png", // Replace with your image path
    title: "Varian TrueBeam Linear Accelerators (UNAC)",
    category: "Radiation Oncology",
  },
  {
    img: "/assets/home/technologies2.png",
    title: "GE 256 Slice CT-Scan",
    category: "Diagnostic Radiology",
  },
  {
    img: "/assets/home/technologies3.png",
    title: "Siemens Healthineers PET CT Scan",
    category: "Nuclear Oncology",
  },
  {
    img: "/assets/home/technologies4.png",
    title: "Hologic Selenia Dimensions 3D Mammography System",
    category: "Breast Oncology",
  },
];

const categoryColors: Record<string, string> = {
  "Radiation Oncology": "text-blue-400",
  "Diagnostic Radiology": "text-blue-400",
  "Nuclear Oncology": "text-blue-400",
  "Breast Oncology": "text-blue-400",
};

const TechnologiesSection: React.FC = () => (
  <section className="flex flex-row w-full px-8 py-14 items-start justify-between bg-white max-w-[1300px]">
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
            All Technologies
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
        <p className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto">
          ShardaCare understands the challenges of seeking treatment abroad. Our
          tailored services ensure a seamless experience for international
          patients.
        </p>
      </div>
      {/* Technologies Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-9">
        {technologies.map((item, idx) => (
          <div
            key={idx}
            className="bg-white hover:bg-gradient-to-r from-[#E3376D] to-[#ED814A] p-[1px] rounded-xl flex items-center justify-center"
          >
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col p-0 transition group w-full h-full"
              style={{ minHeight: 210 }}
            >
              <div className="w-full h-[230px] rounded-t-xl overflow-hidden flex items-center justify-center p-3 rounded-xl">
                <Image
                  height={1000}
                  width={1000}
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="px-4 py-2">
                <div className="text-base font-medium mb-1">{item.title}</div>
                <div
                  className={`text-[13px] mt-10 ${
                    categoryColors[item.category]
                  }`}
                >
                  {item.category}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden block">
        <TechnologiesSwiper
          technologies={technologies}
          categoryColors={categoryColors}
        />
      </div>
      {/* View All Button */}
      <div className="w-full flex items-center justify-center">
        <button className="hidden md:flex items-center justify-between px-4 py-3 w-[260px] rounded-lg border border-[#34ACE1] text-[#34ACE1] bg-[#F9FDFF] font-semibold mt-8">
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
    {/* Spacer for right sidebar */}
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

export default TechnologiesSection;
