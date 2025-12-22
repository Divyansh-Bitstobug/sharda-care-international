"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const MobileBottomNav: React.FC = () => {
  return (
    // hidden on md+ screens, fixed to bottom on mobile
    <nav className="fixed inset-x-0 bottom-0 z-40 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.06)] md:hidden">
      <div className="flex items-center justify-around py-2 text-[10px] text-gray-600">
        {/* Telegram */}
        <button
          type="button"
          className="flex flex-col items-center gap-1"
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_8982_13194)">
              <path
                d="M-0.105469 1.80859H24.1014M-0.105469 7.86031H24.1014M-0.105469 13.912H24.1014"
                stroke="#555555"
                strokeWidth="1.32194"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_8982_13194">
                <rect width="24" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span className="font-semibold">Menu</span>
        </button>

        {/* Book Appt */}
        <Link
          href="/book-appointment"
          className="flex flex-col items-center gap-1"
        >
          <Image
            src={"/appoint1.svg"}
            alt="icon"
            width={40}
            height={40}
            className="w-5 h-5"
          />
          <span>Doctors</span>
        </Link>

        <Link
          href="/book"
          className="flex flex-col items-center gap-1"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.25 1.5C8.66423 1.5 9 1.83579 9 2.25V3H12.75C13.1642 3 13.5 3.33579 13.5 3.75C13.5 4.16421 13.1642 4.5 12.75 4.5H9V5.25C9 5.66421 8.66423 6 8.25 6C7.83577 6 7.5 5.66421 7.5 5.25V4.5H6C4.34314 4.5 3 5.84314 3 7.5V18C3 19.6568 4.34314 21 6 21H9.75C10.1642 21 10.5 21.3358 10.5 21.75C10.5 22.1642 10.1642 22.5 9.75 22.5H6C3.51472 22.5 1.5 20.4853 1.5 18V7.5C1.5 5.01472 3.51472 3 6 3H7.5V2.25C7.5 1.83579 7.83577 1.5 8.25 1.5ZM15.75 1.5C16.1642 1.5 16.5 1.83579 16.5 2.25V3H18C20.4853 3 22.5 5.01472 22.5 7.5V9C22.5 9.41423 22.1642 9.75 21.75 9.75C21.3358 9.75 21 9.41423 21 9V7.5C21 5.84314 19.6568 4.5 18 4.5H16.5V5.25C16.5 5.66421 16.1642 6 15.75 6C15.3358 6 15 5.66421 15 5.25V2.25C15 1.83579 15.3358 1.5 15.75 1.5ZM6 8.25C5.58579 8.25 5.25 8.58577 5.25 9C5.25 9.41423 5.58579 9.75 6 9.75H18C18.4142 9.75 18.75 9.41423 18.75 9C18.75 8.58577 18.4142 8.25 18 8.25H6ZM6.375 14.25C6.99632 14.25 7.5 13.7463 7.5 13.125C7.5 12.5037 6.99632 12 6.375 12C5.75368 12 5.25 12.5037 5.25 13.125C5.25 13.7463 5.75368 14.25 6.375 14.25ZM7.5 17.625C7.5 18.2463 6.99632 18.75 6.375 18.75C5.75368 18.75 5.25 18.2463 5.25 17.625C5.25 17.0037 5.75368 16.5 6.375 16.5C6.99632 16.5 7.5 17.0037 7.5 17.625Z"
              fill="#555555"
            />
            <circle cx="17.6008" cy="16.9992" r="4.3" stroke="#555555" />
            <path
              d="M19.3156 15.5663L16.7976 18.0844L15.8808 17.1677C15.7247 17.0115 15.4724 17.0115 15.3163 17.1677C15.1602 17.3238 15.1602 17.576 15.3163 17.7321L16.5173 18.9331C16.5974 19.0132 16.6975 19.0492 16.8016 19.0492C16.9056 19.0492 17.0057 19.0092 17.0858 18.9331L19.8881 16.1308C20.0443 15.9747 20.0443 15.7224 19.8881 15.5663C19.732 15.4102 19.4798 15.4102 19.3237 15.5663H19.3156Z"
              fill="#555555"
            />
          </svg>

          <span>Book Apt.</span>
        </Link>

        {/* WhatsApp */}
        <Link
          href="https://wa.me/0000000000"
          className="flex flex-col items-center gap-1"
        >
          <Image
            src={"/whatsapp.svg"}
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
            src={"/call.svg"}
            alt="icon"
            width={40}
            height={40}
            className="w-5 h-5"
          />
          <span>Call Back</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
