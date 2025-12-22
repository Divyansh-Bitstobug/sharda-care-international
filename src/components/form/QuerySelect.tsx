"use client";

import React, { useEffect, useRef, useState } from "react";

const QUERY_OPTIONS = [
  "Treatment Details",
  "Medical Opinion",
  "Doctor Availability & Appointment Scheduling",
  "Visa Assistance",
  "Medical Invitation Letter",
  "Travel and Accommodation Support",
  "Hospital Facilities and Infrastructure",
  "Other",
];

type Props = {
  value: string;
  onChange: (val: string) => void;
};

const QuerySelect: React.FC<Props> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const selectedLabel = value || "Query";

  // close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node) &&
        listRef.current &&
        !listRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="relative w-full mb-3">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full h-[44px] border border-gray-300 rounded-lg px-4 text-sm md:text-base text-gray-700 bg-white flex items-center justify-between focus:outline-none focus:border-blue-300"
      >
        <span className={value ? "text-gray-900" : "text-gray-500"}>
          {selectedLabel}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          ref={listRef}
          className="absolute z-20 mt-1 w-full rounded-xl border border-gray-200 bg-white shadow-lg py-1 max-h-56 overflow-y-auto"
        >
          {QUERY_OPTIONS.map((label) => {
            const selected = value === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => {
                  onChange(label);
                  setOpen(false);
                }}
                className={`w-full flex items-center px-4 py-2 text-sm text-left hover:bg-gray-50 ${
                  selected ? "bg-gray-50" : ""
                }`}
              >
                {/* radio bullet */}
                <span
                  className={`mr-3 flex h-4 w-4 items-center justify-center rounded-full border ${
                    selected
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                >
                  {selected && (
                    <span className="h-2 w-2 rounded-full bg-black" />
                  )}
                </span>
                <span className="text-gray-800">{label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default QuerySelect;
