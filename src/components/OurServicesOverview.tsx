import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Shield, Users, FileText, Globe, ArrowRight,
  CheckCircle2, Sparkles, Building2, TrendingUp, Layers
} from "lucide-react";
import { SectionLabel, FeatureCheck } from "./UIElements";

export const OurServicesOverview: React.FC = () => {
  const services = [
    {
      id: "hr-payroll",
      number: "01",
      title: "HR & Payroll Services",
      tagline: "Structure Your People Operations & Stay Compliant",
      description: "Payroll processing, PF, ESI, Professional Tax and employee administration.",
      href: "/hr-services",
      contactTab: "hr",
      icon: Shield,
      accentColor: "from-sky-600 to-sky-700",
      highlights: [
        "End-to-end payroll processing & salary disbursement schedules",
        "PF, ESI & statutory compliance filing and management",
        "Professional Tax (PT) calculations & reporting across Indian states",
        "Employee records, documentation & lifecycle administration",
        "HR policy manuals, employee handbooks & compliance frameworks",
        "Workforce metrics, attrition reporting & leadership dashboards"
      ]
    },
    {
      id: "recruitment",
      number: "02",
      title: "Recruitment Solutions",
      tagline: "High-Caliber Talent Acquisition with Guarantees",
      description: "Permanent and contract hiring, sourcing, screening and interview coordination.",
      href: "/recruitment",
      contactTab: "recruitment",
      icon: Users,
      accentColor: "from-navy-900 to-sky-800",
      highlights: [
        "Permanent recruitment for core and leadership roles",
        "Contract & temporary staffing for dynamic workforce needs",
        "Multi-channel candidate sourcing & technical screening",
        "Interview coordination, candidate coaching & feedback management",
        "60-day replacement guarantee on permanent placements",
        "Structured salary benchmarking & offer negotiations"
      ]
    },
    {
      id: "business-support",
      number: "03",
      title: "Business Administration Support",
      tagline: "Streamline Daily Operations & Accelerate Cash Flow",
      description: "Invoice tracking, receivables administration, payment follow-ups and operational reports.",
      href: "/business-support",
      contactTab: "business-support",
      icon: FileText,
      accentColor: "from-copper-500 to-amber-600",
      highlights: [
        "Invoice generation, verification & systematic tracking",
        "Accounts receivable aging administration & ledger reconciliation",
        "Professional, courteous payment follow-ups & reminder cadence",
        "Dispute logging, escalation workflows & resolution tracking",
        "Days Sales Outstanding (DSO) metrics & collection forecasting",
        "Weekly & monthly executive operational reports and MIS dashboards"
      ]
    },
    {
      id: "website-solutions",
      number: "04",
      title: "Website Design & Development",
      tagline: "Modern Web Experiences That Drive Commercial Growth",
      description: "Business websites, redesign, landing pages and maintenance through our technology partner.",
      href: "/website-solutions",
      contactTab: "website-solutions",
      icon: Globe,
      accentColor: "from-sky-500 to-indigo-600",
      highlights: [
        "Bespoke corporate and business website design & development",
        "Website redesign & modernization with high-speed performance",
        "High-converting campaign landing pages optimized for lead generation",
        "Mobile-first responsive architecture & clean SEO foundation",
        "Ongoing technical maintenance, security monitoring & cloud backups",
        "Delivered with experienced engineering through our technology partner"
      ]
    }
  ];

  const whyPartner = [
    {
      title: "Single Operational Partner",
      desc: "Consolidate HR, payroll, hiring, business administration, and digital support with one accountable team."
    },
    {
      title: "Reduced Fixed Overhead",
      desc: "Gain experienced execution without adding heavy permanent internal headcount or administrative bloat."
    },
    {
      title: "SLA-Driven Consistency",
      desc: "Clear timelines, predictable reporting cycles, and continuous communication to keep business moving."
    },
    {
      title: "Technology Backed",
      desc: "Leveraging proven digital workflows, data dashboards, and trusted technical partnerships for reliable outcomes."
    }
  ];

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Hraize Capabilities</SectionLabel>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-navy-900/70 font-semibold leading-relaxed">
            Hraize provides recruitment, payroll and HR administration, business support services, and website solutions to organisations across India. We help businesses manage essential operational requirements through experienced service delivery and trusted technology partnerships.
          </p>
        </div>

        {/* Services Cards List */}
        <div className="space-y-12 mb-24">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const isEven = idx % 2 === 1;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-3xl bg-white border border-sky-600/20 shadow-md overflow-hidden hover:border-sky-600/40 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Column / Summary */}
                  <div className="lg:col-span-5 p-8 sm:p-10 bg-gradient-to-b from-cream-50 to-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-black tracking-widest uppercase text-sky-600 bg-sky-600/10 px-3 py-1 rounded-full">
                          Service {srv.number}
                        </span>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600/10 text-sky-600">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight leading-snug">
                        {srv.title}
                      </h2>
                      <p className="mt-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
                        {srv.tagline}
                      </p>

                      <p className="mt-4 text-sm text-navy-900/70 font-medium leading-relaxed">
                        {srv.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-3">
                      <Link
                        href={srv.href}
                        className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-2.5 text-xs font-black text-white shadow-sm hover:bg-sky-700 transition-all"
                      >
                        Explore Service
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href={`/contact?tab=${srv.contactTab}`}
                        className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 px-5 py-2.5 text-xs font-bold text-navy-900 hover:bg-cream-100 transition-all"
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </div>

                  {/* Right Column / Deliverables */}
                  <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="text-xs font-black tracking-widest uppercase text-navy-900/50 mb-6">
                        Key Deliverables & Scope
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {srv.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-3">
                            <div className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-sky-600/10 text-sky-600 flex items-center justify-center">
                              <CheckCircle2 className="h-3 w-3" />
                            </div>
                            <span className="text-xs font-semibold text-navy-900/80 leading-relaxed">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-navy-900/50 font-medium">
                      <span>Designed for SMEs & growing organisations across India</span>
                      <Link
                        href={srv.href}
                        className="text-sky-600 font-bold hover:underline inline-flex items-center gap-1"
                      >
                        Read full scope →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why Partner Strip */}
        <div className="mb-24 rounded-3xl bg-navy-card text-white p-8 sm:p-12 border border-sky-600/40">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel className="text-sky-400">Why Hraize</SectionLabel>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              The Strategic Advantage for Your Operations
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-sage-100/70 font-semibold">
              Practical support designed to reduce friction, protect cash flow, and build high-performance teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {whyPartner.map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <span className="text-2xl font-black text-sky-400 block mb-2">0{idx + 1}</span>
                <h3 className="text-sm font-black uppercase text-white mb-2">{item.title}</h3>
                <p className="text-xs text-sage-100/70 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-navy-900 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Looking for tailored operational or digital support?
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed font-semibold">
              Speak with our leadership team today to review your requirements across HR & payroll, recruitment, administration, or website solutions.
            </p>
          </div>
          <Link
            href="/contact?tab=general"
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
