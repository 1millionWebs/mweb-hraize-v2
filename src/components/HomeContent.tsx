"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
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
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "HR, Payroll Services & Administration",
      number: "01",
      desc: "Payroll processing, PF, ESI, Professional Tax and employee administration.",
      href: "/hr-services",
      image: "/services-hr.png",
      tag: "Payroll & Compliance",
    },
    {
      title: "Recruitment Solutions",
      number: "02",
      desc: "Permanent and contract hiring, sourcing, screening and interview coordination.",
      href: "/recruitment",
      image: "/services-recruitment.png",
      tag: "Talent Acquisition",
    },
    {
      title: "Business Administration Support",
      number: "03",
      desc: "Invoice tracking, receivables administration, payment follow-ups and operational reports.",
      href: "/business-support",
      image: "/reporting.png",
      tag: "Operational Desk",
    },
    {
      title: "Digital IT Services",
      number: "04",
      desc: "Website development & SEO, mobile apps, digital marketing, ERP solutions, and cloud infrastructure.",
      href: "/website-solutions",
      image: "/documentation.png",
      tag: "Digital Solutions",
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

          {/* Interactive Services Showcase */}
          <div className="flex flex-col md:flex-row gap-4 h-[620px] md:h-[460px]">
            {services.map((svc, idx) => {
              const isActive = idx === activeService;

              const handleMouseEnter = () => {
                if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
                  setActiveService(idx);
                }
              };

              return (
                <div
                  key={idx}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isActive
                      ? "flex-[4] md:flex-[3.5] bg-white shadow-xl border border-sky-600/20"
                      : "flex-[0.6] md:flex-[0.6] min-h-[64px] md:min-h-0 md:min-w-[68px] hover:border-sky-600/30"
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onClick={() => setActiveService(idx)}
                >
                  {isActive ? (
                    /* ── EXPANDED CARD ── */
                    <div className="flex flex-col h-full w-full bg-white">
                      {/* Image Frame */}
                      <div className="relative flex-1 m-3 rounded-2xl overflow-hidden border border-navy-900/10">
                        <Image
                          src={svc.image}
                          alt={svc.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 40vw"
                          priority={idx === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                        <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-black uppercase tracking-wider text-sky-700">
                          {svc.tag}
                        </span>
                      </div>

                      {/* Content + Action */}
                      <div className="px-5 pb-5 pt-1 flex items-end justify-between gap-4">
                        <div className="min-w-0">
                          <span className="text-[10px] font-black uppercase tracking-widest text-copper-500">
                            Service {svc.number}
                          </span>
                          <h3 className="text-lg font-black text-navy-900 tracking-tight leading-snug">
                            {svc.title}
                          </h3>
                          <p className="text-xs text-navy-900/65 font-medium leading-relaxed mt-1">
                            {svc.desc}
                          </p>
                        </div>
                        <Link
                          href={svc.href}
                          className="shrink-0 h-10 w-10 rounded-full bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center transition-colors shadow-md shadow-sky-600/25"
                          title={`View ${svc.title}`}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    /* ── COLLAPSED STRIP ── */
                    <div className="relative h-full w-full rounded-3xl overflow-hidden">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 90px"
                      />
                      <div className="absolute inset-0 bg-navy-900/65" />

                      {/* Desktop Rotated Title */}
                      <div className="absolute inset-0 hidden md:flex items-center justify-center">
                        <span
                          className="text-xs font-black text-white uppercase tracking-widest whitespace-nowrap select-none"
                          style={{
                            writingMode: "vertical-rl",
                            textOrientation: "mixed",
                            transform: "rotate(180deg)",
                          }}
                        >
                          {svc.title}
                        </span>
                      </div>

                      {/* Mobile Horizontal Title */}
                      <div className="absolute inset-0 flex md:hidden items-center justify-between px-6">
                        <span className="text-xs font-black text-white uppercase tracking-widest">
                          {svc.title}
                        </span>
                        <span className="text-xs font-bold text-sky-400">
                          {svc.number}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
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
                    <div className="flex items-center justify-between mb-5">
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

                  <div className="mt-6 pt-4 border-t border-sky-600/10 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-sky-600">
                    <Check className="h-3 w-3 text-copper-500" />
                    <span>Hraize Principle</span>
                  </div>
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
