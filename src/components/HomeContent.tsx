"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  FileText,
  Globe,
  Sparkles,
  Layers,
  HelpCircle,
  Building2,
  Briefcase,
  Workflow,
  Headphones,
  Check,
} from "lucide-react";
import { SectionLabel } from "./UIElements";

interface HomeContentProps {
  onGetStarted?: () => void;
  onNavigateToService?: (service: string) => void;
}

export const HomeContent: React.FC<HomeContentProps> = ({
  onNavigateToService,
}) => {
  const [hoveredService, setHoveredService] = useState<number>(0);

  const services = [
    {
      title: "HR, Payroll Services & Administration",
      number: "01",
      desc: "Complete payroll processing, salary statements, EPFO & ESIC statutory filing support, and employee lifecycle administration.",
      href: "/hr-services",
      image: "/services-hr.png",
      tag: "Payroll & Compliance",
      pills: ["Monthly Payroll", "PF & EPFO Filing", "ESI & Professional Tax", "Personnel Records", "Lifecycle Admin"],
      highlights: ["100% On-Time Payroll", "Statutory Compliance", "Dedicated HR Desk"],
    },
    {
      title: "Recruitment Solutions",
      number: "02",
      desc: "Permanent and contract talent placement, candidate sourcing, rigorous screening, and end-to-end interview coordination.",
      href: "/recruitment",
      image: "/services-recruitment.png",
      tag: "Staffing & Hiring",
      pills: ["Permanent Hiring", "Contract Staffing", "Candidate Vetting", "Interview Sync", "Executive Search"],
      highlights: ["3.5% Match SLA", "Vetted Profiles Only", "60-Day Replacement Guarantee"],
    },
    {
      title: "Business Administration Support",
      number: "03",
      desc: "Sales invoice register maintenance, due-date tracking, professional payment reminders, and periodic overdue reports.",
      href: "/business-support",
      image: "/reporting.png",
      tag: "Receivables & Operations",
      pills: ["Invoice Register", "Due-Date Tracking", "Payment Reminders", "Overdue Reports", "Accounts Coordination"],
      highlights: ["Administrative Cash Flow Desk", "Courteous Follow-ups", "Aging Reports"],
    },
    {
      title: "Digital IT Services",
      number: "04",
      desc: "Website development & SEO, mobile applications, digital marketing, ERP implementations, and cloud infrastructure.",
      href: "/website-solutions",
      image: "/documentation.png",
      tag: "Digital & IT",
      pills: ["Website & SEO", "Mobile App Development", "Digital Marketing", "ERP Solutions", "Cloud & Infra"],
      highlights: ["High Speed Web Apps", "Enterprise ERP Modules", "Technology Partner Delivered"],
    },
  ];

  const whyWorkWithHraize = [
    {
      number: "01",
      title: "Practical, Dependable Support",
      desc: "Practical, dependable operational support focused on execution and outcomes rather than complex, rigid frameworks.",
      icon: ShieldCheck,
    },
    {
      number: "02",
      title: "Zero Team Expansion Overhead",
      desc: "Hands-on assistance without the overhead and long-term commitment of expanding internal headcount for every function.",
      icon: Building2,
    },
    {
      number: "03",
      title: "Clear Communication & Process",
      desc: "Clear communication, regular status updates, structured workflows and complete visibility over all work undertaken.",
      icon: Workflow,
    },
    {
      number: "04",
      title: "Adaptable & Flexible",
      desc: "Flexibility to adapt to your changing business needs, whether during peak workloads or steady-state operations.",
      icon: Layers,
    },
    {
      number: "05",
      title: "Single Point of Coordination",
      desc: "One trusted point of contact across HR, recruitment, business administration and digital web services.",
      icon: Headphones,
    },
  ];

  return (
    <div className="bg-white">
      {/* ============ OUR SERVICES OVERVIEW ============ */}
      <section className="relative py-20 lg:py-24 bg-white">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-sky-600/30 rounded-full" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-navy-900 uppercase tracking-tight">
              Business support designed around your requirements.
            </h2>
            <p className="mt-4 text-base text-navy-900/65 font-medium max-w-2xl mx-auto leading-relaxed">
              Hraize offers practical support across HR, recruitment, business administration and website development.
            </p>
          </div>

          {/* Vertical Stack Cards Showcase with Ultra-Smooth Big Popup Hover Effect */}
          <div className="space-y-5 max-w-5xl mx-auto py-4">
            {services.map((svc, idx) => {
              const isPopped = hoveredService === idx;

              return (
                <motion.div
                  key={idx}
                  layout
                  animate={{
                    y: isPopped ? -8 : 0,
                    scale: isPopped ? 1.025 : 1,
                    zIndex: isPopped ? 20 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 32,
                    mass: 0.75,
                  }}
                  className="relative origin-center"
                >
                  <Link
                    href={svc.href}
                    onMouseEnter={() => setHoveredService(idx)}
                    className={`group block overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer transition-colors duration-300 ${isPopped
                      ? "border-2 border-sky-500 ring-4 ring-sky-500/20 shadow-[0_25px_60px_-12px_rgba(2,132,199,0.35)] bg-white"
                      : "border border-navy-900/10 shadow-sm hover:border-sky-500/30 bg-white/95 opacity-90 hover:opacity-100"
                      }`}
                  >
                    <div className="flex flex-col md:flex-row items-stretch">
                      {/* Left Thumbnail Image with stable dimensions to prevent layout jumps */}
                      <div className="relative w-full md:w-72 lg:w-80 shrink-0 overflow-hidden bg-navy-900/5 aspect-[16/9] md:aspect-auto min-h-[160px] md:min-h-[210px]">
                        <Image
                          src={svc.image}
                          alt={svc.title}
                          fill
                          className={`object-cover transition-transform duration-700 ease-out ${isPopped ? "scale-105" : "group-hover:scale-105"
                            }`}
                          sizes="(max-width: 768px) 100vw, 360px"
                          priority={idx === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent md:hidden" />

                        {/* Active Selection Tag */}
                        {/* <div
                          className={`absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider transition-all duration-300 ${
                            isPopped
                              ? "bg-white/95 text-sky-700 shadow-md backdrop-blur-sm opacity-100 translate-y-0"
                              : "bg-black/40 text-white/90 backdrop-blur-sm opacity-0 -translate-y-1 pointer-events-none"
                          }`}
                        >
                          Active Selection
                        </div> */}
                      </div>

                      {/* Right Content Area with stable geometry */}
                      <div className="flex-1 flex flex-col justify-between p-5 sm:p-6 lg:p-7">
                        <div>
                          {/* Category & Service Number */}
                          <div className="flex items-center gap-2 text-xs font-semibold">
                            <span className="text-copper-500 font-bold uppercase tracking-wider text-[11px]">
                              Service {svc.number}
                            </span>
                            <span className="text-navy-900/30">•</span>
                            <span
                              className={`transition-colors duration-300 ${isPopped ? "text-sky-600 font-bold" : "text-navy-900/55"
                                }`}
                            >
                              {svc.tag}
                            </span>
                          </div>

                          {/* Title */}
                          <h3
                            className={`mt-2 font-black tracking-tight leading-snug transition-colors duration-300 text-lg sm:text-xl lg:text-2xl ${isPopped ? "text-navy-900 group-hover:text-sky-600" : "text-navy-900/90"
                              }`}
                          >
                            {svc.title}
                          </h3>

                          {/* Description */}
                          <p className="mt-2 text-xs sm:text-sm text-navy-900/70 font-medium leading-relaxed max-w-2xl line-clamp-2">
                            {svc.desc}
                          </p>

                          {/* Highlights Row - stable height and smooth opacity transition */}
                          <div
                            className={`mt-3 hidden sm:flex flex-wrap items-center gap-4 text-xs transition-opacity duration-300 ${isPopped ? "opacity-100 font-bold text-navy-900" : "opacity-60 font-medium text-navy-900/75"
                              }`}
                          >
                            {svc.highlights.map((hl, hIdx) => (
                              <div key={hIdx} className="flex items-center gap-1.5">
                                <CheckCircle2
                                  className={`h-3.5 w-3.5 shrink-0 transition-colors duration-300 ${isPopped ? "text-emerald-600" : "text-navy-900/40"
                                    }`}
                                />
                                <span>{hl}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Row: Pills & Action Button */}
                        <div className="mt-5 pt-3.5 border-t border-navy-900/10 flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            {svc.pills.map((pill, pIdx) => (
                              <span
                                key={pIdx}
                                className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold transition-all duration-300 ${isPopped
                                  ? "border border-sky-600/30 bg-sky-50 text-sky-900 font-bold shadow-xs"
                                  : "border border-navy-900/10 bg-cream-50/70 text-navy-900/70"
                                  }`}
                              >
                                {pill}
                              </span>
                            ))}
                          </div>

                          {/* Morphing Action Button */}
                          <div
                            className={`ml-auto inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-xs font-black transition-all duration-300 ${isPopped
                              ? "bg-sky-600 text-white shadow-md shadow-sky-600/30 translate-x-0"
                              : "text-navy-900/60 group-hover:text-sky-600 bg-transparent"
                              }`}
                          >
                            <span>{isPopped ? "Explore Service" : "View more"}</span>
                            <ArrowRight
                              className={`h-3.5 w-3.5 transition-transform duration-300 ${isPopped ? "translate-x-0.5" : "group-hover:translate-x-1"
                                }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Full Scope Navigation Pill */}
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-cream-50 px-6 py-2.5 text-xs font-black uppercase tracking-wider text-sky-700 hover:bg-sky-600 hover:text-white transition-all shadow-sm"
            >
              Explore Complete 4-Pillar Service Scope
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY WORK WITH HRAIZE? ============ */}
      <section className="relative py-20 lg:py-24 bg-cream-50 border-y border-sky-600/10">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-copper-400/30 rounded-full" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel>Client Commitment</SectionLabel>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-navy-900 uppercase tracking-tight">
              Why Work With Hraize?
            </h2>
            <p className="mt-3 text-base text-navy-900/65 font-medium max-w-xl mx-auto leading-relaxed">
              Dependable, structured operational support built around your unique business priorities.
            </p>
          </div>

          {/* 5-Column Interconnected Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyWorkWithHraize.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                  className="group rounded-3xl border border-sky-600/15 bg-white p-6 shadow-sm hover:border-sky-600/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600/10 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-black text-navy-900/35 tracking-wider">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-navy-900 uppercase tracking-tight leading-snug mb-2 group-hover:text-sky-700 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs font-medium text-navy-900/65 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* <div className="mt-6 pt-4 border-t border-sky-600/10 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-sky-600">
                    <Check className="h-3 w-3 text-copper-500" />
                    <span>Hraize Principle</span>
                  </div> */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ LET'S DISCUSS YOUR BUSINESS REQUIREMENTS ============ */}
      <section className="relative py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-navy-card p-8 sm:p-12 lg:p-16 shadow-2xl border border-navy-900/10">
            {/* Background ambient accents */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-600/15 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-copper-400/10 blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-sky-300 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-copper-400" />
                Operational Engagement
              </span>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Let&apos;s Discuss Your Business Requirements
              </h2>

              <p className="mt-5 text-base sm:text-lg text-sage-100/75 font-medium leading-relaxed">
                Whether you need ongoing operational support or assistance with a specific project, Hraize is here to help.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?tab=consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-8 py-4 text-sm font-black tracking-wider text-white shadow-xl shadow-sky-600/30 hover:bg-sky-500 transition-all duration-200"
                >
                  Contact Hraize
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact?tab=quote"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-4 text-sm font-black text-white hover:bg-white/15 transition-all duration-200"
                >
                  Get a Service Quote
                  <ArrowUpRight className="h-4 w-4 text-sky-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
