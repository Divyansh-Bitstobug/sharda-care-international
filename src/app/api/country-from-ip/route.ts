// app/api/country-from-ip/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Vercel automatically injects the user's country code into this header
    // We fall back to "IN" just in case it's missing or you are testing locally
    const country = request.headers.get("x-vercel-ip-country") || "IN";

    return NextResponse.json({ countryCode: country });
  } catch (e) {
    console.error("country-from-ip error", e);
    return NextResponse.json(
      { countryCode: "IN" }, // sensible default
      { status: 200 }
    );
  }
}