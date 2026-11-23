"use client";
import { motion } from "motion/react";
import { WebsiteDesignServices } from "@/src/components/WebsiteDesignServices";

export default function WebsiteSolutionsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <WebsiteDesignServices />
    </motion.div>
  );
}
