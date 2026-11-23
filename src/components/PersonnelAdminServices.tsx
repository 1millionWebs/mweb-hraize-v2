"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Users, FileText, CalendarCheck, UserCheck, BarChart3,
  ShieldCheck, ArrowRight, CheckCircle2, ArrowUpRight, FolderKanban, Info
} from "lucide-react";

interface PersonnelAdminServicesProps {
  onBookCall?: () => void;
}

export const PersonnelAdminServices: React.FC<PersonnelAdminServicesProps> = () => {
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

  const adminItems = [
    {
      id: "documentation",
      number: "01",
      title: "Employee Documentation",
      point: "Employee documentation.",
      serviceQuery: "documentation",
      actionLabel: "Request Documentation Support",
      icon: FileText,
      span: "md:col-span-4",
      tint: "bg-white border-sky-600/15",
      iconTone: "bg-sky-600 text-white",
    },
    {
      id: "personnel-data",
      number: "02",
      title: "Personnel Data Maintenance",
      point: "Personnel data maintenance.",
      serviceQuery: "personnel-data",
      actionLabel: "Request Personnel Data Support",
      icon: Users,
      span: "md:col-span-2",
      tint: "bg-teal-100 border-forest-500/20",
      iconTone: "bg-forest-500 text-white",
    },
    {
      id: "attendance-leave",
      number: "03",
      title: "Attendance and Leave Records Coordination",
      point: "Attendance and leave records coordination.",
      serviceQuery: "attendance-leave",
      actionLabel: "Request Attendance Records Support",
      icon: CalendarCheck,
      span: "md:col-span-2",
      tint: "bg-white border-sky-600/15",
      iconTone: "bg-copper-400 text-white",
    },
    {
      id: "lifecycle",
      number: "04",
      title: "Employee Lifecycle Administration",
      point: "Employee lifecycle administration.",
      serviceQuery: "lifecycle",
      actionLabel: "Request Lifecycle Admin Support",
      icon: UserCheck,
      span: "md:col-span-4",
      tint: "bg-sage-100 border-forest-500/20",
      iconTone: "bg-navy-900 text-white",
    },
    {
      id: "hr-reports",
      number: "05",
      title: "HR Reports and Documentation",
      point: "HR reports and documentation.",
      serviceQuery: "hr-reports",
      actionLabel: "Request HR Reports Support",
      icon: BarChart3,
      span: "md:col-span-3",
      tint: "bg-white border-sky-600/15",
      iconTone: "bg-sky-600 text-white",
    },
    {
      id: "compliance-records",
      number: "06",
      title: "Compliance Records and Documentation Support",
      point: "Compliance records and documentation support.",
      serviceQuery: "compliance-records",
      actionLabel: "Request Compliance Records Support",
      icon: ShieldCheck,
      span: "md:col-span-3",
      tint: "bg-cream-50 border-copper-400/30",
      iconTone: "bg-copper-400 text-white",
    },
  ];

  const scopePoints = [
    "Employee documentation.",
    "Personnel data maintenance.",
    "Attendance and leave records coordination.",
    "Employee lifecycle administration.",
    "HR reports and documentation.",
    "Compliance records and documentation support.",
  ];

  return (
    <div className="relative bg-cream-100">
      {/* Soft decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-sage-100 blur-3xl" />
        <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-teal-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        {/* ============ BENTO HERO ============ */}
        <div className="grid gap-5 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl border border-sky-600/15 bg-white p-7 shadow-sm sm:p-10 lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-forest-600 ring-1 ring-inset ring-forest-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-forest-500" />
              05. HR &amp; Personnel Administration
            </span>

            <h1 className="mt-5 text-3xl font-black uppercase leading-[1.05] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.4rem]">
              HR &amp; Personnel
              <span className="block text-forest-600">Administration</span>
            </h1>

            <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-navy-900/70 sm:text-lg">
              Employee documentation, personnel data maintenance, attendance records, and complete
              lifecycle administration.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact?tab=hr"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-600/25 transition-all duration-200 hover:bg-sky-700"
              >
                Request a Service Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#documentation"
                onClick={(e) => scrollToSection(e, "documentation")}
                className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-cream-50 px-6 py-3.5 text-sm font-bold text-navy-900 shadow-sm transition-all duration-200 hover:bg-white"
              >
                View Service Scope Below
                <ArrowUpRight className="h-4 w-4 rotate-90 text-sky-600" />
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3 border-t border-sky-600/10 pt-5">
              <Info className="h-4 w-4 shrink-0 text-sky-600" />
              <span className="text-xs font-medium text-navy-900/60">
                Contact Hraize to discuss the service requirements and delivery arrangements.
              </span>
            </div>
          </motion.div>

          {/* Image + stat tiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="grid gap-5 lg:col-span-5"
          >
            <div className="relative h-44 overflow-hidden rounded-3xl border border-sky-600/15 sm:h-52 lg:h-56">
              <Image
                src="/documentation.png"
                alt="Employee documentation being signed and maintained"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-300">
                  Records that stay audit-ready
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  Documentation, maintained end to end.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col justify-between rounded-3xl border border-forest-500/20 bg-teal-100 p-5">
                <FolderKanban className="h-6 w-6 text-forest-600" />
                <div>
                  <span className="block text-3xl font-black leading-none text-forest-600">06</span>
                  <span className="mt-1.5 block text-[10px] font-black uppercase tracking-[0.15em] text-navy-900/55">
                    Core admin areas
                  </span>
                </div>
              </div>

              <div className="relative h-full min-h-[150px] overflow-hidden rounded-3xl border border-sky-600/15">
                <Image
                  src="/health-checkup.png"
                  alt="Organised, calm office workspace"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-forest-600/25" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-navy-900 backdrop-blur">
                  Orderly processes
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ============ SCOPE INTRO ============ */}
        <div className="mb-8 mt-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-forest-600">
              Operational Scope
            </span>
            <h2 className="mt-1.5 max-w-2xl text-2xl font-black uppercase leading-tight tracking-tight text-navy-900 sm:text-3xl">
              HR &amp; Personnel Administration Scope
            </h2>
            <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-navy-900/65">
              Hraize offers practical personnel administration support across the following core
              requirements:
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {scopePoints.map((point, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 rounded-full border border-forest-500/15 bg-white px-3 py-1.5 text-[11px] font-bold text-navy-900/75 shadow-sm"
              >
                <CheckCircle2 className="h-3 w-3 shrink-0 text-forest-600" />
                {point.replace(/\.$/, "")}
              </span>
            ))}
          </div>
        </div>

        {/* ============ SERVICES BENTO GRID ============ */}
        <div className="grid gap-5 md:grid-cols-6">
          {adminItems.map((item) => {
            const Icon = item.icon;
            return (
              <section
                key={item.id}
                id={item.id}
                className={`scroll-mt-32 flex flex-col rounded-3xl border p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${item.span} ${item.tint}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ${item.iconTone}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] font-black tabular-nums tracking-widest text-navy-900/35">
                    {item.number} / 06
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-black uppercase leading-tight tracking-tight text-navy-900 sm:text-xl">
                  {item.title}
                </h3>

                <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-navy-900/10 bg-white/70 px-3.5 py-3">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-forest-500/15 text-forest-600">
                    <CheckCircle2 className="h-3 w-3" />
                  </span>
                  <span className="text-sm font-bold text-navy-900/85">{item.point}</span>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-navy-900/10 pt-4">
                  <span className="text-[11px] font-medium italic text-navy-900/55">
                    Scope agreed per client.
                  </span>
                  <Link
                    href={`/contact?tab=hr&service=${item.serviceQuery}`}
                    className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-sky-600 transition-colors hover:text-sky-700"
                  >
                    {item.actionLabel}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </section>
            );
          })}
        </div>

        {/* ============ CTA (light card with image) ============ */}
        <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-sky-600/15 bg-white shadow-lg lg:grid-cols-2">
          <div className="order-2 p-8 sm:p-10 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-forest-600 ring-1 ring-inset ring-forest-500/20">
              <ShieldCheck className="h-3.5 w-3.5" />
              Operational Personnel Support
            </span>
            <h3 className="mt-4 text-2xl font-black uppercase leading-tight tracking-tight text-navy-900 sm:text-3xl">
              Need support with your business operations?
            </h3>
            <p className="mt-3 max-w-lg text-sm font-semibold leading-relaxed text-navy-900/65">
              Contact Hraize to discuss the service requirements and delivery arrangements.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact?tab=hr"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-600/25 transition-all hover:bg-sky-700"
              >
                Request a Service Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 px-6 py-3.5 text-sm font-bold text-navy-900 transition-all hover:bg-cream-50"
              >
                All services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative order-1 min-h-[240px] lg:order-2">
            <Image
              src="/contact-3.png"
              alt="Colleagues reviewing personnel records together"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-navy-900/10 to-navy-900/45" />
            <span className="absolute bottom-5 right-5 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-navy-900 backdrop-blur">
              People-first records
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
