import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative">
      <ImageCarousel />

      {/* Content */}
      <div className="relative pt-20 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{
              
              WebkitTextFillColor: 'white', // White text color
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovate. Transform . Lead .
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering businesses with cutting-edge solutions in AI, Blockchain, and Data Science and More
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a
              href="#contact"
              className="px-8 py-3 text-white rounded-full font-semibold transition-colors duration-300"
              style={{ backgroundColor: 'rgba(14,115,169,255)' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(12,90,140,255)')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgba(14,115,169,255)')}
            >
              Get Started
            </a>
            <a
              href="#services"
              className="px-8 py-3 text-white rounded-full font-semibold transition-colors duration-300"
              style={{ backgroundColor: '#2f2f2f' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#4a4a4a')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2f2f2f')}
            >
              Our Services
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={scrollToServices}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </div>
    </section>
  );
}
