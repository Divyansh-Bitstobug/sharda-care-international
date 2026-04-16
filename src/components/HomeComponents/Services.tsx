"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

type ServiceItem = {
  title: string;
  description: string;
  cta: string;
  image: string;
};

const services: ServiceItem[] = [
  {
    title: "Request An Estimate",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laud.",
    cta: "LEARN MORE",
    image: "/home/service1.png",
  },
  {
    title: "Plan Your Visit",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laud.",
    cta: "LEARN MORE",
    image: "/home/service2.png",
  },
  {
    title: "Help Desk & FAQ’s",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laud.",
    cta: "LEARN MORE",
    image: "/home/service3.png",
  },
  {
    title: "Insurance Partner Network",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laud.",
    cta: "LEARN MORE",
    image: "/home/service4.png",
  },
];

const Card: React.FC<{ item: ServiceItem; reverse?: boolean }> = ({
  item,
  reverse = false,
}) => (
  <div
    className={`relative flex overflow-hidden border border-black/10 bg-white ${
      reverse ? "flex-row-reverse" : ""
    }`}
  >
    <Image
      src={item.image}
      alt={item.title}
      className="h-[280px] w-1/2 object-cover"
      width={3000}
      height={3000}
    />
    <div className="flex w-1/2 items-center">
      <div className="h-full bg-white p-8 text-left">
        <h3 className="text-xl font-semibold text-[#333]">{item.title}</h3>
        <p className="mt-3 text-sm text-gray-500">{item.description}</p>
        <Link href={"/under-construction"} className="mt-4 text-sm font-bold tracking-wide text-[#E12454]">
          {item.cta}
        </Link>
      </div>
    </div>
  </div>
);

export const InternationalPatientServices: React.FC = () => {
  return (
    <>
    <div id="international-services" />
      <section className="w-full bg-white py-10">
        {/* Heading */}
        <div className="mx-auto max-w-[1200px] px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-medium text-[#333]">
            International Patient Services
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-500">
            Complete guidance, coordination, and assistance for patients
            planning their medical journey overseas with confidence and ease.
          </p>
        </div>

        {/* Desktop: keep existing 2x2 layout */}
        <div className="mx-auto mt-10 hidden max-w-[1200px] lg:grid lg:grid-cols-2">
          <Card item={services[0]} />
          <Card item={services[1]} />
          <Card item={services[2]} reverse />
          <Card item={services[3]} reverse />
        </div>

        {/* Mobile: single big card with Swiper + side arrows */}
        <div className="mx-auto mt-10 max-w-[360px] lg:hidden">
          <div className="relative">
            <button
              className="intl-prev absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-md"
              aria-label="Previous service"
            >
              ←
            </button>
            <button
              className="intl-next absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#21a9ff] text-white shadow-md"
              aria-label="Next service"
            >
              →
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{ prevEl: ".intl-prev", nextEl: ".intl-next" }}
              slidesPerView={1}
              spaceBetween={16}
              className="intl-services-swiper"
            >
              {services.map((item, index) => (
                <SwiperSlide key={item.title}>
                  <div className="flex overflow-hidden border border-black/10 bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-full w-[160px] object-cover"
                      width={3000}
                      height={3000}
                    />
                    <div className="p-4 text-left">
                      <h3 className="text-sm font-semibold text-[#333]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[9px] text-gray-500">
                        {item.description}
                      </p>
                      <button className="mt-4 text-sm font-bold tracking-wide text-[#E12454]">
                        {item.cta}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
