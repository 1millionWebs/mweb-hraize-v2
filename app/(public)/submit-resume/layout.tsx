import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Your Resume",
  description: "Upload and submit your resume/CV to Hraize to be considered for current and future career opportunities.",
  alternates: {
    canonical: "/submit-resume",
  },
  openGraph: {
    title: "Submit Your Resume | Hraize HR Analytics",
    description: "Upload and submit your resume/CV to Hraize to be considered for current and future career opportunities.",
    url: "https://hraize.com/submit-resume",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Submit Your Resume — Hraize HR Analytics Talent Pipeline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Submit Your Resume | Hraize HR Analytics",
    description: "Upload and submit your resume/CV to Hraize to be considered for current and future career opportunities.",
    images: ["/logo1.png"],
  },
};

export default function SubmitResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
