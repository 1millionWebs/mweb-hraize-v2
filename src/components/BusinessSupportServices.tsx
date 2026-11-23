import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  FileSpreadsheet, Receipt, Clock, BarChart3,
  CheckCircle2, ArrowRight, ShieldCheck, TrendingUp,
  FileText, DollarSign, RefreshCw, Send
} from "lucide-react";
import { SectionLabel, FeatureCheck, StepLine } from "./UIElements";

interface BusinessSupportServicesProps {
  onGetStarted?: () => void;
}

export const BusinessSupportServices: React.FC<BusinessSupportServicesProps> = ({
  onGetStarted,
}) => {
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

  const [activeCard, setActiveCard] = useState<string | null>("invoicing");

  const coreServices = [
    {
      id: "invoicing",
      title: "Invoice Tracking & Management",
      desc: "End-to-end invoice lifecycle tracking to ensure zero missed billings, GST compliance, and audit readiness.",
      icon: Receipt,
      details: [
        "Systematic invoice generation & verification",
        "GST & tax invoice compliance validation",
        "Discrepancy resolution and credit note management",
        "Digital repository & version-controlled archive",
        "Vendor and client billing reconciliation"
      ]
    },
    {
      id: "receivables",
      title: "Receivables Administration",
      desc: "Structured tracking of outstanding accounts to minimize delays and optimize working capital.",
      icon: DollarSign,
      details: [
        "Accounts receivable aging ledger maintenance",
        "Customer ledger balance confirmations",
        "Unallocated payment matching & clearing",
        "Bad-debt risk identification & escalation",
        "Weekly receivables health reports"
      ]
    },
    {
      id: "followups",
      title: "Payment Follow-ups & Collections",
      desc: "Courteous, relationship-preserving communication workflows that speed up client remittances.",
      icon: RefreshCw,
      details: [
        "Automated & personalized reminder cadence",
        "Payment milestone alerts before due dates",
        "Multi-channel follow-ups (Email, Call notes)",
        "Dispute logging & coordination with account leads",
        "Collection logs with timestamped audit trails"
      ]
    },
    {
      id: "reporting",
      title: "Operational & MIS Reports",
      desc: "Timely, leadership-ready reporting that gives complete visibility into operational cash flow and performance.",
      icon: BarChart3,
      details: [
        "Days Sales Outstanding (DSO) trend reports",
        "Cash flow forecasts & collection estimates",
        "Weekly operations summaries for leadership",
        "Department-level expense & billing trackers",
        "Custom executive dashboards (Excel / Google Sheets / BI)"
      ]
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Process Discovery & Handover",
      desc: "We analyze your existing billing flows, accounting software access, customer communication style, and SLA expectations.",
      duration: "Week 1"
    },
    {
      step: "02",
      title: "Standard Operating Procedures (SOP)",
      desc: "We establish documented checklists, reminder templates, escalation paths, and reconciliation routines customized to your business.",
      duration: "Week 2"
    },
    {
      step: "03",
      title: "Daily & Weekly Operations",
      desc: "Our dedicated specialists handle daily invoice entries, client follow-ups, receivables matching, and dispute escalations.",
      duration: "Ongoing"
    },
    {
      step: "04",
      title: "Executive MIS & Continuous Review",
      desc: "Regular dashboard delivery and reviews ensure your working capital stays robust and operations remain friction-free.",
      duration: "Monthly"
    }
  ];

  const businessBenefits = [
    {
      title: "Reduce Days Sales Outstanding (DSO)",
      desc: "Consistent, professional payment follow-ups shorten cash cycles, keeping working capital liquid.",
      stat: "25-35%",
      statLabel: "Faster collections"
    },
    {
      title: "Eliminate Billing Leakage",
      desc: "Meticulous tracking ensures every delivered service, milestone, and reimbursable is billed promptly.",
      stat: "100%",
      statLabel: "Tracking accuracy"
    },
    {
      title: "Leadership Focus on Core Growth",
      desc: "Free your founders, project heads, and sales teams from chasing invoices and spreadsheets.",
      stat: "15+ hrs",
      statLabel: "Saved weekly per leader"
    }
  ];

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Business Administration</SectionLabel>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            Invoice & Receivables Administration
          </h1>
          <p className="mt-4 text-base sm:text-lg text-navy-900/70 font-semibold leading-relaxed">
            Sales invoice register maintenance, due-date tracking, customer payment reminders, outstanding follow-ups, and periodic receivables reporting.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-navy-900/60 font-medium bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/20">
            <span>This is administrative support, not independent accounting, audit, tax or legal debt recovery.</span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?tab=business-support"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-sky-700 transition-all duration-200"
            >
              Request a Service Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white/70 px-7 py-3 text-sm font-bold text-navy-900 hover:bg-white transition-all duration-200"
            >
              Explore Offerings
            </a>
          </div>
        </div>

        {/* Benefits Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {businessBenefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl bg-white border border-sky-600/20 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-3xl font-black text-sky-600 tracking-tight">{item.stat}</span>
                <span className="text-[11px] font-black uppercase text-navy-900/50">{item.statLabel}</span>
              </div>
              <h3 className="text-base font-extrabold text-navy-900 mb-2">{item.title}</h3>
              <p className="text-xs text-navy-900/60 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Services Grid */}
        <div id="services" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>What We Deliver</SectionLabel>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Essential Back-Office Support Built for Scale
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-navy-900/60 font-semibold">
              Reliable administrative workflows handled by experienced professionals without full-time headcount overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={srv.id}
                  id={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-3xl bg-white border border-sky-600/20 p-8 shadow-sm hover:border-sky-600/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600/10 text-sky-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-sky-600">Pillar 0{idx + 1}</span>
                        <h3 className="text-lg font-black text-navy-900">{srv.title}</h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-navy-900/70 font-medium leading-relaxed mb-6">
                      {srv.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-gray-100">
                      {srv.details.map((detail, dIdx) => (
                        <FeatureCheck key={dIdx} className="text-navy-900/80">
                          {detail}
                        </FeatureCheck>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href={`/contact?tab=business-support&service=${srv.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-sky-600 hover:text-sky-700 uppercase tracking-wider group"
                    >
                      Inquire About This Service
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Methodology / How It Works */}
        <div className="mb-24 rounded-3xl bg-navy-card text-white p-8 sm:p-12 border border-sky-600/40">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel className="text-sky-400">Our Operational Workflow</SectionLabel>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              How We Integrate With Your Business
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-sage-100/70 font-semibold">
              Seamless onboarding within days, clear ownership, and zero disruption to your daily client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {methodology.map((step, idx) => (
              <div key={idx} className="relative flex flex-col justify-between rounded-2xl bg-white/5 border border-white/10 p-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-sky-400">{step.step}</span>
                    <span className="text-[10px] font-bold text-copper-400 bg-white/10 px-2 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-sm font-black uppercase text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-sage-100/70 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-navy-900 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Ready to take invoice & receivables headaches off your plate?
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed font-semibold">
              Partner with Hraize to establish organized receivables tracking, timely invoice follow-ups, and clear operational reporting.
            </p>
          </div>
          <Link
            href="/contact?tab=business-support"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-black text-navy-900 hover:bg-cream-50 shadow-lg transition-all"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4 text-sky-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};
