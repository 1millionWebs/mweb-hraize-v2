"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  FileSpreadsheet,
  Clock,
  Send,
  PhoneCall,
  CheckCircle2,
  BarChart3,
  CheckCircle,
  XCircle,
  ShieldCheck,
  Building2,
  Users,
  Check,
  ArrowRight,
  ArrowUpRight,
  Info,
  Sparkles,
  IndianRupee,
  Layers,
} from "lucide-react";
import { SectionLabel, FeatureCheck } from "./UIElements";

interface BusinessSupportServicesProps {
  onGetStarted?: () => void;
}

const STATUTORY_DISCLAIMER =
  "This is administrative support, not independent accounting, audit, tax or legal debt recovery.";

export const BusinessSupportServices: React.FC<BusinessSupportServicesProps> = () => {
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

  const supportModules = [
    {
      id: "sales-register",
      title: "Sales Invoice Register Maintenance",
      desc: "Accurate logging, categorization, and ledger maintenance of every outbound customer invoice.",
      icon: FileSpreadsheet,
      image: "/reporting.png",
      details: [
        "Sales invoice register maintenance and cataloging.",
        "Invoice number, customer, and date verification.",
        "Payment terms and credit period logging.",
        "Centralized invoice register accessible to your team.",
        "Systematic record indexing for audit and finance reviews.",
      ],
    },
    {
      id: "due-dates",
      title: "Invoice Due-Date Tracking",
      desc: "Proactive tracking of credit periods, maturity timelines, and payment milestone dates.",
      icon: Clock,
      image: "/services-training.png",
      details: [
        "Invoice due-date tracking across all client accounts.",
        "Milestone alerts prior to payment due dates.",
        "Aging category classification (Current, 30+, 60+ days).",
        "Credit period monitoring per customer agreements.",
        "Weekly overdue status reviews and schedule syncs.",
      ],
    },
    {
      id: "payment-reminders",
      title: "Customer Payment Reminders",
      desc: "Polite, systematic reminder notices dispatched on agreed dates matching your company tone.",
      icon: Send,
      image: "/partners.png",
      details: [
        "Customer payment reminders sent on agreed schedules.",
        "Professional email and notification dispatches.",
        "Statement of account and invoice attachment coordination.",
        "Coordination with customer accounts and finance desks.",
        "Documented communication trail for every invoice.",
      ],
    },
    {
      id: "follow-ups",
      title: "Outstanding Payment Follow-ups",
      desc: "Consistent, structured follow-ups for overdue balances while protecting customer relationships.",
      icon: PhoneCall,
      image: "/workforce-planning.png",
      details: [
        "Outstanding payment follow-ups conducted systematically.",
        "Structured escalation routines based on agreed protocols.",
        "Customer feedback and payment commitment logging.",
        "Timely coordination with your sales and account managers.",
        "Administrative tracking of contested or queried billing.",
      ],
    },
    {
      id: "status-updates",
      title: "Payment Status Updates & Confirmation",
      desc: "Immediate ledger updates and status markings based on client-verified bank receipts.",
      icon: CheckCircle2,
      image: "/services-hr.png",
      details: [
        "Payment status updates based on client confirmation.",
        "Real-time ledger marking of cleared and pending receipts.",
        "Partial payment tracking and remaining balance calculations.",
        "Payment confirmation filing and record updates.",
        "Discrepancy notifications shared with your accounts team.",
      ],
    },
    {
      id: "overdue-reports",
      title: "Periodic Receivables & Overdue Reports",
      desc: "Executive weekly and monthly MIS reports on outstanding balances, cash inflows, and aging.",
      icon: BarChart3,
      image: "/documentation.png",
      details: [
        "Periodic receivables and overdue reports.",
        "Coordination with the client's accounts team for unmatched payments.",
        "Aging summaries, collection metrics, and trend overviews.",
        "High-priority overdue accounts highlighted for review.",
        "Audit-ready administrative reporting packages.",
      ],
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Ingest & Log",
      desc: "We receive your issued sales invoices, record payment terms, and establish your maintained sales register.",
    },
    {
      step: "02",
      title: "Track & Remind",
      desc: "We monitor due dates and dispatch polite, pre-scheduled reminders and follow-ups on agreed cadences.",
    },
    {
      step: "03",
      title: "Update & Report",
      desc: "Upon your confirmation, we update payment statuses, flag unmatched items, and deliver weekly overdue reports.",
    },
  ];

  const comparisonRows = [
    {
      feature: "Register Maintenance",
      hraize: "Daily maintained digital register with verified dates & terms",
      manual: "Scattered spreadsheets, missing files, and duplicate entries",
    },
    {
      feature: "Due-Date Monitoring",
      hraize: "Proactive automated calendar with 30/60/90-day aging buckets",
      manual: "Reactive checking only after cash flow bottlenecks occur",
    },
    {
      feature: "Customer Reminders",
      hraize: "Polite, scheduled dispatches preserving customer goodwill",
      manual: "Irregular, ad-hoc emails or missed follow-up deadlines",
    },
    {
      feature: "Unmatched Receipts",
      hraize: "Coordinated directly with your finance team for fast reconciliation",
      manual: "Unidentified payments sitting unallocated for months",
    },
    {
      feature: "Overdue Reporting",
      hraize: "Periodic executive MIS reports delivered on fixed schedules",
      manual: "Time-consuming, stressful month-end reporting crunch",
    },
  ];

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER SECTION ============ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Operational Support</SectionLabel>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight leading-[1.08]">
            Invoice &amp; Receivables
            <br />
            <span className="text-sky-600">Administration</span>
          </h1>
          <p className="mt-3 text-sm font-bold text-navy-900/50 uppercase tracking-[0.12em]">
            Sales Register · Due-Date Tracking · Customer Follow-ups · MIS Reports
          </p>
          <p className="mt-4 text-base sm:text-lg text-navy-900/70 font-semibold leading-relaxed">
            Systematic back-office administrative support to track sales invoices, monitor aging,
            execute polite customer reminders, and deliver periodic receivables reports.
          </p>

          {/* Statutory Boundary Pill */}
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
              href="/contact?tab=quote&service=business-support"
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
            {supportModules.map((srv, idx) => {
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
                            Service Scope
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
                        Administrative Workflow
                      </span>
                      <Link
                        href={`/contact?tab=consultation&module=${srv.id}`}
                        className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-sky-400 hover:text-white transition-colors"
                      >
                        Inquire Desk
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ============ WHY CHOOSE OUR RECEIVABLES DESK ============ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Why Work With Our Receivables Desk ?
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
                  title: "DSO & Cash Flow Focus",
                  desc: "Shorten collection cycles and minimize overdue receivables through systematic, timely reminder cadences.",
                },
                {
                  icon: ShieldCheck,
                  title: "Administrative Discipline",
                  desc: "Prevent invoices from falling through the cracks with a maintained, structured digital register.",
                },
                {
                  icon: Users,
                  title: "Relationship-Friendly",
                  desc: "Polite, courteous communication that protects client goodwill while securing payment commitments.",
                },
                {
                  icon: Building2,
                  title: "Zero Headcount Overhead",
                  desc: "Access a dedicated billing and receivables desk without the cost of hiring and managing internal billing clerks.",
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

        {/* ============ 3-STEP RECEIVABLES WORKFLOW ============ */}
        <div className="mb-24 max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <SectionLabel>Process Architecture</SectionLabel>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Our 3-Step Receivables Workflow
            </h2>
            <p className="mt-3 text-sm text-navy-900/60 font-semibold">
              A structured routine designed to integrate smoothly with your existing sales and accounting operations.
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

        {/* ============ RECEIVABLES OVERVIEW & AGING METRICS CONSOLE ============ */}
        <div className="mb-24 overflow-hidden rounded-3xl bg-navy-card shadow-2xl border border-navy-900/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <SectionLabel className="text-sky-400">Receivables Oversight</SectionLabel>
              <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Clear Visibility. Systematic Inflows.
              </h2>
              <p className="mt-4 text-sm text-sage-100/75 font-semibold leading-relaxed">
                Empower your leadership with real-time tracking of aging schedules, cleared payments,
                and overdue balances — keeping your business moving smoothly.
              </p>
              <div className="mt-6 text-white space-y-3">
                {[
                  "Sales invoice register maintenance and cataloging",
                  "Invoice due-date tracking and aging category monitoring",
                  "Customer payment reminders sent on agreed schedules",
                  "Outstanding payment follow-ups and escalation logs",
                  "Payment status updates based on client confirmation",
                  "Periodic receivables and overdue reports for executive review",
                  "Coordination with your accounts team for unmatched payments",
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
                    { label: "Register Status", value: "Active" },
                    { label: "Due Tracking", value: "Daily" },
                    { label: "Aging SLA", value: "30-90d" },
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
                      Overdue Tracking Rhythm
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold">Maintained Daily</span>
                  </div>
                  <div className="h-8 flex items-end gap-1.5">
                    {[50, 65, 45, 80, 70, 90, 85].map((h, i) => (
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
                    Operational Deliverables
                  </p>
                  <div className="space-y-2">
                    {[
                      { domain: "Sales Invoice Register Maintenance", pct: 100 },
                      { domain: "Due-Date Tracking & Aging Buckets", pct: 100 },
                      { domain: "Scheduled Customer Payment Reminders", pct: 100 },
                      { domain: "Periodic Overdue & Receivables Reports", pct: 100 },
                    ].map((d, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-[10px] mb-0.5">
                          <span className="text-sage-100/80 font-semibold">{d.domain}</span>
                          <span className="text-emerald-400 font-bold">Standard</span>
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

        {/* ============ TRADITIONAL AD-HOC VS HRAIZE DESK ============ */}
        <div className="mb-24 bg-white border shadow-md border-sky-600/20 rounded-3xl p-6 sm:p-10 overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Operational Comparison</SectionLabel>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Ad-Hoc In-House Handling vs. Hraize Desk
            </h2>
            <p className="mt-2 text-xs text-navy-900/60 font-bold uppercase tracking-wider">
              Comparing receivables management practices side-by-side.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-sky-600/30">
                  <th className="py-4 px-4 text-xs font-black uppercase text-navy-900 tracking-wider w-[22%]">
                    Dimension
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase text-sky-700 tracking-wider bg-sky-600/10 rounded-t-xl w-[40%]">
                    Hraize Dedicated Desk
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase text-navy-900/40 tracking-wider w-[38%]">
                    Ad-Hoc In-House Handling
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-600/10 font-medium">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-cream-50/50 transition-colors">
                    <td className="py-4 px-4 text-xs font-black text-navy-900 uppercase">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-xs text-navy-900 bg-sky-600/5 border-x border-sky-600/20 font-bold">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{row.hraize}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-xs text-navy-900/50">
                      <div className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                        <span>{row.manual}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <SectionLabel>Administrative Support</SectionLabel>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
            Ready to Streamline Your Receivables?
          </h2>
          <p className="mt-4 text-sm text-navy-900/65 font-semibold max-w-xl mx-auto leading-relaxed">
            Contact Hraize to discuss your invoice register, due-date tracking, customer reminder schedules,
            and periodic overdue reporting arrangements.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?tab=consultation"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 text-white hover:bg-sky-700 px-8 py-3.5 text-xs font-black tracking-wider uppercase shadow-lg shadow-sky-600/20 transition-all cursor-pointer"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            {/* <Link
              href="/contact?tab=quote&service=business-support"
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
