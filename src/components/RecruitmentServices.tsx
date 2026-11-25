"use client";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  Users,
  Award,
  Briefcase,
  ChevronRight,
  Building2,
  GraduationCap,
  Check,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
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
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    };
    const timer = setTimeout(scrollToHash, 250);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  const corePillars = [
    {
      id: "sourcing",
      title: "Vetted Candidates, Not Bulk Lists",
      desc: "Every candidate has passed technical, behavioural, and culture-fit evaluation. No screening time wasted on unqualified profiles.",
    },
    {
      id: "interview",
      title: "Candidates Come Prepared",
      desc: "We coach candidates before interviews so they understand your business and show up professionally.",
    },
    {
      id: "process",
      title: "Full Process Management",
      desc: "We handle JD definition, sourcing, screening, interview coordination, and offer negotiations.",
    },
    {
      id: "quality",
      title: "Quality Over Speed",
      desc: "Finding the right cultural and technical match matters more than filling roles fast.",
    },
  ];

  const hiringModels = [
    {
      id: "permanent",
      title: "Permanent Placement",
      desc: "Full-time positions for your core team. We handle sourcing, screening, coaching, and placement. 60-day replacement guarantee included.",
      tag: "Core Team",
    },
    {
      id: "contract",
      title: "Contract & Temporary Staffing",
      desc: "Project-based, seasonal, or interim roles from 3 months to 12 months with flexible deployment.",
      tag: "Flexible Output",
    },
    {
      id: "graduate",
      title: "Graduate & Emerging Talent Pipeline",
      desc: "Build your bench before you need it. We identify high-potential graduates and early-career professionals.",
      tag: "Next Generation",
    },
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
    },
  ];

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER SECTION ============ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Recruitment & Staffing</SectionLabel>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight leading-[1.08]">
            Quality Hiring for Growing Business
          </h1>
          <p className="mt-3 text-sm font-bold text-navy-900/50 uppercase tracking-[0.12em]">
            Permanent &amp; Contract Staffing Services
          </p>
          <p className="mt-4 text-sm sm:text-base text-navy-900/70 font-semibold leading-relaxed">
            We deliver high-caliber candidates aligned with your culture, technical standards, and operational goals.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {/* <button
              onClick={onEmployerClick}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3 text-sm font-black text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition-all duration-200 cursor-pointer"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </button> */}
            <Link
              href="/contact?tab=quote&service=recruitment"
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white px-6 py-3 text-sm font-bold text-navy-900 shadow-sm hover:bg-cream-50 transition-all duration-200"
            >
              Get a Service Quote
              <ArrowUpRight className="h-4 w-4 text-sky-600" />
            </Link>
          </div>
        </div>

        {/* ============ PIPELINE ARCHITECTURE & THE HRAIZE DIFFERENCE ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 relative bg-navy-card p-8 rounded-3xl flex flex-col justify-between min-h-[400px] border border-navy-900/10 shadow-xl">
            <div>
              <SectionLabel className="text-sky-400">Pipeline Architecture</SectionLabel>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white leading-tight">
                Recruitment Built on Quality, Not Volume
              </h2>
            </div>

            <svg viewBox="0 0 300 180" className="w-full my-6">
              <path
                d="M 20,20 L 280,20 L 190,130 L 110,130 Z"
                fill="none"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <path
                d="M 60,50 L 240,50 L 175,130 L 125,130 Z"
                fill="none"
                stroke="#0284c7"
                strokeOpacity="0.5"
                strokeWidth="2"
              />
              <path
                d="M 125,130 L 175,130 L 160,175 L 140,175 Z"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
              />
              <circle cx="50" cy="35" r="5" fill="white" fillOpacity="0.15" />
              <circle cx="100" cy="35" r="5" fill="white" fillOpacity="0.15" />
              <circle cx="150" cy="35" r="5" fill="#0284c7" fillOpacity="0.5" />
              <circle cx="200" cy="35" r="5" fill="white" fillOpacity="0.15" />
              <circle cx="250" cy="35" r="5" fill="white" fillOpacity="0.15" />
              <circle cx="110" cy="80" r="5" fill="#0284c7" fillOpacity="0.5" />
              <circle cx="150" cy="80" r="5" fill="#38bdf8" />
              <circle cx="190" cy="80" r="5" fill="#0284c7" fillOpacity="0.5" />
              <circle cx="150" cy="150" r="6" fill="#fb923c" />
              <circle cx="150" cy="150" r="2" fill="white" />
            </svg>

            <div className="bg-white/5 border border-sky-600/50 px-3.5 py-2 rounded-xl text-center self-start backdrop-blur-sm">
              <span className="text-[10px] font-mono text-sage-100/60 block uppercase tracking-wider">
                Selection Rate
              </span>
              <span className="text-sm font-black text-copper-400">3.5% Match SLA</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              The Hraize Difference
            </h2>
            <div className="space-y-4">
              {corePillars.map((p, idx) => (
                <div
                  key={idx}
                  id={p.id}
                  className="shadow-sm flex flex-col gap-1 p-5 rounded-2xl bg-white border border-sky-600/15 hover:border-sky-600/40 hover:shadow-md transition-all scroll-mt-24"
                >
                  <FeatureCheck>{p.title}</FeatureCheck>
                  <p className="text-xs text-navy-900/65 font-medium ml-8 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============ HIRING MODELS ============ */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>Engagement Structures</SectionLabel>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Hiring Models
            </h2>
            <p className="mt-2 text-sm text-navy-900/65 font-semibold">
              Dynamic placements mapped to your business requirements and stage of growth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-sky-600/15 shadow-sm space-y-4">
            {hiringModels.map((m, idx) => (
              <motion.div
                key={m.id}
                id={m.id}
                className="flex items-start gap-6 p-6 border-b border-sky-600/10 last:border-b-0 group hover:bg-cream-50/60 transition-colors rounded-2xl scroll-mt-24"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-600/10 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <span className="text-lg font-black">{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-base font-black text-navy-900 uppercase tracking-tight">
                      {m.title}
                    </h3>
                    <span className="text-[10px] font-black uppercase tracking-wider text-copper-600 bg-copper-50 border border-copper-200/60 px-2.5 py-0.5 rounded-full">
                      {m.tag}
                    </span>
                  </div>
                  <p className="text-xs text-navy-900/65 font-medium mt-2 leading-relaxed">
                    {m.desc}
                  </p>
                  <div className="mt-3 pt-3 border-t border-sky-600/10 flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-[11px] font-bold text-navy-900/60">
                      60-Day Replacement Guarantee Covered
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ============ WHO WE RECRUIT ============ */}
        <div className="mb-24 rounded-3xl bg-navy-card p-8 sm:p-12 border border-navy-900/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-sky-600/10 blur-3xl pointer-events-none" />
          <div className="relative text-center max-w-2xl mx-auto mb-12">
            <SectionLabel className="text-sky-400">Who We Serve</SectionLabel>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Who We Recruit
            </h2>
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-xs font-black text-sky-400 uppercase tracking-wider mb-4">
                Roles We Fill
              </p>
              <ul className="space-y-3">
                {[
                  "HR, Payroll and Administrative roles",
                  "Engineers and Technical Specialists",
                  "Operations, Finance and Project Management",
                  "Sales, Marketing and Customer Success positions",
                  "Entry to mid-level and leadership positions",
                ].map((role, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-sky-600/20 text-sky-400 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-sage-100/85 font-medium">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-black text-copper-400 uppercase tracking-wider mb-4">
                Industries We Serve
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Manufacturing",
                  "Engineering",
                  "Healthcare & Diagnostics",
                  "Hospitality",
                  "Revenue Cycle Management",
                  "Education & EdTech",
                  "Retail & Distribution",
                  "Financial & Advisory Services",
                ].map((industry, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold text-sage-100/80 hover:bg-white/10 transition-colors"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-xs text-sage-100/50 font-medium italic">
                You only see candidates who meet your verified hiring criteria and culture fit.
              </p>
            </div>
          </div>
        </div>

        {/* ============ TRADITIONAL AGENCY VS HRAIZE ============ */}
        <div className="mb-24 bg-white border shadow-md border-sky-600/20 rounded-3xl p-6 sm:p-10 overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Agency Matrix</SectionLabel>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Traditional Agency vs. Hraize
            </h2>
            <p className="mt-2 text-xs text-navy-900/60 font-bold uppercase tracking-wider">
              Comparing operational frameworks side-by-side.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-sky-600/30">
                  <th className="py-4 px-4 text-xs font-black uppercase text-navy-900 tracking-wider w-[22%]">
                    Dimension
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase text-sky-700 tracking-wider bg-sky-600/10 rounded-t-xl w-[40%]">
                    Hraize Advantage
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase text-navy-900/40 tracking-wider w-[38%]">
                    Traditional Agency
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-600/10 font-medium">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-cream-50/50 transition-colors">
                    <td className="py-4 px-4 text-xs font-black text-navy-900 uppercase">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-xs text-navy-900 bg-sky-600/5 border-x border-sky-600/20 font-bold">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{row.hraize}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-xs text-navy-900/50">
                      <div className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ============ BOTTOM ACTION CARDS ============ */}
        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div
            className="rounded-3xl shadow-xl bg-navy-card p-8 sm:p-10 text-white flex flex-col justify-between items-start relative overflow-hidden group border border-navy-900/10"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
              },
            }}
          >
            <motion.span
              className="text-[10px] font-mono tracking-widest bg-white/10 px-3 py-1 rounded-full inline-block uppercase font-bold mb-4 text-sky-300"
              whileHover={{ letterSpacing: "0.25em" }}
              transition={{ duration: 0.3 }}
            >
              For Employers
            </motion.span>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-3">
              Ready to Hire the Best?
            </h3>
            <p className="text-xs sm:text-sm text-sage-100/70 leading-relaxed font-semibold mb-6">
              Tell us what you&apos;re looking for. We&apos;ll build a shortlist of exceptional,
              interview-ready candidates with a 60-day replacement guarantee.
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.button
                onClick={onEmployerClick}
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-xs font-black hover:bg-sky-700 shadow-md cursor-pointer text-white transition-all uppercase tracking-wider"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Your Requisition
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              <Link
                href="/contact?tab=quote&service=recruitment"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-xs font-bold text-white hover:bg-white/10 transition-all uppercase tracking-wider"
              >
                Get a Quote
                <ArrowUpRight className="h-4 w-4 text-sky-400" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl bg-white border shadow-xl border-sky-600/20 p-8 sm:p-10 flex flex-col justify-between items-start relative overflow-hidden group"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
              },
            }}
          >
            <motion.span
              className="text-[10px] font-mono tracking-widest bg-sky-600/10 px-3 py-1 rounded-full inline-block uppercase font-bold text-sky-700 mb-4"
              whileHover={{ letterSpacing: "0.25em" }}
              transition={{ duration: 0.3 }}
            >
              For Candidates
            </motion.span>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-navy-900 tracking-tight mb-3">
              Ready for Your Next Opportunity?
            </h3>
            <p className="text-xs sm:text-sm text-navy-900/65 leading-relaxed font-semibold mb-6">
              Tell us about your background and aspirations. We&apos;ll connect you with vetted career
              opportunities across growing industries.
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.button
                onClick={onCandidateClick}
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-xs font-black hover:bg-sky-700 shadow-md cursor-pointer text-white transition-all uppercase tracking-wider"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Your Resume
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              <Link
                href="/vacancies"
                className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-cream-50 px-5 py-3.5 text-xs font-bold text-navy-900 hover:bg-cream-100 transition-all uppercase tracking-wider"
              >
                View Vacancies
                <ArrowUpRight className="h-4 w-4 text-sky-600" />
              </Link>
            </div>
          </motion.div>
        </motion.div> */}
      </div>
    </div>
  );
};
