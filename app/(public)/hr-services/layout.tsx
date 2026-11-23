import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR, Payroll Services & Administration",
  description: "Monthly payroll processing, PF, ESI, Professional Tax filing support, employee lifecycle administration, and statutory records maintenance across India.",
  alternates: {
    canonical: "/hr-services",
  },
  openGraph: {
    title: "HR, Payroll Services & Administration | Hraize",
    description: "Monthly payroll processing, PF, ESI, Professional Tax filing support, employee lifecycle administration, and statutory records maintenance across India.",
    url: "https://hraize.com/hr-services",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "HR, Payroll Services & Administration from Hraize",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HR, Payroll Services & Administration | Hraize",
    description: "Monthly payroll processing, PF, ESI, Professional Tax filing support, employee lifecycle administration, and statutory records maintenance across India.",
    images: ["/logo1.png"],
  },
};

export default function HrServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
