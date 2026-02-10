"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Data ---
type TechSlide = {
  id: number;
  image: string;
  title: string;
};

const TECH_SLIDES: TechSlide[] = [
  {
    id: 1,
    image: "/technologies/siemens.png",
    title: "Siemens Healthineers PET CT Scan",
  },
  {
    id: 2,
    image: "/technologies/ge.png",
    title: "GE 256 Slice CT-Scan",
  },
  {
    id: 3,
    image: "/technologies/hologic.png",
    title: "Hologic Selenia Dimensions 3D Mammography System",
  },
  {
    id: 4,
    image: "/technologies/ge2.png",
    title: "GE Architect 3.0T Wide-Bore MRI Scanner",
  },
];

const AdvancedMedicalTechnologies: React.FC = () => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-[1400px] px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-medium text-gray-900 md:text-4xl">
            Advanced Medical Technologies
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-500 md:text-base">
            Advanced medical equipment enabling accurate diagnosis, precise
            treatment, and better outcomes.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group px-0 md:px-4">
          {/* Navigation Arrows (Visible on both Mobile & Desktop as per screenshots) */}
          <button
            ref={(node) => setPrevEl(node)}
            className="absolute -left-2 md:-left-6 top-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            ref={(node) => setNextEl(node)}
            className="absolute -right-2 md:-right-6 top-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-100"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl, nextEl }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="!py-4" // Padding for shadows
          >
            {TECH_SLIDES.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl md:rounded-3xl bg-gray-100">
                  {/* --- CORRECTED IMAGE SECTION --- */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Floating Title Box */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="rounded-xl bg-white flex items-center justify-center shadow-md h-[60px]">
                      <p className="text-xs font-medium text-gray-900 leading-snug md:text-sm max-w-[280px] text-center">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center w-full">
          <button className="group flex items-center gap-2 px-8 py-3 rounded-xl border border-[#34ACE1] bg-white text-[#34ACE1] font-semibold hover:bg-blue-50 transition-colors shadow-sm">
            View All
            <span className="bg-[#34ACE1] text-white rounded-full p-1 w-5 h-5 flex items-center justify-center text-xs group-hover:bg-[#34ACE1] group-hover:text-white">
              {">"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvancedMedicalTechnologies;
