"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, MapPin, Briefcase, X, ChevronRight } from "lucide-react";
import { GlassCard } from "@/src/components/UIElements";
import type { JobVacancy } from "@/src/types";
import Link from "next/link";

const vacancies: JobVacancy[] = [
  {
    id: "j1",
    title: "Senior Workforce Analytics Specialist",
    department: "Analytics & Business Intelligence",
    location: "Bangalore, India (Hybrid)",
    type: "Full-Time",
    experience: "5+ Years",
    salary: "₹18,00,000 - ₹24,00,000",
    description: "Own the creation of executive headcount, cost-prediction, and sentiment dashboards for global logistics clients.",
    requirements: [
      "Expertise in Power BI, Looker Studio, and SQL database querying",
      "Strong experience compiling and translating predictive attrition formulas",
      "Excellent communication skills with C-suite and regional HR directors",
    ],
  },
  {
    id: "j2",
    title: "HR Operations Lead (Consulting Frameworks)",
    department: "HR Systems & Consulting",
    location: "Chennai, India (On-site)",
    type: "Full-Time",
    experience: "7+ Years",
    salary: "₹15,00,000 - ₹20,00,000",
    description: "Spearhead policy audits, handbook creation, and statutory compliance framework setups for early-stage engineering and manufacturing SMEs.",
    requirements: [
      "Proven background writing employee handbooks and establishing SOP models",
      "Deep knowledge of regional labor laws and statutory compliance standards",
      "Prior experience in client-facing advisory or consulting environments",
    ],
  },
  {
    id: "j3",
    title: "Senior Technical Recruiter (Contract & Temp)",
    department: "Recruitment Services",
    location: "Remote (India)",
    type: "Contract",
    experience: "4+ years",
    salary: "Market Competitive hourly",
    description: "Manage end-to-end recruitment pipelines for our top-tier software and project management contractors.",
    requirements: [
      "In-depth tech screening capability for React, Node, and DevOps profiles",
      "Strong portfolio of vetted contract candidate channels",
      "Excellent negotiation and contract lifecycle onboarding experience",
    ],
  },
  {
    id: "j4",
    title: "Graduate HR Associate (Talent Acquisition Pipeline)",
    department: "Graduate Programs",
    location: "Mumbai, India (On-site)",
    type: "Internship",
    experience: "Fresher / Entry-level",
    salary: "₹4,00,000 - ₹6,00,000",
    description: "Help build and filter our Emerging Talent pipeline, managing candidate screening logs and coordination.",
    requirements: [
      "Recent UG / PG / MBA in Human Resources or related fields",
      "High energy level with exceptional verbal coordination skills",
      "Command of Microsoft Excel or Google Sheets for tracker logs",
    ],
  },
];

export default function VacanciesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedJob, setSelectedJob] = useState<JobVacancy | null>(null);

  const filteredJobs = vacancies.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || job.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#F8FAFF] min-h-screen py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">CURRENT VACANCIES</span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] uppercase tracking-tight">
            Open Positions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium">
            Explore our active openings across analytics, HR operations, recruitment, and graduate programs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 border-b border-gray-200 mb-8 gap-4">
          <p className="text-sm font-bold text-[#1E3A8A]">
            {filteredJobs.length} {filteredJobs.length === 1 ? "position" : "positions"} found
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 text-xs font-medium rounded-lg border border-gray-300 focus:outline-none focus:border-[#0EA5E9] bg-white text-[#1E293B]"
              />
            </div>
            <div className="flex bg-slate-100 rounded-lg p-1 text-xs font-bold text-gray-500">
              {["All", "Full-Time", "Contract", "Internship"].map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                    selectedType === t ? "bg-white text-[#1E3A8A] shadow-sm" : "hover:text-[#1E3A8A]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <GlassCard key={job.id} className="p-6 flex flex-col justify-between" hoverEffect={true}>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono font-bold bg-[#0EA5E9]/10 text-[#0EA5E9] px-2.5 py-1 rounded">
                        {job.type}
                      </span>
                      <span className="text-xs font-bold text-[#1E3A8A]">{job.experience}</span>
                    </div>
                    <h4 className="text-base font-black text-[#1E3A8A] uppercase tracking-wide line-clamp-1">{job.title}</h4>
                    <p className="text-[11px] font-bold text-[#D4A017] uppercase tracking-wide mt-1">{job.department}</p>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed mt-3 line-clamp-2">{job.description}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-gray-500">
                      <MapPin className="h-3.5 w-3.5 text-slate-400" />
                      <span className="text-xs font-bold">{job.location}</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-black text-[#1E3A8A]">{job.salary}</span>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="text-xs font-bold text-[#0EA5E9] hover:text-[#1E3A8A] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      View Details
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </GlassCard>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <Briefcase className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                <p className="text-sm font-bold text-gray-500">No matching vacancies found.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Don&apos;t see the right fit?{" "}
            <Link href="/submit-resume" className="text-[#0EA5E9] font-bold hover:underline inline-flex items-center gap-1">
              Submit your resume <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </p>
        </div>
      </div>

      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#F1F5FF] rounded-3xl border border-slate-200 w-full max-w-2xl p-6 sm:p-8 relative shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[6px] bg-[#1E3A8A]" />
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-[#1E3A8A] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="border-b border-gray-100 pb-4 mb-6">
                <span className="text-[9px] font-mono tracking-widest text-[#0EA5E9] font-extrabold uppercase bg-[#0EA5E9]/10 px-2.5 py-1 rounded">
                  {selectedJob.type}
                </span>
                <h3 className="text-xl font-black text-[#1E3A8A] uppercase tracking-tight mt-3">{selectedJob.title}</h3>
                <p className="text-xs font-extrabold text-[#D4A017] uppercase tracking-wide mt-1">{selectedJob.department}</p>
              </div>
              <div className="space-y-4 text-xs leading-relaxed text-gray-600 font-medium h-[260px] overflow-y-auto pr-2">
                <div>
                  <h5 className="font-black text-[#1E3A8A] uppercase text-[10px] mb-1">Description</h5>
                  <p>{selectedJob.description}</p>
                </div>
                <div>
                  <h5 className="font-black text-[#1E3A8A] uppercase text-[10px] mb-1">Requirements</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedJob.requirements.map((req, i) => <li key={i}>{req}</li>)}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 bg-[#F1F5FF] p-4 rounded-xl">
                  <div>
                    <span className="text-[9px] text-gray-400 font-bold uppercase block">Location</span>
                    <span className="font-black text-[#1E3A8A]">{selectedJob.location}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 font-bold uppercase block">Salary</span>
                    <span className="font-black text-[#1E3A8A]">{selectedJob.salary}</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-black text-gray-500 hover:bg-slate-50 uppercase cursor-pointer"
                >
                  Close
                </button>
                <Link
                  href={`/submit-resume`}
                  className="px-6 py-2.5 bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white rounded-lg text-xs font-black uppercase tracking-wider shadow-md inline-flex items-center gap-1.5"
                >
                  Apply Now <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
