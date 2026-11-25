"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { SectionLabel } from "./UIElements";

interface HomeContentProps {
  onGetStarted?: () => void;
  onNavigateToService?: (service: string) => void;
}

export const HomeContent: React.FC<HomeContentProps> = () => {
  const services = [
    {
      title: "HR, Payroll & Administration",
      desc: "End-to-end payroll processing, EPFO & ESIC filings, and employee lifecycle management.",
      href: "/hr-services",
      image: "/services-hr.png",
    },
    {
      title: "Recruitment Solutions",
      desc: "Permanent and contract hiring with targeted sourcing, vetting, and interview coordination.",
      href: "/recruitment",
      image: "/services-recruitment.png",
    },
    {
      title: "Business Administration Support",
      desc: "Invoice register tracking, due-date follow-ups, and structured receivables reporting.",
      href: "/business-support",
      image: "/reporting.png",
    },
    {
      title: "Digital IT Services",
      desc: "High-speed websites, SEO, mobile apps, ERP modules, and cloud infrastructure.",
      href: "/website-solutions",
      image: "/it-web-dev.jpg",
    },
  ];

  const whyWorkWithHraize = [
    {
      number: "01",
      title: "Practical Support",
      desc: "Execution-focused operational support built for real outcomes.",
    },
    {
      number: "02",
      title: "Zero Hiring Overhead",
      desc: "Hands-on expertise without expanding internal headcount.",
    },
    {
      number: "03",
      title: "Clear Process",
      desc: "Structured workflows, regular updates, and full visibility.",
    },
    {
      number: "04",
      title: "Adaptable Scale",
      desc: "Flexible support that adjusts to peak or steady workloads.",
    },
    {
      number: "05",
      title: "One Point of Contact",
      desc: "One trusted desk across HR, hiring, admin, and IT.",
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
              SUPPORT BUILT FOR YOUR NEEDS.            </h2>
            <p className="mt-4 text-sm text-navy-900/65 font-medium max-w-2xl mx-auto leading-relaxed">
              Practical HR, hiring, admin, and web development from Hraize.            </p>
          </div>

          {/* 2x2 Compact Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {services.map((svc, idx) => (
              <motion.div
                key={svc.href}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <Link
                  href={svc.href}
                  className="group flex flex-col h-full overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm transition-all duration-300 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-900/5"
                >
                  {/* Compact Image Header */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-navy-900/5">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={idx < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/25 via-transparent to-transparent" />
                  </div>

                  {/* Minimal Content Area */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-black tracking-tight text-navy-900 transition-colors duration-300 group-hover:text-sky-600">
                        {svc.title}
                      </h3>
                      <p className="mt-2 text-sm text-navy-900/65 font-medium leading-relaxed line-clamp-2">
                        {svc.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-navy-900/8 flex items-center justify-between text-xs font-black uppercase tracking-wider text-navy-900/60 transition-colors duration-300 group-hover:text-sky-600">
                      <span>Explore Service</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Full Scope Navigation Pill */}
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-cream-50 px-6 py-2.5 text-xs font-black uppercase tracking-wider text-sky-700 hover:bg-sky-600 hover:text-white transition-all shadow-sm"
            >
              Explore Complete Service Scope
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY WORK WITH HRAIZE? ============ */}
      <section className="relative py-20 lg:py-24 bg-cream-50 border-y border-sky-600/10">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-copper-400/30 rounded-full" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <SectionLabel>Client Commitment</SectionLabel>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-navy-900 uppercase tracking-tight">
              Why Work With Hraize?
            </h2>
            <p className="mt-3 text-sm text-navy-900/60 font-semibold">
              Dependable operational support built around your business priorities.
            </p>
          </div>

          {/* Connected Step-Style Architecture */}
          <motion.div
            className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {/* Connecting line between pillars (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-sky-600/40 to-transparent" />

            {whyWorkWithHraize.map((item, idx) => (
              <motion.div
                key={item.number}
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
                {idx < whyWorkWithHraize.length - 1 && (
                  <div className="md:hidden absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-sky-600/30 to-transparent" />
                )}

                {/* Number circle with glow */}
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
                      delay: idx * 0.4,
                    }}
                  />
                  <motion.div
                    className="relative flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-navy-card border-2 border-sky-600/20 text-white shadow-xl"
                    whileHover={{ scale: 1.1, borderColor: "rgba(2,132,199,0.6)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-lg lg:text-xl font-black tracking-tight">
                      {item.number}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="md:mt-6 text-left md:text-center">
                  <h3 className="text-sm lg:text-base font-black text-navy-900 uppercase tracking-tight mb-1.5 group-hover:text-sky-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-navy-900/60 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              {/* <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-sky-300 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-copper-400" />
                Operational Engagement
              </span> */}

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Let&apos;s Discuss Your Business Requirements
              </h2>

              <p className="mt-5 text-sm sm:text-sm text-sage-100/75 font-medium leading-relaxed">
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

                {/* <Link
                  href="/contact?tab=quote"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-4 text-sm font-black text-white hover:bg-white/15 transition-all duration-200"
                >
                  Get a Service Quote
                  <ArrowUpRight className="h-4 w-4 text-sky-400" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
