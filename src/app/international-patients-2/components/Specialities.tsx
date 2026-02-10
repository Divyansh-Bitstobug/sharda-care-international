"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  HeartPulse,
  Ribbon,
  Brain,
  Bone,
  Ear,
  Activity,
  Syringe,
  Scissors,
  Siren,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

// --- Data ---

interface Specialty {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const specialtiesData: Specialty[] = [
  {
    id: 1,
    title: "Cardiac Sciences",
    description:
      "Advanced heart care featuring 24/7 emergency response and non-invasive diagnostics.",
    icon: (
      <Image
        src={"/specialities/cardiac.svg"}
        alt="icon"
        width={62}
        height={62}
      />
    ),
    link: "#",
  },
  {
    id: 2,
    title: "Oncology",
    description:
      "Advanced cancer care featuring precision diagnostics and specialized surgical expertise.",
    icon: (
      <Image
        src={"/specialities/oncology.svg"}
        alt="icon"
        width={62}
        height={62}
      />
    ),
    link: "#",
  },
  {
    id: 3,
    title: "Neurosciences (Brain & Spine Surgery)",
    description:
      "Comprehensive treatment for complex neurological disorders and minimally invasive spine surgeries.",
    icon: (
      <Image
        src={"/specialities/neuro.svg"}
        alt="icon"
        width={62}
        height={62}
      />
    ),
    link: "#",
  },
  {
    id: 4,
    title: "Orthopaedics & Joint Replacement",
    description:
      "Specialized care for bone health, sports injuries, and robotic-assisted joint replacement surgeries.",
    icon: (
      <Image
        src={"/specialities/ortho.svg"}
        alt="icon"
        width={62}
        height={62}
      />
    ),
    link: "#",
  },
  {
    id: 5,
    title: "ENT & Cochlear Implant",
    description:
      "Expert solutions for hearing loss, sinus issues, and advanced cochlear implant procedures.",
    icon: (
      <Image src={"/specialities/ent.svg"} alt="icon" width={62} height={62} />
    ),
    link: "#",
  },
  {
    id: 6,
    title: "Urology",
    description:
      "Precision treatment for kidney health, urinary disorders, and advanced laser-assisted procedures.",
    icon: (
      <Image
        src={"/specialities/urology.svg"}
        alt="icon"
        width={62}
        height={62}
      />
    ),
    link: "#",
  },
  {
    id: 7,
    title: "Bone Marrow Transplantation (BMT)",
    description:
      "High-precision bone marrow transplants and specialized care for complex blood-related disorders.",
    icon: (
      <Image src={"/specialities/bone.svg"} alt="icon" width={62} height={62} />
    ),
    link: "#",
  },
  {
    id: 8,
    title: "Plastic & Reconstructive Surgery",
    description:
      "Specialized reconstructive procedures and aesthetic surgeries led by board-certified experts.",
    icon: (
      <Image
        src={"/specialities/plastic.svg"}
        alt="icon"
        width={62}
        height={62}
      />
    ),
    link: "#",
  },
  {
    id: 9,
    title: "Critical Care Medicine",
    description:
      "Round-the-clock intensive care with advanced life support systems for emergency recovery.",
    icon: (
      <Image
        src={"/specialities/critical.svg"}
        alt="icon"
        width={62}
        height={62}
      />
    ),
    link: "#",
  },
  {
    id: 10,
    title: "Gastrointestinal (GI) Surgery",
    description:
      "Advanced surgical interventions for digestive health using the latest laparoscopic techniques.",
    icon: (
      <Image
        src={"/specialities/gastro.svg"}
        alt="icon"
        width={62}
        height={62}
      />
    ),
    link: "#",
  },
];

// --- Sub-Components ---

const SectionHeader = () => (
  <div className="flex flex-col justify-start h-full pr-6">
    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 leading-tight">
      Excellence Across Medical Specialties
    </h2>
    <p className="text-lg text-gray-600 leading-relaxed mb-6">
      Access world-class clinical expertise and advanced treatment protocols
      across our specialized centers of excellence.
    </p>
  </div>
);

// Added h-full to the outer div so it stretches to fill the SwiperSlide
const SpecialtyCard = ({ specialty }: { specialty: Specialty }) => (
  <div className="bg-white rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-100">
    <div className="mb-6">{specialty.icon}</div>
    <p className="text-xl font-medium text-black mb-3">{specialty.title}</p>
    <p className="text-[#4B4B4B] text-sm leading-relaxed mb-6 flex-grow">
      {specialty.description}
    </p>
    <a
      href={specialty.link}
      className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
    >
      Learn More
      <ArrowUpRight className="w-4 h-4 ml-1" />
    </a>
  </div>
);

// --- Main Component ---

const MedicalSpecialtiesSection = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#F3FBFF] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* === MOBILE LAYOUT (Stacked Title + Swiper) === */}
        <div className="block lg:hidden">
          <div className="mb-8">
            <SectionHeader />
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 24 },
            }}
            className="pb-12 !overflow-visible"
          >
            {specialtiesData.map((specialty) => (
              // Added !h-auto to force the slide to stretch to the container's height
              <SwiperSlide key={specialty.id} className="!h-auto">
                <SpecialtyCard specialty={specialty} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* === DESKTOP LAYOUT (Unified Grid) === */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          <div className="col-span-2 row-span-1">
            <SectionHeader />
          </div>
          {specialtiesData.map((specialty) => (
            <div key={specialty.id} className="col-span-1">
              <SpecialtyCard specialty={specialty} />
            </div>
          ))}
        </div>

        {/* === VIEW ALL BUTTON === */}
        <div className="mt-12 flex justify-center w-full">
          <button className="group flex items-center gap-2 px-8 py-3 rounded-xl border border-[#34ACE1] bg-white text-[#34ACE1] font-semibold hover:bg-blue-50 transition-colors shadow-sm">
            View All
            <span className="bg-[#34ACE1] text-white rounded-full p-1 w-5 h-5 flex items-center justify-center text-xs group-hover:bg-[#34ACE1] group-hover:text-white">
              {">"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MedicalSpecialtiesSection;
