"use client";
import { motion } from "motion/react";
import { Careers } from "@/src/components/Careers";

export default function CareersPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Careers />
    </motion.div>
  );
}
