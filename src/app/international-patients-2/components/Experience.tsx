"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

type Slide = {
  id: number;
  image: string;
  alt: string;
  description: string;
};

const TEAM_SLIDES: Slide[] = [
  {
    id: 1,
    image: "/home/experience1.png",
    alt: "Specialist doctors in operating room",
    description:
      "A trusted team of specialist doctors is available 24/7 to guide you, answer your concerns, and deliver world‑class medical support whenever required.",
  },
  {
    id: 2,
    image: "/home/experience2.png",
    alt: "Doctor consulting a patient",
    description:
      "Experienced consultants combine clinical excellence with compassion to ensure that every patient receives personalised, holistic care.",
  },
  {
    id: 3,
    image: "/home/experience3.png",
    alt: "Medical staff in discussion",
    description:
      "Multidisciplinary teams work together to design evidence‑based treatment plans focused on safety, comfort, and better outcomes.",
  },
];

const LOOP_SLIDES: Slide[] = [...TEAM_SLIDES, ...TEAM_SLIDES];

const ExperiencedTeamSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 pb-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-medium text-gray-900">
            Experienced Team From Medicevo
          </h2>
          <p className="mt-2 text-xs text-gray-500">
            A trusted team of specialist doctors is available 24/7 to guide you,
            answer your concerns, and deliver world‑class medical support
            whenever required.
          </p>
        </div>

        <div className="mt-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            pagination={{ clickable: true }}
            loop
            centeredSlides
            slidesPerView={1.2}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1.05, spaceBetween: 16, centeredSlides: true },
              768: {
                slidesPerView: 1.15,
                spaceBetween: 24,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 1.2,
                spaceBetween: 32,
                centeredSlides: true,
              },
            }}
            className="experienced-team-swiper pb-10"
          >
            {LOOP_SLIDES.map((slide, idx) => (
              <SwiperSlide
                key={`${slide.id}-${idx}`}
                className="!flex justify-center transition-transform duration-300 ease-out"
              >
                <div className="swiper-slide-content w-full max-w-4xl rounded-3xl bg-white shadow-sm transition-transform duration-300 ease-out p-4">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full object-cover h-[360px] rounded-t-3xl"
                    height={1440}
                    width={2560}
                  />
                  <div className="px-6 py-5 text-sm text-gray-600 rounded-b-3xl bg-white">
                    {slide.description}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* scale center slide; allow room for growth & dots outside card */}
      <style jsx global>{`
        .experienced-team-swiper {
          overflow: visible;
        }
        .experienced-team-swiper .swiper-wrapper {
          padding-bottom: 16px;
        }
        .experienced-team-swiper .swiper-slide {
          overflow: visible;
        }
        .experienced-team-swiper .swiper-slide-active .swiper-slide-content {
          transform: scale(1.04);
        }
        .experienced-team-swiper .swiper-slide-prev .swiper-slide-content,
        .experienced-team-swiper .swiper-slide-next .swiper-slide-content {
          transform: scale(0.96);
        }
      `}</style>
    </section>
  );
};

export default ExperiencedTeamSection;
