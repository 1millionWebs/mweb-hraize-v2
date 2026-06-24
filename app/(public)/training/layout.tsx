import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training & Development Programs",
  description: "Corporate training and development for fresher onboarding, mid-career acceleration, and first-time manager coaching.",
  openGraph: {
    title: "Training & Development Programs | Hraize HR Analytics",
    description: "Corporate training and development for fresher onboarding, mid-career acceleration, and first-time manager coaching.",
  },
};

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
