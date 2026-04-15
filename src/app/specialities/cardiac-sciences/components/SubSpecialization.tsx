"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

// --- Dummy Data ---
const specializationsData = [
  {
    id: 1,
    title: "Cardiac Surgery",
    icon: (
      <Image src={"/cardiac-sciences/cardiac.png"} alt="cardiac surgery" width={60} height={60} />
    ),
  },
  {
    id: 2,
    title: "Clinical & Preventive Cardiology",
    icon: (
      <Image src={"/cardiac-sciences/clinical.png"} alt="cardiac surgery" width={60} height={60} />
    ),
  },
  {
    id: 3,
    title: "Electrophysiology",
    icon: (
      <Image src={"/cardiac-sciences/electro.png"} alt="cardiac surgery" width={60} height={60} />
    ),
  },
  {
    id: 4,
    title: "Interventional Cardiology",
    icon: (
      <Image src={"/cardiac-sciences/inter.png"} alt="cardiac surgery" width={60} height={60} />
    ),
  },
  {
    id: 5,
    title: "Cardiac Rehabilitation",
    icon: (
      <Image src={"/cardiac-sciences/cardiac.png"} alt="cardiac surgery" width={60} height={60} />
    ),
  },
];

const SubSpecialization = () => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#1c1c28]">
            Know More About Our Sub-Specialization
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto px-4 leading-relaxed">
            Comprehensive surgical solutions and post-operative care for a wide range of complex transplant procedures.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-2 md:px-10">
          
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl, nextEl }}
            loop={true}
            speed={600}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // Mobile
              320: {
                slidesPerView: 1.4,
                centeredSlides: true,
                spaceBetween: 16,
              },
              // Tablet
              768: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 24,
              },
              // Desktop
              1024: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 24,
              },
            }}
            className="w-full pb-8"
          >
            {specializationsData.map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`}>
                {/* Card Container (group class removed from here) */}
                <div className="flex flex-col items-center justify-center p-4 bg-white border border-gray-100 rounded-2xl transition-shadow duration-300 h-[250px]">
                  
                  {/* Icon Circle */}
                  <div className="w-[85px] h-[85px] rounded-full bg-gradient-to-b from-[#E9F2FF] to-[#FFFFFF] flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-center font-medium text-[#1c1c28] text-[15px] md:text-[16px] leading-snug">
                    {item.title}
                  </h3>

                  {/* Action Area - 'group' class added HERE so hover only triggers on the arrow area */}
                  <div className="group relative w-[160px] h-10 mt-6 flex items-center justify-center cursor-pointer">
                    
                    {/* Default State: Small Pink Arrow */}
                    <div className="absolute w-8 h-8 rounded-full bg-[#FFEDE9] text-[#E75A5D] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-75">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>

                    {/* Hover State: Gradient "Know More" Button */}
                    <button className="absolute cursor-pointer w-full h-full rounded-full bg-gradient-to-r from-[#E3396C] to-[#EC7E4B] text-white flex items-center justify-center text-sm font-medium opacity-0 scale-90 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100 shadow-md">
                      Know More
                      <svg width="14" height="14" className="ml-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Arrow (Turns blue on hover) */}
          <button
            ref={setPrevEl}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 transition-all duration-300 hover:bg-[#2DA5F3] hover:text-white hover:border-[#2DA5F3] hover:shadow-md focus:outline-none"
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* Right Arrow (Turns blue on hover) */}
          <button
            ref={setNextEl}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 transition-all duration-300 hover:bg-[#2DA5F3] hover:text-white hover:border-[#2DA5F3] hover:shadow-md focus:outline-none"
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
};

export default SubSpecialization;