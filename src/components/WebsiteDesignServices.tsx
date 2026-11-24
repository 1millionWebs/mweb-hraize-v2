"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Smartphone,
  Megaphone,
  Database,
  Cloud,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Check,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Cpu,
  Target,
  Zap,
  Compass,
  Headphones,
  Info,
  Server,
  Layers,
  BarChart3,
} from "lucide-react";
import { SectionLabel, FeatureCheck } from "./UIElements";

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

  // What Makes Us Different - 6 Value Cards matching provided design
  const differentiators = [
    {
      icon: Cpu,
      title: "Partner-Delivered Tech Stack",
      desc: "Enterprise-grade modern engineering delivered in dedicated collaboration with Hraize's vetted technology development partner.",
    },
    {
      icon: Target,
      title: "Milestone-Driven Sprints",
      desc: "Predictable bi-weekly sprint cadences, live staging preview links, and clear milestone progress tracking at every stage.",
    },
    {
      icon: Zap,
      title: "Core Web Vitals & Speed",
      desc: "Performance-first architecture optimized for sub-second load times, mobile responsiveness, and 90+ Google Lighthouse scores.",
    },
    {
      icon: Compass,
      title: "Built-In SEO & Conversions",
      desc: "Clean structured schema, technical indexing, metadata optimization, and user journey funnels engineered to convert.",
    },
    {
      icon: ShieldCheck,
      title: "Cloud Resilience & Security",
      desc: "Enterprise SSL/TLS encryption, daily automated snapshot backups, firewall protection, and reliable disaster recovery.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support Desk",
      desc: "Proactive server monitoring, dependency updates, and single-point tech coordination without expanding internal team headcount.",
    },
  ];

  // 5 Core IT Pillars with accordion items & creative image frame data matching the attached image
  const itServices = [
    {
      id: "web-seo",
      number: "01",
      tag: "UI/UX & Web Development",
      title: "Website Development & SEO",
      subtitle:
        "High-performance, responsive websites and dynamic web portals that combine aesthetics with functionality.",
      image: "/workforce-planning.png",
      serviceQuery: "web-seo",
      actionLabel: "Request Website & SEO Quote",
      badgeText: "Web Design & Development",
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
          title: "Custom Website Architecture & Prototyping",
          description:
            "Seamless, user-centric web designs and high-fidelity wireframes that enhance engagement and deliver an intuitive digital experience.",
        },
        {
          title: "Frontend & Backend Development",
          description:
            "Frontend & Backend Development work together to create seamless, high-performing digital experiences. While frontend focuses on user interface and interactivity, backend ensures robust functionality, data management, and security.",
        },
        {
          title: "Search Engine Optimization (SEO)",
          description:
            "Deep search engine optimization, canonical tagging, XML sitemaps, structured schema markup, and speed audits to maximize organic Google visibility.",
        },
        {
          title: "CMS Integration (WordPress & Webflow)",
          description:
            "Empowering non-technical team members with intuitive content management workflows, easy page publishing, and flexible e-commerce integrations.",
        },
      ],
    },
    {
      id: "mobile-apps",
      number: "02",
      tag: "Mobile Engineering",
      title: "Mobile App Development",
      subtitle:
        "Seamless, user-centric mobile applications that enhance engagement and deliver native-level experiences on iOS and Android.",
      image: "/reporting.png",
      serviceQuery: "mobile-apps",
      actionLabel: "Request Mobile App Quote",
      badgeText: "Mobile Client Apps",
      subCard: {
        title: "Mobile App Ecosystem",
        stats: [
          { label: "Platforms", value: "iOS & Android" },
          { label: "Framework", value: "Flutter / React Native" },
          { label: "API Sync", value: "Real-time" },
        ],
      },
      accordions: [
        {
          title: "Cross-Platform Mobile Apps (Flutter & React Native)",
          description:
            "Single-codebase mobile applications that deliver native performance on both Apple iOS and Google Android, cutting development timelines in half.",
        },
        {
          title: "Native iOS & Android Engineering",
          description:
            "High-performance native development using Swift and Kotlin for applications requiring deep hardware integration, offline processing, and maximum speed.",
        },
        {
          title: "Mobile UI/UX Wireframing & Clickable Prototypes",
          description:
            "User journey mapping, high-fidelity Figma prototypes, and iterative usability testing before engineering commits a single line of code.",
        },
        {
          title: "App Store & Play Store Deployment Management",
          description:
            "End-to-end guidance through Apple App Store and Google Play compliance review, metadata optimization, signing certificates, and version updates.",
        },
      ],
    },
    {
      id: "digital-marketing",
      number: "03",
      tag: "Branding & Performance",
      title: "Digital Marketing & Performance",
      subtitle:
        "Transform your brand into a powerful identity with strategic branding solutions, targeted advertising, and marketing automation.",
      image: "/partners.png",
      serviceQuery: "digital-marketing",
      actionLabel: "Request Marketing Strategy Quote",
      badgeText: "Campaign Performance",
      subCard: {
        title: "Lead Velocity Funnel",
        stats: [
          { label: "Target Reach", value: "250K+" },
          { label: "Lead Growth", value: "+142%" },
          { label: "Conversion", value: "Optimized" },
        ],
      },
      accordions: [
        {
          title: "Search Engine Marketing (Google Ads & SEM)",
          description:
            "Targeted high-intent pay-per-click (PPC) campaigns engineered to reach buyers at the exact moment they search for your solutions.",
        },
        {
          title: "Brand Strategy, Positioning & Collateral Design",
          description:
            "Brand Strategy & Positioning defines how a brand stands out in the market by establishing its unique identity, values, and messaging. It ensures consistency across all touchpoints to create a lasting impression and build customer trust.",
        },
        {
          title: "B2B Lead Generation & Paid Social Media",
          description:
            "Data-backed LinkedIn and Meta campaigns designed to attract qualified decision-makers and build consistent inbound sales opportunities.",
        },
        {
          title: "Conversion Rate Optimization (CRO) & Funnels",
          description:
            "A/B split testing landing pages, checkout flows, and inquiry forms to maximize the return on every dollar of your marketing investment.",
        },
      ],
    },
    {
      id: "erp-solutions",
      number: "04",
      tag: "Enterprise Architecture",
      title: "Enterprise ERP & CRM Solutions",
      subtitle:
        "Custom enterprise resource planning modules, CRM pipelines, and operations automation tailored to eliminate manual administrative friction.",
      image: "/documentation.png",
      serviceQuery: "erp-solutions",
      actionLabel: "Request ERP Solutions Quote",
      badgeText: "Enterprise ERP Console",
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
          description:
            "Tailored operational platforms connecting procurement, inventory tracking, order administration, and financial invoicing into one single source of truth.",
        },
        {
          title: "Business Process & Workflow Automation",
          description:
            "Automate repetitive tasks, notifications, cross-department handoffs, and approval workflows without tedious manual data re-entry.",
        },
        {
          title: "CRM Integration & Customer Lifecycle Tracking",
          description:
            "Centralized customer records, interaction histories, deal pipelines, and automated follow-up reminders to accelerate business relationships.",
        },
        {
          title: "Role-Based Security & Audit Compliance Logs",
          description:
            "Granular permission controls ensuring team members access only relevant data, backed by complete historical audit trails for governance.",
        },
      ],
    },
    {
      id: "cloud-infra",
      number: "05",
      tag: "Cloud & Reliability",
      title: "Infrastructure & Cloud Support",
      subtitle:
        "Resilient cloud architecture setup, 24/7 server monitoring, DevOps automation, and robust cybersecurity to keep your business operating continuously.",
      image: "/services-training.png",
      serviceQuery: "cloud-infra",
      actionLabel: "Request Cloud & Infra Quote",
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
          title: "Cloud Architecture & Migration (AWS, Azure, GCP)",
          description:
            "Expert provisioning of scalable virtual servers, managed databases, load balancers, and containerized clusters built for zero downtime.",
        },
        {
          title: "24/7 Server Monitoring & Proactive Incident Response",
          description:
            "Continuous automated monitoring of CPU, memory, and database health with immediate triage before minor blips turn into outages.",
        },
        {
          title: "DevOps & CI/CD Automated Pipelines",
          description:
            "Modern deployment pipelines that allow new website and software features to be tested and shipped reliably with zero service interruption.",
        },
        {
          title: "SSL Security, Daily Backups & Disaster Recovery",
          description:
            "Automated multi-region snapshot backups, firewall rules, SSL certificate renewals, and comprehensive recovery runbooks for business continuity.",
        },
      ],
    },
  ];

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER SECTION (MATCHING ALL PAGES THEME) ============ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>04. Service Domain</SectionLabel>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight leading-[1.08]">
            Digital IT
            <br />
            <span className="text-sky-600">Services</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-navy-900/70 font-semibold leading-relaxed">
            Website development, mobile applications, performance marketing, ERP solutions, and cloud infrastructure delivered in collaboration with our technology partner.
          </p>

          {/* Technology Partner Disclaimer Pill */}
          <div className="mt-6 inline-flex max-w-2xl items-center gap-2.5 rounded-2xl border border-sky-600/30 bg-white/85 px-4 py-2.5 text-xs font-semibold text-navy-900/80 shadow-sm text-left">
            <Globe className="h-4 w-4 shrink-0 text-sky-600" />
            <span>{DISCLAIMER}</span>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact?tab=consultation"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3 text-sm font-black text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition-all duration-200 cursor-pointer"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact?tab=quote&service=website"
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white px-6 py-3 text-sm font-bold text-navy-900 shadow-sm hover:bg-cream-50 transition-all duration-200 cursor-pointer"
            >
              Get a Service Quote
              <ArrowUpRight className="h-4 w-4 text-sky-600" />
            </Link>
          </div>
        </div>

        {/* ============ WHAT MAKES US DIFFERENT (3x2 GRID FROM USER'S CODE) ============ */}
        {/* <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel>Operational Advantage</SectionLabel>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              What Makes Us Different
            </h2>
            <p className="mt-3 text-sm text-navy-900/60 font-semibold">
              Practical, high-performing digital execution designed around your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {differentiators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white/80 rounded-2xl p-6 lg:p-7 shadow-xs border border-sky-600/15 hover:shadow-md hover:border-sky-600/35 hover:bg-white transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                >
                  <div className="flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-sky-600/10 text-sky-600 mb-4 lg:mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                  </div>
                  <h3 className="text-sm lg:text-base font-black text-navy-900 uppercase tracking-tight mb-2 lg:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-navy-900/65 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div> */}

        {/* ============ 5 CORE IT PILLARS - CARDS DESIGN (FROM GIVEN IMAGE) ============ */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>Core IT Pillars</SectionLabel>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Digital IT Services &amp; Capabilities
            </h2>
            <p className="mt-3 text-sm text-navy-900/60 font-semibold">
              Interactive operational scope covering web architecture, native mobile apps, performance marketing, ERP software, and cloud infrastructure.
            </p>
          </div>

          {/* Alternating Service Cards matching attached image */}
          <div className="space-y-16 lg:space-y-24 max-w-6xl mx-auto">
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
                  <div className="lg:col-span-6 space-y-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-copper-500 uppercase tracking-wider">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-copper-50 text-[10px] font-black text-copper-600 border border-copper-200">
                          {service.number}
                        </span>
                        <span>{service.tag}</span>
                      </div>

                      <h3 className="mt-2 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight leading-snug">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-navy-900/70 font-medium leading-relaxed">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Accordion Group matching reference image */}
                    <div className="space-y-2.5 pt-1">
                      {service.accordions.map((acc, aIdx) => {
                        const isOpen = activeAccordion[service.id] === aIdx;

                        return (
                          <div
                            key={aIdx}
                            className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                                ? "border-2 border-sky-600 bg-white shadow-md ring-2 ring-sky-500/10"
                                : "border border-navy-900/10 bg-white/70 hover:border-sky-600/30 hover:bg-white"
                              }`}
                          >
                            <button
                              type="button"
                              onClick={() => toggleAccordion(service.id, aIdx)}
                              className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-3 pr-2">
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
                                className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-sky-600" : "text-navy-900/40"
                                  }`}
                              />
                            </button>

                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.28, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-4 pb-4 sm:px-4.5 sm:pb-4 pt-1 border-t border-navy-900/10">
                                    <p className="text-xs text-navy-900/75 font-medium leading-relaxed">
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
                    <div className="pt-2">
                      <Link
                        href={`/contact?tab=website-solutions&service=${service.serviceQuery}`}
                        className="inline-flex items-center gap-2 rounded-full bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 text-xs font-black uppercase tracking-wider shadow-md shadow-sky-600/20 transition-all cursor-pointer"
                      >
                        <span>{service.actionLabel}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* CREATIVE IMAGE FRAME WITH INSET FLOATING SUB-CARD (6 cols) */}
                  <div className="lg:col-span-6">
                    <div className="relative group">
                      {/* Main Outer Frame with Theme Blue Border matching attached reference */}
                      <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border-2 border-sky-600/30 bg-white shadow-xl shadow-navy-900/10 transition-all duration-500 group-hover:border-sky-500 group-hover:shadow-2xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 600px"
                        />

                        {/* Theme Depth Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 via-navy-900/20 to-transparent" />

                        {/* Top-Left Floating Pillar Badge */}
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-navy-900/90 backdrop-blur-md border border-white/20 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                          <span>{service.badgeText}</span>
                        </div>

                        {/* Inset Picture-in-Picture Floating Sub-Card (Matching Reference Image) */}
                        <div className="absolute bottom-4 right-4 z-10 w-52 sm:w-60 rounded-2xl border-2 border-sky-500 bg-white/95 backdrop-blur-md p-3.5 shadow-2xl space-y-2 transition-transform duration-300 group-hover:scale-102">
                          <div className="flex items-center justify-between border-b border-navy-900/10 pb-2">
                            <span className="text-[10px] font-black uppercase tracking-wider text-sky-600">
                              {service.subCard.title}
                            </span>
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-xs animate-pulse" />
                          </div>

                          <div className="space-y-1.5">
                            {service.subCard.stats.map((st, sIdx) => (
                              <div
                                key={sIdx}
                                className="flex items-center justify-between text-[10px] py-0.5"
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

        {/* ============ BOTTOM CTA (MATCHING PROVIDED TEMPLATE & THEME) ============ */}
        <div className="rounded-3xl bg-navy-card p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl border border-sky-600/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--color-sky-600)_15%,transparent)_0%,transparent_70%)]" />
          <div className="relative">
            <SectionLabel className="text-sky-400">Technology Partnership</SectionLabel>
            <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Ready to Own Your Digital Future
            </h3>
            <p className="mt-4 text-sm text-sage-100/70 font-medium max-w-xl mx-auto leading-relaxed">
              Hraize works in close collaboration with our trusted technology development partner to deliver enterprise-grade digital systems with zero technical debt.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact?tab=consultation"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 text-white font-black hover:bg-sky-700 px-8 py-3.5 text-xs uppercase tracking-wider shadow-lg shadow-sky-600/20 transition-all cursor-pointer"
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?tab=quote&service=website"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 text-white font-black hover:bg-white/10 px-8 py-3.5 text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Get a Service Quote
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
