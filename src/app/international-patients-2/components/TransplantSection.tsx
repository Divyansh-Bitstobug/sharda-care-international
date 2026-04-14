"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  Stethoscope,
  HeartHandshake,
  Receipt,
  MonitorSmartphone,
  Heart,
  Globe,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const carouselData = [
  {
    id: 1,
    title: "Fast and Hassle Free Treatment",
    description:
      "Receive expert medical care in a fraction of usual waiting times scheduling periods and delays and extensive waiting lists for critical & standard surgical procedures.",
    icon: (
      <Image
        src={"/transplant/fast.svg"}
        alt="fast icon"
        width={60}
        height={60}
      />
    ),
  },
  {
    id: 2,
    title: "Seamless Care Journey",
    description:
      "From your first consultation to recovery, we manage your entire journey. Pre-arrival case review and expert opinion prepare you before travel. We handle visa, travel, and accommodation, with support after you return home.",
    icon: (
      <Image
        src={"/transplant/seamless.svg"}
        alt="fast icon"
        width={60}
        height={60}
      />
    ),
  },
  {
    id: 3,
    title: "Transparent Pricing",
    description:
      "Receive comprehensive treatment plans with no hidden charges. We provide full cost transparency before you travel, offering world-class medical care at competitive, affordable rates.",
    icon: (
      <Image
        src={"/transplant/transparent.svg"}
        alt="fast icon"
        width={60}
        height={60}
      />
    ),
  },
  {
    id: 4,
    title: "Smart Digital Experience",
    description:
      "Get real-time updates on your treatment progress at every stage. Stay connected easily through WhatsApp and online platforms for quick communication. Experience seamless coordination across departments.",
    icon: (
      <Image
        src={"/transplant/smart.svg"}
        alt="fast icon"
        width={60}
        height={60}
      />
    ),
  },
  {
    id: 5,
    title: "Compassionate Support",
    description:
      "We care for more than just the patient. Our team provides emotional support and dedicated communication for family members, ensuring a truly compassionate, patient-first experience.",
    icon: (
      <Image
        src={"/transplant/compassionate.svg"}
        alt="fast icon"
        width={60}
        height={60}
      />
    ),
  },
  {
    id: 6,
    title: "Global Trust & Standards",
    description:
      "Trusted by patients from Africa, Asia, and the Middle East. Rely on our multilingual team and our adherence to the highest international safety, and clinical standards.",
    icon: (
      <Image
        src={"/transplant/global.svg"}
        alt="fast icon"
        width={60}
        height={60}
      />
    ),
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Our commitment goes beyond treatment—discover what makes ShardaCare
            exceptional for your international wellness journey.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-4"
          >
            {carouselData.map((card) => (
              // h-auto ensures the slide takes the height of the tallest card in the row
              <SwiperSlide key={card.id} className="!h-auto">
                {/* h-full and flex-col stretch the card to fill the slide height */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-full flex flex-col transition-transform hover:-translate-y-1 duration-300">
                  {/* Icon Circle (Larger, matching the closeup) */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#F3FBFF] to-[#FFFFFF] flex items-center justify-center mb-8">
                    {card.icon}
                  </div>

                  {/* Title with bottom border acting as the divider */}
                  <h3 className="text-[18px] font-semibold text-black pb-4 border-b border-gray-200 mb-5">
                    {card.title}
                  </h3>

                  {/* Description (flex-grow pushes any extra space to the bottom if text varies in length) */}
                  <p className="text-gray-600 text-[13px] leading-[1.8] flex-grow">
                    {card.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="swiper-button-prev-custom absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-md text-gray-600 hover:text-blue-500 transition-colors hidden md:flex cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button className="swiper-button-next-custom absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#38bdf8] rounded-full items-center justify-center shadow-md text-white hover:bg-[#0284c7] transition-colors hidden md:flex cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
