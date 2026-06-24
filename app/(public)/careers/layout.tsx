import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Discover career opportunities, work culture, and how you can grow with the Hraize HR Analytics team.",
  openGraph: {
    title: "Careers | Hraize HR Analytics",
    description: "Discover career opportunities, work culture, and how you can grow with the Hraize HR Analytics team.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
