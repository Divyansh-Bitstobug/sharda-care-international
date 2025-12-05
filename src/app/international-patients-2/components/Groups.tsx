"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

type GroupCard = {
  id: number;
  image: string;
  badgeLabel: string;
  name: string;
  ctaLabel: string;
};

const SHARDA_GROUPS: GroupCard[] = [
  {
    id: 1,
    image: "/home/group1.png",
    badgeLabel: "Corporate Division",
    name: "Sharda Corporation",
    ctaLabel: "Discover",
  },
  {
    id: 2,
    image: "/home/group2.png",
    badgeLabel: "World-class Healthcare Institution",
    name: "Sharda Hospital",
    ctaLabel: "Discover",
  },
  {
    id: 3,
    image: "/home/group3.png",
    badgeLabel: "International Campus (Uzbekistan)",
    name: "Sharda University – Uzbekistan",
    ctaLabel: "Discover",
  },
  {
    id: 4,
    image: "/home/group4.png",
    badgeLabel: "Global Education Institution",
    name: "Sharda University",
    ctaLabel: "Discover",
  },
];

const ShardaGroupsSection: React.FC = () => {
  const renderCard = (item: GroupCard) => (
    <div className="flex h-full flex-col rounded-3xl bg-white border border-black/10">
      <div className="p-4 h-full">
        {/* Image area */}
        <div className="relative h-56 w-full overflow-hidden rounded-t-3xl bg-[#f5f7fb]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom content */}
        <div className="flex justify-between place-items-end rounded-b-3xl pt-3 bg-[#FAFAFA] p-2 relative">
          <div className="h-fit flex flex-col">
            <p className="text-[8px] font-medium uppercase tracking-wide text-[#34ACE1]">
              {item.badgeLabel}
            </p>
            <p className="text-xs font-semibold text-[#222222]">
              {item.name}
            </p>
          </div>
          <button className="inline-flex items-center justify-between rounded-full border border-black/10 px-3 py-1 text-[10px] font-medium text-[#444] h-fit">
            <span>{item.ctaLabel}</span>
            <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px]">
              ↗
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Sharda Groups
          </h2>
          <p className="mt-2 text-xs text-gray-500">
            A Global Presence in Education, Healthcare & Innovation
          </p>
        </div>

        {/* Swiper – 1 card on mobile, 4 on desktop */}
        <div className="mt-10">
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: ".groups-prev", nextEl: ".groups-next" }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="sharda-groups-swiper"
          >
            {SHARDA_GROUPS.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                {renderCard(item)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Arrows – centered below (desktop & mobile) */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            className="groups-prev flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-md"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="groups-next flex h-8 w-8 items-center justify-center rounded-full bg-[#21a9ff] text-white shadow-md"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShardaGroupsSection;
