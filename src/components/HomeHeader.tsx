"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const LANGUAGES = [
  { label: "English", value: "en", icon: "/assets/india.png" },
  { label: "Russian", value: "ru", icon: "/assets/language-ru.svg" },
];

const HomeHeader: React.FC = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const langRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    if (langOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [langOpen]);

  return (
    <header className="fixed z-[100] w-full bg-white border-b border-gray-100">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 py-2 h-16">
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="ShardaCare"
            width={150}
            height={50}
          />
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center mr-4">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-sm font-medium text-gray-700">
                Procedures
              </span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 9l6 6 6-6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-sm font-medium text-gray-700">
                Specialities
              </span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 9l6 6 6-6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-sm font-medium text-gray-700 cursor-pointer">
                Get Second Opinion
              </span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 9l6 6 6-6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </nav>
          {/* Emergency Contact */}
          <Link href="tel:+91 88009 98987" className="group items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#E3376D] to-[#ED814A] text-white min-w-[205px] transition-all md:flex hidden">
            {/* Phone icon */}
            <span className="rounded-full w-7 h-7 flex items-center justify-center mr-2">
              <Image 
                src="/assets/phone.svg"
                alt="icon"
                width={18}
                height={18}
              />
            </span>
            {/* Text block */}
            <span className="flex flex-col items-start flex-grow ml-1">
              <span className="text-xs font-normal opacity-80 leading-tight ">
                Emergency Contact
              </span>
              <span className="text-base font-medium mt-[-2px]">
                +91 88009 98987
              </span>
            </span>
            {/* Arrow icon */}
            <span className="rounded-full w-7 h-7 flex items-center justify-center ml-2">
             <Image 
              src="/assets/right-icon-white.svg"
              alt="icon"
              width={18}
              height={18}
             />
            </span>
          </Link>

          {/* Visit India Site */}
          <Link href={"https://www.shardacare.com/"} className="hidden md:flex items-center gap-2 px-4 py-1 rounded-full border border-gray-200 bg-white font-bold shadow min-h-[40px]">
            <span className="rounded-full w-7 h-7 flex items-center justify-center">
              <Image
                src="/assets/india.png"
                alt="India"
                width={24}
                height={24}
              />
            </span>
            <span className="text-sm font-semibold text-gray-700">
              Visit India Site
            </span>
          </Link>
          {/* Mobile Visit Site button */}
          <Link href={"https://www.shardacare.com/"} className="flex md:hidden items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#E3376D] to-[#ED814A] font-bold min-h-[40px]">
            <span className="text-[10px] font-semibold text-white">
              Visit India<br /> Website
            </span>
          </Link>

          {/* Language Button & Dropdown */}
          <div
            className="relative language-dropdown flex items-center"
            ref={langRef}
          >
            <button
              className="flex items-center gap-2 min-h-[40px] min-w-[40px] px-3 py-1 bg-white cursor-pointer"
              onClick={() => setLangOpen((l) => !l)}
              type="button"
            >
              <Image
                src="/assets/language.svg"
                alt="icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="hidden md:block text-xs font-medium">Translate</span> <FaChevronDown />
            </button>
            {/* Dropdown */}
            {langOpen && (
              <div className="absolute top-9 right-0 md:-right-10 mt-2 w-40 bg-white rounded-lg shadow-lg py-1 z-60">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.value}
                    className="flex items-center w-full px-3 py-2 gap-2 text-sm text-gray-800 hover:bg-gray-100 rounded"
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                  >
                    <Image
                      src={lang.icon}
                      alt={lang.label}
                      width={22}
                      height={22}
                      className="w-5 h-5"
                    />
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
