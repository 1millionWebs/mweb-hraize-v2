"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Eye,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Sparkles,
  Users,
  Award,
  Layers,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Building2,
  Check,
} from "lucide-react";
import { SectionLabel } from "./UIElements";

export const AboutUs: React.FC = () => {
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
      desc: "Services that adapt as your operational needs evolve.",
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
    <div className="bg-cream-100 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER SECTION ============ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>About Hraize</SectionLabel>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight leading-[1.08]">
            Practical Business Support.
            <br />
            <span className="text-sky-600">Professional Service Delivery.</span>
          </h1>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-600/20 bg-white/80 px-4 py-1.5 shadow-sm">
            <MapPin className="h-4 w-4 text-copper-500" />
            <span className="text-xs font-bold text-navy-900/80">
              Headquartered in Bengaluru, India
            </span>
          </div>

          <p className="mt-4 text-base sm:text-lg text-navy-900/70 font-semibold leading-relaxed">
            Hraize is a business support services company based in Bengaluru, India,
            serving growing businesses and established organisations.
          </p>
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

          <div className="grid gap-6 sm:grid-cols-2">
            {narrativeParagraphs.map((para, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="group relative rounded-3xl border border-sky-600/15 bg-white p-7 sm:p-8 shadow-sm hover:border-sky-600/35 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-sky-600 leading-none">
                    {para.number}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-navy-900 mb-3 group-hover:text-sky-700 transition-colors">
                  {para.title}
                </h3>
                <p className="text-sm font-medium text-navy-900/70 leading-relaxed">
                  {para.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ============ OUR SERVICE APPROACH ============ */}
        <div className="mb-24 rounded-3xl bg-navy-card p-8 sm:p-12 lg:p-14 border border-navy-900/15 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-600/15 blur-3xl pointer-events-none" />
          <div className="relative text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-sky-300">
              <Sparkles className="h-3 w-3 text-copper-400" />
              Guiding Standards
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight">
              Our Service Approach
            </h2>
            <p className="mt-3 text-sm text-sage-100/70 font-semibold leading-relaxed">
              Five core principles that guide every client interaction and service delivery arrangement.
            </p>
          </div>

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {serviceApproachPrinciples.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600/20 text-sky-400 mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-black uppercase tracking-tight text-white mb-2">
                      {principle.name}
                    </h3>
                    <p className="text-xs font-medium text-sage-100/70 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[10px] font-bold text-copper-400 uppercase tracking-wider">
                    <Check className="h-3 w-3" />
                    <span>Principle 0{idx + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
              To deliver practical, professional and consistent business support that enables our
              clients to focus on growth and core operations.
            </p>
          </motion.div>
        </div>

        {/* ============ CLOSING TAGLINE & CALL TO ACTION ============ */}
        <div className="rounded-3xl bg-cream-50 border border-sky-600/25 p-8 sm:p-12 text-center shadow-md">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-copper-500">
            Hraize Identity
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-navy-900">
            Hraize – Supporting Your People. Simplifying Your Business.
          </h2>
          <p className="mt-4 text-base font-semibold text-navy-900/65 max-w-2xl mx-auto leading-relaxed">
            Practical support for businesses across recruitment, payroll, administration, and modern digital solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?tab=consultation"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-600/25 hover:bg-sky-700 transition-all duration-200"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* <Link
              href="/contact?tab=quote"
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white px-7 py-3.5 text-sm font-bold text-navy-900 shadow-sm hover:bg-cream-100 transition-all duration-200"
            >
              Get a Service Quote
              <ArrowUpRight className="h-4 w-4 text-sky-600" />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
