import React, { useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Globe, Laptop, Code2, Rocket, ArrowRight,
  ShieldCheck, Smartphone, Sparkles, RefreshCw, Zap
} from "lucide-react";
import { SectionLabel, FeatureCheck } from "./UIElements";

interface WebsiteDesignServicesProps {
  onGetStarted?: () => void;
}

export const WebsiteDesignServices: React.FC<WebsiteDesignServicesProps> = ({
  onGetStarted,
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

  const coreServices = [
    {
      id: "business-websites",
      title: "Business Websites",
      desc: "Custom-crafted, professional corporate websites that build credibility, showcase your services, and turn visitors into clients.",
      icon: Globe,
      details: [
        "Bespoke UI/UX design tailored to your brand identity",
        "Fully responsive on mobile, tablet, and desktop",
        "Fast performance & search engine optimization (SEO) foundation",
        "Clear service breakdowns and high-trust leadership sections",
        "Contact form workflows, lead capture & CRM integrations"
      ]
    },
    {
      id: "redesign",
      title: "Website Redesign & Modernization",
      desc: "Transform outdated, slow, or low-converting websites into cutting-edge digital experiences built with modern web tech.",
      icon: RefreshCw,
      details: [
        "Complete visual and architectural redesign",
        "Modern typography, clean layouts & brand refresh",
        "Content restructuring for enhanced visitor conversion",
        "Mobile usability improvements and Core Web Vitals optimization",
        "Seamless migration with zero downtime or URL loss"
      ]
    },
    {
      id: "landing-pages",
      title: "High-Converting Landing Pages",
      desc: "Focused single-purpose landing pages engineered specifically for marketing campaigns, product launches, and lead generation.",
      icon: Rocket,
      details: [
        "Conversion-focused wireframing and persuasive copywriting layout",
        "A/B test ready structure with friction-free lead capture forms",
        "Lightning-fast load times under 1.5 seconds",
        "Pixel and analytics integration (Google Analytics, Meta, LinkedIn)",
        "Compelling social proof, testimonial, and FAQ sections"
      ]
    },
    {
      id: "maintenance",
      title: "Maintenance & Tech Partner Support",
      desc: "Reliable technical maintenance, security monitoring, and content updates managed through our trusted technology partner.",
      icon: ShieldCheck,
      details: [
        "Continuous security monitoring and software updates",
        "Automated cloud backups and 99.9% uptime monitoring",
        "Monthly content, blog, and service page updates",
        "Domain, SSL certificate, and hosting administration",
        "Priority technical support and emergency troubleshooting"
      ]
    }
  ];

  const features = [
    {
      title: "Mobile-First & Responsive",
      desc: "Over 70% of business visitors browse on mobile. We ensure flawless presentation on every screen size.",
      icon: Smartphone
    },
    {
      title: "Blazing Speed & Performance",
      desc: "Engineered with modern frameworks for near-instant page loads that keep visitors engaged and boost Google rankings.",
      icon: Zap
    },
    {
      title: "Technology Partner Reliability",
      desc: "Delivered in strategic collaboration with seasoned engineering partners for dependable code quality and long-term care.",
      icon: Code2
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "We understand your brand, target audience, business goals, and content structure to map out the ideal sitemap.",
      duration: "Days 1-3"
    },
    {
      step: "02",
      title: "UI/UX Design",
      desc: "We craft clean, modern visual designs and interactive wireframes with thoughtful typography and color harmony.",
      duration: "Days 4-8"
    },
    {
      step: "03",
      title: "Development & Testing",
      desc: "Our technology partner builds your site with clean, robust code, testing across mobile devices and browsers.",
      duration: "Days 9-16"
    },
    {
      step: "04",
      title: "Launch & Support",
      desc: "Domain mapping, SSL deployment, analytics tracking setup, and ongoing maintenance handoff.",
      duration: "Ongoing"
    }
  ];

  return (
    <div className="bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Digital Solutions</SectionLabel>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 uppercase tracking-tight">
            Website Design & Development
          </h1>
          <p className="mt-4 text-base sm:text-lg text-navy-900/70 font-semibold leading-relaxed">
            Business websites, redesign, landing pages, and maintenance through our technology partner.
            Establish a digital presence that builds trust and drives measurable commercial results.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?tab=website-solutions"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-sky-700 transition-all duration-200"
            >
              Start Your Website Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-white/70 px-7 py-3 text-sm font-bold text-navy-900 hover:bg-white transition-all duration-200"
            >
              Explore Solutions
            </a>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl bg-white border border-sky-600/20 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600/10 text-sky-600 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-extrabold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-xs text-navy-900/60 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Core Services Grid */}
        <div id="services" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Our Capabilities</SectionLabel>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight">
              Modern Web Solutions Delivered With Precision
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-navy-900/60 font-semibold">
              From fresh corporate websites to high-converting campaign landing pages and long-term tech care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={srv.id}
                  id={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-3xl bg-white border border-sky-600/20 p-8 shadow-sm hover:border-sky-600/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600/10 text-sky-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-sky-600">Capability 0{idx + 1}</span>
                        <h3 className="text-lg font-black text-navy-900">{srv.title}</h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-navy-900/70 font-medium leading-relaxed mb-6">
                      {srv.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-gray-100">
                      {srv.details.map((detail, dIdx) => (
                        <FeatureCheck key={dIdx} className="text-navy-900/80">
                          {detail}
                        </FeatureCheck>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href={`/contact?tab=website-solutions&service=${srv.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-sky-600 hover:text-sky-700 uppercase tracking-wider group"
                    >
                      Inquire About This Service
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Development Workflow */}
        <div className="mb-24 rounded-3xl bg-navy-card text-white p-8 sm:p-12 border border-sky-600/40">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel className="text-sky-400">Collaborative Process</SectionLabel>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              How We Build Your Digital Presence
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-sage-100/70 font-semibold">
              Delivered seamlessly in partnership with our experienced technology engineering team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col justify-between rounded-2xl bg-white/5 border border-white/10 p-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-sky-400">{step.step}</span>
                    <span className="text-[10px] font-bold text-copper-400 bg-white/10 px-2 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-sm font-black uppercase text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-sage-100/70 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-navy-900 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Looking to upgrade your website or launch a high-impact landing page?
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed font-semibold">
              Partner with Hraize and our technology team to design, build, and maintain a modern website that stands out.
            </p>
          </div>
          <Link
            href="/contact?tab=website-solutions"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-black text-navy-900 hover:bg-cream-50 shadow-lg transition-all"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4 text-sky-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};
