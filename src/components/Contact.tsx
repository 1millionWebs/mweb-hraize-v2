import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Building2, Mail, Clock, Phone, Globe, CheckCircle2, 
  Send, HelpCircle, Layers, Shield, GraduationCap 
} from "lucide-react";
import { GlassCard } from "./UIElements";

interface ContactProps {
  initialTab?: "hr" | "recruitment" | "training" | "general";
}

export const Contact: React.FC<ContactProps> = ({ initialTab = "hr" }) => {
  type EnquiryType = "hr" | "recruitment" | "training" | "general";
  const [activeTab, setActiveTab] = useState<EnquiryType>(initialTab);

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceInterested: "",
    message: ""
  });

  const [validationSuccess, setValidationSuccess] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Synchronize initialTab if changed from parent
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // Tab configurations
  const tabs = [
    { id: "hr", label: "1. HR Services", icon: Shield },
    { id: "recruitment", label: "2. Recruitment Services", icon: Layers },
    { id: "training", label: "3. Training & Development", icon: GraduationCap },
    { id: "general", label: "4. General Inquiry", icon: HelpCircle }
  ];

  // Dynamic services dropdown depending on activeTab
  const getServiceOptions = () => {
    switch (activeTab) {
      case "hr":
        return [
          { value: "subscription", label: "HR Subscription Support" },
          { value: "consulting", label: "HR Consulting & Systems Setup" },
          { value: "audit", label: "HR Audit" },
          { value: "analytics", label: "People Analytics & Dashboard" },
          { value: "policies", label: "HR Policy and Process Documentation" },
          { value: "workforce", label: "Strategic Workforce Planning" }
        ];
      case "recruitment":
        return [
          { value: "permanent", label: "Permanent Recruitment" },
          { value: "contract", label: "Contract & Temp Staffing" },
          { value: "graduate", label: "Graduate & Emerging Talent Pipeline" }
        ];
      case "training":
        return [
          { value: "fresher", label: "Fresher to professional" },
          { value: "mid-career", label: "Mid Career Acceleration" },
          { value: "managers", label: "First-Time Managers" }
        ];
      case "general":
      default:
        return [
          { value: "partnership", label: "General Corporate Partnership" },
          { value: "pr", label: "Media & PR Inquiry" },
          { value: "other", label: "Other Business Matter" }
        ];
    }
  };

  // Reset pre-selected service when tab changes
  useEffect(() => {
    const options = getServiceOptions();
    setFormData(prev => ({
      ...prev,
      serviceInterested: options[0]?.value || ""
    }));
  }, [activeTab]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submission handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const listErrors: string[] = [];

    if (!formData.fullName) listErrors.push("Please provide your full name.");
    if (!formData.email) listErrors.push("Please provide your business email address.");
    if (!formData.phone) listErrors.push("Please provide a contact phone number.");
    if (!formData.message) listErrors.push("How can we help you? Please describe in the message box.");

    if (listErrors.length > 0) {
      setErrors(listErrors);
      setValidationSuccess(false);
    } else {
      setErrors([]);
      setValidationSuccess(true);
    }
  };

  return (
    <div id="contact-page" className="bg-[#F8FAFF] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Contact Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">CONTACT US</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] uppercase tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            Have a business requirement in mind or want to learn more about our services? We’d like to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-12">
          
          {/* Left Column: Contact Information, Location, email, working hours */}
          <div className="lg:col-span-4 bg-[#07112E] rounded-3xl p-8 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
              <Globe className="h-64 w-64 text-white" />
            </div>

            <div className="space-y-8 relative z-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">HRAIZE DIRECTORY</span>
                <h3 className="text-xl font-black uppercase text-white mt-2">Contact Information</h3>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[#0EA5E9] flex-shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">Location</p>
                  <p className="text-xs text-slate-200 mt-1 leading-relaxed font-bold">
                    Headquartered strategically with active regional consultants across key metropolitan tech hubs (India, ASEAN and International Scaling Outposts).
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[#0EA5E9] flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">Email Us</p>
                  <p className="text-sm text-white mt-1 font-black underline tracking-wide">
                    info@hraize.com
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[#D4A017] flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">Working Hours</p>
                  <p className="text-xs text-[#D4A017] mt-1 font-black">
                    Monday to Saturday 9 am to 6 pm
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800 pt-4 relative z-10">
              <p className="text-[10px] text-slate-400 leading-relaxed uppercase font-mono tracking-widest">
                Trusted HR Partner • 100% Quality Focus
              </p>
            </div>
          </div>

          {/* Right Column: Send us a message form withTabs */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-md">
            <div className="mb-6">
              <h3 className="text-lg font-black text-[#1E3A8A] uppercase tracking-tight">Send us a message</h3>
              <p className="text-xs text-gray-500 font-bold mt-1">Select the division block below to route your inquiry accurately:</p>
            </div>

            {/* Division Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-slate-150 p-1.5 rounded-xl border border-gray-100">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id as EnquiryType);
                      setValidationSuccess(false);
                    }}
                    className={`flex items-center justify-center gap-1.5 py-3.5 px-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                      active 
                        ? "bg-[#1E3A8A] text-white shadow-sm" 
                        : "text-gray-500 hover:text-[#1E3A8A] hover:bg-slate-50"
                    }`}
                  >
                    <TabIcon className="h-3.5 w-3.5 flex-shrink-0" />
                    {tab.label.split(". ")[1]}
                  </button>
                );
              })}
            </div>

            {/* Error alerts */}
            {errors.length > 0 && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 text-xs font-bold">
                <ul className="list-disc list-inside space-y-1">
                  {errors.map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Success panel */}
            {validationSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center bg-emerald-50 border border-emerald-100 rounded-2xl flex flex-col items-center gap-4"
              >
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-[#1E3A8A] uppercase tracking-wide">Inquiry Dispatched!</h4>
                  <p className="text-xs text-gray-600 font-medium mt-1 max-w-sm mx-auto">
                    Thanks for reaching out, <strong className="text-slate-900">{formData.fullName}</strong>. Your strategic ticket has been submitted to our <strong>{tabs.find(t => t.id === activeTab)?.label}</strong> representative.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setValidationSuccess(false);
                    setFormData({
                      fullName: "",
                      companyName: "",
                      email: "",
                      phone: "",
                      serviceInterested: "",
                      message: ""
                    });
                  }}
                  className="px-5 py-2 bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              // Message form
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-[#1E3A8A] uppercase mb-1">Your Full Name *</label>
                    <input 
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 text-xs font-bold rounded-lg border border-gray-300 focus:outline-none focus:border-[#0EA5E9] text-[#1E293B]"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-[#1E3A8A] uppercase mb-1">Company / Organization</label>
                    <input 
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Enterprise Corp"
                      className="w-full px-3 py-2 text-xs font-bold rounded-lg border border-gray-300 focus:outline-none focus:border-[#0EA5E9] text-[#1E293B]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-[#1E3A8A] uppercase mb-1">Business Email *</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@enterprise.com"
                      className="w-full px-3 py-2 text-xs font-bold rounded-lg border border-gray-300 focus:outline-none focus:border-[#0EA5E9] text-[#1E293B]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-[#1E3A8A] uppercase mb-1">Contact Phone *</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 90000 00000"
                      className="w-full px-3 py-2 text-xs font-bold rounded-lg border border-gray-300 focus:outline-none focus:border-[#0EA5E9] text-[#1E293B]"
                    />
                  </div>

                </div>

                {/* Service Dropdown (populates based on selected active tab) */}
                <div>
                  <label className="block text-[10px] font-black tracking-widest text-[#1E3A8A] uppercase mb-1">Service Interested in</label>
                  <select
                    name="serviceInterested"
                    value={formData.serviceInterested}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-xs font-bold rounded-lg border border-gray-300 bg-white text-[#1E293B] focus:outline-none focus:border-[#0EA5E9]"
                  >
                    {getServiceOptions().map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                {/* Message detail box - "How can we help you?" */}
                <div>
                  <label className="block text-[10px] font-black tracking-widest text-[#1E3A8A] uppercase mb-1">How can we help you? *</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your goals, organizational bottlenecks, size of workforce or coaching timelines... how can we support you?"
                    className="w-full px-3 py-2 text-xs font-medium rounded-lg border border-gray-300 focus:outline-none focus:border-[#0EA5E9] text-[#1E293B]"
                  />
                </div>

                {/* Actions */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white font-black uppercase text-xs tracking-wider rounded-xl shadow-md transition cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
