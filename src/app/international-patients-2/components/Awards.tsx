"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Data ---
type AwardSlide = {
  id: number;
  badgeImage: string;
  badgeAlt: string;
  title: string;
  description: string;
};

// Main Awards Data (Top Row)
const AWARDS: AwardSlide[] = [
  {
    id: 1,
    badgeImage: "/home/one.png",
    badgeAlt: "Times Business Leader 2025",
    title: "Times Business Leader Awards 2025",
    description:
      "Received at The Times Business Leader Awards 2025 by Mr. Rishabh Gupta, Managing Director ShardaCare-Healthcity.",
  },
  {
    id: 2,
    badgeImage: "/home/two.png",
    badgeAlt: "Excellence Award 2023",
    title: "Excellence in Healthcare Access & Affordability Award 2023",
    description:
      "Received at the “Innovation Summit Awards 2023,” held in New Delhi.",
  },
  {
    id: 3,
    badgeImage: "/home/three.png",
    badgeAlt: "Smart Emergency Award 2025",
    title: "Best Integrated Smart Emergency Services Award 2025",
    description:
      "Received at the Best Integrated Smart Emergency Services Award at the Smart Hospitals & Diagnostics Summit & Awards 2025.",
  },
  {
    id: 4,
    badgeImage: "/home/four.png",
    badgeAlt: "Young Visionary Award 2025",
    title: "Times Network Young Visionary in Healthcare Award 2025",
    description:
      "Received at the “Times Network Leadership Conclave 2025” in New Delhi.",
  },
  {
    id: 5,
    badgeImage: "/home/five.png",
    badgeAlt: "Rising Star Award 2025",
    title: "Rising Star in Healthcare Award 2025",
    description:
      "Received at the Asian Brand & Leadership Conclave 2025, held in Bangkok.",
  },
];

// Separate Certifications Data (Bottom Row - ONLY 2 ITEMS)
const CERTIFICATIONS = [
  {
    id: 1,
    icon: "/home/nabh.png",
    label: "NABH Certified",
    text: "National Accreditation Board for Healthcare Excellence",
  },
  {
    id: 2,
    icon: "/home/govt.png",
    label: "Govt. Healthcare Certified",
    text: "Approved by National Health & Medical Authority",
  },
];

// --- Sub-Components ---

const AwardCard = ({ item }: { item: AwardSlide }) => (
  <div className="flex h-full w-full flex-row items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    {/* Left: Text Content */}
    <div className="flex flex-1 flex-col pr-4">
      <h3 className="mb-3 text-lg font-bold text-[#163F34] md:text-xl leading-tight">
        {item.title}
      </h3>
      <p className="text-xs text-gray-600 md:text-sm leading-relaxed">
        {item.description}
      </p>
    </div>

    {/* Right: Image */}
    <div className="flex-shrink-0">
      <div className="relative h-32 w-28 md:h-40 md:w-32 flex items-center justify-center">
        <Image src={item.badgeImage} alt={item.badgeAlt} fill className="object-contain" />
      </div>
    </div>
  </div>
);

// --- Main Section ---

const AwardsSection: React.FC = () => {
  // Navigation Refs
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // Mobile Nav Refs (Separate)
  const mobilePrevRef = useRef<HTMLButtonElement>(null);
  const mobileNextRef = useRef<HTMLButtonElement>(null);
  
  // (Removed certPrevRef/certNextRef since 2 items fit easily or don't need sliding)

  return (
    <section className="w-full bg-white py-10 relative overflow-hidden">
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
      
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        
        {/* 1. CENTERED HEADER */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium text-gray-900 md:text-4xl">
            Awards & Certifications
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-sm text-gray-500 md:text-base">
            Internationally recognized for our commitment to excellence, safety, and quality in healthcare delivery.
          </p>
        </div>

        {/* 2. DESKTOP LAYOUT */}
        <div className="hidden md:block">
          {/* Slider Container with Side Arrows */}
          <div className="relative px-16">
            
            {/* Left Arrow */}
            <button 
              ref={prevRef} 
              className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-600 shadow-md border border-gray-100 hover:text-[#21a9ff] transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right Arrow */}
            <button 
              ref={nextRef} 
              className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-600 shadow-md border border-gray-100 hover:text-[#21a9ff] transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              spaceBetween={24}
              slidesPerView={2.2} // 2 Full + Peek
              className="!py-4"
            >
              {AWARDS.map((award) => (
                <SwiperSlide key={award.id} className="!h-auto">
                  <AwardCard item={award} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Bottom Certifications Row - ONLY 2 ITEMS CENTRED */}
          <div className="mt-16 flex flex-wrap items-start justify-center gap-24 lg:gap-40">
            {CERTIFICATIONS.map((item) => (
              <div key={`cert-desk-${item.id}`} className="flex flex-col items-center text-center max-w-[200px]">
                <div className="mb-4 flex h-24 w-24 items-center justify-center">
                   <Image 
                     src={item.icon} 
                     alt={item.label} 
                     width={100} 
                     height={100} 
                     className="object-contain" 
                   />
                </div>
                <h4 className="mb-2 text-base font-bold text-gray-900">{item.label}</h4>
                <p className="text-xs text-gray-500 leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. MOBILE LAYOUT */}
        <div className="block md:hidden">
          
          {/* Top Swiper: Awards */}
          <div className="relative mb-12">
            <button ref={mobilePrevRef} className="absolute -left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md border border-gray-100">
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </button>
            <button ref={mobileNextRef} className="absolute -right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md border border-gray-100">
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: mobilePrevRef.current,
                nextEl: mobileNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = mobilePrevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = mobileNextRef.current;
              }}
              slidesPerView={1}
              spaceBetween={16}
              className="!px-2 !py-2"
            >
              {AWARDS.map((award) => (
                <SwiperSlide key={`mob-${award.id}`} className="!h-auto">
                   <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm text-center">
                      <div className="relative mb-4 h-32 w-auto flex items-center justify-center">
                         <Image src={award.badgeImage} alt={award.badgeAlt} width={100} height={100} className="object-contain" />
                      </div>
                      <h3 className="mb-2 text-base font-bold text-[#163F34]">{award.title}</h3>
                      <p className="text-xs text-gray-600">{award.description}</p>
                   </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Bottom Certifications - Just stacked or grid (No slider needed for 2 items) */}
          <div className="flex flex-col gap-10 items-center">
             {CERTIFICATIONS.map((item) => (
                <div key={`mob-cert-${item.id}`} className="flex flex-col items-center text-center">
                  <div className="mb-3 h-20 w-20 flex items-center justify-center">
                     <Image src={item.icon} alt={item.label} width={80} height={80} className="object-contain" />
                  </div>
                  <h4 className="mb-1 text-sm font-bold text-gray-900">{item.label}</h4>
                  <p className="text-[10px] text-gray-500 max-w-[200px]">{item.text}</p>
                </div>
             ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AwardsSection;