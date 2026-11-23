"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ShieldCheck, ArrowRight, CheckCircle2, Info, ArrowDown, ArrowUpRight
} from "lucide-react";

interface HRServicesProps {
  onBookCall?: () => void;
}

const DISCLAIMER =
  "Service scope will be agreed with each client and will reflect the applicable statutory requirements.";

export const HRServices: React.FC<HRServicesProps> = () => {
  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    const t1 = setTimeout(handleScrollToHash, 150);
    const t2 = setTimeout(handleScrollToHash, 450);

    window.addEventListener("hashchange", handleScrollToHash);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("hashchange", handleScrollToHash);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const hrServicesItems = [
    {
      id: "payroll",
      number: "01",
      title: "Monthly Payroll Preparation and Processing",
      point: "Monthly payroll preparation and processing.",
      actionLabel: "Request Quote for Payroll",
      serviceQuery: "payroll",
    },
    {
      id: "salary-statements",
      number: "02",
      title: "Salary Statements and Payslip Coordination",
      point: "Salary statements and payslip coordination.",
      actionLabel: "Request Quote for Salary Statements",
      serviceQuery: "salary-statements",
    },
    {
      id: "joining-exit",
      number: "03",
      title: "Employee Joining and Exit Administration",
      point: "Employee joining and exit administration.",
      actionLabel: "Request Quote for Joining & Exit",
      serviceQuery: "joining-exit",
    },
    {
      id: "pf",
      number: "04",
      title: "Provident Fund (PF) Administration and EPFO Filing Support",
      point: "Provident Fund (PF) administration and EPFO filing support.",
      actionLabel: "Inquire PF Filing Scope",
      serviceQuery: "pf",
    },
    {
      id: "esi",
      number: "05",
      title: "Employee State Insurance (ESI) Administration and Filing Support",
      point: "Employee State Insurance (ESI) administration and filing support.",
      actionLabel: "Inquire ESI Filing Scope",
      serviceQuery: "esi",
    },
    {
      id: "pt",
      number: "06",
      title: "Professional Tax (PT) Calculations and Filing Support",
      point: "Professional Tax (PT) calculations and filing support.",
      actionLabel: "Inquire PT Scope",
      serviceQuery: "pt",
    },
    {
      id: "statutory-records",
      number: "07",
      title: "Employee Data and Statutory Record Maintenance",
      point: "Employee data and statutory record maintenance.",
      actionLabel: "Request Quote for Record Maintenance",
      serviceQuery: "statutory-records",
    },
  ];

  return (
    <div className="relative bg-cream-100">
      {/* Decorative backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(70%_100%_at_50%_0%,rgba(2,132,199,0.14),transparent_70%)]" />
        <div className="absolute -left-28 top-72 h-72 w-72 rounded-full bg-copper-100 blur-3xl" />
        <div className="absolute -right-24 top-24 h-64 w-64 rounded-full bg-sky-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        {/* ============ EDITORIAL SPLIT HERO ============ */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/25 bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-sky-700 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
              01. HR &amp; Payroll Services
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
              className="mt-5 text-4xl font-black uppercase leading-[1.03] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl"
            >
              HR &amp; Payroll
              <span className="block text-sky-600">Services</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            >
              <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-navy-900/70 sm:text-lg">
                Practical support across payroll processing, statutory compliance, and employee
                administration.
              </p>

              <div className="mt-5 flex max-w-xl items-start gap-3 rounded-2xl border-l-4 border-copper-400 bg-white/80 px-4 py-3.5 shadow-sm">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-copper-500" />
                <span className="text-xs font-medium leading-relaxed text-navy-900/75">
                  {DISCLAIMER}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact?tab=hr"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-600/25 transition-all duration-200 hover:bg-sky-700"
                >
                  Request a Service Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#payroll"
                  onClick={(e) => scrollToSection(e, "payroll")}
                  className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white px-6 py-3.5 text-sm font-bold text-navy-900 shadow-sm transition-all duration-200 hover:bg-cream-50"
                >
                  View Service Scope Below
                  <ArrowDown className="h-4 w-4 text-sky-600" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-2 translate-x-4 translate-y-4 rounded-[2rem] border border-copper-400/45"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-sky-600/20 shadow-2xl shadow-navy-900/10">
              <Image
                src="/services-hr.png"
                alt="HR specialists reviewing employment and payroll documents"
                width={1400}
                height={788}
                priority
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[430px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/15 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-300">
                  Payroll · Statutory · Administration
                </p>
                <p className="mt-1.5 text-sm font-bold text-white">
                  One coordinated cycle, from joining to exit.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 right-4 rounded-2xl border border-sky-600/20 bg-white px-5 py-4 shadow-xl sm:right-8">
              <span className="block text-3xl font-black leading-none text-sky-600">07</span>
              <span className="mt-1.5 block text-[10px] font-black uppercase tracking-[0.15em] text-navy-900/50">
                Scope modules
              </span>
            </div>
          </motion.div>
        </div>

        {/* ============ VERTICAL TIMELINE OF SERVICES ============ */}
        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-sky-600/50 via-sky-600/25 to-sky-600/5"
          />

          <div className="space-y-6">
            {hrServicesItems.map((item, idx) => (
              <section
                key={item.id}
                id={item.id}
                className="relative scroll-mt-[168px] pl-12 sm:pl-16"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-sky-600 bg-white text-[11px] font-black text-sky-700 shadow-sm"
                >
                  {item.number}
                </span>

                <div
                  className={`rounded-2xl border p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:p-7 ${idx % 2 === 0
                    ? "border-sky-600/20 bg-white"
                    : "border-sky-600/10 bg-white/70"
                    }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-copper-500">
                        HR &amp; Payroll Services
                      </span>
                      <h2 className="mt-1.5 text-lg font-black uppercase leading-tight tracking-tight text-navy-900 sm:text-xl">
                        {item.title}
                      </h2>
                    </div>
                    <Link
                      href={`/contact?tab=hr&service=${item.serviceQuery}`}
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-sky-600/25 bg-sky-50 px-4 py-2 text-[11px] font-black uppercase tracking-wider text-sky-700 transition-all hover:bg-sky-600 hover:text-white"
                    >
                      {item.actionLabel}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div className="mt-4 flex items-start gap-3 rounded-xl border border-sky-600/10 bg-cream-50 px-4 py-3">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-600/10 text-sky-600">
                      <CheckCircle2 className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-bold text-navy-900/85">{item.point}</span>
                  </div>

                  <p className="mt-4 border-t border-sky-600/10 pt-3 text-[11px] font-medium italic leading-relaxed text-navy-900/55">
                    {DISCLAIMER}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* ============ CTA PANEL ============ */}
        <div className="mt-16 grid overflow-hidden rounded-3xl border border-navy-900/10 bg-navy-card shadow-2xl lg:grid-cols-[1.35fr_1fr]">
          <div className="p-8 sm:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-sky-300 backdrop-blur-sm">
              <ShieldCheck className="h-3.5 w-3.5" />
              Statutory Support
            </span>
            <h3 className="mt-4 text-2xl font-black uppercase leading-tight tracking-tight text-white sm:text-3xl">
              Need support with your business operations?
            </h3>
            <p className="mt-3 max-w-lg text-sm font-semibold leading-relaxed text-white/70">
              Contact Hraize to discuss the service requirements and delivery arrangements.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact?tab=hr"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-navy-900 shadow-xl transition-all hover:bg-cream-50"
              >
                Request a Service Quote
                <ArrowRight className="h-4 w-4 text-sky-600" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                Explore all services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[240px] lg:block">
            <Image
              src="/contact-1.png"
              alt="Hraize consultants discussing HR and payroll requirements"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/50 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};
