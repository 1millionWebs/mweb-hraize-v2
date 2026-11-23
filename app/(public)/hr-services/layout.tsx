import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR & Payroll Services",
  description: "Payroll processing, PF, ESI, Professional Tax, employee administration, and strategic HR consulting for organisations across India.",
  alternates: {
    canonical: "/hr-services",
  },
  openGraph: {
    title: "HR & Payroll Services | Hraize",
    description: "Payroll processing, PF, ESI, Professional Tax, employee administration, and strategic HR consulting for organisations across India.",
    url: "https://hraize.com/hr-services",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "HR & Payroll Services from Hraize",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HR & Payroll Services | Hraize",
    description: "Payroll processing, PF, ESI, Professional Tax, employee administration, and strategic HR consulting for organisations across India.",
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
