"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  Users,
  Layers,
  ShieldCheck,
  BarChart3,
  FileText,
  Check,
  ArrowRight,
  ArrowUpRight,
  IndianRupee,
  Info,
  Calculator,
  FileSpreadsheet,
  UserCheck,
  Building2,
  Scale,
  FolderKanban,
  Clock,
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

  const leftServices = [
    {
      id: "payroll",
      number: "01",
      title: "Monthly Payroll Preparation & Processing",
      desc: "Complete gross-to-net salary computation, statutory deductions, reimbursement processing, and timely bank disbursement scheduling.",
      icon: Calculator,
    },
    {
      id: "payslips",
      number: "02",
      title: "Salary Statements & Payslip Coordination",
      desc: "Detailed monthly salary registers, structured pay breakdown statements, and confidential digital payslip distribution for employees.",
      icon: FileSpreadsheet,
    },
    {
      id: "joining-exit",
      number: "03",
      title: "Employee Joining & Exit Administration",
      desc: "Structured onboarding documentation, joining protocols, clearance checklists, and full-and-final settlement execution.",
      icon: UserCheck,
    },
    {
      id: "pf",
      number: "04",
      title: "Provident Fund (PF) & EPFO Filing Support",
      desc: "Monthly ECR challan generation, unified portal administration, UAN generation, KYC updates, and statutory compliance filing.",
      icon: ShieldCheck,
    },
    {
      id: "esi-pt",
      number: "05",
      title: "ESI Administration & Filing Support",
      desc: "Monthly ESIC contribution calculations, online portal challan submissions, member registration, and periodic statutory returns.",
      icon: Building2,
    },
    {
      id: "pt",
      number: "06",
      title: "Professional Tax (PT) Calculations & Filing",
      desc: "Accurate state-specific PT slab assessments, salary deduction management, and timely periodic statutory challan submissions.",
      icon: Scale,
    },
  ];

  const rightServices = [
    {
      id: "statutory-records",
      number: "07",
      title: "Employee Data & Statutory Record Maintenance",
      desc: "Centralized personnel master databases and audit-ready statutory register records maintained under applicable labour regulations.",
      icon: FolderKanban,
    },
    {
      id: "documentation",
      number: "08",
      title: "Employee Documentation",
      desc: "Standardized employment contracts, offer letters, NDA agreements, verification files, and formal service certificate issuance.",
      icon: FileText,
    },
    {
      id: "records",
      number: "09",
      title: "Personnel Data Maintenance",
      desc: "Regular updates to personnel files, emergency contact records, banking data, and secure digital profile archives.",
      icon: Users,
    },
    {
      id: "attendance",
      number: "10",
      title: "Attendance & Leave Records Coordination",
      desc: "Shift schedule monitoring, biometric attendance syncing, leave quota administration, and holiday calendar management.",
      icon: Clock,
    },
    {
      id: "lifecycle",
      number: "11",
      title: "Employee Lifecycle Administration",
      desc: "Lifecycle transition administration including probation reviews, promotions, internal role transfers, and policy updates.",
      icon: Layers,
    },
    {
      id: "compliance",
      number: "12",
      title: "HR Reports, Compliance Support",
      desc: "Monthly workforce headcount summaries, statutory inspection dossiers, attrition tracking, and ongoing compliance documentation support.",
      icon: BarChart3,
    },
  ];

  const pairedRows = leftServices.map((left, idx) => ({
    left,
    right: rightServices[idx],
  }));

  const allServices = [...leftServices, ...rightServices];

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
            {/* <Link
              href="/contact?tab=consultation"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3 text-sm font-black text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition-all duration-200"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link> */}
            <Link
              href="/contact?tab=quote&service=hr"
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white px-6 py-3 text-sm font-bold text-navy-900 shadow-sm hover:bg-cream-50 transition-all duration-200"
            >
              Get a Service Quote
              <ArrowUpRight className="h-4 w-4 text-sky-600" />
            </Link>
          </div>
        </div>

        {/* ============ 12 SCOPE SERVICES (6 + 6) CENTRAL INFOGRAPHIC ============ */}
        <div className="max-w-6xl mx-auto mb-24 px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-600">
              Complete Service Scope
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              HR, Payroll &amp; Administrative Capabilities
            </h2>
            <p className="mt-3 text-sm text-navy-900/65 font-medium max-w-2xl mx-auto leading-relaxed">
              Systematic operational execution across your payroll cycle, statutory filings, employee documentation, and workforce records.
            </p>
          </div>

          {/* DESKTOP (6 + 6) CENTRAL SPINE LAYOUT */}
          <div className="hidden md:block relative">
            {/* Subtle center spine track */}
            <div className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-sky-600/10 via-sky-600/30 to-sky-600/10 pointer-events-none" />

            <div className="space-y-6 lg:space-y-8">
              {pairedRows.map((pair, rowIdx) => {
                const LeftIcon = pair.left.icon;
                const RightIcon = pair.right.icon;

                return (
                  <div key={rowIdx} className="grid grid-cols-2 gap-x-8 lg:gap-x-12 items-center">
                    {/* LEFT ITEM (Text right-aligned, Icon on right) */}
                    <div
                      id={pair.left.id}
                      className="group flex items-center justify-end gap-5 text-right p-3.5 rounded-2xl transition-all duration-200 hover:bg-white/80"
                    >
                      <div className="max-w-md">
                        <h3 className="text-base lg:text-lg font-black text-navy-900 group-hover:text-sky-600 transition-colors leading-snug">
                          {pair.left.title}
                        </h3>
                        <p className="mt-1 text-xs lg:text-sm text-navy-900/65 font-medium leading-relaxed">
                          {pair.left.desc}
                        </p>
                      </div>

                      <div className="relative shrink-0 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl bg-navy-card border border-sky-600/25 text-sky-400 shadow-md group-hover:bg-sky-600 group-hover:border-sky-500 group-hover:text-white group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-sky-600/20 transition-all duration-300">
                        <LeftIcon className="h-7 w-7 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* RIGHT ITEM (Icon on left, Text left-aligned) */}
                    <div
                      id={pair.right.id}
                      className="group flex items-center justify-start gap-5 text-left p-3.5 rounded-2xl transition-all duration-200 hover:bg-white/80"
                    >
                      <div className="relative shrink-0 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl bg-navy-card border border-sky-600/25 text-sky-400 shadow-md group-hover:bg-sky-600 group-hover:border-sky-500 group-hover:text-white group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-sky-600/20 transition-all duration-300">
                        <RightIcon className="h-7 w-7 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      <div className="max-w-md">
                        <h3 className="text-base lg:text-lg font-black text-navy-900 group-hover:text-sky-600 transition-colors leading-snug">
                          {pair.right.title}
                        </h3>
                        <p className="mt-1 text-xs lg:text-sm text-navy-900/65 font-medium leading-relaxed">
                          {pair.right.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE ADAPTIVE VIEW (< md) */}
          <div className="md:hidden space-y-4">
            {allServices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  id={item.id}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-navy-900/10 shadow-sm"
                >
                  <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-card border border-sky-600/25 text-sky-400 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-black text-navy-900 leading-snug mt-0.5">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-navy-900/65 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
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
            {/* <Link
              href="/contact?tab=quote&service=hr"
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white px-7 py-3.5 text-xs font-bold text-navy-900 hover:bg-cream-100 shadow-sm transition-all"
            >
              Get a Service Quote
              <ArrowUpRight className="h-4 w-4 text-sky-600" />
            </Link> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
