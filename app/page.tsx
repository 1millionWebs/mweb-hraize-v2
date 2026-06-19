"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Hero } from "@/src/components/Hero";
import { HomeContent } from "@/src/components/HomeContent";

export default function HomePage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Hero
        onGetStarted={() => router.push("/contact?tab=general")}
      />
      <HomeContent
        onGetStarted={() => router.push("/contact?tab=general")}
        onNavigateToService={(serviceId) => router.push(`/${serviceId}`)}
      />
    </motion.div>
  );
}
