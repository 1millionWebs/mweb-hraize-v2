"use client";
import { motion } from "motion/react";
import { PersonnelAdminServices } from "@/src/components/PersonnelAdminServices";

export default function PersonnelAdminPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <PersonnelAdminServices />
    </motion.div>
  );
}
