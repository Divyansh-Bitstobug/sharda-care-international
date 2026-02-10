"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  FileText,
  Share2,
  Facebook,
  MessageCircle, // WhatsApp
  Send,          // Telegram
  Mail,          // Email
  Download,
} from "lucide-react";

// --- Types & Data ---

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  pdf: string;
};

const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: "Dr. Pawan Kumar Singh",
    specialty: "Oncology",
    experience: "15+",
    image: "/doctors/pawan.png",
    pdf: "/pdfs/pawan.pdf",
  },
  {
    id: 2,
    name: "Dr. Anil Thakwani",
    specialty: "Oncology",
    experience: "25+",
    image: "/doctors/anil.png",
    pdf: "/pdfs/anil.pdf",
  },
  {
    id: 3,
    name: "Dr. Hemkant Verma",
    specialty: "Oncology",
    experience: "12+",
    image: "/doctors/hemkant.png",
    pdf: "/pdfs/hemkant.pdf",
  },
  {
    id: 4,
    name: "Dr. Vivek Tandon",
    specialty: "Cardiac Sciences",
    experience: "20+",
    image: "/doctors/vivek.png",
    pdf: "/pdfs/vivek.pdf",
  },
  {
    id: 5,
    name: "Dr. Akhil Kumar Rustagi",
    specialty: "Cardiac Sciences",
    experience: "25+",
    image: "/doctors/akhil.png",
    pdf: "/pdfs/akhil.pdf",
  },
  {
    id: 6,
    name: "Dr. Nishit Palo",
    specialty: "Orthopaedics",
    experience: "12+",
    image: "/doctors/nishit.png",
    pdf: "/pdfs/nishit.pdf",
  },
  {
    id: 7,
    name: "Dr. Atampreet Singh",
    specialty: "Neurosciences",
    experience: "25+",
    image: "/doctors/atampreet.png",
    pdf: "/pdfs/atampreet.pdf",
  },
  {
    id: 8,
    name: "Dr. Ravindra Srivastava",
    specialty: "Neurosciences",
    experience: "23+",
    image: "/doctors/ravindra.png",
    pdf: "/pdfs/ravindra.pdf",
  },
  {
    id: 9,
    name: "Dr. Pushkar Chawla",
    specialty: "Orthopaedics",
    experience: "25+",
    image: "/doctors/pushkar.png",
    pdf: "/pdfs/pushkar.pdf",
  },
];

// --- Card Component ---

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsShareOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = doctor.pdf;
    link.download = `${doctor.name.replace(/\./g, "").replace(/\s+/g, "_")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsShareOpen(!isShareOpen);
  };

  // Construct full PDF URL for sharing
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const shareUrl = `${origin}${doctor.pdf}`;
  const shareText = `Check out the profile of ${doctor.name}, ${doctor.specialty} Specialist at ShardaCare.`;

  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-[#EF5375] hover:shadow-lg">
      
      {/* Image Container */}
      <div className="relative aspect-[5/5] w-full overflow-hidden bg-gray-50">
        
        {/* Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
           <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        </div>
        
        {/* Actual Image */}
        <Image src={doctor.image} alt={doctor.name} fill className="object-cover w-full h-full object-top" />

        {/* --- Hover Overlay Actions --- */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex translate-y-4 items-center justify-between px-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          
          {/* 1. DOWNLOAD BUTTON */}
          <button 
            onClick={handleDownload}
            className="flex flex-1 items-center justify-between rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-50 active:scale-95 transition-transform"
          >
            <span>Download</span>
            <FileText className="h-4 w-4 text-gray-600" />
          </button>
          
          {/* 2. SHARE BUTTON & DROPDOWN */}
          <div className="relative ml-2" ref={dropdownRef}>
            <button 
              onClick={toggleShare}
              className={`flex items-center justify-center rounded-lg bg-white p-2 shadow-md transition-colors ${isShareOpen ? "bg-gray-100 ring-2 ring-blue-100" : "hover:bg-gray-50"}`}
            >
              <Share2 className="h-5 w-5 text-gray-600" />
            </button>

            {/* Share Dropdown Menu */}
            {isShareOpen && (
              <div className="absolute bottom-full right-0 mb-2 flex flex-col gap-1 rounded-xl border border-gray-100 bg-white p-2 shadow-xl min-w-[150px] animate-in fade-in zoom-in-95 duration-200 z-30">
                
                {/* Telegram */}
                <a 
                  href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                >
                  <Image 
                    src={"/socials/telegram.svg"}
                    alt="icon"
                    width={1000}
                    height={1000}
                    className="w-4 h-4"
                  /> Telegram
                </a>

                {/* WhatsApp */}
                <a 
                  href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`} 
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  <Image 
                    src={"/socials/whatsapp.svg"}
                    alt="icon"
                    width={1000}
                    height={1000}
                    className="w-4 h-4"
                  />  WhatsApp
                </a>

                {/* Facebook */}
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <Image 
                    src={"/socials/facebook.svg"}
                    alt="icon"
                    width={1000}
                    height={1000}
                    className="w-4 h-4"
                  />  Facebook
                </a>

                {/* Email */}
                <a 
                  href={`mailto:?subject=${encodeURIComponent(`Doctor Profile: ${doctor.name}`)}&body=${encodeURIComponent(shareText + "\n\nLink: " + shareUrl)}`}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  <Image 
                    src={"/socials/gmail.svg"}
                    alt="icon"
                    width={1000}
                    height={1000}
                    className="w-4 h-4"
                  />  Email
                </a>

              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Content */}
      <div className="flex flex-grow flex-col p-4">
        <h3 className="mb-1 text-lg font-medium text-gray-900">
          {doctor.name}
        </h3>
        <p className="mb-4 text-sm font-medium text-[#34ACE1]">
          {doctor.specialty}
        </p>
        <div className="mt-auto flex items-center rounded-lg bg-[#F5F5F5] px-3 py-2">
          <GraduationCap className="mr-2 h-5 w-5 text-gray-700" />
          <span className="text-sm flex items-center justify-between w-full font-semibold text-gray-700">
            {doctor.experience}
            <span className=" font-normal text-gray-500">Years of Experience</span>
          </span>
        </div>
      </div>
    </div>
  );
};

// --- Main Section Component ---

const MedicalExpertsSection: React.FC = () => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-[1400px] px-4">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-medium text-gray-900 md:text-4xl">
            Our Medical Experts
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-500 md:text-base">
            World-renowned specialists providing advanced clinical care and a seamless medical experience for every patient.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative px-0 md:px-12">
          
          {/* Navigation Arrows */}
          <button
            ref={(node) => setPrevEl(node)}
            className="absolute -left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-transform hover:scale-110 hover:bg-gray-50 disabled:opacity-50 md:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            ref={(node) => setNextEl(node)}
            className="absolute -right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-transform hover:scale-110 hover:bg-gray-50 disabled:opacity-50 md:flex"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl, nextEl }}
            spaceBetween={20}
            slidesPerView={1.2}
            loop
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              768: { slidesPerView: 3.2, spaceBetween: 24 },
              1024: { slidesPerView: 4.2, spaceBetween: 24 },
              1280: { slidesPerView: 4.2, spaceBetween: 24 },
            }}
            className="!pb-10 !pt-2"
          >
            {DOCTORS.map((doctor) => (
              <SwiperSlide key={doctor.id} className="!h-auto">
                <DoctorCard doctor={doctor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MedicalExpertsSection;