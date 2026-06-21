import React, { useEffect } from "react";
import { motion } from "motion/react";
import { TrendingUp, Check, ArrowRight } from "lucide-react";
import { SectionLabel, FeatureCheck } from "./UIElements";

interface TrainingAndDevelopmentProps {
  onLetsFindPath: () => void;
}

export const TrainingAndDevelopment: React.FC<TrainingAndDevelopmentProps> = ({
  onLetsFindPath,
}) => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    const timer = setTimeout(scrollToHash, 250);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  const pathways = [
    {
      id: "fresher",
      title: "Fresher to Professional",
      subtitle: "Fresh graduates entering corporate for the first time. You have a degree. You need the positioning to land the job.",
      timeline: "4 Weeks",
      features: [
        "Professional resume rewritten from scratch",
        "Optimised LinkedIn, Naukri profile",
        "Interview coaching & mock interviews",
        "Career clarity session",
        "Job search strategy",
        "1 month of ongoing support"
      ],
      tag: "Graduate",
      number: "01"
    },
    {
      id: "mid-career",
      title: "Mid-Career Acceleration",
      subtitle: "Professionals with 3-6 years of experience. You're good at your job, but invisible to promotions.",
      timeline: "6 Weeks",
      features: [
        "Resume repositioning",
        "LinkedIn visibility boost",
        "Advanced interview coaching",
        "Career strategy session",
        "Application strategy",
        "6 weeks of ongoing support"
      ],
      tag: "Accelerator",
      number: "02"
    },
    {
      id: "manager",
      title: "First-Time Managers",
      subtitle: "Professionals with 6+ years of experience ready for executive or Manager roles.",
      timeline: "8 Weeks",
      features: [
        "Executive resume",
        "Executive LinkedIn branding",
        "Executive interview coaching",
        "Essential soft skills training",
        "8 weeks of ongoing support"
      ],
      tag: "Leader",
      number: "03"
    }
  ];

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Academy &amp; Coaching</SectionLabel>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            Career coaching designed for your stage of growth.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy-900/60 font-semibold leading-relaxed">
            Career growth shouldn&apos;t be left to chance. Whether you&apos;re stepping into your first
            corporate role or advancing to leadership, we provide real, practical coaching.
          </p>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>The Three Pathways</SectionLabel>
            <h3 className="mt-3 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              A Career Partner for Every Stage
            </h3>
            <p className="mt-3 text-sm text-navy-900/60 font-semibold">
              We guide you through every critical career moment with strategy, positioning, and support.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {pathways.map((path, idx) => (
              <motion.div
                key={path.id}
                id={path.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl bg-cream-50 border border-sky-600/10 p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-lg font-black text-sky-600/40">{path.number}</span>
                      <span className="h-px flex-1 bg-sky-600/10" />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold text-copper-400 bg-copper-50 px-2.5 py-1 rounded-full">{path.tag}</span>
                      <span className="text-[10px] font-bold text-sky-600">{path.timeline}</span>
                    </div>
                    <h4 className="text-xl font-black text-navy-900 uppercase tracking-tight mb-3">{path.title}</h4>
                    <p className="text-sm text-navy-900/60 font-medium leading-relaxed">{path.subtitle}</p>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-[10px] font-black tracking-wider text-sky-600 uppercase mb-3">What You Get</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {path.features.map((feat, fIdx) => (
                        <FeatureCheck key={fIdx}>{feat}</FeatureCheck>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-sky-600/10">
                      <span className="text-[10px] font-bold text-navy-900/40 uppercase tracking-wide">
                        Customised services available
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-navy-900 p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--color-sky-600)_10%,transparent)_0%,transparent_70%)]" />
          <div className="relative">
            <SectionLabel className="text-sky-400">Take Command</SectionLabel>
            <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Ready to Own Your Career
            </h3>
            <p className="mt-4 text-sm text-sage-100/70 font-medium max-w-xl mx-auto leading-relaxed">
              Stop leaving transitions to chance. Partner with advisors who understand what global talent leaders look for.
            </p>
            <div className="mt-8">
              <button
                onClick={onLetsFindPath}
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 text-white font-black hover:bg-sky-700 px-8 py-3.5 text-xs uppercase tracking-wider shadow-lg shadow-sky-600/20 transition-all cursor-pointer"
              >
                Let&apos;s Find Your Path
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
