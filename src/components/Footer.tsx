import React from "react";
import { Instagram, Linkedin, Mail, ShieldCheck, ArrowUp } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
  setContactTab: (tab: "hr" | "recruitment" | "training" | "general") => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, setContactTab }) => {
  
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleServicesNav = (serviceId: string) => {
    setCurrentPage(serviceId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="hraize-footer" className="bg-[#07112E] text-white border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        
        <div id="footer-inner-grid" className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-800">
          
          {/* Slogan and Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 group">
              <img src="/logo.png" alt="Hraize" className="h-8 w-auto" />
              <div className="flex flex-col min-w-0">
                <div className="flex items-baseline space-x-1.5">
                  <span className="text-xl font-black tracking-widest text-white group-hover:text-slate-200 transition truncate">
                    Hra<span className="text-[#0EA5E9]">i</span>ze<span className="text-[#0EA5E9]">.</span>
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-slate-350 leading-relaxed font-bold">
              Real HR expertise. Real analytics. Real outcomes. Focus on real business value: talent retention, performance, and recruitment growth.
            </p>

            <div className="flex gap-3">
              {/* Instagram link icon */}
              <a 
                href="https://instagram.com/hraize.official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg bg-slate-800 hover:bg-[#0EA5E9] text-[#0EA5E9] hover:text-white transition-colors duration-200 flex items-center justify-center cursor-pointer"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>

              {/* LinkedIn icon */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg bg-slate-800 hover:bg-[#1E3A8A] text-slate-300 hover:text-white transition-colors duration-200 flex items-center justify-center cursor-pointer"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#D4A017] uppercase">
              <ShieldCheck className="h-4 w-4" />
              ISO 9001:2026 AUDITED
            </div>
          </div>

          {/* Quick Portals Navigation Columns */}
          <div className="md:col-span-4 md:col-start-6 grid grid-cols-2 gap-4">
            
            {/* Quick Portals: Home, About us, Careers */}
            <div>
              <p className="text-xs font-black text-[#0EA5E9] tracking-widest uppercase mb-4">Quick Portals</p>
              <ul className="space-y-2.5 text-xs font-bold text-slate-300">
                <li>
                  <button 
                    onClick={() => handleNavClick("home")}
                    className="hover:text-white hover:underline transition cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("about")}
                    className="hover:text-white hover:underline transition cursor-pointer"
                  >
                    About us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("careers")}
                    className="hover:text-white hover:underline transition cursor-pointer"
                  >
                    Careers
                  </button>
                </li>
              </ul>
            </div>

            {/* Services Portal Column */}
            <div>
              <p className="text-xs font-black text-[#D4A017] tracking-widest uppercase mb-4">Our Services</p>
              <ul className="space-y-2.5 text-xs font-bold text-slate-300">
                <li>
                  <button 
                    onClick={() => handleServicesNav("hr-services")}
                    className="hover:text-white hover:underline transition cursor-pointer text-left"
                  >
                    HR Consulting &amp; Systems
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleServicesNav("recruitment")}
                    className="hover:text-white hover:underline transition cursor-pointer text-left"
                  >
                    Recruitment Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleServicesNav("training")}
                    className="hover:text-white hover:underline transition cursor-pointer text-left"
                  >
                    Training &amp; Development
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Contact Support Column: info@hraize.com only! */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-black text-white tracking-widest uppercase">Direct Support</p>
            
            <div className="space-y-3 font-medium text-xs text-slate-300">
              <div className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-[#0EA5E9]" />
                <span className="font-extrabold text-white text-xs">info@hraize.com</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed font-bold">
                Reach out with strategic requests. Our business transformation desk typical responds within 2 working hours.
              </p>
            </div>

            <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-800">
              <p className="text-[10px] font-mono text-[#D4A017] font-bold uppercase tracking-wider">Instagram handle:</p>
              <p className="text-xs font-black mt-1 text-white">@hraize.official</p>
            </div>
          </div>

        </div>

        {/* Footer Bottom info */}
        <div className="mt-8 flex flex-col sm:flex-row items-center sm:justify-between gap-4 text-[11px] font-bold text-slate-400">
          <p>© 2026 Hraize Advisory Services Private Limited. All rights reserved.</p>
          
          <div className="flex gap-6">
            <span className="uppercase tracking-widest text-[#0EA5E9] font-black">Digital Workforce System</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
