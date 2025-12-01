"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

type Program = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const PROGRAMS: Program[] = [
  {
    id: 1,
    title: "Bone Marrow Transplant",
    description: "Advanced stem cell therapy for complex blood disorders.",
    icon: "/home/bone.svg",
  },
  {
    id: 2,
    title: "Kidney Transplant",
    description: "Minimally invasive surgery ensuring faster patient recovery.",
    icon: "/home/kidney.svg",
  },
  {
    id: 3,
    title: "Liver Transplant",
    description: "Expert care including living donor and cadaveric options.",
    icon: "/home/liver.svg",
  },
];

const SpecializedTransplantPrograms: React.FC = () => {
  const renderCard = (program: Program) => (
    <div
      className={`
        flex h-full flex-col justify-between rounded-2xl border bg-white px-8 py-8 text-center
        transition-all border-[#eaedf4] hover:border-[#ff7268] hover:shadow-[0_0_0_1px_rgba(255,114,104,0.25)]
      `}
    >
      <div className="flex">
        <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f7f9fc]">
          <span className="text-xl">
            <Image
              src={program.icon}
              alt={program.title}
              width={32}
              height={32}
            />
          </span>
        </div>

        <h3 className="text-sm md:text-lg font-semibold text-gray-900 max-w-[120px] text-left">{program.title}</h3>
      </div>
      <p className="mt-3 text-[10px] md:text-sm text-gray-500 text-left">{program.description}</p>
    </div>
  );

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-medium text-gray-900">
            Specialized Transplant Programs
          </h2>
          <p className="mt-2 text-[10px] md:text-sm text-gray-500">
            Comprehensive surgical solutions and post‑operative care for a wide
            range of complex transplant procedures.
          </p>
        </div>

        {/* Desktop */}
        <div className="mt-10 hidden gap-6 md:grid md:grid-cols-3">
          {PROGRAMS.map((p) => (
            <div key={p.id}>{renderCard(p)}</div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="mt-8 md:hidden">
          <div className="relative rounded-2xl bg-white py-6">
            <button
              className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
              onClick={() => {
                const swiperEl = document.querySelector(
                  ".transplant-swiper"
                ) as any;
                swiperEl?.swiper?.slidePrev();
              }}
            >
              <span className="text-lg">←</span>
            </button>

            <button
              className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#21a9ff] text-white shadow-md"
              onClick={() => {
                const swiperEl = document.querySelector(
                  ".transplant-swiper"
                ) as any;
                swiperEl?.swiper?.slideNext();
              }}
            >
              <span className="text-lg">→</span>
            </button>

            <Swiper className="transplant-swiper !px-10" slidesPerView={1} spaceBetween={24}>
              {PROGRAMS.map((p) => (
                <SwiperSlide key={p.id}>{renderCard(p)}</SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedTransplantPrograms;
