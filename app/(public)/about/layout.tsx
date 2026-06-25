import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Hraize HR Analytics, our mission, values, and how we help organizations structure their people and scale their business.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Hraize HR Analytics",
    description: "Learn more about Hraize HR Analytics, our mission, values, and how we help organizations structure their people and scale their business.",
    url: "https://hraize.com/about",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "About Hraize HR Analytics — Structure Your People. Scale Your Business.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Hraize HR Analytics",
    description: "Learn more about Hraize HR Analytics, our mission, values, and how we help organizations structure their people and scale their business.",
    images: ["/logo1.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
