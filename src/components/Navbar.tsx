"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, ArrowUpRight, Mail } from "lucide-react";

interface ServiceItem {
  name: string;
  href: string;
}

interface ServiceCategory {
  title: string;
  href: string;
  initialLimit?: number;
  items: ServiceItem[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "HR, Payroll & Admin",
    href: "/hr-services",
    initialLimit: 6,
    items: [
      { name: "Monthly payroll preparation and processing", href: "/hr-services#payroll" },
      { name: "Salary statements and payslip coordination", href: "/hr-services#payslips" },
      { name: "Employee joining and exit administration", href: "/hr-services#joining-exit" },
      { name: "Provident Fund (PF) administration and EPFO filing support", href: "/hr-services#pf" },
      { name: "Employee State Insurance (ESI) administration and filing support", href: "/hr-services#esi-pt" },
      { name: "Professional Tax (PT) calculations and filing support", href: "/hr-services#pt" },
      { name: "Employee data and statutory record maintenance", href: "/hr-services#statutory-records" },
      { name: "Employee documentation", href: "/hr-services#documentation" },
      { name: "Personnel data maintenance", href: "/hr-services#records" },
      { name: "Attendance and leave records coordination", href: "/hr-services#attendance" },
      { name: "Employee lifecycle administration", href: "/hr-services#lifecycle" },
      { name: "HR reports, Compliance support", href: "/hr-services#compliance" },
    ],
  },
  {
    title: "Recruitment & Staffing",
    href: "/recruitment",
    items: [
      { name: "Permanent Recruitment", href: "/recruitment#permanent" },
      { name: "Contract & Temp Staffing", href: "/recruitment#contract" },
      { name: "Sourcing & Screening", href: "/recruitment#sourcing" },
      { name: "Interview Coordination", href: "/recruitment#interview" },
    ],
  },
  {
    title: "Invoice & Receivables",
    href: "/business-support",
    items: [
      { name: "Sales Invoice Register", href: "/business-support#sales-register" },
      { name: "Due-Date Tracking", href: "/business-support#due-dates" },
      { name: "Customer Payment Reminders", href: "/business-support#payment-reminders" },
      { name: "Outstanding Follow-ups", href: "/business-support#follow-ups" },
      { name: "Payment Status Updates", href: "/business-support#status-updates" },
      { name: "Periodic Receivables Reports", href: "/business-support#overdue-reports" },
      { name: "Accounts Team Coordination", href: "/business-support#accounts-coordination" },
    ],
  },
  {
    title: "Digital IT Services",
    href: "/website-solutions",
    items: [
      { name: "Website development & SEO", href: "/website-solutions#web-seo" },
      { name: "Mobile app development", href: "/website-solutions#mobile-apps" },
      { name: "Digital Marketing", href: "/website-solutions#digital-marketing" },
      { name: "ERP solutions", href: "/website-solutions#erp-solutions" },
      { name: "Infrastructure & Cloud support", href: "/website-solutions#cloud-infra" },
    ],
  },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Flag to hide/show Careers menu & pages (static mode: hidden for now, set to true to restore)
  const SHOW_CAREERS_MENU = false;

  const [servicesOpen, setServicesOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  // Mobile navigation expansion state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCareersOpen, setMobileCareersOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  const toggleCategory = (title: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleMobileCategory = (title: string) => {
    setMobileExpandedCat((prev) => (prev === title ? null : title));
  };

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setCareersOpen(false);
    setMobileServicesOpen(false);
    setMobileCareersOpen(false);
    setMobileExpandedCat(null);
    setExpandedCategories({});
  };

  const handleNavAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    closeMenus();
    if (href.includes("#")) {
      const [targetPath, hash] = href.split("#");
      if (pathname === targetPath || (targetPath === "" && pathname.startsWith(targetPath))) {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState(null, "", `#${hash}`);
        }
      }
    }
  };

  const isActive = (path: string) => pathname === path;
  const isServiceActive = pathname === "/services" || pathname === "/hr-services" || pathname === "/recruitment" || pathname === "/business-support" || pathname === "/website-solutions";
  const isCareerActive = pathname === "/careers" || pathname === "/submit-resume" || pathname === "/vacancies";

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg bg-cream-100/80 backdrop-blur-md">
      <div className="flex flex-col items-center gap-1 md:flex-row md:items-center md:justify-between px-4 sm:px-6 lg:px-8 py-1.5 border-b border-sky-600/50 bg-navy-card">
        <div className="flex items-center gap-4 mx-auto max-w-7xl w-full">
          <div className="flex items-center gap-3">
            <a href="mailto:info@hraize.com" className="flex items-center gap-1.5 text-[10px] font-bold text-white hover:text-white transition-colors">
              <Mail className="h-3 w-3" />
              info@hraize.com
            </a>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <a href="https://www.linkedin.com/company/hraize/" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md text-white hover:text-white hover:bg-white/10 transition-colors">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="https://www.facebook.com/share/1Bed1q8bnd/" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md text-white hover:text-white hover:bg-white/10 transition-colors">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://www.instagram.com/hraize.official?igsh=bWF5bXR0c25kY2hy" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md text-white hover:text-white hover:bg-white/10 transition-colors">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.909-1.382-.164-.42-.361-1.065-.414-2.235-.062-1.274-.073-1.649-.073-4.859s.012-3.586.073-4.859c.053-1.171.25-1.816.414-2.236.219-.569.489-.96.909-1.379.419-.421.81-.69 1.379-.909.42-.164 1.065-.36 2.236-.413 1.273-.06 1.648-.073 4.859-.073zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link
          href="/"
          prefetch={false}
          className="flex items-center gap-2.5 group"
          onClick={closeMenus}
        >
          <Image src="/logo.svg" alt="Hraize" width={24} height={24} className="h-6 rounded-md w-auto" />
          <div className="flex flex-col min-w-0">
            <div className="flex items-baseline space-x-1.5">
              <span className="text-2xl font-black tracking-widest truncate text-navy-900 group-hover:text-navy-900/70 transition-all duration-300">
                Hra<span className="text-sky-600">i</span>ze<span className="text-sky-600">.</span>
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:ml-10 md:flex md:items-center md:gap-x-8">
          <Link
            href="/"
            prefetch={false}
            onClick={closeMenus}
            className={`text-sm font-semibold transition-colors duration-200 ${isActive("/") ? "text-sky-600" : "text-navy-900/80 hover:text-sky-600"
              }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            prefetch={false}
            onClick={closeMenus}
            className={`text-sm font-semibold transition-colors duration-200 ${isActive("/about") ? "text-sky-600" : "text-navy-900/80 hover:text-sky-600"
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
              className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 cursor-pointer ${isServiceActive ? "text-sky-600" : "text-navy-900/80 hover:text-sky-600"
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
                  <div className="w-[880px] md:w-[980px] lg:w-[1060px] rounded-2xl border border-sky-200/50 bg-cream-50 p-6 shadow-2xl">
                    <div className="grid grid-cols-4 gap-5 lg:gap-6 items-start">
                      {serviceCategories.map((cat, idx) => {
                        const isExpanded = !!expandedCategories[cat.title];
                        const hasMore = Boolean(cat.initialLimit && cat.items.length > cat.initialLimit);
                        const visibleItems = hasMore && !isExpanded && cat.initialLimit
                          ? cat.items.slice(0, cat.initialLimit)
                          : cat.items;
                        const remainingCount = cat.initialLimit ? cat.items.length - cat.initialLimit : 0;

                        return (
                          <div key={idx} className="space-y-3.5 text-left">
                            <Link
                              href={cat.href}
                              prefetch={false}
                              onClick={closeMenus}
                              className="block text-xs font-black uppercase tracking-wider text-sky-600 hover:text-sky-700 transition-colors"
                            >
                              {cat.title}
                            </Link>
                            <ul className="space-y-2.5">
                              {visibleItems.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link
                                    href={item.href}
                                    prefetch={false}
                                    onClick={(e) => handleNavAnchorClick(e, item.href)}
                                    className="flex items-start text-xs font-semibold text-navy-900/70 hover:text-navy-900 transition-all duration-200 hover:translate-x-1 leading-snug"
                                  >
                                    <span className="h-1.5 w-1.5 bg-copper-400 rotate-45 shrink-0 mr-2 mt-1.5" />
                                    <span>{item.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>

                            {hasMore && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  toggleCategory(cat.title);
                                }}
                                className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-600 hover:text-sky-700 transition-colors pt-1 cursor-pointer group"
                              >
                                <span>{isExpanded ? "Show less" : `+ Show more (${remainingCount})`}</span>
                                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 pt-4 border-t border-sky-600/15 flex items-center justify-between">
                      <span className="text-xs font-semibold text-navy-900/60">
                        Integrated HR, hiring, operational support, and modern web solutions
                      </span>
                      <Link
                        href="/services"
                        prefetch={false}
                        onClick={closeMenus}
                        className="inline-flex items-center gap-1.5 text-xs font-black text-sky-600 hover:text-sky-700 transition-colors uppercase tracking-wider"
                      >
                        View All Services
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* FUTURE UPGRADE: Careers Dropdown Menu (Hidden for now in static mode) */}
          {SHOW_CAREERS_MENU && (
            <div
              className="relative"
              onMouseLeave={() => setCareersOpen(false)}
            >
              <button
                onClick={() => setCareersOpen(!careersOpen)}
                onMouseEnter={() => setCareersOpen(true)}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 cursor-pointer ${isCareerActive ? "text-sky-600" : "text-navy-900/80 hover:text-sky-600"
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
                    <div className="w-[260px] rounded-2xl border border-sky-200/50 bg-cream-50 p-6 shadow-2xl">
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/submit-resume"
                            prefetch={false}
                            onClick={closeMenus}
                            className="flex items-center text-xs font-semibold text-navy-900/60 hover:text-navy-900 transition-all duration-200 hover:translate-x-1"
                          >
                            <span className="h-2 w-2 bg-copper-400 rotate-45 shrink-0 mr-2.5" />
                            <span>Submit your resume</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/vacancies"
                            prefetch={false}
                            onClick={closeMenus}
                            className="flex items-center text-xs font-semibold text-navy-900/60 hover:text-navy-900 transition-all duration-200 hover:translate-x-1"
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
          )}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="/contact?tab=consultation"
            prefetch={false}
            onClick={closeMenus}
            className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-5 py-2 text-sm font-bold text-white shadow-md hover:bg-sky-700 transition-all duration-200"
          >
            Request a Consultation
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-navy-900/70 hover:bg-cream-50 transition-colors duration-300 focus:outline-none"
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-sky-600/20 bg-cream-100/98 backdrop-blur-lg px-4 pt-3 pb-6 max-h-[calc(100vh-4.5rem)] overflow-y-auto shadow-2xl space-y-2.5"
          >
            {/* Top Level Nav Items */}
            <div className="space-y-1.5">
              {/* Home */}
              <Link
                href="/"
                prefetch={false}
                onClick={closeMenus}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm transition-all ${
                  isActive("/")
                    ? "bg-sky-600/10 text-sky-600 font-black"
                    : "text-navy-900 font-bold hover:bg-white/80"
                }`}
              >
                <span>Home</span>
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                prefetch={false}
                onClick={closeMenus}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm transition-all ${
                  isActive("/about")
                    ? "bg-sky-600/10 text-sky-600 font-black"
                    : "text-navy-900 font-bold hover:bg-white/80"
                }`}
              >
                <span>About us</span>
              </Link>

              {/* Services - Modern Simple View with Expandable Arrow */}
              <div className="rounded-xl overflow-hidden transition-colors">
                <div
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl cursor-pointer transition-all ${
                    isServiceActive || mobileServicesOpen
                      ? "bg-white shadow-xs text-sky-600 font-black"
                      : "text-navy-900 hover:bg-white/80 font-bold"
                  }`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span className="text-sm">Services</span>
                  <div className="p-1 rounded-lg text-navy-900/50 hover:text-sky-600">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180 text-sky-600" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Elaborated Services Sub-Menu */}
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-1.5 mb-2 ml-2 pl-3 pr-1 border-l-2 border-sky-600/30 space-y-1.5">
                        {/* Quick View All Services Link */}
                        <div className="flex items-center justify-between py-1.5 px-3">
                          <span className="text-[10px] font-black uppercase tracking-wider text-navy-900/50">
                            Our 4 Pillars
                          </span>
                          <Link
                            href="/services"
                            prefetch={false}
                            onClick={closeMenus}
                            className="inline-flex items-center gap-1 text-[11px] font-black text-sky-600 hover:text-sky-700"
                          >
                            <span>All Services</span>
                            <ArrowUpRight className="h-3 w-3" />
                          </Link>
                        </div>

                        {/* 4 Service Pillars Accordion */}
                        {serviceCategories.map((cat, idx) => {
                          const isCatOpen = mobileExpandedCat === cat.title;

                          return (
                            <div
                              key={idx}
                              className={`rounded-xl border transition-all ${
                                isCatOpen
                                  ? "border-sky-600/30 bg-white shadow-xs"
                                  : "border-transparent bg-white/60 hover:bg-white"
                              }`}
                            >
                              <div
                                className="flex items-center justify-between px-3.5 py-2.5 cursor-pointer"
                                onClick={() => toggleMobileCategory(cat.title)}
                              >
                                <span className={`text-xs font-bold ${isCatOpen ? "text-sky-600" : "text-navy-900"}`}>
                                  {cat.title}
                                </span>
                                <div className="p-0.5">
                                  <ChevronDown
                                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                      isCatOpen ? "rotate-180 text-sky-600" : "text-navy-900/40"
                                    }`}
                                  />
                                </div>
                              </div>

                              <AnimatePresence initial={false}>
                                {isCatOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.22, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-3.5 pb-3 pt-1 border-t border-navy-900/5 space-y-1.5">
                                      {/* Main Pillar Overview Link */}
                                      <Link
                                        href={cat.href}
                                        prefetch={false}
                                        onClick={closeMenus}
                                        className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-sky-600 py-1"
                                      >
                                        <span>Explore {cat.title}</span>
                                        <ArrowUpRight className="h-3 w-3" />
                                      </Link>

                                      {/* Pillar Capability Links */}
                                      <ul className="space-y-1.5 pt-1">
                                        {cat.items.map((item, itemIdx) => (
                                          <li key={itemIdx}>
                                            <Link
                                              href={item.href}
                                              prefetch={false}
                                              onClick={(e) => handleNavAnchorClick(e, item.href)}
                                              className="flex items-start text-xs font-medium text-navy-900/70 hover:text-navy-900 py-1 leading-snug"
                                            >
                                              <span className="h-1.5 w-1.5 rounded-full bg-copper-400 shrink-0 mr-2 mt-1.5" />
                                              <span>{item.name}</span>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* FUTURE UPGRADE: Careers Mobile Menu (Hidden for now in static mode) */}
              {SHOW_CAREERS_MENU && (
                <div className="rounded-xl overflow-hidden transition-colors">
                  <div
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl cursor-pointer transition-all ${
                      isCareerActive || mobileCareersOpen
                        ? "bg-white shadow-xs text-sky-600 font-black"
                        : "text-navy-900 hover:bg-white/80 font-bold"
                    }`}
                    onClick={() => setMobileCareersOpen(!mobileCareersOpen)}
                  >
                    <span className="text-sm">Careers</span>
                    <div className="p-1 rounded-lg text-navy-900/50 hover:text-sky-600">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          mobileCareersOpen ? "rotate-180 text-sky-600" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Elaborated Careers Sub-Menu */}
                  <AnimatePresence initial={false}>
                    {mobileCareersOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-1.5 mb-2 ml-2 pl-3 pr-1 border-l-2 border-sky-600/30 space-y-1">
                          <Link
                            href="/submit-resume"
                            prefetch={false}
                            onClick={closeMenus}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/60 hover:bg-white text-xs font-bold text-navy-900 transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 bg-copper-400 rotate-45 shrink-0" />
                              Submit your resume
                            </span>
                            <ArrowUpRight className="h-3 w-3 text-sky-600" />
                          </Link>
                          <Link
                            href="/vacancies"
                            prefetch={false}
                            onClick={closeMenus}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/60 hover:bg-white text-xs font-bold text-navy-900 transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 bg-copper-400 rotate-45 shrink-0" />
                              Current Vacancies
                            </span>
                            <ArrowUpRight className="h-3 w-3 text-sky-600" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Mobile Bottom Consultation CTA */}
            <div className="pt-2">
              <Link
                href="/contact?tab=consultation"
                prefetch={false}
                onClick={closeMenus}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-black text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-md shadow-sky-600/20 transition-all cursor-pointer"
              >
                <span>Request a Consultation</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
