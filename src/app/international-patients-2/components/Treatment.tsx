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
    title: "Case Assessment ",
    subtitle: "Assessment",
    description:
      "Our clinical team thoroughly analyses your medical history based on the case summaries provided by you before your arrival.",
    icon: "/home/case.svg",
  },
  {
    id: 2,
    title: "Teleconsultation (if required)",
    subtitle: "(if required)",
    description:
      "A teleconsultation between you and our clinician is conducted to discuss your case and address initial concerns before your physical visit.",
    icon: "/home/teleconsultation.svg",
  },
  {
    id: 3,
    title: "Appointment Assistance",
    subtitle: "Assistance",
    description:
      "Our team assists you with scheduling appointments with relevant specialists, ensuring a streamlined and efficient experience.",
    icon: "/home/appointment.svg",
  },
  {
    id: 4,
    title: "Visa Assistance",
    subtitle: "Coordination",
    description:
      "For international patients, we provide comprehensive visa assistance to facilitate a hassle-free entry into the country for your medical treatment.",
    icon: "/home/visa.svg",
  },
  {
    id: 5,
    title: "Complementary Pick-up and Drop",
    subtitle: "Registration",
    description:
      "Enjoy the convenience of complimentary pick-up and drop services to and from the airport, ensuring a comfortable start and end to your journey.",
    icon: "/home/complement.svg",
  },
  {
    id: 6,
    title: "Foreign Language Interpreter Service",
    subtitle: "Workup",
    description:
      "We offer full-time foreign-language interpreter services in languages such as Russian, Arabic, Bengali, Burmese, and Persian to enhance communication and understanding during your stay.",
    icon: "/home/foreign.svg",
  },
  {
    id: 7,
    title: "Express Check-In at International Patient's Lounge",
    subtitle: "Planning",
    description:
      "Experience a swift and hassle-free check-in process through our dedicated International Patient’s Lounge, ensuring a comfortable and efficient arrival.",
    icon: "/home/express.svg",
  },
  {
    id: 8,
    title: "Dedicated Buddy/Staff Allocation",
    subtitle: "Procedure",
    description:
      "Throughout your stay, a dedicated buddy or staff member is assigned to you to provide personalised assistance and ensure smooth coordination during your entire treatment journey.",
    icon: "/home/dedicated.svg",
  },
  {
    id: 9,
    title: "Food Arrangements",
    subtitle: "Care",
    description:
      "Upon admission, we provide international patients and their attendants with a choice of vegetarian and non-vegetarian cuisine. Our goal is to ensure your nutritional needs are met during your stay.",
    icon: "/home/food.svg",
  },
  {
    id: 10,
    title: "Affordable and Comfortable Guest House Arrangement ",
    subtitle: "& Therapy",
    description:
      "We can assist in arranging affordable and comfortable guest house accommodations to ensure a pleasant and convenient stay for you and your accompanying members.",
    icon: "/home/affordable.svg",
  },
  {
    id: 11,
    title: "Ambulance Pick-Up (if required)",
    subtitle: "Planning",
    description:
      "In case of emergency or specific medical needs, we offer ambulance pick-up services to transport you safely to the hospital.",
    icon: "/home/ambulance.svg",
  },
  {
    id: 12,
    title: "Post Treatment Support",
    subtitle: "Support",
    description:
      "We support you after the procedure with dedicated follow-ups, ongoing guidance, and continuous monitoring to help you recover comfortably and safely.",
    icon: "/home/ambulance.svg",
  },
];

const TreatmentJourney: React.FC = () => {
  const renderCard = (step: Step, index: number) => (
    <div className="flex h-full flex-col rounded-3xl border border-[#eceff4] bg-[#FCFDFD] overflow-hidden min-h-[170px]">
      <div className="flex w-full h-full">
        {/* Left gradient number strip */}
        <div className="flex w-20 min-h-[170px] md:min-h-full  flex-col items-center justify-center rounded-l-3xl bg-gradient-to-b from-[#E33C6A] to-[#ED7E4B] text-white">
          <span className="text-2xl font-semibold leading-none">
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between rounded-r-3xl px-4 py-3 md:px-6 md:py-5 min-h-[170px]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-base md:text-lg font-semibold text-gray-900">
                {step.title}
              </div>
              {/* {step.subtitle && (
                <div className="text-sm font-semibold text-gray-900">
                  {step.subtitle}
                </div>
              )} */}
            </div>
            {/* Icon placeholder – replace with real icon */}
            <div className="flex items-center justify-center">
              <Image src={step.icon} alt={step.title} width={32} height={32} />
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-4 md:mx-auto ml-0 md:ml-32">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-medium text-gray-900">
            Your Treatment Journey At
            <br />
            ShardaCare Hospitals
          </h2>
          <p className="mt-2  md:text-xs text-gray-500">
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
