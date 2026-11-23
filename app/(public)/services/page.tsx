"use client";
import { motion } from "motion/react";
import { OurServicesOverview } from "@/src/components/OurServicesOverview";

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <OurServicesOverview />
    </motion.div>
  );
}
