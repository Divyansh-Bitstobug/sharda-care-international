"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

type AwardSlide = {
  id: number;
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
    badgeImage: "/home/one.jpg",
    badgeAlt: "32 Best Hospital 2022",
    title: "Times Business Leader Awards 2025",
    description:
      "Received at The Times Business Leader Awards 2025 by Mr. Rishabh Gupta, Managing Director ShardaCare-Healthcity.",
    bottomIcon: "/home/nabh.png",
    bottomLabel: "NABH Certified",
    bottomText: "National Accreditation Board for Healthcare Excellence",
  },
  {
    id: 2,
    badgeImage: "/home/two.jpg",
    badgeAlt: "32 Best Hospital 2023",
    title: "Excellence in Healthcare Access & Affordability Award 2023",
    description:
      "Received at the “Innovation Summit Awards 2023,” held in New Delhi.",
    bottomIcon: "/home/quality.png",
    bottomLabel: "Quality Certified",
    bottomText: "Accredited for Global Healthcare & Patient Safety Standards",
  },
  {
    id: 3,
    badgeImage: "/home/three.jpg",
    badgeAlt: "32 Best Hospital 2024",
    title: "Best Integrated Smart Emergency Services Award 2025",
    description:
      "Received at the Best Integrated Smart Emergency Services Award at the Smart Hospitals & Diagnostics Summit & Awards 2025.",
    bottomIcon: "/home/govt.png",
    bottomLabel: "Govt. Healthcare Certified",
    bottomText: "Approved by National Health & Medical Authority",
  },
  {
    id: 4,
    badgeImage: "/home/four.jpg",
    badgeAlt: "32 Best Hospital 2025",
    title: "Times Network Young Visionary in Healthcare Award 2025",
    description:
      "Received at the “Times Network Leadership Conclave 2025” in New Delhi.",
    bottomIcon: "/awards/global.png",
    bottomLabel: "Global Excellence Certified",
    bottomText: "Recognized for world‑class clinical outcomes and patient care",
  },
  {
    id: 5,
    badgeImage: "/home/five.jpg",
    badgeAlt: "32 Best Hospital 2025",
    title: "Rising Star in Healthcare Award 2025",
    description:
      "Received at the Asian Brand & Leadership Conclave 2025, held in Bangkok.",
    bottomIcon: "/awards/global.png",
    bottomLabel: "Global Excellence Certified",
    bottomText: "Recognized for world‑class clinical outcomes and patient care",
  },
];

const AwardsSection: React.FC = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="awards"
      className="w-full bg-white py-16 relative overflow-hidden"
    >
      {/* BG dots */}
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
        {/* Heading + arrows */}
        <div className="flex items-center justify-between">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
              Awards & Certifications
            </h2>
            <p className="mt-1 text-xs md:text-sm text-gray-500">
              Internationally recognized for our commitment to excellence,
              safety, and quality in healthcare delivery.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 shadow-sm hover:bg-gray-50"
              aria-label="Previous award"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#21a9ff] text-white shadow-sm hover:bg-[#0f94ea]"
              aria-label="Next award"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Swiper (cards) */}
        <div className="mt-8 hidden md:block">
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={2}
            spaceBetween={24}
            loop={true}
            autoplay
          >
            {AWARDS.map((award) => (
              <SwiperSlide key={award.id}>
                <div className="flex items-stretch rounded-2xl border border-[#B3B3B3] bg-white px-6 py-5 justify-between">
                  {/* Left text */}
                  <div className="flex-1 flex flex-col justify-center pr-4">
                    <h3 className="text-xl font-medium text-[#163F34] mb-1">
                      {award.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">
                      {award.description}
                    </p>
                  </div>

                  {/* Right image */}
                  <div className="flex items-center justify-center">
                    <Image
                      src={award.badgeImage}
                      alt={award.badgeAlt}
                      width={140}
                      height={180}
                      className="h-[160px] w-auto object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom certifications row (unchanged) */}
          <div className="mt-12 flex flex-wrap items-start justify-center gap-16">
            {AWARDS.slice(0, 3).map((award) => (
              <div
                key={`bottom-${award.id}`}
                className="flex flex-col items-center text-center min-w-[260px] max-w-[260px]"
              >
                <Image
                  src={award.bottomIcon}
                  alt={award.bottomLabel}
                  width={126}
                  height={126}
                  className="h-[126px] w-[126px] object-contain"
                />
                <p className="mt-3 text-base font-semibold text-[#333333]">
                  {award.bottomLabel}
                </p>
                <p className="mt-1 text-[13px] leading-snug text-[#4B4B4B]">
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
                      {award.title}
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
