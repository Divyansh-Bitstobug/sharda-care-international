"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

type Step = {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  icon: string;
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Case ",
    subtitle: "Assessment",
    description:
      "Our clinical team thoroughly reviews your medical history and case summaries prior to your arrival for effective preparation.",
    icon: "/home/case.svg",
  },
  {
    id: 2,
    title: "Teleconsultation",
    subtitle: "(if required)",
    description:
      "We conduct a teleconsultation to discuss your case and address any initial concerns before your physical visit.",
    icon: "/home/teleconsultation.svg",
  },
  {
    id: 3,
    title: "Appointment",
    subtitle: "Assistance",
    description:
      "Our dedicated team assists in scheduling appointments with relevant specialists, ensuring a streamlined and efficient process.",
    icon: "/home/appointment.svg",
  },
  {
    id: 4,
    title: "Visa",
    subtitle: "Assistance",
    description:
      "We provide comprehensive visa assistance for international patients to facilitate hassle-free entry into the country for treatment.",
    icon: "/home/visa.svg",
  },
  {
    id: 5,
    title: "Complementary Pick-up and Drop",
    subtitle: "",
    description:
      "Enjoy complimentary airport pick-up and drop-off services to ensure a comfortable start and end to your journey.",
    icon: "/home/complement.svg",
  },
  {
    id: 6,
    title: "Foreign Language Interpreter Service",
    subtitle: "",
    description:
      "Our full-time interpreter services in multiple languages ensure communication and understanding throughout your medical stay.",
    icon: "/home/foreign.svg",
  },
  {
    id: 7,
    title: "Express Check-In at International Patient's Lounge",
    subtitle: "",
    description:
      "Experience a swift check-in process through our dedicated International Patient’s Lounge, ensuring a comfortable and efficient arrival.",
    icon: "/home/express.svg",
  },
  {
    id: 8,
    title: "Dedicated Buddy/Staff Allocation",
    subtitle: "",
    description:
      "A dedicated staff buddy offers personalized support and seamless coordination throughout your treatment journey.",
    icon: "/home/dedicated.svg",
  },
  {
    id: 9,
    title: "Food",
    subtitle: "Arrangements",
    description:
      "We provide patients and attendants with diverse vegetarian and non-vegetarian cuisine choices to meet nutritional needs.",
    icon: "/home/food.svg",
  },
  {
    id: 10,
    title: "Affordable and Comfortable Guest House Arrangement ",
    subtitle: "",
    description:
      "We assist in arranging affordable, comfortable guest house accommodations for a pleasant stay for you and your family.",
    icon: "/home/affordable.svg",
  },
  {
    id: 11,
    title: "Ambulance Pick-Up (if required)",
    subtitle: "",
    description:
      "For emergencies or specific medical needs, we offer ambulance services to transport you safely to the hospital.",
    icon: "/home/ambulance.svg",
  },
  {
    id: 12,
    title: "Post",
    subtitle: "Treatment Support",
    description:
      "We support your recovery with dedicated follow-ups, ongoing guidance, and continuous safety monitoring.",
    icon: "/home/ambulance.svg",
  },
];

const TreatmentJourney: React.FC = () => {
  const renderCard = (step: Step, index: number) => (
    <div className="flex h-full flex-col rounded-3xl border border-[#eceff4] bg-[#FCFDFD] overflow-hidden min-h-[190px]">
      <div className="flex w-full h-full">
        {/* Left gradient number strip */}
        <div className="flex w-20 min-h-[190px] md:min-h-full  flex-col items-center justify-center rounded-l-3xl bg-gradient-to-b from-[#E33C6A] to-[#ED7E4B] text-white">
          <span className="text-2xl font-semibold leading-none">
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col rounded-r-3xl py-3  md:py-5 min-h-[190px]">
          <div className="flex items-start justify-between gap-4 px-4 md:px-6 min-h-[70px]">
            <div>
              <div className="text-base md:text-lg font-semibold text-gray-900">
                {step.title}
              </div>
              {step.subtitle && (
                <div className="text-base md:text-lg font-semibold text-gray-900">
                  {step.subtitle}
                </div>
              )}
            </div>

            {/* Icon placeholder – replace with real icon */}
            <div className="flex items-center justify-center">
              <Image src={step.icon} alt={step.title} width={32} height={32} />
            </div>
          </div>
          <div className=" h-px w-full border-t border-dashed border-[#D9D9D9]" />
          <p className="mt-3 text-xs md:text-[14px] text-gray-500 leading-relaxed px-4 md:px-6 max-h-[78px] md:max-h-full overflow-hidden ">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="journey" className="w-full bg-white py-16 relative">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mt-[40px] md:mt-[43px] 2xl:mt-[43px]">
        <div className="h-px w-full border-t border-dashed border-[#E33C6A]" />
      </div>
      <div className="mx-4 md:mx-auto ml-0 md:ml-32">
        {/* Heading */}
        <div className="text-center max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-medium text-gray-900">
            Your Treatment Journey At
            <br />
            ShardaCare Hospitals
          </h2>
          <p className="mt-2  md:text-base text-gray-500">
            Here&apos;s what your treatment journey will look like at ShardaCare
          </p>
        </div>

        {/* Swiper – desktop & mobile */}
        <div className="mt-10">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".journey-prev",
              nextEl: ".journey-next",
            }}
            loop={true} // <-- enable loop
            spaceBetween={24}
            speed={700}
            breakpoints={{
              0: { slidesPerView: 1.1, centeredSlides: true },
              768: { slidesPerView: 2.3, centeredSlides: false },
              1024: { slidesPerView: 2.8, centeredSlides: false },
            }}
            className="journey-swiper"
          >
            {STEPS.map((step, index) => (
              <SwiperSlide key={step.id}>{renderCard(step, index)}</SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              className="journey-prev flex h-8 w-8 items-center justify-center rounded-full bg-white hover:bg-[#34ACE1] hover:text-white shadow-md"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              className="journey-next flex h-8 w-8 items-center justify-center rounded-full bg-white hover:bg-[#34ACE1] hover:text-white shadow-md"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentJourney;
