"use client";

import React, { useEffect, useState } from "react";

const ISO_TO_NAME: Record<string, string> = {
  IN: "India",
  US: "United States",
  GB: "United Kingdom",
  // add more important mappings if you want nicer labels
};

const CountrySelect: React.FC<{
  value: string;
  onChange: (val: string) => void;
}> = ({ value, onChange }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch("/api/country-from-ip");
        const data: { countryCode: string } = await res.json();

        const code = data.countryCode || "IN";
        const label = ISO_TO_NAME[code] ?? code;

        onChange(label);
      } catch (err) {
        console.error("Error fetching country from IP", err);
        onChange("India");
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [onChange]);

  return (
    <div className="w-full mb-3">

      <div className="relative">
        <input
          type="text"
          readOnly
          className="w-full h-[44px] border border-gray-300 rounded-lg px-4 text-sm md:text-base text-gray-900 bg-gray-50"
          value={
            loading
              ? "Detecting your country..."
              : `Locality: ${value}` || "India"
          }
        />
      </div>
    </div>
  );
};

export default CountrySelect;
