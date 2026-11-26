"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Globe,
  Smartphone,
  TrendingUp,
  Layers,
  Cloud,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { SectionLabel } from "./UIElements";
import { ServiceHero } from "./ServiceHero";

interface WebsiteDesignServicesProps {
  onGetStarted?: () => void;
}

const DISCLAIMER =
  "Delivered in collaboration with Hraize's technology development partner.";

export const WebsiteDesignServices: React.FC<WebsiteDesignServicesProps> = () => {
  // 6 Core IT Pillars (3x2 checkerboard layout)
  const itServices = [
    {
      id: "web-seo",
      title: "Website Development & SEO",
      subtitle: "High-performance, responsive websites, CMS portals, and technical SEO built to convert.",
      icon: Globe,
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      subtitle: "Native and cross-platform iOS & Android applications engineered for speed and scale.",
      icon: Smartphone,
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing & Growth",
      subtitle: "Data-driven search ads, paid social campaigns, and conversion-focused lead funnels.",
      icon: TrendingUp,
    },
    {
      id: "erp-solutions",
      title: "Enterprise ERP & CRM",
      subtitle: "Tailored ERP modules, automated approvals, and unified customer lifecycle workflows.",
      icon: Layers,
    },
    {
      id: "cloud-infra",
      title: "Cloud & Infrastructure",
      subtitle: "Resilient AWS/Azure setups, CI/CD pipelines, and automated multi-region backups.",
      icon: Cloud,
    },
    {
      id: "it-support",
      title: "Dedicated IT Support",
      subtitle: "Proactive 24/7 monitoring, security patching, and ongoing technical maintenance.",
      icon: Headphones,
    },
  ];

  // Smooth scroll to anchor on mount or hash change
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const timer = setTimeout(scrollToHash, 250);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

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
        {/* ============ 6 CORE IT PILLARS (3x2 CHECKERBOARD DESIGN) ============ */}
        <div id="capabilities" className="scroll-mt-24 mb-20 lg:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Core IT Pillars</SectionLabel>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Digital IT Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {itServices.map((svc, idx) => {
              const Icon = svc.icon;
              const isTinted = idx % 2 === 0;
              return (
                <motion.div
                  key={svc.id}
                  id={svc.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.06, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className={`scroll-mt-28 group flex flex-col items-center justify-center text-center px-7 py-10 border transition-all duration-300 hover:border-sky-600 hover:shadow-lg hover:shadow-sky-900/5 ${isTinted
                      ? "bg-sky-50 border-sky-600/35"
                      : "bg-white border-sky-600/35"
                    }`}
                >
                  <Icon
                    strokeWidth={1.5}
                    className="h-11 w-11 text-sky-600 mb-5 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-base sm:text-lg font-black text-navy-900 tracking-tight mb-2.5 transition-colors duration-200 group-hover:text-sky-600">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-900/60 font-medium leading-relaxed max-w-xs">
                    {svc.subtitle}
                  </p>
                </motion.div>
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
        <div id="technology-partner" className="scroll-mt-24 rounded-3xl bg-white p-8 sm:p-10 text-center max-w-3xl mx-auto relative overflow-hidden shadow-xl border border-sky-600/20">
          <div className="relative">
            <SectionLabel>Technology Partnership</SectionLabel>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight text-navy-900">
              Ready to Own Your Digital Future
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-navy-900/65 font-medium max-w-lg mx-auto leading-relaxed">
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
