"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Removed Navigation module
import "swiper/css";

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

const StatCard: React.FC<{ item: StatItem; showRightBorder?: boolean }> = ({
  item,
  showRightBorder = true,
}) => (
  <div
    className={`relative flex flex-col gap-2 px-8 py-10 bg-white ${
      showRightBorder
        ? "border-b sm:border-b-0 lg:border-r border-[#EFEFEF]"
        : ""
    }`}
  >
    {/* Floating Icon */}
    <div className="absolute -top-11 flex items-center justify-center rounded-full border border-[#EFEFEF] bg-white p-3 shadow-sm">
      <Image
        src={item.icon}
        alt={item.label}
        width={1000}
        height={1000}
        className="h-13 w-13"
      />
    </div>

    {/* Content */}
    <div className="flex items-baseline gap-1 mt-6">
      <span className="text-5xl font-bold text-[#BFBFBF]">
        {item.value}
        <span className="bg-gradient-to-r from-[#E85F7F] to-[#ED835A] bg-clip-text text-transparent">
          +
        </span>
      </span>
    </div>
    <p className="max-w-xs text-lg font-semibold text-[#4B4B4B]">
      {item.subLabel}
    </p>
  </div>
);

export const StatsStrip: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      {/* --- Desktop / Tablet: Original Grid (Unchanged) --- */}
      <div className="mx-auto hidden max-w-[1200px] grid-cols-1 border border-[#EFEFEF] bg-white shadow-sm sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <StatCard
            key={item.label}
            item={item}
            showRightBorder={index !== stats.length - 1}
          />
        ))}
      </div>

      {/* --- Mobile: Swiper Slider (Clean: No Arrows, No Gaps) --- */}
      <div className="mx-auto block max-w-[360px] sm:hidden px-4">
        <div className="relative pt-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={0} // No gap between slides
            loop={true}
            className="!overflow-visible"
          >
            {stats.map((item) => (
              <SwiperSlide key={item.label}>
                {/* Border wrapper for the card look */}
                <div className="border border-[#EFEFEF] bg-white shadow-sm rounded-sm">
                  <StatCard item={item} showRightBorder={false} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};