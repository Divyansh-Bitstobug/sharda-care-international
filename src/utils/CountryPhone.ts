// utils/countryPhone.ts
export type CountryPhoneMeta = {
  code: string;         // ISO alpha-2, e.g. "IN"
  dialCode: string;     // e.g. "+91"
  emoji: string;        // e.g. "🇮🇳"
};

export const COUNTRY_PHONE: Record<string, CountryPhoneMeta> = {
  IN: { code: "IN", dialCode: "+91", emoji: "🇮🇳" },
  US: { code: "US", dialCode: "+1", emoji: "🇺🇸" },
  GB: { code: "GB", dialCode: "+44", emoji: "🇬🇧" },
  AE: { code: "AE", dialCode: "+971", emoji: "🇦🇪" },
  // add any others you care about
};

export const getCountryPhoneMeta = (iso: string): CountryPhoneMeta => {
  const upper = iso.toUpperCase();
  return (
    COUNTRY_PHONE[upper] ?? COUNTRY_PHONE["IN"] // default to India
  );
};
