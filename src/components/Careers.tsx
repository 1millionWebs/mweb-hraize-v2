import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Upload, Briefcase, MapPin, Search, Filter,
  CheckCircle, AlertCircle, X, ChevronRight
} from "lucide-react";
import { SectionLabel, FeatureCheck, GlassPanel } from "./UIElements";
import { JobVacancy } from "../types";

export const Careers: React.FC = () => {
  const initialVacancies: JobVacancy[] = [
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
        "Strong experience compiling predictive attrition formulas",
        "Excellent communication skills with C-suite and regional HR directors"
      ]
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
        "Proven background writing employee handbooks and SOP models",
        "Deep knowledge of regional labor laws and compliance standards",
        "Prior experience in client-facing advisory or consulting environments"
      ]
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
        "Excellent negotiation and contract lifecycle onboarding experience"
      ]
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
        "Command of Microsoft Excel or Google Sheets for tracker logs"
      ]
    }
  ];

  const qualificationsList = ["10th", "12th", "UG", "PG", "ITI", "Diploma", "Engineering", "MBA"];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<JobVacancy | null>(null);

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", location: "",
    gender: "", ageRange: "", maritalStatus: "", qualification: "", experience: "", comments: "",
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const filteredJobs = initialVacancies.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || job.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.[0]) setUploadedFile(e.dataTransfer.files[0]);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setUploadedFile(e.target.files[0]);
  };
  const triggerFileInput = () => fileInputRef.current?.click();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: string[] = [];
    if (!formData.firstName) errors.push("First Name is required.");
    if (!formData.lastName) errors.push("Last Name is required.");
    if (!formData.email) errors.push("Email is required.");
    if (!formData.phone) errors.push("Phone number is required.");
    if (!formData.location) errors.push("Location is required.");
    if (!formData.gender) errors.push("Please select your gender.");
    if (!formData.ageRange) errors.push("Please select your age range.");
    if (!formData.maritalStatus) errors.push("Please select your marital status.");
    if (!formData.qualification) errors.push("Please select your qualification.");
    if (!formData.experience) errors.push("Please select your experience level.");
    if (!formData.comments) errors.push("Comments are mandatory.");
    if (!uploadedFile) errors.push("You must upload your CV resume file.");
    if (errors.length > 0) {
      setFormErrors(errors);
      setSubmitSuccess(false);
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setFormErrors([]);
      setSubmitSuccess(true);
    }
  };

  const applyForJob = (job: JobVacancy) => {
    setFormData({ ...formData, comments: `Applying for: ${job.title} (${job.id}) under ${job.department}. ` });
    setSelectedJob(null);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Career Gateway</SectionLabel>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            Structure Your Journey, Elevate Your Potential
          </h2>
          <p className="mt-4 text-sm sm:text-base text-navy-900/60 font-semibold">
            Submit your resume to enter our permanent sourcing pool, or apply below to Active Vacancies.
          </p>
        </div>

        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 border-b border-sky-600/10 mb-8 gap-4">
            <div>
              <h3 className="text-xl font-black text-navy-900 uppercase tracking-tight">Current Vacancies</h3>
              <p className="text-xs text-navy-900/50 font-bold mt-1">Discover placements aligned with your growth stage</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-navy-900/30" />
                <input type="text" placeholder="Search jobs..." value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2 text-xs font-medium rounded-lg border border-sky-600/20 focus:outline-none focus:border-sky-600 bg-white text-navy-900" />
              </div>
              <div className="flex bg-cream-50 rounded-lg p-1 text-xs font-bold text-navy-900/50 border border-sky-600/10">
                {["All", "Full-Time", "Contract", "Internship"].map((t) => (
                  <button key={t} onClick={() => setSelectedType(t)}
                    className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                      selectedType === t ? "bg-white text-navy-900 shadow-sm" : "hover:text-navy-900"
                    }`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <AnimatePresence>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col sm:flex-row items-start gap-5 p-6 bg-cream-50 rounded-2xl border border-sky-600/10 hover:border-sky-600/30 transition-colors"
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
          </div>
        </div>

        <div ref={formRef} className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-navy-900 p-8 sm:p-12 border border-navy-800">
            <div className="max-w-2xl mx-auto mb-10 text-center">
              <SectionLabel className="text-sky-400">Secure Submission</SectionLabel>
              <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">Submit Your Resume</h3>
              <p className="mt-2 text-xs text-sage-100/60 leading-normal font-medium">
                Complete the fields below to register in our premium workforce lookup systems.
              </p>
            </div>

            {formErrors.length > 0 && (
              <div className="mb-8 p-4 rounded-xl border border-red-muted/20 bg-red-muted/5 text-red-muted text-xs font-bold space-y-1.5">
                <p className="flex items-center gap-2 font-extrabold">
                  <AlertCircle className="h-4 w-4" />
                  Please resolve the following:
                </p>
                <ul className="list-disc list-inside space-y-0.5 font-medium">
                  {formErrors.map((err, idx) => <li key={idx}>{err}</li>)}
                </ul>
              </div>
            )}

            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center bg-white/5 border border-forest-500/20 rounded-2xl flex flex-col items-center gap-4"
              >
                <div className="h-12 w-12 rounded-full bg-forest-500/10 text-forest-500 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white uppercase tracking-wide">Submission Received!</h4>
                  <p className="text-xs text-sage-100/60 font-medium mt-2 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.firstName}</strong>. Your profile and resume have been cataloged.
                  </p>
                </div>
                <button type="button" onClick={() => {
                  setSubmitSuccess(false);
                  setFormData({ firstName: "", lastName: "", email: "", phone: "", location: "", gender: "", ageRange: "", maritalStatus: "", qualification: "", experience: "", comments: "" });
                  setUploadedFile(null);
                }}
                  className="mt-4 px-5 py-2 hover:bg-white/10 rounded-lg text-xs font-bold tracking-wide transition border border-white/20 cursor-pointer">
                  Submit another application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-sky-400 uppercase mb-1.5">First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Jane"
                      className="w-full px-4 py-2.5 rounded-lg border border-navy-700 bg-white/5 text-white focus:outline-none focus:border-sky-600 text-xs font-medium placeholder:text-navy-600" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-sky-400 uppercase mb-1.5">Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Doe"
                      className="w-full px-4 py-2.5 rounded-lg border border-navy-700 bg-white/5 text-white focus:outline-none focus:border-sky-600 text-xs font-medium placeholder:text-navy-600" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-sky-400 uppercase mb-1.5">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="jane.doe@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-navy-700 bg-white/5 text-white focus:outline-none focus:border-sky-600 text-xs font-medium placeholder:text-navy-600" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-sky-400 uppercase mb-1.5">Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-lg border border-navy-700 bg-white/5 text-white focus:outline-none focus:border-sky-600 text-xs font-medium placeholder:text-navy-600" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-sky-400 uppercase mb-1.5">Location *</label>
                    <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Chennai"
                      className="w-full px-4 py-2.5 rounded-lg border border-navy-700 bg-white/5 text-white focus:outline-none focus:border-sky-600 text-xs font-medium placeholder:text-navy-600" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-sky-400 uppercase mb-1.5">Gender *</label>
                    <select name="gender" value={formData.gender} onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-navy-700 bg-navy-900 text-white focus:outline-none focus:border-sky-600 text-xs font-bold">
                      <option value="">Select Gender</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-sky-400 uppercase mb-1.5">Age Range *</label>
                    <select name="ageRange" value={formData.ageRange} onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-navy-700 bg-navy-900 text-white focus:outline-none focus:border-sky-600 text-xs font-bold">
                      <option value="">Select Age Range</option>
                      <option value="18 - 22">18 - 22</option>
                      <option value="23 - 28">23 - 28</option>
                      <option value="29 - 35">29 - 35</option>
                      <option value="36 - 45">36 - 45</option>
                      <option value="46+">46+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-sky-400 uppercase mb-1.5">Marital Status *</label>
                    <select name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-navy-700 bg-navy-900 text-white focus:outline-none focus:border-sky-600 text-xs font-bold">
                      <option value="">Select Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Widowed">Widowed</option>
                      <option value="Divorced">Divorced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-sky-400 uppercase mb-1.5">Qualification *</label>
                    <select name="qualification" value={formData.qualification} onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-navy-700 bg-navy-900 text-white focus:outline-none focus:border-sky-600 text-xs font-bold">
                      <option value="">Select Qualification</option>
                      {qualificationsList.map((qual) => <option key={qual} value={qual}>{qual}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-sky-400 uppercase mb-1.5">Experience *</label>
                    <select name="experience" value={formData.experience} onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-navy-700 bg-navy-900 text-white focus:outline-none focus:border-sky-600 text-xs font-bold">
                      <option value="">Select Experience</option>
                      <option value="Fresher">Fresher (Zero experience)</option>
                      <option value="Experienced">Experienced (Professional)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-sky-400 uppercase mb-1.5">Comments &amp; Career Objective *</label>
                  <textarea name="comments" rows={4} value={formData.comments} onChange={handleInputChange}
                    placeholder="Describe your background, what roles interest you, and why you are seeking a transition..."
                    className="w-full px-4 py-3 rounded-lg border border-navy-700 bg-white/5 text-white focus:outline-none focus:border-sky-600 text-xs font-medium placeholder:text-navy-600 resize-none" />
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-copper-400 uppercase mb-2">Upload Resume (PDF/Word) *</label>
                  <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} onClick={triggerFileInput}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[140px] ${
                      isDragging ? "border-sky-600 bg-sky-600/5" :
                      uploadedFile ? "border-forest-500 bg-forest-500/5" :
                      "border-navy-700 hover:border-copper-400 bg-white/5"
                    }`}>
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.doc,.docx" className="hidden" />
                    {uploadedFile ? (
                      <div className="space-y-2">
                        <div className="h-10 w-10 bg-forest-500/10 text-forest-500 flex items-center justify-center rounded-full mx-auto">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <p className="text-xs font-mono font-bold text-forest-400">{uploadedFile.name}</p>
                        <p className="text-[10px] text-sage-100/50">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="h-8 w-8 text-copper-400 mx-auto" />
                        <p className="text-xs font-bold text-sage-100/80">Drag & drop your resume, or <span className="text-copper-400">browse files</span></p>
                        <p className="text-[10px] text-sage-100/40">PDF, DOCX (Max 5MB)</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <button type="submit"
                    className="w-full py-4 bg-sky-600 text-white hover:bg-sky-700 rounded-xl font-black uppercase tracking-wider text-xs shadow-lg transition-all cursor-pointer">
                    Submit Candidate Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-900/40 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-cream-50 rounded-3xl border border-sky-600/10 w-full max-w-2xl p-6 sm:p-8 relative shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[6px] bg-sky-600" />
              <button onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full hover:bg-sky-600/5 flex items-center justify-center text-navy-900 cursor-pointer">
                <X className="h-5 w-5" />
              </button>
              <div className="border-b border-sky-600/10 pb-4 mb-6">
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
              <div className="mt-8 pt-4 border-t border-sky-600/10 flex items-center justify-end gap-3">
                <button onClick={() => setSelectedJob(null)}
                  className="px-4 py-2 border border-sky-600/20 rounded-lg text-xs font-black text-navy-900/50 hover:bg-cream-100 uppercase cursor-pointer">
                  Close
                </button>
                <button onClick={() => applyForJob(selectedJob)}
                  className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs font-black uppercase tracking-wider shadow-md cursor-pointer">
                  Apply For This Vacancy
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
