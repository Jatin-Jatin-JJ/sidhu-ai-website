import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Contact Info */}
        <div className="bg-[#0f172a] text-white p-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold mb-4">Let’s Connect</h2>
            <p className="text-sm text-gray-300 mb-6">
              Whether you're buying, selling, or just curious — we’re here to help you move with clarity and confidence.
            </p>

            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> contact@sidhuteam.ca</p>
              <p><strong>Phone:</strong> (123) 456-7890</p>
              <p><strong>Location:</strong> Ottawa, ON</p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="p-8">
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input
                type="tel"
                placeholder="(123) 456-7890"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Tell us what you're looking for..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
