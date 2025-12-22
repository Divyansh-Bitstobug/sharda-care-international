"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type PhoneMeta = {
  countryCode: string;
  dialCode: string;
};

type Props = {
  value?: PhoneMeta; // parent-controlled value (optional)
  onChange?: (meta: PhoneMeta) => void; // notify parent
};

const PhonePrefixBox: React.FC<Props> = ({ value, onChange }) => {
  const [meta, setMeta] = useState<PhoneMeta | null>(value ?? null);

  useEffect(() => {
    // if parent passes a value, sync local state
    if (value) setMeta(value);
  }, [value]);

  useEffect(() => {
    if (meta) return; // already have value (from parent or previous load)

    const load = async () => {
      try {
        const res = await fetch("/api/country-from-ip");
        const data: { countryCode: string } = await res.json();

        const dialByCode: Record<string, string> = {
          IN: "+91",
          US: "+1",
          GB: "+44",
          JP: "+81",
        };

        const code = (data.countryCode || "IN").toUpperCase();
        const meta: PhoneMeta = {
          countryCode: code,
          dialCode: dialByCode[code] ?? "+91",
        };

        setMeta(meta);
        onChange?.(meta); // let parent store it
      } catch (e) {
        console.error("ip phone prefix error", e);
        const fallback: PhoneMeta = { countryCode: "IN", dialCode: "+91" };
        setMeta(fallback);
        onChange?.(fallback);
      }
    };

    load();
  }, [meta, onChange]);

  const display: PhoneMeta = meta ?? { countryCode: "IN", dialCode: "+91" };
  const flagUrl = `https://flagfeed.com/flags/${display.countryCode.toLowerCase()}`;

  return (
    <div className="flex items-center border border-gray-300 bg-white rounded-lg px-2 h-[44px]">
      <div className="mr-2 flex items-center justify-center">
        <Image
          src={flagUrl}
          alt={display.countryCode}
          width={24}
          height={16}
          className="object-cover"
        />
      </div>
      <span className="text-gray-700 font-medium">
        {display.dialCode}
      </span>
    </div>
  );
};

export default PhonePrefixBox;
