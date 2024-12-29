import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Stochastik Logo"
                className="h-12 w-12 animate-bounce" 
              />
              <span className="text-xl font-bold">Stochastik Software</span>
            </div>
            <p className="text-sm">
              Empowering businesses with cutting-edge technology solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Data Science</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Artificial Intelligence</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Blockchain</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Cyber Security</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">IoT Solutions</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Business Automation</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Application Development and Management</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">© 2024 Stochastik Software. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
