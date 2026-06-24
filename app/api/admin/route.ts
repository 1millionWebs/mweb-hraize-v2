import { NextRequest, NextResponse } from "next/server";
import { verifyToken, hashPassword, verifyPassword } from "@/src/lib/auth";
import { getVacancies, getAdminCredentials, setAdminCredentials } from "@/src/lib/data";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function getToken(request: NextRequest): string | null {
  const auth = request.headers.get("authorization");
  if (!auth || !auth.startsWith("Bearer ")) return null;
  return auth.slice(7);
}

export async function GET(request: NextRequest) {
  const token = getToken(request);
  if (!token || !verifyToken(token)) return unauthorized();

  const vacancies = await getVacancies();
  return NextResponse.json({ vacancies });
}

export async function PUT(request: NextRequest) {
  const token = getToken(request);
  if (!token || !verifyToken(token)) return unauthorized();

  try {
    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: "Current password and new password are required" }, { status: 400 });
    }

    if (newPassword.length < 8) {
      return NextResponse.json({ error: "New password must be at least 8 characters" }, { status: 400 });
    }

    if (!/[A-Z]/.test(newPassword)) {
      return NextResponse.json({ error: "New password must contain at least one uppercase letter" }, { status: 400 });
    }

    if (!/[a-z]/.test(newPassword)) {
      return NextResponse.json({ error: "New password must contain at least one lowercase letter" }, { status: 400 });
    }

    if (!/[0-9]/.test(newPassword)) {
      return NextResponse.json({ error: "New password must contain at least one number" }, { status: 400 });
    }

    const creds = await getAdminCredentials();
    if (!creds) {
      return NextResponse.json({ error: "Admin not configured" }, { status: 500 });
    }
    if (!verifyPassword(currentPassword, creds.password)) {
      return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 });
    }

    const hashed = hashPassword(newPassword);
    await setAdminCredentials(creds.username, hashed);

    return NextResponse.json({ message: "Password updated successfully" });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
