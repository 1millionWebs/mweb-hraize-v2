"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  Users,
  Layers,
  ShieldCheck,
  BarChart3,
  Settings,
  FileText,
  Check,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  IndianRupee,
  Info,
} from "lucide-react";
import { SectionLabel, FeatureCheck } from "./UIElements";

interface HRServicesProps {
  onBookCall?: () => void;
}

const STATUTORY_DISCLAIMER =
  "Service scope will be agreed with each client and will reflect the applicable statutory requirements.";

export const HRServices: React.FC<HRServicesProps> = ({ onBookCall }) => {
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

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const strategicServices = [
    {
      id: "payroll",
      title: "Monthly Payroll & Salary Statements",
      desc: "Accurate monthly payroll preparation, salary computation, and payslip coordination.",
      icon: IndianRupee,
      image: "/services-hr.png",
      details: [
        "Monthly payroll preparation and processing.",
        "Salary statements and payslip coordination.",
        "Deduction calculations and net pay generation.",
        "Bank disbursement file preparation.",
        "Salary queries and employee payroll support.",
      ],
    },
    {
      id: "pf",
      title: "Provident Fund (PF) & EPFO Filing",
      desc: "Unified member portal administration, monthly ECR challan filing, and compliance records.",
      icon: ShieldCheck,
      image: "/health-checkup.png",
      details: [
        "Provident Fund (PF) administration and EPFO filing support.",
        "Monthly ECR challan generation and filing.",
        "UAN generation, linking, and member KYC updates.",
        "PF withdrawal, transfer, and claim assistance.",
        "Annual PF returns and compliance statements.",
      ],
    },
    {
      id: "esi-pt",
      title: "ESI & Professional Tax (PT) Support",
      desc: "State-specific PT calculations, ESIC monthly contribution filing, and statutory returns.",
      icon: Settings,
      image: "/hr-foundation.png",
      details: [
        "Employee State Insurance (ESI) administration and filing support.",
        "Monthly ESIC contribution calculations and challan filing.",
        "Professional Tax (PT) calculations and filing support.",
        "State-specific PT slabs and periodic returns.",
        "Statutory inspection and documentation assistance.",
      ],
    },
    {
      id: "lifecycle",
      title: "Employee Lifecycle Administration",
      desc: "Structured documentation from joining and appointment to exit clearance and F&F settlement.",
      icon: Users,
      image: "/workforce-planning.png",
      details: [
        "Employee joining and exit administration.",
        "Employee documentation and appointment letters.",
        "Employee lifecycle administration.",
        "Asset sign-offs and onboarding verifications.",
        "Exit clearances and final settlement coordination.",
      ],
    },
    {
      id: "records",
      title: "Personnel Data & Attendance Records",
      desc: "Maintenance of digital employee records, shift scheduling, and leave balance tracking.",
      icon: FileText,
      image: "/documentation.png",
      details: [
        "Personnel data maintenance.",
        "Attendance and leave records coordination.",
        "Leave balance statements and holiday calendar administration.",
        "Shift tracking, regularization, and overtime records.",
        "Employee digital file maintenance and updates.",
      ],
    },
    {
      id: "compliance",
      title: "HR Reports & Compliance Records",
      desc: "Audit-ready statutory registers, HR documentation, and periodic operational management reports.",
      icon: BarChart3,
      image: "/reporting.png",
      details: [
        "Employee data and statutory record maintenance.",
        "HR reports and documentation.",
        "Compliance records and documentation support.",
        "Statutory register maintenance under applicable Labour Acts.",
        "Monthly headcount, turnover, and attendance summaries.",
      ],
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Audit & Diagnose",
      desc: "We understand exactly where you are and what needs attention, scoping out latent operational or statutory compliance requirements.",
    },
    {
      step: "02",
      title: "Build Your Foundation",
      desc: "We establish structured payroll calendars, statutory filing schedules, personnel documentation, and reporting routines.",
    },
    {
      step: "03",
      title: "Stay as Your Support Partner",
      desc: "Ongoing month-on-month operational delivery: payroll processing, EPFO/ESIC/PT filings, employee data maintenance, and HR reports.",
    },
  ];

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER SECTION ============ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>01. Service Domain</SectionLabel>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight leading-[1.08]">
            HR, Payroll Services &amp;
            <br />
            <span className="text-sky-600">Administration</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-navy-900/70 font-semibold leading-relaxed">
            Practical, end-to-end support across payroll processing, statutory compliance (PF, ESI, PT),
            and complete employee lifecycle administration.
          </p>

          {/* Statutory Disclaimer Pill */}
          <div className="mt-6 inline-flex max-w-2xl items-center gap-2.5 rounded-2xl border border-copper-400/35 bg-white/85 px-4 py-2.5 text-xs font-semibold text-navy-900/80 shadow-sm text-left">
            <Info className="h-4 w-4 shrink-0 text-copper-500" />
            <span>{STATUTORY_DISCLAIMER}</span>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact?tab=consultation"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3 text-sm font-black text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition-all duration-200"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact?tab=quote&service=hr"
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white px-6 py-3 text-sm font-bold text-navy-900 shadow-sm hover:bg-cream-50 transition-all duration-200"
            >
              Get a Service Quote
              <ArrowUpRight className="h-4 w-4 text-sky-600" />
            </Link>
          </div>
        </div>

        {/* ============ 6 INTERACTIVE HOVER/TAP CARDS ============ */}
        <div className="max-w-6xl mx-auto mb-24 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicServices.map((srv, idx) => {
              const Icon = srv.icon;
              const isActive = activeCard === srv.id;
              return (
                <motion.div
                  key={srv.id}
                  id={srv.id}
                  className="relative h-[360px] rounded-2xl overflow-hidden cursor-pointer border border-navy-900/10 shadow-md group"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />

                  {/* Index number badge */}
                  <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black shadow-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  {/* Hover indicator pill */}
                  <div className="absolute top-4 right-4 rounded-full bg-sky-600/80 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur-sm opacity-90 group-hover:opacity-0 transition-opacity">
                    Hover for Scope
                  </div>

                  {/* Title - visible when collapsed at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 block mb-1">
                      Module 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-black text-white leading-tight">
                      {srv.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/70 line-clamp-2 font-medium">
                      {srv.desc}
                    </p>
                  </div>

                  {/* Details overlay - appears on hover (desktop) or tap (mobile) */}
                  <motion.div
                    className="absolute inset-0 p-6 flex flex-col justify-between bg-navy-card"
                    animate={{
                      opacity: isActive ? 1 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    whileHover={{ opacity: 1, pointerEvents: "auto" }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-600/20 text-sky-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-black uppercase tracking-widest text-copper-400 block">
                            Scope Details
                          </span>
                          <h4 className="text-base font-black text-white leading-tight">
                            {srv.title}
                          </h4>
                        </div>
                      </div>

                      <p className="text-xs text-white/70 font-medium mb-3 leading-relaxed">
                        {srv.desc}
                      </p>

                      <ul className="space-y-2">
                        {srv.details.map((detail, di) => (
                          <li key={di} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-sky-400 mt-0.5 shrink-0" />
                            <span className="text-[11px] text-white/90 font-medium leading-snug">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-copper-400">
                        Applicable Statutory Scope
                      </span>
                      <Link
                        href={`/contact?tab=consultation&module=${srv.id}`}
                        className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-sky-400 hover:text-white transition-colors"
                      >
                        Inquire Scope
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ============ WHY CHOOSE US ============ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Why Choose Us ?
            </h2>
            <div className="mt-4 h-1 w-20 bg-sky-600 mx-auto rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {[
                {
                  icon: IndianRupee,
                  title: "Cost Effective",
                  desc: "Get expert HR and payroll support without the cost and overhead of expanding full-time internal teams.",
                },
                {
                  icon: Users,
                  title: "Practical & Scalable",
                  desc: "Solutions tailored for your business requirements and flexible as your headcount changes.",
                },
                {
                  icon: BarChart3,
                  title: "Structured Execution",
                  desc: "Reliable payroll calendar, timely filing routines, and organized employee records.",
                },
                {
                  icon: ShieldCheck,
                  title: "Experienced Partner",
                  desc: "Dependable operational and statutory compliance support you can trust to keep business moving.",
                },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    className="text-center group"
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-sky-600/10 mb-3 lg:mb-4 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all"
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 lg:w-8 lg:h-8 transition-colors" />
                    </motion.div>
                    <h3 className="text-sm lg:text-lg font-black text-navy-900 mb-1 lg:mb-2 group-hover:text-sky-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-navy-900/60 font-semibold leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* ============ OUR METHODOLOGY (3 STEPS) ============ */}
        <div className="mb-24 max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <SectionLabel>Our Methodology</SectionLabel>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              How It Works in 3 Steps
            </h2>
            <p className="mt-3 text-sm text-navy-900/60 font-semibold">
              A straightforward process designed to integrate smoothly with your business operations.
            </p>
          </div>

          <motion.div
            className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {/* Connecting line between steps (desktop) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-sky-600/40 to-transparent" />

            {methodology.map((m, idx) => (
              <motion.div
                key={idx}
                className="relative flex flex-row md:flex-col items-center md:text-center gap-5 md:gap-0 group"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
              >
                {/* Mobile vertical connecting line */}
                {idx < methodology.length - 1 && (
                  <div className="md:hidden absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-sky-600/30 to-transparent" />
                )}

                {/* Step number circle with glow */}
                <div className="relative z-10 shrink-0">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-sky-600/20 blur-lg md:blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.5,
                    }}
                  />
                  <motion.div
                    className="relative flex h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-full bg-navy-card border-2 border-sky-600/20 text-white shadow-xl"
                    whileHover={{ scale: 1.1, borderColor: "rgba(2,132,199,0.6)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-lg md:text-2xl font-black tracking-tight">
                      {m.step}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="md:mt-7 text-left md:text-center">
                  <h3 className="text-sm md:text-lg font-black text-navy-900 uppercase tracking-tight mb-1 md:mb-3 group-hover:text-sky-700 transition-colors duration-300">
                    {m.title}
                  </h3>
                  <p className="text-xs md:text-sm text-navy-900/60 font-medium leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ============ OPERATIONAL RECORDS & REPORTING DASHBOARD ============ */}
        <div className="mb-24 overflow-hidden rounded-3xl bg-navy-card shadow-2xl border border-navy-900/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <SectionLabel className="text-sky-400">Personnel &amp; Statutory Console</SectionLabel>
              <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Organized Records. On-Time Compliance.
              </h2>
              <p className="mt-4 text-sm text-sage-100/75 font-semibold leading-relaxed">
                Maintain accurate employee documentation, attendance records, and statutory filing calendars
                with complete transparency and audit readiness.
              </p>
              <div className="mt-6 text-white space-y-3">
                {[
                  "Monthly payroll preparation and salary statement distribution",
                  "EPFO (PF) & ESIC contribution calculation and challan submission",
                  "Professional Tax (PT) calculations and state filing support",
                  "Employee documentation, joining, and exit administration",
                  "Attendance, leave records, and personnel file coordination",
                  "Statutory records maintenance and recurring management reports",
                ].map((item, idx) => (
                  <FeatureCheck key={idx} className="text-white">
                    {item}
                  </FeatureCheck>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-navy-800 to-navy-900 p-8 sm:p-12 flex items-center justify-center min-h-[300px] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--color-sky-600)_12%,transparent)_0%,transparent_70%)]" />
              <div className="relative w-full max-w-sm space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Payroll Cycle", value: "Monthly" },
                    { label: "PF Filing", value: "Prior 15th" },
                    { label: "ESIC & PT", value: "100% Filed" },
                  ].map((kpi, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center backdrop-blur-md">
                      <p className="text-[9px] text-sage-100/50 font-bold uppercase tracking-wider">
                        {kpi.label}
                      </p>
                      <p className="text-lg font-black mt-1 text-sky-400">
                        {kpi.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md">
                  <div className="flex justify-between mb-2">
                    <span className="text-[10px] text-sage-100/60 font-bold uppercase tracking-wider">
                      Statutory Compliance Rhythm
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold">On Schedule</span>
                  </div>
                  <div className="h-8 flex items-end gap-1.5">
                    {[45, 60, 55, 75, 70, 85, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-white/5 rounded-sm h-full flex flex-col justify-end overflow-hidden"
                      >
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

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md">
                  <p className="text-[10px] text-sage-100/60 font-bold uppercase tracking-wider mb-2">
                    Core Operational Domains
                  </p>
                  <div className="space-y-2">
                    {[
                      { domain: "Payroll & Salary Statements", pct: 100 },
                      { domain: "Provident Fund (PF) & EPFO", pct: 100 },
                      { domain: "ESI & Professional Tax (PT)", pct: 100 },
                      { domain: "Personnel Records & Lifecycle", pct: 100 },
                    ].map((d, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-[10px] mb-0.5">
                          <span className="text-sage-100/80 font-semibold">{d.domain}</span>
                          <span className="text-emerald-400 font-bold">Ready</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-sky-500 rounded-full" style={{ width: "100%" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============ CLOSING CALL TO ACTION ============ */}
        <motion.div
          className="shadow-xl text-center max-w-3xl mx-auto bg-cream-50 border border-sky-600/20 rounded-3xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <SectionLabel>Operational Support</SectionLabel>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
            Ready to Have Your Support Partner Today
          </h2>
          <p className="mt-4 text-sm text-navy-900/65 font-semibold max-w-xl mx-auto leading-relaxed">
            Contact Hraize to discuss your specific HR, payroll, and personnel administration
            requirements and service delivery arrangements.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onBookCall}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 text-white hover:bg-sky-700 px-8 py-3.5 text-xs font-black tracking-wider uppercase shadow-lg shadow-sky-600/20 transition-all cursor-pointer"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              href="/contact?tab=quote&service=hr"
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white px-7 py-3.5 text-xs font-bold text-navy-900 hover:bg-cream-100 shadow-sm transition-all"
            >
              Get a Service Quote
              <ArrowUpRight className="h-4 w-4 text-sky-600" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
