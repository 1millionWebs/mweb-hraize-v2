import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | HR, Recruitment, Business Support & Web Solutions",
  description: "Explore Hraize's integrated services: HR & Payroll Services, Recruitment Solutions, Business Administration Support, and Website Design & Development.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Hraize",
    description: "Explore Hraize's integrated services: HR & Payroll Services, Recruitment Solutions, Business Administration Support, and Website Design & Development.",
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
    description: "Explore Hraize's integrated services: HR & Payroll Services, Recruitment Solutions, Business Administration Support, and Website Design & Development.",
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
