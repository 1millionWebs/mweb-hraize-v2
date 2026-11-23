import React, { useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IndianRupee, ShieldCheck, Users, FileText, CheckCircle2,
  ArrowRight, Clock, FileCheck, Landmark, Calculator
} from "lucide-react";
import { SectionLabel, FeatureCheck } from "./UIElements";

interface HRServicesProps {
  onBookCall?: () => void;
}

export const HRServices: React.FC<HRServicesProps> = () => {
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

  const coreServices = [
    {
      id: "payroll",
      number: "01",
      title: "Payroll Processing",
      desc: "Accurate, on-time monthly salary calculations, structured compensation breakups, and confidential disbursement.",
      icon: IndianRupee,
      deliverables: [
        "Monthly salary computation & attendance/leave sync",
        "Tax-efficient salary structuring (Basic, HRA, Allowances)",
        "Secure digital payslip generation & email distribution",
        "Reimbursements, bonuses, arrears & deduction management",
        "Bank disbursement advice file preparation",
        "Full and Final (F&F) settlement computation"
      ]
    },
    {
      id: "pf",
      number: "02",
      title: "Provident Fund (PF) Compliance",
      desc: "Complete end-to-end management of Employee Provident Fund (EPF) and Pension Scheme (EPS) statutory requirements.",
      icon: Landmark,
      deliverables: [
        "Monthly EPF/EPS contribution computation",
        "Electronic Challan cum Return (ECR) preparation & filing",
        "UAN generation, activation & KYC document linking",
        "Member transfer claims & withdrawal assistance",
        "Annual PF return reconciliation & inspection register maintenance"
      ]
    },
    {
      id: "esi",
      number: "03",
      title: "ESI (Employee State Insurance)",
      desc: "Timely contribution calculations, monthly portal returns, and employee healthcare benefit registration.",
      icon: ShieldCheck,
      deliverables: [
        "Monthly ESI wage limit assessment & contribution calculation",
        "Online challan generation & monthly contribution remittance",
        "Employee registration & e-Pehchan card generation",
        "Dispensary and family member mapping",
        "Statutory Form-5 and accident/maternity register maintenance"
      ]
    },
    {
      id: "pt",
      number: "04",
      title: "Professional Tax (PT)",
      desc: "State-wise Professional Tax calculations, slab compliance, and prompt return filings across Indian states.",
      icon: Calculator,
      deliverables: [
        "State-specific PT slab rate calculation for all employees",
        "Timely monthly/quarterly tax remittance through state portals",
        "Annual Professional Tax return filing & documentation",
        "PTRC and PTEC statutory compliance support",
        "Notice resolution and tax assessment representation"
      ]
    },
    {
      id: "admin",
      number: "05",
      title: "Employee Administration",
      desc: "Systematic lifecycle administration, personnel records, documentation, and employee query support.",
      icon: Users,
      deliverables: [
        "Digital employee onboarding & KYC document collection",
        "Centralized employee records & personnel files",
        "Issuance of Offer Letters, Appointment Letters & Agreements",
        "Leave, holiday & daily attendance tracking",
        "HR policy communication & code of conduct enforcement",
        "Exit formalities: Relieving letters, Experience certificates & NOCs"
      ]
    }
  ];

  const statutoryHighlights = [
    {
      title: "100% Statutory Compliance",
      desc: "Zero penalties. We ensure PF, ESI, and PT filings are submitted accurately before government deadlines.",
      icon: FileCheck
    },
    {
      title: "Confidential & Secure",
      desc: "Bank-grade data handling for sensitive salary information, employee identity records, and bank accounts.",
      icon: ShieldCheck
    },
    {
      title: "Dedicated SPOC Support",
      desc: "A single point of contact for your leadership team and an employee helpdesk for day-to-day query resolution.",
      icon: Clock
    }
  ];

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>People & Compliance</SectionLabel>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            HR & Payroll Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-navy-900/70 font-semibold leading-relaxed">
            Payroll processing, PF, ESI, Professional Tax and employee administration.
            Ensure accurate monthly payroll, error-free statutory compliance, and smooth employee operations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?tab=hr"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-sky-700 transition-all duration-200"
            >
              Get Payroll & HR Support
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white/70 px-7 py-3 text-sm font-bold text-navy-900 hover:bg-white transition-all duration-200"
            >
              Explore Scope
            </a>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {statutoryHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl bg-white border border-sky-600/20 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600/10 text-sky-600 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-extrabold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-xs text-navy-900/60 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Services List */}
        <div id="services" className="space-y-8 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Detailed Deliverables</SectionLabel>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Payroll, Compliance & Administration Scope
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-navy-900/60 font-semibold">
              Complete, end-to-end handling of your monthly payroll cycle, employee documentation, and state/central statutory obligations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((srv, idx) => {
              const Icon = srv.icon;
              const isFullWidth = idx === 4;

              return (
                <motion.div
                  key={srv.id}
                  id={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`rounded-3xl bg-white border border-sky-600/20 p-8 shadow-sm hover:border-sky-600/50 transition-all flex flex-col justify-between ${
                    isFullWidth ? "md:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600/10 text-sky-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-sky-600">
                          Pillar {srv.number}
                        </span>
                        <h3 className="text-lg font-black text-navy-900">{srv.title}</h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-navy-900/70 font-medium leading-relaxed mb-6">
                      {srv.desc}
                    </p>

                    <div className={`space-y-2.5 pt-4 border-t border-gray-100 ${
                      isFullWidth ? "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 space-y-0" : ""
                    }`}>
                      {srv.deliverables.map((item, dIdx) => (
                        <FeatureCheck key={dIdx} className="text-navy-900/80">
                          {item}
                        </FeatureCheck>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href={`/contact?tab=hr&service=${srv.id}`}
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

        {/* Bottom CTA Box */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-navy-900 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Looking for dependable HR & payroll support?
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed font-semibold">
              Speak with our team today to streamline your payroll processing, ensure complete PF, ESI, and PT compliance, and organize your employee records.
            </p>
          </div>
          <Link
            href="/contact?tab=hr"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-black text-navy-900 hover:bg-cream-50 shadow-lg transition-all"
          >
            Request a Consultation
            <ArrowRight className="h-4 w-4 text-sky-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};
