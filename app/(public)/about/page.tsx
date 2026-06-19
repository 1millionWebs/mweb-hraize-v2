"use client";
import { motion } from "motion/react";
import { AboutUs } from "@/src/components/AboutUs";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <AboutUs />
    </motion.div>
  );
}
