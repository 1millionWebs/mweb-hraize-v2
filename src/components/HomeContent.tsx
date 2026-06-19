import React from "react";
import { motion } from "motion/react";
import {
  Heart, BarChart3,
  Settings, Users, GraduationCap, ChevronRight, Check, Target
} from "lucide-react";
import { GlassCard } from "./UIElements";

interface HomeContentProps {
  onGetStarted: () => void;
  onNavigateToService: (service: string) => void;
}

export const HomeContent: React.FC<HomeContentProps> = ({
  onGetStarted,
  onNavigateToService,
}) => {

  const whatWeDo = [
    {
      title: "For Growing Businesses",
      desc: "HR systems, analytics dashboard designs, recruitment frameworks, and legal compliance structures—so you scale seamlessly without needing/relying on a bloated, full-time HR team.",
      badge: "Scale Growth"
    },
    {
      title: "For Ambitious Professionals",
      desc: "Comprehensive 1-on-1 career coaching, interactive interview prep pipelines, career positioning strategy, and executive mentorship to guide you straight to your target role.",
      badge: "Talent Career"
    },
    {
      title: "For Hiring Leaders",
      desc: "Extremely quality-focused talent acquisition with a bulletproof 60-day replacement guarantee, ensuring you only receive high-caliber, carefully briefed candidates.",
      badge: "Quality Hires"
    }
  ];

  const whyChooseHraize = [
    {
      title: "Complete HR Partner Under One Roof",
      desc: "HR systems, live employee analytics, high-caliber recruitment, and ongoing strategic retention support—everything you need in a single trusted partnership, without multiple conflicting vendors."
    },
    {
      title: "Build Professional HR Systems",
      desc: "Stop managing people and payroll in fragile Excel spreadsheets. Obtain fully documented structured policies, compliant onboarding workflows, ready-to-use SLAs, and live KPI dashboards."
    },
    {
      title: "Data-Driven People Decisions",
      desc: "Beautiful analytics dashboards highlight headcount shifts, regional attrition vectors, is ready-to-use retention rates, and hiring costs. Discover exactly what works and what doesn't."
    },
    {
      title: "Quality Recruitment With Guarantee",
      desc: "We send only rigorously vetted candidates, not a bulk batch of unqualified CVs. Our 60-day replacement search guarantee guarantees we remain active partners in your success."
    },
    {
      title: "Stays With You Long-Term",
      desc: "Continuous monthly HR subscription support, ongoing contract hiring, and quarterly compliance tracking—not an isolated project that ends. A true, enduring fractional partnership."
    }
  ];

  const coreValues = [
    {
      title: "People First",
      desc: "We put people at the heart of every decision, every operational process, and every professional conversation. When businesses get their people right, everything else follows naturally.",
      icon: Heart,
      color: "#0EA5E9"
    },
    {
      title: "Data Driven",
      desc: "We replace guesswork with metrics. Every strategic recommendation we make is backed by real analytics, workforce telemetry, and the deep operational experience to know what the numbers mean.",
      icon: BarChart3,
      color: "#1E3A8A"
    },
    {
      title: "Outcome Focused",
      desc: "We do not consider an operational engagement complete until the results are completely visible. Your organizational success remains the single metric that matters in our playbook.",
      icon: Target,
      color: "#D4A017"
    }
  ];

  return (
    <div id="home-additional-content" className="bg-[#F8FAFF]">

      {/* 1. Slogan Banner Section "Structure Your People. Scale Your Business" */}
      <section className="py-20 bg-[#07112E] text-white overflow-hidden relative border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0EA5E9] uppercase">
                // Building HR That Actually Works
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none text-white">
                Structure Your People. <br />
                <span className="text-[#0EA5E9]">Scale Your Business.</span>
              </h2>
              <p className="text-slate-300 font-medium text-xs sm:text-sm max-w-2xl leading-relaxed">
                Hraize is your dedicated HR, People Operations, and Recruitment partner—structured, practical, and built specifically for scaling businesses that are serious about growing the right way.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
              {/* "Get Started" CTA in a different distinct color */}
              <motion.button
                onClick={onGetStarted}
                className="rounded-xl bg-[#D4A017] hover:bg-[#D4A017]/90 px-8 py-4 text-xs font-black tracking-widest uppercase text-white shadow-lg cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
              {/* <span className="text-[10px] text-slate-400 mt-3 font-mono leading-none tracking-wide text-center lg:text-right w-full lg:max-w-[140px]">
                No credit card required for consultation
              </span> */}
            </div>

          </div>
        </div>
      </section>

      {/* Global Statistics Grid - Disabled for now */}

      {/* 5. Our Services List (3 cards redirecting to specific subservices) */}
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">PRACTICAL OFFERINGS</span>
            <h3 className="mt-1 text-2xl sm:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight">
              Our Services
            </h3>
            <p className="mt-3 text-sm text-gray-600 font-medium">
              Complete HR frameworks, high-caliber recruitment, and certified career coaching pathways built specifically for growing SMEs, ambitious talents, and professional organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* 1. HR Services */}
            <GlassCard className="p-6 flex flex-col justify-between h-96 relative overflow-hidden">
              <div>
                <div className="h-12 w-12 rounded-xl bg-[#1E3A8A]/5 text-[#1E3A8A] flex items-center justify-center mb-5">
                  <Settings className="h-6 w-6" />
                </div>
                <h4 className="text-base font-black text-[#1E3A8A] uppercase tracking-wide mb-3">HR Services</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Setup compliant systems, handbook policies, and advanced interactive dashboards. Audit legal compliance gaps and manage attrition scientifically.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <button
                  onClick={() => onNavigateToService("hr-services")}
                  className="flex items-center gap-1.5 text-xs font-black text-[#0EA5E9] hover:text-[#1E3A8A] transition-colors cursor-pointer"
                >
                  Learn more
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </GlassCard>

            {/* 2. Recruitment Services */}
            <GlassCard className="p-6 flex flex-col justify-between h-96 relative overflow-hidden">
              <div>
                <div className="h-12 w-12 rounded-xl bg-[#0EA5E9]/5 text-[#0EA5E9] flex items-center justify-center mb-5">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="text-base font-black text-[#1E3A8A] uppercase tracking-wide mb-3">Recruitment Services</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Identify high-caliber permanent, temporary, and contract team members. Bulletproof candidate preparation with a dedicated 60-day replacement search lock.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <button
                  onClick={() => onNavigateToService("recruitment")}
                  className="flex items-center gap-1.5 text-xs font-black text-[#0EA5E9] hover:text-[#1E3A8A] transition-colors cursor-pointer"
                >
                  Learn more
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </GlassCard>

            {/* 3. Training & Development */}
            <GlassCard className="p-6 flex flex-col justify-between h-96 relative overflow-hidden">
              <div>
                <div className="h-12 w-12 rounded-xl bg-[#D4A017]/5 text-[#D4A017] flex items-center justify-center mb-5">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h4 className="text-base font-black text-[#1E3A8A] uppercase tracking-wide mb-3">Training and Development</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Empower graduates, mid-career professionals, and first-time executives with active resume rewriting and interactive recruitment coaching channels.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <button
                  onClick={() => onNavigateToService("training")}
                  className="flex items-center gap-1.5 text-xs font-black text-[#0EA5E9] hover:text-[#1E3A8A] transition-colors cursor-pointer"
                >
                  Learn more
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </GlassCard>

          </div>

        </div>
      </section>

      {/* 2. Our Company & What we do Section */}
      <section className="py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">WHO WE ARE</span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight">
                Our Company
              </h3>
            </div>
            <div className="lg:col-span-7 bg-[#F1F5FF] p-6 rounded-2xl border border-slate-100">
              <p className="text-sm sm:text-base text-gray-600 font-semibold leading-relaxed">
                Hraize is more than an HR service provider; <strong className="text-[#1E3A8A]">we are your people partner</strong>. We believe businesses deserve HR that actually works, and ambitious professionals deserve careers they are truly proud of. We built Hraize to make both happen safely, backed by deep data analytic matrices.
              </p>
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest">[ WHAT WE DO ]</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whatWeDo.map((w, idx) => (
                <div
                  key={idx}
                  className="bg-[#F1F5FF] border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between group hover:border-[#0EA5E9] transition-all"
                >
                  <div>
                    <span className="text-[9px] font-mono font-bold text-slate-400 border border-slate-200 px-2.5 py-1 rounded inline-block uppercase mb-4">
                      {w.badge}
                    </span>
                    <h4 className="text-base font-black text-[#1E3A8A] uppercase tracking-wide mb-3">{w.title}</h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">{w.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#0EA5E9] group-hover:text-[#1E3A8A]">
                    <span>Professional Target</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Why Choose Hraize (Checklist items) */}
      <section className="py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">OUR CREDENTIALS</span>
            <h3 className="mt-1 text-2xl sm:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight">
              Why Choose Hraize
            </h3>
            <p className="mt-2 text-xs text-gray-500 font-bold uppercase tracking-wide">
              Complete support frameworks bypassing the limits of traditional networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseHraize.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F1F5FF] border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-6 w-6 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </div>
                    <h4 className="text-xs sm:text-sm font-black text-[#1E3A8A] uppercase tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100/60 text-right">
                  <span className="text-[9px] font-mono font-black text-[#0EA5E9]">VERIFIED STANDARD</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Our Core Values Section */}
      <section className="py-20 border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1E3A8A]">OUR ETHICAL STANDARD</span>
            <h3 className="mt-1 text-2xl sm:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight">
              Our Core Values
            </h3>
            <p className="mt-2 text-xs text-gray-500 font-bold uppercase">
              The foundational principles steering every client engagement, and metric we log.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F1F5FF] border border-slate-100 rounded-3xl p-6 shadow-sm hover:border-[#1E3A8A] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="h-12 w-12 rounded-xl flex items-center justify-center text-white mb-5 shadow-sm"
                      style={{ backgroundColor: value.color }}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-black text-[#1E3A8A] uppercase tracking-wide mb-3">{value.title}</h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">{value.desc}</p>
                  </div>

                  {/* <div className="mt-6 pt-4 border-t border-slate-200/55">
                    <span className="text-[10px] font-mono tracking-wider font-extrabold block text-slate-400">HRAIZE CERTIFIED VALUE</span>
                  </div> */}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
