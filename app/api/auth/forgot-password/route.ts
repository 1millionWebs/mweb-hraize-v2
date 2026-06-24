import { NextRequest, NextResponse } from "next/server";
import { generateResetToken } from "@/src/lib/auth";
import { sendResetPasswordEmail } from "@/src/lib/email";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (email.toLowerCase() !== "info@hraize.com" && email.toLowerCase() !== "lorrybusvanjeep@gmail.com") {
      return NextResponse.json({ error: "Unauthorized email address" }, { status: 403 });
    }

    // Generate reset token for "Admin"
    const resetToken = generateResetToken("Admin");
    const origin = new URL(request.url).origin;
    const resetLink = `${origin}/admin?reset_token=${resetToken}`;

    const mailResult = await sendResetPasswordEmail(email, resetLink);

    if (!mailResult.success) {
      return NextResponse.json({ error: mailResult.error || "Failed to send reset email" }, { status: 500 });
    }

    return NextResponse.json({ message: "Password reset link sent to info@hraize.com" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
