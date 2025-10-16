import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

type Technology = {
  img: string;
  title: string;
  category: string;
};

type TechnologiesSwiperProps = {
  technologies: Technology[];
  categoryColors: Record<string, string>;
};

const TechnologiesSwiper: React.FC<TechnologiesSwiperProps> = ({
  technologies,
  categoryColors,
}) => (
  <div className="block md:hidden w-full max-w-[325px] mx-auto">
    <Swiper
    modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 2800, disableOnInteraction: false }}
      className="pb-4"
    >
      {technologies.map((item, idx) => (
        <SwiperSlide key={item.title}>
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col p-0 transition group w-full h-full min-h-[230px]">
            <div className="w-full h-[170px] rounded-t-xl overflow-hidden flex items-center justify-center p-3">
              <Image
                height={600}
                width={600}
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="px-4 py-2">
              <div className="text-base font-medium mb-1 truncate">{item.title}</div>
              <div className={`text-[13px] mt-1 ${categoryColors[item.category]}`}>
                {item.category}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default TechnologiesSwiper;
