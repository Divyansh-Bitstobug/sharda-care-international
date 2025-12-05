"use client";

import React from "react";
import Link from "next/link";
import { FiSend, FiPhone, FiMenu } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Image from "next/image";



const MobileBottomNav: React.FC = () => {
  return (
    // hidden on md+ screens, fixed to bottom on mobile
    <nav className="fixed inset-x-0 bottom-0 z-40 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.06)] md:hidden">
      <div className="flex items-center justify-around py-2 text-[10px] text-gray-600">
        {/* Telegram */}
        <Link
          href="https://t.me/your-handle"
          className="flex flex-col items-center gap-1"
        >
          <Image 
            src={'/telegram.svg'}
            alt="icon"
            width={40}
            height={40}
            className="w-5 h-5"
          />
          <span>Telegram</span>
        </Link>

        {/* Book Appt */}
        <Link
          href="/book-appointment"
          className="flex flex-col items-center gap-1"
        >
          <Image 
            src={'/appoint.svg'}
            alt="icon"
            width={40}
            height={40}
            className="w-5 h-5"
          />
          <span>Book Appt</span>
        </Link>

        {/* WhatsApp */}
        <Link
          href="https://wa.me/0000000000"
          className="flex flex-col items-center gap-1"
        >
          <Image 
            src={'/whatsapp.svg'}
            alt="icon"
            width={40}
            height={40}
            className="w-5 h-5"
          />
          <span>WhatsApp</span>
        </Link>

        {/* Call Us */}
        <a
          href="tel:+910000000000"
          className="flex flex-col items-center gap-1"
        >
          <Image 
            src={'/call.svg'}
            alt="icon"
            width={40}
            height={40}
            className="w-5 h-5"
          />
          <span>Call Us</span>
        </a>

        {/* Menu */}
        <button
          type="button"
          className="flex flex-col items-center gap-1"
          aria-label="Open menu"
        >
          <Image 
            src={'/menu.svg'}
            alt="icon"
            width={40}
            height={40}
            className="w-5 h-5"
          />
          <span className="font-semibold">Menu</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
