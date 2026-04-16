"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

// 1. Export the SectionLink interface so HomeHeader can use it
export interface SectionLink {
  label: string;
  href: string;
}

// 2. Define the props to accept the links array
interface TopStripProps {
  links: SectionLink[];
}

// 3. Rename the export from ClinicalTopStrip to TopStrip
export const TopStrip: React.FC<TopStripProps> = ({ links }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // EFFECT 1: Intersection Observer for normal scrolling
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    links.forEach((link) => {
      const id = link.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [links]);

  // EFFECT 2: Fallback to force the first section active when at the absolute top
  useEffect(() => {
    const handleScrollTop = () => {
      // If window is scrolled to the top (within 50px), force the first link to be active
      if (window.scrollY <= 50 && links.length > 0) {
        setActiveSection(links[0].href);
      }
    };

    window.addEventListener("scroll", handleScrollTop);
    // Call immediately on mount to set the correct initial state
    handleScrollTop();

    return () => window.removeEventListener("scroll", handleScrollTop);
  }, [links]);

  // EFFECT 3: Scroll the active link into view horizontally (Mobile view fix)
  useEffect(() => {
    if (!activeSection || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const activeElement = container.querySelector(
      `[data-href="${activeSection}"]`
    ) as HTMLElement | null;

    if (activeElement) {
      const scrollLeft =
        activeElement.offsetLeft -
        container.clientWidth / 2 +
        activeElement.clientWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      const headerOffset = 112; 
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(href);
      window.history.pushState(null, "", href);
    }
  };

  return (
    <nav className="w-full flex max-w-[1300px] mx-auto relative">
      <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div
        ref={scrollContainerRef}
        className="flex items-center gap-8 overflow-x-auto px-4 py-4 text-xs sm:text-sm text-gray-500 whitespace-nowrap hide-scroll w-full scroll-smooth relative"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {links.map((item) => {
          const isActive = activeSection === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              data-href={item.href}
              scroll={false}
              onClick={(e) => handleClick(e, item.href)}
              className={`flex items-center gap-1.5 transition-all duration-300 ${
                isActive
                  ? "text-[#E3396C]"
                  : "hover:text-gray-900"
              }`}
            >
              <span
                className={`text-lg leading-none ${
                  isActive ? "text-[#E3396C]" : "text-gray-300"
                }`}
              >
                •
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};