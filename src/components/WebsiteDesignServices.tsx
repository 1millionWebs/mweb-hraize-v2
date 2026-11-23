"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Globe, Monitor, Smartphone, ArrowRight, CheckCircle2, Sparkles, ArrowUpRight, Gauge
} from "lucide-react";

interface WebsiteDesignServicesProps {
  onGetStarted?: () => void;
}

const DISCLAIMER =
  "Delivered in collaboration with Hraize's technology development partner.";

/** Abstract wireframe placeholder block used inside the browser mockups */
const Block: React.FC<{ className?: string }> = ({ className = "" }) => (
  <span className={`block rounded ${className}`} aria-hidden />
);

const Wireframe: React.FC<{ variant: number }> = ({ variant }) => {
  const cardCols = ["grid-cols-3", "grid-cols-2", "grid-cols-4"][variant % 3];
  const heroReversed = variant % 2 === 1;

  return (
    <div className="space-y-3.5 p-4">
      {/* nav bar */}
      <div className="flex items-center gap-2">
        <Block className="h-3.5 w-12 bg-sky-600" />
        <div className="ml-auto flex items-center gap-2">
          <Block className="h-2 w-8 bg-navy-900/25" />
          <Block className="h-2 w-8 bg-navy-900/25" />
          <Block className="h-2 w-8 bg-navy-900/25" />
          <Block className="h-4 w-14 rounded-full bg-copper-400" />
        </div>
      </div>

      {/* hero area */}
      <div className="grid grid-cols-2 gap-3">
        <div
          className={`space-y-2 rounded-lg bg-sky-50 p-3 ring-1 ring-inset ring-sky-600/10 ${heroReversed ? "order-2" : ""
            }`}
        >
          <Block className="h-3 w-3/4 bg-navy-900/75" />
          <Block className="h-2 w-full bg-navy-900/25" />
          <Block className="h-2 w-2/3 bg-navy-900/25" />
          <Block className="h-5 w-16 rounded-full bg-sky-600" />
        </div>
        <div
          className={`relative overflow-hidden rounded-lg bg-navy-900/10 ring-1 ring-inset ring-navy-900/10 ${heroReversed ? "order-1" : ""
            }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 to-navy-900/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Monitor className="h-6 w-6 text-white/80" />
          </div>
        </div>
      </div>

      {/* card row */}
      <div className={`grid gap-3 ${cardCols}`}>
        {Array.from({ length: variant % 3 === 1 ? 2 : variant % 3 === 0 ? 3 : 4 }).map((_, i) => (
          <div key={i} className="space-y-1.5 rounded-lg bg-navy-900/[0.06] p-2.5">
            <Block className="h-5 w-5 rounded-md bg-sky-600/70" />
            <Block className="h-2 w-full bg-navy-900/30" />
            <Block className="h-2 w-2/3 bg-navy-900/15" />
          </div>
        ))}
      </div>
    </div>
  );
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
      url: "hraize.com/business",
    },
    {
      id: "redesign",
      number: "02",
      title: "Website Redesign and Revamp",
      point: "Website redesign and revamp.",
      serviceQuery: "redesign",
      actionLabel: "Request Redesign Quote",
      url: "hraize.com/revamp",
    },
    {
      id: "landing-pages",
      number: "03",
      title: "Landing Page Development",
      point: "Landing page development.",
      serviceQuery: "landing-pages",
      actionLabel: "Request Landing Page Quote",
      url: "hraize.com/launch",
    },
    {
      id: "mobile-responsive",
      number: "04",
      title: "Mobile-Responsive Website Development",
      point: "Mobile-responsive website development.",
      serviceQuery: "mobile-responsive",
      actionLabel: "Request Responsive Dev Quote",
      url: "hraize.com/mobile",
    },
    {
      id: "content-updates",
      number: "05",
      title: "Website Content and Page Updates",
      point: "Website content and page updates.",
      serviceQuery: "content-updates",
      actionLabel: "Request Content Update Support",
      url: "hraize.com/updates",
    },
    {
      id: "maintenance",
      number: "06",
      title: "Website Maintenance and Technical Support",
      point: "Website maintenance and technical support.",
      serviceQuery: "maintenance",
      actionLabel: "Request Maintenance Quote",
      url: "hraize.com/support",
    },
  ];

  const scopePoints = [
    "Business website design.",
    "Website redesign and revamp.",
    "Landing page development.",
    "Mobile-responsive website development.",
    "Website content and page updates.",
    "Website maintenance and technical support.",
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
              04. Digital Solutions &amp; Web Development
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
              className="mt-5 text-4xl font-black uppercase leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Website Design
              <span className="block text-sky-400">&amp; Development</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            >
              <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-white/70 sm:text-lg">
                Business websites, redesign, landing pages and maintenance delivered in collaboration
                with our technology partner.
              </p>

              <div className="mt-5 flex max-w-xl items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3.5 backdrop-blur">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                <span className="text-xs font-medium leading-relaxed text-white/75">
                  {DISCLAIMER}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact?tab=website-solutions"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-500/30 transition-all duration-200 hover:bg-sky-400"
                >
                  Request a Service Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#business-website"
                  onClick={(e) => scrollToSection(e, "business-website")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-white/10"
                >
                  View Service Scope Below
                  <ArrowUpRight className="h-4 w-4 rotate-90" />
                </a>
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
                  https://hraize.com
                </span>
              </div>

              <div className="relative aspect-[16/10]">
                <Image
                  src="/workforce-planning.png"
                  alt="Design team planning a website structure on a whiteboard"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/25 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 space-y-2.5">
                  <Block className="h-3.5 w-2/3 bg-white/85" />
                  <Block className="h-2.5 w-1/2 bg-white/45" />
                  <div className="flex gap-2 pt-1">
                    <Block className="h-6 w-24 rounded-full bg-sky-500" />
                    <Block className="h-6 w-20 rounded-full border border-white/40 bg-transparent" />
                  </div>
                </div>
              </div>
            </div>

            {/* floating chips */}
            {/* <div className="absolute -bottom-5 -left-3 flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-xl backdrop-blur sm:-left-6">
              <Smartphone className="h-4 w-4 text-sky-300" />
              <span className="text-[11px] font-black uppercase tracking-wider text-white">
                Mobile-responsive
              </span>
            </div> */}
            <div className="absolute -right-2 -top-5 flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-xl backdrop-blur sm:-right-5">
              <Gauge className="h-4 w-4 text-copper-300" />
              <span className="text-[11px] font-black uppercase tracking-wider text-white">
                Maintained
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8">
        {/* ============ SCOPE INTRO ============ */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-sky-600">
              Operational Scope
            </span>
            <h2 className="mt-1.5 max-w-2xl text-2xl font-black uppercase leading-tight tracking-tight text-navy-900 sm:text-3xl">
              Website Design &amp; Development Scope
            </h2>
            <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-navy-900/65">
              Hraize offers comprehensive website services delivered with our technology development
              partner:
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {scopePoints.map((point, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 rounded-full border border-sky-600/15 bg-white px-3 py-1.5 text-[11px] font-bold text-navy-900/75 shadow-sm"
              >
                <CheckCircle2 className="h-3 w-3 shrink-0 text-sky-600" />
                {point.replace(/\.$/, "")}
              </span>
            ))}
          </div>
        </div>

        {/* ============ ALTERNATING BROWSER ROWS ============ */}
        <div className="space-y-12 sm:space-y-16">
          {webItems.map((item, idx) => (
            <section
              key={item.id}
              id={item.id}
              className={`scroll-mt-32 flex flex-col items-center gap-7 md:gap-12 ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
            >
              <div className="w-full md:w-[47%]">
                <BrowserFrame label={item.url}>
                  <Wireframe variant={idx} />
                </BrowserFrame>
              </div>

              <div className="w-full md:w-[53%]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-xs font-black text-white">
                    {item.number}
                  </span>
                  <span className="h-px flex-1 bg-sky-600/25" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-900/40">
                    {item.number} / 06
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black uppercase leading-tight tracking-tight text-navy-900 sm:text-2xl">
                  {item.title}
                </h3>

                <div className="mt-4 flex items-start gap-3 rounded-xl border border-sky-600/15 bg-white px-4 py-3.5 shadow-sm">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-600/10 text-sky-600">
                    <CheckCircle2 className="h-3 w-3" />
                  </span>
                  <span className="text-sm font-bold text-navy-900/85">{item.point}</span>
                </div>

                {/* <p className="mt-4 text-[11px] font-medium italic leading-relaxed text-navy-900/55">
                  {DISCLAIMER}
                </p> */}

                <Link
                  href={`/contact?tab=website-solutions&service=${item.serviceQuery}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-[11px] font-black uppercase tracking-wider text-white shadow-md shadow-sky-600/20 transition-all hover:bg-sky-700"
                >
                  {item.actionLabel}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </section>
          ))}
        </div>

        {/* ============ CTA ============ */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-sky-700 to-navy-900 p-8 text-white shadow-2xl sm:p-12">
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
                Need support with your business operations?
              </h3>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-white/80">
                Contact Hraize to discuss the service requirements and delivery arrangements.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/contact?tab=website-solutions"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-navy-900 shadow-xl transition-all hover:bg-cream-50"
              >
                Request a Service Quote
                <ArrowRight className="h-4 w-4 text-sky-600" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                All services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
