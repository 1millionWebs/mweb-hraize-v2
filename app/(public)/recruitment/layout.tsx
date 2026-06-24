import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruitment & Staffing Services",
  description: "Permanent recruitment and contract/temp staffing solutions to help you source, vet, and hire top-tier talent.",
  openGraph: {
    title: "Recruitment & Staffing Services | Hraize HR Analytics",
    description: "Permanent recruitment and contract/temp staffing solutions to help you source, vet, and hire top-tier talent.",
  },
};

export default function RecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
