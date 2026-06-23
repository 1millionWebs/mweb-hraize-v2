import { NextRequest, NextResponse } from "next/server";
import { sendResumeEmails } from "@/src/lib/email";

// Simple in-memory rate limiter map
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 60 seconds

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // 1. Honeypot check for spam prevention
    const honeypot = formData.get("website");
    if (honeypot && honeypot.toString().trim() !== "") {
      console.warn("Spam bot detected via honeypot field. Dropping request silently.");
      // Return 200 OK so bots think they succeeded, but do nothing
      return NextResponse.json({ success: true, message: "Resume received successfully" });
    }

    // 2. Extract and validate text fields
    const firstName = formData.get("firstName")?.toString().trim();
    const lastName = formData.get("lastName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const location = formData.get("location")?.toString().trim();
    const gender = formData.get("gender")?.toString().trim();
    const ageRange = formData.get("ageRange")?.toString().trim();
    const maritalStatus = formData.get("maritalStatus")?.toString().trim();
    const qualification = formData.get("qualification")?.toString().trim();
    const experience = formData.get("experience")?.toString().trim();
    const comments = formData.get("comments")?.toString().trim();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !location ||
      !gender ||
      !ageRange ||
      !maritalStatus ||
      !qualification ||
      !experience ||
      !comments
    ) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
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
        { error: `Too many submissions. Please wait ${timeRemaining} seconds before trying again.` },
        { status: 429 }
      );
    }

    // 4. File extraction and validation
    const file = formData.get("resume") as File | null;
    if (!file || !(file instanceof File) || file.size === 0) {
      return NextResponse.json({ error: "Please upload a valid resume file." }, { status: 400 });
    }

    // Size limit check (max 5MB)
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "Resume file size exceeds the 5MB limit." }, { status: 400 });
    }

    // File type check (extension and mime type)
    const fileName = file.name;
    const fileExtension = fileName.split(".").pop()?.toLowerCase();
    const allowedExtensions = ["pdf", "docx"];
    const allowedMimeTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const hasAllowedExtension = fileExtension && allowedExtensions.includes(fileExtension);
    const hasAllowedMimeType = allowedMimeTypes.includes(file.type);

    if (!hasAllowedExtension && !hasAllowedMimeType) {
      return NextResponse.json({ error: "Only PDF and DOCX files are allowed." }, { status: 400 });
    }

    // 5. Read file into a Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Update rate limiter
    rateLimitMap.set(email.toLowerCase(), now);

    // 6. Trigger emails
    const result = await sendResumeEmails({
      firstName,
      lastName,
      email,
      phone,
      location,
      gender,
      ageRange,
      maritalStatus,
      qualification,
      experience,
      comments,
      fileBuffer: buffer,
      fileName,
      fileMimeType: file.type || (fileExtension === "pdf" ? "application/pdf" : "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
    });

    if (!result.success) {
      // Clear rate limit on failure to allow retry
      rateLimitMap.delete(email.toLowerCase());
      return NextResponse.json(
        { error: "Failed to send emails. Please try again later.", details: result.errors },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Resume submitted successfully." });
  } catch (error: any) {
    console.error("Error in POST /api/submit-resume:", error);
    return NextResponse.json({ error: "An unexpected error occurred: " + error.message }, { status: 500 });
  }
}
