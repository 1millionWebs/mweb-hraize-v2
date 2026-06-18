"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { HRServices } from "@/src/components/HRServices";

export default function HRServicesPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <HRServices
        onBookCall={() => router.push("/contact?tab=hr")}
      />
    </motion.div>
  );
}
