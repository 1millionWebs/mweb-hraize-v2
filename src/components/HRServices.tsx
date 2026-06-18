import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Users, Layers, ShieldCheck, PieChart, Play, CheckCircle2, 
  Settings, Columns, Plus, Trash2, Calendar, FileText, BarChart3, LineChart, Sparkles 
} from "lucide-react";
import { GlassCard } from "./UIElements";

interface HRServicesProps {
  onBookCall: () => void;
}

export const HRServices: React.FC<HRServicesProps> = ({ onBookCall }) => {
  const [activeDashboardKPIs, setActiveDashboardKPIs] = useState<string[]>([
    "headcount", "attrition", "diversity"
  ]);

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
              <GlassCard key={srv.id} className="relative p-6 flex flex-col justify-between group h-full">
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
              <div key={idx} className="relative flex flex-col justify-between bg-white border border-slate-100 rounded-2xl p-6 shadow-sm group hover:border-[#0EA5E9] transition">
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
        <div className="bg-[#07112E] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-slate-800 mb-20 overflow-hidden relative">
          {/* Subtle Ambient Graphic Lines (Framer Motion) */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent" />
            <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1E3A8A] to-transparent" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Controls Side */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">INTERACTIVE SIMULATION</span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  Tailor Your <br />
                  <span className="text-[#0EA5E9]">HR Dashboard</span>
                </h3>
                <p className="mt-4 text-xs text-slate-300 font-medium leading-relaxed">
                  Toggle key metrics below to customize your dream executive dashboard. See how data streams sync to form automated workforce intelligence.
                </p>

                {/* Checklist Selection */}
                <div className="mt-6 space-y-2">
                  {availableKPIs.map((kpi) => {
                    const active = activeDashboardKPIs.includes(kpi.id);
                    return (
                      <button
                        key={kpi.id}
                        onClick={() => toggleKPI(kpi.id)}
                        className={`flex items-center justify-between w-full p-2.5 rounded-lg border text-left transition-all ${
                          active 
                            ? "bg-white/10 border-[#0EA5E9] text-white" 
                            : "bg-transparent border-slate-700 text-slate-400 hover:border-slate-500"
                        }`}
                      >
                        <span className="text-xs font-bold">{kpi.label}</span>
                        {active ? (
                          <span className="text-[10px] bg-[#0EA5E9] text-white px-2 py-0.5 rounded font-black">ACTIVE</span>
                        ) : (
                          <Plus className="h-3.5 w-3.5 text-slate-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 border-t border-slate-800 pt-4">
                <p className="text-[10px] font-mono text-slate-400 leading-normal">
                  *This live dashboard builder replicates real Power BI/Looker Studio connectors deployed by Hraize.
                </p>
              </div>
            </div>

            {/* Simulated Live Dark Dashboard Display */}
            <div className="lg:col-span-8 bg-[#09153A] border border-slate-700 rounded-2xl p-6 flex flex-col justify-between min-h-[360px]">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#14B8A6]" />
                  <p className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">HRAIZE LIVE ANALYTICS GATEWAY</p>
                </div>
                <div className="flex gap-2 text-[10px] font-mono text-slate-400 bg-black/30 px-3 py-1 rounded">
                  <span>REFRESH STATE: AUTOPENDING</span>
                </div>
              </div>

              {/* Grid of Active KPIs */}
              <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimatePresence>
                  {availableKPIs.filter(kpi => activeDashboardKPIs.includes(kpi.id)).map((kpi) => (
                    <motion.div
                      key={kpi.id}
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      className="bg-black/20 border border-slate-800 rounded-xl p-4 flex flex-col justify-between h-28 hover:border-[#0EA5E9] transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{kpi.label}</span>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                          {kpi.change}
                        </span>
                      </div>
                      <div className="mt-1 flex flex-col">
                        <span className="text-lg font-black text-white">{kpi.value}</span>
                        
                        {/* Interactive dynamic sparklines */}
                        <div className="mt-2.5 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full rounded-full" 
                            style={{ backgroundColor: kpi.color }}
                            initial={{ width: "10%" }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Graphic Plot representation of active nodes */}
              <div className="bg-black/40 border border-slate-800 rounded-xl p-4">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/60">
                  <span className="text-[10px] font-mono text-[#0EA5E9]">ATTRITION CORRELATION INDEX</span>
                  <span className="text-[9px] text-slate-400">Y-AXIS: COST PREDICTION (X1000)</span>
                </div>
                {/* SVG Graph path */}
                <svg className="h-16 w-full" viewBox="0 0 500 64" fill="none">
                  <path 
                    d="M0,60 Q100,20 200,45 T400,25 T500,40" 
                    stroke="#0EA5E9" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M0,60 Q100,5 200,35 T400,10 T500,15" 
                    stroke="#D4A017" 
                    strokeWidth="1.5" 
                    strokeDasharray="4 6" 
                    strokeLinecap="round"
                  />
                  {/* Glowing intersection point */}
                  <circle cx="300" cy="30" r="4" fill="#1E3A8A" stroke="#0EA5E9" strokeWidth="2" />
                </svg>
              </div>

            </div>

          </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-[0_12px_40px_rgba(7,17,46,0.03)] max-w-4xl mx-auto">
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
