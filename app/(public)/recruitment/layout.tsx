import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruitment & Staffing Services",
  description: "Permanent recruitment and contract/temp staffing solutions to help you source, vet, and hire top-tier talent.",
  alternates: {
    canonical: "/recruitment",
  },
  openGraph: {
    title: "Recruitment & Staffing Services | Hraize HR Analytics",
    description: "Permanent recruitment and contract/temp staffing solutions to help you source, vet, and hire top-tier talent.",
    url: "https://hraize.com/recruitment",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Recruitment & Staffing Services — Hraize HR Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruitment & Staffing Services | Hraize HR Analytics",
    description: "Permanent recruitment and contract/temp staffing solutions to help you source, vet, and hire top-tier talent.",
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
