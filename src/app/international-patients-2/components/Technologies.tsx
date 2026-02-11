"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// 1. IMPORT PAGINATION
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    image: "/technologies/ge2.jpg",
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
          
          {/* Navigation Arrows - Hidden on Mobile (hidden md:flex) */}
          <button
            ref={(node) => setPrevEl(node)}
            className="absolute -left-2 md:-left-6 top-1/2 z-20 hidden h-10 w-10 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-100 md:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            ref={(node) => setNextEl(node)}
            className="absolute -right-2 md:-right-6 top-1/2 z-20 hidden h-10 w-10 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-100 md:flex"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Swiper */}
          <Swiper
            // 2. Add Pagination Module
            modules={[Navigation, Pagination]}
            navigation={{ prevEl, nextEl }}
            // 3. Configure Pagination (Dots)
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            // 4. Add padding bottom for dots on mobile, remove it on desktop
            className="!pb-12 md:!pb-4 tech-swiper"
          >
            {TECH_SLIDES.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <div className="relative aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden rounded-2xl md:rounded-3xl bg-gray-100">
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
                    <div className="rounded-xl bg-white flex items-center justify-center shadow-md h-[60px] px-2">
                      <p className="text-xs font-medium text-gray-900 leading-snug md:text-sm text-center line-clamp-2">
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
        <div className="mt-8 flex justify-center w-full">
          <button className="group flex items-center gap-2 px-8 py-3 rounded-xl border border-[#34ACE1] bg-white text-[#34ACE1] font-semibold hover:bg-blue-50 transition-colors shadow-sm">
            View All
            <span className="bg-[#34ACE1] text-white rounded-full p-1 w-5 h-5 flex items-center justify-center text-xs group-hover:bg-[#34ACE1] group-hover:text-white">
              {">"}
            </span>
          </button>
        </div>
      </div>

      {/* Styles for Pagination Dots (Mobile Only) */}
      <style jsx global>{`
        .tech-swiper .swiper-pagination-bullet {
          background: #d1d5db; /* Gray-300 */
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .tech-swiper .swiper-pagination-bullet-active {
          background: #34ACE1; /* Theme Blue */
          width: 24px;
          border-radius: 4px;
        }

        /* HIDE PAGINATION ON DESKTOP */
        @media (min-width: 768px) {
          .tech-swiper .swiper-pagination {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AdvancedMedicalTechnologies;