import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Industries from "./components/Industries"; // Import Industries component
import Internship from "./components/Internship";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetails from "./components/ServiceDetails";
import Login from "./components/Login"; // Import Login component
import SignUp from "./components/SignUp"; // Import SignUp component

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Handle "View Case Study" button click and navigate to ServiceDetails page
  const handleViewCaseStudy = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentPage("serviceDetails");
  };

  // Rendering based on current page
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <Services onViewCaseStudy={handleViewCaseStudy} />
            <Industries />
            <About />
            <Internship />
            <Contact />
            <Footer />
          </motion.div>
        );
      case "serviceDetails":
        return selectedServiceId ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ServiceDetails serviceId={selectedServiceId} />
          </motion.div>
        ) : null;
      case "login":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Login />
          </motion.div>
        );
      case "signup":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SignUp />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar setCurrentPage={setCurrentPage} />
      <AnimatePresence>{renderPage()}</AnimatePresence>
    </div>
  );
}

export default App;
