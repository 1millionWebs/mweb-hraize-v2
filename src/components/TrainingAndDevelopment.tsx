import React, { useEffect } from "react";
import { motion } from "motion/react";
import { 
  TrendingUp, Check
} from "lucide-react";
import { GlassCard } from "./UIElements";

interface TrainingAndDevelopmentProps {
  onLetsFindPath: () => void;
}

export const TrainingAndDevelopment: React.FC<TrainingAndDevelopmentProps> = ({
  onLetsFindPath,
}) => {

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    };

    const timer = setTimeout(scrollToHash, 250);

    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  const pathways = [
    {
      id: "fresher",
      title: "Fresher to professional",
      subtitle: "Fresh graduates entering corporate for the first time. You have a degree. You need the positioning to land the job.",
      timeline: "Timeline: 4 Weeks",
      features: [
        "Professional resume (rewritten from scratch)",
        "Optimised LinkedIn, Naukri profile (recruiter-ready)",
        "Interview coaching & mock interviews",
        "Career clarity session (role types)",
        "Job search strategy (which companies, which roles)",
        "1 month of ongoing support"
      ],
      tag: "GRADUATE"
    },
    {
      id: "mid-career",
      title: "MID-CAREER ACCELERATION",
      subtitle: "Professionals with 3-6 years of experience. You're good at your job, but invisible to promotions. You're ready for the next level.",
      timeline: "Timeline: 6 Weeks",
      features: [
        "Resume repositioning (from tasks to impact)",
        "LinkedIn visibility boost (get noticed by recruiters)",
        "Advanced interview coaching (behavioural, leadership, salary negotiation)",
        "Career strategy session (next role, market value, growth paths)",
        "Application strategy (which companies, which roles, when to apply)",
        "6 weeks of ongoing support"
      ],
      tag: "ACCELERATOR"
    },
    {
      id: "manager",
      title: "First-time managers",
      subtitle: "Professionals with 6+ years of experience ready for executive or Manager roles. You need to be positioned as a strategic leader.",
      timeline: "Timeline: 8 Weeks",
      features: [
        "Executive resume (board-ready format)",
        "Executive LinkedIn branding (thought leadership, visibility)",
        "Executive interview coaching (vision, strategy, panel interviews)",
        "Essential soft skills training",
        "8 weeks of ongoing support"
      ],
      tag: "LEADER"
    }
  ];

  return (
    <div id="training-view" className="bg-[#F8FAFF] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">ACADEMY &amp; COACHING</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] uppercase tracking-tight">
            Career coaching designed for your stage of growth.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            Career growth shouldn't be left to chance. Whether you're stepping into your first corporate role, advancing to leadership, or moving into the executive suite, you need real, practical coaching at the right moment. We provide career strategy, interview preparation, personal branding, and ongoing support tailored to exactly where you are in your career.
          </p>
        </div>

        {/* The Three Pathways */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">THE THREE PATHWAYS</span>
            <h3 className="mt-1 text-2xl sm:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight">
              A Career Partner for Every Stage
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-gray-500 font-medium">
              Most professionals navigate career transitions alone. At Hraize, we guide you through every critical career moment with strategy, positioning, and support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pathways.map((path) => (
              <GlassCard key={path.id} id={path.id} className="relative p-6 flex flex-col justify-between h-full hover:border-[#1E3A8A] transition-all">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono font-extrabold bg-[#0EA5E9]/10 text-[#0EA5E9] px-2.5 py-1 rounded">
                      {path.tag}
                    </span>
                    <span className="text-xs font-black text-[#D4A017]">{path.timeline}</span>
                  </div>

                  <h4 className="text-base font-black text-[#1E3A8A] uppercase tracking-tight mb-2">
                    {path.title}
                  </h4>

                  <p className="text-xs text-gray-600 leading-relaxed font-semibold mb-6">
                    {path.subtitle}
                  </p>

                  <div className="space-y-2 border-t border-gray-100 pt-4">
                    <p className="text-[9px] font-mono tracking-widest text-[#1E3A8A] uppercase font-black mb-1">What You Get</p>
                    {path.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex gap-2 items-start">
                        <Check className="h-3.5 w-3.5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                        <span className="text-xs font-bold text-gray-750 leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">Customised services available</span>
                  <div className="h-2 w-2 rounded-full bg-[#D4A017]" />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Closing Career Coaching CTA */}
        <div className="bg-[#07112E] rounded-3xl p-8 sm:p-12 text-center text-white max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 p-4 opacity-5 pointer-events-none">
            <TrendingUp className="h-32 w-32" />
          </div>
          
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">TAKE COMMAND</span>
          <h3 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Ready to Own Your Career
          </h3>
          <p className="mt-4 text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto leading-relaxed">
            Stop leaving transitions to chance. Partner with premium advisors who understand precisely what global internal talent acquisition leaders look for.
          </p>

          <div className="mt-6">
            <button
              onClick={onLetsFindPath}
              className="rounded-full bg-[#0EA5E9] text-white font-black hover:bg-[#0EA5E9]/90 px-8 py-3.5 text-xs uppercase tracking-wider shadow-md focus:outline-none transition cursor-pointer"
            >
              Let's find your path
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
