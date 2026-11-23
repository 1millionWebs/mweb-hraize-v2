import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruitment & Staffing Services",
  description: "Permanent and contract hiring, sourcing, screening, and interview coordination with a 60-day replacement guarantee.",
  alternates: {
    canonical: "/recruitment",
  },
  openGraph: {
    title: "Recruitment & Staffing Services | Hraize",
    description: "Permanent and contract hiring, sourcing, screening, and interview coordination with a 60-day replacement guarantee.",
    url: "https://hraize.com/recruitment",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Recruitment & Staffing Services — Hraize",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruitment & Staffing Services | Hraize",
    description: "Permanent and contract hiring, sourcing, screening, and interview coordination with a 60-day replacement guarantee.",
    images: ["/logo1.png"],
  },
};

export default function RecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
