"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowUpRight } from "lucide-react";
import SpecialtyModal, { Specialty } from "@/components/SpecialtyModal";



// --- Data Population (Updated from Screenshots) ---
const specialtiesData: Specialty[] = [
  {
    id: 1,
    title: "Cardiac Sciences",
    modalHeader: "Institute of Cardiac Sciences",
    shortDescription: "Advanced heart care featuring 24/7 emergency response and non-invasive diagnostics.",
    icon: <Image src={"/specialities/cardiac.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Heart Institute",
    longDescription: "The ShardaCare HealthCity Heart Institute has an exceptional team comprising heart surgeons, cardiologists, and radiologists who work together to provide comprehensive care for patients with all heart conditions. The \"Heart Team\" approach helps in thorough evaluations by cardiac experts to ensure precision and accuracy in treatment.",
    features: [
      "Comprehensive Heart Condition Care",
      "Robotic Surgery",
      "Minimally Invasive Techniques",
      "Thorough Cardiac Evaluations",
    ],
    footerNote: "The use of cutting-edge technologies such as robotic surgery and minimally invasive techniques ensures precision and accuracy in treatment for all patients."
  },
  {
    id: 2,
    title: "Oncology",
    modalHeader: "Institute of Cancer Care",
    shortDescription: "Advanced cancer care featuring precision diagnostics and specialized surgical expertise.",
    icon: <Image src={"/specialities/oncology.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute",
    longDescription: "The ShardaCare HealthCity Institute of Cancer Care is a one-stop destination for comprehensive treatment of all cancers – from risk assessment, prevention to multi-modal treatment and palliative care. We utilize a Tumor Board that includes organ-specific cancer surgeons, radiologists, and medical and haemato oncologists to create unique treatment plans.",
    features: [
      "Multi-modal Treatment & Palliative Care",
      "Varian Edge & CyberKnife VSI Robotic Radiosurgery",
      "VMAT, IGRT, & Tomotherapy",
      "CAR T-cell Therapy & Clinical Research",
    ],
    footerNote: "Our specialists work together seamlessly with surgeons across departments to provide cutting-edge care using innovative diagnostic and imaging equipment."
  },
  {
    id: 3,
    title: "Neurosciences",
    modalHeader: "Institute of Neurosciences",
    shortDescription: "Comprehensive treatment for complex neurological disorders and minimally invasive spine surgeries.",
    icon: <Image src={"/specialities/neuro.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute",
    longDescription: "The ShardaCare HealthCity Institute of Neurosciences is an integrated institute that aims to provide comprehensive, multidisciplinary, multispeciality care for all disorders of the brain and spine, including cancers. The institute has a team of highly qualified neurologists, neurosurgeons, neurointerventionists, neuro-anaesthetists, and dedicated neuro critical care specialists, neuropsychologists and neuropsychiatrists.",
    features: [
      "Brain Tumours & Spinal Disorders",
      "Stroke & Epilepsy",
      "Movement Disorders & Headaches",
      "Emergency Management of Stroke & Neurological Trauma",
    ],
    footerNote: "The institute operates specialised clinics and provides specialized services and protocols for the emergency management of stroke and other neurological trauma."
  },
  {
    id: 4,
    title: "Orthopaedics",
    modalHeader: "Institute of Orthopaedics",
    shortDescription: "Specialized care for bone health, sports injuries, and robotic-assisted joint replacement surgeries.",
    icon: <Image src={"/specialities/ortho.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute",
    longDescription: "The ShardaCare HealthCity Institute of Orthopaedics is a state-of-the-art centre dedicated to end-to-end care of all musculoskeletal conditions across age groups, especially children. Led by a team of clinical experts, this multidisciplinary team of orthopaedic surgeons, pain management specialists, and physiotherapists offer comprehensive, personalised treatments for enhanced quality of life.",
    features: [
      "Joint Replacements & Spine Problems",
      "Sports Injuries & Trauma",
      "Congenital Defects",
      "Paediatric Bone & Joint Care",
    ],
    footerNote: "Our experts are backed by robust teams of specially trained nursing and paramedical staff, utilizing advanced diagnostic and surgical technologies to provide top-notch care."
  },
  {
    id: 5,
    title: "ENT & Cochlear Implant",
    modalHeader: "Institute of ENT",
    shortDescription: "Expert solutions for hearing loss, sinus issues, and advanced cochlear implant procedures.",
    icon: <Image src={"/specialities/ent.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute",
    longDescription: "The ShardaCare HealthCity ENT and Head & Neck Surgery department is a pioneering department that combines cutting-edge technology with highly trained doctors to provide comprehensive care for ear, nose, throat and head and neck conditions. It is a sought-after referral centre for laser voice surgery, cochlear implants, advanced airway surgery, and complex skull base surgery.",
    features: [
      "Laser Voice Surgery & Cochlear Implants",
      "Endoscopic Sinus Surgery & Skull Base Surgery",
      "Surgery for Sleep Apnea & Microscopic Ear Surgery",
      "Advanced Airway & Head and Neck Surgery",
    ],
    footerNote: "Equipped with advanced technologies like lumens CO2 laser, video stroboscopy, Carl Zeiss operating microscope, and Olympus system for flexible fibreoptic laryngoscopy, the department provides top-tier care for patients from India and overseas."
  },
  {
    id: 6,
    title: "Urology",
    modalHeader: "Institute of Urology",
    shortDescription: "Precision treatment for kidney health, urinary disorders, and advanced laser-assisted procedures.",
    icon: <Image src={"/specialities/urology.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute",
    longDescription: "The ShardaCare HealthCity Urology Division is a leading centre for urological care. Our expert team specializes in advanced treatments for urinary tract and male reproductive organ disorders, utilizing minimally invasive techniques like robotic-assisted surgery for better outcomes and quicker recovery.",
    features: [
      "Prostate Health & Urological Cancers",
      "Adult and Paediatric Urological Care",
      "Urinary Tract & Reproductive Organ Disorders",
      "Robotic-Assisted & Minimally Invasive Surgery",
    ],
    footerNote: "Our patient-centric approach emphasizes personalized treatments, education, and compassionate care. Committed to innovation, we continuously advance our practices through research, striving for excellence in patient care and outcomes."
  },
  {
    id: 7,
    title: "Bone Marrow Transplant",
    modalHeader: "Bone Marrow Transplant Division",
    shortDescription: "High-precision bone marrow transplants and specialized care for complex blood-related disorders.",
    icon: <Image src={"/specialities/bone.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute",
    longDescription: "The ShardaCare HealthCity Bone Marrow Transplant Division is a leading centre for all types of stem cell transplantations. Our division is dedicated to offering life-saving treatments for patients with malignant and non-malignant blood disorders, managed by highly experienced haematologists, oncologists, and transplant specialists.",
    features: [
      "Autologous & Allogeneic Transplants",
      "Leukaemia, Lymphoma & Multiple Myeloma",
      "Aplastic Anaemia & Thalassemia",
      "Related & Unrelated Donor Transplants",
    ],
    footerNote: "We are equipped with state-of-the-art facilities and adopt the latest technologies in stem cell therapy, following international protocols and supported by a robust infrastructure for patient isolation to minimize infection risks."
  },
  {
    id: 8,
    title: "Plastic Surgery",
    modalHeader: "Institute of Plastic, Aesthetic & Reconstructive Surgery",
    shortDescription: "Specialized reconstructive procedures and aesthetic surgeries led by board-certified experts.",
    icon: <Image src={"/specialities/plastic.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute",
    longDescription: "The ShardaCare HealthCity Plastic, Aesthetic & Reconstructive Surgery division represents the pinnacle of medical innovation and aesthetic artistry. With a commitment to restoring bodily functions and enhancing aesthetic appeal, our centre is at the forefront of integrating cutting-edge technologies, such as CAD/CAM modelling and artificial intelligence, for unparalleled pre-surgery planning.",
    features: [
      "Cosmetic Surgery & Body Contouring",
      "Reconstructive Surgery & Trauma Restoration",
      "Regenerative Medicine & Tissue Rejuvenation",
      "Aesthetic Dermatology & Non-Surgical Rejuvenation",
    ],
    footerNote: "Our team of exceptional specialists works in synergy with advanced technology to provide comprehensive care, specializing in techniques like liposuction and tummy tucks while prioritizing safety and infection control to ensure optimal outcomes."
  },
  {
    id: 9,
    title: "Critical Care",
    modalHeader: "Emergency Department",
    shortDescription: "Round-the-clock intensive care with advanced life support systems for emergency recovery.",
    icon: <Image src={"/specialities/critical.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute",
    longDescription: "The ShardaCare HealthCity Emergency Department stands as a paragon of excellence in immediate medical intervention, embodying a swift, expert approach to emergency care. Our Department is renowned for its use of the finest triage protocols and cutting-edge technologies, ensuring that every patient facing life-threatening conditions receives rapid and effective treatment.",
    features: [
      "Trauma & Acute Medical Crises",
      "Heart Attack & Stroke Intervention",
      "Obstetric Emergencies",
      "Ground and Air Ambulance Services",
    ],
    footerNote: "With a highly skilled team of specialized physicians and surgeons across specialities, the ER team is especially trained in emergency medicine and remains on hand 24x7, exemplifying our commitment to the Golden Hour concept."
  },
  {
    id: 10,
    title: "Gastrointestinal Surgery",
    modalHeader: "Institute of Gastrosciences",
    shortDescription: "Advanced surgical interventions for digestive health using the latest laparoscopic techniques.",
    icon: <Image src={"/specialities/gastro.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute",
    longDescription: "The ShardaCare HealthCity Institute of Gastrosciences provides end-to-end care for all conditions affecting the digestive tract, pancreas, or liver, including tumours and cancers. We provide the full spectrum of multi-disciplinary, collaborative care, from preventive to curative, and diagnostic to surgical, with a focus on disease reversal and long-term management.",
    features: [
      "Oesophagus, Stomach & Biliary Tract Care",
      "Liver, Pancreas & Intestinal Disorders",
      "Advanced Whipple & Bariatric Surgery",
      "Minimally Invasive & Robotic Procedures",
    ],
    footerNote: "Led by pioneers of gastrointestinal surgery, our team utilizes state-of-the-art diagnostic and therapeutic technologies for high-volume procedures like Lap Cholecystectomy and Liver Biopsy, achieving success rates comparable to international standards."
  },
];

// --- Sub-Components ---

const SectionHeader = () => (
  <div className="flex flex-col justify-start h-full pr-6">
    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 leading-tight">
      Excellence Across Medical Specialties
    </h2>
    <p className="text-lg text-gray-600 leading-relaxed mb-6">
      Access world-class clinical expertise and advanced treatment protocols
      across our specialized centers of excellence.
    </p>
  </div>
);

// --- Internal Card Component ---
const SpecialtyCard = ({
  specialty,
  onReadMore,
}: {
  specialty: Specialty;
  onReadMore: (data: Specialty) => void;
}) => (
  <div className="bg-white rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-100">
    <div className="mb-6">{specialty.icon}</div>
    <p className="text-xl font-medium text-black mb-3">{specialty.title}</p>
    <p className="text-[#4B4B4B] text-sm leading-relaxed mb-6 flex-grow">
      {specialty.shortDescription}
    </p>
    <button
      onClick={() => onReadMore(specialty)}
      className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
    >
      Read More
      <ArrowUpRight className="w-4 h-4 ml-1" />
    </button>
  </div>
);

// --- Main Component ---

const MedicalSpecialtiesSection = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (data: Specialty) => {
    setSelectedSpecialty(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSpecialty(null), 300);
  };

  return (
    <section
      className="py-10 px-4 sm:px-6 lg:px-8 bg-[#F3FBFF] overflow-hidden"
      id="specialties"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* === MOBILE LAYOUT === */}
        <div className="block lg:hidden">
          <div className="mb-8">
            <SectionHeader />
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 24 },
            }}
            className="pb-12 !overflow-visible"
          >
            {specialtiesData.map((specialty) => (
              <SwiperSlide key={specialty.id} className="!h-auto">
                <SpecialtyCard
                  specialty={specialty}
                  onReadMore={handleOpenModal}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* === DESKTOP LAYOUT === */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          <div className="col-span-2 row-span-1">
            <SectionHeader />
          </div>
          {specialtiesData.map((specialty) => (
            <div key={specialty.id} className="col-span-1">
              <SpecialtyCard
                specialty={specialty}
                onReadMore={handleOpenModal}
              />
            </div>
          ))}
        </div>

        {/* === VIEW ALL BUTTON === */}
        <div className="mt-12 flex justify-center w-full">
          <button className="group flex items-center gap-2 px-8 py-3 rounded-xl border border-[#34ACE1] bg-white text-[#34ACE1] font-semibold hover:bg-blue-50 transition-colors shadow-sm">
            View All
            <span className="bg-[#34ACE1] text-white rounded-full p-1 w-5 h-5 flex items-center justify-center text-xs group-hover:bg-[#34ACE1] group-hover:text-white">
              {">"}
            </span>
          </button>
        </div>
      </div>

      {/* === MODAL === */}
      <SpecialtyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={selectedSpecialty}
      />
    </section>
  );
};

export default MedicalSpecialtiesSection;