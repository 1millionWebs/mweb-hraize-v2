import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle, XCircle, Users, Award, Briefcase, ChevronRight,
  Building2, GraduationCap, Check, ArrowRight, Briefcase as BriefcaseIcon, User
} from "lucide-react";
import { SectionLabel, FeatureCheck, StepLine } from "./UIElements";

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
        if (element) element.scrollIntoView({ behavior: "smooth", block: "center" });
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

  const hiringModels = [
    {
      id: "permanent",
      title: "Permanent Placement",
      desc: "Full-time positions for your core team. We handle sourcing, screening, coaching, and placement. 60-day replacement guarantee included.",
      tag: "Core Team"
    },
    {
      id: "contract",
      title: "Contract & Temporary Staffing",
      desc: "Project-based, seasonal, or interim roles from 3 months to 12 months.",
      tag: "Flexible Output"
    },
    {
      id: "graduate",
      title: "Graduate & Emerging Talent Pipeline",
      desc: "Build your bench before you need it. We identify high-potential graduates and early-career professionals.",
      tag: "Next Generation"
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

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const careerCards = [
    {
      id: "employer",
      title: "For Employers",
      subtitle: "Ready to Hire the Best?",
      desc: "Tell us what you're looking for. We'll build a shortlist of exceptional candidates.",
      image: "/services-recruitment.png",
      icon: BriefcaseIcon,
      details: [
        "Submit your job requisition",
        "Get 3-5 vetted candidates",
        "Interview-ready profiles delivered",
        "60-day replacement guarantee",
        "Full process management"
      ],
      buttonText: "Submit Your Requisition",
      onClick: onEmployerClick
    },
    {
      id: "candidate",
      title: "For Candidates",
      subtitle: "Ready for Your Next Opportunity?",
      desc: "Tell us about your background. We'll connect you with growing industries.",
      image: "/services-recruitment.png",
      icon: User,
      details: [
        "Submit your resume",
        "Get matched with top employers",
        "Interview coaching included",
        "Career guidance & support",
        "Access to exclusive opportunities"
      ],
      buttonText: "Submit Your Resume",
      onClick: onCandidateClick
    }
  ];

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Talent Requisition</SectionLabel>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            Quality Hiring for Growing Business
          </h2>
          <p className="mt-3 text-sm font-bold text-navy-900/50 uppercase tracking-[0.12em]">
            Permanent & Contract Staffing Services
          </p>
          <p className="mt-4 text-sm sm:text-base text-navy-900/60 font-semibold">
            We deliver high-caliber candidates aligned with your culture.
          </p>
        </div>

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

        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>Engagement Structures</SectionLabel>
            <h3 className="mt-3 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Hiring Models
            </h3>
            <p className="mt-2 text-sm text-navy-900/60 font-semibold">
              Dynamic placements mapped to your business growth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {hiringModels.map((m, idx) => (
              <div key={m.id} id={m.id} className="flex items-start gap-6 p-6 border-b border-sky-600/50 last:border-b-0">
                <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sky-600/5 text-sky-600">
                  <span className="text-lg font-black">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-base font-black text-navy-900 uppercase tracking-tight">{m.title}</h4>
                    <span className="text-[10px] font-bold text-copper-400 bg-copper-50 px-2 py-0.5 rounded-full">{m.tag}</span>
                  </div>
                  <p className="text-xs text-navy-900/60 font-medium mt-2">{m.desc}</p>
                  {/* <div className="mt-3 pt-3 border-sky-600/50">
                    <span className="text-[10px] font-bold text-sky-600/60 uppercase tracking-wide">60-Day Replacement Covered</span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

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

        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>A Career Partner for Every Stage</SectionLabel>
            <h3 className="mt-3 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Choose Your Path
            </h3>
            <p className="mt-2 text-sm text-navy-900/60 font-semibold">
              Whether you're hiring or job-seeking, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerCards.map((card, idx) => {
              const Icon = card.icon;
              const isActive = activeCard === card.id;
              return (
                <motion.div
                  key={card.id}
                  className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onHoverStart={() => setActiveCard(card.id)}
                  onClick={() => setActiveCard(isActive ? null : card.id)}
                >
                  {/* Background image */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                    animate={{ opacity: isActive ? 0 : 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  />

                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black-100/80 via-black-100/20 to-transparent" />

                  {/* Index number */}
                  <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-black">
                    {idx + 1}
                  </div>

                  {/* Title - always visible at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[10px] font-mono tracking-widest bg-white/10 px-2.5 py-1 rounded inline-block uppercase font-bold text-white mb-3">
                      {card.title}
                    </span>
                    <h4 className="text-lg font-black text-white leading-tight">{card.subtitle}</h4>
                  </div>

                  {/* Details overlay - appears on hover (desktop) or tap (mobile) */}
                  <motion.div
                    className="absolute inset-0 p-6 flex flex-col justify-center bg-navy-900/95"
                    animate={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none" }}
                    whileHover={{ opacity: 1, pointerEvents: "auto" }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-600/20 text-sky-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase font-bold block">{card.title}</span>
                        <h4 className="text-base font-black text-white leading-tight">{card.subtitle}</h4>
                      </div>
                    </div>
                    <p className="text-xs text-white/60 font-medium mb-4 leading-relaxed">{card.desc}</p>
                    <ul className="space-y-2.5 mb-6">
                      {card.details.map((detail, di) => (
                        <li key={di} className="flex items-start gap-2.5">
                          <Check className="h-3.5 w-3.5 text-sky-400 mt-0.5 shrink-0" />
                          <span className="text-xs text-white/80 font-medium leading-snug">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        card.onClick();
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-xs font-black hover:bg-sky-700 shadow-md cursor-pointer text-white transition-all w-fit"
                    >
                      {card.buttonText}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};