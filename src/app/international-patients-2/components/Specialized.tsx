"use client";

import React, { useState } from "react"; // 1. Import useState
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Bone,
  Activity,
  Brain,
  MoveVertical,
  HeartPulse,
  Baby,
  Heart,
  Bot,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

// --- Types & Data ---
type Program = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

const PROGRAMS: Program[] = [
  {
    id: "1",
    number: "01",
    title: "Bone Marrow Transplantation (BMT)",
    description:
      "Comprehensive care for complex hematological conditions and malignant blood disorders.",
    icon: (
      <Image
        src={"/svg/bone.svg"}
        alt="icon"
        width={1000}
        height={1000}
        className="w-8 h-8"
      />
    ),
    href: "#",
  },
  {
    id: "2",
    number: "02",
    title: "Kidney Transplant",
    description:
      "Minimally invasive surgery ensuring faster patient recovery and clinical outcomes.",
    icon: (
      <Image
        src={"/svg/kidney.svg"}
        alt="icon"
        width={1000}
        height={1000}
        className="w-8 h-8"
      />
    ),
    href: "#",
  },
  {
    id: "3",
    number: "03",
    title: "Brain Surgery (Neurosurgery)",
    description:
      "Precision neuro-navigation for complex tumors and vascular conditions.",
    icon: (
      <Image
        src={"/svg/brain.svg"}
        alt="icon"
        width={1000}
        height={1000}
        className="w-8 h-8"
      />
    ),
    href: "#",
  },
  {
    id: "4",
    number: "04",
    title: "Spine Surgery",
    description:
      "Minimally invasive techniques for spinal correction and long-term pain relief.",
    icon: (
      <Image
        src={"/svg/spine.svg"}
        alt="icon"
        width={1000}
        height={1000}
        className="w-8 h-8"
      />
    ),
    href: "#",
  },
  {
    id: "5",
    number: "05",
    title: "Heart Valve Replacement Surgery",
    description:
      "Advanced surgical and catheter-based options for valvular restoration.",
    icon: (
      <Image
        src={"/svg/heart.svg"}
        alt="icon"
        width={1000}
        height={1000}
        className="w-8 h-8"
      />
    ),
    href: "#",
  },
  {
    id: "6",
    number: "06",
    title: "In Vitro Fertilization (IVF)",
    description:
      "Compassionate fertility care utilizing the latest embryology technology.",
    icon: (
      <Image
        src={"/svg/in.svg"}
        alt="icon"
        width={1000}
        height={1000}
        className="w-8 h-8"
      />
    ),
    href: "#",
  },
  {
    id: "7",
    number: "07",
    title: "Transcatheter Aortic Valve Implantation (TAVI)",
    description:
      "Non-surgical valve replacement for high-risk cardiac patients.",
    icon: (
      <Image
        src={"/svg/transcatheter.svg"}
        alt="icon"
        width={1000}
        height={1000}
        className="w-8 h-8"
      />
    ),
    href: "#",
  },
  {
    id: "8",
    number: "08",
    title: "Robotic-Assisted Surgery",
    description:
      "Enhanced surgical precision with less pain and shorter hospital stays.",
    icon: (
      <Image
        src={"/svg/robotic.svg"}
        alt="icon"
        width={1000}
        height={1000}
        className="w-8 h-8"
      />
    ),
    href: "#",
  },
];

const ProgramCard = ({ program }: { program: Program }) => (
  <div className="group relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-100">
    <div className="mb-2 flex items-start justify-between">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F3FBFF] group-hover:bg-blue-50 transition-colors">
        {program.icon}
      </div>
      <span className="text-7xl font-semibold text-[#000000]/10 select-none">
        {program.number}
      </span>
    </div>
    <h3 className="mb-4 text-lg font-medium text-black leading-tight min-h-[54px] pt-2">
      {program.title}
    </h3>
    <div className="mb-4 h-px w-full bg-[#000000]/10"></div>
    <p className="text-sm text-[#4B4B4B] leading-relaxed flex-grow">
      {program.description}
    </p>
  </div>
);

const SpecializedTransplantPrograms: React.FC = () => {
  // 2. Create state to hold the button elements
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="w-full py-10 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">
            Specialized Transplant Programs
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Comprehensive surgical and post-operative care for complex
            transplant procedures.
          </p>
        </div>

        <div className="relative group/slider">
          {/* 3. Attach 'ref' using the state setter functions */}

          {/* Desktop Left Arrow */}
          <button
            ref={(node) => setPrevEl(node)}
            className="absolute -left-4 lg:-left-12 top-1/2 z-10 hidden md:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-600 shadow-md border border-gray-100 hover:text-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Desktop Right Arrow */}
          <button
            ref={(node) => setNextEl(node)}
            className="absolute -right-4 lg:-right-12 top-1/2 z-10 hidden md:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-600 shadow-md border border-gray-100 hover:text-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <Swiper
            modules={[Navigation]}
            // 4. Pass the state variables directly to navigation
            navigation={{ prevEl, nextEl }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
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

          {/* Mobile-Only Navigation Overlay */}
          <div className="flex md:hidden absolute top-1/2 w-full justify-between px-0 z-20 pointer-events-none -mt-4"></div>

          <button
            onClick={() => prevEl?.click()} // Programmatically click the main nav button
            className="md:hidden absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 -ml-3"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={() => nextEl?.click()} // Programmatically click the main nav button
            className="md:hidden absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-blue-400 shadow-md border border-blue-400 -mr-3"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecializedTransplantPrograms;
