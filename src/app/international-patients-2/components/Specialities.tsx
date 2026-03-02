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
    modalHeader: "Department of Cardiac Sciences",
    shortDescription: "Advanced heart care featuring 24/7 emergency response and non-invasive diagnostics.",
    icon: <Image src={"/specialities/cardiac.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Heart Institute",
    longDescription: "The ShardaCare HealthCity Heart Institute has an exceptional team comprising Heart Surgeons, Cardiologists and non-invasive cardiologist who work together to provide comprehensive care for patients with all heart conditions. The \"Heart Team\" approach helps in thorough evaluation by cardiac experts to ensure precision and accuracy in treatment.",
    features: [
      "Comprehensive Heart Condition Care",
      "PTCA",
      "Minimally Invasive Techniques",
      "Thorough Cardiac Evaluation",
      "Adult congenital heart disease"
    ],
    footerNote: "The use of cutting-edge technologies such as robotic surgery and minimally invasive techniques ensures precision and accuracy in treatment for all patients."
  },
  {
    id: 2,
    title: "Oncology",
    modalHeader: "Department of Oncology",
    shortDescription: "Advanced cancer care featuring precision diagnostics and specialized surgical expertise.",
    icon: <Image src={"/specialities/oncology.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute of Oncology – International Oncology OPD",
    longDescription: "The ShardaCare HealthCity Institute of Oncology – International Oncology OPD provides comprehensive cancer care for patients from CIS and African countries. We deliver advanced, multidisciplinary, evidence-based cancer treatment with global standards of precision and compassion. Our multidisciplinary Tumor Board ensures thorough evaluation by oncology experts to create personalized and precise treatment plans for every patient.",
    features: [
      "Radiation Oncology: Precision Driven Technology, 3DCRT, IMRT, IGRT, SRT, SRS, 6D Robotic Couch",
      "Interventional Oncology: TACE, TARE, and Image-Guided Tumor-Directed Procedures",
      "Medical Oncology: Chemotherapy, Targeted Therapy, Immunotherapy & Precision Oncology",
      "Surgical Oncology: Advanced & Minimally Invasive Cancer Surgeries",
      "Dedicated International Patient Services"
    ],
    footerNote: "Excellence in Oncology. Precision in Treatment. Compassion in Care."
  },
  {
    id: 3,
    title: "Neurosciences",
    modalHeader: "Department of Neurosciences",
    shortDescription: "Comprehensive treatment for complex neurological disorders and minimally invasive spine surgeries.",
    icon: <Image src={"/specialities/neuro.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute of Neurosciences",
    longDescription: "The ShardaCare HealthCity Institute of Neurosciences is an integrated centre dedicated to providing comprehensive, multidisciplinary, and multispecialty care for disorders of the brain and spine, including neurological cancers. Our team comprises highly qualified neurosurgeons, neurointerventionists, neuro-anaesthetists, neurologists, dedicated neuro critical care specialists, neuropsychologists, and neuropsychiatrists, ensuring complete neurological care under one roof.",
    features: [
      "Brain & Spinal Tumours, Trauma & Scoliosis Surgery",
      "Stereotactic Surgery & DBS Surgery for Parkinson’s Disease",
      "Stroke & Epilepsy Management",
      "Movement Disorders & Headache Clinics",
      "Emergency Management of Stroke & Neurological Trauma"
    ],
    footerNote: "The institute operates specialized clinics and follows advanced protocols for the emergency management of head injury, intracerebral bleed, stroke, and other neurological trauma, ensuring timely intervention and comprehensive neurocritical care."
  },
  {
    id: 4,
    title: "Orthopaedics & Joint Replacement",
    modalHeader: "Department of Orthopaedics and Spine Care",
    shortDescription: "Specialized care for bone health, sports injuries, and robotic-assisted joint replacement surgeries.",
    icon: <Image src={"/specialities/ortho.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute of Orthopaedics and Spine Care",
    longDescription: "The ShardaCare HealthCity Institute of Orthopaedics and Spine Care is a state-of-the-art centre dedicated to end-to-end care of all musculoskeletal conditions across all age groups, especially children. Led by a team of clinical experts, this multidisciplinary team of orthopaedic surgeons, pain management specialists, and physiotherapists offer comprehensive, personalised treatments for enhanced quality of life.",
    features: [
      "Joint Replacements (knee and Hip)",
      "Sports Injuries & Rehabilitation",
      "Arthroscopy Services",
      "Trauma and Fracture Surgeries",
      "Paediatric deformity correction and Surgeries",
      "Spine Surgeries"
    ],
    footerNote: "Our experts are backed by robust teams of specially trained nursing and paramedical staff, utilising advanced diagnostic and surgical technologies to provide top-notch care."
  },
  {
    id: 5,
    title: "ENT & Cochlear Implant",
    modalHeader: "Institute of ENT",
    shortDescription: "Expert solutions for hearing loss, sinus issues, and advanced cochlear implant procedures.",
    icon: <Image src={"/specialities/ent.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity ENT and Head & Neck Surgery Department",
    longDescription: "The ShardaCare HealthCity ENT and Head & Neck Surgery Department is a pioneering department that combines cutting-edge technology with highly trained doctors to provide comprehensive care for ear, nose, throat, and head and neck conditions.",
    features: [
      "Voice Surgery & Cochlear Implants",
      "Endoscopic Sinus Surgery & Skull Base Surgery",
      "Surgery for Sleep Apnea & Microscopic Ear Surgery",
      "Advanced Airway & Head and Neck Surgery",
      "Microlaryngeal Surgery"
    ],
    footerNote: "Equipped with advanced technologies such as Lumenis CO₂ Laser, Leica Operating Microscope, Carl Zeiss Operating Microscope, and the Olympus system for flexible fibreoptic laryngoscopy, the department provides top-tier care to patients from India and overseas."
  },
  {
    id: 6,
    title: "Urology",
    modalHeader: "Department of Urology",
    shortDescription: "Precision treatment for kidney health, urinary disorders, and advanced laser-assisted procedures.",
    icon: <Image src={"/specialities/urology.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute of Urology",
    longDescription: "The ShardaCare HealthCity Institute of Urology is a leading centre for comprehensive urological care. Our expert team of urologists and transplant specialists provides advanced treatment for urinary tract and male reproductive organ disorders, utilizing minimally invasive and robotic-assisted techniques to ensure better clinical outcomes and faster recovery. Our integrated team approach ensures detailed evaluation and personalized treatment planning tailored to each patient’s condition.",
    features: [
      "Prostate Health & Urological Cancers",
      "Kidney Transplantation, including ABO Transplant",
      "Adult Urological Care",
      "Urinary Tract & Reproductive Organ Disorders",
      "Laparoscopic Donor Nephrectomy & Minimally Invasive Surgery"
    ],
    footerNote: "Our patient-centric approach emphasizes personalized treatment, patient education, and compassionate care. Committed to innovation and excellence, we continuously advance our practices to deliver superior outcomes and quality urological care."
  },
  {
    id: 7,
    title: "Bone Marrow Transplantation (BMT)",
    modalHeader: "Bone Marrow Transplant Division",
    shortDescription: "High-precision bone marrow transplants and specialized care for complex blood-related disorders.",
    icon: <Image src={"/specialities/bone.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Bone Marrow Transplant Division",
    longDescription: "The ShardaCare HealthCity Bone Marrow Transplant Division is a leading centre for all types of stem cell transplantations. Our division is dedicated to offering life-saving treatments for patients with malignant and non-malignant blood disorders, managed by highly experienced haematologists, oncologists, and transplant specialists.",
    features: [
      "Autologous & Allogeneic Transplants",
      "Leukaemia, Lymphoma & Multiple Myeloma",
      "Aplastic Anaemia & Thalassemia",
      "Related & Unrelated Donor Transplants",
      "CAR-T Cell therapy"
    ],
    footerNote: "We are equipped with state-of-the-art facilities and adopt the latest technologies in stem cell therapy, following international protocols and supported by a robust infrastructure for patient isolation to minimize infection risks."
  },
  {
    id: 8,
    title: "Plastic & Reconstructive Surgery",
    modalHeader: "Department of Plastic, Aesthetic & Reconstructive Surgery",
    shortDescription: "Specialized reconstructive procedures and aesthetic surgeries led by board-certified experts.",
    icon: <Image src={"/specialities/plastic.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute of Plastic, Aesthetic & Reconstructive Surgery",
    longDescription: "The ShardaCare HealthCity Institute of Plastic, Aesthetic & Reconstructive Surgery represents the best of medical innovation and aesthetic artistry. Our expert team is committed to restoring bodily function and enhancing aesthetic appearance, integrating cutting-edge technologies to deliver safe and advanced surgical care. Our integrated team approach ensures detailed evaluation and personalized treatment planning tailored to each patient’s needs.",
    features: [
      "Reconstructive Surgery",
      "Trauma Restoration",
      "Aesthetic Enhancements",
      "Advanced Surgical Care"
    ],
    footerNote: "Our team of exceptional specialists works in synergy with advanced technology to provide comprehensive care, specializing in techniques such as liposuction and tummy tucks while prioritizing safety and infection control. Our patient-centric approach emphasizes personalized treatment, patient education, and compassionate care."
  },
  {
    id: 9,
    title: "Critical Care Medicine",
    modalHeader: "Department of Critical Care Medicine",
    shortDescription: "Round-the-clock intensive care with advanced life support systems for emergency recovery.",
    icon: <Image src={"/specialities/critical.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute of Critical Care Medicine",
    longDescription: "With every heartbeat, we’re here for you. The ShardaCare HealthCity Institute of Critical Care Medicine provides advanced, life-saving care with precision, compassion, and continuous monitoring. Our expert team of intensivists, critical care nurses, and allied specialists deliver 24/7 comprehensive support for patients facing life-threatening conditions using state-of-the-art ICU technology.",
    features: [
      "24/7 Dedicated Critical Care Team led by experienced intensivists",
      "State-of-the-Art ICU Facility with advanced ventilators & monitoring",
      "24/7 Diagnostics & Radiology Support (Ultrasound, CT, MRI, PET-CT)",
      "Multispecialty & Super-Specialty Collaboration"
    ],
    footerNote: "We are committed to delivering safe, ethical, evidence-based care while ensuring dignity, empathy, and excellence in every critical moment."
  },
  {
    id: 10,
    title: "Gastrointestinal (GI) Surgery",
    modalHeader: "Department of Gastrosciences",
    shortDescription: "Advanced surgical interventions for digestive health using the latest laparoscopic techniques.",
    icon: <Image src={"/specialities/gastro.svg"} alt="icon" width={62} height={62} />,
    fullTitle: "ShardaCare HealthCity Institute of Gastrosciences",
    longDescription: "The ShardaCare HealthCity Institute of Gastrosciences provides end-to-end care for all conditions affecting the digestive tract, pancreas, and liver, including tumours and cancers. We offer the full spectrum of multidisciplinary and collaborative care — from preventive to curative, and from diagnostic to surgical — with a strong focus on disease reversal and long-term management.",
    features: [
      "Inflammatory Bowel Disease (IBD) Clinic & Liver Clinic",
      "Oesophagus, Stomach, Biliary Tract & Intestinal Care",
      "Diagnostic and Therapeutic Endoscopic Procedures (ERCP, EUS)",
      "PEG Placement & SpyGlass™ Cholangioscopy",
      "Third Space Surgery & Liver Biopsy"
    ],
    footerNote: "Led by senior gastroenterologists, our team utilizes state-of-the-art diagnostic and therapeutic technologies to perform a wide range of advanced endoscopic procedures, achieving outcomes comparable to international standards."
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