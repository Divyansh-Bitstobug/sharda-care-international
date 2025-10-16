"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/international-patients");
  }, [router]);

  // You can return null or a loading spinner if you want,
  // as this component only exists briefly before redirect.
  return null;
}
