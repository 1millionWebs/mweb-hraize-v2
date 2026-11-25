"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ShieldCheck,
  Cpu,
  Target,
  Zap,
  Compass,
  Headphones,
} from "lucide-react";
import { SectionLabel } from "./UIElements";
import { ServiceHero } from "./ServiceHero";

interface WebsiteDesignServicesProps {
  onGetStarted?: () => void;
}

const DISCLAIMER =
  "Delivered in collaboration with Hraize's technology development partner.";

export const WebsiteDesignServices: React.FC<WebsiteDesignServicesProps> = () => {
  // Smooth scroll to anchor on mount or hash change
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    };

    const timer1 = setTimeout(scrollToHash, 250);
    const timer2 = setTimeout(scrollToHash, 600);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  // Accordion active state for each of the 5 services (default item index 1 is expanded)
  const [activeAccordion, setActiveAccordion] = useState<Record<string, number>>({
    "web-seo": 1,
    "mobile-apps": 1,
    "digital-marketing": 1,
    "erp-solutions": 1,
    "cloud-infra": 1,
  });

  const toggleAccordion = (serviceId: string, index: number) => {
    setActiveAccordion((prev) => ({
      ...prev,
      [serviceId]: prev[serviceId] === index ? -1 : index,
    }));
  };

  // What Makes Us Different - 6 Crisp Value Cards
  const differentiators = [
    {
      icon: Cpu,
      title: "Partner-Delivered Tech",
      desc: "Enterprise architecture delivered with our trusted technology development partner.",
    },
    {
      icon: Target,
      title: "Milestone-Driven Sprints",
      desc: "Bi-weekly sprint deliveries with live staging demo links at every milestone.",
    },
    {
      icon: Zap,
      title: "High Speed & Core Vitals",
      desc: "Optimized for sub-second loads, mobile responsiveness, and 90+ Lighthouse scores.",
    },
    {
      icon: Compass,
      title: "Built-In SEO & Funnels",
      desc: "Structured schema, technical indexing, and conversion-focused user journeys.",
    },
    {
      icon: ShieldCheck,
      title: "Cloud & Data Security",
      desc: "SSL encryption, automated daily snapshots, and resilient disaster recovery.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support Desk",
      desc: "Proactive monitoring and ongoing maintenance without adding internal headcount.",
    },
  ];

  // 5 Core IT Pillars - Optimized minimal text matching reference layout
  const itServices = [
    {
      id: "web-seo",
      number: "01",
      tag: "Web & SEO",
      title: "Website Development & SEO",
      subtitle: "High-performance, responsive websites and web portals built to convert.",
      image: "/it-web-dev.jpg",
      serviceQuery: "web-seo",
      actionLabel: "Request Web Quote",
      badgeText: "Web Architecture",
      subCard: {
        title: "Performance Stack",
        stats: [
          { label: "Core Web Vitals", value: "98/100" },
          { label: "Architecture", value: "Next.js / React" },
          { label: "Security", value: "SSL Encrypted" },
        ],
      },
      accordions: [
        {
          title: "Custom Web Design & Architecture",
          description: "User-centric layouts and responsive wireframes built for fast navigation.",
        },
        {
          title: "Frontend & Backend Development",
          description: "Scalable React, Next.js, and Node architectures with secure API integrations.",
        },
        {
          title: "Search Engine Optimization (SEO)",
          description: "Technical SEO audits, schema markup, and speed tuning for search rankings.",
        },
        {
          title: "CMS & E-Commerce Integration",
          description: "Intuitive content publishing via WordPress, Webflow, and Shopify platforms.",
        },
      ],
    },
    {
      id: "mobile-apps",
      number: "02",
      tag: "Mobile Apps",
      title: "Mobile App Development",
      subtitle: "Native and cross-platform mobile applications for iOS and Android.",
      image: "/it-mobile-apps.jpg",
      serviceQuery: "mobile-apps",
      actionLabel: "Request App Quote",
      badgeText: "Mobile Client Apps",
      subCard: {
        title: "Mobile Ecosystem",
        stats: [
          { label: "Platforms", value: "iOS & Android" },
          { label: "Framework", value: "Flutter / React Native" },
          { label: "API Sync", value: "Real-time" },
        ],
      },
      accordions: [
        {
          title: "Cross-Platform Apps (Flutter & React Native)",
          description: "Single-codebase mobile apps delivering native speed across iOS and Android.",
        },
        {
          title: "Native iOS & Android Engineering",
          description: "High-performance Swift and Kotlin development for deep hardware integrations.",
        },
        {
          title: "Mobile UI/UX Clickable Prototypes",
          description: "Figma wireframing and user journey mapping before writing production code.",
        },
        {
          title: "App Store & Play Store Deployment",
          description: "Full management of Apple App Store and Google Play compliance and releases.",
        },
      ],
    },
    {
      id: "digital-marketing",
      number: "03",
      tag: "Growth Marketing",
      title: "Digital Marketing & Performance",
      subtitle: "Data-driven search marketing, social advertising, and lead funnels.",
      image: "/it-digital-marketing.jpg",
      serviceQuery: "digital-marketing",
      actionLabel: "Request Marketing Quote",
      badgeText: "Performance Desk",
      subCard: {
        title: "Lead Velocity",
        stats: [
          { label: "Target Reach", value: "250K+" },
          { label: "Lead Growth", value: "+142%" },
          { label: "Conversion", value: "Optimized" },
        ],
      },
      accordions: [
        {
          title: "Search Engine Ads (Google Ads & SEM)",
          description: "High-intent paid search campaigns capturing buyers ready to convert.",
        },
        {
          title: "Brand Strategy & Visual Identity",
          description: "Distinct brand positioning, visual collateral, and clear market messaging.",
        },
        {
          title: "B2B Lead Generation & Paid Social",
          description: "Targeted LinkedIn and Meta campaigns delivering qualified sales opportunities.",
        },
        {
          title: "Conversion Rate Optimization (CRO)",
          description: "A/B testing landing pages and enquiry forms to maximize conversion velocity.",
        },
      ],
    },
    {
      id: "erp-solutions",
      number: "04",
      tag: "Enterprise ERP",
      title: "Enterprise ERP & CRM Solutions",
      subtitle: "Tailored ERP modules, CRM workflows, and operational automation.",
      image: "/it-erp-solutions.jpg",
      serviceQuery: "erp-solutions",
      actionLabel: "Request ERP Quote",
      badgeText: "Enterprise ERP",
      subCard: {
        title: "Enterprise Sync",
        stats: [
          { label: "Finance & Invoices", value: "Connected" },
          { label: "Inventory Sync", value: "Automated" },
          { label: "Audit Logging", value: "Compliant" },
        ],
      },
      accordions: [
        {
          title: "Custom ERP System Architecture",
          description: "Unified platforms connecting inventory, orders, billing, and accounting.",
        },
        {
          title: "Business Process & Workflow Automation",
          description: "Eliminating manual data re-entry with automated approvals and notifications.",
        },
        {
          title: "CRM & Customer Lifecycle Tracking",
          description: "Centralized lead records, deal pipelines, and automated follow-up sequences.",
        },
        {
          title: "Role-Based Security & Audit Logs",
          description: "Granular permission controls with complete compliance audit trails.",
        },
      ],
    },
    {
      id: "cloud-infra",
      number: "05",
      tag: "Cloud Support",
      title: "Infrastructure & Cloud Support",
      subtitle: "Resilient cloud setup, 24/7 server monitoring, and automated security.",
      image: "/it-cloud-infra.jpg",
      serviceQuery: "cloud-infra",
      actionLabel: "Request Cloud Quote",
      badgeText: "Cloud Infrastructure",
      subCard: {
        title: "Infrastructure Health",
        stats: [
          { label: "Uptime SLA", value: "99.95%" },
          { label: "Cloud Stack", value: "AWS / Azure" },
          { label: "Monitoring", value: "24/7 Live" },
        ],
      },
      accordions: [
        {
          title: "Cloud Migration & Setup (AWS, Azure, GCP)",
          description: "Scalable virtual infrastructure engineered for high availability and zero downtime.",
        },
        {
          title: "24/7 Monitoring & Incident Response",
          description: "Continuous server health checks with proactive automated alert resolution.",
        },
        {
          title: "DevOps & CI/CD Automated Pipelines",
          description: "Automated deployment pipelines for reliable, zero-downtime feature releases.",
        },
        {
          title: "Automated Backups & Disaster Recovery",
          description: "Multi-region snapshot backups, SSL renewals, and fast disaster recovery.",
        },
      ],
    },
  ];

  return (
    <div className="bg-cream-100">
      {/* ============ COMMON SERVICE HERO ============ */}
      <ServiceHero
        label="Digital & IT"
        title="Digital IT"
        accentTitle="Services"
        description="Website development, mobile applications, performance marketing, ERP solutions, and cloud infrastructure."
        anchors={[
          { label: "Capabilities", href: "#capabilities" },
          { label: "Technology Partner", href: "#technology-partner" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* ============ 5 CORE IT PILLARS (MINIMAL TEXT & MAXIMUM WHITESPACE) ============ */}
        <div id="capabilities" className="scroll-mt-24 mb-20 lg:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Core IT Pillars</SectionLabel>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Digital IT Capabilities
            </h2>
          </div>

          {/* Alternating Service Cards */}
          <div className="space-y-16 lg:space-y-20 max-w-6xl mx-auto">
            {itServices.map((service, idx) => {
              const isReversed = idx % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                >
                  {/* TEXT & ACCORDION COLUMN (6 cols) */}
                  <div className="lg:col-span-6 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-copper-500 uppercase tracking-wider">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-copper-50 text-[10px] font-black text-copper-600 border border-copper-200">
                          {service.number}
                        </span>
                        <span>{service.tag}</span>
                      </div>

                      <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-black text-navy-900 uppercase tracking-tight leading-snug">
                        {service.title}
                      </h3>

                      <p className="mt-1.5 text-xs sm:text-sm text-navy-900/65 font-medium leading-relaxed">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Accordions with ultra-concise 1-line explanations */}
                    <div className="space-y-2 pt-1">
                      {service.accordions.map((acc, aIdx) => {
                        const isOpen = activeAccordion[service.id] === aIdx;

                        return (
                          <div
                            key={aIdx}
                            className={`rounded-xl border transition-all duration-200 overflow-hidden ${isOpen
                              ? "border-2 border-sky-600 bg-white shadow-xs"
                              : "border border-navy-900/10 bg-white/70 hover:border-sky-600/30 hover:bg-white"
                              }`}
                          >
                            <button
                              type="button"
                              onClick={() => toggleAccordion(service.id, aIdx)}
                              className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-2.5 pr-2">
                                <span
                                  className={`h-1.5 w-1.5 rounded-full shrink-0 transition-colors ${isOpen ? "bg-sky-600" : "bg-navy-900/30"
                                    }`}
                                />
                                <span
                                  className={`text-xs sm:text-sm font-black transition-colors ${isOpen ? "text-sky-600" : "text-navy-900/85"
                                    }`}
                                >
                                  {acc.title}
                                </span>
                              </div>
                              <ChevronDown
                                className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-sky-600" : "text-navy-900/40"
                                  }`}
                              />
                            </button>

                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-3.5 pb-3 pt-0.5 border-t border-navy-900/5">
                                    <p className="text-xs text-navy-900/70 font-medium leading-relaxed">
                                      {acc.description}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>

                    {/* Action Button */}
                    <div className="pt-1.5">
                      <Link
                        href={`/contact?tab=website-solutions&service=${service.serviceQuery}`}
                        className="inline-flex items-center gap-2 rounded-full bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 text-xs font-black uppercase tracking-wider shadow-xs transition-all cursor-pointer"
                      >
                        <span>{service.actionLabel}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* CREATIVE IMAGE FRAME WITH INSET FLOATING SUB-CARD */}
                  <div className="lg:col-span-6">
                    <div className="relative group">
                      <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border-2 border-sky-600/30 bg-white shadow-lg transition-all duration-300 group-hover:border-sky-500 group-hover:shadow-xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                          sizes="(max-width: 768px) 100vw, 600px"
                        />

                        {/* Subtle Depth Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />

                        {/* Top-Left Floating Pillar Badge */}
                        <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 rounded-full bg-navy-900/90 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-xs">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                          <span>{service.badgeText}</span>
                        </div>

                        {/* Inset Picture-in-Picture Floating Sub-Card */}
                        <div className="absolute bottom-3.5 right-3.5 z-10 w-48 sm:w-56 rounded-2xl border-2 border-sky-500 bg-white/95 backdrop-blur-md p-3 shadow-xl space-y-1.5 transition-transform duration-200 group-hover:scale-102">
                          <div className="flex items-center justify-between border-b border-navy-900/10 pb-1.5">
                            <span className="text-[10px] font-black uppercase tracking-wider text-sky-600">
                              {service.subCard.title}
                            </span>
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-xs animate-pulse" />
                          </div>

                          <div className="space-y-1">
                            {service.subCard.stats.map((st, sIdx) => (
                              <div
                                key={sIdx}
                                className="flex items-center justify-between text-[10px]"
                              >
                                <span className="font-semibold text-navy-900/60">{st.label}</span>
                                <span className="font-black text-navy-900">{st.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Partner Disclaimer */}
        <div className="mb-16 flex justify-center">
          <div className="inline-flex max-w-2xl items-center gap-2.5 rounded-2xl border border-sky-600/25 bg-white/80 px-4 py-2 text-xs font-semibold text-navy-900/75 shadow-xs">
            <Globe className="h-4 w-4 shrink-0 text-sky-600" />
            <span>{DISCLAIMER}</span>
          </div>
        </div>

        {/* ============ BOTTOM CTA (MINIMAL & IMPACTFUL) ============ */}
        <div id="technology-partner" className="scroll-mt-24 rounded-3xl bg-navy-card p-8 sm:p-10 text-center max-w-3xl mx-auto relative overflow-hidden shadow-xl border border-sky-600/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--color-sky-600)_15%,transparent)_0%,transparent_70%)]" />
          <div className="relative">
            <SectionLabel className="text-sky-400">Technology Partnership</SectionLabel>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Ready to Own Your Digital Future
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-sage-100/70 font-medium max-w-lg mx-auto leading-relaxed">
              Partner with Hraize and our technology development team for reliable, high-performance digital systems.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact?tab=consultation"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 text-white font-black hover:bg-sky-700 px-7 py-3 text-xs uppercase tracking-wider shadow-md shadow-sky-600/20 transition-all cursor-pointer"
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              {/* <Link
                href="/contact?tab=quote&service=website"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 text-white font-black hover:bg-white/10 px-7 py-3 text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Get a Service Quote
                <ArrowUpRight className="h-4 w-4" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
