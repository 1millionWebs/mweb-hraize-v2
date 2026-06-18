import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Upload, Briefcase, MapPin, Clock, Search, Filter, 
  CheckCircle, AlertCircle, FileSpreadsheet, X, ChevronRight 
} from "lucide-react";
import { GlassCard } from "./UIElements";
import { JobVacancy } from "../types";

export const Careers: React.FC = () => {
  // Lists of Vacancies
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
        "Strong experience compiling and translating predictive attrition formulas",
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
        "Proven background writing employee handbooks and establishing SOP models",
        "Deep knowledge of regional labor laws and statutory compliance standards",
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
        "Excellent negociation and contract lifecycle onboarding experience"
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

  const qualificationsList = [
    "10th", "12th", "UG", "PG", "ITI", "Diploma", "Engineering", "MBA"
  ];

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<JobVacancy | null>(null);

  // Resume Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    gender: "",
    ageRange: "",
    maritalStatus: "",
    qualification: "",
    experience: "",
    comments: "",
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Filtered jobs
  const filteredJobs = initialVacancies.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || job.type === selectedType;
    return matchesSearch && matchesType;
  });

  // Handle Input Changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Drag and Drop files
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Submit Handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: string[] = [];

    // Validations
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
      // Scroll to errors
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setFormErrors([]);
      setSubmitSuccess(true);
      // Simulate submission of candidate details
    }
  };

  const applyForJob = (job: JobVacancy) => {
    setFormData({
      ...formData,
      comments: `Applying for: ${job.title} (${job.id}) under ${job.department}. `
    });
    setSelectedJob(null);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="careers-portal" className="bg-[#F8FAFF] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">CAREER GATEWAY</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] uppercase tracking-tight">
            Structure Your Journey, Elevate Your Potential
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium">
            At Hraize, we match exception talents to companies serious about structured, scale growth. Submit your resume to enter our permanent sourcing pool, or apply below to Active Vacancies.
          </p>
        </div>

        {/* Current Vacancies Explorer */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 border-b border-gray-200 mb-8 gap-4">
            <div>
              <h3 className="text-xl font-black text-[#1E3A8A] uppercase tracking-tight">Current Vacancies</h3>
              <p className="text-xs text-gray-500 font-bold mt-1">Discover dynamic placements aligned with your growth stage</p>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
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

              {/* Type selector */}
              <div className="flex bg-slate-100 rounded-lg p-1 text-xs font-bold text-gray-500">
                {["All", "Full-Time", "Contract", "Internship"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedType(t)}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      selectedType === t ? "bg-white text-[#1E3A8A] shadow-sm" : "hover:text-[#1E3A8A]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Vacancies Display List */}
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
                      
                      <p className="text-xs text-gray-500 font-medium leading-relaxed mt-3 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="mt-4 flex items-center gap-1.5 text-gray-500">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                        <span className="text-xs font-bold">{job.location}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-black text-[#1E3A8A]">{job.salary || "SLA Premium"}</span>
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
        </div>

        {/* Submit Your Resume Form Container */}
        <div ref={formRef} className="max-w-4xl mx-auto">
          <div className="bg-[#07112E] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-slate-800">
            <div className="max-w-2xl mx-auto mb-10 text-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">SECURE SUBMISSION</span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight">Submit Your Resume</h3>
              <p className="mt-2 text-xs text-slate-300 leading-normal font-medium">
                Complete the fields below to register inside our premium workforce lookup systems. All documents are analyzed by Hraize analytics partners.
              </p>
            </div>

            {/* Error notifications */}
            {formErrors.length > 0 && (
              <div className="mb-8 p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 text-rose-300 text-xs font-bold space-y-1.5">
                <p className="flex items-center gap-2 text-rose-400 font-extrabold">
                  <AlertCircle className="h-4 w-4" />
                  Please resolve the following validations:
                </p>
                <ul className="list-disc list-inside space-y-0.5 font-medium">
                  {formErrors.map((err, idx) => (
                    <li key={idx}>{err}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Success message */}
            {submitSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center bg-white/5 border border-emerald-500/20 rounded-2xl flex flex-col items-center gap-4"
              >
                <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white uppercase tracking-wide">Submission Received Successfully!</h4>
                  <p className="text-xs text-slate-300 font-medium mt-2 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.firstName}</strong>. Your profile details and resume file <span className="text-[#0EA5E9] font-mono">({uploadedFile?.name})</span> have been cataloged. An associate will reach out during office hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitSuccess(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      location: "",
                      gender: "",
                      ageRange: "",
                      maritalStatus: "",
                      qualification: "",
                      experience: "",
                      comments: "",
                    });
                    setUploadedFile(null);
                  }}
                  className="mt-4 px-5 py-2 hover:bg-white/10 rounded-lg text-xs font-bold tracking-wide transition border border-white/20"
                >
                  Apply is ready for another position
                </button>
              </motion.div>
            ) : (
              // Resume Application Form
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* First Name */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Jane"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-white/5 text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-medium placeholder:text-gray-500"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-white/5 text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-medium placeholder:text-gray-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Email address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane.doe@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-white/5 text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-medium placeholder:text-gray-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-white/5 text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-medium placeholder:text-gray-500"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Location *</label>
                    <input 
                      type="text" 
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Chennai, Tamil Nadu"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-white/5 text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-medium placeholder:text-gray-500"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Gender *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-[#07112E] text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-bold"
                    >
                      <option value="">Select Gender</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>

                  {/* Age Range */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Age Range *</label>
                    <select
                      name="ageRange"
                      value={formData.ageRange}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-[#07112E] text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-bold"
                    >
                      <option value="">Select Age Range</option>
                      <option value="18 - 22">18 - 22</option>
                      <option value="23 - 28">23 - 28</option>
                      <option value="29 - 35">29 - 35</option>
                      <option value="36 - 45">36 - 45</option>
                      <option value="46+">46+</option>
                    </select>
                  </div>

                  {/* Marital Status */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Marital Status *</label>
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-[#07112E] text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-bold"
                    >
                      <option value="">Select Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Widowed">Widowed</option>
                      <option value="Divorced">Divorced</option>
                    </select>
                  </div>

                  {/* Qualification (10th, 12th, UG, PG, ITI, Diploma, Engineering, MBA) */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Highest Qualification *</label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-[#07112E] text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-bold"
                    >
                      <option value="">Select Qualification</option>
                      {qualificationsList.map((qual) => (
                        <option key={qual} value={qual}>{qual}</option>
                      ))}
                    </select>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Experience Level *</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-[#07112E] text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-bold"
                    >
                      <option value="">Select Experience</option>
                      <option value="Fresher">Fresher (Zero experience)</option>
                      <option value="Experienced">Experienced (Professional)</option>
                    </select>
                  </div>

                </div>

                {/* Comments (Mandatory field) */}
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Comments &amp; Career Objective *</label>
                  <textarea 
                    name="comments"
                    rows={4}
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Describe your background, what roles interest you, and why you are seeking a transition... (Mandatory)"
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-white/5 text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-medium placeholder:text-gray-500"
                  />
                </div>

                {/* File Upload (Mandatory) */}
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-[#D4A017] uppercase mb-2">Upload File Resume (PDF/Word Mandatory) *</label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={triggerFileInput}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[140px] ${
                      isDragging 
                        ? "border-[#0EA5E9] bg-[#0EA5E9]/5" 
                        : uploadedFile 
                          ? "border-emerald-500 bg-emerald-500/5" 
                          : "border-slate-700 hover:border-[#D4A017] bg-white/5"
                    }`}
                  >
                    <input 
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                    
                    {uploadedFile ? (
                      <div className="space-y-2">
                        <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 flex items-center justify-center rounded-full mx-auto">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <p className="text-xs font-mono font-bold text-emerald-400">{uploadedFile.name}</p>
                        <p className="text-[10px] text-slate-400">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB — Hardcopy Loaded</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="h-8 w-8 text-[#D4A017] mx-auto animate-pulse" />
                        <p className="text-xs font-bold text-slate-200">Drag &amp; drop your resume files here, or <span className="text-[#D4A017]">browse local desktop</span></p>
                        <p className="text-[10px] text-slate-400">Supported Formats: PDF, DOCX (Max size: 5MB)</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#0EA5E9] text-white hover:bg-[#0EA5E9]/90 rounded-xl font-black uppercase tracking-wider text-xs shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    Submit Candidate Application
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>

      </div>

      {/* Vacancies Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl border border-slate-200 w-full max-w-2xl p-6 sm:p-8 relative shadow-2xl overflow-hidden"
            >
              {/* Top decorator */}
              <div className="absolute top-0 left-0 w-full h-[6px] bg-[#1E3A8A]" />
              
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-[#1E3A8A]"
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
                  <h5 className="font-black text-[#1E3A8A] uppercase text-[10px] mb-1">Vacancy Description</h5>
                  <p>{selectedJob.description}</p>
                </div>

                <div>
                  <h5 className="font-black text-[#1E3A8A] uppercase text-[10px] mb-1">Key Specifications &amp; Requirements</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl">
                  <div>
                    <span className="text-[9px] text-gray-400 font-bold uppercase block">Location context</span>
                    <span className="font-black text-[#1E3A8A]">{selectedJob.location}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 font-bold uppercase block">SLA Salary Estimate</span>
                    <span className="font-black text-[#1E3A8A]">{selectedJob.salary || "Enterprise Standard"}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-black text-gray-500 hover:bg-slate-50 uppercase"
                >
                  Close
                </button>
                <button
                  onClick={() => applyForJob(selectedJob)}
                  className="px-6 py-2.5 bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white rounded-lg text-xs font-black uppercase tracking-wider shadow-md"
                >
                  Apply For This vacancy
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
