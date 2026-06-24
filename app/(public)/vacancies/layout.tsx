import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Current Job Vacancies",
  description: "Explore current job openings and vacancies at Hraize and our partner organizations.",
  openGraph: {
    title: "Current Job Vacancies | Hraize HR Analytics",
    description: "Explore current job openings and vacancies at Hraize and our partner organizations.",
  },
};

export default function VacanciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
