"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

interface HeroProps {
  onGetStarted?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative overflow-hidden bg-cream-100 min-h-[540px] lg:min-h-[620px] flex items-center">
      {/* ============ FULL-BLEED HERO BACKGROUND IMAGE ============ */}
      <div className="absolute inset-0">
        <Image
          src="/hero-background.png"
          alt="Hraize team collaborating in a modern sunlit office"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />

        {/* Cloudy Mist Overlay on Left Side (keeps right side of image clearly visible) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-white/82 via-white/68 to-white/35 lg:bg-gradient-to-r lg:from-white/88 lg:via-white/70 lg:via-[38%] lg:to-transparent"
        />

        {/* Extra Soft Cloudy Puff Behind Text */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 h-[110%] w-[65%] lg:w-[46%] rounded-full bg-white/50 blur-3xl"
        />
      </div>

      {/* ============ FOREGROUND CONTENT (LEFT SIDE) ============ */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-600/25 bg-white/85 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-sky-700 shadow-xs backdrop-blur-md"
          >
            Right support to keep business moving.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-black uppercase leading-[1.06] tracking-tight text-navy-900"
          >
            <span className="block whitespace-nowrap">HR Solutions.</span>
            <span className="block whitespace-nowrap">Business Support.</span>
            <span className="block text-sky-600 whitespace-nowrap">Digital Services.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
          >
            <p className="mt-5 max-w-lg text-sm sm:text-sm font-semibold leading-relaxed text-navy-900/80">
              Hraize provides practical HR, recruitment, business administration
              and digital IT services to help organisations operate smoothly and scale
              effectively.
            </p>

            {/* <div className="mt-5 flex max-w-lg items-start gap-3 rounded-2xl border border-sky-600/20 bg-white/75 px-4 py-3.5 shadow-xs backdrop-blur-md">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
              <span className="text-xs font-semibold leading-relaxed text-navy-900/80">
                Integrated operational support and execution across HR, payroll, hiring, invoices, and IT.
              </span>
            </div> */}

            <div className="mt-7 flex flex-wrap gap-3.5 items-center">
              <Link
                href="/contact?tab=consultation"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 hover:bg-sky-700 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-600/25 transition-all duration-200"
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-navy-900/20 bg-white/85 hover:bg-white px-6 py-3.5 text-sm font-bold text-navy-900 shadow-xs backdrop-blur-md transition-all duration-200"
              >
                Get a Service Quote
                <ArrowUpRight className="h-4 w-4 text-sky-600" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
