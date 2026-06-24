import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, generateToken, hashPassword } from "@/src/lib/auth";
import { getAdminCredentials, setAdminCredentials, isAdminConfigured } from "@/src/lib/data";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
    }

    if (!(await isAdminConfigured())) {
      const hashed = hashPassword(password);
      await setAdminCredentials(username, hashed);
      const token = generateToken();
      return NextResponse.json({ token, message: "Admin account created successfully" });
    }

    const creds = await getAdminCredentials();
    if (!creds) {
      return NextResponse.json({ error: "Admin not configured" }, { status: 500 });
    }

    if (username !== creds.username) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    if (!verifyPassword(password, creds.password)) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = generateToken();
    return NextResponse.json({ token });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
