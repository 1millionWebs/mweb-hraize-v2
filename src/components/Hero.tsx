import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Play, LineChart, TrendingUp, Users, Activity, Sliders } from "lucide-react";
import { TrustBadges } from "./UIElements";

interface HeroProps {
  onStartTrial: () => void;
  onExploreFeatures: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartTrial, onExploreFeatures }) => {
  // Avatars for floating stream animation
  const avatars = [
    { id: 1, name: "Sarah K.", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" },
    { id: 2, name: "David M.", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
    { id: 3, name: "Elena R.", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
    { id: 4, name: "Marcus T.", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" }
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-[calc(100vh-4rem)] bg-[#F8FAFC] pb-12 pt-16 overflow-hidden flex flex-col justify-between"
    >
      {/* 1. Subtle light gray connected node patterns fading in from left and bottom */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Tech Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

        {/* Connected Node SVG */}
        <motion.svg
          viewBox="0 0 800 600"
          className="absolute bottom-0 left-0 w-2/3 h-5/6 opacity-45"
          initial={{ opacity: 0, x: -60, y: 60 }}
          animate={{ opacity: 0.45, x: 0, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          {/* Node Connections */}
          <line x1="50" y1="550" x2="160" y2="440" stroke="#64748B" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="160" y1="440" x2="120" y2="300" stroke="#64748B" strokeWidth="1.5" />
          <line x1="120" y1="300" x2="280" y2="240" stroke="#64748B" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="160" y1="440" x2="280" y2="460" stroke="#64748B" strokeWidth="1.5" />
          <line x1="280" y1="460" x2="380" y2="320" stroke="#64748B" strokeWidth="1.5" />
          <line x1="280" y1="240" x2="380" y2="320" stroke="#64748B" strokeWidth="1" />
          <line x1="380" y1="320" x2="520" y2="480" stroke="#64748B" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="120" y1="300" x2="60" y2="180" stroke="#64748B" strokeWidth="1" />

          {/* Glowing Nodes */}
          <circle cx="50" cy="550" r="5" fill="#1E3A8A" />
          <circle cx="160" cy="440" r="6" fill="#0EA5E9" />
          <circle cx="120" cy="300" r="5" fill="#1E3A8A" />
          <circle cx="280" cy="240" r="7" fill="#D4A017" />
          <circle cx="280" cy="460" r="5" fill="#64748B" />
          <circle cx="380" cy="320" r="8" fill="#0EA5E9" />
          <circle cx="520" cy="480" r="4" fill="#1E3A8A" />
          <circle cx="60" cy="180" r="6" fill="#64748B" />
        </motion.svg>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

          {/* Left Block: Text, Headline starting 60px below header */}
          <motion.div
            className="lg:col-span-7 flex flex-col pt-[60px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tagline Badge */}
            <div className="mb-4 inline-flex items-center gap-1.5 self-start rounded-full bg-[#1E3A8A]/10 px-3 py-1 text-xs font-bold tracking-widest text-[#1E3A8A] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
              Raise Your People, Raise Your Potential
            </div>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1E293B] uppercase leading-[1.05]"
            >
              Structure Your People<br />
              <span className="text-[#0EA5E9]">Scale Your Business</span>
            </h1>

            {/* Supporting body text */}
            <p className="mt-6 text-lg sm:text-xl text-[#1E293B] font-medium max-w-2xl leading-relaxed">
              Leverage AI-driven HR analytics to drive talent retention, performance, and growth. Remove guesswork from your organizational strategy.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.button
                onClick={onStartTrial}
                className="rounded-xl bg-[#0EA5E9] border border-[#0EA5E9] px-7 py-4 text-sm font-black tracking-wider text-white shadow-lg hover:shadow-xl hover:bg-[#0EA5E9]/90 transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                START YOUR FREE TRIAL
              </motion.button>

              <button
                onClick={onExploreFeatures}
                className="group flex items-center gap-1.5 py-3 px-5 text-sm font-bold text-[#1E3A8A] hover:text-[#0EA5E9] transition-all cursor-pointer"
              >
                Explore Features
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </button>
            </div>
          </motion.div>

          {/* Right Block: Flowing 3D digital visualization of HR Analytics */}
          <motion.div
            className="lg:col-span-5 relative w-full h-[480px] lg:h-[500px] flex items-center justify-center p-4 bg-slate-900/5 rounded-3xl border border-white/40 shadow-inner"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Animated SVG Backdrop holding flowing "cascading intertwined path streams" */}
            <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {/* Primary Navy Stream */}
              <motion.path
                d="M 50,450 C 150,420 80,180 200,160 C 320,140 280,50 350,50"
                stroke="#1E3A8A"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M 50,450 C 150,420 80,180 200,160 C 320,140 280,50 350,50"
                stroke="#0EA5E9"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="10 15"
                animate={{ strokeDashoffset: [-100, 0] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
              />

              {/* Accent Sky Cyan Stream */}
              <motion.path
                d="M 350,450 C 250,380 320,250 200,180 C 80,110 120,50 50,50"
                stroke="#0EA5E9"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
              <motion.path
                d="M 350,450 C 250,380 320,250 200,180 C 80,110 120,50 50,50"
                stroke="#1E3A8A"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="12 18"
                animate={{ strokeDashoffset: [0, 100] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 6 }}
              />

              {/* Connected core cross-streams */}
              <line x1="200" y1="180" x2="200" y2="160" stroke="#D4A017" strokeWidth="2" strokeDasharray="3 3" />
            </svg>

            {/* Modular Floating Glass Panels */}
            <div className="relative w-full h-full z-10 grid grid-rows-3 gap-4">

              {/* Panel 1: Headcount & Attrition Curve (Top Left) */}
              <motion.div
                className="justify-self-start self-center w-[230px] rounded-xl border border-white/30 bg-white/70 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center justify-between border-b border-gray-100 pb-1.5 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Activity className="h-4 w-4 text-[#1E3A8A]" />
                    <span className="text-[11px] font-bold text-[#1E3A8A]">Attrition Radar</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#0EA5E9] bg-[#0EA5E9]/10 px-2 py-0.5 rounded-full">Active</span>
                </div>

                {/* Micro head count wave graph */}
                <div className="h-10 w-full flex items-end gap-1.5">
                  {[24, 40, 32, 50, 48, 65, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-gray-100 rounded-sm h-full flex flex-col justify-end overflow-hidden">
                      <motion.div
                        className="bg-[#1E3A8A] w-full"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-2.5">
                  <span className="text-[9px] font-medium text-gray-500">Q1-Q4 Trend</span>
                  <span className="text-xs font-black text-[#1E3A8A]">-12.8% YoY</span>
                </div>
              </motion.div>

              {/* Panel 2: Performance Metrics & Real-time Flow (Center Right) */}
              <motion.div
                className="justify-self-end self-center w-[240px] rounded-xl border border-white/40 bg-white/80 p-4 shadow-[0_10px_35px_rgb(0,0,0,0.08)] backdrop-blur-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0EA5E9] text-white">
                    <TrendingUp className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#1E3A8A]">Performance Peak</h4>
                    <p className="text-[9px] text-[#0EA5E9] leading-none">Top Performers Highlight</p>
                  </div>
                </div>

                <div className="space-y-2 mt-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="font-bold text-gray-600">Core Engineering</span>
                    <span className="font-black text-[#1E3A8A]">96% Match</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0EA5E9]" style={{ width: "96%" }} />
                  </div>

                  <div className="flex justify-between items-center text-[11px]">
                    <span className="font-bold text-gray-600">Product Strategy</span>
                    <span className="font-black text-[#1E3A8A]">88% Performance</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#D4A017]" style={{ width: "88%" }} />
                  </div>
                </div>
              </motion.div>

              {/* Panel 3: Active Profile List (Bottom Left) */}
              <motion.div
                className="justify-self-start self-center w-[220px] rounded-xl border border-[#0EA5E9]/20 bg-white/95 p-3 shadow-[0_12px_40px_rgb(30,58,138,0.08)] backdrop-blur-xl"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <p className="text-[10px] font-black tracking-widest text-[#1E3A8A] uppercase mb-2">Talent Sourcing Pool</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                      alt="Avatar"
                      className="h-7 w-7 rounded-full object-cover border border-[#0EA5E9]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-gray-800 truncate">Sarah K. (Senior Lead)</p>
                      <p className="text-[9px] text-[#0EA5E9]">Recruited: Product Growth</p>
                    </div>
                    <span className="text-[9px] font-extrabold text-[#D4A017]">★ 4.9</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                      alt="Avatar"
                      className="h-7 w-7 rounded-full object-cover border border-gray-200"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-gray-800 truncate">David M. (Systems Dev)</p>
                      <p className="text-[9px] text-[#1E3A8A]">Matched: Cloud Solutions</p>
                    </div>
                    <span className="text-[9px] font-extrabold text-emerald-500">HIRED</span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Small Floating Employee Avatar Circles along pathways */}
            {/* Avatar 1 */}
            <motion.div
              className="absolute h-9 w-9 rounded-full border-2 border-white bg-[#0EA5E9]/20 shadow-md overflow-hidden z-20 pointer-events-none"
              style={{ left: "10%", bottom: "20%" }}
              animate={{
                x: [0, 80, 180, 230],
                y: [0, -40, -110, -180],
                scale: [1, 1.1, 0.9, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear"
              }}
            >
              <img src={avatars[0].url} alt="" className="h-full w-full object-cover" />
            </motion.div>

            {/* Avatar 2 */}
            <motion.div
              className="absolute h-8 w-8 rounded-full border-2 border-white bg-[#1E3A8A]/20 shadow-md overflow-hidden z-20 pointer-events-none"
              style={{ right: "12%", bottom: "15%" }}
              animate={{
                x: [0, -100, -180, -220],
                y: [0, -60, -140, -230],
                scale: [0.9, 1, 1.1, 0.9]
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear"
              }}
            >
              <img src={avatars[1].url} alt="" className="h-full w-full object-cover" />
            </motion.div>

            {/* Avatar 3 */}
            <motion.div
              className="absolute h-9 w-9 rounded-full border-2 border-white bg-white/30 shadow-md overflow-hidden z-20 pointer-events-none"
              style={{ left: "45%", top: "45%" }}
              animate={{
                y: [-12, 12, -12],
                x: [-10, 10, -10]
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }}
            >
              <img src={avatars[2].url} alt="" className="h-full w-full object-cover" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Row Area: holding Badges on Left and Real-time gauges on Right */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-slate-200/60 pt-6">

          {/* Bottom Left: Trust Badges banner */}
          <div id="trust-badges-container" className="flex-1 max-w-lg">
            <TrustBadges />
          </div>

          {/* Bottom Right: Clean icons with text in Sky Cyan & Deep Navy */}
          <div id="feature-gauges-container" className="flex flex-wrap items-center gap-6">

            {/* Real-time Dashboards (circular gauge icon) */}
            <div className="flex items-center gap-3 bg-white/75 p-3.5 rounded-xl border border-slate-200/50 shadow-sm backdrop-blur-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0EA5E9]/10 text-[#0EA5E9]">
                {/* Circular Gauge Icon */}
                <svg viewBox="0 0 24 24" className="h-6 w-6" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 1 10 10c0 1.25-.23 2.45-.65 3.56" />
                  <path d="M22 12A10 10 0 0 1 2 12" />
                  <path d="M4.65 15.56A10 10 0 0 1 12 2" />
                  <circle cx="12" cy="12" r="1" fill="currentColor" />
                  <path d="M12 12l5-5" stroke="#1E3A8A" strokeWidth="3" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wide">Real-time Dashboards</p>
                <p className="text-[10px] font-medium text-gray-500">Live operational workforce view</p>
              </div>
            </div>

            {/* Predictive Analytics (rising graph/trendline icon) */}
            <div className="flex items-center gap-3 bg-white/75 p-3.5 rounded-xl border border-slate-200/50 shadow-sm backdrop-blur-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1E3A8A]/10 text-[#1E3A8A]">
                {/* Rising graph icon */}
                <LineChart className="h-6 w-6 text-[#1E3A8A]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wide">Predictive Analytics</p>
                <p className="text-[10px] font-medium text-[#0EA5E9]">Identify turnover before it occurs</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
