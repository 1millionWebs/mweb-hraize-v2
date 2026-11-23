import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Shield, Users, FileSpreadsheet, Globe, UserCheck,
  ArrowRight, CheckCircle2, Info, Building2
} from "lucide-react";
import { SectionLabel } from "./UIElements";

export const OurServicesOverview: React.FC = () => {
  const services = [
    {
      id: "hr-payroll",
      number: "01",
      title: "HR & Payroll Services",
      href: "/hr-services",
      contactTab: "hr",
      icon: Shield,
      bullets: [
        "Monthly payroll preparation and processing.",
        "Salary statements and payslip coordination.",
        "Employee joining and exit administration.",
        "Provident Fund (PF) administration and EPFO filing support.",
        "Employee State Insurance (ESI) administration and filing support.",
        "Professional Tax (PT) calculations and filing support.",
        "Employee data and statutory record maintenance."
      ],
      note: "Service scope will be agreed with each client and will reflect the applicable statutory requirements."
    },
    {
      id: "recruitment",
      number: "02",
      title: "Recruitment & Staffing Services",
      href: "/recruitment",
      contactTab: "recruitment",
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
      href: "/business-support",
      contactTab: "business-support",
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
      id: "website-design",
      number: "04",
      title: "Website Design & Development",
      href: "/website-solutions",
      contactTab: "website-solutions",
      icon: Globe,
      bullets: [
        "Business website design.",
        "Website redesign and revamp.",
        "Landing page development.",
        "Mobile-responsive website development.",
        "Website content and page updates.",
        "Website maintenance and technical support."
      ],
      note: "Delivered in collaboration with Hraize's technology development partner."
    },
    {
      id: "personnel-admin",
      number: "05",
      title: "HR & Personnel Administration",
      href: "/hr-services#admin",
      contactTab: "hr",
      icon: UserCheck,
      bullets: [
        "Employee documentation.",
        "Personnel data maintenance.",
        "Attendance and leave records coordination.",
        "Employee lifecycle administration.",
        "HR reports and documentation.",
        "Compliance records and documentation support."
      ],
      note: "Dedicated personnel administration support to keep employee records organized and audit-ready."
    }
  ];

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Hraize Offerings</SectionLabel>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            Our Services
          </h1>
          <h2 className="mt-3 text-lg sm:text-xl font-bold text-sky-700">
            Business support designed around your requirements.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy-900/70 font-semibold leading-relaxed">
            Hraize offers practical support across HR, recruitment, business administration and website development.
          </p>
        </div>

        {/* Services Cards List */}
        <div className="space-y-8 mb-24">
          {services.map((srv, idx) => {
            const Icon = srv.icon;

            return (
              <motion.div
                key={srv.id}
                id={srv.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-3xl bg-white border border-sky-600/20 shadow-sm hover:border-sky-600/50 hover:shadow-md transition-all overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Column / Summary */}
                  <div className="lg:col-span-4 p-8 sm:p-10 bg-gradient-to-b from-cream-50/80 to-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-black tracking-widest uppercase text-sky-600 bg-sky-600/10 px-3 py-1 rounded-full">
                          Service {srv.number}
                        </span>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600/10 text-sky-600">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-black text-navy-900 tracking-tight leading-snug">
                        {srv.title}
                      </h3>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-3">
                      <Link
                        href={srv.href}
                        className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-xs font-black text-white shadow-sm hover:bg-sky-700 transition-all"
                      >
                        Explore Service
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href={`/contact?tab=${srv.contactTab}`}
                        className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 px-4 py-2.5 text-xs font-bold text-navy-900 hover:bg-cream-100 transition-all"
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </div>

                  {/* Right Column / Deliverables */}
                  <div className="lg:col-span-8 p-8 sm:p-10 flex flex-col justify-between bg-white">
                    <div>
                      <h4 className="text-xs font-black tracking-widest uppercase text-navy-900/50 mb-5">
                        Scope of Support
                      </h4>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {srv.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-600 shrink-0" />
                            <span className="text-xs sm:text-sm font-semibold text-navy-900/80 leading-relaxed">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Note / Disclaimer Banner */}
                    {srv.note && (
                      <div className="mt-8 pt-5 border-t border-gray-100 flex items-start gap-2.5 text-xs text-navy-900/60 font-medium bg-cream-50/70 p-3.5 rounded-xl border border-gray-100">
                        <Info className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{srv.note}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-navy-900 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Need support with your business operations?
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed font-semibold">
              Contact Hraize to discuss the service requirements and delivery arrangements.
            </p>
          </div>
          <Link
            href="/contact?tab=general"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-black text-navy-900 hover:bg-cream-50 shadow-lg transition-all"
          >
            Request a Service Quote
            <ArrowRight className="h-4 w-4 text-sky-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};
