"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

type AwardSlide = {
  id: number;
  year: string;
  badgeImage: string;
  badgeAlt: string;
  title: string;
  description: string;
  bottomIcon: string;
  bottomLabel: string;
  bottomText: string;
};

const AWARDS: AwardSlide[] = [
  {
    id: 1,
    year: "2022",
    badgeImage: "/home/2022.png",
    badgeAlt: "32 Best Hospital 2022",
    title: "Internationally recognized for our commitment to excellence, safety, and quality in healthcare delivery.",
    description:
      "Internationally recognized for our commitment to excellence, safety, and quality in healthcare delivery.",
    bottomIcon: "/home/nabh.png",
    bottomLabel: "NABH Certified",
    bottomText: "National Accreditation Board for Healthcare Excellence",
  },
  {
    id: 2,
    year: "2023",
    badgeImage: "/home/2023.png",
    badgeAlt: "32 Best Hospital 2023",
    title: "",
    description:
      "Internationally recognized for our commitment to excellence, safety, and quality in healthcare delivery.",
    bottomIcon: "/home/quality.png",
    bottomLabel: "Quality Certified",
    bottomText: "Accredited for Global Healthcare & Patient Safety Standards",
  },
  {
    id: 3,
    year: "2024",
    badgeImage: "/home/2024.png",
    badgeAlt: "32 Best Hospital 2024",
    title: "",
    description:
      "Internationally recognized for our commitment to excellence, safety, and quality in healthcare delivery.",
    bottomIcon: "/home/govt.png",
    bottomLabel: "Govt. Healthcare Certified",
    bottomText: "Approved by National Health & Medical Authority",
  },
  {
    id: 4,
    year: "2025",
    badgeImage: "/home/2025.png",
    badgeAlt: "32 Best Hospital 2025",
    title: "",
    description:
      "Internationally recognized for our commitment to excellence, safety, and quality in healthcare delivery.",
    bottomIcon: "/awards/global.png",
    bottomLabel: "Global Excellence Certified",
    bottomText: "Recognized for world‑class clinical outcomes and patient care",
  },
];

const AwardsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">
        <Image 
            src="/home/r.png"
            alt="bg"
            width={500}
            height={600}
            className="absolute -right-20 -bottom-6 md:block hidden"
        />
        <Image 
            src="/home/l.png"
            alt="bg"
            width={500}
            height={600}
            className="absolute -left-20 -bottom-6 md:block hidden"
        />
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-medium text-gray-900">
            Awards & Certifications
          </h2>
          <p className="mt-2 text-xs text-gray-500">
            Internationally recognized for our commitment to excellence, safety,
            and quality in healthcare delivery.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="mt-10 hidden md:block">
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 max-w-6xl">
            {AWARDS.map((award) => (
              <div key={award.id} className="flex items-start gap-4">
                <Image
                  src={award.badgeImage}
                  alt={award.badgeAlt}
                  width={120}
                  height={120}
                  className="h-[180px] w-auto object-cover object-top"
                />
                <div className="space-y-1 pt-6">
                  <p className="text-2xl font-oswald">
                    {award.year}
                  </p>
                  <p className="text-[#4B4B4B] max-w-xs">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom certifications row */}
          <div className="mt-12 flex flex-wrap items-start justify-center gap-16">
            {AWARDS.slice(0, 3).map((award) => (
              <div
                key={`bottom-${award.id}`}
                className="flex flex-col items-center text-center min-w-[260px] max-w-[260px]"
              >
                <Image
                  src={award.bottomIcon}
                  alt={award.bottomLabel}
                  width={70}
                  height={70}
                  className="h-[126px] w-[126px] object-contain"
                />
                <p className="mt-3 text-xl font-medium text-[#333333]">
                  {award.bottomLabel}
                </p>
                <p className="mt-1 text-[15px] leading-snug text-[#4B4B4B]">
                  {award.bottomText}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swiper */}
        <div className="mt-10 md:hidden">
          {/* Top Swiper: wreath + year + text */}
          <div className="relative rounded-3xl bg-white shadow-sm pb-8">
            <button
              className="award-prev absolute left-3 top-[35%] z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-600 shadow-md"
              aria-label="Previous award"
            >
              ←
            </button>
            <button
              className="award-next absolute right-3 top-[35%] z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#21a9ff] text-white shadow-md"
              aria-label="Next award"
            >
              →
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{ prevEl: ".award-prev", nextEl: ".award-next" }}
              slidesPerView={1}
              spaceBetween={24}
              className="award-swiper"
            >
              {AWARDS.map((award) => (
                <SwiperSlide key={award.id}>
                  <div className="flex flex-col items-center text-center px-6 pt-4">
                    <Image
                      src={award.badgeImage}
                      alt={award.badgeAlt}
                      width={140}
                      height={140}
                      className="h-24 w-auto object-contain"
                    />
                    <p className="mt-4 text-sm font-semibold text-gray-900">
                      {award.year}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      {award.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Bottom Swiper: circular certification icons */}
          <div className="mt-8 relative pb-4">
            <button
              className="cert-prev absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-600 shadow-md"
              aria-label="Previous certification"
            >
              ←
            </button>
            <button
              className="cert-next absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#21a9ff] text-white shadow-md"
              aria-label="Next certification"
            >
              →
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{ prevEl: ".cert-prev", nextEl: ".cert-next" }}
              slidesPerView={1}
              spaceBetween={24}
              className="cert-swiper"
            >
              {AWARDS.slice(0, 3).map((award) => (
                <SwiperSlide key={`cert-${award.id}`}>
                  <div className="flex flex-col items-center text-center px-6">
                    <Image
                      src={award.bottomIcon}
                      alt={award.bottomLabel}
                      width={80}
                      height={80}
                      className="h-16 w-16 object-contain"
                    />
                    <p className="mt-3 text-xs font-semibold text-gray-900">
                      {award.bottomLabel}
                    </p>
                    <p className="mt-1 text-[10px] leading-snug text-gray-500">
                      {award.bottomText}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
