import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Hraize HR Analytics",
  description: "Structure Your People. Scale Your Business.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="min-h-screen bg-[#F8FAFF] flex flex-col justify-between selection:bg-[#0EA5E9] selection:text-white font-sans antialiased">
        <div>
          <Navbar />
          <main id="primary-layout">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
