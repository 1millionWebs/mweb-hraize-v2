"use client";
import { motion } from "motion/react";
import { BusinessSupportServices } from "@/src/components/BusinessSupportServices";

export default function BusinessSupportPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <BusinessSupportServices />
    </motion.div>
  );
}
