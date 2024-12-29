import React from "react";
import { motion } from "framer-motion";
import { Brain, Code, Database, Shield, Cpu, Box, Layers } from "lucide-react"; // Added icons for new services

interface ServicesProps {
  onViewCaseStudy: (service: string) => void;
}

const services = [
  {
    id: "ai",
    icon: <Brain className="h-8 w-8" />,
    title: "Artificial Intelligence",
    description: "Advanced AI solutions for complex business challenges",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    id: "data-science",
    icon: <Database className="h-8 w-8" />,
    title: "Data Science",
    description: "Transform your data into actionable insights",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: "blockchain",
    icon: <Code className="h-8 w-8" />,
    title: "Blockchain",
    description: "Secure and innovative blockchain solutions",
    gradient: "from-green-600 to-teal-600",
  },
  {
    id: "cyber-security",
    icon: <Shield className="h-8 w-8" />,
    title: "Cyber Security",
    description: "Protect your digital assets with advanced security",
    gradient: "from-red-600 to-orange-600",
  },
  {
    id: "iot",
    icon: <Cpu className="h-8 w-8" />,
    title: "IoT Solutions",
    description: "Connect and optimize your devices",
    gradient: "from-yellow-600 to-amber-600",
  },
  // New Services
  {
    id: "business-automation",
    icon: <Box className="h-8 w-8" />, // New icon for Business Automation
    title: "Business Automation",
    description: "Streamline and automate your business processes",
    gradient: "from-teal-600 to-blue-600",
  },
  {
    id: "app-dev-management",
    icon: <Layers className="h-8 w-8" />, // New icon for Application Development and Management
    title: "Application Development & Management",
    description: "End-to-end solutions for developing and managing applications",
    gradient: "from-indigo-600 to-purple-600",
  },
];

export default function Services({ onViewCaseStudy }: ServicesProps) {
  return (
    <section id="services" className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-400">Cutting-edge solutions for modern challenges</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              index={index}
              onViewCaseStudy={onViewCaseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  id,
  icon,
  title,
  description,
  gradient,
  index,
  onViewCaseStudy,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`bg-gradient-to-br ${gradient} p-1 rounded-2xl`}
    >
      <div className="bg-gray-900 p-6 rounded-2xl h-full">
        <div className="text-white mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <button
          onClick={() => onViewCaseStudy(id)}
          className="bg-white text-gray-900 px-4 py-2 rounded-md"
        >
          View Case Study
        </button>
      </div>
    </motion.div>
  );
}
