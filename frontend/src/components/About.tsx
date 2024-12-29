import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Our Team"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Software Solutions Are Important for Your Businesses?
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              In today's fast-paced digital world, businesses need to leverage technology to stay competitive. Software solutions help streamline operations, improve efficiency, and offer data-driven insights that enable smarter decision-making. Adopting robust software solutions is essential for businesses to stay ahead.
            </p>
            <hr className="border-t-4 border-[rgb(15,197,219)] w-full mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Us for Your Software Needs?
            </h3>
            <p className="text-gray-300 text-lg">
              At our core, we are a team of dedicated experts in cutting-edge technologies such as Data Science, Artificial Intelligence, and Blockchain. Our ability to tailor solutions to your unique business needs ensures that you get the most effective, innovative, and sustainable results. With a customer-focused approach, we work closely with you to understand your challenges and provide targeted solutions that empower your business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
