import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | HR, Recruitment, Business Support & Digital IT",
  description: "Explore Hraize's integrated services: HR, Payroll & Admin, Recruitment Solutions, Business Administration Support, and Digital IT Services.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Hraize",
    description: "Explore Hraize's integrated services: HR, Payroll & Admin, Recruitment Solutions, Business Administration Support, and Digital IT Services.",
    url: "https://hraize.com/services",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Hraize Services Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Hraize",
    description: "Explore Hraize's integrated services: HR, Payroll & Admin, Recruitment Solutions, Business Administration Support, and Digital IT Services.",
    images: ["/logo1.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
