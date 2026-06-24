import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Services",
  description: "Comprehensive HR support subscription, consulting, policy documentation, audit, and people analytics & dashboard setups.",
  openGraph: {
    title: "HR Services | Hraize HR Analytics",
    description: "Comprehensive HR support subscription, consulting, policy documentation, audit, and people analytics & dashboard setups.",
  },
};

export default function HrServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
