"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";

type Item = {
  id: number;
  name: string;
  icon: string;
  type: "speciality" | "treatment" | "technology";
};

const ALL_ITEMS: Item[] = [
  // Specialities
  {
    id: 1,
    name: "Cardiac Sciences",
    type: "speciality",
    icon: "/home/cardiac.svg",
  },
  { id: 2, name: "Oncology", type: "speciality", icon: "/home/oncology.svg" },
  { id: 3, name: "Orthopedic", type: "speciality", icon: "/home/ortho.svg" },
  { id: 4, name: "Neurosciences", type: "speciality", icon: "/home/neuro.svg" },
  { id: 5, name: "ENT", type: "speciality", icon: "/home/ent.svg" },
  { id: 6, name: "Urology", type: "speciality", icon: "/home/urology.svg" },
  {
    id: 7,
    name: "Critical Care",
    type: "speciality",
    icon: "/home/critical.svg",
  },
  { id: 8, name: "GI Surgeries", type: "speciality", icon: "/home/gi.svg" },

  // Treatments (sample)
  { id: 101, name: "Angioplasty", type: "treatment", icon: "/home/gi.svg" },
  { id: 102, name: "Bypass Surgery", type: "treatment", icon: "/home/gi.svg" },
  { id: 103, name: "Chemotherapy", type: "treatment", icon: "/home/gi.svg" },

  // Technologies (sample)
  {
    id: 201,
    name: "Robotic Surgery",
    type: "technology",
    icon: "/home/gi.svg",
  },
  { id: 202, name: "3D Imaging", type: "technology", icon: "/home/gi.svg" },
  { id: 203, name: "Gamma Knife", type: "technology", icon: "/home/gi.svg" },
];

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type TabKey = "speciality" | "treatment" | "technology";

const tabConfig: { key: TabKey; label: string }[] = [
  { key: "speciality", label: "Speciality" },
  { key: "treatment", label: "Treatments" },
  { key: "technology", label: "Technologies" },
];

export const MedicalSpecialitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("speciality");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(2); // default Oncology

  const filteredItems = useMemo(() => {
    return ALL_ITEMS.filter((item) => {
      if (item.type !== activeTab) return false;
      if (!activeLetter) return true;
      return item.name.toUpperCase().startsWith(activeLetter);
    });
  }, [activeTab, activeLetter]);

  // Keep selected item in sync with visible list
  React.useEffect(() => {
    if (
      selectedItemId === null ||
      !filteredItems.some((i) => i.id === selectedItemId)
    ) {
      setSelectedItemId(filteredItems[0]?.id ?? null);
    }
  }, [filteredItems, selectedItemId]);

  const selectedItem =
    filteredItems.find((i) => i.id === selectedItemId) ?? null;

  return (
    <section className="w-full bg-[#F3FBFF] py-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-medium text-gray-900">
            Medical Specialties
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Expert treatment across diverse medical fields, enabling better
            outcomes through advanced technologies and personalized treatment
            plans.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_minmax(0,1fr)]">
          {/* LEFT: list + detail (stack on mobile) */}
          <div className="space-y-4">
            {/* List */}
            <div className="grid gap-3 sm:grid-cols-2 mx-4">
              {filteredItems.map((item) => {
                const isActive = item.id === selectedItemId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItemId(item.id)}
                    className={`flex items-center justify-between rounded-lg border px-4 py-3 text-left transition-all ${
                      isActive
                        ? "border-[#ff7268] bg-white shadow-sm"
                        : "border-transparent bg-white/70 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon placeholder */}
                      <div className="flex p-2 items-center justify-center rounded-full bg-[#F3FBFF]">
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={26}
                          height={26}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        {item.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile detail card */}
            {selectedItem && (
              <div className="rounded-xl bg-white p-4 shadow-sm lg:hidden mx-4">
                <h3 className="text-base font-semibold text-gray-900">
                  {selectedItem.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Short description about {selectedItem.name} and key services
                  offered under this {activeTab}.
                </p>
              </div>
            )}

            <button className="block w-full text-center text-xs font-semibold tracking-wide text-[#ff7268] lg:hidden">
              VIEW ALL SPECIALITIES
            </button>
          </div>

          {/* RIGHT: search panel */}
          <div className="rounded-2xl bg-white p-4 shadow-sm mx-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-gray-900">Search By</p>
            </div>

            {/* Tabs */}
            <div className="mt-3 inline-flex gap-2 text-xs">
              {tabConfig.map((tab) => {
                const isActive = tab.key === activeTab;
                return (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setActiveTab(tab.key);
                      setActiveLetter(null);
                    }}
                    className={`relative rounded-[999px] border px-4 py-2 text-[10px] md:text-sm font-medium transition
          ${
            isActive
              ? "border-transparent bg-gradient-to-r from-[#E33C6A] to-[#EC7D4B] text-white shadow-md"
              : "border-[#eceff5] bg-white text-gray-800 hover:border-[#ff6a6a33]"
          }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Alphabet grid */}
            <div className="mt-6 grid grid-cols-5 gap-3 text-sm sm:grid-cols-7">
              {ALPHABETS.map((letter) => {
                const isActive = letter === activeLetter;
                const hasItems = ALL_ITEMS.some(
                  (i) =>
                    i.type === activeTab &&
                    i.name.toUpperCase().startsWith(letter)
                );
                const disabled = !hasItems;

                return (
                  <button
                    key={letter}
                    disabled={disabled}
                    onClick={() =>
                      setActiveLetter((prev) =>
                        prev === letter ? null : letter
                      )
                    }
                    className={`flex h-12 items-center justify-center rounded-full border text-[10px] md:text-xs transition ${
                      disabled
                        ? "cursor-not-allowed border-gray-200 text-gray-300"
                        : isActive
                        ? "border-[#ff7268] bg-[#fff3f2] text-[#ff7268]"
                        : "border-gray-200 bg-[#f6f8fc] text-gray-600 hover:border-[#ff7268]/60 hover:text-[#ff7268]"
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>

            <button className="mt-6 text-xs font-semibold tracking-wide text-[#ff7268]">
              VIEW ALL SPECIALITY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
