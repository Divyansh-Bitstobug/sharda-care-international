"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// 1. IMPORT AUTOPLAY MODULE
import { Navigation, Autoplay } from "swiper/modules";
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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // <-- Added loading state

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

  const handleClose = () => {
    setActiveVideo(null);
    setIsVideoLoaded(false); // Reset loader when closing
  };

  const renderCard = (story: Story) => (
    <div 
      className="group relative h-full w-full cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 p-3 transition-all hover:shadow-md"
      onClick={() => {
        setActiveVideo(story.videoId);
        setIsVideoLoaded(false); // Ensure loader shows when opening a new video
      }}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
        <Image
          src={`https://img.youtube.com/vi/${story.videoId}/maxresdefault.jpg`}
          alt={story.altText}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 h-5 w-5 fill-current" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="patient-stories" className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            Patient Stories
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-500">
            Hear how patients from around the world transformed their lives with our care.
          </p>
        </div>

        <div className="relative px-0 md:px-14">
          <button
            className="stories-prev absolute -left-2 top-1/2 z-10 hidden md:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-md border border-gray-100 hover:text-[#21a9ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="stories-next absolute -right-2 top-1/2 z-10 hidden md:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-md border border-gray-100 hover:text-[#21a9ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]} 
            navigation={{ prevEl: ".stories-prev", nextEl: ".stories-next" }}
            spaceBetween={16}
            slidesPerView={1}
            loop={true} // <-- Added loop for infinite scrolling
            autoplay={{
              delay: 3000,
              disableOnInteraction: false, 
              pauseOnMouseEnter: true,     
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="patient-stories-swiper !py-4 !px-4 md:!px-0"
          >
            {PATIENT_STORIES.map((story) => (
              <SwiperSlide key={story.id} className="!h-auto">
                {renderCard(story)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900">Patient Testimonial</h3>
              <button
                onClick={handleClose}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-red-500 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              {/* Loader: Shows while isVideoLoaded is false */}
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-600 border-t-white"></div>
                </div>
              )}
              
              {/* Iframe: Fades in once loaded */}
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onLoad={() => setIsVideoLoaded(true)} // <-- Trigger state update on load
                className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
                  isVideoLoaded ? "opacity-100" : "opacity-0"
                }`}
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