"use client";

import RequestCallBackForm from "@/components/RequestCallbackForm";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { X } from "lucide-react";

const FORM_WIDTH = 370;

const HeroSection: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoId = "9jqObOJb1Fc"; // Extracted from your youtu.be link

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showVideo]);

  const handleClose = () => setShowVideo(false);

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center w-full rounded-lg p-4 md:p-8 md:pt-0 gap-6 relative bg-white overflow-hidden min-h-screen"
    >
      <div className="flex flex-col md:flex-row h-full w-full max-w-[1200px]">
        <Image
          src="/home/hero.png"
          alt="image"
          width={750}
          height={300}
          className="absolute right-56 md:block hidden bg-transparent"
        />
        <Image
          src="/home/hero.png"
          alt="image"
          width={230}
          height={230}
          className="absolute right-0 md:hidden block w-40 h-52 object-cover object-left"
        />
        <div className="flex flex-col flex-1 ">
          <div className="flex md:flex-col gap-4 items-center md:items-start w-full">
            <div className="border-b border-[#D9D9D9] pb-3">
              <h2 className="text-xl md:text-3xl font-bold mb-5 text-left text-[#303030]">
                Your{" "}
                <span className="bg-gradient-to-r from-[#E3376D] to-[#ED814A] bg-clip-text text-transparent inline-block">
                  Trusted Partner
                </span>{" "}
                for <br className="hidden md:block" />
                International Healthcare
                <br /> Needs
              </h2>
              <p className="text-[#4B4B4B] mb-5 text-left text-sm md:text-lg max-w-[260px] md:max-w-lg">
                ShardaCare understands the challenges of seeking treatment abroad.
              </p>
              <div className="flex sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4 w-full mx-auto md:mx-0">
                <Link
                  href={"/under-construction"}
                  className=" px-2 md:px-5 md:py-2 py-1 rounded-3xl bg-black text-[10px] md:text-base text-white font-medium w-fit flex items-center justify-center gap-[4px] md:gap-2"
                >
                  <Image
                    src="/assets/doctor-btn.svg"
                    alt="icon"
                    width={2000}
                    height={2000}
                    className="md:w-6 md:h-6 w-3 h-3"
                  ></Image>
                  Find A Doctor
                </Link>
                <Link
                  href={"/under-construction"}
                  className="px-2 py-1 md:px-5 md:py-2 rounded-3xl border text-[10px] md:text-base border-black font-medium w-fit flex items-center justify-center gap-2"
                >
                  Get an Expert Opinion
                  <span className="bg-black px-1 py-1 rounded-full">
                    <FaChevronRight color="white" size={10} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* Virtual Tour Button/Card */}
          <div className="mt-6 md:w-[400px] flex flex-col gap-4">
            {/* Changed from Link to Button to trigger popup */}
            <button
              onClick={() => setShowVideo(true)}
              className="flex flex-row items-center justify-between w-full max-w-md px-4 py-2 bg-gradient-to-r from-[#E3376D] to-[#ED814A] text-white rounded-lg font-bold shadow relative overflow-hidden"
            >
              <span className="mr-2 flex items-center">
                <Image
                  src="/assets/drum.svg"
                  alt="drum"
                  width={200}
                  height={200}
                  className="w-8 h-8"
                />
              </span>
              <span className="flex-1 text-left">
                Get Virtual Tour
                <div className="block text-xs font-normal">
                  Click the video to get the virtual tour
                </div>
              </span>
              <span className="ml-2">
                <Image
                  src="/assets/video.png"
                  alt="video-icon"
                  width={36}
                  height={36}
                />
              </span>
            </button>

            <div className="bg-gradient-to-r from-[#EA7154] to-[#FFFFFF] p-[1px] rounded-[12px]">
              <button className="flex items-center justify-baseline bg-gradient-to-r from-[#FFFFFF] to-[#FFEADA] px-4 py-2 rounded-[12px]">
                <span className="bg-gradient-to-t from-[#E3376D] to-[#ED814A] py-2 px-2.5 rounded-full">
                  <svg
                    width="10"
                    height="13"
                    viewBox="0 0 10 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.92092 4.05956L4.05654 0.492616C3.67661 0.214403 3.22705 0.0468311 2.75771 0.00847424C2.28836 -0.0298826 1.81757 0.062474 1.3975 0.275307C0.977431 0.48814 0.624502 0.813135 0.377833 1.21427C0.131163 1.6154 0.000388187 2.07701 3.07728e-06 2.54792V9.68537C-0.000729535 10.1567 0.129362 10.6191 0.375796 11.0209C0.622231 11.4227 0.97534 11.7482 1.39582 11.9613C1.8163 12.1743 2.28765 12.2665 2.75741 12.2276C3.22716 12.1886 3.6769 12.0201 4.05654 11.7407L8.92092 8.17373C9.24369 7.93686 9.50615 7.62732 9.68706 7.27016C9.86797 6.91301 9.96223 6.51827 9.96223 6.11792C9.96223 5.71756 9.86797 5.32283 9.68706 4.96567C9.50615 4.60852 9.24369 4.29898 8.92092 4.06211V4.05956Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-left ml-2">
                  Your journey from Delhi International airport to ShardaCare - Healthcity
                </span>
                <span className="bg-black py-2 px-3 rounded-full">
                  <svg
                    width="21"
                    height="12"
                    viewBox="0 0 21 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.75 0.75L5.75 5.39286L0.75 10.3929"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7.75 0.75L12.75 5.39286L7.75 10.3929"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.75 0.75L19.75 5.39286L14.75 10.3929"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="z-10 md:mt-0 mt-5">
          <RequestCallBackForm />
        </div>
      </div>

      {/* Video Popup Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Virtual Tour
              </h3>
              <button
                onClick={handleClose}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-red-500 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              ></iframe>
            </div>
          </div>
          <div className="absolute inset-0 -z-10" onClick={handleClose}></div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;