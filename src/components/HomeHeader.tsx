"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { TopStrip, SectionLink } from "../components/HomeComponents/TopStrip";


const LANGUAGES = [
  { label: "English", value: "/en/en", icon: "/assets/india.png" },
  { label: "Russian", value: "/en/ru", icon: "/russia.svg" },
  { label: "French", value: "/en/fr", icon: "/france.svg" },
];

/** Attempt to translate the page using the GT hidden widget select. */
function triggerGoogleTranslate(langCode: string) {
  // langCode is the ISO code e.g. "ru", "fr"
  const select = document.querySelector<HTMLSelectElement>(
    ".goog-te-combo, #\\:1\.container select, select.goog-te-combo"
  );
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event("change"));
    return true;
  }
  return false;
}

/** Set the googtrans cookie for persistent translation across loads. */
function setGoogTransCookie(value: string) {
  const cookieVal = value; // e.g. "/en/ru" or "/en/en"
  document.cookie = `googtrans=${cookieVal};path=/`;
  document.cookie = `googtrans=${cookieVal};domain=${window.location.hostname};path=/`;
}

/** Clear the googtrans cookie to revert to English. */
function clearGoogTransCookie() {
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
}

/** Load Google Translate widget script once. */
let gtScriptLoaded = false;
function loadGoogleTranslateScript(callback?: () => void) {
  if (gtScriptLoaded) { callback?.(); return; }
  // Expose init function that GT calls once ready
  (window as unknown as Record<string, unknown>).googleTranslateElementInit = () => {
    new (window as unknown as Record<string, unknown> & { google: { translate: { TranslateElement: new (opts: Record<string, unknown>, id: string) => void } } }).google.translate.TranslateElement(
      { pageLanguage: "en", autoDisplay: false },
      "google_translate_element"
    );
    callback?.();
  };
  const script = document.createElement("script");
  script.src =
    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
  gtScriptLoaded = true;
}

// Define the interface to accept the topStripLinks prop
interface HomeHeaderProps {
  topStripLinks?: SectionLink[]; // Make it optional in case some pages don't need it
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ topStripLinks }) => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const langRef = useRef<HTMLDivElement>(null);
  const gtReadyRef = useRef(false);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    if (langOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [langOpen]);

  // Restore selected language from cookie on mount
  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
    if (match?.[1] && match[1] !== "/en/en") {
      const found = LANGUAGES.find((l) => l.value === match[1]);
      if (found) setSelectedLang(found);
    } else {
      setSelectedLang(LANGUAGES[0]); // Default to English
    }
  }, []);

  const handleLanguageSelect = useCallback(
    (lang: (typeof LANGUAGES)[0]) => {
      setSelectedLang(lang);
      setLangOpen(false);

      const isoCode = lang.value.split("/")[2]; // e.g. "ru" from "/en/ru"

      // Try to trigger immediately via the GT hidden widget
      const applyTranslation = () => {
        if (isoCode === "en") {
          // Clear cookie and reload to reset DOM completely
          clearGoogTransCookie();
          window.location.reload();
        } else {
          setGoogTransCookie(lang.value);
          if (!triggerGoogleTranslate(isoCode)) {
            // Widget not ready — reload so the cookie is picked up
            window.location.reload();
          }
        }
      };

      if (gtReadyRef.current || isoCode === "en") {
        applyTranslation();
      } else {
        loadGoogleTranslateScript(() => {
          gtReadyRef.current = true;
          // Give GT widget a moment to inject itself
          setTimeout(applyTranslation, 800);
        });
      }
    },
    []
  );

  // Pre-load GT script in background after mount (without blocking render)
  useEffect(() => {
    const timer = setTimeout(() => {
      loadGoogleTranslateScript(() => {
        gtReadyRef.current = true;
      });
    }, 2000); // load 2s after page is stable
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="fixed top-0 z-[100] w-full bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
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
          <Link href={"https://www.shardacare.com/"} target="_blank" className="hidden md:flex items-center gap-2 px-4 py-1 rounded-full border border-gray-200 bg-white font-bold shadow min-h-[40px]">
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
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Select language"
            >
              <Image
                src="/assets/language.svg"
                alt="icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="hidden md:block text-xs font-medium">Translate</span>{" "}
              <FaChevronDown />
            </button>
            {/* Dropdown */}
            {langOpen && (
              <div
                role="listbox"
                aria-label="Language options"
                className="absolute top-9 right-0 md:-right-10 mt-2 w-44 bg-white rounded-lg shadow-lg py-1 z-60"
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.value}
                    role="option"
                    aria-selected={selectedLang.value === lang.value}
                    className={`flex items-center w-full px-3 py-2 gap-2 text-sm text-gray-800 hover:bg-gray-100 rounded${
                      selectedLang.value === lang.value ? " bg-gray-50 font-semibold" : ""
                    }`}
                    onClick={() => handleLanguageSelect(lang)}
                  >
                    <Image
                      src={lang.icon}
                      alt={lang.label}
                      width={22}
                      height={22}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span>{lang.label}</span>
                    {selectedLang.value === lang.value && (
                      <span className="ml-auto text-[10px] text-[#E3376D]">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Hidden Google Translate widget mount point */}
          <div id="google_translate_element" style={{ display: "none" }} />
        </div>
      </div>
      
      {/* Conditionally render TopStrip if links are provided */}
      {topStripLinks && topStripLinks.length > 0 && (
        <TopStrip links={topStripLinks} />
      )}
    </header>
  );
};

export default HomeHeader;