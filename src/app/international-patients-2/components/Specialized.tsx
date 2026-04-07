"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Switched to Arrow for thinner style matching screenshot

// --- Types & Data ---
type Program = {
  id: string;
  title: string;
  icon: React.ReactNode;
};

const PROGRAMS: Program[] = [
  {
    id: "1",
    title: "Bone Marrow\nTransplantation (BMT)",
    icon: <Image src={"/svg/bone.svg"} alt="icon" width={38} height={38} />,
  },
  {
    id: "2",
    title: "Kidney\nTransplant",
    icon: <Image src={"/svg/kidney.svg"} alt="icon" width={38} height={38} />,
  },
  {
    id: "3",
    title: "Brain Surgery\n(Neurosurgery)",
    icon: <Image src={"/svg/brain.svg"} alt="icon" width={38} height={38} />,
  },
  {
    id: "4",
    title: "Spine\nSurgery",
    icon: <Image src={"/svg/spine.svg"} alt="icon" width={38} height={38} />,
  },
  {
    id: "5",
    title: "Heart Valve\nReplacement",
    icon: <Image src={"/svg/heart.svg"} alt="icon" width={38} height={38} />,
  },
  {
    id: "6",
    title: "In Vitro\nFertilization (IVF)",
    icon: <Image src={"/svg/in.svg"} alt="icon" width={38} height={38} />,
  },
  {
    id: "7",
    title: "Robotic-Assisted\nSurgery",
    icon: <Image src={"/svg/robotic.svg"} alt="icon" width={38} height={38} />,
  },
];

// --- INTERNAL CARD COMPONENT ---
const ProgramCard = ({ program }: { program: Program }) => (
  <div className="group relative flex h-[190px] w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-md">
    
    {/* Background Image Setup */}
    <div
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
      style={{
        backgroundImage: "url('/specialities/specialities-card-bg.png')",
        backgroundColor: "#F2F9FD", // Soft fallback color
      }}
    />

    {/* Content Container */}
    <div className="relative z-10 flex flex-col items-center">
      {/* White Icon Circle */}
      <div className="mb-4 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
        {program.icon}
      </div>

      {/* Title */}
      <h3 className="whitespace-pre-line text-center text-[15px] font-medium text-gray-900 leading-snug">
        {program.title}
      </h3>
    </div>
  </div>
);

const AdvancedSurgicalSpecialties: React.FC = () => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-[32px] font-medium text-gray-900 mb-3">
            Advanced Surgical Specialties
          </h2>
          <p className="text-[15px] text-gray-500 max-w-2xl mx-auto">
            Comprehensive surgical and post-operative care for complex medical procedures.
          </p>
        </div>

        <div className="relative group/slider">
          
          {/* Swiper Configuration */}
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl, nextEl }}
            spaceBetween={20}
            slidesPerView={1.2} 
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 }, 
            }}
            className="!py-4 !px-1"
          >
            {PROGRAMS.map((program) => (
              <SwiperSlide key={program.id} className="!h-auto">
                <ProgramCard program={program} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* --- NAVIGATION ARROWS --- */}
          
          {/* Desktop Left Arrow */}
          <button
            ref={(node) => setPrevEl(node)}
            className="hidden md:flex absolute -left-5 top-1/2 z-20 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-gray-50 hover:text-blue-500 transition-colors disabled:opacity-0 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>

          {/* Desktop Right Arrow */}
          <button
            ref={(node) => setNextEl(node)}
            className="hidden md:flex absolute -right-5 top-1/2 z-20 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-gray-50 hover:text-blue-500 transition-colors disabled:opacity-0 disabled:cursor-not-allowed"
          >
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>

          {/* Mobile Arrows (Bottom Center) */}
          <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
            <button
              onClick={() => prevEl?.click()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 hover:bg-gray-50 active:scale-95 transition-transform"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => nextEl?.click()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#34ACE1] border border-[#34ACE1] shadow-sm text-white hover:bg-blue-500 active:scale-95 transition-transform"
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdvancedSurgicalSpecialties;