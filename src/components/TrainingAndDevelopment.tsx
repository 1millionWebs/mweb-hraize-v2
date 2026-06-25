import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, Check, ArrowRight, GraduationCap, BarChart3, Award, MessageCircle, Briefcase, Target, Compass, Heart, Star } from "lucide-react";
import { SectionLabel, FeatureCheck } from "./UIElements";
import { image } from "motion/react-client";

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
      image: "/managers.png",
      number: "03"
    }
  ];

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const careerCards = [
    {
      id: "fresher",
      title: "Graduate",
      subtitle: "Fresher to Professional",
      desc: "Fresh graduates entering corporate for the first time. You have a degree. You need the positioning to land the job.",
      image: "/fresher.png",
      icon: GraduationCap,
      details: [
        "Professional resume rewritten from scratch",
        "Optimised LinkedIn, Naukri profile",
        "Interview coaching & mock interviews",
        "Career clarity session",
        "Job search strategy",
        "1 month of ongoing support"
      ],
      buttonText: "Start Your Journey",
      onClick: onLetsFindPath
    },
    {
      id: "mid-career",
      title: "Accelerator",
      subtitle: "Mid-Career Acceleration",
      desc: "Professionals with 3-6 years of experience. You're good at your job, but invisible to promotions.",
      image: "/services-hr.png",
      icon: TrendingUp,
      details: [
        "Resume repositioning",
        "LinkedIn visibility boost",
        "Advanced interview coaching",
        "Career strategy session",
        "Application strategy",
        "6 weeks of ongoing support"
      ],
      buttonText: "Accelerate Now",
      onClick: onLetsFindPath
    },
    {
      id: "manager",
      title: "Leader",
      subtitle: "First-Time Managers",
      desc: "Professionals with 6+ years of experience ready for executive or Manager roles.",
      image: "/managers.png",
      icon: Award,
      details: [
        "Executive resume",
        "Executive LinkedIn branding",
        "Executive interview coaching",
        "Essential soft skills training",
        "8 weeks of ongoing support"
      ],
      buttonText: "Lead With Confidence",
      onClick: onLetsFindPath
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              What Makes Us Different
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {[
              { icon: MessageCircle, title: "Honest Feedback", desc: "Real feedback on what needs improvement, not generic praise." },
              { icon: Briefcase, title: "Industry Experience", desc: "We've hired and placed across tech, healthcare, finance, operations." },
              { icon: Target, title: "Practical, Not Theoretical", desc: "Every resume gets rewritten. Every interview is practiced. You walk away ready." },
              { icon: Compass, title: "Career Strategy", desc: "Beyond resume help. We guide your entire career positioning." },
              { icon: Heart, title: "Ongoing Support", desc: "We check in, adjust strategy, and keep you moving forward." },
              { icon: Star, title: "Affordable Professional Coaching", desc: "Senior-level guidance at fractional cost." }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-6 lg:p-6 shadow-sm border border-sky-600/10 hover:shadow-md hover:border-sky-600/20 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                >
                  <div className="flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-sky-600/10 text-sky-600 mb-4 lg:mb-5">
                    <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                  </div>
                  <h4 className="text-sm lg:text-base font-black text-navy-900 uppercase tracking-tight mb-2 lg:mb-3">{item.title}</h4>
                  <p className="text-xs lg:text-sm text-navy-900/60 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
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

          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {careerCards.map((card, idx) => {
                const Icon = card.icon;
                const isActive = activeCard === card.id;
                return (
                  <motion.div
                    key={card.id}
                    id={card.id}
                    className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    onHoverStart={() => setActiveCard(card.id)}
                    onClick={() => setActiveCard(isActive ? null : card.id)}
                  >
                    {/* Background image */}
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${card.image})` }}
                      animate={{ opacity: isActive ? 0 : 1 }}
                      whileHover={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    />

                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black-100/60 via-black-100/5 to-transparent" />

                    {/* Index number */}
                    <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-black">
                      {idx + 1}
                    </div>

                    {/* Title - always visible at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-[10px] font-mono tracking-widest bg-white/10 px-2.5 py-1 rounded inline-block uppercase font-bold text-white mb-3">
                        {card.title}
                      </span>
                      <h4 className="text-lg font-black text-white leading-tight">{card.subtitle}</h4>
                    </div>

                    {/* Details overlay - appears on hover (desktop) or tap (mobile) */}
                    <motion.div
                      className="absolute inset-0 p-6 flex flex-col justify-center bg-navy-900/95"
                      animate={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none" }}
                      whileHover={{ opacity: 1, pointerEvents: "auto" }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-600/20 text-sky-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase font-bold block">{card.title}</span>
                          <h4 className="text-base font-black text-white leading-tight">{card.subtitle}</h4>
                        </div>
                      </div>
                      <p className="text-xs text-white/60 font-medium mb-4 leading-relaxed">{card.desc}</p>
                      <ul className="space-y-2.5 mb-6">
                        {card.details.map((detail, di) => (
                          <li key={di} className="flex items-start gap-2.5">
                            <Check className="h-3.5 w-3.5 text-sky-400 mt-0.5 shrink-0" />
                            <span className="text-xs text-white/80 font-medium leading-snug">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          card.onClick();
                        }}
                        className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-xs font-black hover:bg-sky-700 shadow-md cursor-pointer text-white transition-all w-fit"
                      >
                        {card.buttonText}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-navy-card p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
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
