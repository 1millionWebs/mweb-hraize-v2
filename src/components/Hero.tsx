import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Calendar, Users, ShieldCheck, Award, TrendingUp } from "lucide-react";

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const generateBubbles = (count: number, maxAttempts = 200) => {
  const bubbles: { top: number; left: number; size: number; driftX: number; driftY: number; duration: number; delay: number }[] = [];
  const gap = 30;
  for (let i = 0; i < count; i++) {
    let attempts = 0;
    let placed = false;
    while (attempts < maxAttempts && !placed) {
      const size = rand(28, 150);
      const top = rand(1, 80);
      const left = rand(1, 85);
      const topPx = top * 7.2;
      const leftPx = left * 7.2;
      const half = size / 2 + gap;
      let overlap = false;
      for (const b of bubbles) {
        const bTop = b.top * 7.2;
        const bLeft = b.left * 7.2;
        const bHalf = b.size / 2 + gap;
        if (Math.abs(topPx - bTop) < half + bHalf && Math.abs(leftPx - bLeft) < half + bHalf) {
          overlap = true;
          break;
        }
      }
      if (!overlap) {
        bubbles.push({
          top, left, size,
          driftX: rand(30, 80) * (Math.random() > 0.5 ? 1 : -1),
          driftY: rand(30, 80) * (Math.random() > 0.5 ? 1 : -1),
          duration: rand(6, 14),
          delay: rand(0, 5),
        });
        placed = true;
      }
      attempts++;
    }
  }
  return bubbles;
};

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [bubbles, setBubbles] = useState<{ top: number; left: number; size: number; driftX: number; driftY: number; duration: number; delay: number }[]>([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bubbleY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  useEffect(() => {
    setBubbles(generateBubbles(15));
  }, []);

  const avatars = [
    { id: 1, name: "Sarah K.", url: "/contact-1.png" },
    { id: 2, name: "David M.", url: "/contact-2.png" },
    { id: 3, name: "Elena R.", url: "/contact-3.png" },
    { id: 4, name: "Marcus T.", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" }
  ];

  const stats = [
    { value: "20+", label: "Years Global Experience", icon: Calendar },
    { value: "6+", label: "Industries Served", icon: Users },
    { value: "60-Day", label: "Replacement Guarantee", icon: ShieldCheck },
    { value: "100%", label: "Quality Focused", icon: Award },
  ];

  return (
    <section ref={sectionRef} className="relative pb-30 lg:min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50">
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-sky-600/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-copper-400/5 blur-3xl" />
        {bubbles.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: b.size,
              height: b.size,
              top: `${b.top}%`,
              left: `${b.left}%`,
              backgroundColor: "#F2F5F8",
            }}
            animate={{
              x: [0, b.driftX * 0.3, b.driftX * 0.6, b.driftX * 0.3, 0],
              y: [0, b.driftY * 0.3, b.driftY * 0.6, b.driftY * 0.3, 0],
              scale: [1, 1.04, 0.97, 1.02, 1],
            }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: b.delay,
            }}
          />
        ))}
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]">
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="var(--color-teal)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ y: contentY }}>
        <div className="grid lg:min-h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 pt-20 lg:pt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-600/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-sky-600" />
              <span className="text-[11px] font-black tracking-[0.15em] text-sky-700 uppercase">
                Raise Your People, Raise Your Potential
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight text-navy-900 uppercase leading-[1.02]">
              Structure Your
              <br />
              <span className="text-sky-600">People.</span>
              <br />
              Scale Your
              <br />
              <span className="text-sky-600">Business.</span>
            </h1>

            <p className="mt-6 text-base sm:text-md text-navy-900/60 font-semibold max-w-2xl leading-relaxed">
              Hraize is your dedicated HR, People Operations, and Recruitment partner,
              structured, practical, and built for businesses that are serious about
              growing the right way.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.button
                onClick={onGetStarted}
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-8 py-4 text-sm font-black tracking-wider text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>

            <div className="mt-12 py-4 grid grid-cols-2 gap-x-6 gap-y-4 lg:flex lg:gap-x-8 lg:gap-y-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + idx * 0.12, ease: "easeOut" }}
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
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative w-full h-[480px] lg:h-[500px] flex items-center justify-center p-4 rounded-3xl border border-white/40 shadow-inner"
            style={{ background: "linear-gradient(rgba(255,255,255,0.50), rgba(255,255,255,0.50)), url('/Map1.png') center/cover no-repeat" }}
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

            <div className="relative w-full h-full z-10 grid grid-rows-3 gap-4">
              <motion.div
                className="justify-self-start self-center w-[230px] rounded-xl border border-white/30 bg-white/70 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#1E3A8A]/10 text-[#1E3A8A]">
                    <Users className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-black text-[#1E3A8A]">Workforce Overview</span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-semibold text-gray-500">Permanent</span>
                    <span className="font-black text-[#1E3A8A]">Full-Time</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-semibold text-gray-500">Contract</span>
                    <span className="font-black text-[#0EA5E9]">Temporary</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-semibold text-gray-500">Pipeline</span>
                    <span className="font-black text-emerald-500">Active</span>
                  </div>
                </div>
              </motion.div>

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

              <motion.div
                className="justify-self-start self-center w-[220px] rounded-xl border border-[#0EA5E9]/20 bg-white/95 p-3 shadow-[0_12px_40px_rgb(30,58,138,0.08)] backdrop-blur-xl"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <p className="text-[10px] font-black tracking-widest text-[#1E3A8A] uppercase mb-2">Talent Sourcing Pool</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="/contact-1.png"
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
                      src="/contact-2.png"
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
      </motion.div>
    </section>
  );
};
