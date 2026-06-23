import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Building2, Mail, Clock, CheckCircle2,
  Send, HelpCircle, Layers, Shield, GraduationCap
} from "lucide-react";
import { SectionLabel } from "./UIElements";

interface ContactProps {
  initialTab?: "hr" | "recruitment" | "training" | "general";
}

export const Contact: React.FC<ContactProps> = ({ initialTab = "hr" }) => {
  type EnquiryType = "hr" | "recruitment" | "training" | "general";
  const [activeTab, setActiveTab] = useState<EnquiryType>(initialTab);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceInterested: "",
    message: "",
    website: "" // Honeypot field
  });

  const [validationSuccess, setValidationSuccess] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const tabs = [
    { id: "hr", label: "1. HR Services", icon: Shield },
    { id: "recruitment", label: "2. Recruitment Services", icon: Layers },
    { id: "training", label: "3. Training & Development", icon: GraduationCap },
    { id: "general", label: "4. General Inquiry", icon: HelpCircle }
  ];

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const listErrors: string[] = [];
    if (!formData.fullName.trim()) listErrors.push("Please provide your full name.");
    if (!formData.email.trim()) listErrors.push("Please provide your business email.");
    if (!formData.phone.trim()) listErrors.push("Please provide a contact number.");
    if (!formData.message.trim()) listErrors.push("Please describe how we can help.");

    if (listErrors.length > 0) {
      setErrors(listErrors);
      setValidationSuccess(false);
      return;
    }

    setErrors([]);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrors([result.error || "An error occurred while sending your message. Please try again."]);
        setValidationSuccess(false);
      } else {
        setValidationSuccess(true);
        setErrors([]);
      }
    } catch (err: any) {
      setErrors(["Network error: Failed to connect to the server. Please try again."]);
      setValidationSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy-900/60 font-semibold leading-relaxed">
            Have a business requirement or want to learn more? We&apos;d like to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-12">
          <div className="lg:col-span-4 bg-navy-card-hero rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-8">
              <div>
                <SectionLabel className="text-sky-400">Hraize Directory</SectionLabel>
                <h3 className="text-xl font-black uppercase text-white mt-2">Contact Information</h3>
              </div>
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-sky-400 shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-sage-100/50 tracking-wider uppercase">Location</p>
                  <p className="text-xs text-sage-100/80 mt-1 leading-relaxed font-bold">
                    Thanjavur, TamilNadu.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-sky-400 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-sage-100/50 tracking-wider uppercase">Email Us</p>
                  <p className="text-sm text-white mt-1 font-black underline tracking-wide">info@hraize.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-copper-400 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-sage-100/50 tracking-wider uppercase">Working Hours</p>
                  <p className="text-xs text-copper-400 mt-1 font-black">Monday to Saturday 9 am to 6 pm</p>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-sky-600/50 pt-4 relative z-10">
              <p className="text-[10px] text-sage-100/40 leading-relaxed uppercase font-mono tracking-widest">
                Trusted HR Partner &bull; 100% Quality Focus
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 bg-navy-600/10 border shadow-lg border-sky-600/20 rounded-3xl p-6 sm:p-10">
            <div className="mb-6">
              <h3 className="text-lg font-black text-navy-900 uppercase tracking-tight">Send us a message</h3>
              <p className="text-xs text-navy-900/50 font-bold mt-1">Select the division below to route your inquiry:</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-cream-100 p-1.5 rounded-xl border border-sky-600/50">
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
                    className={`flex items-center justify-center gap-1.5 py-3.5 px-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${active
                      ? "bg-navy-card text-white shadow-sm"
                      : "text-navy-900/50 hover:text-navy-900 hover:bg-cream-50"
                      }`}
                  >
                    <TabIcon className="h-3.5 w-3.5 shrink-0" />
                    {tab.label.split(". ")[1]}
                  </button>
                );
              })}
            </div>

            {errors.length > 0 && (
              <div className="mb-6 p-4 rounded-xl bg-red-muted/5 border border-sky-600/50 text-red-muted text-xs font-bold">
                <ul className="list-disc list-inside space-y-1">
                  {errors.map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              </div>
            )}

            {validationSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center bg-forest-500/5 border border-sky-600/50 rounded-2xl flex flex-col items-center gap-4"
              >
                <div className="h-12 w-12 rounded-full bg-forest-500/10 text-forest-500 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-navy-900 uppercase tracking-wide">Inquiry Dispatched!</h4>
                  <p className="text-xs text-navy-900/60 font-medium mt-1 max-w-sm mx-auto">
                    Thanks for reaching out, <strong className="text-navy-900">{formData.fullName}</strong>.
                    Your ticket has been submitted.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setValidationSuccess(false);
                    setFormData({ fullName: "", companyName: "", email: "", phone: "", serviceInterested: "", message: "", website: "" });
                  }}
                  className="px-5 py-2 bg-navy-card hover:bg-navy-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow cursor-pointer"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Honeypot field for spam prevention */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-navy-900 uppercase mb-1">Full Name *</label>
                    <input
                      type="text" name="fullName" value={formData.fullName} onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2.5 text-xs font-bold rounded-lg border border-sky-600/50 focus:outline-none focus:border-sky-600 bg-white text-navy-900"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-navy-900 uppercase mb-1">Company</label>
                    <input
                      type="text" name="companyName" value={formData.companyName} onChange={handleInputChange}
                      placeholder="Enterprise Corp"
                      className="w-full px-3 py-2.5 text-xs font-bold rounded-lg border border-sky-600/50 focus:outline-none focus:border-sky-600 bg-white text-navy-900"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-navy-900 uppercase mb-1">Business Email *</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleInputChange}
                      placeholder="jane@enterprise.com"
                      className="w-full px-3 py-2.5 text-xs font-bold rounded-lg border border-sky-600/50 focus:outline-none focus:border-sky-600 bg-white text-navy-900"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-navy-900 uppercase mb-1">Contact Phone *</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                      placeholder="+91 90000 00000"
                      className="w-full px-3 py-2.5 text-xs font-bold rounded-lg border border-sky-600/50 focus:outline-none focus:border-sky-600 bg-white text-navy-900"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black tracking-widest text-navy-900 uppercase mb-1">Service Interested In</label>
                  <select name="serviceInterested" value={formData.serviceInterested} onChange={handleInputChange}
                    className="w-full px-3 py-2.5 text-xs font-bold rounded-lg border border-sky-600/50 bg-white text-navy-900 focus:outline-none focus:border-sky-600"
                    disabled={isSubmitting}>
                    {getServiceOptions().map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-black tracking-widest text-navy-900 uppercase mb-1">How can we help you? *</label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange}
                    placeholder="Describe your goals, organisational bottlenecks, workforce size or coaching timelines..."
                    className="w-full px-3 py-2.5 text-xs font-medium rounded-lg border border-sky-600/50 focus:outline-none focus:border-sky-600 bg-white text-navy-900 resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="pt-2">
                  <button type="submit" disabled={isSubmitting}
                    className={`w-full py-3.5 text-white font-black uppercase text-xs tracking-wider rounded-xl shadow-md transition-all ${isSubmitting ? "bg-sky-600/50 cursor-not-allowed" : "bg-sky-600 hover:bg-sky-700 cursor-pointer"}`}>
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Message...
                      </span>
                    ) : "Send Message"}
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
