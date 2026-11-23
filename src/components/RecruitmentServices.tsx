"use client";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle, XCircle, Users, Award, Briefcase, ChevronRight,
  Building2, GraduationCap, Check, ArrowRight, UserCheck,
  Search, CalendarCheck, ShieldCheck, Filter, Sparkles, ArrowDown,
  Info
} from "lucide-react";
import { SectionLabel, FeatureCheck } from "./UIElements";

interface RecruitmentServicesProps {
  onEmployerClick: () => void;
  onCandidateClick: () => void;
}

export const RecruitmentServices: React.FC<RecruitmentServicesProps> = ({
  onEmployerClick,
  onCandidateClick,
}) => {
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

  const quickNav = [
    { id: "permanent", label: "01. Permanent Recruitment", icon: Briefcase },
    { id: "contract", label: "02. Contract & Temp Staffing", icon: Users },
    { id: "sourcing", label: "03. Sourcing & Screening", icon: Search },
    { id: "interview", label: "04. Interview Coordination", icon: CalendarCheck },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const corePillars = [
    {
      title: "Vetted Candidates, Not Bulk Lists",
      desc: "Every candidate has passed technical, behavioural, and culture-fit evaluation. No screening time wasted on unqualified profiles."
    },
    {
      title: "Candidates Come Prepared",
      desc: "We coach candidates before interviews so they understand your business and show up professionally."
    },
    {
      title: "Full Process Management",
      desc: "We handle JD definition, sourcing, screening, interview coordination, and offer negotiations."
    },
    {
      title: "Quality Over Speed",
      desc: "Finding the right cultural and technical match matters more than filling roles fast."
    }
  ];

  const comparisonRows = [
    {
      feature: "Candidate Volume",
      agency: "Sends 50-100 raw CVs based on keywords",
      hraize: "Sends 3-5 rigorously vetted, interview-ready candidates",
    },
    {
      feature: "Screening Burden",
      agency: "You spend hours verifying basics",
      hraize: "All screening, technical filters & background checks done for you",
    },
    {
      feature: "Interview Preparation",
      agency: "Candidate shows up blind and unprepared",
      hraize: "Candidate thoroughly briefed and coached on your exact business needs",
    },
    {
      feature: "Transparency & Costs",
      agency: "Hidden contingency fees, no follow-up reporting",
      hraize: "Transparent pricing, comprehensive feedback loops",
    },
    {
      feature: "Integration Care",
      agency: "Transaction terminates at placement",
      hraize: "Partnership, check-ins, and alignment audits continue through day 60+",
    },
    {
      feature: "Guarantee Security",
      agency: "No candidate replacement guarantee",
      hraize: "FREE replacement if candidate leaves within 60 days for any reason",
    }
  ];

  const DISCLAIMER = "Service scope will be agreed with each client and will reflect the applicable statutory requirements.";

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
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/25 bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-sky-700 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
              02. Recruitment Solutions
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
              className="mt-5 text-4xl font-black uppercase leading-[1.03] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl"
            >
              Recruitment
              <span className="block text-sky-600">Solutions</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            >
              <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-navy-900/70 sm:text-lg">
                Permanent and contract hiring, sourcing, screening, and interview coordination.
              </p>

              <div className="mt-5 flex max-w-xl items-start gap-3 rounded-2xl border-l-4 border-copper-400 bg-white/80 px-4 py-3.5 shadow-sm">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-copper-500" />
                <span className="text-xs font-medium leading-relaxed text-navy-900/75">
                  {DISCLAIMER}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={onEmployerClick}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-600/25 transition-all duration-200 hover:bg-sky-700 cursor-pointer"
                >
                  Request Hiring Support
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#permanent"
                  onClick={(e) => scrollToSection(e, "permanent")}
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
            {/* Image container styled to match decorative copper border (rounded-2rem, copper border) */}
            <div className="relative overflow-hidden rounded-[2rem] border border-copper-400/45 shadow-2xl shadow-navy-900/10">
              <Image
                src="/services-recruitment.png"
                alt="Recruitment specialists reviewing candidate profiles and hiring strategies"
                width={1400}
                height={788}
                priority
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[430px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/15 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-300">
                  Permanent · Contract · Executive Search
                </p>
                <p className="mt-1.5 text-sm font-bold text-white">
                  Quality matches, not resume volume.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 right-4 rounded-2xl border border-sky-600/20 bg-white px-5 py-4 shadow-xl sm:right-8">
              <span className="block text-3xl font-black leading-none text-sky-600">04</span>
              <span className="mt-1.5 block text-[10px] font-black uppercase tracking-[0.15em] text-navy-900/50">
                Hiring models
              </span>
            </div>
          </motion.div>
        </div>

        {/* QUICK JUMP NAVIGATION BAR (Corresponds to Navbar Items) */}
        {/* <div className="mb-20 rounded-2xl bg-white border border-sky-600/20 p-3 shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-widest text-navy-900/40 text-center mb-2.5">
            Quick Jump to Hiring Solutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {quickNav.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-navy-900 bg-cream-50 hover:bg-sky-600 hover:text-white border border-sky-600/15 hover:border-sky-600 transition-all shadow-sm"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div> */}

        {/* PIPELINE ARCHITECTURE CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 relative bg-navy-card p-8 rounded-3xl flex flex-col justify-between min-h-[400px]">
            <div>
              <SectionLabel className="text-sky-400">Pipeline Architecture</SectionLabel>
              <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white leading-tight">
                Recruitment Built on Quality, Not Volume
              </h3>
            </div>
            <svg viewBox="0 0 300 180" className="w-full my-6">
              <path d="M 20,20 L 280,20 L 190,130 L 110,130 Z" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 60,50 L 240,50 L 175,130 L 125,130 Z" fill="none" stroke="var(--color-sky-600)" strokeOpacity="0.5" strokeWidth="2" />
              <path d="M 125,130 L 175,130 L 160,175 L 140,175 Z" fill="none" stroke="var(--color-teal)" strokeWidth="3" />
              <circle cx="50" cy="35" r="5" fill="white" fillOpacity="0.15" />
              <circle cx="100" cy="35" r="5" fill="white" fillOpacity="0.15" />
              <circle cx="150" cy="35" r="5" fill="var(--color-sky-600)" fillOpacity="0.5" />
              <circle cx="200" cy="35" r="5" fill="white" fillOpacity="0.15" />
              <circle cx="250" cy="35" r="5" fill="white" fillOpacity="0.15" />
              <circle cx="110" cy="80" r="5" fill="var(--color-sky-600)" fillOpacity="0.5" />
              <circle cx="150" cy="80" r="5" fill="var(--color-teal)" />
              <circle cx="190" cy="80" r="5" fill="var(--color-sky-600)" fillOpacity="0.5" />
              <circle cx="150" cy="150" r="6" fill="var(--color-copper-400)" />
              <circle cx="150" cy="150" r="2" fill="white" />
            </svg>
            <div className="bg-white/5 border border-sky-600/50 px-3 py-1.5 rounded-lg text-center self-start">
              <span className="text-[10px] font-mono text-sage-100/60 block uppercase">Selection Rate</span>
              <span className="text-sm font-black text-copper-400">3.5% Match SLA</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tight">
              The Hraize Difference
            </h3>
            <div className="space-y-4">
              {corePillars.map((p, idx) => (
                <div key={idx} className="shadow-md flex flex-col gap-1 p-4 rounded-xl bg-cream-50 border border-sky-600/10 hover:border-sky-600/50 transition-colors">
                  <FeatureCheck>{p.title}</FeatureCheck>
                  <p className="text-xs text-navy-900/60 font-medium ml-7">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 DEDICATED SECTIONS MAPPED TO NAVBAR ITEMS */}

        {/* SECTION 1: PERMANENT RECRUITMENT (#permanent) */}
        <section
          id="permanent"
          className="scroll-mt-28 mb-16 rounded-3xl bg-white border border-sky-600/20 shadow-md p-8 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                <span className="text-xs font-black uppercase tracking-widest text-sky-600">
                  Hiring Model 01
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
                Permanent Recruitment & Placement
              </h2>
              <p className="mt-2 text-sm font-bold text-sky-700">
                Full-time talent for your core team with a 60-day replacement guarantee.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-navy-900/70 font-medium leading-relaxed">
                We identify, vet, and place high-performing full-time professionals who align with your long-term organizational vision, culture, and technical benchmarks.
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-xs font-black uppercase tracking-widest text-navy-900/50 mb-3">
                  Scope & Inclusions:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Detailed Job Description (JD) benchmarking & calibration.",
                    "Active headhunting across senior & niche talent pools.",
                    "Rigorous multi-round technical & behavioural evaluations.",
                    "Candidate briefing, company coaching & motivation checks.",
                    "Compensation structuring and offer negotiation.",
                    "Free replacement coverage if candidate exits within 60 days."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="mt-1 h-3.5 w-3.5 rounded-full bg-sky-600/10 text-sky-600 flex items-center justify-center shrink-0">
                        <Check className="h-2 w-2 stroke-[3]" />
                      </div>
                      <span className="text-xs font-semibold text-navy-900/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-4">
                <button
                  onClick={onEmployerClick}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-2.5 text-xs font-black text-white hover:bg-sky-700 transition-colors shadow-sm cursor-pointer"
                >
                  Hire Permanent Staff
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden bg-navy-900">
              <Image
                src="/services-recruitment.png"
                alt="Permanent Recruitment"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40">
                <p className="text-[10px] font-black uppercase text-sky-600">Core Team Security</p>
                <p className="text-xs font-black text-navy-900">60-Day Candidate Replacement Guarantee Included</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CONTRACT & TEMP STAFFING (#contract) */}
        <section
          id="contract"
          className="scroll-mt-28 mb-16 rounded-3xl bg-white border border-sky-600/20 shadow-md p-8 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden bg-navy-900 order-2 lg:order-1">
              <Image
                src="/health-checkup.png"
                alt="Contract and Temporary Staffing"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40">
                <p className="text-[10px] font-black uppercase text-copper-500">Flexible Deployment</p>
                <p className="text-xs font-black text-navy-900">Rapid Onboarding from 3 to 12 Months</p>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                <span className="text-xs font-black uppercase tracking-widest text-sky-600">
                  Hiring Model 02
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
                Contract & Temporary Staffing
              </h2>
              <p className="mt-2 text-sm font-bold text-sky-700">
                Agile workforce deployment for seasonal surges, interim projects, and specialized scopes.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-navy-900/70 font-medium leading-relaxed">
                Scale your capacity dynamically without long-term headcount overhead. We manage contract talent with turnkey speed, verified credentials, and full administrative coordination.
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-xs font-black uppercase tracking-widest text-navy-900/50 mb-3">
                  Contract Deliverables:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Rapid turnaround for project-based engagements (3-12 months).",
                    "Immediate talent availability for surge volumes or maternity leaves.",
                    "Statutory onboarding & timesheet administrative coordination.",
                    "Seamless contract extensions or permanent absorption workflows.",
                    "Pre-vetted contractors across IT, finance, operations & administration.",
                    "Zero long-term severance or separation liability."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="mt-1 h-3.5 w-3.5 rounded-full bg-sky-600/10 text-sky-600 flex items-center justify-center shrink-0">
                        <Check className="h-2 w-2 stroke-[3]" />
                      </div>
                      <span className="text-xs font-semibold text-navy-900/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-4">
                <button
                  onClick={onEmployerClick}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-2.5 text-xs font-black text-white hover:bg-sky-700 transition-colors shadow-sm cursor-pointer"
                >
                  Request Contract Talent
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SOURCING & SCREENING (#sourcing) */}
        <section
          id="sourcing"
          className="scroll-mt-28 mb-16 rounded-3xl bg-white border border-sky-600/20 shadow-md p-8 sm:p-10 lg:p-12"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
            <span className="text-xs font-black uppercase tracking-widest text-sky-600">
              Hiring Capability 03
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
            Candidate Sourcing & Multi-Stage Screening
          </h2>
          <p className="mt-2 text-sm font-bold text-sky-700">
            Multi-channel candidate discovery, rigorous CV filtering, and culture-fit assessments.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-navy-900/70 font-medium leading-relaxed max-w-4xl">
            We eliminate resume spam by evaluating hundreds of profiles to present only 3 to 5 thoroughly vetted, interview-ready candidates who genuinely fit your specific requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-cream-50 border border-sky-600/15">
              <div className="h-10 w-10 rounded-xl bg-sky-600/10 text-sky-600 flex items-center justify-center mb-4">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="text-base font-black text-navy-900 uppercase">Multi-Channel Sourcing</h3>
              <p className="text-xs text-navy-900/65 font-medium mt-2 leading-relaxed">
                Active headhunting across LinkedIn Recruiter, proprietary candidate databases, industry networks, and passive talent channels.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-sky-600/15">
              <div className="h-10 w-10 rounded-xl bg-sky-600/10 text-sky-600 flex items-center justify-center mb-4">
                <Filter className="h-5 w-5" />
              </div>
              <h3 className="text-base font-black text-navy-900 uppercase">Technical Screening</h3>
              <p className="text-xs text-navy-900/65 font-medium mt-2 leading-relaxed">
                Verification of core functional skills, hands-on experience, past project achievements, and salary expectations calibration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-sky-600/15">
              <div className="h-10 w-10 rounded-xl bg-sky-600/10 text-sky-600 flex items-center justify-center mb-4">
                <UserCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-black text-navy-900 uppercase">Culture & Background Fit</h3>
              <p className="text-xs text-navy-900/65 font-medium mt-2 leading-relaxed">
                Communication checks, behavioural evaluation, notice period verification, and preliminary reference checks.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: INTERVIEW COORDINATION (#interview) */}
        <section
          id="interview"
          className="scroll-mt-28 mb-24 rounded-3xl bg-white border border-sky-600/20 shadow-md p-8 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                <span className="text-xs font-black uppercase tracking-widest text-sky-600">
                  Hiring Capability 04
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
                Interview Coordination & Process Management
              </h2>
              <p className="mt-2 text-sm font-bold text-sky-700">
                End-to-end calendar management, candidate coaching, feedback loops, and offer negotiation.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-navy-900/70 font-medium leading-relaxed">
                Hraize takes full ownership of the hiring workflow so your hiring managers never waste valuable time on scheduling conflicts, no-shows, or post-interview follow-ups.
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-xs font-black uppercase tracking-widest text-navy-900/50 mb-3">
                  Coordination Features:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Calendar scheduling and interview link generation across time zones.",
                    "Pre-interview candidate briefing and company context coaching.",
                    "Automated interview reminders to guarantee zero candidate no-shows.",
                    "Structured interviewer feedback collection and decision alignment.",
                    "Post-interview debriefing with candidates to gauge real interest.",
                    "Offer rollout guidance, counter-offer mitigation & joining date tracking."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="mt-1 h-3.5 w-3.5 rounded-full bg-sky-600/10 text-sky-600 flex items-center justify-center shrink-0">
                        <Check className="h-2 w-2 stroke-[3]" />
                      </div>
                      <span className="text-xs font-semibold text-navy-900/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl bg-sky-50/60 border border-sky-600/20 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-md">
                    <CalendarCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase text-navy-900 block">Seamless Process</span>
                    <span className="text-[10px] font-bold text-sky-700 uppercase">Zero Scheduling Drag</span>
                  </div>
                </div>

                <p className="text-xs text-navy-900/70 font-medium leading-relaxed">
                  Candidates arrive briefed, coached, and ready to engage meaningfully with your interview panel.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sky-600/15">
                <button
                  onClick={onEmployerClick}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-xs font-black text-white hover:bg-sky-700 transition-colors shadow-sm cursor-pointer"
                >
                  Start Hiring with Hraize
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE RECRUIT */}
        <div className="mb-24 rounded-3xl bg-navy-card p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel className="text-sky-400">Who We Serve</SectionLabel>
            <h3 className="mt-3 text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Who We Recruit
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-xs font-black text-sky-400 uppercase tracking-wider mb-4">Roles We Fill</p>
              <ul className="space-y-3">
                {[
                  "HR and Administrative roles",
                  "Engineers and Project Managers",
                  "Operations and Management positions",
                  "Sales and Customer Success roles",
                  "Entry to mid-level professional positions"
                ].map((role, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-sky-600/10 text-sky-400 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-sage-100/80 font-medium">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-black text-copper-400 uppercase tracking-wider mb-4">Industries We Serve</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Manufacturing", "Engineering", "Healthcare", "Hospitality",
                  "Revenue Cycle Management", "Education", "Retail", "Financial Services"
                ].map((industry, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/5 border border-sky-600/50 rounded-lg text-xs font-semibold text-sage-100/70">
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-xs text-sage-100/40 font-medium italic">
                You only see candidates who meet your threshold.
              </p>
            </div>
          </div>
        </div>

        {/* AGENCY COMPARISON TABLE */}
        <div className="mb-24 bg-cream-50 border shadow-lg border-sky-600/30 rounded-3xl p-6 sm:p-10 overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Agency Matrix</SectionLabel>
            <h3 className="mt-3 text-2xl font-black text-navy-900 uppercase tracking-tight">
              Traditional Agency vs. Hraize
            </h3>
            <p className="mt-2 text-xs text-navy-900/60 font-bold">
              Comparing operational frameworks side-by-side.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-sky-600/50">
                  <th className="py-4 px-4 text-xs font-black uppercase text-navy-900 tracking-wider w-[20%]">Dimension</th>
                  <th className="py-4 px-4 text-xs font-black uppercase text-navy-900/30 tracking-wider bg-sky-600/5 w-[40%]">Hraize Advantage</th>
                  <th className="py-4 px-4 text-xs font-black uppercase text-sky-600 rounded-t-xl tracking-wider w-[40%]">
                    Traditional Agency
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-600/10 font-medium">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-cream-50 transition-colors">
                    <td className="py-4 px-4 text-xs font-black text-navy-900 uppercase">{row.feature}</td>
                    <td className="py-4 px-4 text-xs text-navy-900 bg-sky-600/5 border-x border-sky-600/50 font-bold">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-forest-500 shrink-0" />
                        {row.hraize}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-xs text-navy-900/50 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-muted shrink-0" />
                      {row.agency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BOTTOM ACTION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-3xl shadow-lg bg-navy-card p-8 text-white flex flex-col justify-between items-start relative overflow-hidden group">
            <span className="text-[10px] font-mono tracking-widest bg-white/10 px-2.5 py-1 rounded inline-block uppercase font-bold mb-4">
              For Employers
            </span>
            <h4 className="text-xl font-black uppercase tracking-tight text-white mb-3">Ready to Hire the Best?</h4>
            <p className="text-xs text-sage-100/70 leading-relaxed font-semibold mb-6">
              Tell us what you&apos;re looking for. We&apos;ll build a shortlist of exceptional candidates.
            </p>
            <button
              onClick={onEmployerClick}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-xs font-black hover:bg-sky-700 shadow-md cursor-pointer text-white transition-all"
            >
              Submit Your Requisition
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-3xl bg-cream-50 border shadow-lg border-sky-600/30 p-8 flex flex-col justify-between items-start relative overflow-hidden group">
            <span className="text-[10px] font-mono tracking-widest bg-sky-600/10 px-2.5 py-1 rounded inline-block uppercase font-bold text-sky-700 mb-4">
              For Candidates
            </span>
            <h4 className="text-xl font-black uppercase text-navy-900 tracking-tight mb-3">Ready for Your Next Opportunity?</h4>
            <p className="text-xs text-navy-900/60 leading-relaxed font-medium mb-6">
              Tell us about your background. We&apos;ll connect you with growing industries.
            </p>
            <button
              onClick={onCandidateClick}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-xs font-black hover:bg-sky-700 shadow-md cursor-pointer text-white transition-all"
            >
              Submit Your Resume
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
