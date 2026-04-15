"use client";

import Link from "next/link";
import React from "react";

const SECTION_LINKS = [
  { label: "Statistics", href: "#statistics" },
  { label: "Our Specialities and Procedures", href: "#specialities" },
  { label: "Journey", href: "#journey" },
  { label: "Our Medical Experts", href: "#experts" },
  { label: "Technologies", href: "#technologies" },
  { label: "Patient Stories", href: "#patient-stories" },
  { label: "Awards & Accreditations", href: "#awards" },
  { label: "Sharda Group", href: "#sharda-group" },
];

export const ClinicalTopStrip: React.FC = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    // optional: update URL hash
    window.history.pushState(null, "", href);
  };

  return (
    <nav className="w-full bg-white flex">
      <div className="mx-auto flex items-center gap-8 overflow-x-auto px-6 py-3 text-xs sm:text-sm text-gray-500 whitespace-nowrap">
        {SECTION_LINKS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            scroll={false}
            onClick={(e) => handleClick(e, item.href)}
            className="flex items-center gap-1 hover:text-gray-900 transition-colors"
          >
            <span className="text-gray-400">•</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
