"use client";
import React from "react";
import Image from "next/image";

const FORM_WIDTH = 370;

const steps = [
  {
    icon: "/assets/medical-query-icon.png",
    title: "Medical Query",
    subtitle: "Firstly we do",
    color: "bg-blue-100 text-blue-500 border-blue-300",
    align: "left",
  },
  {
    icon: "/assets/expert-opinion-icon.png",
    title: "Opinion from Experts",
    subtitle: "After step",
    color: "bg-pink-100 text-pink-500 border-pink-300",
    align: "right",
  },
  {
    icon: "/assets/visa-assist-icon.png",
    title: "Visa Assistance",
    subtitle: "Once opinion done",
    color: "bg-yellow-100 text-yellow-500 border-yellow-300",
    align: "left",
  },
  {
    icon: "/assets/travel-stay-icon.png",
    title: "Travel & Stay",
    subtitle: "After visa approved",
    color: "bg-blue-100 text-blue-500 border-blue-300",
    align: "right",
  },
  {
    icon: "/assets/treatment-icon.png",
    title: "Treatment",
    subtitle: "Once you reach",
    color: "bg-pink-100 text-pink-500 border-pink-300",
    align: "left",
  },
  {
    icon: "/assets/followup-icon.png",
    title: "Post-Treatment Follow-Up",
    subtitle: "Our guidance",
    color: "bg-cyan-100 text-cyan-500 border-cyan-300",
    align: "right",
  },
];

// const MedicalJourneySection: React.FC = () => {
//   return (
//     <section className="flex flex-row w-full px-8 py-12 max-w-[1300px] mx-auto">
//       Main Left Content
//       <div className="flex-1 max-w-5xl">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="flex items-center w-full my-6">
//             <div
//               className="flex-1"
//               style={{
//                 borderTop: "2px dashed transparent",
//                 borderImage:
//                   "repeating-linear-gradient(to right, #D1D5DB 0 12px, transparent 12px 32px)",
//                 borderImageSlice: 1,
//               }}
//             />
//             <h2 className="mx-4 text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#E3376D] to-[#ED814A] bg-clip-text text-transparent inline-block">
//               Your Medical Journey
//             </h2>
//             <div
//               className="flex-1"
//               style={{
//                 borderTop: "2px dashed transparent",
//                 borderImage:
//                   "repeating-linear-gradient(to right, #D1D5DB 0 12px, transparent 12px 32px)",
//                 borderImageSlice: 1,
//               }}
//             />
//           </div>
//           <div className="w-full flex justify-center mb-2">
//             <span className="border-t border-dashed w-64 border-gray-300"></span>
//           </div>
//           <p className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto">
//             ShardaCare understands the challenges of seeking treatment abroad. Our tailored services ensure a seamless experience for international patients.
//           </p>
//         </div>
//         {/* Timeline Steps Section */}
//         <div className="flex items-center justify-center w-full">
//           <div className="relative w-full flex flex-row items-center justify-center" style={{ minHeight: 440 }}>
//             {/* Timeline vertical line */}
//             <div className="absolute left-1/2 -translate-x-1/2 h-full w-2 flex flex-col items-center justify-between z-0">
//               <div className="flex flex-col h-full justify-around gap-0">
//                 <div className="h-full border-r-4 border-dotted border-gray-300 w-0 mx-auto" />
//               </div>
//             </div>
//             {/* Steps mapped */}
//             {steps.map((step, idx) => {
//               // left steps are on left, right steps are on right
//               const isLeft = step.align === "left";
//               return (
//                 <div key={idx}
//                   className={`absolute w-96 ${isLeft ? "left-0 pr-16" : "right-0 pl-16"} top-[${idx * 70 + 20}px] flex ${isLeft ? "justify-end" : "justify-start"} items-center`}
//                   style={{ top: `${idx * 70 + 20}px` }}
//                 >
//                   <div className={`flex gap-4 items-center ${isLeft ? "flex-row-reverse" : "flex-row"}`}>
//                     {/* Card */}
//                     <div className={`bg-white rounded-xl shadow border px-5 py-3 w-[230px] ${step.color}`}>
//                       <div className="flex items-center gap-2 mb-1">
//                         <Image src={step.icon} width={32} height={32} alt={step.title} />
//                         <span className={`font-semibold text-base ${step.color}`}>{step.title}</span>
//                       </div>
//                       <div className="text-xs text-gray-500">{step.subtitle}</div>
//                     </div>
//                     {/* Step Number Circle */}
//                     <div className="flex flex-col items-center">
//                       <div className="w-11 h-11 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white text-lg shadow border-4 border-gray-300">
//                         {String(idx + 1).padStart(2, "0")}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Spacer for fixed form on right */}
//       <div
//         className="hidden md:block"
//         style={{
//           width: FORM_WIDTH,
//           minWidth: FORM_WIDTH,
//           flexShrink: 0,
//           height: "1px",
//         }}
//       />
//     </section>
//   );
// };

// export default MedicalJourneySection;
const MedicalJourneySection: React.FC = () => {
  return (
    <section className="flex flex-row w-full px-8 py-12 max-w-[1300px] mx-auto">
      {/* Spacer for fixed form on right */}
      <Image 
        src="/assets/medical-journey.png"
        alt="medical journey"
        width={2000}
        height={2000}
        className="w-[700px] h-full"
      />
      <div
        className="hidden md:block"
        style={{
          width: FORM_WIDTH,
          minWidth: FORM_WIDTH,
          flexShrink: 0,
          height: "1px",
        }}
      />
    </section>
  );
};
export default MedicalJourneySection;
