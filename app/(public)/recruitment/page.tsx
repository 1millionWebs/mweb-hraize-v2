"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { RecruitmentServices } from "@/src/components/RecruitmentServices";

export default function RecruitmentPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <RecruitmentServices
        onEmployerClick={() => router.push("/contact?tab=recruitment")}
        onCandidateClick={() => router.push("/careers")}
      />
    </motion.div>
  );
}
