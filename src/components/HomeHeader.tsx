"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const LANGUAGES = [
  { label: "English", value: "en", icon: "/assets/india.png" },
  { label: "Russian", value: "ru", icon: "/assets/language-ru.svg" },
];

const HomeHeader: React.FC = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const langRef = useRef<HTMLButtonElement>(null);

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
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 py-2 h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="ShardaCare"
            width={120}
            height={40}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
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
            <span className="text-sm font-medium text-gray-700 cursor-pointer">
              Get Second Opinion
            </span>
          </nav>
          {/* Emergency Contact */}
          <button className="hidden md:flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-[#E3376D] to-[#ED814A] text-white font-bold gap-2 shadow min-w-[185px] h-[40px]">
            <span className="rounded-full bg-white/30 w-7 h-7 flex items-center justify-center">
              <svg
                width={16}
                height={16}
                fill="none"
                stroke="white"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.19.3 2.36.56 3.52A2 2 0 019.64 10l-2.2 2.18a16 16 0 007.07 7.07l2.18-2.2a2 2 0 012.6-.44c1.16.26 2.33.43 3.52.56A2 2 0 0121 18.09z" />
              </svg>
            </span>
            <span className="text-xs font-bold">Emergency Contact</span>
            <span className="font-bold ml-2 text-xs">+91 9922 9922 22</span>
          </button>

          {/* Visit India Site */}
          <button className="hidden md:flex items-center gap-2 px-4 py-1 rounded-full border border-gray-200 bg-white font-bold shadow min-h-[40px]">
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
          </button>
          {/* Mobile Visit Site button */}
          <button className="flex md:hidden items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#E3376D] to-[#ED814A] font-bold min-h-[40px]">
            <span className="text-sm font-semibold text-white">
              Visit India Site
            </span>
          </button>

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
              <FaChevronDown />
            </button>
            {/* Dropdown */}
            {langOpen && (
              <div className="absolute top-9 right-0 md:-right-24 mt-2 w-40 bg-white rounded-lg shadow-lg py-1 z-60">
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
