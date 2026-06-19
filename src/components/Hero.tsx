import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Users, ShieldCheck, Award, TrendingUp, Check } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const avatars = [
    { id: 1, name: "Sarah K.", url: "/contact-1.png" },
    { id: 2, name: "David M.", url: "/contact-2.png" },
    { id: 3, name: "Elena R.", url: "/contact-1.png" },
    { id: 4, name: "Marcus T.", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" }
  ];

  const stats = [
    { value: "20+", label: "Years of Global Experience", icon: Calendar },
    { value: "6+", label: "Industries Served", icon: Users },
    { value: "60-Day", label: "Replacement Guarantee", icon: ShieldCheck },
    { value: "100%", label: "Quality Focused", icon: Award },
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-[calc(100vh-4rem)] bg-white pb-12 pt-16 overflow-hidden flex flex-col justify-between"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <motion.div
            className="lg:col-span-7 flex flex-col pt-[60px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-4 inline-flex items-center gap-1.5 self-start rounded-full bg-[#1E3A8A]/10 px-3 py-1 text-xs font-bold tracking-widest text-[#1E3A8A] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
              Raise Your People, Raise Your Potential
            </div>

            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1E293B] uppercase leading-[1.05]"
            >
              Structure Your People.<br />
              <span className="text-[#0EA5E9]">Scale Your Business</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#1E293B] font-medium max-w-2xl leading-relaxed">
              Hraize is your dedicated HR, People Operations, and Recruitment partner, structured, practical, and built for businesses that are serious about growing the right way.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.button
                onClick={onGetStarted}
                className="rounded-xl bg-[#D4A017] border border-[#D4A017] px-8 py-4 text-sm font-black tracking-wider text-white shadow-lg hover:shadow-xl hover:bg-[#D4A017]/90 transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-slate-100 shadow-sm"
                  >
                    <div className="h-10 w-10 rounded-lg bg-[#1E3A8A]/5 flex items-center justify-center text-[#1E3A8A] flex-shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-lg font-black text-[#1E3A8A] block leading-none">{stat.value}</span>
                      <span className="text-[10px] font-bold text-gray-500 uppercase leading-tight block mt-0.5">{stat.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative w-full h-[480px] lg:h-[500px] flex items-center justify-center p-4 bg-slate-900/5 rounded-3xl border border-white/40 shadow-inner"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full pointer-events-none z-0">
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
              <line x1="200" y1="180" x2="200" y2="160" stroke="#D4A017" strokeWidth="2" strokeDasharray="3 3" />
            </svg>

            <div className="relative w-full h-full z-10 flex flex-col justify-around px-2">
              <motion.div
                className="self-start w-[200px] rounded-xl border border-white/30 bg-white/70 p-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center justify-between border-b border-gray-100 pb-1 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#1E3A8A]" />
                    <span className="text-[10px] font-bold text-[#1E3A8A]">Today's Schedule</span>
                  </div>
                  <span className="text-[9px] font-bold text-[#0EA5E9] bg-[#0EA5E9]/10 px-1.5 py-0.5 rounded-full">6</span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1E3A8A] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-bold text-gray-800 truncate">Interview - Sr. Developer</p>
                      <p className="text-[7px] text-gray-500">10:00 AM - Zoom</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0EA5E9] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-bold text-gray-800 truncate">Onboarding Review</p>
                      <p className="text-[7px] text-gray-500">11:30 AM - Conf. B</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D4A017] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-bold text-gray-800 truncate">Payroll Approval</p>
                      <p className="text-[7px] text-gray-500">2:00 PM - Review</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-bold text-gray-800 truncate">Team Standup</p>
                      <p className="text-[7px] text-gray-500">3:30 PM - All Hands</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="self-end w-[200px] rounded-xl border border-white/40 bg-white/80 p-3 shadow-[0_10px_35px_rgb(0,0,0,0.08)] backdrop-blur-lg"
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#0EA5E9] text-white">
                    <TrendingUp className="h-3 w-3" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-[#1E3A8A]">Performance Peak</h4>
                    <p className="text-[8px] text-[#0EA5E9] leading-none">Top Performers</p>
                  </div>
                </div>

                <div className="space-y-1.5 mt-1.5">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-bold text-gray-600">Engineering</span>
                    <span className="font-black text-[#1E3A8A]">96%</span>
                  </div>
                  <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0EA5E9]" style={{ width: "96%" }} />
                  </div>

                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-bold text-gray-600">Product</span>
                    <span className="font-black text-[#1E3A8A]">88%</span>
                  </div>
                  <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#D4A017]" style={{ width: "88%" }} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="self-start w-[200px] rounded-xl border border-[#0EA5E9]/20 bg-white/95 p-2.5 shadow-[0_12px_40px_rgb(30,58,138,0.08)] backdrop-blur-xl"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <p className="text-[9px] font-black tracking-widest text-[#1E3A8A] uppercase mb-1.5">Talent Sourcing</p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <img
                      src="/contact-1.png"
                      alt="Avatar"
                      className="h-6 w-6 rounded-full object-cover border border-[#0EA5E9]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-gray-800 truncate">Sarah K.</p>
                      <p className="text-[8px] text-[#0EA5E9]">Product Growth</p>
                    </div>
                    <span className="text-[8px] font-extrabold text-[#D4A017]">★4.9</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <img
                      src="/contact-2.png"
                      alt="Avatar"
                      className="h-6 w-6 rounded-full object-cover border border-gray-200"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-gray-800 truncate">David M.</p>
                      <p className="text-[8px] text-[#1E3A8A]">Cloud Solutions</p>
                    </div>
                    <span className="text-[7px] font-extrabold text-emerald-500">HIRED</span>
                  </div>
                </div>
              </motion.div>
            </div>

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
    </section>
  );
};
