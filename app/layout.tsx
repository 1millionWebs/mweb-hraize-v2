import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: {
    default: "Hraize | HR Solutions, Business Support & Digital Services",
    template: "%s | Hraize",
  },
  description: "The right support to keep business moving. HR & payroll solutions, recruitment, business administration support, and website solutions across India.",
  metadataBase: new URL("https://hraize.com"),
  icons: { icon: "/favicon.ico" },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hraize | HR Solutions, Business Support & Digital Services",
    description: "The right support to keep business moving. HR & payroll solutions, recruitment, business administration support, and website solutions across India.",
    url: "https://hraize.com",
    siteName: "Hraize",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Hraize — The right support to keep business moving.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hraize | HR Solutions, Business Support & Digital Services",
    description: "The right support to keep business moving. HR & payroll solutions, recruitment, business administration support, and website solutions across India.",
    images: ["/logo1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-DQ1SSF86XY" />
      <GoogleAnalytics gaId="G-DQ1SSF86XY" />
      <body suppressHydrationWarning className="min-h-screen bg-cream-100 font-sans antialiased">
        {children}
      </body>
      {/* <GoogleTagManager gtmId="G-DQ1SSF86XY" /> */}
      {/* <GoogleAnalytics gaId="G-MRQPNLMK59" /> */}
    </html>
  );
}
