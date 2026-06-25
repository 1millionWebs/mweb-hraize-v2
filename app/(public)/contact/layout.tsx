import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the HR experts at Hraize. Inquire about services, partnership opportunities, or careers.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Hraize HR Analytics",
    description: "Get in touch with the HR experts at Hraize. Inquire about services, partnership opportunities, or careers.",
    url: "https://hraize.com/contact",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Contact Hraize HR Analytics — Get in Touch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Hraize HR Analytics",
    description: "Get in touch with the HR experts at Hraize. Inquire about services, partnership opportunities, or careers.",
    images: ["/logo1.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
