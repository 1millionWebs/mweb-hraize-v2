import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Calendar, Users, ShieldCheck, Award, Eye, Rocket, Heart, Check, Building2, FileText, UserCheck, Briefcase } from "lucide-react";
import { SectionLabel, FeatureCheck } from "./UIElements";

export const AboutUs: React.FC = () => {
  const stats = [
    { value: "20+", label: "Years of Global Experience", icon: Calendar },
    { value: "6+", label: "Industries Served", icon: Users },
    { value: "60-Day", label: "Replacement Guarantee", icon: ShieldCheck },
    { value: "100%", label: "Quality Focused", icon: Award },
  ];

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Your Business Support Partner</SectionLabel>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            Practical Business Support. Professional Service Delivery.
          </h2>
          <p className="mt-6 text-navy-900/60 font-semibold text-base sm:text-lg leading-relaxed">
            Hraize is a business support services company based in Bengaluru, India, providing integrated recruitment, payroll administration, finance operations and statutory coordination services to growing businesses.
          </p>
        </div>

        {/* <div className="mb-20 rounded-3xl bg-cream-50 border border-sky-600/50 p-8 sm:p-10">
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
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 rounded-3xl bg-navy-card-subtle p-8 sm:p-12">
          <div className="lg:col-span-7 space-y-6">
            <SectionLabel className="text-sky-400">Why We Exist</SectionLabel>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              BUILDING THE BUSINESS SUPPORT STRUCTURE
              <br />
              <span className="text-sky-400">GROWING BUSINESSES NEED.</span>
            </h3>
            <div className="text-sage-100/70 space-y-4 font-semibold text-sm sm:text-base leading-relaxed">
              <p>
                Growing companies often reach a stage where hiring becomes reactive, processes become inconsistent,
                and operational decisions become difficult to manage.
              </p>
              <p>
                Hraize was created to bring practical business support expertise, structured processes, and professional
                services to businesses that need stronger operational foundations without the complexity of building everything internally.
              </p>
              <p>
                We help organizations build effective teams, improve business operations,
                and create support systems that support sustainable growth.
                Not just recruitment. Not just payroll. A structured business support partner focused on helping businesses grow with the right people and processes.
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
                  BUILD SYSTEMS, NOT JUST HIRE PEOPLE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span className="text-xs font-black tracking-widest uppercase text-sky-400">
                  OPERATIONAL DECISIONS BACKED BY PROCESS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============ WHAT WE DO - CORE PILLARS ============ */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>What We Do</SectionLabel>
            <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase leading-tight tracking-tight text-navy-900">
              Core Pillars of Our Support
            </h3>
            <p className="mt-3 text-sm text-navy-900/60 font-bold leading-relaxed">
              Four fundamentals that define how we help businesses operate.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Building2,
                title: "Dependable Professional Support",
                desc: "We work with organisations that require dependable professional support to manage essential business activities, improve administrative processes and maintain organised operational records.",
              },
              {
                icon: FileText,
                title: "Extended Service Scope",
                desc: "Our services also extend to invoice and receivables administration, payment follow-ups and website design solutions delivered through our technology partner network.",
              },
              {
                icon: UserCheck,
                title: "Structured Workflows & Reporting",
                desc: "Through structured workflows, competent personnel and consistent management reporting, we help businesses manage routine operational responsibilities while allowing their internal teams to focus on core business priorities.",
              },
              {
                icon: Briefcase,
                title: "Accessible Without Internal Overhead",
                desc: "We believe that businesses should be able to access practical support without having to build a separate internal team for every operational requirement.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                  className="group rounded-3xl border border-sky-600/15 bg-white p-6 shadow-sm hover:border-sky-600/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600/10 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-black uppercase leading-tight tracking-tight text-navy-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium text-navy-900/70 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Eye,
              title: "Our Vision",
              desc: "To become a dependable business support partner for growing organisations across India.",
            },
            {
              icon: Rocket,
              title: "Our Mission",
              desc: "To simplify essential business operations through practical HR, recruitment, administrative and digital services.",
            },
            // {
            //   icon: Heart,
            //   title: "Values Statement",
            //   desc: "We believe great businesses are built by great people. We help organisations create clear frameworks, fair policies, and strong cultures."
            // }
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

        {/* ============ SERVICE APPROACH ============ */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Our Service Approach</SectionLabel>
            <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase leading-tight tracking-tight text-navy-900">
              Five Principles That Guide Every Engagement
            </h3>
            <p className="mt-3 text-sm text-navy-900/60 font-bold leading-relaxed">
              Our approach is built on these core principles.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Check, title: "Practical", desc: "Services are structured around each client's actual requirements." },
              { icon: ShieldCheck, title: "Accountable", desc: "Clear responsibilities, timelines and deliverables." },
              { icon: Rocket, title: "Flexible", desc: "Support can be arranged according to business size and workload." },
              { icon: Users, title: "Professional", desc: "Confidentiality and responsible handling of client information." },
              { icon: Award, title: "Collaborative", desc: "Specialist partners support services requiring additional technical expertise." },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                  className="group rounded-3xl border border-sky-600/15 bg-white p-6 shadow-sm hover:border-sky-600/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600/10 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black uppercase leading-tight tracking-tight text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-navy-900/70 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ============ CLOSING STATEMENT ============ */}
        <div className="rounded-3xl bg-cream-50 border border-sky-600/20 p-8 sm:p-12 text-center">
          <p className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-navy-900 mb-4">
            Hraize – Supporting Your People. Simplifying Your Business.
          </p>
          <p className="text-base font-semibold text-navy-900/60 max-w-2xl mx-auto">
            Practical support for growing businesses across recruitment, payroll, administration, and digital solutions.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="/contact?tab=general"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-600/25 transition-all duration-200 hover:bg-sky-700"
            >
              Start a Conversation
              <Rocket className="h-4 w-4" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white px-6 py-3.5 text-sm font-bold text-navy-900 shadow-sm transition-all duration-200 hover:bg-cream-50"
            >
              Explore Services
              <Rocket className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </div >
  );
};