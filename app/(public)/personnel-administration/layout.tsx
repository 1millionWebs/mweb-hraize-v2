import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR & Personnel Administration | Hraize",
  description: "Employee documentation, personnel data maintenance, attendance records, and complete lifecycle administration.",
  alternates: {
    canonical: "/personnel-administration",
  },
  openGraph: {
    title: "HR & Personnel Administration | Hraize",
    description: "Employee documentation, personnel data maintenance, attendance records, and complete lifecycle administration.",
    url: "https://hraize.com/personnel-administration",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "HR and Personnel Administration from Hraize",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HR & Personnel Administration | Hraize",
    description: "Employee documentation, personnel data maintenance, attendance records, and complete lifecycle administration.",
    images: ["/logo1.png"],
  },
};

export default function PersonnelAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
