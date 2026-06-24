import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Hraize HR Analytics, our mission, values, and how we help organizations structure their people and scale their business.",
  openGraph: {
    title: "About Us | Hraize HR Analytics",
    description: "Learn more about Hraize HR Analytics, our mission, values, and how we help organizations structure their people and scale their business.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
