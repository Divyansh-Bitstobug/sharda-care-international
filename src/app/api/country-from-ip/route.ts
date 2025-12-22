// app/api/country-from-ip/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.country.is", {
      cache: "no-store",
    });

    const data = (await res.json()) as { country: string };

    return NextResponse.json({ countryCode: data.country });
  } catch (e) {
    console.error("country-from-ip error", e);
    return NextResponse.json(
      { countryCode: "IN" }, // sensible default
      { status: 200 }
    );
  }
}
