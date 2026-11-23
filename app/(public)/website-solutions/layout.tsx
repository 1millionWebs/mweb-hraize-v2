import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital IT Services | Hraize",
  description: "Website development & SEO, mobile app development, digital marketing, ERP solutions, and infrastructure & cloud support through our technology partner.",
  alternates: {
    canonical: "/website-solutions",
  },
  openGraph: {
    title: "Digital IT Services | Hraize",
    description: "Website development & SEO, mobile app development, digital marketing, ERP solutions, and infrastructure & cloud support through our technology partner.",
    url: "https://hraize.com/website-solutions",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Digital IT Services from Hraize",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital IT Services | Hraize",
    description: "Website development & SEO, mobile app development, digital marketing, ERP solutions, and infrastructure & cloud support through our technology partner.",
    images: ["/logo1.png"],
  },
};

export default function WebsiteSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
