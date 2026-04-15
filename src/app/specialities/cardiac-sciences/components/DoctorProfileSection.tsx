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
  "Advanced cardiothoracic and vascular surgery requires seamless precision and unwavering coordination between surgeons, intensivists, and rehabilitation teams. At ShardaCare – Healthcity, our philosophy extends beyond the operating room. We emphasize a comprehensive approach—from precise diagnostics to cutting-edge interventions like minimally invasive valve replacements and advanced ECMO support. Driven by a culture of surgical innovation, our primary goal is delivering exceptional patient outcomes, even in high-risk scenarios. Advances in cardiovascular therapies allow us to help patients reclaim active, healthy lives. Every procedure is a testament to our collective commitment to clinical excellence, patient safety, and lifelong cardiac wellness.",
];

const DoctorProfileSection: React.FC = () => {
  return (
    <section className="bg-[#FCFDFD] py-8 md:py-0">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 order-2 md:order-1 text-left">
            {/* 1. Doctor Name and Titles */}
            <div className="mb-8 md:block hidden">
              <h2 className="text-4xl md:text-5xl font-medium text-[#111] leading-tight mb-4 tracking-tight">
                {doctorName}
              </h2>

              <div className="flex flex-col gap-1.5">
                <p className="text-xl font-medium text-[#333]">
                  {titleLine1}{" "}
                  {/* Hex color picked to closely match image: a specific peach/red */}
                  <span className="text-[#E33B6B]">{titleHighlight}</span>
                </p>
                <p className="text-xl text-[#4B4B4B] leading-relaxed">
                  {titleDepartment}
                </p>
              </div>
            </div>

            {/* 2. Main Descriptive Text (in paragraphs) */}
            <div className="prose prose-lg text-[#4B4B4B] italic space-y-6 leading-relaxed max-w-none">
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
              src="/cardiac-sciences/akhil-cardiac.png"
              width={1000}
              height={1000}
              alt={`${doctorName} Profile with background elements`}
              className="w-full h-auto max-w-[500px] md:max-w-[450px] lg:max-w-[550px] object-contain rounded-xl"
            />
            <div className="mt-4 flex flex-col items-center justify-center md:hidden">
              <h2 className="text-2xl font-medium text-[#111] leading-tight mb-1 tracking-tight">
                {doctorName}
              </h2>

              <div className="flex flex-col items-center justify-center gap-1.5">
                <p className="text-xl font-medium text-[#333] text-center">
                  {titleLine1}{" "}
                  {/* Hex color picked to closely match image: a specific peach/red */}
                  <span className="text-[#E33B6B]">{titleHighlight}</span>
                </p>
                <p className="text-md text-[#4B4B4B] leading-relaxed text-center">
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
