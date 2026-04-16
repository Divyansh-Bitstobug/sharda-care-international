import Image from "next/image";
import React from "react";

// Content Data
const doctorName = "Dr. Akhil Kumar Rustagi";
const titleLine1 = "Senior Director & HOD |";
const titleHighlight = "25+ Years of Experience"; // Note: Color handling is in the JSX
const titleDepartment =
  "Department of Cardiothoracic & Vascular Surgery, ShardaCare – Healthcity";

// Paragraph content, split logically for readability and structure
const paragraphs = [
  "Advanced cardiothoracic and vascular surgery demands seamless precision and expert coordination. At ShardaCare – Healthcity, our philosophy extends beyond the operating room. We provide a comprehensive approach—from precise diagnostics to cutting-edge interventions like minimally invasive valve replacements and ECMO support. Driven by surgical innovation, our goal is exceptional outcomes, even in high-risk scenarios. Every procedure reflects our commitment to clinical excellence, patient safety, and helping you reclaim an active, healthy life.",
];

const DoctorProfileSection: React.FC = () => {
  return (
    <section className="bg-[#FCFDFD] py-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 order-2 md:order-1 text-left">
            {/* 1. Doctor Name and Titles */}
            <div className="mb-16 md:block hidden">
              <h2 className="text-3xl md:text-4xl font-medium text-[#333333] leading-tight mb-4 tracking-tight">
                {doctorName}
              </h2>

              <div className="flex flex-col gap-1.5">
                <p className="text-xl font-medium text-[#333]">
                  {titleLine1}{" "}
                  {/* Hex color picked to closely match image: a specific peach/red */}
                  <span className="text-[#E33B6B]">{titleHighlight}</span>
                </p>
                <p className="text-xl text-[#4B4B4B] mt-2">
                  {titleDepartment}
                </p>
              </div>
            </div>

            {/* 2. Main Descriptive Text (in paragraphs) */}
            <div className="prose prose-lg text-[#4B4B4B] italic space-y-6 leading-relaxed max-w-none md:text-left text-center">
              {paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>

          {/* === (B) Mobile Top / Desktop Right: Whole Image Asset === */}
          {/* This container ensures the image does not grow too large on desktop and is aligned correctly. */}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col justify-center md:justify-end mb-12 md:mb-0">
            {/* The single, complete image asset is placed here. object-contain is suggested. */}
            <Image
              src="/cardiac-sciences/cardiac-akhil.png"
              width={1000}
              height={1000}
              alt={`${doctorName} Profile with background elements`}
              className="w-full border-b border-[#E8E8E8] md:border-b-0 h-auto md:max-w-[450px] lg:max-w-[550px] object-contain"
            />
            <div className="mt-4 flex flex-col items-center justify-center md:hidden">
              <h2 className="text-2xl font-medium text-[#111] leading-tight mb-1 tracking-tight">
                {doctorName}
              </h2>

              <div className="flex flex-col items-center justify-center gap-1.5">
                <p className="text-sm font-medium text-[#333] text-center">
                  {titleLine1}{" "}
                  {/* Hex color picked to closely match image: a specific peach/red */}
                  <span className="text-[#E33B6B]">{titleHighlight}</span>
                </p>
                <p className="text-sm text-[#4B4B4B] leading-relaxed text-center">
                  {titleDepartment}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfileSection;
