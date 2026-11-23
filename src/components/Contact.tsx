"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Building2,
  Mail,
  Clock,
  CheckCircle2,
  Send,
  HelpCircle,
  Layers,
  Shield,
  Users,
  FileText,
  Globe,
  UserCheck,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SectionLabel } from "./UIElements";

export type EnquiryType =
  | "hr"
  | "recruitment"
  | "business-support"
  | "website-solutions"
  | "personnel-admin"
  | "consultation"
  | "quote"
  | "general";

interface ContactProps {
  initialTab?: EnquiryType;
}

export const Contact: React.FC<ContactProps> = ({ initialTab = "hr" }) => {
  // Normalize initialTab to one of the 5 active UI tab keys
  const getNormalizedTab = (tab: EnquiryType): "hr" | "recruitment" | "business-support" | "website-solutions" | "general" => {
    if (tab === "consultation" || tab === "quote") return "general";
    if (tab === "recruitment") return "recruitment";
    if (tab === "business-support") return "business-support";
    if (tab === "website-solutions") return "website-solutions";
    if (tab === "general") return "general";
    return "hr";
  };

  const [activeTab, setActiveTab] = useState<"hr" | "recruitment" | "business-support" | "website-solutions" | "general">(
    getNormalizedTab(initialTab)
  );

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceInterested: "",
    message: "",
    website: "", // Honeypot field
  });

  const [validationSuccess, setValidationSuccess] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setActiveTab(getNormalizedTab(initialTab));
  }, [initialTab]);

  const tabs = [
    { id: "hr", label: "01. HR, Payroll & Admin", icon: Shield },
    { id: "recruitment", label: "02. Recruitment", icon: Users },
    { id: "business-support", label: "03. Invoicing Desk", icon: FileText },
    { id: "website-solutions", label: "04. Website Dev", icon: Globe },
    { id: "general", label: "Consultation / Quote", icon: Sparkles },
  ];

  const getServiceOptions = () => {
    switch (activeTab) {
      case "hr":
        return [
          { value: "payroll", label: "Monthly Payroll Preparation & Processing" },
          { value: "salary-statements", label: "Salary Statements & Payslip Coordination" },
          { value: "joining-exit", label: "Employee Joining & Exit Administration" },
          { value: "pf", label: "Provident Fund (PF) & EPFO Filing Support" },
          { value: "esi", label: "Employee State Insurance (ESI) Administration" },
          { value: "pt", label: "Professional Tax (PT) Calculations & Filing" },
          { value: "statutory-records", label: "Employee Data & Statutory Record Maintenance" },
          { value: "documentation", label: "Employee Documentation & Letters" },
          { value: "personnel-data", label: "Personnel Data Maintenance" },
          { value: "attendance-leave", label: "Attendance & Leave Records Coordination" },
          { value: "lifecycle", label: "Employee Lifecycle Administration" },
          { value: "hr-reports", label: "HR Reports & Periodic Documentation" },
          { value: "compliance-records", label: "Compliance Records Support" },
        ];
      case "recruitment":
        return [
          { value: "permanent", label: "Permanent Hiring & Executive Sourcing" },
          { value: "contract", label: "Contract & Interim Staffing" },
          { value: "sourcing", label: "Candidate Sourcing & Screening" },
          { value: "interview", label: "Interview Coordination & Hiring Support" },
        ];
      case "business-support":
        return [
          { value: "sales-register", label: "Sales Invoice Register Maintenance" },
          { value: "due-dates", label: "Invoice Due-Date Tracking" },
          { value: "payment-reminders", label: "Customer Payment Reminders" },
          { value: "follow-ups", label: "Outstanding Payment Follow-ups" },
          { value: "overdue-reports", label: "Periodic Receivables & Overdue Reports" },
        ];
      case "website-solutions":
        return [
          { value: "business-website", label: "Business Website Design" },
          { value: "redesign", label: "Website Redesign & Revamp" },
          { value: "landing-pages", label: "Landing Page Development" },
          { value: "mobile-responsive", label: "Mobile-Responsive Website Development" },
          { value: "maintenance", label: "Website Maintenance & Tech Partner Support" },
        ];
      case "general":
      default:
        return [
          { value: "consultation", label: "Request a Comprehensive Consultation" },
          { value: "quote", label: "Request an End-to-End Service Quote" },
          { value: "partnership", label: "General Corporate Partnership" },
          { value: "other", label: "Other Operational Requirement" },
        ];
    }
  };

  useEffect(() => {
    const options = getServiceOptions();
    setFormData((prev) => ({
      ...prev,
      serviceInterested: options[0]?.value || "",
    }));
  }, [activeTab]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
        setErrors([
          result.error ||
            "An error occurred while sending your message. Please try again.",
        ]);
        setValidationSuccess(false);
      } else {
        setValidationSuccess(true);
        setErrors([]);
      }
    } catch (err: any) {
      setErrors([
        "Network error: Failed to connect to the server. Please try again.",
      ]);
      setValidationSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Contact Hraize</SectionLabel>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            Request a Consultation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-navy-900/65 font-semibold leading-relaxed">
            Discuss your service requirements and delivery arrangements with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-12">
          {/* Contact Details Card */}
          <div className="lg:col-span-4 bg-navy-card rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden border border-navy-900/10 shadow-xl">
            <div className="space-y-8">
              <div>
                <SectionLabel className="text-sky-400">Headquarters</SectionLabel>
                <h2 className="text-xl font-black uppercase text-white mt-2">
                  Hraize Advisory Services
                </h2>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-sky-400 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-sage-100/50 tracking-wider uppercase">
                    Location
                  </p>
                  <p className="text-xs text-sage-100/90 mt-1 leading-relaxed font-bold">
                    Bengaluru, Karnataka, India
                  </p>
                  <p className="text-[11px] text-sage-100/60 mt-0.5 font-medium">
                    Operational Delivery Desk: Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-sky-400 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-sage-100/50 tracking-wider uppercase">
                    Direct Business Email
                  </p>
                  <a
                    href="mailto:info@hraize.com"
                    className="text-sm text-white mt-1 font-black underline tracking-wide hover:text-sky-300 transition-colors"
                  >
                    info@hraize.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-copper-400 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-sage-100/50 tracking-wider uppercase">
                    Operating Hours
                  </p>
                  <p className="text-xs text-copper-400 mt-1 font-black">
                    Monday to Saturday · 9:00 AM to 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-4 relative z-10">
              <p className="text-[10px] text-sage-100/40 leading-relaxed uppercase font-mono tracking-widest">
                Supporting Your People. Simplifying Your Business.
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-8 bg-white border shadow-xl border-sky-600/15 rounded-3xl p-6 sm:p-10">
            <div className="mb-6">
              <h2 className="text-lg font-black text-navy-900 uppercase tracking-tight">
                Send Us an Inquiry
              </h2>
              <p className="text-xs text-navy-900/60 font-semibold mt-1">
                Select your service domain to route your requirement:
              </p>
            </div>

            {/* Division Switcher */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-8 bg-cream-50 p-2 rounded-2xl border border-sky-600/15">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      setValidationSuccess(false);
                    }}
                    className={`flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                      active
                        ? "bg-sky-600 text-white shadow-md"
                        : "text-navy-900/60 hover:text-navy-900 hover:bg-white"
                    }`}
                  >
                    <TabIcon className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {errors.length > 0 && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-bold">
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
                className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col items-center gap-4"
              >
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-navy-900 uppercase tracking-wide">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs text-navy-900/65 font-semibold mt-1 max-w-sm mx-auto">
                    Thank you for reaching out, <strong className="text-navy-900">{formData.fullName}</strong>.
                    Our service coordinator will review your requirements and respond shortly.
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
                      message: "",
                      website: "",
                    });
                  }}
                  className="px-6 py-2.5 bg-navy-card hover:bg-navy-800 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow cursor-pointer transition-colors"
                >
                  Send Another Inquiry
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
                    <label className="block text-[10px] font-black tracking-widest text-navy-900 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 text-xs font-bold rounded-xl border border-sky-600/30 focus:outline-none focus:border-sky-600 bg-white text-navy-900"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-navy-900 uppercase mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Organization / Firm"
                      className="w-full px-3.5 py-2.5 text-xs font-bold rounded-xl border border-sky-600/30 focus:outline-none focus:border-sky-600 bg-white text-navy-900"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-navy-900 uppercase mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@organization.com"
                      className="w-full px-3.5 py-2.5 text-xs font-bold rounded-xl border border-sky-600/30 focus:outline-none focus:border-sky-600 bg-white text-navy-900"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-navy-900 uppercase mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 90000 00000"
                      className="w-full px-3.5 py-2.5 text-xs font-bold rounded-xl border border-sky-600/30 focus:outline-none focus:border-sky-600 bg-white text-navy-900"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black tracking-widest text-navy-900 uppercase mb-1">
                    Service Scope *
                  </label>
                  <select
                    name="serviceInterested"
                    value={formData.serviceInterested}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-xs font-bold rounded-xl border border-sky-600/30 bg-white text-navy-900 focus:outline-none focus:border-sky-600"
                    disabled={isSubmitting}
                  >
                    {getServiceOptions().map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-black tracking-widest text-navy-900 uppercase mb-1">
                    How can Hraize support your business? *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your current requirements, team size, operational schedule or deadlines..."
                    className="w-full px-3.5 py-2.5 text-xs font-medium rounded-xl border border-sky-600/30 focus:outline-none focus:border-sky-600 bg-white text-navy-900 resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 text-white font-black uppercase text-xs tracking-wider rounded-xl shadow-md transition-all ${
                      isSubmitting
                        ? "bg-sky-600/50 cursor-not-allowed"
                        : "bg-sky-600 hover:bg-sky-700 cursor-pointer"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-3.5 w-3.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending Request...
                      </span>
                    ) : (
                      "Request a Consultation"
                    )}
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
