"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

type TechSlide = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const TECH_SLIDES: TechSlide[] = [
  {
    id: 1,
    image: "/home/tech1.png",
    title: "3T MRI Imaging",
    description:
      "High‑resolution magnetic resonance imaging for detailed internal body visualisation and accurate diagnosis.",
  },
  {
    id: 2,
    image: "/home/tech2.png",
    title: "Robotic Surgery",
    description:
      "Highly precise robot‑assisted procedures for enhanced precision and faster patient recovery.",
  },
  {
    id: 3,
    image: "/home/tech3.png",
    title: "Cardiac Cath Lab",
    description:
      "State‑of‑the‑art catheterisation laboratory for advanced heart procedures and interventions.",
  },
  {
    id: 4,
    image: "/home/tech4.png",
    title: "3D Mammography System",
    description:
      "Advanced 3D breast imaging system enabling early detection and improved accuracy.",
  },
  {
    id: 5,
    image: "/home/tech5.png",
    title: "Hybrid OR Suite",
    description:
      "Integrated operating room with real‑time imaging for complex multidisciplinary procedures.",
  },
];

const AdvancedMedicalTechnologies: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-medium text-gray-900">
            Advanced Medical Technologies
          </h2>
          <p className="mt-2 text-xs md:text-base text-gray-500">
            Advanced, next‑generation medical equipment that supports accurate
            diagnosis, precise treatment, and improved results across all
            specialties.
          </p>
        </div>

        {/* One Swiper for all viewports */}
        <div className="mt-10">
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: ".tech-prev", nextEl: ".tech-next" }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              0: { slidesPerView: 1 },      // mobile: 1 card
              768: { slidesPerView: 2 },    // tablet: 2 cards
              1024: { slidesPerView: 4 },   // desktop: 4 cards like screenshot
            }}
            className="tech-swiper"
          >
            {TECH_SLIDES.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <div className="relative flex min-h-[320px] flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      width={800}
                      height={600}
                    />
                  </div>

                  {/* Bottom text card */}
                  <div className="relative z-10 mt-auto px-4 pb-4 pt-3 flex flex-col justify-end">
                    <div className="inline-block rounded-2xl bg-white px-3 py-2 text-left shadow-sm">
                      <h3 className="text-sm font-medium text-[#333333]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[10px] text-[#4B4B4B]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Shared arrows (desktop bottom, mobile over image if you want) */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            className="tech-prev flex h-8 w-8 items-center justify-center rounded-full bg-white hover:bg-[#34ACE1] hover:text-white shadow-md"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="tech-next flex h-8 w-8 items-center justify-center rounded-full bg-white hover:bg-[#34ACE1] hover:text-white shadow-md"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvancedMedicalTechnologies;
