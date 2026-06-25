import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Discover career opportunities, work culture, and how you can grow with the Hraize HR Analytics team.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers | Hraize HR Analytics",
    description: "Discover career opportunities, work culture, and how you can grow with the Hraize HR Analytics team.",
    url: "https://hraize.com/careers",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Careers at Hraize HR Analytics — Join Our Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Hraize HR Analytics",
    description: "Discover career opportunities, work culture, and how you can grow with the Hraize HR Analytics team.",
    images: ["/logo1.png"],
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
