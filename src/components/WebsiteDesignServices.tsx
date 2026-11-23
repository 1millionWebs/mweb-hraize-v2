"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import {
  Globe, Monitor, RefreshCw, Layout, Smartphone, FileEdit,
  Wrench, ArrowRight, Check, Info, Sparkles, ArrowDown
} from "lucide-react";

interface WebsiteDesignServicesProps {
  onGetStarted?: () => void;
}

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

  const quickNav = [
    { id: "business-website", label: "01. Business Website", icon: Monitor },
    { id: "redesign", label: "02. Redesign & Revamp", icon: RefreshCw },
    { id: "landing-pages", label: "03. Landing Pages", icon: Layout },
    { id: "mobile-responsive", label: "04. Mobile-Responsive", icon: Smartphone },
    { id: "content-updates", label: "05. Content Updates", icon: FileEdit },
    { id: "maintenance", label: "06. Tech Support", icon: Wrench },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const webItems = [
    {
      id: "business-website",
      number: "01",
      title: "Business Website Design",
      point: "Business website design.",
      serviceQuery: "business-website",
      actionLabel: "Request Business Website Quote",
    },
    {
      id: "redesign",
      number: "02",
      title: "Website Redesign and Revamp",
      point: "Website redesign and revamp.",
      serviceQuery: "redesign",
      actionLabel: "Request Redesign Quote",
    },
    {
      id: "landing-pages",
      number: "03",
      title: "Landing Page Development",
      point: "Landing page development.",
      serviceQuery: "landing-pages",
      actionLabel: "Request Landing Page Quote",
    },
    {
      id: "mobile-responsive",
      number: "04",
      title: "Mobile-Responsive Website Development",
      point: "Mobile-responsive website development.",
      serviceQuery: "mobile-responsive",
      actionLabel: "Request Responsive Dev Quote",
    },
    {
      id: "content-updates",
      number: "05",
      title: "Website Content and Page Updates",
      point: "Website content and page updates.",
      serviceQuery: "content-updates",
      actionLabel: "Request Content Update Support",
    },
    {
      id: "maintenance",
      number: "06",
      title: "Website Maintenance and Technical Support",
      point: "Website maintenance and technical support.",
      serviceQuery: "maintenance",
      actionLabel: "Request Maintenance Quote",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-600/10 px-4 py-1.5 mb-4 border border-sky-600/20">
            <span className="h-2 w-2 rounded-full bg-sky-600" />
            <span className="text-[11px] font-black tracking-[0.15em] text-sky-700 uppercase">
              04. Digital Solutions & Web Development
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-navy-900 uppercase tracking-tight leading-[1.05]">
            Website Design & Development
          </h1>

          <p className="mt-4 text-base sm:text-xl text-navy-900/70 font-semibold leading-relaxed max-w-3xl mx-auto">
            Business websites, redesign, landing pages and maintenance delivered in collaboration with our technology partner.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-xs text-navy-900/80 font-medium bg-sky-500/10 px-5 py-2.5 rounded-2xl border border-sky-500/20 max-w-2xl text-left sm:text-center">
            <Info className="h-4 w-4 text-sky-600 shrink-0" />
            <span>Delivered in collaboration with Hraize&apos;s technology development partner.</span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?tab=website-solutions"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-600/25 hover:bg-sky-700 transition-all duration-200"
            >
              Request a Service Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#business-website"
              onClick={(e) => scrollToSection(e, "business-website")}
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white px-7 py-3.5 text-sm font-bold text-navy-900 hover:bg-cream-50 shadow-sm transition-all duration-200"
            >
              View Service Scope Below
              <ArrowDown className="h-4 w-4 text-sky-600" />
            </a>
          </div>
        </div>

        {/* QUICK JUMP NAVIGATION BAR */}
        <div className="mb-16 rounded-2xl bg-white border border-sky-600/20 p-3 shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-widest text-navy-900/40 text-center mb-2.5">
            Quick Jump to Scope Sections
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {quickNav.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-navy-900 bg-cream-50 hover:bg-sky-600 hover:text-white border border-sky-600/15 hover:border-sky-600 transition-all shadow-sm"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* COMPLETE SCOPE OVERVIEW CARD */}
        <div className="mb-16 rounded-3xl bg-white border border-sky-600/20 shadow-sm p-8 sm:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-widest text-sky-600 block mb-2">
              Operational Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Website Design & Development Scope
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-navy-900/70 font-medium leading-relaxed">
              Hraize offers comprehensive website services delivered with our technology development partner:
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Business website design.",
                "Website redesign and revamp.",
                "Landing page development.",
                "Mobile-responsive website development.",
                "Website content and page updates.",
                "Website maintenance and technical support."
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50 border border-sky-600/10">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600/10 text-sky-600">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-navy-900/85 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-navy-900/70 font-medium">
            <Info className="h-4 w-4 text-sky-600 shrink-0" />
            <span>Delivered in collaboration with Hraize&apos;s technology development partner.</span>
          </div>
        </div>

        {/* 6 VERIFIED SCOPE CARDS */}
        <div className="space-y-8 mb-20">
          {webItems.map((item) => (
            <section
              key={item.id}
              id={item.id}
              className="scroll-mt-28 rounded-3xl bg-white border border-sky-600/20 shadow-sm p-8 sm:p-10 hover:border-sky-600/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-white font-black text-xs shadow-sm">
                  {item.number}
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-sky-600 block">
                    Website Design & Development
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-navy-900 uppercase tracking-tight">
                    {item.title}
                  </h2>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-cream-50 border border-sky-600/10">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-600/10 text-sky-600">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-navy-900/85">
                    {item.point}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs">
                <span className="text-navy-900/60 font-medium italic">
                  Delivered in collaboration with Hraize&apos;s technology development partner.
                </span>
                <Link
                  href={`/contact?tab=website-solutions&service=${item.serviceQuery}`}
                  className="inline-flex items-center gap-1.5 font-black text-sky-600 hover:text-sky-700 uppercase tracking-wider"
                >
                  {item.actionLabel} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </section>
          ))}
        </div>

        {/* BOTTOM CTA: Quote Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-navy-900 to-navy-900 p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-sky-300 mb-4 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Technology Partnership
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Need support with your business operations?
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed font-semibold">
              Contact Hraize to discuss the service requirements and delivery arrangements.
            </p>
          </div>
          <Link
            href="/contact?tab=website-solutions"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-black text-navy-900 hover:bg-cream-50 shadow-xl transition-all cursor-pointer"
          >
            Request a Service Quote
            <ArrowRight className="h-4 w-4 text-sky-600" />
          </Link>
        </div>

      </div>
    </div>
  );
};
