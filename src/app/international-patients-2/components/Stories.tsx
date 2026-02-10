"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

// --- Types ---
type Story = {
  id: number;
  videoId: string;
  altText: string;
};

// --- Data ---
const PATIENT_STORIES: Story[] = [
  { id: 1, videoId: "fXe1Hs94d0g", altText: "Patient Story 1" },
  { id: 2, videoId: "wIiFweyHo5M", altText: "Patient Story 2" },
  { id: 3, videoId: "R1c-ysPsukk", altText: "Patient Story 3" },
  { id: 4, videoId: "7aADFbBMgMs", altText: "Patient Story 4" },
  { id: 5, videoId: "zTDfnE31zTU", altText: "Patient Story 5" },
  { id: 6, videoId: "z3DiWo-_OG4", altText: "Patient Story 6" },
  { id: 7, videoId: "PUrGDqXcavs", altText: "Patient Story 7" },
  { id: 8, videoId: "aLyePkAiE2M", altText: "Patient Story 8" },
];

const PatientStoriesSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeVideo]);

  const handleClose = () => setActiveVideo(null);

  const renderCard = (story: Story) => (
    <div 
      className="group relative h-full w-full cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 p-3 transition-all hover:shadow-md"
      onClick={() => setActiveVideo(story.videoId)}
    >
      {/* Thumbnail Container (16:9) */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
        
        {/* AUTOMATIC YOUTUBE THUMBNAIL */}
        <Image
          src={`https://img.youtube.com/vi/${story.videoId}/maxresdefault.jpg`}
          alt={story.altText}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 h-6 w-6 fill-current" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="patient-stories" className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            Patient Stories
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-500">
            Hear how patients from around the world transformed their lives with our care.
          </p>
        </div>

        {/* Swiper Container with Side Arrows */}
        <div className="relative px-10 md:px-14">
          
          {/* Left Arrow */}
          <button
            className="stories-prev absolute -left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-md border border-gray-100 hover:text-[#21a9ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Right Arrow */}
          <button
            className="stories-next absolute -right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-md border border-gray-100 hover:text-[#21a9ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: ".stories-prev", nextEl: ".stories-next" }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 }, // Mobile Landscape: 1.5 cards (larger)
              768: { slidesPerView: 2, spaceBetween: 24 },   // Tablet: 2 cards
              1024: { slidesPerView: 3, spaceBetween: 30 },  // Desktop: 3 cards (Much bigger than 4)
            }}
            className="patient-stories-swiper !py-4"
          >
            {PATIENT_STORIES.map((story) => (
              <SwiperSlide key={story.id} className="!h-auto">
                {renderCard(story)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* --- VIDEO MODAL --- */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900">Patient Testimonial</h3>
              <button
                onClick={handleClose}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-red-500 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            {/* Player */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              ></iframe>
            </div>
          </div>
          <div className="absolute inset-0 -z-10" onClick={handleClose}></div>
        </div>
      )}
    </section>
  );
};

export default PatientStoriesSection;