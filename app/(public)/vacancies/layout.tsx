import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Current Job Vacancies",
  description: "Explore current job openings and vacancies at Hraize and our partner organizations.",
  alternates: {
    canonical: "/vacancies",
  },
  openGraph: {
    title: "Current Job Vacancies | Hraize HR Analytics",
    description: "Explore current job openings and vacancies at Hraize and our partner organizations.",
    url: "https://hraize.com/vacancies",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Current Job Vacancies — Hraize HR Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Current Job Vacancies | Hraize HR Analytics",
    description: "Explore current job openings and vacancies at Hraize and our partner organizations.",
    images: ["/logo1.png"],
  },
};

export default function VacanciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
