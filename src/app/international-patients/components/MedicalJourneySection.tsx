"use client";
import React from "react";
import Image from "next/image";
import InfoCard from "@/components/InfoCards";
import { FaClinicMedical } from "react-icons/fa";
import DotTrail from "@/components/DotTrail";
import StepCircle from "@/components/StepCircle";

const FORM_WIDTH = 370;

const steps = [
  {
    icon: "/assets/home/journey1.svg",
    title: "Medical Query",
    subtitle: "Firstly we do",
    color: "bg-blue-100 text-blue-500 border-blue-300",
    bgColor: "bg-[#34ACE1]",
    trailColor: "from-[#34ACE1]",
    textColor: "text-[#34ACE1]",
    align: "left",
    number: 1,
  },
  {
    icon: "/assets/home/journey2.svg",
    title: "Opinion from Experts",
    subtitle: "After step",
    color: "bg-pink-100 text-pink-500 border-pink-300",
    align: "right",
    number: 2,
    bgColor: "bg-[#E33A6B]",
    trailColor: "from-[#E33A6B]",
    textColor: "text-[#E33A6B]",
  },
  {
    icon: "/assets/home/journey3.svg",
    title: "Visa Assistance",
    subtitle: "Once opinion done",
    color: "bg-yellow-100 text-yellow-500 border-yellow-300",
    align: "left",
    number: 3,
    bgColor: "bg-[#F2AF09]",
    trailColor: "from-[#F2AF09]",
    textColor: "text-[#F2AF09]",
  },
  {
    icon: "/assets/home/journey4.svg",
    title: "Travel & Stay",
    subtitle: "After visa approved",
    color: "bg-blue-100 text-blue-500 border-blue-300",
    align: "right",
    number: 4,
    bgColor: "bg-[#93C5FD]",
    trailColor: "from-[#93C5FD]",
    textColor: "text-[#93C5FD]",
  },
  {
    icon: "/assets/home/journey5.svg",
    title: "Treatment",
    subtitle: "Once you reach",
    color: "bg-pink-100 text-pink-500 border-pink-300",
    align: "left",
    number: 5,
    bgColor: "bg-[#E23E50]",
    trailColor: "from-[#E23E50]",
    textColor: "text-[#E23E50]",
  },
  {
    icon: "/assets/home/journey6.svg",
    title: "Post-Treatment Follow-Up",
    subtitle: "Our guidance",
    color: "bg-cyan-100 text-cyan-500 border-cyan-300",
    align: "right",
    number: 6,
    bgColor: "bg-[#42B4C0]",
    trailColor: "from-[#42B4C0]",
    textColor: "text-[#42B4C0]",
  },
];

const MedicalJourneySection: React.FC = () => {
  return (
    <section className="flex flex-row w-full px-0 md:px-8 py-12 max-w-[320px] md:max-w-[1300px] mx-auto relative min-h-screen overflow-hidden">
      <div className="flex-1 flex flex-col">
        <div className="flex items-center w-full my-6 pr-0 md:pr-8">
          {" "}
          {/* add pr to leave space for form */}
          <div
            className="flex-1"
            style={{
              borderTop: "2px dashed transparent",
              borderImage:
                "repeating-linear-gradient(to right, #D1D5DB 0 12px, transparent 12px 32px)",
              borderImageSlice: 1,
            }}
          />
          <h2 className="mx-4 text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#E3376D] to-[#ED814A] bg-clip-text text-transparent inline-block">
            Your Medical Journey
          </h2>
          <div
            className="flex-1"
            style={{
              borderTop: "2px dashed transparent",
              borderImage:
                "repeating-linear-gradient(to right, #D1D5DB 0 12px, transparent 12px 32px)",
              borderImageSlice: 1,
            }}
          />
        </div>
        <p className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto text-center mb-20">
          ShardaCare understands the challenges of seeking treatment abroad. Our
          tailored services ensure a seamless experience for international
          patients.
        </p>

        <div className="hidden flex-col w-full md:flex">
          <Image
            src="/assets/home/road.svg"
            alt="icon"
            width={40}
            height={1000}
            className="absolute left-[36%] -translate-x-1/2"
          />
          {steps.map((step, idx) =>
            step.align === "left" ? (
              <div
                key={step.number}
                className="flex h-fit items-center z-10 w-full pl-3"
              >
                <InfoCard
                  icon={step.icon}
                  heading={step.title}
                  description={step.subtitle}
                  bgEllipseColor={step.bgColor}
                  headingColor="text-black"
                  descColor={step.textColor}
                />

                <DotTrail
                  direction="right"
                  trailColor={step.trailColor}
                  width={100}
                  circleColor={step.bgColor}
                />
                <StepCircle number={step.number} />
              </div>
            ) : (
              <div
                key={step.number}
                className="flex flex-row-reverse h-fit items-center z-10 w-full"
              >
                <InfoCard
                  icon={step.icon}
                  heading={step.title}
                  description={step.subtitle}
                  bgEllipseColor={step.bgColor}
                  headingColor="text-black"
                  descColor={step.textColor}
                />

                <DotTrail
                  direction="left"
                  trailColor={step.trailColor}
                  width={100}
                  circleColor={step.bgColor}
                />
                <StepCircle number={step.number} />
              </div>
            )
          )}
        </div>
      </div>
      <div className="md:hidden block">
        <Image
          src="/assets/home/road.svg"
          alt="icon"
          width={30}
          height={1000}
          className="absolute left-0 md:hidden block -z-10"
        />
        <Image
          src="/assets/home/road.svg"
          alt="icon"
          width={30}
          height={1000}
          className="absolute left-0 md:hidden block -z-10"
        />
        {steps.map((step, idx) => (
          <div
            key={step.number}
            className="flex h-fit items-center z-20 w-full mb-10"
          >
            <StepCircle number={step.number} />
            <DotTrail
              direction="left"
              trailColor={step.trailColor}
              width={40}
              circleColor={step.bgColor}
            />
            <InfoCard
              icon={step.icon}
              heading={step.title}
              description={step.subtitle}
              bgEllipseColor={step.bgColor}
              headingColor="text-black"
              descColor={step.textColor}
            />
          </div>
        ))}
      </div>
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
