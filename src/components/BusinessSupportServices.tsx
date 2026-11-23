"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight, Info, ShieldCheck, ArrowUpRight
} from "lucide-react";

interface BusinessSupportServicesProps {
  onGetStarted?: () => void;
}

const DISCLAIMER =
  "This is administrative support, not independent accounting, audit, tax or legal debt recovery.";

export const BusinessSupportServices: React.FC<BusinessSupportServicesProps> = () => {
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

  const supportItems = [
    {
      id: "sales-register",
      number: "01",
      title: "Sales Invoice Register Maintenance",
      point: "Sales invoice register maintenance.",
      serviceQuery: "sales-register",
      actionLabel: "Request Invoice Register Support",
      status: "Maintained",
      statusTone: "forest",
      short: "Sales Invoice Register",
    },
    {
      id: "due-dates",
      number: "02",
      title: "Invoice Due-Date Tracking",
      point: "Invoice due-date tracking.",
      serviceQuery: "due-dates",
      actionLabel: "Request Due-Date Tracking",
      status: "Tracked",
      statusTone: "sky",
      short: "Due-Date Tracking",
    },
    {
      id: "payment-reminders",
      number: "03",
      title: "Customer Payment Reminders",
      point: "Customer payment reminders.",
      serviceQuery: "payment-reminders",
      actionLabel: "Request Payment Reminder Support",
      status: "Sent",
      statusTone: "sky",
      short: "Payment Reminders",
    },
    {
      id: "follow-ups",
      number: "04",
      title: "Outstanding Payment Follow-ups",
      point: "Outstanding payment follow-ups.",
      serviceQuery: "follow-ups",
      actionLabel: "Request Follow-up Support",
      status: "Followed up",
      statusTone: "copper",
      short: "Payment Follow-ups",
    },
    {
      id: "status-updates",
      number: "05",
      title: "Payment Status Updates Based on Client Confirmation",
      point: "Payment status updates based on client confirmation.",
      serviceQuery: "status-updates",
      actionLabel: "Request Status Update Support",
      status: "Updated",
      statusTone: "sky",
      short: "Payment Status Updates",
    },
    {
      id: "overdue-reports",
      number: "06",
      title: "Periodic Receivables and Overdue Reports",
      point: "Periodic receivables and overdue reports.",
      serviceQuery: "overdue-reports",
      actionLabel: "Request Receivables Reports",
      status: "Reported",
      statusTone: "copper",
      short: "Receivables Reports",
    },
    {
      id: "accounts-coordination",
      number: "07",
      title: "Coordination with Client's Accounts Team for Unmatched Payments",
      point: "Coordination with the client's accounts team for unmatched payments.",
      serviceQuery: "accounts-coordination",
      actionLabel: "Request Accounts Coordination",
      status: "Coordinated",
      statusTone: "forest",
      short: "Accounts Coordination",
    },
  ];

  const statusStyles: Record<string, string> = {
    sky: "bg-sky-100 text-sky-700 border-sky-200",
    copper: "bg-copper-100 text-copper-600 border-copper-200",
    forest: "bg-sage-100 text-forest-600 border-sage-200",
  };

  return (
    <div className="relative bg-cream-100">
      {/* Faint ledger grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(2,132,199,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,132,199,0.07) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 55%)",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        {/* ============ CONSOLE-STYLE HERO ============ */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-copper-400/40 bg-copper-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-copper-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
              03. Business Administration Support
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
              className="mt-5 text-3xl font-black uppercase leading-[1.04] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl"
            >
              Invoice &amp;
              <span className="block text-sky-600">Receivables</span>
              <span className="block">Administration</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            >
              <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-navy-900/70 sm:text-lg">
                Administrative support across sales invoice tracking, due-date monitoring, reminders,
                and periodic reporting.
              </p>

              <div className="mt-5 flex max-w-xl items-start gap-3 rounded-2xl border border-sky-600/15 bg-white px-4 py-3.5 shadow-sm">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                <span className="text-xs font-medium leading-relaxed text-navy-900/75">
                  {DISCLAIMER}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact?tab=business-support"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-600/25 transition-all duration-200 hover:bg-sky-700"
                >
                  Request a Service Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#sales-register"
                  onClick={(e) => scrollToSection(e, "sales-register")}
                  className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white px-6 py-3.5 text-sm font-bold text-navy-900 shadow-sm transition-all duration-200 hover:bg-cream-50"
                >
                  View Service Scope Below
                  <ArrowUpRight className="h-4 w-4 rotate-90 text-sky-600" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Receivables status console */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl border border-sky-600/20 bg-white shadow-2xl shadow-navy-900/10"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-navy-card px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-copper-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                Scope Status Board
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-sky-300">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Live
              </span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-sky-600/10 bg-cream-50 px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.15em] text-navy-900/45 sm:grid-cols-[1fr_auto_auto]">
              <span>Operational activity</span>
              <span className="hidden sm:block">Cycle</span>
              <span className="text-right">Status</span>
            </div>

            <ul className="divide-y divide-sky-600/10">
              {supportItems.map((item, idx) => (
                <li
                  key={item.id}
                  className={`grid grid-cols-[1fr_auto] items-center gap-4 px-4 py-3 transition-colors hover:bg-sky-50/70 sm:grid-cols-[1fr_auto_auto] ${idx % 2 === 1 ? "bg-cream-50/60" : ""
                    }`}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="text-[10px] font-black tabular-nums text-sky-600">
                      {item.number}
                    </span>
                    <span className="truncate text-xs font-bold text-navy-900/85">
                      {item.point}
                    </span>
                  </span>
                  <span className="hidden text-[10px] font-black uppercase tracking-wider text-navy-900/40 sm:block">
                    Periodic
                  </span>
                  <span
                    className={`justify-self-end whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${statusStyles[item.statusTone]}`}
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between gap-3 border-t border-sky-600/10 bg-navy-900 px-4 py-3">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white/50">
                07 tracked activities
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-copper-300">
                Client-confirmed updates
              </span>
            </div>
          </motion.div>
        </div>

        {/* ============ SCOPE LEDGER TABLE ============ */}
        <div className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-navy-900 pb-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-copper-500">
                Operational Scope
              </span>
              <h2 className="mt-1.5 text-2xl font-black uppercase tracking-tight text-navy-900 sm:text-3xl">
                Invoice &amp; Receivables Administration Scope
              </h2>
            </div>
            <p className="max-w-md text-xs font-medium leading-relaxed text-navy-900/60">
              Hraize provides systematic administrative support across the following operational
              activities.
            </p>
          </div>

          {/* Section index — ledger style */}
          <nav
            aria-label="Jump to a scope section"
            className="mt-6 overflow-hidden rounded-t-2xl border border-b-0 border-navy-900/20 bg-navy-900 px-3 py-2.5 sm:px-4"
          >
            <ul className="flex gap-1.5 overflow-x-auto [scrollbar-width:none] md:flex-wrap md:justify-center [&::-webkit-scrollbar]:hidden">
              {supportItems.map((item) => (
                <li key={item.id} className="shrink-0">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-white/[0.07] px-3 py-1.5 text-[11px] font-bold text-white/75 ring-1 ring-inset ring-white/10 transition-all hover:bg-sky-600 hover:text-white hover:ring-sky-600"
                  >
                    <span className="font-black tabular-nums text-copper-300">{item.number}</span>
                    {item.short}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Table head (desktop) */}
          <div className="hidden grid-cols-[72px_1fr_180px] gap-6 border-b border-sky-600/15 bg-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-navy-900/45 md:grid">
            <span>Ref.</span>
            <span>Service scope</span>
            <span className="text-right">Action</span>
          </div>

          <div className="overflow-hidden rounded-b-3xl border-x border-b border-sky-600/15 bg-white shadow-sm md:rounded-b-none md:border-t-0">
            {supportItems.map((item, idx) => (
              <section
                key={item.id}
                id={item.id}
                className={`scroll-mt-32 border-b border-sky-600/10 px-5 py-6 transition-colors last:border-b-0 hover:bg-sky-50/60 sm:px-6 md:grid md:grid-cols-[72px_1fr_180px] md:items-center md:gap-6 ${idx % 2 === 1 ? "bg-cream-50/50" : "bg-white"
                  }`}
              >
                <div className="flex items-center gap-3 md:block">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-[11px] font-black tabular-nums text-white md:h-10 md:w-10">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-copper-500 md:mt-2 md:block">
                    Activity
                  </span>
                </div>

                <div className="mt-4 md:mt-0">
                  <h3 className="text-base font-black uppercase leading-tight tracking-tight text-navy-900 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold text-navy-900/70">{item.point}</p>
                  <p className="mt-2.5 flex items-start gap-1.5 text-[11px] font-medium italic leading-relaxed text-navy-900/55">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 not-italic text-sky-600" />
                    {DISCLAIMER}
                  </p>
                </div>

                <div className="mt-4 md:mt-0 md:text-right">
                  <Link
                    href={`/contact?tab=business-support&service=${item.serviceQuery}`}
                    className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-sky-600 transition-colors hover:text-sky-700 md:justify-end"
                  >
                    {item.actionLabel}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* ============ CTA ============ */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-navy-900/10 bg-navy-card p-8 shadow-2xl sm:p-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-copper-400 via-sky-500 to-transparent" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky-600/20 blur-2xl"
          />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-sky-300 backdrop-blur-sm">
                <ShieldCheck className="h-3.5 w-3.5" />
                Administrative Support
              </span>
              <h3 className="mt-4 text-2xl font-black uppercase leading-tight tracking-tight text-white sm:text-3xl">
                Need support with your business operations?
              </h3>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-white/70">
                Contact Hraize to discuss the service requirements and delivery arrangements.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/contact?tab=business-support"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-navy-900 shadow-xl transition-all hover:bg-cream-50"
              >
                Request a Service Quote
                <ArrowRight className="h-4 w-4 text-sky-600" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                All services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footnote image strip */}
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-sky-600/15">
          <Image
            src="/reporting.png"
            alt="Receivables reporting dashboard reviewed on multiple devices"
            width={1400}
            height={788}
            className="h-40 w-full object-cover sm:h-52"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/45 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex max-w-lg flex-col justify-center px-6 sm:px-10">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-copper-300">
              Reporting rhythm
            </span>
            <p className="mt-1.5 text-sm font-bold leading-snug text-white sm:text-base">
              Periodic receivables and overdue reports, prepared from a single maintained register.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
