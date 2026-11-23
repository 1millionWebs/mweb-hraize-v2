import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Hraize to discuss your operational requirements, request a consultation, or get a service quote.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Hraize",
    description: "Get in touch with Hraize to discuss your operational requirements, request a consultation, or get a service quote.",
    url: "https://hraize.com/contact",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Contact Hraize — Request a Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Hraize",
    description: "Get in touch with Hraize to discuss your operational requirements, request a consultation, or get a service quote.",
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
