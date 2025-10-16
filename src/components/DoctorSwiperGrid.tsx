import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

const doctors = [
  {
    name: "Dr. Anil Thakwani",
    specialty: "Oncology",
    experience: "25+ Years of Experience",
    img: "/assets/home/anil.png",
    actions: true,
  },
  {
    name: "Dr. (Prof.) Neerja Goel",
    specialty: "Obstetrics and Gynaecology",
    experience: "42+ Years of Experience",
    img: "/assets/home/neerja.png",
  },
  {
    name: "Dr. Atampreet Singh",
    specialty: "Neurology",
    experience: "25+ Years of Experience",
    img: "/assets/home/atampreet.png",
  },
  {
    name: "Dr. Amit Vij",
    specialty: "Paediatrics",
    experience: "18+ Years of Experience",
    img: "/assets/home/amit.png",
  },
  {
    name: "Dr. Chirag Tandon",
    specialty: "Internal Medicine",
    experience: "20+ Years of Experience",
    img: "/assets/home/chirag.png",
  },
  {
    name: "Dr. Bheem Raj Gupta",
    specialty: "Nephrology",
    experience: "17+ Years of Experience",
    img: "/assets/home/bhim.png",
  },
  {
    name: "Dr. Ravindra Srivastava",
    specialty: "Neurosurgery",
    experience: "23+ Years of Experience",
    img: "/assets/home/ravindra.png",
  },
  {
    name: "Dr. Vishal Jain",
    specialty: "Neurosurgery",
    experience: "20+ Years of Experience",
    img: "/assets/home/vishal.png",
  },
];

export default function DoctorsSwiperGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-[325px] mx-auto overflow-hidden">
      <div className="block md:hidden">
        <Swiper
          modules={[Grid, Autoplay]}
          grid={{ rows: 2, fill: "row" }}
          slidesPerView={2}
          spaceBetween={6}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          className="!overflow-visible"
        >
          {doctors.map((d, idx) => (
            <SwiperSlide key={d.name}>
              <div
                className="p-[1px] rounded-xl flex items-center justify-center transition"
                style={{ width: "100%" }} // Each slide is 50% of 325px = 162.5px
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              >
                <div className="flex flex-col border border-gray-200 rounded-xl shadow-sm bg-white overflow-hidden transition hover:border-pink-400 hover:shadow-lg w-full group">
                  <div className="relative w-full h-[120px] bg-white flex items-center justify-center p-2 rounded-xl overflow-hidden">
                    <Image
                      src={d.img}
                      alt={d.name}
                      width={300}
                      height={160}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                      transition-opacity rounded-xl pointer-events-none 
                      ${activeIndex === idx ? "opacity-100" : "opacity-0"} 
                      md:opacity-0 md:group-hover:opacity-100`}
                    />
                    <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 transition-opacity
                      ${activeIndex === idx ? "opacity-100" : "opacity-0"}
                      md:opacity-0 md:group-hover:opacity-100`}
                    >
                      <button className="flex items-center gap-2 px-2 py-1 bg-white rounded-lg shadow font-semibold text-black text-xs border border-gray-200 w-[72px]">
                        Download
                        <Image src="/assets/download.svg" alt="download" width={13} height={13}/>
                      </button>
                      <button className="flex items-center px-2 py-1 bg-white rounded-lg border border-gray-200 shadow text-black">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <path d="M8.59 13.51l6.83 3.98M8.59 10.49l6.83-3.98" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Name and Specialty */}
                  <div className="px-2 pt-2 pb-1 text-center">
                    <div className="font-bold text-xs text-black">{d.name}</div>
                    <div className="text-[10px] text-blue-500 mt-0.5">{d.specialty}</div>
                  </div>
                  {/* Experience row */}
                  <div className="flex items-center justify-center border-t border-gray-100 px-2 py-1 bg-white text-[10px] gap-2">
                    <div className="flex bg-[#F7F7F7] w-full items-center justify-between p-1 rounded-lg">
                      <div className="flex gap-1 items-center">
                        <Image src="/assets/home/cap.svg" alt="icon" height={12} width={12} />
                        <span className="font-semibold text-[11px] text-gray-700">
                          {d.experience.replace(/ Years of Experience$/, "")}
                        </span>
                      </div>
                      <span className="ml-1 text-gray-500 text-[10px]">
                        Years of Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
