"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
} from "lucide-react";

interface HeroProps {
  onGetStarted?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative overflow-hidden bg-navy-card-hero text-white">
      {/* Decorative Grid Overlay with Radial Fade */}
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

      {/* Ambient Lighting Glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-sky-600/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-copper-400/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-16">
        {/* ============ LEFT COLUMN: VALUE PROPOSITION ============ */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-sky-300 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-copper-400 animate-pulse" />
            The right support to keep business moving.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-black uppercase leading-[1.06] tracking-tight text-white"
          >
            <span className="block whitespace-nowrap">HR Solutions.</span>
            <span className="block whitespace-nowrap">Business Support.</span>
            <span className="block text-sky-400 whitespace-nowrap">Digital Services.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
          >
            <p className="mt-5 max-w-xl text-base sm:text-lg font-semibold leading-relaxed text-white/75">
              Hraize provides practical HR, recruitment, business administration
              and digital IT services to help organisations operate smoothly and scale
              effectively.
            </p>

            <div className="mt-5 flex max-w-xl items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3.5 backdrop-blur">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
              <span className="text-xs font-medium leading-relaxed text-white/80">
                Integrated operational support and execution across HR, payroll, hiring, invoices, and IT.
              </span>
            </div>

            <div className="mt-7 flex flex-wrap gap-3.5 items-center">
              <Link
                href="/contact?tab=consultation"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-500/30 transition-all duration-200"
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-all duration-200"
              >
                Get a Service Quote
                <ArrowUpRight className="h-4 w-4 text-sky-300" />
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 pt-6 border-t border-white/15 text-xs font-bold text-white/65">
              {/* <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Headquartered in Bengaluru</span>
              </div> */}
              {/* <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-400" />
                <span>Structured Delivery Routines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-copper-400" />
                <span>Single Point of Coordination</span>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* ============ RIGHT COLUMN: MODERN DARK BROWSER SHOWCASE ============ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative lg:-translate-y-14 lg:-mt-6"
        >
          {/* Tilted Browser Mockup */}
          <div className="-rotate-1 overflow-hidden rounded-2xl border border-white/15 bg-[#0F172A] shadow-2xl shadow-black/50">
            {/* Top Bar with Dots & URL */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.06] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 flex-1 truncate rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-white/45">
                https://hraize.com
              </span>
            </div>

            {/* Showcase Visual with Gradient and Badges */}
            <div className="relative aspect-[10/09]">
              <Image
                src="/partners.png"
                alt="Hraize professional team delivering integrated business support"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent" />

              {/* Bottom Badges Inside Browser */}
              <div className="absolute inset-x-5 bottom-5">
                <div className="flex flex-wrap gap-2">
                  <span className="h-6 px-3 rounded-full bg-sky-500 text-[10px] font-black text-white flex items-center shadow-md">
                    4 Integrated Pillars
                  </span>
                  <span className="h-6 px-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm text-[10px] font-bold text-white flex items-center">
                    Zero Headcount Overhead
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Chip: Top Right */}
          {/* <div className="absolute -right-2 -top-5 flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-xl backdrop-blur sm:-right-5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-wider text-white">
              Bengaluru Delivery Hub
            </span>
          </div> */}

          {/* Floating Chip: Bottom Left */}
          {/* <div className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-xl backdrop-blur">
            <Layers className="h-4 w-4 text-sky-300" />
            <span className="text-[11px] font-black uppercase tracking-wider text-white">
              Single Point of Coordination
            </span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};
