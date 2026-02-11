"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  FileText,
  Share2,
  MoreVertical,
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsShareOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
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
    setIsMobileMenuOpen(false);
  };

  const toggleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsShareOpen(!isShareOpen);
  };

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const shareUrl = `${origin}${doctor.pdf}`;
  const shareText = `Check out the profile of ${doctor.name}, ${doctor.specialty} Specialist at ShardaCare.`;

  const renderSocialLinks = () => (
    <>
      <a href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors">
        <Image src={"/socials/telegram.svg"} alt="icon" width={16} height={16} className="w-4 h-4" /> Telegram
      </a>
      <a href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
        <Image src={"/socials/whatsapp.svg"} alt="icon" width={16} height={16} className="w-4 h-4" /> WhatsApp
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
        <Image src={"/socials/facebook.svg"} alt="icon" width={16} height={16} className="w-4 h-4" /> Facebook
      </a>
      <a href={`mailto:?subject=${encodeURIComponent(`Doctor Profile: ${doctor.name}`)}&body=${encodeURIComponent(shareText + "\n\nLink: " + shareUrl)}`} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
        <Image src={"/socials/gmail.svg"} alt="icon" width={16} height={16} className="w-4 h-4" /> Email
      </a>
    </>
  );

  return (
    // 1. Removed overflow-hidden from here so dropdowns can spill out
    <div className="group relative flex h-full w-full flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-[#EF5375] hover:shadow-lg">
      
      {/* 2. Kept overflow-hidden here for the image only */}
      <div className="relative aspect-[5/5] w-full overflow-hidden rounded-t-2xl bg-gray-50">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
           <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        </div>
        <Image src={doctor.image} alt={doctor.name} fill className="object-cover w-full h-full object-top" />
        
        {/* Desktop Hover Overlay */}
        <div className="absolute bottom-4 left-0 right-0 z-20 hidden md:flex translate-y-4 items-center justify-between px-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button onClick={handleDownload} className="flex flex-1 items-center justify-between rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-50 active:scale-95 transition-transform">
            <span>Download</span><FileText className="h-4 w-4 text-gray-600" />
          </button>
          <div className="relative ml-2" ref={dropdownRef}>
            <button onClick={toggleShare} className={`flex items-center justify-center rounded-lg bg-white p-2 shadow-md transition-colors ${isShareOpen ? "bg-gray-100 ring-2 ring-blue-100" : "hover:bg-gray-50"}`}>
              <Share2 className="h-5 w-5 text-gray-600" />
            </button>
            {isShareOpen && (
              <div className="absolute bottom-full right-0 mb-2 flex flex-col gap-1 rounded-xl border border-gray-100 bg-white p-2 shadow-xl min-w-[150px] animate-in fade-in zoom-in-95 duration-200 z-30">
                {renderSocialLinks()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Content */}
      <div className="flex flex-grow flex-col p-4">
        <div className="mb-1 flex items-start justify-between">
          <h3 className="text-lg font-medium text-gray-900 leading-tight pr-2">
            {doctor.name}
          </h3>
          
          {/* Mobile Menu Button */}
          <div className="relative md:hidden" ref={mobileMenuRef}>
            <button 
              onClick={toggleMobileMenu}
              className="p-1 rounded-full"
            >
              <Share2 className="h-6 w-6 text-gray-600" />
            </button>

            {/* Mobile Dropdown - 3. Positioned Upwards (bottom-full) */}
            {isMobileMenuOpen && (
              <div className="absolute right-0 bottom-full mb-2 z-50 w-56 rounded-xl border border-gray-100 bg-white p-2 shadow-xl animate-in fade-in zoom-in-95 duration-200">
                <button 
                  onClick={handleDownload}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors mb-2 border-b border-gray-50 pb-2"
                >
                  <Download className="h-4 w-4" /> Download Profile
                </button>
                <div className="flex flex-col gap-1">
                  <span className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Share via</span>
                  {renderSocialLinks()}
                </div>
              </div>
            )}
          </div>
        </div>

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

// ... (MedicalExpertsSection remains unchanged)
const MedicalExpertsSection: React.FC = () => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="w-full bg-white py-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4">
        
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-medium text-gray-900 md:text-4xl">
            Our Medical Experts
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-500 md:text-base">
            World-renowned specialists providing advanced clinical care and a seamless medical experience for every patient.
          </p>
        </div>

        <div className="relative px-0 md:px-12">
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

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ prevEl, nextEl }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
              768: { slidesPerView: 3, spaceBetween: 24, centeredSlides: false },
              1024: { slidesPerView: 4, spaceBetween: 24, centeredSlides: false },
              1280: { slidesPerView: 4, spaceBetween: 24, centeredSlides: false },
            }}
            className="!pb-12 md:!pb-0 !pt-2 doctor-swiper !overflow-hidden" // Added !overflow-visible here as well just in case
          >
            {DOCTORS.map((doctor) => (
              <SwiperSlide key={doctor.id} className="!h-auto !overflow-visible"> 
                <DoctorCard doctor={doctor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      <style jsx global>{`
        .doctor-swiper .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }
        .doctor-swiper .swiper-pagination-bullet-active {
          background: #34ACE1;
        }
        @media (min-width: 768px) {
          .doctor-swiper .swiper-pagination {
            display: none !important;
          }
        }
        /* Ensure Swiper allows overflow for dropdowns */
        .doctor-swiper {
            overflow: visible !important;
        }
        .swiper-wrapper {
            overflow: visible !important;
        }
      `}</style>
    </section>
  );
};

export default MedicalExpertsSection;