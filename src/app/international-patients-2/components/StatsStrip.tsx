"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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
    subLabel: "Delivering advanced medical care across 30+ specialties",
    icon: "/home/stats1.svg",
  },
  {
    value: "65",
    label: "Countries",
    subLabel: "Trusted by patients from over 65 countries worldwide",
    icon: "/home/stats2.svg",
  },
  {
    value: "5K",
    label: "Patients",
    subLabel: "Providing high‑quality treatment to more than 5,000 patients",
    icon: "/home/stats3.svg",
  },
  {
    value: "600",
    label: "Beds",
    subLabel: "Equipped with 600+ modern, fully managed hospital beds",
    icon: "/home/stats4.svg",
  },
];

const StatCard: React.FC<{ item: StatItem; showRightBorder?: boolean }> = ({
  item,
  showRightBorder = true,
}) => (
  <div
    className={`relative flex flex-col gap-2 border-[#EFEFEF] px-8 py-10 ${
      showRightBorder ? "border-b sm:border-b-0 lg:border-r" : ""
    }`}
  >
    <div className="absolute -top-8 flex items-center justify-center rounded-full border border-[#EFEFEF] bg-white p-3">
      <Image
        src={item.icon}
        alt={item.label}
        width={32}
        height={32}
        className="h-8 w-8"
      />
    </div>

    <div className="flex items-baseline gap-1">
      <span className="text-5xl font-bold text-[#333]">
        {item.value}
        <span className="text-[#ED7F4B]">+</span>
      </span>
    </div>
    <p className="max-w-xs text-sm text-[#4B4B4B]">{item.subLabel}</p>
  </div>
);

export const StatsStrip: React.FC = () => {
  return (
    <section className="w-full bg-white py-5 md:py-12">
      {/* Desktop / Tablet: original grid */}
      <div className="mx-auto hidden max-w-[1200px] grid-cols-1 border border-[#EFEFEF] bg-white shadow-sm sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <StatCard
            key={item.label}
            item={item}
            showRightBorder={index !== stats.length - 1}
          />
        ))}
      </div>

      {/* Mobile: Swiper */}
      <div className="mx-auto block max-w-[360px] sm:hidden">
        <div className="relative">
          {/* Arrows over card like screenshot */}
          <button
            className="stats-prev absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-md"
            aria-label="Previous stat"
          >
            ←
          </button>
          <button
            className="stats-next absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full hover:bg-[#21a9ff] hover:text-white shadow-md"
            aria-label="Next stat"
          >
            →
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: ".stats-prev", nextEl: ".stats-next" }}
            slidesPerView={1}
            spaceBetween={16}
            className="stats-swiper"
          >
            {stats.map((item) => (
              <SwiperSlide key={item.label}>
                <div className="border border-[#EFEFEF] bg-white shadow-sm mt-10">
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
