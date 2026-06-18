"use client";
import { Suspense } from "react";
import { motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { Contact } from "@/src/components/Contact";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") as "hr" | "recruitment" | "training" | "general" | null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Contact initialTab={tab || "hr"} />
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageContent />
    </Suspense>
  );
}
