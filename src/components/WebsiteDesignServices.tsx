"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Globe,
  Monitor,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Gauge,
  Megaphone,
  Database,
  Cloud,
  Check,
  Server,
  Layers,
  Cpu,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

interface WebsiteDesignServicesProps {
  onGetStarted?: () => void;
}

const DISCLAIMER =
  "Delivered in collaboration with Hraize's technology development partner.";

/** Wireframe block component */
const Block: React.FC<{ className?: string }> = ({ className = "" }) => (
  <span className={`block rounded ${className}`} aria-hidden />
);

/** Specialized Visual Mockups for each of the 5 services */
const ServiceVisual: React.FC<{ variant: number; serviceId: string }> = ({
  variant,
  serviceId,
}) => {
  switch (serviceId) {
    case "web-seo":
      return (
        <div className="space-y-3.5 p-4 bg-white">
          <div className="flex items-center gap-2">
            <Block className="h-3.5 w-14 bg-sky-600" />
            <div className="ml-auto flex items-center gap-2">
              <Block className="h-2 w-8 bg-navy-900/25" />
              <Block className="h-2 w-8 bg-navy-900/25" />
              <span className="rounded-full bg-emerald-500/15 text-emerald-700 px-2 py-0.5 text-[9px] font-black">
                SEO 98/100
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2 rounded-lg bg-sky-50 p-3 ring-1 ring-inset ring-sky-600/10">
              <Block className="h-3 w-3/4 bg-navy-900/75" />
              <Block className="h-2 w-full bg-navy-900/25" />
              <Block className="h-2 w-2/3 bg-navy-900/25" />
              <div className="flex gap-1.5 pt-1">
                <span className="h-4 w-12 rounded bg-sky-600 text-[8px] font-bold text-white flex items-center justify-center">Fast</span>
                <span className="h-4 w-12 rounded bg-navy-900/10 text-[8px] font-bold text-navy-900/70 flex items-center justify-center">Indexed</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-navy-900/10 ring-1 ring-inset ring-navy-900/10">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 to-navy-900/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="h-6 w-6 text-white/80" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Core Web Vitals", "Mobile First", "SSL Secure"].map((txt, i) => (
              <div key={i} className="rounded-lg bg-navy-900/[0.05] p-2 text-center">
                <span className="text-[9px] font-bold text-navy-900/70 block">{txt}</span>
                <span className="text-[8px] font-black text-emerald-600">Passed</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "mobile-apps":
      return (
        <div className="p-4 bg-cream-50 flex items-center justify-center">
          <div className="w-56 rounded-3xl border-2 border-navy-900/20 bg-white p-3 shadow-md space-y-3">
            <div className="flex items-center justify-between border-b border-navy-900/10 pb-2">
              <span className="text-[9px] font-black text-navy-900">9:41</span>
              <div className="h-1.5 w-10 rounded-full bg-navy-900/30" />
              <span className="text-[9px] font-bold text-sky-600">iOS / Android</span>
            </div>
            <div className="rounded-xl bg-gradient-to-r from-sky-600 to-navy-900 p-3 text-white">
              <div className="flex items-center gap-2 mb-1.5">
                <Smartphone className="h-4 w-4 text-sky-300" />
                <span className="text-[10px] font-black">Mobile Client App</span>
              </div>
              <Block className="h-1.5 w-3/4 bg-white/60 mb-1" />
              <Block className="h-1.5 w-1/2 bg-white/40" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-navy-900/[0.04] p-2">
                <span className="text-[9px] font-bold text-navy-900/70 block">Cross-Platform</span>
                <span className="text-[8px] font-black text-sky-600">Flutter / React Native</span>
              </div>
              <div className="rounded-lg bg-navy-900/[0.04] p-2">
                <span className="text-[9px] font-bold text-navy-900/70 block">API Sync</span>
                <span className="text-[8px] font-black text-emerald-600">Real-time</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "digital-marketing":
      return (
        <div className="p-4 bg-white space-y-3">
          <div className="flex items-center justify-between border-b border-navy-900/10 pb-2">
            <div className="flex items-center gap-2">
              <Megaphone className="h-4 w-4 text-copper-500" />
              <span className="text-[11px] font-black text-navy-900">Campaign Performance</span>
            </div>
            <span className="rounded-full bg-copper-400/15 text-copper-600 px-2 py-0.5 text-[9px] font-black">
              +142% Lead Velocity
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Target Reach", val: "250K+" },
              { label: "Conversion Rate", val: "4.8%" },
              { label: "Cost Per Lead", val: "Optimized" },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg bg-navy-900/[0.04] p-2 text-center">
                <p className="text-[8px] font-bold text-navy-900/60 uppercase">{stat.label}</p>
                <p className="text-xs font-black text-sky-600 mt-0.5">{stat.val}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-sky-600/15 bg-sky-50/50 p-2.5">
            <div className="flex justify-between text-[9px] font-bold text-navy-900/70 mb-1.5">
              <span>Audience Funnel Pipeline</span>
              <span className="text-sky-600 font-black">Active</span>
            </div>
            <div className="h-6 flex items-end gap-1">
              {[35, 55, 75, 90, 80, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-white rounded-t h-full flex flex-col justify-end">
                  <div className="bg-gradient-to-t from-sky-600 to-sky-400 rounded-t w-full" style={{ height: `${h}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "erp-solutions":
      return (
        <div className="p-4 bg-white space-y-3">
          <div className="flex items-center justify-between border-b border-navy-900/10 pb-2">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-sky-600" />
              <span className="text-[11px] font-black text-navy-900">Enterprise ERP Console</span>
            </div>
            <span className="rounded-full bg-sky-600/15 text-sky-700 px-2 py-0.5 text-[9px] font-black">
              Automated Workflows
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { mod: "Finance & Invoicing", state: "Connected" },
              { mod: "Inventory & Orders", state: "Synchronized" },
              { mod: "CRM & Pipelines", state: "Active" },
              { mod: "HR & Payroll Sync", state: "Live Module" },
            ].map((m, i) => (
              <div key={i} className="rounded-lg border border-navy-900/10 bg-cream-50 p-2">
                <span className="text-[9px] font-bold text-navy-900/80 block">{m.mod}</span>
                <span className="text-[8px] font-black text-emerald-600 flex items-center gap-1 mt-0.5">
                  <span className="h-1 w-1 rounded-full bg-emerald-500" />
                  {m.state}
                </span>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-navy-card p-2 text-white flex items-center justify-between text-[10px]">
            <span className="font-semibold text-white/70">Role-Based Data Access</span>
            <span className="text-copper-400 font-black">Audit Ready</span>
          </div>
        </div>
      );

    case "cloud-infra":
    default:
      return (
        <div className="p-4 bg-navy-card text-white space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <Cloud className="h-4 w-4 text-sky-400" />
              <span className="text-[11px] font-black text-white">Cloud Infrastructure Status</span>
            </div>
            <span className="rounded-full bg-emerald-500/20 text-emerald-400 px-2 py-0.5 text-[9px] font-black">
              99.9% SLA
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Uptime", val: "99.95%" },
              { label: "Security", val: "SSL / Firewall" },
              { label: "Backups", val: "Daily Auto" },
            ].map((c, i) => (
              <div key={i} className="rounded-lg bg-white/5 border border-white/10 p-2 text-center">
                <p className="text-[8px] font-bold text-white/50 uppercase">{c.label}</p>
                <p className="text-xs font-black text-sky-400 mt-0.5">{c.val}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Server className="h-4 w-4 text-emerald-400" />
              <span className="text-[10px] font-semibold text-white/80">AWS / Azure / GCP Stack</span>
            </div>
            <span className="text-[9px] font-bold text-emerald-400">24/7 Monitored</span>
          </div>
        </div>
      );
  }
};

const BrowserFrame: React.FC<{
  label: string;
  children: React.ReactNode;
  className?: string;
}> = ({ label, children, className = "" }) => (
  <div className={`overflow-hidden rounded-2xl border border-navy-900/15 bg-white shadow-xl shadow-navy-900/10 ${className}`}>
    <div className="flex items-center gap-2 border-b border-navy-900/10 bg-cream-50 px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-2 truncate rounded-full bg-white px-3 py-1 text-[10px] font-bold text-navy-900/50 ring-1 ring-inset ring-navy-900/10">
        {label}
      </span>
    </div>
    {children}
  </div>
);

export const WebsiteDesignServices: React.FC<WebsiteDesignServicesProps> = () => {
  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    const t1 = setTimeout(handleScrollToHash, 150);
    const t2 = setTimeout(handleScrollToHash, 450);

    window.addEventListener("hashchange", handleScrollToHash);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("hashchange", handleScrollToHash);
    };
  }, []);

  const itServices = [
    {
      id: "web-seo",
      number: "01",
      title: "Website Development & SEO",
      point: "Custom business websites, web applications, and search engine optimization (SEO) built for fast load speeds, organic visibility, and conversions.",
      serviceQuery: "web-seo",
      actionLabel: "Request Website & SEO Quote",
      url: "hraize.com/web-seo",
      icon: Globe,
      features: [
        "Responsive corporate websites and dynamic web apps",
        "Technical and on-page SEO optimization",
        "Core Web Vitals speed optimization and SSL security",
        "CMS implementation and regular page updates",
      ],
    },
    {
      id: "mobile-apps",
      number: "02",
      title: "Mobile App Development",
      point: "Cross-platform and native iOS and Android mobile applications engineered for intuitive user experiences, robust performance, and scalable cloud backends.",
      serviceQuery: "mobile-apps",
      actionLabel: "Request Mobile App Quote",
      url: "hraize.com/mobile-apps",
      icon: Smartphone,
      features: [
        "Cross-platform (Flutter / React Native) & native mobile apps",
        "Modern UX/UI design and high-fidelity prototypes",
        "API integrations and cloud database synchronization",
        "App Store and Google Play deployment management",
      ],
    },
    {
      id: "digital-marketing",
      number: "03",
      title: "Digital Marketing",
      point: "Targeted digital marketing campaigns, performance advertising, social media management, and data-driven lead generation strategies.",
      serviceQuery: "digital-marketing",
      actionLabel: "Request Marketing Strategy Quote",
      url: "hraize.com/digital-marketing",
      icon: Megaphone,
      features: [
        "Search engine marketing (Google Ads / SEM) & social media ads",
        "B2B lead generation funnels and email nurture workflows",
        "Brand positioning, audience segmentation, and content strategy",
        "Conversion rate optimization and transparent ROI analytics",
      ],
    },
    {
      id: "erp-solutions",
      number: "04",
      title: "ERP Solutions",
      point: "Tailored enterprise resource planning (ERP) implementations, CRM workflows, inventory tracking, and operational automation.",
      serviceQuery: "erp-solutions",
      actionLabel: "Request ERP Solutions Quote",
      url: "hraize.com/erp-solutions",
      icon: Database,
      features: [
        "Custom ERP systems tailored to specific business operations",
        "Inventory, supply chain, and order administration",
        "CRM integration and client lifecycle management",
        "Role-based security access and comprehensive reporting",
      ],
    },
    {
      id: "cloud-infra",
      number: "05",
      title: "Infrastructure & Cloud Support",
      point: "Reliable cloud infrastructure setup, server monitoring, automated data backups, DevOps pipelines, and technical support.",
      serviceQuery: "cloud-infra",
      actionLabel: "Request Cloud & Infra Support Quote",
      url: "hraize.com/cloud-infra",
      icon: Cloud,
      features: [
        "Cloud configuration and migration (AWS, Azure, GCP)",
        "Server monitoring, security patching, and uptime assurance",
        "Automated backup routines and disaster recovery plans",
        "Ongoing technical maintenance and support desk",
      ],
    },
  ];

  const scopePoints = [
    "Website development & SEO.",
    "Mobile app development.",
    "Digital Marketing.",
    "ERP solutions.",
    "Infrastructure & Cloud support.",
  ];

  return (
    <div className="bg-cream-100">
      {/* ============ DARK STUDIO HERO ============ */}
      <section className="relative overflow-hidden bg-navy-card-hero text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            WebkitMaskImage: "radial-gradient(70% 70% at 50% 30%, black, transparent)",
            maskImage: "radial-gradient(70% 70% at 50% 30%, black, transparent)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-sky-600/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-copper-400/20 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-sky-300 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
              04. Digital IT Services
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
              className="mt-5 text-4xl font-black uppercase leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Digital IT
              <span className="block text-sky-400">Services</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            >
              <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-white/70 sm:text-lg">
                Website development, mobile applications, performance marketing, ERP solutions, and cloud infrastructure delivered in collaboration with our technology partner.
              </p>

              <div className="mt-5 flex max-w-xl items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3.5 backdrop-blur">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                <span className="text-xs font-medium leading-relaxed text-white/75">
                  {DISCLAIMER}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact?tab=consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-500/30 transition-all duration-200 hover:bg-sky-400"
                >
                  Request a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact?tab=quote&service=website"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-white/10"
                >
                  Get a Service Quote
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Browser mockup hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="-rotate-1 overflow-hidden rounded-2xl border border-white/15 bg-[#0F172A] shadow-2xl shadow-black/50">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.06] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 flex-1 truncate rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-white/45">
                  https://hraize.com/digital-it
                </span>
              </div>

              <div className="relative aspect-[16/10]">
                <Image
                  src="/workforce-planning.png"
                  alt="Technology team collaborating on modern digital solutions"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/25 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 space-y-2.5">
                  <Block className="h-3.5 w-2/3 bg-white/85" />
                  <Block className="h-2.5 w-1/2 bg-white/45" />
                  <div className="flex gap-2 pt-1">
                    <span className="h-6 px-3 rounded-full bg-sky-500 text-[10px] font-black text-white flex items-center">
                      5 IT Pillars
                    </span>
                    <span className="h-6 px-3 rounded-full border border-white/40 text-[10px] font-bold text-white/80 flex items-center">
                      Partner Delivered
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 -top-5 flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-xl backdrop-blur sm:-right-5">
              <Gauge className="h-4 w-4 text-copper-300" />
              <span className="text-[11px] font-black uppercase tracking-wider text-white">
                Scalable Tech Stack
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8">
        {/* ============ SCOPE INTRO ============ */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-sky-600">
              Operational Scope
            </span>
            <h2 className="mt-1.5 max-w-2xl text-2xl font-black uppercase leading-tight tracking-tight text-navy-900 sm:text-3xl">
              Digital IT Capabilities
            </h2>
            <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-navy-900/65">
              Hraize offers comprehensive technology and digital services delivered in collaboration with our technology development partner:
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {scopePoints.map((point, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 rounded-full border border-sky-600/15 bg-white px-3.5 py-1.5 text-[11px] font-bold text-navy-900/75 shadow-sm"
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-sky-600" />
                {point.replace(/\.$/, "")}
              </span>
            ))}
          </div>
        </div>

        {/* ============ 5 CORE IT SERVICES ============ */}
        <div className="space-y-12 sm:space-y-16">
          {itServices.map((item, idx) => {
            const Icon = item.icon;
            return (
              <section
                key={item.id}
                id={item.id}
                className={`scroll-mt-32 flex flex-col items-center gap-7 md:gap-12 ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="w-full md:w-[47%]">
                  <BrowserFrame label={item.url}>
                    <ServiceVisual variant={idx} serviceId={item.id} />
                  </BrowserFrame>
                </div>

                <div className="w-full md:w-[53%]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-card text-xs font-black text-sky-400 border border-sky-600/30 shadow-md">
                      {item.number}
                    </span>
                    <span className="h-px flex-1 bg-sky-600/25" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-900/40">
                      {item.number} / 05
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-black uppercase leading-tight tracking-tight text-navy-900 sm:text-2xl">
                    {item.title}
                  </h3>

                  <div className="mt-4 rounded-xl border border-sky-600/15 bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-navy-900/80 leading-relaxed">
                      {item.point}
                    </p>
                    <ul className="mt-3 space-y-2 border-t border-navy-900/10 pt-3">
                      {item.features.map((feat, fi) => (
                        <li key={fi} className="flex items-center gap-2 text-xs font-medium text-navy-900/70">
                          <Check className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/contact?tab=website-solutions&service=${item.serviceQuery}`}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-[11px] font-black uppercase tracking-wider text-white shadow-md shadow-sky-600/20 transition-all hover:bg-sky-700"
                  >
                    {item.actionLabel}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </section>
            );
          })}
        </div>

        {/* ============ CTA ============ */}
        <div className="relative mt-20 overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-sky-700 to-navy-900 p-8 text-white shadow-2xl sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full border border-white/15"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 right-16 h-56 w-56 rounded-full border border-white/10"
          />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Technology Partnership
              </span>
              <h3 className="mt-4 text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl">
                Need support with your digital &amp; IT operations?
              </h3>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-white/80">
                Contact Hraize to discuss the service requirements and technology delivery arrangements.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/contact?tab=consultation"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-navy-900 shadow-xl transition-all hover:bg-cream-50"
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4 text-sky-600" />
              </Link>
              <Link
                href="/contact?tab=quote&service=website"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
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
