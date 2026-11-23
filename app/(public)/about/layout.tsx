import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Hraize, our mission, values, and how we provide practical business support and professional service delivery.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Hraize",
    description: "Learn more about Hraize, our mission, values, and how we provide practical business support and professional service delivery.",
    url: "https://hraize.com/about",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "About Hraize — Supporting Your People. Simplifying Your Business.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Hraize",
    description: "Learn more about Hraize, our mission, values, and how we provide practical business support and professional service delivery.",
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
