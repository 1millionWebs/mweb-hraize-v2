"use client";
import Link from "next/link";
import { Instagram, Linkedin, Mail, ArrowUp, Facebook } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-card text-white border-t border-sky-600/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-sky-600/50">
          <div className="md:col-span-4 space-y-4">
            <Link href="/" prefetch={false} className="flex items-center gap-2 group">
              <span className="bg-white p-1.5 rounded-md">
                <img src="/logo.svg" alt="Hraize" className="h-5 rounded-md w-auto" /></span>
              <div className="flex flex-col min-w-0">
                <div className="flex items-baseline space-x-1.5">
                  <span className="text-xl font-black tracking-widest text-white group-hover:text-sage-100 transition">
                    Hra<span className="text-sky-400">i</span>ze<span className="text-sky-400">.</span>
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-xs text-sage-100/60 leading-relaxed font-semibold">
              Real HR expertise. Real analytics. Real outcomes. Focus on real business value:
              talent retention, performance, and recruitment growth.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/hraize/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg bg-navy-800 hover:bg-sky-600 text-sky-400 hover:text-white transition-colors duration-200 flex items-center justify-center cursor-pointer"
              >
                <Linkedin className="h-4 w-4" />
              </a><a
                href="https://www.facebook.com/share/1Bed1q8bnd/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg bg-navy-800 hover:bg-sky-600 text-sky-400 hover:text-white transition-colors duration-200 flex items-center justify-center cursor-pointer"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/hraize.official?igsh=bWF5bXR0c25kY2hy"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg bg-navy-800 hover:bg-sky-600 text-sky-400 hover:text-white transition-colors duration-200 flex items-center justify-center cursor-pointer"
              >
                <Instagram className="h-4 w-4" />
              </a>

            </div>
          </div>

          <div className="md:col-span-4 md:col-start-6">
            <p className="text-xs font-black text-sky-400 tracking-widest uppercase mb-4">Quick Portals</p>
            <ul className="space-y-2.5 text-xs font-bold text-sage-100/60">
              <li>
                <Link href="/" prefetch={false} className="hover:text-white hover:underline transition">Home</Link>
              </li>
              <li>
                <Link href="/about" prefetch={false} className="hover:text-white hover:underline transition">About us</Link>
              </li>
              <li>
                <Link href="/hr-services" prefetch={false} className="hover:text-white hover:underline transition">HR Services</Link>
              </li>
              <li>
                <Link href="/recruitment" prefetch={false} className="hover:text-white hover:underline transition">Recruitment Services</Link>
              </li>
              <li>
                <Link href="/training" prefetch={false} className="hover:text-white hover:underline transition">Training and Development</Link>
              </li>
              <li>
                <Link href="/careers" prefetch={false} className="hover:text-white hover:underline transition">Careers</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-black text-white tracking-widest uppercase">Direct Support</p>
            <div className="space-y-3 font-medium text-xs text-sage-100/60">
              <div className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-sky-400" />
                <a href="mailto:info@hraize.com" className="font-extrabold text-white text-xs">info@hraize.com</a>
              </div>
              <p className="text-[10px] text-sage-100/40 leading-relaxed font-bold">
                Reach out with your HR and recruitment needs. Our team responds during working hours.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center sm:justify-between gap-4 text-[11px] font-bold text-sage-100/40">
          <p>&copy; 2026 Hraize Advisory Services Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition cursor-pointer"
            >
              Top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
