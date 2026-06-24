import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Your Resume",
  description: "Upload and submit your resume/CV to Hraize to be considered for current and future career opportunities.",
  openGraph: {
    title: "Submit Your Resume | Hraize HR Analytics",
    description: "Upload and submit your resume/CV to Hraize to be considered for current and future career opportunities.",
  },
};

export default function SubmitResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
