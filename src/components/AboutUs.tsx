"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Eye,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Users,
  Award,
  Layers,
  ArrowRight,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { SectionLabel } from "./UIElements";

export const AboutUs: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (num: string) => {
    setExpandedCards((prev) => ({ ...prev, [num]: !prev[num] }));
  };
  const narrativeParagraphs = [
    {
      number: "01",
      title: "Addressing Operational Demands",
      text: "Every growing business reaches a point where operational demands outpace internal capacity. Managing day-to-day HR administration, coordinating recruitment, tracking invoices and maintaining customer follow-ups can consume substantial management time — time better spent on business development, client delivery and strategic growth.",
    },
    {
      number: "02",
      title: "An Extended Support Team",
      text: "Hraize was established to provide organisations with reliable, professional support across these essential business functions. We act as an extended support team, managing essential operational workflows and administrative processes with consistency, accuracy and accountability.",
    },
    {
      number: "03",
      title: "Structured Execution & Transparency",
      text: "Our approach is practical and grounded in structured execution. We work closely with each client to understand their operational requirements, agree on clear service scopes and establish dependable delivery routines. Through regular reporting, open communication and dedicated service coordinators, we ensure our clients always have complete visibility over the work being carried out.",
    },
    {
      number: "04",
      title: "Momentum Without Overhead",
      text: "By providing reliable business support services, we help organisations maintain operational momentum, reduce administrative burden and access experienced professional support without the overhead of expanding internal teams.",
    },
  ];

  const serviceApproachPrinciples = [
    {
      name: "Practical",
      desc: "Focused on what works for your business, not overly complex processes.",
      icon: CheckCircle2,
    },
    {
      name: "Accountable",
      desc: "Ownership of tasks, clear timelines and regular status updates.",
      icon: ShieldCheck,
    },
    {
      name: "Flexible",
      desc: "Services that seamlessly adapt as your operational needs evolve.",
      icon: Layers,
    },
    {
      name: "Professional",
      desc: "High standards of accuracy, confidentiality and communication.",
      icon: Award,
    },
    {
      name: "Collaborative",
      desc: "Working alongside your team to support your business goals.",
      icon: Users,
    },
  ];

  return (
    <div className="bg-cream-100 py-16 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER SECTION ============ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>OUR COMPANY</SectionLabel>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight leading-[1.08]">
            <span className="block whitespace-nowrap">
              <span className="text-sky-600">ABOUT</span> HRAIZE
            </span>
          </h1>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-600/20 bg-white/80 px-4 py-1.5 shadow-sm">
            <MapPin className="h-4 w-4 text-copper-500" />
            <span className="text-xs font-bold text-navy-900/80">
              Headquartered in Bengaluru, India
            </span>
          </div>

          <p className="mt-4 text-base sm:text-sm text-navy-900/70 font-semibold leading-relaxed">
            Based in Bengaluru, Hraize provides business support services to growing and established organisations.
          </p>
        </div>


        {/* ============ VISION & MISSION ============ */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl bg-white border border-sky-600/15 p-8 sm:p-10 shadow-sm text-center"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600/10 text-sky-600 mb-5">
              <Eye className="h-7 w-7" />
            </div>
            <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-copper-500 mb-1">
              Forward Outlook
            </span>
            <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tight mb-4">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-navy-900/70 font-semibold leading-relaxed max-w-md mx-auto">
              To be the trusted operational support partner for businesses seeking dependable,
              high-quality business services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="rounded-3xl bg-white border border-sky-600/15 p-8 sm:p-10 shadow-sm text-center"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600/10 text-sky-600 mb-5">
              <Rocket className="h-7 w-7" />
            </div>
            <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-copper-500 mb-1">
              Core Purpose
            </span>
            <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tight mb-4">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-navy-900/70 font-semibold leading-relaxed max-w-md mx-auto">
              To deliver practical, professional and consistent support that enables our
              clients to focus on growth and core operations.
            </p>
          </motion.div>
        </div>


        {/* ============ CORE COMPANY NARRATIVE ============ */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-copper-500">
              Our Perspective
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black uppercase text-navy-900 tracking-tight">
              Why Organisations Partner With Hraize
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 items-start">
            {narrativeParagraphs.map((para, idx) => {
              const isExpanded = !!expandedCards[para.number];
              return (
                <motion.div
                  key={para.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                  className="group relative rounded-3xl border border-sky-600/15 bg-white p-7 sm:p-8 shadow-sm hover:border-sky-600/35 hover:shadow-lg transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    {/* <span className="text-2xl font-black text-sky-600 leading-none">
                      {para.number}
                    </span> */}
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-navy-900 mb-2.5 group-hover:text-sky-700 transition-colors">
                    {para.title}
                  </h3>
                  <p
                    className={`text-sm font-medium text-navy-900/70 leading-relaxed ${isExpanded ? "" : "line-clamp-2"
                      }`}
                  >
                    {para.text}
                  </p>
                  <button
                    type="button"
                    onClick={() => toggleCard(para.number)}
                    aria-expanded={isExpanded}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-sky-600 hover:text-sky-700 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? "Show less" : "Read more"}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ============ OUR SERVICE APPROACH ============ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Our Service Approach
            </h2>
            <div className="mt-4 h-1 w-20 bg-sky-600 mx-auto rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {serviceApproachPrinciples.map((principle, idx) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    className="text-center group"
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-sky-600/10 mb-3 lg:mb-4 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all"
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 lg:w-8 lg:h-8 transition-colors" />
                    </motion.div>
                    <h3 className="text-sm lg:text-lg font-black text-navy-900 mb-1 lg:mb-2 group-hover:text-sky-700 transition-colors duration-300">
                      {principle.name}
                    </h3>
                    <p className="text-xs lg:text-sm text-navy-900/60 font-semibold leading-relaxed">
                      {principle.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>



        {/* ============ CLOSING TAGLINE & CALL TO ACTION ============ */}
        <div className="relative overflow-hidden rounded-3xl bg-white p-8 sm:p-12 lg:p-16 text-center shadow-xl border border-sky-600/20">
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-navy-900 leading-tight">
              Supporting Your People. Simplifying Your Business.
            </h2>
            <p className="mt-4 text-base sm:text-sm font-medium text-navy-900/65 max-w-2xl mx-auto leading-relaxed">
              Practical support for businesses across recruitment, payroll, administration, and modern digital solutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?tab=consultation"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-8 py-4 text-sm font-black tracking-wider text-white shadow-lg shadow-sky-600/25 hover:bg-sky-700 transition-all duration-200"
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
