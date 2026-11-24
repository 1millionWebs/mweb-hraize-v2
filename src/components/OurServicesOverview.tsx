import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield, Users, FileSpreadsheet, Globe, UserCheck,
  ArrowRight, CheckCircle2, Info, Building2, Check,
  Clock, ShieldCheck, Sparkles, Layers, Award
} from "lucide-react";
import { SectionLabel, FeatureCheck } from "./UIElements";

export const OurServicesOverview: React.FC = () => {
  const servicePillars = [
    {
      id: "hr-payroll",
      number: "01",
      title: "HR, Payroll Services & Administration",
      subtitle: "End-to-End Payroll Processing, Statutory Compliance & Personnel Administration",
      href: "/hr-services",
      contactTab: "hr",
      image: "/services-hr.png",
      badgeText: "Statutory & Records Ready",
      statLabel: "100% On-Time Execution",
      icon: Shield,
      bullets: [
        "Monthly payroll preparation and processing.",
        "Salary statements and payslip coordination.",
        "Employee joining and exit administration.",
        "Provident Fund (PF) administration and EPFO filing support.",
        "Employee State Insurance (ESI) administration and filing support.",
        "Professional Tax (PT) calculations and filing support.",
        "Employee data and statutory record maintenance.",
        "Employee documentation.",
        "Personnel data maintenance.",
        "Attendance and leave records coordination.",
        "Employee lifecycle administration.",
        "HR reports and documentation.",
        "Compliance records and documentation support."
      ],
      note: "Service scope will be agreed with each client and will reflect the applicable statutory requirements."
    },
    {
      id: "recruitment",
      number: "02",
      title: "Recruitment & Staffing Services",
      subtitle: "Vetted Talent Acquisition for Permanent & Contract Roles",
      href: "/recruitment",
      contactTab: "recruitment",
      image: "/services-recruitment.png",
      badgeText: "60-Day Replacement Guarantee",
      statLabel: "Pre-screened Candidates",
      icon: Users,
      bullets: [
        "Permanent recruitment for core and leadership roles.",
        "Contract & temporary staffing solutions.",
        "Candidate sourcing, screening and technical evaluation.",
        "Interview coordination and comprehensive candidate briefing.",
        "Bulletproof candidate preparation with 60-day replacement guarantee.",
        "Offer negotiation support and onboarding alignment."
      ],
      note: "Quality-focused hiring tailored to your business culture and technical requirements."
    },
    {
      id: "invoice-receivables",
      number: "03",
      title: "Invoice & Receivables Administration",
      subtitle: "Back-Office Invoicing, Due-Date Tracking & Collections Follow-up",
      href: "/business-support",
      contactTab: "business-support",
      image: "/documentation.png",
      badgeText: "DSO & Cash Flow Support",
      statLabel: "Structured Ledger Tracking",
      icon: FileSpreadsheet,
      bullets: [
        "Sales invoice register maintenance.",
        "Invoice due-date tracking.",
        "Customer payment reminders.",
        "Outstanding payment follow-ups.",
        "Payment status updates based on client confirmation.",
        "Periodic receivables and overdue reports.",
        "Coordination with the client's accounts team for unmatched payments."
      ],
      note: "This is administrative support, not independent accounting, audit, tax or legal debt recovery."
    },
    {
      id: "digital-it-services",
      number: "04",
      title: "Digital IT Services",
      subtitle: "Complete Digital & Technology Solutions Delivered with Our Partner",
      href: "/website-solutions",
      contactTab: "website-solutions",
      image: "/it-web-dev.jpg",
      badgeText: "Tech Partner Delivered",
      statLabel: "Scalable & Modern Stack",
      icon: Globe,
      bullets: [
        "Website development & SEO.",
        "Mobile app development.",
        "Digital Marketing.",
        "ERP solutions.",
        "Infrastructure & Cloud support."
      ],
      note: "Delivered in collaboration with Hraize's technology development partner."
    }
  ];

  const valueProps = [
    {
      value: "04",
      label: "Core Service Pillars Under One Roof",
      icon: Layers
    },
    {
      value: "100%",
      label: "Statutory & Operational Focus",
      icon: ShieldCheck
    },
    {
      value: "60-Day",
      label: "Candidate Replacement Guarantee",
      icon: Award
    },
    {
      value: "Dedicated",
      label: "Technology Development Partner",
      icon: Globe
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100 py-16">
      {/* Background ambient lighting matching Hero */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-sky-600/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] h-[450px] w-[450px] rounded-full bg-copper-400/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Hraize Capabilities</SectionLabel>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            Our Services
          </h1>
          <p className="mt-3 text-lg sm:text-xl font-bold text-sky-700">
            Business support designed around your requirements.
          </p>
          <p className="mt-4 text-base sm:text-lg text-navy-900/70 font-semibold leading-relaxed">
            Hraize offers practical support across HR, recruitment, business administration and website development.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?tab=consultation"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition-all duration-200"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact?tab=quote"
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white/80 px-7 py-3.5 text-sm font-bold text-navy-900 hover:bg-white shadow-sm transition-all duration-200"
            >
              Get a Service Quote
            </Link>
          </div>
        </div>

        {/* Value Highlights Strip */}
        <div className="mb-20 rounded-3xl bg-white border border-sky-600/20 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {valueProps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-4 border-r border-gray-100 last:border-r-0 pr-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-600/10 text-sky-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-black text-navy-900 block leading-tight">{item.value}</span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-navy-900/50 uppercase leading-snug block mt-0.5">{item.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Alternating Services Showcase */}
        <div className="space-y-16 mb-24">
          {servicePillars.map((srv, idx) => {
            const Icon = srv.icon;
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={srv.id}
                id={`service-${srv.number}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-3xl bg-white border border-sky-600/20 shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch`}>
                  {/* Visual / Image Side */}
                  <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-[440px] bg-navy-900 overflow-hidden ${isReversed ? "lg:order-2" : "lg:order-1"
                    }`}>
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-navy-900/10" />

                    {/* Top Pillar Pill */}
                    <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-white font-black text-xs shadow-md">
                        {srv.number}
                      </span>
                      <span className="text-xs font-black uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                        {srv.badgeText}
                      </span>
                    </div>

                    {/* Bottom Floating Glass Card */}
                    <div className="absolute bottom-5 left-5 right-5 z-10 rounded-2xl bg-white/90 backdrop-blur-md p-4 border border-white/40 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-black uppercase tracking-wider text-sky-600">{srv.title}</p>
                          <p className="text-xs font-black text-navy-900 truncate">{srv.statLabel}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content / Scope Side */}
                  <div className={`lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between ${isReversed ? "lg:order-1" : "lg:order-2"
                    }`}>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="h-2 w-2 rounded-full bg-sky-600" />
                        <span className="text-[11px] font-black tracking-widest uppercase text-sky-600">
                          Service Pillar {srv.number}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
                        {srv.number}. {srv.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm font-bold text-sky-700">
                        {srv.subtitle}
                      </p>

                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <p className="text-xs font-black tracking-widest uppercase text-navy-900/50 mb-4">
                          Service Scope & Key Deliverables
                        </p>
                        <ul className="space-y-3">
                          {srv.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3">
                              <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-600/10 text-sky-600">
                                <Check className="h-2.5 w-2.5 stroke-[3]" />
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-navy-900/80 leading-relaxed">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Note & Action Buttons */}
                    <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                      {srv.note && (
                        <div className="flex items-start gap-2.5 text-xs text-navy-900/70 font-medium bg-cream-50 p-3.5 rounded-xl border border-sky-600/15">
                          <Info className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{srv.note}</span>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Link
                          href={srv.href}
                          className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-2.5 text-xs font-black text-white shadow-sm hover:bg-sky-700 transition-all"
                        >
                          Explore Full Scope
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <Link
                          href={`/contact?tab=${srv.contactTab}`}
                          className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white px-5 py-2.5 text-xs font-bold text-navy-900 hover:bg-cream-100 transition-all"
                        >
                          Request a Service Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-navy-900 to-navy-900 p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-sky-300 mb-4 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Direct Operations Consultation
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Need support with your business operations?
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed font-semibold">
              Contact Hraize to discuss the service requirements and delivery arrangements.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact?tab=consultation"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-black text-navy-900 hover:bg-cream-50 shadow-xl transition-all cursor-pointer"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4 text-sky-600" />
            </Link>
            <Link
              href="/contact?tab=quote"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              Get a Service Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
