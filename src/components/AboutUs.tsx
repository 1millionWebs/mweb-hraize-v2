import React from "react";
import { motion } from "motion/react";
import { Calendar, Users, ShieldCheck, Award, Eye, Rocket, Heart, Check } from "lucide-react";
import { SectionLabel, FeatureCheck } from "./UIElements";

export const AboutUs: React.FC = () => {
  const stats = [
    { value: "20+", label: "Years of Global Experience", icon: Calendar },
    { value: "6+", label: "Industries Served", icon: Users },
    { value: "60-Day", label: "Replacement Guarantee", icon: ShieldCheck },
    { value: "100%", label: "Quality Focused", icon: Award },
  ];

  const founders = [
    {
      role: "Founder",
      roleDesc: "HR Strategy & People Operations",
      experience: "14+ years across HR transformation, talent acquisition, employee lifecycle management, and organisation development.",
      expertise: [
        "Talent Acquisition & Workforce Planning",
        "HR Operations & Compliance Frameworks",
        "HR Policies, SOPs & Documentation",
        "Training & Development Programs",
        "Employee Experience & Lifecycle Management"
      ],
      valueStatement: "Building scalable people systems that support business growth",
      image: "/founder-svg.svg"
    },
    {
      role: "Co-Founder",
      roleDesc: "Analytics & Data-Driven Decision Support",
      experience: "Specialised expertise in workforce analytics, reporting automation, dashboards, and business intelligence solutions.",
      expertise: [
        "Workforce Analytics & Reporting",
        "Executive Dashboards & Headcount Insights",
        "Power BI & Looker Studio Solutions",
        "Automation & Process Optimization",
        "Metrics and Insights"
      ],
      valueStatement: "Turning workforce data into decisions leaders can act on.",
      image: "/founder-svg.svg"
    }
  ];

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Your HR & People Partner</SectionLabel>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            Building HR that actually works.
          </h2>
          <p className="mt-6 text-navy-900/60 font-semibold text-base sm:text-lg leading-relaxed">
            Founded by HR operations and data analytics professionals, Hraize helps growing businesses
            build structured HR systems and people dashboards.
          </p>
        </div>

        <div className="mb-20 rounded-3xl bg-cream-50 border border-sky-600/50 p-8 sm:p-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600/5 text-sky-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-lg font-black text-navy-900 block leading-none">{stat.value}</span>
                    <span className="text-[10px] font-bold text-navy-900/40 uppercase leading-tight block mt-0.5">{stat.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Eye,
              title: "Vision",
              desc: "To become the trusted people partner for growing businesses, helping them build workplaces where people thrive, processes scale, and success is sustainable."
            },
            {
              icon: Rocket,
              title: "Mission",
              desc: "We exist to make great HR accessible to every growing business by delivering people-first recruitment, robust HR frameworks, and trusted workforce solutions."
            },
            {
              icon: Heart,
              title: "Values Statement",
              desc: "We believe great businesses are built by great people. We help organisations create clear frameworks, fair policies, and strong cultures."
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                className="shadow-lg text-center p-8 rounded-3xl bg-cream-50 border border-sky-600/10"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600/5 text-sky-600 mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-black text-navy-900 uppercase tracking-tight mb-3">{item.title}</h4>
                <p className="text-sm text-navy-900/60 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 rounded-3xl bg-navy-card-subtle p-8 sm:p-12">
          <div className="lg:col-span-7 space-y-6">
            <SectionLabel className="text-sky-400">Why We Exist</SectionLabel>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              For businesses scaling without full-time HR.
              <br />
              <span className="text-sky-400">For professionals climbing without a roadmap.</span>
            </h3>
            <div className="text-sage-100/70 space-y-4 font-semibold text-sm sm:text-base leading-relaxed">
              <p>
                Most growing businesses reach a point where people management quietly becomes a problem.
                Hiring happens reactively. Policies live in someone's memory. Attrition creeps up.
              </p>
              <p>
                We started Hraize because we have seen this pattern repeat across industries, geographies,
                and company sizes. We know what structured HR looks like at scale.
              </p>
              <p>
                Not with a full-time HR department. Not with expensive consultants who hand over a report
                and leave. With a committed partner who understands both the people side and the data behind it.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <div className="relative border-l-4 border-sky-600/50 bg-white/5 p-6 rounded-r-2xl">
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase italic leading-snug">
                &ldquo;It is not a lack of effort. It is a lack of structure.&rdquo;
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-copper-400" />
                <span className="text-xs font-black tracking-widest uppercase text-copper-400">
                  Established Benchmarks
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span className="text-xs font-black tracking-widest uppercase text-sky-400">
                  Replace Guesswork With Insight
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>The Expertise</SectionLabel>
            <h3 className="mt-3 text-3xl font-black text-navy-900 uppercase tracking-tight">
              Meet the Expertise Behind Hraize
            </h3>
            <p className="mt-3 text-sm text-navy-900/60 font-bold leading-relaxed">
              Built by professionals with combined experience across HR operations, talent strategy,
              workforce analytics, and business transformation in India and international markets.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {founders.map((founder, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                className="shadow-lg flex-1 flex flex-col items-center bg-cream-50 rounded-3xl border border-sky-600/10 p-8 text-center"
              >
                <div className="w-40 mb-4">
                  <img src={founder.image} alt={founder.role} className="w-full h-auto" />
                </div>
                {/* <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-600/10 px-3 py-1 text-[10px] font-black text-sky-700 uppercase mb-4">
                  Hraize Partner
                </div> */}
                <div className="space-y-4 w-full text-left">
                  <div>
                    <h4 className="text-lg font-black text-navy-900 uppercase leading-snug text-center">{founder.role}</h4>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-navy-900 uppercase leading-snug text-center">{founder.roleDesc}</h4>
                  </div>
                  <p className="text-sm text-navy-900/70 font-medium leading-relaxed">{founder.experience}</p>
                  <div className="pt-4 border-t border-sky-600/50">
                    <p className="text-[10px] font-black tracking-wider text-sky-600 uppercase mb-2">Areas of Expertise</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {founder.expertise.map((exp, skillIdx) => (
                        <FeatureCheck key={skillIdx} className="text-navy-900/70">{exp}</FeatureCheck>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-sky-600/50 italic">
                    <p className="text-sm font-bold text-copper-400">&ldquo;{founder.valueStatement}&rdquo;</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};
