import HomeFooter from "@/components/HomeFooter";
import HomeHeader from "@/components/HomeHeader";
import type { ReactNode } from "react";

const CARDIAC_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Message From Doctor", href: "#message" },
  { label: "Treatment", href: "#treatment" },
  { label: "Ailment", href: "#ailment" },
  { label: "Technologies", href: "#technologies" },
  { label: "Sub Specialization", href: "#sub" },
  { label: "Patient Stories", href: "#patient-stories" },
];

export default function CardiacPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen w-screen">
      <HomeHeader topStripLinks={CARDIAC_LINKS} />

      {children}

      <HomeFooter />
    </div>
  );
}
