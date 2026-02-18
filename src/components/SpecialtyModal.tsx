"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

// Exporting this interface so it can be used in the main file
export interface Specialty {
  id: number;
  title: string; // Card Title
  modalHeader: string; // Title shown at top of Modal (e.g. "Institute of...")
  shortDescription: string;
  icon: React.ReactNode;
  fullTitle: string; // Bold title inside modal body
  longDescription: string;
  features: string[];
  footerNote: string;
}

interface SpecialtyModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Specialty | null;
}

const SpecialtyModal: React.FC<SpecialtyModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  // 1. FIXED SCROLL LOCK LOGIC
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !data) return null;

  const handleRequestCallback = () => {
    onClose();
    setTimeout(() => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const headerOffset = 100;
        const elementPosition = heroSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] px-4">
        
        {/* Header */}
        <div className="flex items-center justify-between py-6 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#F3FBFF] rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 flex items-center justify-center [&>img]:w-full [&>img]:h-full">
                {data.icon}
              </div>
            </div>
            {/* Dynamic Modal Header based on Screenshot titles */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">
              {data.modalHeader}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto">
          <h4 className="text-lg font-medium text-gray-900 mb-3">
            {data.fullTitle}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            {data.longDescription}
          </p>
          
          <h5 className="text-base font-medium text-gray-900 mb-4">
            Our specialized clinics and services include:
          </h5>
          
          <ul className="space-y-3 mb-8">
            {data.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-gray-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E5E] mt-1.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          
          <p className="text-xs text-gray-500 leading-relaxed pt-4">
            {data.footerNote}
          </p>
        </div>

        {/* Footer */}
        <div className="py-6 border-t border-gray-100 flex justify-end bg-white">
          <button
            onClick={handleRequestCallback}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#E33C6A] to-[#ED7E4B] text-white text-sm font-semibold shadow-md hover:shadow-lg transform active:scale-95 transition-all"
          >
            Request a Callback
          </button>
        </div>
      </div>
      
      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default SpecialtyModal;