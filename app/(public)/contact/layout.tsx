import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the HR experts at Hraize. Inquire about services, partnership opportunities, or careers.",
  openGraph: {
    title: "Contact Us | Hraize HR Analytics",
    description: "Get in touch with the HR experts at Hraize. Inquire about services, partnership opportunities, or careers.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
