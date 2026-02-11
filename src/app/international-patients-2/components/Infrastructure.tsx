"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Data ---
type Facility = {
  id: number;
  category: string;
  title: string;
  image: string;
};

const FACILITIES: Facility[] = [
  {
    id: 1,
    category: "Exterior",
    title: "Advanced Healthcity Infrastructure",
    image: "/infrastructure/advanced.jpg",
  },
  {
    id: 2,
    category: "Patient Experience",
    title: "Grand Welcoming Entrance",
    image: "/infrastructure/grand.png",
  },
  {
    id: 3,
    category: "Clinical Excellence",
    title: "High-tech Surgical Unit",
    image: "/infrastructure/high.png",
  },
  {
    id: 4,
    category: "Amenities",
    title: "Nutritious Dining Space",
    image: "/infrastructure/nutritious.png",
  },
  {
    id: 5,
    category: "Luxury Recovery",
    title: "Specialized Comfort Bed",
    image: "/infrastructure/specialized.png",
  },
  {
    id: 6,
    category: "Global Services",
    title: "Premium International Lounge",
    image: "/infrastructure/premium.png",
  },
  {
    id: 7,
    category: "Accommodation",
    title: "Modern Recovery Room",
    image: "/infrastructure/modern.png",
  },
  {
    id: 8,
    category: "Luxury Recovery",
    title: "Elite Private Suite",
    image: "/infrastructure/elite.png",
  },
  {
    id: 9,
    category: "Critical Care",
    title: "Rapid Assessment Zone",
    image: "/infrastructure/rapid.png",
  },
  {
    id: 10,
    category: "Clinical Excellence",
    title: "Precision Surgical Suite",
    image: "/infrastructure/precision.png",
  },
  {
    id: 11,
    category: "Access",
    title: "24/7 Ambulance Access",
    image: "/infrastructure/24.png",
  },
];

// --- Card Component ---
const FacilityCard = ({ item }: { item: Facility }) => (
  <div className="h-full w-full overflow-hidden rounded-3xl border border-gray-100 bg-white p-3 transition-all duration-300 hover:shadow-md">
    {/* Image Wrapper */}
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-100">
      {/* Placeholder div - Replace with <Image /> */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
        <svg
          className="h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      {/* Actual Image */}
      <Image src={item.image} alt={item.title} fill className="object-cover" />
    </div>

    {/* Content */}
    <div className="px-1 py-4 text-left">
      <span className="mb-1 block text-xs font-medium tracking-wide text-[#21A9FF]">
        {item.category}
      </span>
      <h3 className="text-xl font-medium text-gray-900 leading-tight">
        {item.title}
      </h3>
    </div>
  </div>
);

// --- Main Section ---
const InfrastructureSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Header */}
        <div className="mb-12 px-4 text-center">
          <h2 className="mb-4 text-3xl font-medium text-gray-900 md:text-4xl">
            State-of-the-Art Infrastructure at{" "}
            <br className="hidden md:block" />
            ShardaCare Healthcity
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-500 md:text-base">
            World-class medical facilities and high-tech surgical suites
            engineered for precision and safety.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            // 1. USE CSS SELECTORS FOR NAVIGATION
            navigation={{ prevEl: ".infra-prev", nextEl: ".infra-next" }}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            loop={true}
            spaceBetween={16}
            slidesPerView={1.15} // Mobile: 1 full + slivers
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 32 }, // Desktop: 2 centered
              1280: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="!pb-12 px-4 md:px-0 infrastructure-swiper"
          >
            {FACILITIES.map((item) => (
              <SwiperSlide
                key={item.id}
                className="h-auto opacity-90 transition-opacity duration-300 [&.swiper-slide-active]:opacity-100"
              >
                <FacilityCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Arrows - Moved to Bottom & Hidden on Mobile */}
        <div className="mt-8 hidden items-center justify-center gap-4 md:flex">
          {/* 2. ADD CORRESPONDING CLASS NAMES TO BUTTONS */}
          <button
            className="infra-prev flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-[#21A9FF] hover:text-[#21A9FF] disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="infra-next flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-[#21A9FF] hover:text-[#21A9FF] disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Custom Styles */}
        <style jsx global>{`
          .infrastructure-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #e5e7eb; /* Gray-200 */
            opacity: 1;
            transition: all 0.3s ease;
          }
          .infrastructure-swiper .swiper-pagination-bullet-active {
            background: #21a9ff; /* Brand Blue */
            width: 24px;
            border-radius: 4px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default InfrastructureSection;