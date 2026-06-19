import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Users, Layers, ShieldCheck, PieChart, Play, CheckCircle2,
  Settings, Columns, Plus, Trash2, Calendar, FileText, BarChart3, LineChart, Sparkles, Check
} from "lucide-react";
import { GlassCard } from "./UIElements";

interface HRServicesProps {
  onBookCall: () => void;
}

export const HRServices: React.FC<HRServicesProps> = ({ onBookCall }) => {
  const [activeDashboardKPIs, setActiveDashboardKPIs] = useState<string[]>([
    "headcount", "attrition", "diversity"
  ]);

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

    // Delay scroll slightly to ensure page layout and elements have fully hydrated/rendered
    const timer = setTimeout(scrollToHash, 250);

    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  const strategicServices = [
    {
      id: "support",
      title: "HR Subscription Support",
      desc: "Instant answer desk and day-to-day consultation for operations, employee relations, and advisory workflows.",
      icon: Users,
    },
    {
      id: "consulting",
      title: "HR Consulting & Systems Setup",
      desc: "Structured systems implementation matching specific organizational goals to streamline standard scaling.",
      icon: Settings,
    },
    {
      id: "audit",
      title: "HR Audit",
      desc: "Full comprehensive compliance audit identifying statutory gaps, structural risks, and workflow inefficiencies.",
      icon: ShieldCheck,
    },
    {
      id: "analytics",
      title: "People Analytics & Dashboard",
      desc: "Turn employee spreadsheets into powerful executive-level metrics and predictive insight panels.",
      icon: BarChart3,
    },
    {
      id: "policies",
      title: "HR Policy & Process Documentation",
      desc: "Handbooks, SOP agreements, and operational policies structured clearly and tailored strictly is ready to use.",
      icon: FileText,
    },
    {
      id: "workforce",
      title: "Strategic Workforce Planning",
      desc: "Comprehensive role assessments, talent pipelines, and hiring models aligned to financial planning forecasts.",
      icon: Layers,
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Audit & Diagnose",
      desc: "Our Experts understand exactly where you are and what needs attention, scoping out latent operational, or legal bottlenecks.",
      badge: "Week 1-2"
    },
    {
      step: "02",
      title: "Build Your Foundation",
      desc: "We create your complete HR system - policies, processes, custom dashboards, ready to use, integrated cleanly.",
      badge: "Week 3-6"
    },
    {
      step: "03",
      title: "Stay as Your People Partner",
      desc: "We provide ongoing support: monthly reports, custom database queries, compliance tracking, and direct strategic guidance. We're your fractional HR team.",
      badge: "Ongoing"
    },
  ];

  const availableKPIs = [
    { id: "headcount", label: "Headcount Pulse", value: "342 Employees", change: "+14.2% YoY", color: "#0EA5E9" },
    { id: "attrition", label: "Attrition Rate", value: "6.8%", change: "-2.4% vs Industry", color: "#1E3A8A" },
    { id: "diversity", label: "Gender Diversity ratio", value: "48% F / 52% M", change: "Balanced", color: "#D4A017" },
    { id: "hiringTime", label: "Time-to-Hire SLA", value: "19.5 Days", change: "-4.2 Days saved", color: "#14B8A6" },
    { id: "satisfaction", label: "eNPS Score", value: "+42", change: "Excellent Range", color: "#8B5CF6" },
  ];

  const toggleKPI = (id: string) => {
    if (activeDashboardKPIs.includes(id)) {
      if (activeDashboardKPIs.length > 1) {
        setActiveDashboardKPIs(activeDashboardKPIs.filter(k => k !== id));
      }
    } else {
      setActiveDashboardKPIs([...activeDashboardKPIs, id]);
    }
  };

  return (
    <div id="hr-services-view" className="bg-[#F8FAFF] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">Strategic Consulting</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] uppercase tracking-tight">
            Your HR Partner for the Next Stage of Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            Growing companies routinely reach a transition phase <span className="font-bold text-[#1E3A8A]">(100–500 employees)</span>. We bring complete framework clarity to your workforce so you scale reliably without a bloated full-time department.
          </p>
        </div>

        {/* Six Strategic Services Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {strategicServices.map((srv) => {
            const IconComponent = srv.icon;
            return (
              <GlassCard key={srv.id} id={srv.id} className="relative p-6 flex flex-col justify-between group h-full">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-[#1E3A8A]/5 flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#0EA5E9]/10 group-hover:text-[#0EA5E9] transition-all mb-5">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-black text-[#1E293B] uppercase tracking-wide mb-3">{srv.title}</h4>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">{srv.desc}</p>
                </div>

                {/* Metric Graphic Decorator Inside Card (No Prohibited Filler Circles) */}
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#0EA5E9] tracking-wider uppercase font-black">Strategic Pillar</span>
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-sm bg-[#1E3A8A] opacity-30 group-hover:opacity-100 transition-opacity" />
                    <span className="h-1.5 w-1.5 rounded-sm bg-[#0EA5E9] opacity-30 group-hover:opacity-100 transition-opacity" />
                    <span className="h-1.5 w-1.5 rounded-sm bg-[#D4A017] opacity-30 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Methodology: How It Works in 3 Steps */}
        <div className="mb-24 bg-[#07112E]/5 rounded-3xl p-8 sm:p-12 border border-slate-200/50">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1E3A8A]">OUR METHODOLOGY</span>
            <h3 className="mt-1 text-2xl sm:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight">
              How It Works in 3 Steps
            </h3>
            <p className="mt-3 text-xs text-slate-500 font-bold">
              A straightforward process designed to integrate smoothly with your business and deliver real results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {methodology.map((m, idx) => (
              <div key={idx} className="relative flex flex-col justify-between bg-[#F1F5FF] border border-slate-100 rounded-2xl p-6 shadow-sm group hover:border-[#0EA5E9] transition">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-serif font-black text-[#0EA5E9]">{m.step}</span>
                    <span className="text-[10px] font-mono font-bold bg-[#1E3A8A]/10 text-[#1E3A8A] px-2.5 py-1 rounded-md uppercase">
                      {m.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-black text-[#1E3A8A] uppercase tracking-wide mb-3">{m.title}</h4>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">{m.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[#1E3A8A]">
                  <CheckCircle2 className="h-4 w-4 text-[#0EA5E9]" />
                  <span className="text-[11px] font-bold text-[#1E3A8A]">Milestone Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive DARK HR Dashboard Builder */}
        <div className="mb-24 bg-[#07112E] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">HR DASHBOARD BUILDER</span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                People Analytics That Works
              </h3>
              <p className="mt-4 text-sm text-slate-300 font-medium leading-relaxed">
                Turn employee data into real-time dashboards for headcount, attrition, diversity, and hiring costs. Know what's working and what's not.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Headcount trends & forecasting",
                  "Attrition analysis with predictive alerts",
                  "Diversity & inclusion metrics",
                  "Time-to-hire & cost-per-hire tracking",
                  "Custom report builder"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-xs text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0A1628] to-[#0F1F3A] p-8 sm:p-12 flex items-center justify-center min-h-[300px] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.1)_0%,_transparent_70%)]" />
              <div className="relative w-full max-w-sm space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Total Headcount", value: "342", color: "from-[#0EA5E9] to-[#1E3A8A]" },
                    { label: "Attrition Rate", value: "6.8%", color: "from-[#D4A017] to-[#B8860B]" },
                    { label: "Avg Tenure", value: "3.2yr", color: "from-[#14B8A6] to-[#0D9488]" },
                  ].map((kpi, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{kpi.label}</p>
                      <p className={`text-xl font-black mt-1 bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent`}>{kpi.value}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Monthly Headcount Trend</span>
                    <span className="text-[10px] text-emerald-400 font-bold">+14.2% YoY</span>
                  </div>
                  <div className="h-8 flex items-end gap-1.5">
                    {[35, 42, 38, 55, 50, 62, 78].map((h, i) => (
                      <div key={i} className="flex-1 bg-slate-700/50 rounded-sm h-full flex flex-col justify-end overflow-hidden">
                        <motion.div
                          className="bg-gradient-to-t from-[#0EA5E9] to-[#38BDF8] w-full"
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: i * 0.1, duration: 0.8 }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Department Distribution</p>
                  <div className="space-y-2">
                    {[
                      { dept: "Engineering", pct: 42 },
                      { dept: "Operations", pct: 28 },
                      { dept: "Sales & Marketing", pct: 18 },
                      { dept: "Support", pct: 12 },
                    ].map((d, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-[10px] mb-0.5">
                          <span className="text-slate-300 font-semibold">{d.dept}</span>
                          <span className="text-slate-400">{d.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-[#0EA5E9] rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${d.pct}%` }}
                            transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center bg-[#F1F5FF] border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-[0_12px_40px_rgba(7,17,46,0.03)] max-w-4xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">WORKFORCE ARCHITECTURE</span>
          <h3 className="mt-2 text-2xl sm:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight">
            Ready to have your People Partner today
          </h3>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
            Schedule a free discovery call. We'll assess your operational needs, locate core workforce bottlenecks, and show you how fractional human resources can transform your business without the overhead of a full-time department.
          </p>
          <div className="mt-6">
            <button
              onClick={onBookCall}
              className="rounded-full bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90 px-8 py-3.5 text-xs font-black tracking-wider uppercase shadow-md hover:shadow-lg transition cursor-pointer"
            >
              Book your Call
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
