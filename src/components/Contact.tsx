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
  ArrowRight,
  ArrowUpRight,
  Check,
  Phone,
  Briefcase,
  Compass,
  Linkedin,
  Facebook,
  Instagram,
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
  // =========================================================================
  // STATIC MODE FLAG:
  // When false: Mail sending form is completely hidden, presenting a full
  // static, details-oriented contact & advisory desk hub.
  // Set to true in future when upgrading to dynamic mail sending.
  // =========================================================================
  const SHOW_DYNAMIC_FORM = false;

  // Normalize initialTab to one of the active UI tab keys
  const getNormalizedTab = (
    tab: EnquiryType
  ): "hr" | "recruitment" | "business-support" | "website-solutions" | "general" => {
    if (tab === "consultation" || tab === "quote") return "general";
    if (tab === "recruitment") return "recruitment";
    if (tab === "business-support") return "business-support";
    if (tab === "website-solutions") return "website-solutions";
    if (tab === "general") return "general";
    return "hr";
  };

  const [activeTab, setActiveTab] = useState<
    "hr" | "recruitment" | "business-support" | "website-solutions" | "general"
  >(getNormalizedTab(initialTab));

  // Copy email feedback state
  const [copiedEmail, setCopiedEmail] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@hraize.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // =========================================================================
  // PRESERVED DYNAMIC FORM STATE & HANDLERS (KEPT INTACT FOR FUTURE UPGRADE)
  // =========================================================================
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
    { id: "website-solutions", label: "04. Digital IT", icon: Globe },
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
          { value: "web-seo", label: "Website Development & SEO" },
          { value: "mobile-apps", label: "Mobile App Development" },
          { value: "digital-marketing", label: "Digital Marketing" },
          { value: "erp-solutions", label: "ERP Solutions" },
          { value: "cloud-infra", label: "Infrastructure & Cloud Support" },
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

  // 4 Core Service Desks for Details-Oriented Static View
  const serviceDesks = [
    {
      number: "01",
      title: "HR, Payroll Services & Administration",
      tag: "Payroll & Statutory",
      desc: "Gross-to-net payroll computation, payslips, EPFO / ESIC / PT filing support, and employee lifecycle record maintenance.",
      subject: "HR & Payroll Inquiry",
      emailSubject: "[HR & Payroll Inquiry] - Service Scope Request",
      sla: "Within 24 business hours",
    },
    {
      number: "02",
      title: "Recruitment & Talent Placement",
      tag: "Staffing & Hiring",
      desc: "Permanent and contract talent placement, rigorous candidate screening, profile vetting, and interview coordination.",
      subject: "Hiring Requirement",
      emailSubject: "[Hiring Requirement] - Talent Sourcing Request",
      sla: "Initial review within 1-2 business days",
    },
    {
      number: "03",
      title: "Business Administration & Invoicing Support",
      tag: "Receivables Desk",
      desc: "Sales invoice register maintenance, due-date tracking, professional payment reminders, and periodic overdue reports.",
      subject: "Invoicing Desk Inquiry",
      emailSubject: "[Invoicing Desk Inquiry] - Receivables Administration",
      sla: "Within 24 business hours",
    },
    {
      number: "04",
      title: "Digital IT Services",
      tag: "Technology & Web",
      desc: "Website development & SEO, mobile applications, digital marketing, ERP implementations, and cloud infrastructure.",
      subject: "Digital IT Project",
      emailSubject: "[Digital IT Project] - Technical Scoping Request",
      sla: "Technical scoping call upon inquiry",
    },
  ];

  return (
    <div className="bg-cream-100 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER SECTION ============ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Direct Communication</SectionLabel>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight leading-[1.08]">
            Get In Touch With <span className="text-sky-600">Hraize</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-navy-900/70 font-semibold leading-relaxed max-w-2xl mx-auto">
            Direct operational contact channels, advisory desks, and communication details across all service domains.
          </p>
        </div>

        {/* ============ 3 PRIMARY DIRECT CONTACT CARDS ============ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email Card */}
          <div className="bg-white rounded-3xl p-7 border border-sky-600/20 shadow-md flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-2xl bg-sky-600/10 text-sky-600 flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-sky-50 border border-sky-600/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-sky-700">
                  Primary Channel
                </span>
              </div>
              <h3 className="text-lg font-black text-navy-900 uppercase tracking-tight">
                Direct Business Email
              </h3>
              <p className="text-xs text-navy-900/65 font-medium mt-1.5 leading-relaxed">
                For service inquiries, operational quotes, and consultation scheduling.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-navy-900/10 space-y-3">
              <a
                href="mailto:info@hraize.com"
                className="block text-base font-black text-sky-600 hover:text-sky-700 transition-colors"
              >
                info@hraize.com
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="mailto:info@hraize.com"
                  className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-xs font-black uppercase tracking-wider shadow-xs transition-all"
                >
                  <span>Send Email</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 rounded-full border border-navy-900/15 bg-cream-50 hover:bg-cream-100 text-navy-900 px-3.5 py-2 text-xs font-bold transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-3xl p-7 border border-sky-600/20 shadow-md flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-2xl bg-sky-600/10 text-sky-600 flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-cream-50 border border-navy-900/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-navy-900/70">
                  Headquarters
                </span>
              </div>
              <h3 className="text-lg font-black text-navy-900 uppercase tracking-tight">
                Corporate Location
              </h3>
              <p className="text-xs text-navy-900/65 font-medium mt-1.5 leading-relaxed">
                Registered office with localized delivery desks across southern India.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-navy-900/10 space-y-1.5">
              <p className="text-sm font-black text-navy-900">
                Bengaluru, Karnataka, India
              </p>
              <p className="text-xs text-navy-900/60 font-semibold">
                Operational Delivery Desk: Tamil Nadu, India
              </p>
              <p className="text-[11px] text-copper-600 font-bold pt-1">
                Pan-India client servicing & remote operations
              </p>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-3xl p-7 border border-sky-600/20 shadow-md flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-2xl bg-copper-400/15 text-copper-600 flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-emerald-50 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Desk Active
                </span>
              </div>
              <h3 className="text-lg font-black text-navy-900 uppercase tracking-tight">
                Operating Desk Hours
              </h3>
              <p className="text-xs text-navy-900/65 font-medium mt-1.5 leading-relaxed">
                Dedicated client coordination and advisory support schedule.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-navy-900/10 space-y-1.5">
              <p className="text-sm font-black text-navy-900">
                Monday – Saturday
              </p>
              <p className="text-xs text-navy-900/70 font-bold">
                9:00 AM – 6:00 PM IST
              </p>
              <p className="text-[11px] text-navy-900/50 font-medium pt-1">
                Indian Standard Time (UTC +5:30)
              </p>
            </div>
          </div>
        </div>

        {/* ============ 4 DEDICATED SERVICE DESKS ============ */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <SectionLabel>Service Desks</SectionLabel>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Route Inquiries by Service Domain
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-navy-900/65 font-medium">
              Include your organization details and desired scope for prompt handling by the respective desk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {serviceDesks.map((desk, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-navy-900/10 shadow-xs hover:shadow-md hover:border-sky-600/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-copper-500 bg-copper-50 px-2.5 py-0.5 rounded-full border border-copper-200">
                      Pillar {desk.number}
                    </span>
                    <span className="text-[10px] font-bold text-navy-900/50 uppercase">
                      {desk.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-navy-900 uppercase tracking-tight">
                    {desk.title}
                  </h3>

                  <p className="mt-2 text-xs text-navy-900/65 font-medium leading-relaxed">
                    {desk.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-900/10 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold text-navy-900/50 uppercase block">
                      Turnaround SLA
                    </span>
                    <span className="text-xs font-black text-emerald-600">
                      {desk.sla}
                    </span>
                  </div>

                  <a
                    href={`mailto:info@hraize.com?subject=${encodeURIComponent(desk.emailSubject)}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy-900 hover:bg-sky-600 text-white px-4 py-2 text-xs font-black uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <span>Email Desk</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============ INQUIRY GUIDANCE & CHANNELS ROW ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto mb-16">
          {/* Inquiry Preparation Guidance */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 border border-navy-900/10 shadow-xs">
            <span className="text-[10px] font-black uppercase tracking-widest text-sky-600">
              Checklist
            </span>
            <h3 className="mt-1 text-lg font-black text-navy-900 uppercase tracking-tight">
              What to Include in Your Inquiry
            </h3>
            <p className="mt-1.5 text-xs text-navy-900/65 font-medium leading-relaxed">
              To help our advisory team prepare an accurate assessment and scoping call:
            </p>

            <ul className="mt-4 space-y-2.5 text-xs font-semibold text-navy-900/75">
              {[
                "Organization name, location, and industry sector",
                "Specific service requirements (HR, Payroll, Hiring, Invoicing, IT)",
                "Current workforce size or approximate transaction volume",
                "Target start date, schedule deadlines, or key milestones",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Social Channels & Brand Identity */}
          <div className="lg:col-span-5 bg-navy-card rounded-3xl p-7 text-white flex flex-col justify-between shadow-xl border border-sky-600/20">
            <div>
              <SectionLabel className="text-sky-400">Official Channels</SectionLabel>
              <h3 className="mt-1 text-lg font-black uppercase text-white tracking-tight">
                Connect on Social
              </h3>
              <p className="mt-1.5 text-xs text-sage-100/70 font-medium leading-relaxed">
                Follow Hraize for regulatory updates, operational insights, and announcements.
              </p>
            </div>

            <div className="mt-6 space-y-2.5 pt-4 border-t border-white/10">
              <a
                href="https://www.linkedin.com/company/hraize/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-xs font-bold"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="h-4 w-4 text-sky-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-white/50" />
              </a>

              <a
                href="https://www.facebook.com/share/1Bed1q8bnd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-xs font-bold"
              >
                <div className="flex items-center gap-2.5">
                  <Facebook className="h-4 w-4 text-sky-400" />
                  <span>Facebook Page</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-white/50" />
              </a>

              <a
                href="https://www.instagram.com/hraize.official?igsh=bWF5bXR0c25kY2hy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-xs font-bold"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="h-4 w-4 text-copper-400" />
                  <span>Instagram Profile</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-white/50" />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FUTURE UPGRADE: Dynamic Mail-Sending Form
            KEPT INTACT FOR FUTURE UPGRADE. Set SHOW_DYNAMIC_FORM = true to enable.
            ========================================================================= */}
        {SHOW_DYNAMIC_FORM && (
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
        )}
      </div>
    </div>
  );
};
