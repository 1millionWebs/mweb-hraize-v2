import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <main id="primary-layout">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
