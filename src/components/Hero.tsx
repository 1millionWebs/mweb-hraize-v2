"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Users,
  FileText,
  Globe,
  CheckCircle2,
  Sparkles,
  Clock,
  Layers,
} from "lucide-react";

interface HeroProps {
  onGetStarted?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-white"
    >
      {/* Decorative ambient background glows */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute top-[-10%] right-[-5%] h-[520px] w-[520px] rounded-full bg-sky-600/8 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[420px] w-[420px] rounded-full bg-copper-400/8 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.035]">
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#0284c7"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-20 lg:px-8 lg:pt-16 lg:pb-28"
        style={{ y: contentY }}
      >
        <div className="grid min-h-[calc(100vh-6rem)] grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* ============ LEFT COLUMN: VALUE PROPOSITION ============ */}
          <motion.div
            className="lg:col-span-7 pt-4 lg:pt-0"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Tagline Pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-600/25 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-copper-400 animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.16em] text-navy-900">
                The right support to keep business moving.
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-navy-900 leading-[1.06]">
              HR Solutions.
              <br />
              Business Support.
              <br />
              <span className="text-sky-600">Digital Services.</span>
            </h1>

            {/* Introductory Paragraphs */}
            <p className="mt-6 text-base sm:text-lg text-navy-900/75 font-medium max-w-2xl leading-relaxed">
              Hraize provides practical HR, recruitment, business administration
              and digital IT services to help organisations operate smoothly and scale
              effectively.
            </p>

            {/* <p className="mt-3 text-sm sm:text-base text-navy-900/65 font-medium max-w-2xl leading-relaxed">
              By combining experienced service delivery with reliable operational
              support, we assist businesses in managing essential functions
              efficiently — allowing teams to focus on their core priorities.
            </p> */}

            {/* Primary & Secondary Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?tab=consultation"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-8 py-4 text-sm font-black tracking-wider text-white shadow-lg shadow-sky-600/25 hover:bg-sky-700 transition-all duration-200 cursor-pointer"
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white/90 backdrop-blur-sm px-7 py-4 text-sm font-black text-navy-900 shadow-sm hover:bg-cream-50 transition-all duration-200"
              >
                Get a Service Quote
                <ArrowUpRight className="h-4 w-4 text-sky-600" />
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 pt-6 border-t border-navy-900/10 text-xs font-bold text-navy-900/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Headquartered in Bengaluru</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-600" />
                <span>Structured Delivery Routines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-copper-500" />
                <span>Single Point of Coordination</span>
              </div>
            </div>
          </motion.div>

          {/* ============ RIGHT COLUMN: OPERATIONAL SYNCHRONY CONSOLE ============ */}
          <motion.div
            className="lg:col-span-5 relative w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative rounded-3xl border border-sky-600/20 bg-white/90 p-5 sm:p-7 shadow-2xl shadow-navy-900/10 backdrop-blur-md">
              {/* Top Status Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-navy-900/10">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-600/10 text-sky-600">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-navy-900">
                      Operations Console
                    </h3>
                    <p className="text-[10px] font-bold text-sky-600">
                      Bengaluru Delivery Hub
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 text-[10px] font-black text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Active Support</span>
                </div>
              </div>

              {/* 4 Synchronized Operational Pillars Grid */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 01. HR & Payroll */}
                <div className="group rounded-2xl border border-sky-600/15 bg-cream-50/60 p-3.5 transition-all duration-200 hover:border-sky-600/40 hover:bg-white hover:shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-600/10 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 bg-sky-100/60 px-2 py-0.5 rounded-md">
                      01 · Payroll
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-navy-900 leading-snug">
                    Monthly Payroll &amp; Compliance
                  </h4>
                  <p className="mt-1 text-[11px] font-semibold text-navy-900/60 leading-tight">
                    PF, ESI, PT calculations &amp; filing coordination
                  </p>
                  <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-bold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Statutory record maintenance</span>
                  </div>
                </div>

                {/* 02. Recruitment Solutions */}
                <div className="group rounded-2xl border border-sky-600/15 bg-cream-50/60 p-3.5 transition-all duration-200 hover:border-sky-600/40 hover:bg-white hover:shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-600/10 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Users className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 bg-sky-100/60 px-2 py-0.5 rounded-md">
                      02 · Hiring
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-navy-900 leading-snug">
                    Recruitment &amp; Staffing
                  </h4>
                  <p className="mt-1 text-[11px] font-semibold text-navy-900/60 leading-tight">
                    Permanent &amp; contract talent sourcing
                  </p>
                  <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-bold text-sky-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    <span>Vetted candidate pipeline</span>
                  </div>
                </div>

                {/* 03. Business Administration */}
                <div className="group rounded-2xl border border-copper-400/20 bg-cream-50/60 p-3.5 transition-all duration-200 hover:border-copper-400/50 hover:bg-white hover:shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-copper-400/15 text-copper-600 group-hover:bg-copper-400 group-hover:text-white transition-colors">
                      <FileText className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-copper-700 bg-copper-100/60 px-2 py-0.5 rounded-md">
                      03 · Admin
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-navy-900 leading-snug">
                    Invoice &amp; Receivables
                  </h4>
                  <p className="mt-1 text-[11px] font-semibold text-navy-900/60 leading-tight">
                    Due-date tracking &amp; payment reminders
                  </p>
                  <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-bold text-copper-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-copper-500" />
                    <span>Weekly receivables reporting</span>
                  </div>
                </div>

                {/* 04. Website Solutions */}
                <div className="group rounded-2xl border border-sky-600/15 bg-cream-50/60 p-3.5 transition-all duration-200 hover:border-sky-600/40 hover:bg-white hover:shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-600/10 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Globe className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 bg-sky-100/60 px-2 py-0.5 rounded-md">
                      04 · Digital
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-navy-900 leading-snug">
                    Digital IT Services
                  </h4>
                  <p className="mt-1 text-[11px] font-semibold text-navy-900/60 leading-tight">
                    Web &amp; SEO, apps, ERP &amp; cloud
                  </p>
                  <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-bold text-sky-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    <span>Technology partner delivery</span>
                  </div>
                </div>
              </div>

              {/* Bottom Operating Assurance Banner */}
              <div className="mt-5 rounded-2xl border border-sky-600/15 bg-white p-3.5 shadow-sm">
                <div className="flex items-center justify-between text-xs font-bold text-navy-900">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-sky-600" />
                    <span>Structured Execution Cycles</span>
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-sky-600 hover:text-sky-700"
                  >
                    All Services
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
