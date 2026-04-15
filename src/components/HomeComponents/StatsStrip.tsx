"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

type StatItem = {
  value: string;
  label: string;
  subLabel: string;
  icon: string;
};

const stats: StatItem[] = [
  {
    value: "30",
    label: "Specialties",
    subLabel: "Medical Specialties",
    icon: "/home/stats1.svg",
  },
  {
    value: "65",
    label: "Countries",
    subLabel: "Patient From 65+ Countries",
    icon: "/home/stats2.svg",
  },
  {
    value: "15K",
    label: "Patients",
    subLabel: "International Patient Served",
    icon: "/home/stats3.svg",
  },
  {
    value: "600",
    label: "Beds",
    subLabel: "Beds",
    icon: "/home/stats4.svg",
  },
];

const StatCard: React.FC<{
  item: StatItem;
  isMobile?: boolean;
  showRightBorder?: boolean;
}> = ({ item, isMobile = false, showRightBorder = false }) => (
  <div
    className={`relative flex flex-col gap-2 h-full bg-white ${
      isMobile
        ? "px-8 py-10 rounded-[32px] border border-[#EFEFEF] shadow-sm" // Increased px-8 to keep text away from edges/arrows
        : showRightBorder
        ? "px-8 py-12 border-r border-[#EFEFEF]" // Desktop styling
        : "px-8 py-12"
    }`}
  >
    {/* Floating Icon Circle */}
    <div
      className={`absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#EFEFEF] bg-white shadow-sm z-10 ${
        isMobile ? "left-6" : "left-8" 
      }`}
    >
      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#F5F5F5]">
        <Image
          src={item.icon}
          alt={item.label}
          width={28}
          height={28}
          className="object-contain"
        />
      </div>
    </div>

    {/* Content */}
    <div className="flex items-baseline gap-1 mt-6">
      <span className="text-6xl font-bold text-[#BFBFBF]">
        {item.value}
        <span className="bg-gradient-to-r from-[#E85F7F] to-[#ED835A] bg-clip-text text-transparent">
          +
        </span>
      </span>
    </div>
    {/* flex-grow ensures this pushes down evenly if we add bottom elements later, making card heights stretch nicely */}
    <p className="max-w-[200px] text-xl font-semibold text-[#4B4B4B] leading-tight flex-grow">
      {item.subLabel}
    </p>
  </div>
);

export const StatsStrip: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 overflow-hidden" id="statistics">
      {/* --- DESKTOP / TABLET VIEW (Continuous Strip - Unchanged) --- */}
      <div className="mx-auto hidden max-w-[1200px] border border-[#EFEFEF] bg-white shadow-sm sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <StatCard
            key={item.label}
            item={item}
            isMobile={false}
            showRightBorder={index !== stats.length - 1}
          />
        ))}
      </div>

      {/* --- MOBILE VIEW (1.25 Cards with Arrows) --- */}
      <div className="mx-auto block sm:hidden relative px-6 w-full">
        <div className="relative pt-12 pb-4">
          
          {/* Custom Navigation Arrows - Pushed outward with -left-2 and -right-2 */}
          <button className="swiper-button-prev-custom absolute -left-2 top-[55%] -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#EFEFEF] bg-white shadow-lg text-gray-800 transition-colors hover:bg-gray-50">
            <ArrowLeft size={18} strokeWidth={1.5} />
          </button>
          
          <button className="swiper-button-next-custom absolute -right-2 top-[55%] -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#EFEFEF] bg-white shadow-lg text-gray-800 transition-colors hover:bg-gray-50">
            <ArrowRight size={18} strokeWidth={1.5} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            slidesPerView={1.25} // Tuned to 1.25 to give arrows enough safe space
            centeredSlides={true}
            spaceBetween={16} 
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="!overflow-visible" 
          >
            {stats.map((item) => (
              // !h-auto ensures all slides stretch to equal heights
              <SwiperSlide key={item.label} className="py-2 !h-auto">
                <StatCard item={item} isMobile={true} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};