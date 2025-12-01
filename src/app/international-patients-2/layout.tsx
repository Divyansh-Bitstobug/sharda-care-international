import HomeFooter from "@/components/HomeFooter";
import HomeHeader from "@/components/HomeHeader";
import type { ReactNode } from "react";

export default function InternationalPatientsPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen w-screen">
      <HomeHeader />
      {children}
      <HomeFooter />
    </div>
  );
}
