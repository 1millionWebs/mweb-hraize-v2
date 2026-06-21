import React from "react";
import { motion } from "motion/react";
import {
  Heart, BarChart3, Settings, Users, GraduationCap, Target, ArrowRight
} from "lucide-react";
import { SectionLabel, FeatureCheck } from "./UIElements";

interface HomeContentProps {
  onGetStarted: () => void;
  onNavigateToService: (service: string) => void;
}

export const HomeContent: React.FC<HomeContentProps> = ({
  onGetStarted,
  onNavigateToService,
}) => {
  const whatWeDo = [
    {
      title: "For Growing Businesses",
      desc: "HR systems, analytics dashboards, recruitment frameworks, and legal compliance structures so you scale seamlessly without a bloated, full-time HR team.",
      badge: "Scale Growth"
    },
    {
      title: "For Ambitious Professionals",
      desc: "Comprehensive 1-on-1 career coaching, interview prep pipelines, career positioning strategy, and executive mentorship to guide you to your target role.",
      badge: "Talent Career"
    },
    {
      title: "For Hiring Leaders",
      desc: "Quality-focused talent acquisition with a bulletproof 60-day replacement guarantee, ensuring high-caliber, carefully briefed candidates.",
      badge: "Quality Hires"
    }
  ];

  const whyChooseHraize = [
    {
      title: "Complete HR Partner Under One Roof",
      desc: "HR systems, live employee analytics, high-caliber recruitment, and ongoing strategic retention support in a single trusted partnership."
    },
    {
      title: "Build Professional HR Systems",
      desc: "Stop managing people in fragile spreadsheets. Obtain fully documented structured policies, compliant onboarding workflows, and live KPI dashboards."
    },
    {
      title: "Data-Driven People Decisions",
      desc: "Beautiful analytics dashboards highlight headcount shifts, regional attrition vectors, retention rates, and hiring costs."
    },
    {
      title: "Quality Recruitment With Guarantee",
      desc: "We send only rigorously vetted candidates, not bulk CVs. Our 60-day replacement guarantee ensures we remain active partners in your success."
    },
    {
      title: "Stays With You Long-Term",
      desc: "Continuous monthly HR subscription support, ongoing contract hiring, and quarterly compliance tracking, not an isolated project."
    }
  ];

  const coreValues = [
    {
      title: "People First",
      desc: "We put people at the heart of every decision, every process, and every conversation. When businesses get their people right, everything else follows.",
      icon: Heart,
    },
    {
      title: "Data Driven",
      desc: "We replace guesswork with metrics. Every recommendation is backed by real analytics, workforce telemetry, and deep operational experience.",
      icon: BarChart3,
    },
    {
      title: "Outcome Focused",
      desc: "We don't consider an engagement complete until the results are visible. Your success remains the single metric that matters.",
      icon: Target,
    }
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-navy-card py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--color-sky-600)_15%,transparent)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_srgb,var(--color-copper-400)_8%,transparent)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <SectionLabel className="text-sage-100">Building HR That Actually Works</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05]">
                Structure Your People.
                <br />
                <span className="text-sky-400">Scale Your Business.</span>
              </h2>
              <p className="text-sm sm:text-base text-sage-100/70 font-semibold max-w-2xl leading-relaxed">
                Hraize is your dedicated HR, People Operations, and Recruitment partner,
                structured, practical, and built for scaling businesses.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
              <motion.button
                onClick={onGetStarted}
                className="inline-flex items-center gap-2 rounded-full bg-copper-400 hover:bg-copper-500 px-8 py-4 text-xs font-black tracking-wider uppercase text-white shadow-lg shadow-copper-400/20 cursor-pointer transition-all"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel>Practical Offerings</SectionLabel>
            <h3 className="mt-3 text-3xl sm:text-4xl font-black text-navy-900 uppercase tracking-tight">
              Our Services
            </h3>
            <p className="mt-4 text-sm text-navy-900/60 font-semibold max-w-2xl mx-auto">
              Complete HR frameworks, high-caliber recruitment, and certified career coaching
              pathways for growing SMEs, ambitious talents, and professional organizations.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {[
              {
                icon: Settings,
                title: "HR Services",
                desc: "Setup compliant systems, handbook policies, and advanced interactive dashboards. Audit legal compliance gaps and manage attrition scientifically.",
                href: "hr-services",
                number: "01"
              },
              {
                icon: Users,
                title: "Recruitment Services",
                desc: "Identify high-caliber permanent, temporary, and contract team members. Bulletproof candidate preparation with a 60-day replacement guarantee.",
                href: "recruitment",
                number: "02"
              },
              {
                icon: GraduationCap,
                title: "Training and Development",
                desc: "Empower graduates, mid-career professionals, and first-time executives with resume rewriting and recruitment coaching channels.",
                href: "training",
                number: "03"
              }
            ].map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative flex items-start gap-6 p-6 rounded-2xl hover:bg-cream-50 transition-colors"
                >
                  <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sky-600/5 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-black text-sky-600/40">{svc.number}</span>
                      <span className="h-px flex-1 bg-sky-600/10" />
                    </div>
                    <h4 className="text-lg font-black text-navy-900 uppercase tracking-tight mb-2">{svc.title}</h4>
                    <p className="text-sm text-navy-900/60 font-medium leading-relaxed max-w-2xl">{svc.desc}</p>
                    <button
                      onClick={() => onNavigateToService(svc.href)}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-sky-600 hover:text-sky-700 transition-colors cursor-pointer"
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-teal-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-5">
              <SectionLabel>Who We Are</SectionLabel>
              <h3 className="mt-3 text-3xl sm:text-4xl font-black text-navy-900 uppercase tracking-tight">
                Why Us?
              </h3>
            </div>
            <div className="lg:col-span-7">
              <div className="border-l-4 border-sky-600 pl-6">
                <p className="text-base sm:text-lg text-navy-900/70 font-semibold leading-relaxed">
                  Hraize is more than an HR service provider; we are your people partner.
                  We believe businesses deserve HR that actually works, and ambitious
                  professionals deserve careers they are truly proud of.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px flex-1 bg-navy-900/10" />
              <span className="text-[10px] font-black text-navy-900/30 uppercase tracking-[0.2em]">What We Do</span>
              <span className="h-px flex-1 bg-navy-900/10" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatWeDo.map((w, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-[40px] font-black text-sky-600/10 leading-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-sky-600/10" />
                </div>
                <span className="inline-block text-[10px] font-black tracking-wider text-copper-400 uppercase mb-3">
                  {w.badge}
                </span>
                <h4 className="text-base font-black text-navy-900 uppercase tracking-tight mb-3">{w.title}</h4>
                <p className="text-xs text-navy-900/60 font-medium leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>Our Credentials</SectionLabel>
            <h3 className="mt-3 text-3xl sm:text-4xl font-black text-navy-900 uppercase tracking-tight">
              Why Choose Hraize
            </h3>
            <p className="mt-3 text-xs text-navy-900/50 font-bold uppercase tracking-wide">
              Complete support frameworks bypassing the limits of traditional networks.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-0">
            {whyChooseHraize.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group flex gap-8 py-8 border-t border-navy-900/5 first:border-t-0 hover:bg-cream-50/50 px-4 -mx-4 rounded-2xl transition-colors"
              >
                <div className="hidden sm:flex w-12 shrink-0 items-start pt-1">
                  <span className="text-3xl font-black text-sky-600/20 group-hover:text-sky-600/40 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-black text-navy-900 uppercase tracking-tight mb-2">{item.title}</h4>
                  <p className="text-sm text-navy-900/60 font-medium leading-relaxed">{item.desc}</p>
                </div>
                <div className="hidden lg:flex w-8 shrink-0 items-start pt-1 justify-center">
                  <ArrowRight className="h-4 w-4 text-sky-600/20 group-hover:text-sky-600 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>Our Ethical Standard</SectionLabel>
            <h3 className="mt-3 text-3xl sm:text-4xl font-black text-navy-900 uppercase tracking-tight">
              Our Core Values
            </h3>
            <p className="mt-3 text-xs text-navy-900/50 font-bold uppercase tracking-wide">
              The foundational principles steering every client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {coreValues.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="text-center"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-600/5 text-sky-600 mb-6 mx-auto">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h4 className="text-lg font-black text-navy-900 uppercase tracking-tight mb-4">
                    {value.title}
                  </h4>
                  <p className="text-sm text-navy-900/60 font-medium leading-relaxed max-w-xs mx-auto">
                    {value.desc}
                  </p>
                  <div className="mt-6 mx-auto w-12 h-px bg-sky-600/20" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
