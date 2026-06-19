"use client";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Upload, CheckCircle, AlertCircle, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function SubmitResumePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    experience: "",
    noticePeriod: "",
    comments: "",
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: string[] = [];
    if (!formData.firstName) errors.push("First name is required.");
    if (!formData.lastName) errors.push("Last name is required.");
    if (!formData.email) errors.push("Email is required.");
    if (!formData.phone) errors.push("Phone number is required.");
    if (!uploadedFile) errors.push("Please upload your resume file.");
    if (errors.length > 0) {
      setFormErrors(errors);
      setSubmitSuccess(false);
    } else {
      setFormErrors([]);
      setSubmitSuccess(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#F8FAFF] min-h-screen py-16"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">SUBMIT YOUR RESUME</span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-black text-[#1E3A8A] uppercase tracking-tight">
            Join Our Talent Pool
          </h1>
          <p className="mt-4 text-sm text-gray-600 font-medium">
            Upload your resume and profile details. Our team reviews every submission and reaches out when a matching opportunity arises.
          </p>
        </div>

        <div className="bg-[#07112E] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-slate-800">
          {formErrors.length > 0 && (
            <div className="mb-8 p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 text-rose-300 text-xs font-bold space-y-1.5">
              <p className="flex items-center gap-2 text-rose-400 font-extrabold">
                <AlertCircle className="h-4 w-4" />
                Please resolve the following:
              </p>
              <ul className="list-disc list-inside space-y-0.5 font-medium">
                {formErrors.map((err, i) => <li key={i}>{err}</li>)}
              </ul>
            </div>
          )}

          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 text-center bg-white/5 border border-emerald-500/20 rounded-2xl flex flex-col items-center gap-4"
            >
              <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <CheckCircle className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-xl font-black text-white uppercase tracking-wide">Resume Received!</h2>
                <p className="text-xs text-slate-300 font-medium mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.firstName}</strong>. Your resume has been added to our talent pipeline. A recruiter will reach out when a suitable role is identified.
                </p>
              </div>
              <button
                onClick={() => {
                  setSubmitSuccess(false);
                  setFormData({ firstName: "", lastName: "", email: "", phone: "", linkedin: "", experience: "", noticePeriod: "", comments: "" });
                  setUploadedFile(null);
                }}
                className="mt-2 px-5 py-2 hover:bg-white/10 rounded-lg text-xs font-bold tracking-wide transition border border-white/20"
              >
                Submit Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">First Name *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Jane"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-white/5 text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-medium placeholder:text-gray-500" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Last Name *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-white/5 text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-medium placeholder:text-gray-500" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="jane.doe@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-white/5 text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-medium placeholder:text-gray-500" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-white/5 text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-medium placeholder:text-gray-500" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">LinkedIn Profile</label>
                  <input type="url" name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="https://linkedin.com/in/..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-white/5 text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-medium placeholder:text-gray-500" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Experience Level</label>
                  <select name="experience" value={formData.experience} onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-[#07112E] text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-bold">
                    <option value="">Select Experience</option>
                    <option value="Fresher">Fresher</option>
                    <option value="1-3 Years">1-3 Years</option>
                    <option value="4-6 Years">4-6 Years</option>
                    <option value="7-10 Years">7-10 Years</option>
                    <option value="10+ Years">10+ Years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Notice Period</label>
                  <select name="noticePeriod" value={formData.noticePeriod} onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-[#07112E] text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-bold">
                    <option value="">Select Notice Period</option>
                    <option value="Immediate">Immediate</option>
                    <option value="15 Days">15 Days</option>
                    <option value="30 Days">30 Days</option>
                    <option value="60 Days">60 Days</option>
                    <option value="90 Days">90 Days</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-widest text-[#0EA5E9] uppercase mb-1.5">Additional Comments</label>
                <textarea name="comments" rows={3} value={formData.comments} onChange={handleInputChange}
                  placeholder="Tell us about your preferred roles, industries, or any other details..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-white/5 text-white focus:outline-none focus:border-[#0EA5E9] text-xs font-medium placeholder:text-gray-500" />
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-widest text-[#D4A017] uppercase mb-2">Upload Resume (PDF/DOCX) *</label>
                <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[140px] ${
                    isDragging ? "border-[#0EA5E9] bg-[#0EA5E9]/5" : uploadedFile ? "border-emerald-500 bg-emerald-500/5" : "border-slate-700 hover:border-[#D4A017] bg-white/5"
                  }`}>
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.doc,.docx" className="hidden" />
                  {uploadedFile ? (
                    <div className="space-y-2">
                      <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 flex items-center justify-center rounded-full mx-auto">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <p className="text-xs font-mono font-bold text-emerald-400">{uploadedFile.name}</p>
                      <p className="text-[10px] text-slate-400">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 text-[#D4A017] mx-auto" />
                      <p className="text-xs font-bold text-slate-200">Drag & drop your resume here, or <span className="text-[#D4A017]">browse files</span></p>
                      <p className="text-[10px] text-slate-400">PDF, DOCX (Max 5MB)</p>
                    </div>
                  )}
                </div>
              </div>

              <button type="submit"
                className="w-full py-4 bg-[#0EA5E9] text-white hover:bg-[#0EA5E9]/90 rounded-xl font-black uppercase tracking-wider text-xs shadow-lg transition-all duration-200 cursor-pointer">
                Submit Resume
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 font-medium">
            Already a candidate?{" "}
            <Link href="/vacancies" className="text-[#0EA5E9] font-bold hover:underline inline-flex items-center gap-1">
              View current vacancies <ArrowUpRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
