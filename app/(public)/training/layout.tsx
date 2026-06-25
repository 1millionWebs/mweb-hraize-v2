import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training & Development Programs",
  description: "Corporate training and development for fresher onboarding, mid-career acceleration, and first-time manager coaching.",
  alternates: {
    canonical: "/training",
  },
  openGraph: {
    title: "Training & Development Programs | Hraize HR Analytics",
    description: "Corporate training and development for fresher onboarding, mid-career acceleration, and first-time manager coaching.",
    url: "https://hraize.com/training",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Training & Development Programs — Hraize HR Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Training & Development Programs | Hraize HR Analytics",
    description: "Corporate training and development for fresher onboarding, mid-career acceleration, and first-time manager coaching.",
    images: ["/logo1.png"],
  },
};

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
