import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: {
    default: "Hraize - Business operations and Support service",
    template: "%s | Hraize",
  },
  description: "Hraize provides practical HR, recruitment, business administration and website services to help organisations operate smoothly and scale effectively.",
  metadataBase: new URL("https://hraize.com"),
  icons: { icon: "/favicon.ico" },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hraize - Business operations and Support service",
    description: "Hraize provides practical HR, recruitment, business administration and website services to help organisations operate smoothly and scale effectively.",
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
    title: "Hraize - Business operations and Support service",
    description: "Hraize provides practical HR, recruitment, business administration and website services to help organisations operate smoothly and scale effectively.",
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
