"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const column3Specialities = [
  "ENT",
  "Nuclear Medicine",
  "Respiratory & Sleep Medicine",
  "Obstetrics and Gynaecology",
  "Orthopaedics & Lumbar Spine",
  "Urology",
  "Ophthalmology",
  "Nephrology",
  "Emergency Medicine",
  "Dermatology",
  "Psychiatry",
  "Pathology",
  "General Surgery",
  "Dental",
];

const column4Specialities = [
  "Oncology",
  "Neurology",
  "Neurosurgery",
  "Oral and Maxillofacial Surgery",
  "Plastic & Reconstructive Surgery",
  "Paediatrics",
  "Cardiology & Cardiac Surgery",
  "Internal Medicine",
  "Gastroenterology",
  "Dietician",
  "Interventional Radiology",
  "Critical Care",
  "Anaesthesiology",
];

const quickLinks = [
  "About Us",
  "Our Specialities",
  "Contact Us",
  "Find a Doctor",
  "Career",
  "Gallery",
  "My Reports",
  "Leadership",
  "Our Procedures",
  "Blogs",
  "Feedback",
  "Events",
  "Media",
  "Patient Services",
];

const HomeFooter: React.FC = () => {
  const [openSection, setOpenSection] = useState<
    "quick" | "specialities" | "corporate" | null
  >("quick");

  return (
    <footer
      id="footer"
      className="bg-white w-full border-t border-gray-200 font-poppins mb-10 md:mb-0"
    >
      {/* Newsletter Section (same for all) */}
      <div className="bg-[#006DA5] flex items-center justify-center mx-auto">
        <div className="py-5 px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-white md:min-w-7xl max-w-7xl">
          <div className="flex-1 mb-2 md:mb-0">
            <div className="font-semibold uppercase text-xs tracking-wider mb-3">
              Get expert health tips and updates – sign up for our newsletter!
            </div>
            <div className="text-[13px] font-light max-w-lg">
              Stay informed with the latest health advice, hospital updates, and
              wellness tips delivered directly to your inbox.
            </div>
          </div>
          <form className="flex flex-col w-full max-w-lg">
            <label
              htmlFor="newsletter"
              className="text-[#D0D0D0] mb-2 text-base font-medium"
            >
              Sign up to our newsletter
            </label>
            <div className="flex w-full">
              <input
                type="email"
                id="newsletter"
                placeholder="Enter your email address"
                className="flex-1 bg-white text-gray-700 px-4 py-2 text-sm outline-none"
                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 text-sm font-bold"
                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* DESKTOP FOOTER (unchanged, md+) */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto w-full px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <Image
              src="/assets/logo.png"
              alt="ShardaCare Healthcare"
              width={160}
              height={40}
              className="mb-6"
            />
            <div>
              <div className="font-semibold mb-6 text-lg text-[#232323] uppercase tracking-widest">
                Address
              </div>
              <div className="text-xs text-[#232323] font-light">
                Building 10A, Plot No 32–34,
                <br />
                Knowledge Park III, Greater
                <br />
                Noida, Uttar Pradesh 201310
                <br />
                Helpline - +91 88009 98987
              </div>
              <a
                href="mailto:queriesintl@shardacare.com"
                className="text-xs text-[#232323] font-light mt-6 block"
              >
                Email: queriesintl@shardacare.com
              </a>
            </div>
            <div className="flex gap-3 mt-2 text-[#232323]">
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
            <div className="mt-3 flex gap-3 items-center">
              <Image
                src="/assets/home/accredition1.png"
                alt="Accreditation 1"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <Image
                src="/assets/home/accredition2.png"
                alt="Accreditation 2"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-1 text-xs">
            <div className="font-bold mb-4 tracking-wider">Quick Links</div>
            {quickLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:underline text-[#555] mb-2"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-1 text-xs">
            <div className="font-bold mb-4 tracking-wider">
              Our Specialities
            </div>
            {column3Specialities.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:underline text-[#555] mb-2"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-1 text-xs">
            <div className="md:invisible pb-4 font-bold tracking-wider select-none pointer-events-none">
              Our Specialities
            </div>
            {column4Specialities.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:underline text-[#555] mb-2"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE FOOTER (accordion style, < md) */}
      <div className="md:hidden px-4 pt-6 pb-8">
        {/* Quick Links accordion */}
        <FooterAccordion
          title="Quick Links"
          isOpen={openSection === "quick"}
          onToggle={() =>
            setOpenSection(openSection === "quick" ? null : "quick")
          }
        >
          <div className="flex flex-col gap-2 text-xs text-[#555]">
            {quickLinks.map((link) => (
              <a key={link} href="#" className="hover:underline">
                {link}
              </a>
            ))}
          </div>
        </FooterAccordion>

        {/* Our Specialities accordion */}
        <FooterAccordion
          title="Our Specialities"
          isOpen={openSection === "specialities"}
          onToggle={() =>
            setOpenSection(
              openSection === "specialities" ? null : "specialities"
            )
          }
        >
          <div className="grid grid-cols-1 gap-2 text-xs text-[#555]">
            {column3Specialities.concat(column4Specialities).map((link) => (
              <a key={link} href="#" className="hover:underline">
                {link}
              </a>
            ))}
          </div>
        </FooterAccordion>

        {/* Corporate accordion (placeholder like screenshot) */}
        <FooterAccordion
          title="Corporate"
          isOpen={openSection === "corporate"}
          onToggle={() =>
            setOpenSection(openSection === "corporate" ? null : "corporate")
          }
        >
          <div className="flex flex-col gap-2 text-xs text-[#555]">
            <a href="#" className="hover:underline">
              Corporate Overview
            </a>
            <a href="#" className="hover:underline">
              CSR
            </a>
            <a href="#" className="hover:underline">
              Investor Relations
            </a>
          </div>
        </FooterAccordion>

        {/* Logo + address + social + accreditation */}
        <div className="mt-6">
          <Image
            src="/assets/logo.png"
            alt="ShardaCare Healthcare"
            width={150}
            height={38}
            className="mb-4"
          />
          <p className="text-xs text-[#232323] font-light mb-3">
            Building 10A, Plot No 32–34,
            <br />
            Knowledge Park III, Greater Noida,
            <br />
            Uttar Pradesh 201310
          </p>
          <p className="text-xs text-[#232323] font-light">
            Helpline - 73000 40000
          </p>
          <p className="text-xs text-[#232323] font-light mt-1">
            Email: info@shardacare.com
          </p>

          <div className="flex gap-4 mt-4 text-[#232323]">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>

          <div className="mt-5">
            <div className="text-xs font-semibold text-[#232323] mb-2">
              Accreditation
            </div>
            <div className="flex gap-3 items-center">
              <Image
                src="/assets/home/accredition1.png"
                alt="Accreditation 1"
                width={40}
                height={40}
                className="w-12 h-12"
              />
              <Image
                src="/assets/home/accredition2.png"
                alt="Accreditation 2"
                width={40}
                height={40}
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div className="mt-6 flex flex-col gap-2 text-xs text-[#232323]">
          <a href="#" className="hover:underline">
            Download Brochure
          </a>
          <a href="#" className="hover:underline">
            Privacy & Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Condition
          </a>
        </div>

        <p className="mt-4 text-[11px] text-[#232323]">
          Copyright © 2025 Sharda Care - HealthCity. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

type FooterAccordionProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

const FooterAccordion: React.FC<FooterAccordionProps> = ({
  title,
  children,
  isOpen,
  onToggle,
}) => (
  <div className="border-b border-gray-200 py-3">
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between text-base font-semibold text-[#232323]"
    >
      <span>{title}</span>
      <span className="text-xl leading-none">
        {isOpen ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-180"
          >
            <path
              d="M1.63654 5.29246C1.82406 5.10499 2.07837 4.99968 2.34354 4.99968C2.6087 4.99968 2.86301 5.10499 3.05054 5.29246L8.00054 10.2425L12.9505 5.29246C13.1391 5.11031 13.3917 5.00951 13.6539 5.01179C13.9161 5.01407 14.1669 5.11924 14.3524 5.30465C14.5378 5.49005 14.6429 5.74087 14.6452 6.00306C14.6475 6.26526 14.5467 6.51786 14.3645 6.70646L8.70754 12.3635C8.52001 12.5509 8.2657 12.6562 8.00054 12.6562C7.73537 12.6562 7.48106 12.5509 7.29354 12.3635L1.63654 6.70646C1.44907 6.51894 1.34375 6.26463 1.34375 5.99946C1.34375 5.7343 1.44907 5.47999 1.63654 5.29246Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.63654 5.29246C1.82406 5.10499 2.07837 4.99968 2.34354 4.99968C2.6087 4.99968 2.86301 5.10499 3.05054 5.29246L8.00054 10.2425L12.9505 5.29246C13.1391 5.11031 13.3917 5.00951 13.6539 5.01179C13.9161 5.01407 14.1669 5.11924 14.3524 5.30465C14.5378 5.49005 14.6429 5.74087 14.6452 6.00306C14.6475 6.26526 14.5467 6.51786 14.3645 6.70646L8.70754 12.3635C8.52001 12.5509 8.2657 12.6562 8.00054 12.6562C7.73537 12.6562 7.48106 12.5509 7.29354 12.3635L1.63654 6.70646C1.44907 6.51894 1.34375 6.26463 1.34375 5.99946C1.34375 5.7343 1.44907 5.47999 1.63654 5.29246Z"
              fill="black"
            />
          </svg>
        )}
      </span>
    </button>
    {isOpen && <div className="mt-3">{children}</div>}
  </div>
);

export default HomeFooter;
