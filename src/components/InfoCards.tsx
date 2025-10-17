import Image from "next/image";
import React from "react";

interface InfoCardProps {
  icon: string;      // Pass a pre-styled SVG/component here
  heading: string;
  description: string;
  bgEllipseColor?: string;    // Tailwind class
  blurEllipseColor?: string;  // Tailwind class
  headingColor?: string;      // Tailwind class
  descColor?: string;         // Tailwind class
}

export default function InfoCard({
  icon,
  heading,
  description,
  bgEllipseColor = "bg-blue-400",
  headingColor = "text-black",
  descColor = "text-blue-400",
}: InfoCardProps) {
  return (
    <div className="relative rounded-xl border border-gray-200 bg-white w-full md:w-[270px] p-6 overflow-hidden">
      <div className={`absolute top-[-32px] left-[-32px] w-[78px] h-[67px] md:w-[116px] md:h-[87px] rounded-full scale-x-[1.5] ${bgEllipseColor} z-0`} />
      <div className={`absolute top-0 left-0 w-[61px] h-[103px] md:w-[106px] md:h-[180px]`} >
        <Image 
          src="/assets/home/blur.svg"
          alt="blur"
          width={2000}
          height={2000}
        />
      </div>
      <div className="absolute -top-2 md:top-0 left-0 md:left-4 flex items-center justify-center w-16 h-13 z-10">
        <Image 
            src={icon}
            alt="icon"
            width={200}
            height={200}
            className="w-10 h-10 md:w-20 md:h-20"
        />
      </div>
      <div className="relative z-10 mt-3">
        <div className={`text-[11px] md:text-[26px] font-medium ${headingColor} md:mt-13 leading-tight`}>{heading}</div>
        <div className={`text-[9px] md:text-[18px] ${descColor}`}>{description}</div>
      </div>
    </div>
  );
}
