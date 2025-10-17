"use client";
import DoctorsSwiperGrid from "@/components/DoctorSwiperGrid";
import Image from "next/image";
import React from "react";

const FORM_WIDTH = 370;

const doctors = [
  {
    name: "Dr. Anil Thakwani",
    specialty: "Oncology",
    experience: "25+ Years of Experience",
    img: "/assets/home/anil.png",
    actions: true,
  },
  {
    name: "Dr. (Prof.) Neerja Goel",
    specialty: "Obstetrics and Gynaecology",
    experience: "42+ Years of Experience",
    img: "/assets/home/neerja.png",
  },
  {
    name: "Dr. Atampreet Singh",
    specialty: "Neurology",
    experience: "25+ Years of Experience",
    img: "/assets/home/atampreet.png",
  },
  {
    name: "Dr. Amit Vij",
    specialty: "Paediatrics",
    experience: "18+ Years of Experience",
    img: "/assets/home/amit.png",
  },
  {
    name: "Dr. Chirag Tandon",
    specialty: "Internal Medicine",
    experience: "20+ Years of Experience",
    img: "/assets/home/chirag.png",
  },
  {
    name: "Dr. Bheem Raj Gupta",
    specialty: "Nephrology",
    experience: "17+ Years of Experience",
    img: "/assets/home/bhim.png",
  },
  {
    name: "Dr. Ravindra Srivastava",
    specialty: "Neurosurgery",
    experience: "23+ Years of Experience",
    img: "/assets/home/ravindra.png",
  },
  {
    name: "Dr. Vishal Jain",
    specialty: "Neurosurgery",
    experience: "20+ Years of Experience",
    img: "/assets/home/vishal.png",
  },
];

const MedicalExpertsSection: React.FC = () => {
  return (
    <div className="bg-[#16B5FB]/5 w-screen flex items-center justify-center">
      <section className="flex flex-row w-full px-8 py-12 items-start justify-between max-w-[1300px]">
        <div className="flex-1 max-w-5xl">
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
                Our Medical Experts
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
            <div className="w-full flex justify-center mb-2">
              <span className="border-t border-dashed w-64 border-gray-300"></span>
            </div>
            <p className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto">
              ShardaCare understands the challenges of seeking treatment abroad.
              Our tailored services ensure a seamless experience for
              international patients.
            </p>
          </div>
          {/* Doctors Grid */}
          <div className="flex w-full items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl">
              {doctors.map((d) => (
                <div
                  key={d.name}
                  className="bg-white hover:bg-gradient-to-r from-[#E3376D] to-[#ED814A] p-[1px] rounded-xl md:flex items-center justify-center hidden"
                >
                  <div
                    key={d.name}
                    className="flex flex-col border border-gray-200 rounded-xl shadow-sm bg-white overflow-hidden transition hover:border-pink-400 hover:shadow-lg w-full group"
                  >
                    {/* Image section with hover overlay */}
                    <div className="relative w-full h-[250px] bg-white flex items-center justify-center p-3 rounded-xl overflow-hidden">
                      <Image
                        src={d.img}
                        alt={d.name}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover rounded-xl object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
                      {/* Overlay actions - show only on hover */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {/* Download Button */}
                        <button className="flex items-center justify-between gap-2 px-3 py-2 bg-white rounded-lg shadow font-semibold text-black text-sm border border-gray-200 w-[140px]">
                          Download
                          <Image
                            src="/assets/download.svg"
                            alt="download"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                        </button>
                        {/* Share Button */}
                        <button className="flex items-center px-3 py-2 bg-white rounded-lg border border-gray-200 shadow text-black">
                          <svg
                            width="22"
                            height="22"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="black"
                            strokeWidth={2}
                          >
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <path d="M8.59 13.51l6.83 3.98M8.59 10.49l6.83-3.98" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Name and Specialty */}
                    <div className="px-3 pt-3 pb-2 text-left">
                      <div className="font-medium text-base text-black">
                        {d.name}
                      </div>
                      <div className="text-sm text-blue-500 mt-0.5">
                        {d.specialty}
                      </div>
                    </div>
                    {/* Experience row */}
                    <div className="flex items-center justify-center border-t border-gray-100 px-3 py-2 bg-white text-xs gap-2">
                      <div className="flex bg-[#F7F7F7] w-full h-full items-center justify-between p-2 rounded-lg">
                        <div className="flex gap-1">
                          <Image
                            src="/assets/home/cap.svg"
                            alt="icon"
                            height={20}
                            width={20}
                          />
                          <span className="font-semibold text-sm text-gray-700">
                            {d.experience.replace(/ Years of Experience$/, "")}
                          </span>
                        </div>
                        <span className="ml-1 text-gray-500 text-xs">
                          Years of Experience
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden block">
            <DoctorsSwiperGrid />
          </div>
          {/* View All Action */}
          <div className="md:flex hidden flex-col items-center justify-center mt-8">
            <div className="text-xs text-gray-400 mb-2">
              Explore All The Doctors by clicking View all
            </div>
            <button className="flex items-center justify-center px-6 py-2 rounded-lg border border-blue-300 text-blue-600 bg-white font-semibold">
              View All
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
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
    </div>
  );
};

export default MedicalExpertsSection;
