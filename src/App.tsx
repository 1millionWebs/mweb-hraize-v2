import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HomeContent } from "./components/HomeContent";
import { AboutUs } from "./components/AboutUs";
import { HRServices } from "./components/HRServices";
import { RecruitmentServices } from "./components/RecruitmentServices";
import { TrainingAndDevelopment } from "./components/TrainingAndDevelopment";
import { Careers } from "./components/Careers";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [contactTab, setContactTab] = useState<"hr" | "recruitment" | "training" | "general">("hr");

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Page Transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <motion.div
            key="home-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Hero 
              onStartTrial={() => {
                setContactTab("general");
                setCurrentPage("contact");
              }} 
              onExploreFeatures={() => {
                setCurrentPage("hr-services");
              }}
            />
            <HomeContent 
              onGetStarted={() => {
                setContactTab("general");
                setCurrentPage("contact");
              }}
              onNavigateToService={(serviceId) => {
                setCurrentPage(serviceId);
              }}
            />
          </motion.div>
        );
      
      case "about":
        return (
          <motion.div
            key="about-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <AboutUs />
          </motion.div>
        );

      case "hr-services":
        return (
          <motion.div
            key="hr-services"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <HRServices 
              onBookCall={() => {
                setContactTab("hr");
                setCurrentPage("contact");
              }}
            />
          </motion.div>
        );

      case "recruitment":
        return (
          <motion.div
            key="recruitment-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <RecruitmentServices 
              onEmployerClick={() => {
                setContactTab("recruitment");
                setCurrentPage("contact");
              }}
              onCandidateClick={() => {
                setCurrentPage("careers");
              }}
            />
          </motion.div>
        );

      case "training":
        return (
          <motion.div
            key="training-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <TrainingAndDevelopment 
              onLetsFindPath={() => {
                setContactTab("training");
                setCurrentPage("contact");
              }}
            />
          </motion.div>
        );

      case "careers":
        return (
          <motion.div
            key="careers-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Careers />
          </motion.div>
        );

      case "contact":
        return (
          <motion.div
            key="contact-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Contact initialTab={contactTab} />
          </motion.div>
        );

      default:
        return (
          <div className="flex h-screen items-center justify-center bg-gray-50 text-gray-550 font-black">
            404 — SECTION NOT DEPLOYED
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] flex flex-col justify-between selection:bg-[#0EA5E9] selection:text-white font-sans antialiased">
      <div>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <main id="primary-layout">
          <AnimatePresence mode="wait">
            {renderCurrentPage()}
          </AnimatePresence>
        </main>
      </div>

      <Footer setCurrentPage={setCurrentPage} setContactTab={setContactTab} />
    </div>
  );
}
