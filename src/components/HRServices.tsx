import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Users, Layers, ShieldCheck, BarChart3, Settings, FileText,
  Check, ArrowRight, Sparkles, IndianRupee
} from "lucide-react";
import { SectionLabel, FeatureCheck } from "./UIElements";

interface HRServicesProps {
  onBookCall: () => void;
}

export const HRServices: React.FC<HRServicesProps> = ({ onBookCall }) => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    const timer = setTimeout(scrollToHash, 250);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const strategicServices = [
    {
      id: "support",
      title: "Fractional HR Partner (Monthly Support)",
      desc: "Instant answer desk and day-to-day consultation for operations, employee relations, and advisory workflows.",
      icon: Users,
      image: "/partners.png",
      details: [
        "Dedicated HR point of contact",
        "Email and phone support during business hours",
        "Employee relations guidance",
        "Policy interpretation and application",
        "Monthly check-in and reporting"
      ]
    },
    {
      id: "consulting",
      title: "HR Foundation Setup",
      desc: "Structured systems implementation matching specific organizational goals.",
      icon: Settings,
      image: "/hr-foundation.png",
      details: [
        "HR technology stack assessment",
        "System implementation roadmap",
        "Process automation setup",
        "Integration with existing tools",
        "Team training and handover"
      ]
    },
    {
      id: "audit",
      title: "HR Health Check & Improvement Plan",
      desc: "Full comprehensive compliance audit identifying statutory gaps and structural risks.",
      icon: ShieldCheck,
      image: "/health-checkup.png",
      details: [
        "Statutory compliance review",
        "Policy gap analysis",
        "Payroll and benefits audit",
        "Data privacy assessment",
        "Risk mitigation roadmap"
      ]
    },
    {
      id: "analytics",
      title: "Workforce Insights & HR Reporting",
      desc: "Turn employee spreadsheets into powerful executive-level metrics and predictive insights.",
      icon: BarChart3,
      image: "/reporting.png",
      details: [
        "Custom KPI dashboard design",
        "Headcount and attrition tracking",
        "Diversity and inclusion metrics",
        "Predictive workforce modeling",
        "Executive reporting suite"
      ]
    },
    {
      id: "policies",
      title: "HR Documentation & Process Setup",
      desc: "Handbooks, SOPs, and operational policies structured clearly and tailored to use.",
      icon: FileText,
      image: "/documentation.png",
      details: [
        "Employee handbook creation",
        "SOP documentation",
        "Policy templates and frameworks",
        "Compliance-ready formats",
        "Version-controlled repository"
      ]
    },
    {
      id: "workforce",
      title: "Strategic Workforce Planning",
      desc: "Comprehensive role assessments, talent pipelines, and hiring models aligned to forecasts.",
      icon: Layers,
      image: "/workforce-planning.png",
      details: [
        "Workforce demand modeling",
        "Skills gap analysis",
        "Talent pipeline development",
        "Succession planning frameworks",
        "Cost forecasting models"
      ]
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Audit & Diagnose",
      desc: "We understand exactly where you are and what needs attention, scoping out latent operational or legal bottlenecks.",
      duration: ""
    },
    {
      step: "02",
      title: "Build Your Foundation",
      desc: "We create your complete HR system: policies, processes, custom dashboards, integrated cleanly.",
      duration: ""
    },
    {
      step: "03",
      title: "Stay as Your People Partner",
      desc: "Ongoing support: monthly reports, database queries, compliance tracking, and strategic guidance.",
      duration: ""
    }
  ];

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Strategic Consulting</SectionLabel>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            Your HR Partner for the Next Stage of Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy-900/60 font-semibold">
            Growing companies routinely reach a transition phase (100-500 employees).
            We bring complete framework clarity to your workforce.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-24 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategicServices.map((srv, idx) => {
              const Icon = srv.icon;
              const isActive = activeCard === srv.id;
              return (
                <motion.div
                  key={srv.id}
                  id={srv.id}
                  className="relative h-[340px] rounded-2xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onHoverStart={() => setActiveCard(srv.id)}
                  onClick={() => setActiveCard(isActive ? null : srv.id)}
                >
                  {/* Background image */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${srv.image})` }}
                    animate={{ opacity: isActive ? 0 : 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  />

                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black-100/60 via-black-100/5 to-transparent" />

                  {/* Index number */}
                  <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-black">
                    {idx + 1}
                  </div>

                  {/* Title - always visible at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-lg font-black text-white leading-tight">{srv.title}</h4>
                  </div>

                  {/* Details overlay - appears on hover (desktop) or tap (mobile) */}
                  <motion.div
                    className="absolute inset-0 p-6 flex flex-col justify-center bg-navy-900/95"
                    animate={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none" }}
                    whileHover={{ opacity: 1, pointerEvents: "auto" }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-600/20 text-sky-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-black text-white leading-tight">{srv.title}</h4>
                    </div>
                    <p className="text-xs text-white/60 font-medium mb-4 leading-relaxed">{srv.desc}</p>
                    <ul className="space-y-2.5">
                      {srv.details.map((detail, di) => (
                        <li key={di} className="flex items-start gap-2.5">
                          <Check className="h-3.5 w-3.5 text-sky-400 mt-0.5 shrink-0" />
                          <span className="text-xs text-white/80 font-medium leading-snug">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Why Choose Us ?
            </h3>
            <div className="mt-4 h-1 w-20 bg-sky-900 mx-auto rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  icon: IndianRupee,
                  title: "Cost Effective",
                  desc: "Get expert HR support without the cost of a full-time HR team."
                },
                {
                  icon: Users,
                  title: "Practical & Scalable",
                  desc: "Solutions tailored for your stage of growth and business needs."
                },
                {
                  icon: BarChart3,
                  title: "Data-Driven Decisions",
                  desc: "Make better people decisions with insights and reporting."
                },
                {
                  icon: ShieldCheck,
                  title: "Experienced Partner",
                  desc: "HR expertise you can trust to help your business grow."
                }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-forest-500/10 mb-3 lg:mb-4">
                      <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-sky-500" />
                    </div>
                    <h4 className="text-sm lg:text-lg font-black text-navy-900 mb-1 lg:mb-2">{feature.title}</h4>
                    <p className="text-xs lg:text-sm text-navy-900/60 font-semibold leading-relaxed">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-24 max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <SectionLabel>Our Methodology</SectionLabel>
            <h3 className="mt-3 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              How It Works in 3 Steps
            </h3>
            <p className="mt-3 text-sm text-navy-900/50 font-semibold">
              A straightforward process designed to integrate smoothly with your business.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
            {/* Connecting line between steps (desktop) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-sky-600/40 to-transparent" />

            {methodology.map((m, idx) => (
              <motion.div
                key={idx}
                className="relative flex flex-row md:flex-col items-center md:text-center gap-5 md:gap-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
              >
                {/* Mobile vertical connecting line */}
                {idx < methodology.length - 1 && (
                  <div className="md:hidden absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-sky-600/30 to-transparent" />
                )}

                {/* Step number circle with glow */}
                <div className="relative z-10 shrink-0">
                  <div className="absolute inset-0 rounded-full bg-sky-600/20 blur-lg md:blur-xl" />
                  <div className="relative flex h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-full bg-navy-900 border-2 border-sky-600/20 text-white shadow-xl">
                    <span className="text-lg md:text-2xl font-black tracking-tight">{m.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:mt-7 text-left md:text-center">
                  <h4 className="text-sm md:text-lg font-black text-navy-900 uppercase tracking-tight mb-1 md:mb-3">{m.title}</h4>
                  <p className="text-xs md:text-sm text-navy-900/60 font-medium leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-24 overflow-hidden rounded-3xl bg-navy-card-subtle shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <SectionLabel className="text-sky-400">HR Dashboard Builder</SectionLabel>
              <h3 className="mt-3 text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                People Analytics That Works
              </h3>
              <p className="mt-4 text-sm text-sage-100/70 font-semibold leading-relaxed">
                Turn employee data into real-time dashboards for headcount, attrition, diversity, and hiring costs.
              </p>
              <div className="mt-6 text-white space-y-3">
                {[
                  "Headcount trends & forecasting",
                  "Attrition analysis with predictive alerts",
                  "Diversity & inclusion metrics",
                  "Time-to-hire & cost-per-hire tracking",
                  "Custom report builder"
                ].map((item, idx) => (
                  <FeatureCheck key={idx} className="text-white">{item}</FeatureCheck>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-navy-800 to-navy-900 p-8 sm:p-12 flex items-center justify-center min-h-[300px] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--color-sky-600)_8%,transparent)_0%,transparent_70%)]" />
              <div className="relative w-full max-w-sm space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Headcount", value: "342" },
                    { label: "Attrition", value: "6.8%" },
                    { label: "Avg Tenure", value: "3.2yr" },
                  ].map((kpi, idx) => (
                    <div key={idx} className="glass-dark rounded-xl p-4 text-center">
                      <p className="text-[9px] text-sage-100/50 font-bold uppercase tracking-wider">{kpi.label}</p>
                      <p className="text-xl font-black mt-1 text-sky-400">{kpi.value}</p>
                    </div>
                  ))}
                </div>

                <div className="glass-dark rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-[10px] text-sage-100/50 font-bold uppercase tracking-wider">Headcount Trend</span>
                    <span className="text-[10px] text-forest-500 font-bold">+14.2% YoY</span>
                  </div>
                  <div className="h-8 flex items-end gap-1.5">
                    {[35, 42, 38, 55, 50, 62, 78].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/5 rounded-sm h-full flex flex-col justify-end overflow-hidden">
                        <motion.div
                          className="bg-gradient-to-t from-sky-600 to-sky-400 w-full"
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: i * 0.1, duration: 0.8 }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-dark rounded-xl p-4">
                  <p className="text-[10px] text-sage-100/50 font-bold uppercase tracking-wider mb-2">Departments</p>
                  <div className="space-y-2">
                    {[
                      { dept: "Engineering", pct: 42 },
                      { dept: "Operations", pct: 28 },
                      { dept: "Sales & Marketing", pct: 18 },
                      { dept: "Support", pct: 12 },
                    ].map((d, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-[10px] mb-0.5">
                          <span className="text-sage-100/70 font-semibold">{d.dept}</span>
                          <span className="text-sage-100/50">{d.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-sky-600 rounded-full"
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

        <div className="shadow-lg text-center max-w-3xl mx-auto bg-cream-50 border border-sky-600/10 rounded-3xl p-8 sm:p-12">
          <SectionLabel>Workforce Architecture</SectionLabel>
          <h3 className="mt-3 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
            Ready to Have Your People Partner Today
          </h3>
          <p className="mt-4 text-sm text-navy-900/60 font-semibold max-w-xl mx-auto">
            Schedule a free discovery call. We'll assess your needs, locate bottlenecks, and show you how
            fractional HR can transform your business.
          </p>
          <div className="mt-8">
            <button
              onClick={onBookCall}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 text-white hover:bg-sky-700 px-8 py-3.5 text-xs font-black tracking-wider uppercase shadow-lg shadow-sky-600/20 transition-all cursor-pointer"
            >
              Book Your Call
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
