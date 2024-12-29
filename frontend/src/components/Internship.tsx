import React from 'react';
import { motion } from 'framer-motion';

export default function Internship() {
  return (
    <section id="internship" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Internship and Training</h2>
            <p className="text-gray-300 text-lg mb-6">
              Join our internship program and work on live projects after initial training. Our internship program is designed to provide hands-on experience and enhance your technical skills in these cutting-edge fields.
              Interns will also have access to mentorship from industry professionals and gain insights into real-world challenges faced by companies.
            </p> 
            <br />
            <h3 className="text-3xl text-white mb-6"> Opportunities Available:</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="font-bold text-xl">• Data Science</li>
              <li className="font-bold text-xl">• Artificial Intelligence</li>
              <li className="font-bold text-xl">• Machine Learning</li>
              <li className="font-bold text-xl">• Cyber Security</li>
              <li className="font-bold text-xl">• Blockchain Technology</li>
              <li className="font-bold text-xl">• IoT</li>
            </ul> 
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
              alt="Internship"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
