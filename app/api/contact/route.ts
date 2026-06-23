import { NextRequest, NextResponse } from "next/server";
import { sendContactEmails } from "@/src/lib/email";

// Simple in-memory rate limiter map
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 60 seconds

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Honeypot check for spam prevention
    if (body.website && body.website.trim() !== "") {
      console.warn("Spam bot detected via honeypot field. Dropping request silently.");
      // Return 200 OK so bots think they succeeded, but do nothing
      return NextResponse.json({ success: true, message: "Inquiry received successfully." });
    }

    // 2. Extract and validate fields
    const fullName = body.fullName?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const companyName = body.companyName?.trim();
    const serviceInterested = body.serviceInterested?.trim();
    const message = body.message?.trim();

    if (!fullName || !email || !phone || !serviceInterested || !message) {
      return NextResponse.json({ error: "All required fields must be filled." }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    // 3. Basic Rate Limiting
    const now = Date.now();
    const lastSubmission = rateLimitMap.get(email.toLowerCase());
    if (lastSubmission && now - lastSubmission < RATE_LIMIT_WINDOW) {
      const timeRemaining = Math.ceil((RATE_LIMIT_WINDOW - (now - lastSubmission)) / 1000);
      return NextResponse.json(
        { error: `Too many messages. Please wait ${timeRemaining} seconds before sending another.` },
        { status: 429 }
      );
    }

    // Update rate limiter
    rateLimitMap.set(email.toLowerCase(), now);

    // 4. Send emails
    const result = await sendContactEmails({
      fullName,
      email,
      phone,
      companyName,
      serviceInterested,
      message,
    });

    if (!result.success) {
      // Clear rate limit on failure to allow retry
      rateLimitMap.delete(email.toLowerCase());
      return NextResponse.json(
        { error: "Failed to send emails. Please try again later.", details: result.errors },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Inquiry submitted successfully." });
  } catch (error: any) {
    console.error("Error in POST /api/contact:", error);
    return NextResponse.json({ error: "An unexpected error occurred: " + error.message }, { status: 500 });
  }
}
