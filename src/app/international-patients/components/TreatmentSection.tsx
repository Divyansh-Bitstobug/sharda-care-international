"use client";
import Image from "next/image";
import React, { useState } from "react";

const FORM_WIDTH = 370; // same width as your fixed form sidebar

const treatments = [
  {
    icon: "/assets/home/treatment1.svg",
    price: "3500 USD",
    desc: "ABO Incompatible Kidney Transplant",
    costText: "Cost in India",
  },
  {
    icon: "/assets/home/treatment2.svg",
    price: "4700 USD",
    desc: "Allogenic Stem Cell Transplant",
    costText: "Cost in India",
  },
  {
    icon: "/assets/home/treatment3.svg",
    price: "3500 USD",
    desc: "Angioplasty",
    costText: "Cost in India",
  },
  {
    icon: "/assets/home/treatment4.svg",
    price: "3500 USD",
    desc: "Anterio Cervical Discectomy and Fusion (ACDF)",
    costText: "Cost in India",
  },
  {
    icon: "/assets/home/treatment5.svg",
    price: "3500 USD",
    desc: "Anterior Cruciate Ligament",
    costText: "Cost in India",
  },
  {
    icon: "/assets/home/treatment6.svg",
    price: "3500 USD",
    desc: "Aortic/Mitral Valve Replacement",
    costText: "Cost in India",
  },
  {
    icon: "/assets/home/treatment6.svg",
    price: "3500 USD",
    desc: "ASD / VSD Closure",
    costText: "Cost in India",
  },
  {
    icon: "/assets/home/treatment6.svg",
    price: "3500 USD",
    desc: "ASD Closure / Device (Adult)",
    costText: "Cost in India",
  },
];

const TreatmentsSection: React.FC = () => {
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
              Treatments
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
            ShardaCare understands the challenges of seeking treatment abroad.
            Our tailored services ensure a seamless experience for international
            patients.
          </p>
        </div>
        {/* Treatments Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-9">
          {treatments.map((item, idx) => (
            <div
              key={idx}
              className="bg-white hover:bg-gradient-to-r from-[#E3376D] to-[#ED814A] p-[1px] rounded-xl flex items-center justify-center"
            >
              <button
                key={item.desc}
                className="flex flex-col justify-between px-3 py-4 min-h-[120px] w-full h-full rounded-xl border font-normal transition text-left bg-white border-[#000000]/10"
                style={{ position: "relative" }}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white">
                    <Image src={item.icon} alt="icon" height={20} width={20} />
                  </span>
                  <span className="text-xs sm:text-lg font-semibold text-black ml-2 text-right leading-[14px]">
                    {item.price}<br /><span className="font-normal text-sm">Onwards</span>
                  </span>
                </div>
                <div className="text-[10px] sm:text-sm font-normal text-black mb-2 leading-snug">
                  {item.desc}
                </div>
                <div className="text-[10px] sm:text-base font-medium text-[#34ACE1] cursor-pointer">
                  {item.costText}
                </div>
              </button>
            </div>
          ))}
          {/* View All Button */}
          <div className="flex items-end">
            <button className=" hidden md:flex items-center justify-between px-4 py-3 w-[260px] h-[50px] rounded-lg border border-[#34ACE1] text-[#34ACE1] bg-[#F9FDFF] font-semibold">
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
        {/* mobile view all button */}
      <div className="md:hidden w-full flex items-center justify-center">
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

export default TreatmentsSection;
