"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { SectionLabel } from "./UIElements";

export interface ServiceHeroAnchor {
  label: string;
  href: string;
}

interface ServiceHeroProps {
  label?: string;
  title: string;
  accentTitle: string;
  description: string;
  anchors?: ServiceHeroAnchor[];
}

const DEFAULT_ANCHORS: ServiceHeroAnchor[] = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "How It Works", href: "#how-it-works" },
];

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  label = "Service Domain",
  title,
  accentTitle,
  description,
  anchors = DEFAULT_ANCHORS,
}) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-white border-b border-navy-900/10 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <SectionLabel>{label}</SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight leading-[1.08]"
        >
          {title}
          <br />
          <span className="text-sky-600">{accentTitle}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          className="mt-5 text-sm sm:text-sm text-navy-900/65 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {anchors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
          >
            {anchors.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="group inline-flex items-center gap-1.5 rounded-full border border-navy-900/10 bg-cream-50/70 px-4 py-2 text-xs font-bold text-navy-900/75 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-600/40 hover:bg-white hover:text-sky-600 hover:shadow-sm"
              >
                <span>{item.label}</span>
                <ArrowDown className="h-3.5 w-3.5 text-navy-900/40 transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-sky-600" />
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
