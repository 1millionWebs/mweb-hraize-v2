import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: {
    default: "Hraize HR Analytics | HR Services & Consultancy",
    template: "%s | Hraize HR Analytics",
  },
  description: "Structure Your People. Scale Your Business. HR consultancy, recruitment, training, and strategic advisory services.",
  metadataBase: new URL("https://hraize.com"),
  icons: { icon: "/favicon.ico" },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hraize HR Analytics | HR Services & Consultancy",
    description: "Structure Your People. Scale Your Business. HR consultancy, recruitment, training, and strategic advisory services.",
    url: "https://hraize.com",
    siteName: "Hraize HR Analytics",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Hraize HR Analytics — Structure Your People. Scale Your Business.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hraize HR Analytics | HR Services & Consultancy",
    description: "Structure Your People. Scale Your Business. HR consultancy, recruitment, training, and strategic advisory services.",
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
