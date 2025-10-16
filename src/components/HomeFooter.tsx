import Image from "next/image";
import React from "react";
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

const HomeFooter: React.FC = () => (
  <footer
    id="footer"
    className="bg-white w-full border-t border-gray-200 font-poppins"
  >
    {/* Newsletter Section */}
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

    {/* Main footer columns */}
    <div className="max-w-7xl mx-auto w-full px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Column 1: Logo/address/accred */}
      <div className="flex flex-col gap-3">
        <Image
          src="/assets/logo.png"
          alt="ShardaCare Healthcare"
          width={160}
          height={40}
          className="mb-6"
        />
        <div>
          <div className="font-bold mb-6 text-xs text-[#232323]">Address</div>
          <div className="text-xs text-[#232323] font-light">
            Building 10A, Plot No 32–34,
            <br />
            Knowledge Park III, Greater Noida, Uttar Pradesh 201310
            <br />
            Helpline - 73000 40000
          </div>
          <div className="text-xs text-[#232323] font-light mt-6">
            Helpline - 73000 40000
          </div>
          <a
            href="mailto:info@shardacare.com"
            className="text-xs text-[#232323] font-light mt-6 block"
          >
            Email: info@shardacare.com
          </a>
        </div>
        <div className="flex gap-3 mt-2">
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
            width={400}
            height={400}
            className="w-10 h-10"
          />
          <Image
            src="/assets/home/accredition2.png"
            alt="Accreditation 2"
            width={400}
            height={400}
            className="w-10 h-10"
          />
        </div>
      </div>
      {/* Column 2: Quick Links */}
      <div className="flex flex-col gap-1 text-xs">
        <div className="font-bold mb-4 tracking-wider">Quick Links</div>
        {quickLinks.map((link) => (
          <a key={link} href="#" className="hover:underline text-[#555] mb-2">
            {link}
          </a>
        ))}
      </div>
      {/* Column 3: Specialities 1 */}
      <div className="flex flex-col gap-1 text-xs">
        <div className="font-bold mb-4 tracking-wider">Our Specialities</div>
        {column3Specialities.map((link) => (
          <a key={link} href="#" className="hover:underline text-[#555] mb-2">
            {link}
          </a>
        ))}
      </div>
      {/* Column 4: Specialities 2 */}
      <div className="flex flex-col gap-1 text-xs">
        <div className="md:invisible pb-4 font-bold tracking-wider select-none pointer-events-none">
          Our Specialities
        </div>
        {column4Specialities.map((link) => (
          <a key={link} href="#" className="hover:underline text-[#555] mb-2">
            {link}
          </a>
        ))}
      </div>
    </div>

    {/* Bottom bar */}
    <div className="flex items-center justify-center">
      <div className="mt-4 border-t border-gray-200 pt-4 pb-6 px-4 text-xs flex flex-col md:flex-row items-center justify-between gap-2 md:min-w-7xl">
        <div className="flex-1 text-[#232323]">
          Copyright © 2025 Sharda Care - HealthCity. All Rights Reserved
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <a href="#" className="hover:underline">
            Download Brochure
          </a>
          <span className="hidden md:inline mx-2">|</span>
          <a href="#" className="hover:underline">
            Privacy & Policy
          </a>
          <span className="hidden md:inline mx-2">|</span>
          <a href="#" className="hover:underline">
            Terms & Condition
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default HomeFooter;
