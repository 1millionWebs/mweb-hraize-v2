"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

const serviceCategories = [
  {
    title: "HR Services",
    href: "/hr-services",
    items: [
      { name: "HR Subscription Support", href: "/hr-services#support" },
      { name: "HR Consulting & Systems Setup", href: "/hr-services#consulting" },
      { name: "HR Audit", href: "/hr-services#audit" },
      { name: "People Analytics & Dashboard", href: "/hr-services#analytics" },
      { name: "HR Policy and Process Documentation", href: "/hr-services#policies" },
      { name: "Strategic Workforce Planning", href: "/hr-services#workforce" },
    ],
  },
  {
    title: "Recruitment Services",
    href: "/recruitment",
    items: [
      { name: "Permanent Recruitment", href: "/recruitment#permanent" },
      { name: "Contract & Temp Staffing", href: "/recruitment#contract" },
    ],
  },
  {
    title: "Training and Development",
    href: "/training",
    items: [
      { name: "Fresher to professional", href: "/training#fresher" },
      { name: "Mid Career Acceleration", href: "/training#mid-career" },
      { name: "First-Time Managers", href: "/training#manager" },
    ],
  },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY < 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setCareersOpen(false);
  };

  const isActive = (path: string) => pathname === path;
  const isServiceActive = pathname === "/hr-services" || pathname === "/recruitment" || pathname === "/training";
  const isCareerActive = pathname === "/careers" || pathname === "/submit-resume" || pathname === "/vacancies";

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-500 shadow-lg ${
      atTop
        ? "bg-cream-100/80 backdrop-blur-md border-transparent"
        : "bg-navy-900 border-navy-800"
    }`}>
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onClick={closeMenus}
        >
          <img src="/logo.png" alt="Hraize" className="h-10 w-auto" />
          <div className="flex flex-col min-w-0">
            <div className="flex items-baseline space-x-1.5">
              <span className={`text-2xl font-black tracking-widest transition-all duration-300 truncate ${
                atTop ? "text-navy-900 group-hover:text-navy-900/70" : "text-white group-hover:text-sage-100"
              }`}>
                Hra<span className="text-sky-600">i</span>ze<span className="text-sky-600">.</span>
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:ml-10 md:flex md:items-center md:gap-x-8">
          <Link
            href="/"
            onClick={closeMenus}
            className={`text-sm font-semibold transition-colors duration-200 ${
              isActive("/") ? "text-sky-600" : atTop ? "text-navy-900/80 hover:text-sky-600" : "text-sage-100/80 hover:text-white"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeMenus}
            className={`text-sm font-semibold transition-colors duration-200 ${
              isActive("/about") ? "text-sky-600" : atTop ? "text-navy-900/80 hover:text-sky-600" : "text-sage-100/80 hover:text-white"
            }`}
          >
            About us
          </Link>

          <div
            className="relative"
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                isServiceActive ? "text-sky-600" : atTop ? "text-navy-900/80 hover:text-sky-600" : "text-sage-100/80 hover:text-white"
              }`}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 z-50 top-full pt-3 -translate-x-1/2"
                >
                  <div className="w-[640px] md:w-[760px] lg:w-[840px] rounded-2xl border border-navy-700 bg-navy-900 p-6 shadow-2xl">
                    <div className="grid grid-cols-3 gap-8">
                      {serviceCategories.map((cat, idx) => (
                        <div key={idx} className="space-y-4 text-left">
                          <Link
                            href={cat.href}
                            onClick={closeMenus}
                            className="block text-sm font-extrabold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
                          >
                            {cat.title}
                          </Link>
                          <ul className="space-y-3">
                            {cat.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link
                                  href={item.href}
                                  onClick={closeMenus}
                                  className="flex items-center text-xs font-semibold text-sage-100/60 hover:text-white transition-all duration-200 hover:translate-x-1"
                                >
                                  <span className="h-2 w-2 bg-copper-400 rotate-45 shrink-0 mr-2.5" />
                                  <span>{item.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseLeave={() => setCareersOpen(false)}
          >
            <button
              onClick={() => setCareersOpen(!careersOpen)}
              onMouseEnter={() => setCareersOpen(true)}
              className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                isCareerActive ? "text-sky-600" : atTop ? "text-navy-900/80 hover:text-sky-600" : "text-sage-100/80 hover:text-white"
              }`}
            >
              Careers
              <ChevronDown className={`h-4 w-4 transition-transform ${careersOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {careersOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 z-50 top-full pt-3 -translate-x-1/2"
                >
                  <div className="w-[260px] rounded-2xl border border-navy-700 bg-navy-900 p-6 shadow-2xl">
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/submit-resume"
                          onClick={closeMenus}
                          className="flex items-center text-xs font-semibold text-sage-100/60 hover:text-white transition-all duration-200 hover:translate-x-1"
                        >
                          <span className="h-2 w-2 bg-copper-400 rotate-45 shrink-0 mr-2.5" />
                          <span>Submit your resume</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/vacancies"
                          onClick={closeMenus}
                          className="flex items-center text-xs font-semibold text-sage-100/60 hover:text-white transition-all duration-200 hover:translate-x-1"
                        >
                          <span className="h-2 w-2 bg-copper-400 rotate-45 shrink-0 mr-2.5" />
                          <span>Current Vacancies</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="/contact?tab=general"
            onClick={closeMenus}
            className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-5 py-2 text-sm font-bold text-white shadow-md hover:bg-sky-700 transition-all duration-200"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`inline-flex items-center justify-center rounded-md p-2 transition-colors duration-300 focus:outline-none ${
              atTop ? "text-navy-900/70 hover:bg-cream-50" : "text-sage-100/70 hover:bg-navy-800"
            }`}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t px-4 py-4 space-y-2 transition-colors duration-300 ${
              atTop ? "border-sky-600/10 bg-cream-100" : "border-navy-800 bg-navy-900"
            }`}
          >
            <Link
              href="/"
              onClick={closeMenus}
              className={`block w-full px-3 py-2 text-base font-semibold rounded-lg transition-colors duration-300 ${
                atTop ? "text-navy-900 hover:bg-cream-50" : "text-sage-100 hover:bg-navy-800"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenus}
              className={`block w-full px-3 py-2 text-base font-semibold rounded-lg transition-colors duration-300 ${
                atTop ? "text-navy-900 hover:bg-cream-50" : "text-sage-100 hover:bg-navy-800"
              }`}
            >
              About us
            </Link>
            
            <div className="border-l-2 border-sky-600 ml-2 pl-3 space-y-3">
              <p className={`text-xs font-extrabold tracking-widest uppercase py-1 transition-colors duration-300 ${
                atTop ? "text-navy-900/50" : "text-sage-100/50"
              }`}>Services</p>
              
              {serviceCategories.map((cat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <Link
                    href={cat.href}
                    onClick={closeMenus}
                    className="block w-full px-3 py-0.5 text-sm font-bold text-sky-600 hover:text-sky-500"
                  >
                    {cat.title}
                  </Link>
                  <div className="pl-4 space-y-1.5">
                    {cat.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={item.href}
                        onClick={closeMenus}
                        className={`flex items-center w-full px-3 py-0.5 text-xs font-medium transition-colors duration-300 ${
                          atTop ? "text-navy-900/60 hover:text-navy-900" : "text-sage-100/60 hover:text-white"
                        }`}
                      >
                        <span className="h-2 w-2 rounded-full border border-copper-400 shrink-0 mr-2" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-sky-600 ml-2 pl-3 space-y-3">
              <p className={`text-xs font-extrabold tracking-widest uppercase py-1 transition-colors duration-300 ${
                atTop ? "text-navy-900/50" : "text-sage-100/50"
              }`}>Careers</p>
              <div className="space-y-1.5">
                <Link
                  href="/submit-resume"
                  onClick={closeMenus}
                  className={`flex items-center w-full px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors duration-300 text-sky-600 hover:text-sky-500 ${
                    atTop ? "" : "hover:bg-navy-800"
                  }`}
                >
                  <span className="h-2 w-2 bg-copper-400 rotate-45 shrink-0 mr-2" />
                  Submit your resume
                </Link>
                <Link
                  href="/vacancies"
                  onClick={closeMenus}
                  className={`flex items-center w-full px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors duration-300 text-sky-600 hover:text-sky-500 ${
                    atTop ? "" : "hover:bg-navy-800"
                  }`}
                >
                  <span className="h-2 w-2 bg-copper-400 rotate-45 shrink-0 mr-2" />
                  Current Vacancies
                </Link>
              </div>
            </div>
            <Link
              href="/contact?tab=general"
              onClick={closeMenus}
              className="block w-full text-center mt-4 bg-sky-600 py-2.5 text-base font-bold text-white rounded-lg shadow-md hover:bg-sky-700"
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
