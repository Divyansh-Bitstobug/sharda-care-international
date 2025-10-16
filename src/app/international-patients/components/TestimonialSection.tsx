"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const FORM_WIDTH = 370;

const testimonials = [
  {
    img: "/assets/home/testimonial1.jpg",
    title: "Surgery for Ewing sarcoma in humans",
    desc: "Excellent care and dedication from the medical team. Highly recommended.",
  },
  {
    img: "/assets/home/testimonial2.jpg",
    title: "Surgery for rare bone tumors",
    desc: "The process was seamless and very reassuring. Thank you!",
  },
  {
    img: "/assets/home/testimonial3.jpg",
    title: "Surgery for pediatric oncology cases",
    desc: "Professional and compassionate approach throughout the treatment.",
  },
  // ...repeat if desired...
];

const TestimonialSection = () => (
  <section className="flex flex-row w-full px-8 py-12 items-start justify-between max-w-[1300px] bg-white">
    {/* Left side: testimonials slider and header */}
    <div className="flex-1 md:max-w-5xl">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center w-full my-6">
          <div
            className="flex-1"
            style={{
              borderTop: "2px dashed transparent",
              borderImage:
                "repeating-linear-gradient(to right, #D1D5DB 0 12px, transparent 12px 32px)",
              borderImageSlice: 1,
            }}
          />
          <h2 className="mx-4 text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#E3376D] to-[#ED814A] bg-clip-text text-transparent inline-block">
            Testimonials
          </h2>
          <div
            className="flex-1"
            style={{
              borderTop: "2px dashed transparent",
              borderImage:
                "repeating-linear-gradient(to right, #D1D5DB 0 12px, transparent 12px 32px)",
              borderImageSlice: 1,
            }}
          />
        </div>
        <p className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto">
          ShardaCare understands the challenge of seeking treatment abroad. Our tailored services ensure a seamless experience for international patients.
        </p>
      </div>
      {/* Testimonials Carousel */}
      <div className="w-full max-w-[325px] md:max-w-3xl mx-auto">
        <Swiper
        modules={[Autoplay]}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          slidesPerView={1} // fallback for mobile
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="p-3">
                <div className="bg-white rounded-lg shadow px-3 py-4 flex flex-col items-center h-[250px]">
                  <Image
                    src={t.img}
                    alt="testimonial"
                    width={120}
                    height={120}
                    className="rounded-xl w-32 h-32 object-cover mb-3"
                  />
                  <h3 className="font-semibold text-gray-900 text-sm text-center mb-2">
                    {t.title}
                  </h3>
                  <p className="text-xs text-gray-500 text-center">{t.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* View All Action */}
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="text-xs text-gray-400 mb-2">
          Explore all testimonials by clicking View all
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="flex items-center justify-between px-4 py-3 w-[260px] rounded-lg border border-[#34ACE1] text-[#34ACE1] bg-[#F9FDFF] font-semibold mt-8">
            View All
            <div className="bg-[#34ACE1] rounded-full p-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="white"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
    {/* Spacer for fixed form on right */}
    <div
      className="hidden md:block"
      style={{
        width: FORM_WIDTH,
        minWidth: FORM_WIDTH,
        flexShrink: 0,
        height: "1px",
      }}
    />
  </section>
);

export default TestimonialSection;
