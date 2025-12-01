"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

type Story = {
  id: number;
  thumbnail: string;
  title: string;
};

const PATIENT_STORIES: Story[] = [
  {
    id: 1,
    thumbnail: "/stories/story1.png",
    title: "Surgery for Ewing sarcoma in humans",
  },
  {
    id: 2,
    thumbnail: "/stories/story2.png",
    title: "Surgery for rare bone tumors",
  },
  {
    id: 3,
    thumbnail: "/stories/story3.png",
    title: "Surgery for pediatric oncology cases",
  },
  {
    id: 4,
    thumbnail: "/stories/story4.png",
    title: "Surgery for pediatric oncology cases",
  },
  {
    id: 5,
    thumbnail: "/stories/story4.png",
    title: "Surgery for pediatric oncology cases",
  },
];

const PatientStoriesSection: React.FC = () => {
  const renderCard = (story: Story) => (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={story.thumbnail}
          alt={story.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-md">
            <div className="ml-0.5 h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-[#21a9ff]" />
          </div>
        </div>
      </div>
      {/* remove overflow on this container */}
      <div className="px-4 pb-4 pt-3">
        <p className="text-xs font-medium text-gray-800">{story.title}</p>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-medium text-gray-900">
            Patient Stories
          </h2>
          <p className="mt-2 text-xs text-gray-500">
            Hear how patients from around the world transformed their lives with
            our care.
          </p>
        </div>

        {/* One Swiper for all viewports */}
        <div className="mt-10">
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: ".stories-prev", nextEl: ".stories-next" }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="patient-stories-swiper"
          >
            {PATIENT_STORIES.map((story) => (
              <SwiperSlide key={story.id} className="!pb-1 flex">
                {renderCard(story)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Arrows – below on desktop, overlay on mobile if you want */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            className="stories-prev flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-md"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="stories-next flex h-8 w-8 items-center justify-center rounded-full bg-[#21a9ff] text-white shadow-md"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PatientStoriesSection;
