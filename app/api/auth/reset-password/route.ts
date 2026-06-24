import { NextRequest, NextResponse } from "next/server";
import { verifyResetToken, hashPassword } from "@/src/lib/auth";
import { setAdminCredentials } from "@/src/lib/data";

export async function POST(request: NextRequest) {
  try {
    const { token, newPassword } = await request.json();

    if (!token || !newPassword) {
      return NextResponse.json({ error: "Token and new password are required" }, { status: 400 });
    }

    const username = verifyResetToken(token);
    if (!username) {
      return NextResponse.json({ error: "Invalid or expired reset token" }, { status: 400 });
    }

    const hashed = hashPassword(newPassword);
    await setAdminCredentials(username, hashed);

    return NextResponse.json({ message: "Password updated successfully" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
