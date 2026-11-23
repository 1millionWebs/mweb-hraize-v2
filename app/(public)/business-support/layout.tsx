import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoice & Receivables Administration | Hraize",
  description: "Sales invoice register maintenance, due-date tracking, customer reminders, overdue reports, and payment follow-ups.",
  alternates: {
    canonical: "/business-support",
  },
  openGraph: {
    title: "Invoice & Receivables Administration | Hraize",
    description: "Sales invoice register maintenance, due-date tracking, customer reminders, overdue reports, and payment follow-ups.",
    url: "https://hraize.com/business-support",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Invoice & Receivables Administration from Hraize",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice & Receivables Administration | Hraize",
    description: "Sales invoice register maintenance, due-date tracking, customer reminders, overdue reports, and payment follow-ups.",
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
