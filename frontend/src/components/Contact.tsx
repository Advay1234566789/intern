import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [emailStatusMessage, setEmailStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);  // For loading state

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);  // Show loading spinner
    setStatusMessage('');  // Reset any previous status message
    setEmailStatusMessage('');  // Reset email status message

    try {
      // Prepare EmailJS payload
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_hul77eq', // Replace with your actual service ID
        'template_hct75om', // Replace with your template ID
        templateParams,
        'bcj7VY3u7HG4cShur' // Replace with your user ID from EmailJS
      );

      // Update email status message
      setEmailStatusMessage('Email sent successfully!');

      // Send the contact data to your backend API for saving
      const response = await axios.post(
        '',  // Replace with your actual backend endpoint
        formData,
        { timeout: 20000 }  // Timeout after 10 seconds
      );

      // Handle success for saving contact data
      setStatusMessage(response.data.message || 'Message saved successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatusMessage('Failed to save message. Please try again later.');
      setEmailStatusMessage('Failed to send email. Please try again later.');
    } finally {
      setIsLoading(false);  // Hide loading spinner
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-xl text-gray-300">We'll be there for you no matter what!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
            <p className="text-gray-300">
              Using the right combination of ideation, technology, and services, we can work with you to achieve your
              strategic goals.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white h-32"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                disabled={isLoading}  // Disable the button while loading
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {statusMessage && <p className="text-gray-300 mt-4">{statusMessage}</p>}
            {emailStatusMessage && <p className="text-gray-300 mt-4">{emailStatusMessage}</p>}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Contact"
              className="rounded-lg shadow-2xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
