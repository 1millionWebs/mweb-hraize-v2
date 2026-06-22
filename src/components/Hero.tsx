import React, { useMemo, useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Users, ShieldCheck, Award } from "lucide-react";

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
  const [bubbles, setBubbles] = useState<{ top: number; left: number; size: number; driftX: number; driftY: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    setBubbles(generateBubbles(15));
  }, []);

  const stats = [
    { value: "20+", label: "Years Global Experience", icon: Calendar },
    { value: "6+", label: "Industries Served", icon: Users },
    { value: "60-Day", label: "Replacement Guarantee", icon: ShieldCheck },
    { value: "100%", label: "Quality Focused", icon: Award },
  ];

  return (
    <section className="relative lg:min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50">
      <div className="absolute inset-0 pointer-events-none">
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
              backgroundColor: "#EAF0F6",
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
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:min-h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 pt-20 lg:pt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 lg:flex lg:gap-x-8 lg:gap-y-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
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
            className="hidden lg:block lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-[320px] w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/white-bg.png"
                alt="Hraize HR Analytics"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
