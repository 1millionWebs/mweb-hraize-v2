import React from "react";
import { motion } from "motion/react";
import { Check, Calendar, Users, Award, Eye, Rocket, ShieldCheck, Heart } from "lucide-react";
import { GlassCard } from "./UIElements";

export const AboutUs: React.FC = () => {
  const stats = [
    { value: "20+", label: "Global Experience", desc: "Combined years across global markets", icon: Calendar },
    { value: "6+", label: "Industries Served", desc: "Tech, Finance, Healthcare, Retail & more", icon: Users },
    { value: "60-Day", label: "Replacement Guarantee", desc: "Committed to quality hiring success", icon: ShieldCheck },
    { value: "100%", label: "Quality Focused", desc: "Deep structured HR, zero shortcut policies", icon: Award },
  ];

  const founders = [
    {
      role: "Founder - HR Strategy & People Operations",
      experience: "14+ years of experience across HR transformation, talent acquisition, employee lifecycle management, and organisation development.",
      expertise: [
        "Talent Acquisition & Workforce Planning",
        "HR Operations",
        "HR Policies, SOPs & Compliance Frameworks",
        "Training & Development Programs",
        "Employee Experience & Lifecycle Management"
      ],
      valueStatement: "Building scalable people systems that support business growth",
      image: "https://images.unsplash.com/photo-1668903678359-e810dd966016?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      role: "Co-Founder - Analytics & Data-Driven Decision Support",
      experience: "Specialised expertise in workforce analytics, reporting automation, dashboards, and business intelligence solutions with major enterprises.",
      expertise: [
        "Workforce Analytics & Reporting",
        "Executive Dashboards & Headcount Insights",
        "Power BI & Looker Studio Solutions",
        "Automation & Process Optimization",
        "Metrics and Insights"
      ],
      valueStatement: "Turning workforce data into decisions leaders can act on.",
      image: "https://images.unsplash.com/photo-1668903678359-e810dd966016?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div id="about-page" className="bg-[#F8FAFF] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* About Hraize Overview */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">Your HR &amp; People Partner</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] uppercase tracking-tight">
            Building HR that actually works.
          </h2>
          <p className="mt-6 text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
            Founded by HR operations and data analytics professionals, Hraize helps growing businesses build structured HR systems and people dashboards. We spent years fixing broken processes inside real businesses. Now, we help you do the same.
          </p>
        </div>

        {/* Global Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_20px_0_rgba(7,17,46,0.02)] flex flex-col items-center text-center group hover:border-[#0EA5E9] transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-[#1E3A8A]/5 flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#0EA5E9]/10 group-hover:text-[#0EA5E9] transition-colors mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-3xl font-black text-[#1E3A8A] tracking-tight">{stat.value}</span>
                <span className="text-sm font-bold text-[#1E3A8A] uppercase tracking-wide mt-1">{stat.label}</span>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">{stat.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Why We Exist Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 bg-[#07112E] rounded-3xl p-8 sm:p-12 text-white">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">WHY WE EXIST</span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              For businesses scaling without full-time HR. <br />
              <span className="text-[#0EA5E9]">For professionals climbing without a roadmap.</span> <br />
              We partner with both.
            </h3>

            <div className="text-slate-300 space-y-4 font-medium text-sm sm:text-base leading-relaxed">
              <p>
                Most growing businesses reach a point where people management quietly becomes a problem. Hiring happens reactively. Policies exist in someone's memory. Attrition creeps up, and no one can explain why.
              </p>
              <p>
                We started Hraize because we have seen this pattern repeat across industries, geographies, and company sizes. We know what structured HR looks like at scale, and we know how to bring that same rigour to businesses that are still building.
              </p>
              <p>
                Not with a full-time HR department. Not with expensive consultants who hand over a report and leave. With a committed partner who understands both the people side and the data behind it.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            {/* Attention Key Quote Block */}
            <div className="relative border-l-4 border-[#0EA5E9] bg-white/5 p-6 rounded-r-2xl backdrop-blur-sm">
              <span className="absolute right-4 top-2 text-6xl text-white/5 font-serif leading-none">“</span>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase italic leading-snug">
                "It is not a lack of effort. It is a lack of structure."
              </p>
            </div>

            {/* Micro structure visual representation */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#D4A017]" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#D4A017]">ESTABLISHED BENCHMARKS</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#0EA5E9]" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0EA5E9]">REPLACE GUESSWORK WITH INSIGHT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">THE EXPERTISE</span>
            <h3 className="mt-1 text-3xl font-black text-[#1E3A8A] uppercase tracking-tight">
              Meet the Expertise Behind Hraize
            </h3>
            <p className="mt-3 text-sm text-gray-500 font-bold leading-relaxed">
              Built by professionals with combined experience across HR operations, talent strategy, workforce analytics, HR systems, and business transformation in India and international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {founders.map((founder, idx) => (
              <GlassCard key={idx} className="flex flex-col md:flex-row gap-6 p-6 items-start">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="relative rounded-2xl overflow-hidden aspect-square w-32 md:w-full border-2 border-white shadow-md">
                    <img src={founder.image} alt={founder.role} className="h-full w-full object-cover" />
                  </div>
                  {/* Subtle Accent Badges */}
                  <div className="mt-4 inline-flex items-center gap-1.5 self-center rounded-full bg-[#1E3A8A]/10 px-3 py-1 text-[10px] font-black text-[#1E3A8A] uppercase">
                    Hraize Partner
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-lg font-black text-[#1E3A8A] uppercase leading-snug">{founder.role}</h4>
                    <p className="text-xs text-gray-500 font-bold tracking-wide mt-1">Hraize Co-Founder</p>
                  </div>

                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    {founder.experience}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    <p className="text-[10px] font-black tracking-wider text-[#1E3A8A] uppercase mb-1.5">Areas of Expertise</p>
                    {founder.expertise.map((exp, skillIdx) => (
                      <div key={skillIdx} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-[#0EA5E9] flex-shrink-0" />
                        <span className="text-xs font-bold text-gray-700">{exp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-gray-100 italic">
                    <p className="text-xs font-bold text-[#D4A017] leading-relaxed">
                      “{founder.valueStatement}”
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Vision, Mission & Values Statement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Vision */}
          <div className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm overflow-hidden flex flex-col justify-between group hover:border-[#1E3A8A] transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Eye className="h-24 w-24 text-[#1E3A8A]" />
            </div>
            <div>
              <div className="h-10 w-10 rounded-lg bg-[#1E3A8A]/5 text-[#1E3A8A] flex items-center justify-center mb-4">
                <Eye className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-black text-[#1E3A8A] uppercase tracking-wide">Vision</h4>
              <p className="mt-3 text-xs text-gray-600 font-medium leading-relaxed">
                To become the trusted people partner for growing businesses, helping them build workplaces where people thrive, processes scale, and success is sustainable.
              </p>
            </div>
            <div className="mt-6 border-t border-slate-100 pt-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#0EA5E9]">LONG-TERM VALUE</span>
            </div>
          </div>

          {/* Mission */}
          <div className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm overflow-hidden flex flex-col justify-between group hover:border-[#0EA5E9] transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Rocket className="h-24 w-24 text-[#0EA5E9]" />
            </div>
            <div>
              <div className="h-10 w-10 rounded-lg bg-[#0EA5E9]/5 text-[#0EA5E9] flex items-center justify-center mb-4">
                <Rocket className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-black text-[#1E3A8A] uppercase tracking-wide">Mission</h4>
              <p className="mt-3 text-xs text-gray-600 font-medium leading-relaxed">
                We exist to make great HR accessible to every growing business by delivering people-first recruitment, robust HR frameworks, and trusted workforce solutions that support both business success and employee wellbeing.
              </p>
            </div>
            <div className="mt-6 border-t border-slate-100 pt-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#1E3A8A]">STRUCTURAL INTEGRITY</span>
            </div>
          </div>

          {/* Values Statement */}
          <div className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm overflow-hidden flex flex-col justify-between group hover:border-[#D4A017] transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Heart className="h-24 w-24 text-[#D4A017]" />
            </div>
            <div>
              <div className="h-10 w-10 rounded-lg bg-[#D4A017]/5 text-[#D4A017] flex items-center justify-center mb-4">
                <Heart className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-black text-[#1E3A8A] uppercase tracking-wide">Values Statement</h4>
              <p className="mt-3 text-xs text-gray-600 font-medium leading-relaxed">
                We believe great businesses are built by great people. That's why we help organisations create clear frameworks, fair policies, strong cultures, and effective hiring practices that support both business performance and employee wellbeing.
              </p>
            </div>
            <div className="mt-6 border-t border-slate-100 pt-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#D4A017]">HUMAN DIGNITY first</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
