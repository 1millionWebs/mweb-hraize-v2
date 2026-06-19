import { NextResponse } from "next/server";
import { getVacancies } from "@/src/lib/data";

export async function GET() {
  const vacancies = getVacancies();
  return NextResponse.json({ vacancies });
}
