"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { TrainingAndDevelopment } from "@/src/components/TrainingAndDevelopment";

export default function TrainingPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <TrainingAndDevelopment
        onLetsFindPath={() => router.push("/contact?tab=training")}
      />
    </motion.div>
  );
}
