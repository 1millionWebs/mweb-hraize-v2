import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design & Development | Hraize",
  description: "Business websites, website redesign, high-converting landing pages and maintenance through our technology partner.",
  alternates: {
    canonical: "/website-solutions",
  },
  openGraph: {
    title: "Website Design & Development | Hraize",
    description: "Business websites, website redesign, high-converting landing pages and maintenance through our technology partner.",
    url: "https://hraize.com/website-solutions",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Website Design & Development from Hraize",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Development | Hraize",
    description: "Business websites, website redesign, high-converting landing pages and maintenance through our technology partner.",
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
