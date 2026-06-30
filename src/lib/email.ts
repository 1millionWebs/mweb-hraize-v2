import fs from "fs";
import path from "path";

let cachedLogoBase64: string | null = null;

async function getLogoBase64(): Promise<string> {
  if (cachedLogoBase64) return cachedLogoBase64;

  try {
    const response = await fetch("/logo1.png");
    if (response.ok) {
      const buffer = Buffer.from(await response.arrayBuffer());
      cachedLogoBase64 = buffer.toString("base64");
      return cachedLogoBase64;
    }
  } catch {
    // fall through to fs
  }

  try {
    const logoPath = path.join(process.cwd(), "public", "logo1.png");
    const logoBuffer = fs.readFileSync(logoPath);
    cachedLogoBase64 = logoBuffer.toString("base64");
    return cachedLogoBase64;
  } catch {
    return "";
  }
}

function getLogoHtml(): string {
  if (!cachedLogoBase64) return "";
  return `<div style="text-align:center;padding:24px 0 16px 0;">
    <img src="cid:company-logo" alt="Hraize" style="width:60px;max-height:60px;height:auto;display:inline-block;border:0;outline:none;" />
  </div>`;
}

async function getLogoAttachment(): Promise<MailtrapAttachment | null> {
  const content = await getLogoBase64();
  if (!content) return null;
  return {
    content,
    filename: "logo1.png",
    type: "image/png",
    disposition: "inline",
    content_id: "company-logo",
  };
}

interface MailtrapAttachment {
  content: string; // base64 string
  filename: string;
  type: string;
  disposition?: "attachment" | "inline";
  content_id?: string;
}

interface MailtrapAddress {
  email: string;
  name?: string;
}

interface MailtrapSendPayload {
  from: MailtrapAddress;
  to: MailtrapAddress[];
  subject: string;
  html?: string;
  text?: string;
  attachments?: MailtrapAttachment[];
}

export function getServiceLabel(service: string): string {
  const serviceMap: Record<string, string> = {
    subscription: "HR Subscription Support",
    consulting: "HR Consulting & Systems Setup",
    audit: "HR Audit",
    analytics: "People Analytics & Dashboard",
    policies: "HR Policy and Process Documentation",
    workforce: "Strategic Workforce Planning",
    permanent: "Permanent Recruitment",
    contract: "Contract & Temp Staffing",
    graduate: "Graduate & Emerging Talent Pipeline",
    fresher: "Fresher to professional",
    "mid-career": "Mid Career Acceleration",
    managers: "First-Time Managers",
    partnership: "General Corporate Partnership",
    pr: "Media & PR Inquiry",
    other: "Other Business Matter",
  };
  return serviceMap[service] || service;
}

/**
 * Sends an email using the Mailtrap API.
 * Uses native fetch for optimal compatibility with edge/Cloudflare runtimes.
 */
export async function sendEmail(payload: MailtrapSendPayload): Promise<{ success: boolean; error?: string }> {
  const token = process.env.MAILTRAP_API_TOKEN;
  const baseUrl = process.env.MAILTRAP_API_URL || "https://send.api.mailtrap.io/api/send";

  if (!token) {
    const errorMsg = "Email configuration error: MAILTRAP_API_TOKEN is not defined in environment variables.";
    console.error(errorMsg);
    return { success: false, error: errorMsg };
  }

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Mailtrap API error (${response.status}):`, errorText);
      return {
        success: false,
        error: `Mailtrap API returned status ${response.status}: ${errorText || response.statusText}`,
      };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Failed to send email via Mailtrap:", error);
    return { success: false, error: error.message || "Unknown network error during sending." };
  }
}

interface ContactEmailParams {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceInterested: string;
  message: string;
}

/**
 * Handles sending contact notification to HR and receipt acknowledgment to the inquirer.
 */
export async function sendContactEmails(params: ContactEmailParams): Promise<{ success: boolean; errors?: string[] }> {
  const hrRecipient = process.env.HR_RECIPIENT_EMAIL || "admin@hraize.com";
  const senderEmail = process.env.MAILTRAP_SENDER_EMAIL || "info@hraize.com";
  const senderName = process.env.MAILTRAP_SENDER_NAME || "Hraize HR Analytics";

  const serviceLabel = getServiceLabel(params.serviceInterested);
  const currentYear = new Date().getFullYear();

  // 1. Email to HR/Admin
  const hrEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #1e293b; line-height: 1.5; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff; }
    h2 { color: #0284c7; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0; font-size: 20px; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { text-align: left; padding: 10px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
    th { font-weight: bold; color: #475569; width: 30%; }
    .message-box { background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 15px; margin-top: 15px; border-radius: 0 4px 4px 0; font-style: italic; font-size: 14px; }
    .footer { font-size: 12px; color: #94a3b8; text-align: center; margin-top: 30px; border-top: 1px solid #f1f5f9; padding-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    ${getLogoHtml()}
    <h2>New Contact Inquiry</h2>
    <p>A new enquiry has been submitted through the Hraize Contact Form. Below are the details:</p>
    <table>
      <tr>
        <th>Full Name</th>
        <td>${params.fullName}</td>
      </tr>
      <tr>
        <th>Email</th>
        <td><a href="mailto:${params.email}">${params.email}</a></td>
      </tr>
      <tr>
        <th>Phone</th>
        <td>${params.phone}</td>
      </tr>
      <tr>
        <th>Company</th>
        <td>${params.companyName || "N/A"}</td>
      </tr>
      <tr>
        <th>Service Category</th>
        <td>${serviceLabel}</td>
      </tr>
    </table>
    <h3>Inquiry Message:</h3>
    <div class="message-box">
      ${params.message.replace(/\r?\n/g, "<br/>")}
    </div>
    <div class="footer">
      <p>This message was sent automatically from the Hraize website contact form.</p>
    </div>
  </div>
</body>
</html>
`;

  const hrText = `
New Contact Inquiry
------------------
Full Name: ${params.fullName}
Email: ${params.email}
Phone: ${params.phone}
Company: ${params.companyName || "N/A"}
Service Category: ${serviceLabel}

Inquiry Message:
${params.message}
  `.trim();

  // 2. Acknowledgment email back to user
  const userEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff; }
    .header { text-align: center; margin-bottom: 25px; }
    h2 { color: #0284c7; margin-top: 0; font-size: 20px; }
    .content { padding: 10px 0; font-size: 14px; }
    .footer { font-size: 12px; color: #94a3b8; text-align: center; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${getLogoHtml()}
      <h2>We've Received Your Inquiry</h2>
    </div>
    <div class="content">
      <p>Dear <strong>${params.fullName}</strong>,</p>
      <p>Thank you for reaching out to Hraize HR, We have successfully received your inquiry regarding <strong>${serviceLabel}</strong>.</p>
      <p>Our advisory team is currently reviewing your details and will get back to you within 24-48 business hours.</p>
      <p>If you have any urgent matters, feel free to reply directly to this email or call us during business hours (Monday to Saturday, 9:00 AM to 6:00 PM).</p>
      <br/>
      <p>Best regards,</p>
      <p><strong>The Hraize Team</strong><br/>HR Analytics & Advisory Services</p>
    </div>
    <div class="footer">
      <p>Hraize, Thanjavur, Tamil Nadu.</p>
      <p>&copy; ${currentYear} Hraize. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

  const userText = `
Dear ${params.fullName},

Thank you for reaching out to Hraize HR Analytics! We have successfully received your inquiry regarding ${serviceLabel}.

Our advisory team is currently reviewing your details and will get back to you within 24-48 business hours.

Best regards,
The Hraize Team
HR Analytics & Advisory Services
  `.trim();

  const [logoAttachment] = await Promise.all([getLogoAttachment()]);
  const logoAttachments = logoAttachment ? [logoAttachment] : [];

  // Send notifications in parallel
  const [hrResult, userResult] = await Promise.all([
    sendEmail({
      from: { email: senderEmail, name: senderName },
      to: [{ email: hrRecipient, name: "Hraize Admin" }],
      subject: `New Inquiry: ${params.fullName} - ${serviceLabel}`,
      html: hrEmailHtml,
      text: hrText,
      attachments: logoAttachments,
    }),
    sendEmail({
      from: { email: senderEmail, name: senderName },
      to: [{ email: params.email, name: params.fullName }],
      subject: `Acknowledgment: We received your inquiry`,
      html: userEmailHtml,
      text: userText,
      attachments: logoAttachments,
    }),
  ]);

  const errors: string[] = [];
  if (!hrResult.success) errors.push(`HR notification failed: ${hrResult.error}`);
  if (!userResult.success) errors.push(`User acknowledgment failed: ${userResult.error}`);

  return {
    success: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined,
  };
}

interface ResumeEmailParams {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  gender: string;
  ageRange: string;
  maritalStatus: string;
  qualification: string;
  experience: string;
  comments: string;
  fileBuffer: Buffer;
  fileName: string;
  fileMimeType: string;
}

/**
 * Handles sending resume submissions to HR (with attachments) and confirmations to the applicant.
 */
export async function sendResumeEmails(params: ResumeEmailParams): Promise<{ success: boolean; errors?: string[] }> {
  const hrRecipient = process.env.HR_RECIPIENT_EMAIL || "admin@hraize.com";
  const senderEmail = process.env.MAILTRAP_SENDER_EMAIL || "info@hraize.com";
  const senderName = process.env.MAILTRAP_SENDER_NAME || "Hraize HR Analytics";
  const currentYear = new Date().getFullYear();

  // Convert buffer to base64 for attachment
  const base64Content = params.fileBuffer.toString("base64");

  // 1. Email to HR/Admin
  const hrEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #1e293b; line-height: 1.5; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff; }
    h2 { color: #0284c7; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0; font-size: 20px; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { text-align: left; padding: 10px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
    th { font-weight: bold; color: #475569; width: 35%; }
    .comments-box { background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 15px; margin-top: 15px; border-radius: 0 4px 4px 0; font-style: italic; font-size: 14px; }
    .footer { font-size: 12px; color: #94a3b8; text-align: center; margin-top: 30px; border-top: 1px solid #f1f5f9; padding-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    ${getLogoHtml()}
    <h2>New Candidate Application</h2>
    <p>A new resume has been submitted to the Hraize Talent Pool. The candidate's resume file is attached.</p>
    <table>
      <tr>
        <th>Applicant Name</th>
        <td>${params.firstName} ${params.lastName}</td>
      </tr>
      <tr>
        <th>Email</th>
        <td><a href="mailto:${params.email}">${params.email}</a></td>
      </tr>
      <tr>
        <th>Phone</th>
        <td>${params.phone}</td>
      </tr>
      <tr>
        <th>Location</th>
        <td>${params.location}</td>
      </tr>
      <tr>
        <th>Gender</th>
        <td>${params.gender}</td>
      </tr>
      <tr>
        <th>Age Range</th>
        <td>${params.ageRange}</td>
      </tr>
      <tr>
        <th>Marital Status</th>
        <td>${params.maritalStatus}</td>
      </tr>
      <tr>
        <th>Qualification</th>
        <td>${params.qualification}</td>
      </tr>
      <tr>
        <th>Experience Level</th>
        <td>${params.experience}</td>
      </tr>
      <tr>
        <th>Resume File</th>
        <td>${params.fileName}</td>
      </tr>
    </table>
    <h3>Comments & Career Objective:</h3>
    <div class="comments-box">
      ${params.comments.replace(/\r?\n/g, "<br/>")}
    </div>
    <div class="footer">
      <p>This message was sent automatically from the Hraize HR Analytics website resume submission system.</p>
    </div>
  </div>
</body>
</html>
`;

  const hrText = `
New Candidate Application
--------------------------
Applicant Name: ${params.firstName} ${params.lastName}
Email: ${params.email}
Phone: ${params.phone}
Location: ${params.location}
Gender: ${params.gender}
Age Range: ${params.ageRange}
Marital Status: ${params.maritalStatus}
Qualification: ${params.qualification}
Experience Level: ${params.experience}
Resume File: ${params.fileName}

Comments & Career Objective:
${params.comments}
  `.trim();

  // 2. Acknowledgment to candidate
  const userEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff; }
    .header { text-align: center; margin-bottom: 25px; }
    h2 { color: #0284c7; margin-top: 0; font-size: 20px; }
    .content { padding: 10px 0; font-size: 14px; }
    .footer { font-size: 12px; color: #94a3b8; text-align: center; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${getLogoHtml()}
      <h2>Resume Received Successfully</h2>
    </div>
    <div class="content">
      <p>Dear <strong>${params.firstName}</strong>,</p>
      <p>Thank you for submitting your resume to Hraize!</p>
      <p>We have successfully received your details and added your profile to our talent database. Our recruiting team will evaluate your background against our open vacancies / Applied job(s) and client requirements.</p>
      <p>If your profile matches any of our current or future needs, we will reach out to schedule an introductory call.</p>
      <p>You can also check our current vacancies at any time on our careers page.</p>
      <br/>
      <p>Best of luck with your search!</p>
      <p><strong>The Hraize Recruitment Team</strong><br/>Hraize HR Analytics</p>
    </div>
    <div class="footer">
      <p>Hraize, Thanjavur, Tamil Nadu.</p>
      <p>&copy; ${currentYear} Hraize. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

  const userText = `
Dear ${params.firstName},

Thank you for submitting your resume to Hraize HR Analytics!

We have successfully received your details and added your profile to our talent database. Our recruiting team will evaluate your background against our open vacancies and client requirements.

If your profile matches any of our current or future needs, we will reach out to schedule an introductory call.

Best of luck with your search!

The Hraize Recruitment Team
Hraize HR Analytics
  `.trim();

  // Send notifications in parallel
  const [logoAttachment] = await Promise.all([getLogoAttachment()]);
  const logoAttachments = logoAttachment ? [logoAttachment] : [];
  const [hrResult, userResult] = await Promise.all([
    sendEmail({
      from: { email: senderEmail, name: senderName },
      to: [{ email: hrRecipient, name: "Hraize HR Admin" }],
      subject: `New Talent Pool Entry: ${params.firstName} ${params.lastName} - ${params.qualification}`,
      html: hrEmailHtml,
      text: hrText,
      attachments: [
        {
          content: base64Content,
          filename: params.fileName,
          type: params.fileMimeType,
          disposition: "attachment",
        },
        ...logoAttachments,
      ],
    }),
    sendEmail({
      from: { email: senderEmail, name: senderName },
      to: [{ email: params.email, name: `${params.firstName} ${params.lastName}` }],
      subject: `Confirmation: We have received your resume`,
      html: userEmailHtml,
      text: userText,
      attachments: logoAttachments,
    }),
  ]);

  const errors: string[] = [];
  if (!hrResult.success) errors.push(`HR notification failed: ${hrResult.error}`);
  if (!userResult.success) errors.push(`Candidate confirmation failed: ${userResult.error}`);

  return {
    success: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined,
  };
}

export async function sendResetPasswordEmail(email: string, resetLink: string): Promise<{ success: boolean; error?: string }> {
  const senderEmail = process.env.MAILTRAP_SENDER_EMAIL || "lorrybusvanjeep@gmail.com";
  const senderName = process.env.MAILTRAP_SENDER_NAME || "Hraize HR Analytics";
  const currentYear = new Date().getFullYear();

  const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff; }
    .header { text-align: center; margin-bottom: 25px; }
    h2 { color: #0284c7; margin-top: 0; font-size: 20px; }
    .content { padding: 10px 0; font-size: 14px; }
    .btn-container { text-align: center; margin: 25px 0; }
    .btn { background-color: #0284c7; color: #ffffff !important; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px; display: inline-block; }
    .footer { font-size: 12px; color: #94a3b8; text-align: center; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px; }
    .warning { font-size: 11px; color: #ef4444; margin-top: 15px; font-style: italic; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${getLogoHtml()}
      <h2>Reset Your Hraize Admin Password</h2>
    </div>
    <div class="content">
      <p>Hello Admin,</p>
      <p>We received a request to reset your Hraize Admin account password. Click the button below to set a new password:</p>
      <div class="btn-container">
        <a href="${resetLink}" target="_blank" class="btn">Reset Password</a>
      </div>
      <p>Or copy and paste this URL into your browser:</p>
      <p style="word-break: break-all; font-family: monospace; font-size: 12px; color: #475569;">${resetLink}</p>
      <p class="warning">Note: This link is valid for 15 minutes. If you did not make this request, you can safely ignore this email.</p>
    </div>
    <div class="footer">
      <p>Hraize Advisory Services Private Limited.</p>
      <p>&copy; ${currentYear} Hraize. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

  const emailText = `
Hello Admin,

We received a request to reset your Hraize Admin account password. Copy and paste the link below into your browser to reset your password:

${resetLink}

Note: This link is valid for 15 minutes. If you did not make this request, you can safely ignore this email.

Best regards,
Hraize Admin Services
  `.trim();

  const logoAttachment = await getLogoAttachment();
  const logoAttachments = logoAttachment ? [logoAttachment] : [];

  return sendEmail({
    from: { email: senderEmail, name: senderName },
    to: [{ email, name: "Hraize Admin" }],
    subject: "Reset Your Hraize Admin Password",
    html: emailHtml,
    text: emailText,
    attachments: logoAttachments,
  });
}
