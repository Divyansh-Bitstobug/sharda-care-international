import RequestCallBackForm from "@/components/RequestCallbackForm";
import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const FORM_WIDTH = 370;

const HeroSection: React.FC = () => (
  <section className="flex flex-col md:flex-row items-center w-full rounded-lg p-4 md:p-8 gap-6 relative max-w-[1300px] bg-white overflow-hidden">
    <div className="flex flex-col flex-1 justify-between h-full w-full">
      {/* Headline and actions */}
      <div className="flex md:flex-col gap-4 items-center md:items-start mt-0 md:-mt-32 w-full">
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-5 text-left">
            Your{" "}
            <span className="bg-gradient-to-r from-[#E3376D] to-[#ED814A] bg-clip-text text-transparent inline-block">
              Trusted Partner
            </span>{" "}
            for <br className="hidden md:block" />
            International Healthcare Services
          </h2>
          <p className="text-[#4B4B4B] mb-5 text-left text-sm md:text-lg">
            ShardaCare understands the challenges of seeking treatment abroad.
            Our tailored services ensure a seamless experience for international
            patients.
          </p>
          <div className="flex sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4 w-full mx-auto md:mx-0">
            <button className=" px-2 md:px-5 md:py-2 py-1 rounded-3xl bg-black text-[10px] md:text-base text-white font-semibold w-fit flex items-center justify-center gap-[4px] md:gap-2">
              <Image 
                src="/assets/doctor-btn.svg"
                alt="icon"
                width={2000}
                height={2000}
                className="md:w-6 md:h-6 w-3 h-3"
              ></Image>Find A Doctor
            </button>
            <button className="px-2 py-1 md:px-5 md:py-2 rounded-3xl border text-[10px] md:text-base border-black font-semibold w-fit flex items-center justify-center gap-2">
              Book Appointment
              <span className="bg-black px-1 py-1 rounded-full">
                <FaChevronRight color="white" size={10}/>
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-center my-4 md:hidden max-w-[100px] scale-200">
          <Image
            src="/assets/home/hero-mobile.png"
            alt="Doctor"
            width={1400}
            height={1800}
            className="object-cover rounded-xl"
          />
        </div>
      </div>
      {/* Doctor image on mobile */}

      {/* Stats */}
      <div className="flex justify-between gap-3 sm:gap-8 mt-2 sm:mt-4 text-gray-700 border-t border-[#D9D9D9] pt-4 md:pt-5">
        <div className="text-left flex-1">
          <div className="text-xl sm:text-3xl font-bold text-[#BFBFBF]">
            30+
          </div>
          <div className="text-xs sm:text-sm">Specialties</div>
        </div>
        <div className="text-left flex-1">
          <div className="text-xl sm:text-3xl font-bold text-[#BFBFBF]">
            65+
          </div>
          <div className="text-xs sm:text-sm">Countries</div>
        </div>
        <div className="text-left flex-1">
          <div className="text-xl sm:text-3xl font-bold text-[#BFBFBF]">
            5K+
          </div>
          <div className="text-xs sm:text-sm">Patient served</div>
        </div>
        <div className="text-left flex-1">
          <div className="text-xl sm:text-3xl font-bold text-[#BFBFBF]">
            600+
          </div>
          <div className="text-xs sm:text-sm">Total Beds</div>
        </div>
      </div>
      {/* Virtual Tour Button/Card */}
      <div className="mt-6 w-full">
        <button className="flex flex-row items-center justify-between w-full max-w-md px-4 py-2 bg-gradient-to-r from-[#E3376D] to-[#ED814A] text-white rounded-lg font-bold shadow relative overflow-hidden">
          <span className="mr-2 flex items-center">
            <Image 
              src="/assets/drum.svg"
              alt="drum"
              width={200}
              height={200}
              className="w-6 h-6"
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
      </div>
    </div>
    {/* Doctor image on desktop */}
    <div className="hidden md:block justify-center flex-1 min-w-[220px] -mr-64">
      <Image
        src="/assets/doctor.png"
        alt="Doctor"
        width={2400}
        height={3200}
        className="object-cover rounded-xl h-[600px] w-auto scale-150 -z-10  mt-10"
      />
    </div>
    {/* Spacer for fixed form */}
    <div
      className="hidden md:block"
      style={{ width: FORM_WIDTH, minWidth: FORM_WIDTH, flexShrink: 0 }}
    />
    <div className="md:hidden block">
      <RequestCallBackForm />
    </div>
  </section>
);

export default HeroSection;
