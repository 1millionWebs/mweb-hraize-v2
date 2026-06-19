import type { Metadata } from "next";
import "./globals.css";

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
      <body suppressHydrationWarning className="min-h-screen bg-[#F8FAFF] selection:bg-[#0EA5E9] selection:text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
