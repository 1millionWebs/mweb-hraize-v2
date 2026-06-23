"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, MapPin, Briefcase, X, ChevronRight } from "lucide-react";
import { SectionLabel } from "@/src/components/UIElements";
import type { JobVacancy } from "@/src/types";
import Link from "next/link";

export default function VacanciesPage() {
  const [vacancies, setVacancies] = useState<JobVacancy[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedJob, setSelectedJob] = useState<JobVacancy | null>(null);

  useEffect(() => {
    fetch("/api/vacancies")
      .then((res) => res.json())
      .then((data) => setVacancies(data.vacancies))
      .catch(() => { })
      .finally(() => setLoading(false));
  }, []);

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
      className="bg-cream-100 min-h-screen py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionLabel>Current Vacancies</SectionLabel>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            Open Positions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-navy-900/60 font-semibold">
            Explore our active openings across analytics, HR operations, recruitment, and graduate programs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 border-b border-sky-600/50 mb-8 gap-4">
          <p className="text-sm font-bold text-navy-900">
            {filteredJobs.length} {filteredJobs.length === 1 ? "position" : "positions"} found
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-navy-900/30" />
              <input
                type="text" placeholder="Search jobs..." value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 text-xs font-medium rounded-lg border border-sky-600/50 focus:outline-none focus:border-sky-600 bg-white text-navy-900"
              />
            </div>
            <div className="flex bg-cream-50 rounded-lg p-1 text-xs font-bold text-navy-900/50 border border-sky-600/50">
              {["All", "Full-Time", "Contract", "Internship"].map((t) => (
                <button key={t} onClick={() => setSelectedType(t)}
                  className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${selectedType === t ? "bg-white text-navy-900 shadow-sm" : "hover:text-navy-900"
                    }`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin h-6 w-6 border-2 border-sky-600/50 border-t-transparent rounded-full mx-auto mb-3" />
              <p className="text-sm font-bold text-navy-900/50">Loading vacancies...</p>
            </div>
          ) : (
            <AnimatePresence>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col sm:flex-row items-start gap-5 p-6 bg-cream-50 rounded-2xl border border-sky-600/20 shadow-lg hover:border-sky-600/50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-600/10 px-2.5 py-1 rounded-full">{job.type}</span>
                        <span className="text-xs font-bold text-navy-900/50">{job.experience}</span>
                      </div>
                      <h4 className="text-base font-black text-navy-900 uppercase tracking-wide">{job.title}</h4>
                      <p className="text-[11px] font-bold text-copper-400 uppercase tracking-wide mt-0.5">{job.department}</p>
                      <p className="text-xs text-navy-900/60 font-medium leading-relaxed mt-2">{job.description}</p>
                      <div className="mt-3 flex items-center gap-1.5 text-navy-900/50">
                        <MapPin className="h-3.5 w-3.5" />
                        <span className="text-xs font-bold">{job.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3 shrink-0">
                      <span className="text-xs font-black text-navy-900">{job.salary || "SLA Premium"}</span>
                      <button onClick={() => setSelectedJob(job)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors cursor-pointer">
                        View Details <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Briefcase className="h-12 w-12 text-navy-900/10 mx-auto mb-3" />
                  <p className="text-sm font-bold text-navy-900/50">No matching vacancies found.</p>
                </div>
              )}
            </AnimatePresence>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-navy-900/50 font-medium">
            Don&apos;t see the right fit?{" "}
            <Link href="/submit-resume" className="text-sky-600 font-bold hover:text-sky-700 inline-flex items-center gap-1">
              Submit your resume <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </p>
        </div>
      </div>

      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-900/40 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-cream-50 rounded-3xl border border-sky-600/50 w-full max-w-2xl p-6 sm:p-8 relative shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[6px] bg-sky-600" />
              <button onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full hover:bg-sky-600/5 flex items-center justify-center text-navy-900 cursor-pointer">
                <X className="h-5 w-5" />
              </button>
              <div className="border-b border-sky-600/50 pb-4 mb-6">
                <span className="text-[9px] font-mono tracking-widest text-sky-600 font-extrabold uppercase bg-sky-600/10 px-2.5 py-1 rounded">
                  {selectedJob.type}
                </span>
                <h3 className="text-xl font-black text-navy-900 uppercase tracking-tight mt-3">{selectedJob.title}</h3>
                <p className="text-xs font-extrabold text-copper-400 uppercase tracking-wide mt-1">{selectedJob.department}</p>
              </div>
              <div className="space-y-4 text-xs leading-relaxed text-navy-900/60 font-medium max-h-[260px] overflow-y-auto pr-2">
                <div>
                  <h5 className="font-black text-navy-900 uppercase text-[10px] mb-1">Description</h5>
                  <p>{selectedJob.description}</p>
                </div>
                <div>
                  <h5 className="font-black text-navy-900 uppercase text-[10px] mb-1">Requirements</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedJob.requirements.map((req, i) => <li key={i}>{req}</li>)}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 bg-cream-100 p-4 rounded-xl">
                  <div>
                    <span className="text-[9px] text-navy-900/40 font-bold uppercase block">Location</span>
                    <span className="font-black text-navy-900">{selectedJob.location}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-navy-900/40 font-bold uppercase block">Salary</span>
                    <span className="font-black text-navy-900">{selectedJob.salary || "Enterprise Standard"}</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-sky-600/50 flex items-center justify-end gap-3">
                <button onClick={() => setSelectedJob(null)}
                  className="px-4 py-2 border border-sky-600/50 rounded-lg text-xs font-black text-navy-900/50 hover:bg-cream-100 uppercase cursor-pointer">
                  Close
                </button>
                <Link href="/submit-resume"
                  className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs font-black uppercase tracking-wider shadow-md inline-flex items-center gap-1.5">
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
