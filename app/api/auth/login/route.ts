import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, generateToken } from "@/src/lib/auth";
import { getAdminCredentials, setAdminCredentials, isAdminConfigured } from "@/src/lib/data";
import { hashPassword } from "@/src/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
    }

    if (!isAdminConfigured()) {
      const { hash, salt } = hashPassword(password);
      setAdminCredentials(hash, salt);
      const token = generateToken();
      return NextResponse.json({ token, message: "Admin account created successfully" });
    }

    const { passwordHash, salt } = getAdminCredentials();

    if (username !== "admin") {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    if (!verifyPassword(password, passwordHash, salt)) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = generateToken();
    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
