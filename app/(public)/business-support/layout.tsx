import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Administration Support",
  description: "Invoice tracking, receivables administration, payment follow-ups and operational reports for growing businesses across India.",
  alternates: {
    canonical: "/business-support",
  },
  openGraph: {
    title: "Business Administration Support | Hraize",
    description: "Invoice tracking, receivables administration, payment follow-ups and operational reports for growing businesses across India.",
    url: "https://hraize.com/business-support",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Business Administration Support from Hraize",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Administration Support | Hraize",
    description: "Invoice tracking, receivables administration, payment follow-ups and operational reports for growing businesses across India.",
    images: ["/logo1.png"],
  },
};

export default function BusinessSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
