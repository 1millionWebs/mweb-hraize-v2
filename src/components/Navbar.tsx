import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigations = [
    { name: "Home", id: "home" },
    { name: "About us", id: "about" },
    { name: "Careers", id: "careers" },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 w-full bg-[#1E293B] border-b border-slate-700 shadow-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Hraize Logo */}
        <div 
          id="brand-logo"
          className="flex items-center gap-2.5 cursor-pointer group" 
          onClick={() => handleNavClick("home")}
        >
          <img src="/logo.png" alt="Hraize" className="h-10 w-auto" />
          <div className="flex flex-col min-w-0">
            <div className="flex items-baseline space-x-1.5">
              <span className="text-2xl font-black tracking-widest text-white group-hover:text-slate-200 transition truncate">
                Hra<span className="text-[#0EA5E9]">i</span>ze<span className="text-[#0EA5E9]">.</span>
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Centered Navigation */}
        <nav id="desktop-nav" className="hidden md:ml-10 md:flex md:items-center md:gap-x-8">
          {/* Home */}
          <button
            onClick={() => handleNavClick("home")}
            className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
              currentPage === "home" ? "text-[#0EA5E9]" : "text-white hover:text-[#0EA5E9]"
            }`}
          >
            Home
          </button>

          {/* About us */}
          <button
            onClick={() => handleNavClick("about")}
            className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
              currentPage === "about" ? "text-[#0EA5E9]" : "text-white hover:text-[#0EA5E9]"
            }`}
          >
            About us
          </button>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 text-white hover:text-[#0EA5E9] cursor-pointer ${
                ["hr-services", "recruitment", "training"].includes(currentPage) ? "text-[#0EA5E9]" : ""
              }`}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-1/2 z-50 mt-3 w-56 -translate-x-1/2 rounded-xl border border-slate-700 bg-[#1E293B] p-2 shadow-xl ring-1 ring-black/5"
                >
                  <button
                    onClick={() => handleNavClick("hr-services")}
                    className={`block w-full text-left rounded-lg px-4 py-2 text-xs font-semibold text-white hover:bg-[#1E3A8A] hover:text-white transition ${
                      currentPage === "hr-services" ? "bg-[#1E3A8A] text-[#0EA5E9]" : ""
                    }`}
                  >
                    HR Consulting &amp; Systems
                  </button>
                  <button
                    onClick={() => handleNavClick("recruitment")}
                    className={`block w-full text-left rounded-lg px-4 py-2 text-xs font-semibold text-white hover:bg-[#1E3A8A] hover:text-white transition ${
                      currentPage === "recruitment" ? "bg-[#1E3A8A] text-[#0EA5E9]" : ""
                    }`}
                  >
                    Recruitment Services
                  </button>
                  <button
                    onClick={() => handleNavClick("training")}
                    className={`block w-full text-left rounded-lg px-4 py-2 text-xs font-semibold text-white hover:bg-[#1E3A8A] hover:text-white transition ${
                      currentPage === "training" ? "bg-[#1E3A8A] text-[#0EA5E9]" : ""
                    }`}
                  >
                    Training &amp; Development
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Careers */}
          <button
            onClick={() => handleNavClick("careers")}
            className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
              currentPage === "careers" ? "text-[#0EA5E9]" : "text-white hover:text-[#0EA5E9]"
            }`}
          >
            Careers
          </button>
        </nav>

        {/* Right CTA Button ("Get in Touch") */}
        <div id="header-cta" className="hidden md:flex items-center">
          <button
            onClick={() => handleNavClick("contact")}
            className="flex items-center gap-1.5 rounded-full bg-[#0EA5E9] px-5 py-2 text-sm font-bold text-white shadow-md hover:bg-[#0EA5E9]/90 outline-none hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-800 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-700 bg-[#1E293B] px-4 py-4 space-y-2"
          >
            <button
              onClick={() => handleNavClick("home")}
              className="block w-full text-left px-3 py-2 text-base font-semibold text-white hover:bg-slate-800 rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="block w-full text-left px-3 py-2 text-base font-semibold text-white hover:bg-slate-800 rounded-lg"
            >
              About us
            </button>
            
            {/* Services under Mobile */}
            <div className="border-l-2 border-[#0EA5E9] ml-2 pl-3 space-y-1">
              <p className="text-xs font-bold text-gray-400 tracking-widest uppercase py-1">Services</p>
              <button
                onClick={() => handleNavClick("hr-services")}
                className="block w-full text-left px-3 py-1.5 text-sm font-medium text-white hover:text-[#0EA5E9]"
              >
                — HR Consulting &amp; Systems
              </button>
              <button
                onClick={() => handleNavClick("recruitment")}
                className="block w-full text-left px-3 py-1.5 text-sm font-medium text-white hover:text-[#0EA5E9]"
              >
                — Recruitment Services
              </button>
              <button
                onClick={() => handleNavClick("training")}
                className="block w-full text-left px-3 py-1.5 text-sm font-medium text-white hover:text-[#0EA5E9]"
              >
                — Training &amp; Development
              </button>
            </div>

            <button
              onClick={() => handleNavClick("careers")}
              className="block w-full text-left px-3 py-2 text-base font-semibold text-white hover:bg-slate-800 rounded-lg"
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full text-center mt-4 bg-[#0EA5E9] py-2.5 text-base font-bold text-white rounded-lg shadow-md"
            >
              Get in Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
