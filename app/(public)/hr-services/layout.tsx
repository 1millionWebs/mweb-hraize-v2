import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Services",
  description: "Comprehensive HR support subscription, consulting, policy documentation, audit, and people analytics & dashboard setups.",
  alternates: {
    canonical: "/hr-services",
  },
  openGraph: {
    title: "HR Services | Hraize HR Analytics",
    description: "Comprehensive HR support subscription, consulting, policy documentation, audit, and people analytics & dashboard setups.",
    url: "https://hraize.com/hr-services",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "HR Services from Hraize HR Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Services | Hraize HR Analytics",
    description: "Comprehensive HR support subscription, consulting, policy documentation, audit, and people analytics & dashboard setups.",
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
