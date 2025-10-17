"use client";
import Image from "next/image";
import React, { useState } from "react";

const RequestCallBackForm: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [locality, setLocality] = useState("India");
  const [query, setQuery] = useState("");
  const [whatsappOptIn, setWhatsappOptIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // form submit logic
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" border border-blue-100 p-0 rounded-[24px] max-w-[410px] w-full"
        style={{
          overflow: "hidden",
          minWidth: 340,
          backgroundImage: "url('/assets/form-bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="pb-0">
          {/* Header */}
          <div className="flex items-center rounded-t-[20px] px-6 py-4 mb-2 relative h-20">
            <span className="text-lg font-semibold text-white tracking-wide bg-[#34ACE1] absolute left-0 pl-9 p-1 pr-3 rounded-r-lg flex items-center justify-center gap-3">
              <Image
                src="/assets/phone.png"
                alt="icon"
                width={20}
                height={20}
              />
              Request a Call Back
            </span>
          </div>
          <div className="px-6">
            {/* Input fields */}
            <input
              className="w-full h-[44px] border border-gray-300 rounded-lg px-4 mb-3 text-base placeholder-gray-400 focus:outline-none focus:border-blue-300 bg-white"
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <div className="flex gap-3 mb-3">
              <div className="flex items-center border border-gray-300 bg-white rounded-lg px-2 h-[44px]">
                {/* India flag emoji -- replace with SVG for pixel-perfect fidelity */}
                <span className="mr-2">🇮🇳</span>
                <span className="text-gray-700 font-medium">+91</span>
                <span className="ml-1">
                  <svg
                    className="w-3 h-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
              <input
                className="flex-1 border border-gray-300 rounded-lg px-4 h-[44px] text-base placeholder-gray-400 focus:outline-none focus:border-blue-300 bg-white"
                type="tel"
                placeholder="Enter Mobile No."
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <input
              className="w-full h-[44px] border border-gray-300 rounded-lg px-4 mb-3 text-base placeholder-gray-400 focus:outline-none focus:border-blue-300 bg-white"
              type="email"
              placeholder="Enter Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <select
              className="w-full h-[44px] border border-gray-300 rounded-lg px-4 mb-3 text-base text-gray-700 focus:outline-none focus:border-blue-300 bg-white"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
            >
              <option value="India">Locality : India</option>
              {/* Add more options here if desired */}
            </select>
            <select
              className="w-full h-[44px] border border-gray-300 rounded-lg px-4 mb-3 text-base text-gray-600 focus:outline-none focus:border-blue-300 bg-white"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            >
              <option value="">Query</option>
              <option value="Treatment">Treatment</option>
              <option value="Cost">Cost</option>
              <option value="Appointment">Appointment</option>
            </select>
            <hr
              className="my-4 border-t border-dashed"
              style={{
                borderTopWidth: "1px",
                borderTopStyle: "solid",
                borderTopColor: "transparent",
                borderImageSource:
                  "repeating-linear-gradient(to right, #34ACE1 0, #34ACE1 5px, transparent 5px, transparent 15px)",
                borderImageSlice: 1,
                WebkitMaskImage:
                  "-webkit-linear-gradient(left, black 0%, black 100%)",
              }}
            />
            <label className="flex items-center text-sm mb-3">
              <input
                type="checkbox"
                checked={whatsappOptIn}
                onChange={() => setWhatsappOptIn(!whatsappOptIn)}
                className="mr-2 accent-blue-500 scale-110"
              />
              <span>
                Get Updates on Whatsapp. I agree to the{" "}
                <a href="#" className="text-[#EC7B4C] underline">
                  T&C.
                </a>
              </span>
            </label>
            <button
              className="w-full h-[52px] rounded-[14px] bg-gradient-to-b from-[#43455B] to-[#282A3C] text-white font-semibold text-lg mb-3"
              type="submit"
            >
              Submit Details
            </button>
          </div>
        </div>
      </form>
      {/* Contact options */}
      <div className="flex gap-4 p-3 bg-white/40 mt-2 rounded-[30px] backdrop-blur-[20px]">
        {/* WhatsApp button */}
        <a
          href="https://wa.me/919522992222"
          className="bg-[#35b64a] flex-1 flex items-center px-2 py-2 gap-2  rounded-2xl  relative overflow-hidden"
          style={{
            boxShadow: "0 4px 32px 0 rgba(52, 172, 225, 0.10)",
          }}
        >
          <Image 
              src="/assets/background-blur.svg"
              alt="blur"
              width={52}
              height={50}
              className="absolute -top-2 -left-1"
            />
          <div className="ml-3 relative">
            <Image 
              src="/assets/whatsapp.svg"
              alt="wahstapp"
              width={20}
              height={20}
            />
          </div>
          {/* Left icon large circle background with arc */}
          <div className="flex flex-col justify-center z-10">
            <span className="text-white/80 font-semibold text-xs">
              WhatsApp Us
            </span>
            <span className="text-white font-bold text-xs leading-tight">
              +91 9922 9922 22
            </span>
          </div>
        </a>
        {/* Call button */}
        <a
          href="tel:+919522992222"
          className="bg-[#47b2ec] flex-1 flex items-center px-2 py-2 gap-2  rounded-2xl  relative overflow-hidden"
          style={{
            boxShadow: "0 4px 32px 0 rgba(52, 172, 225, 0.10)",
          }}
        >
          <Image 
              src="/assets/background-blur.svg"
              alt="blur"
              width={52}
              height={50}
              className="absolute -top-2 -left-1"
            />
          <div className="ml-3 relative">
            <Image 
              src="/assets/phone.png"
              alt="wahstapp"
              width={20}
              height={20}
            />
          </div>
          <div className="flex flex-col justify-center z-10">
            <span className="text-white/80 font-semibold text-xs">Call Us</span>
            <span className="text-white font-bold text-xs leading-tight">
              +91 9922 9922 22
            </span>
          </div>
        </a>
      </div>
    </>
  );
};

export default RequestCallBackForm;
