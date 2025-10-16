import type { ReactNode } from "react";

export default function InternationalPatientsPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen w-screen">
      {children}
    </div>
  );
}
