import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-red-600 py-20 text-white text-center">
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Let’s Talk Real Estate.
        </h2>
        <p className="text-md md:text-lg font-light mb-8 max-w-2xl mx-auto">
          Ready to make your next move? Whether buying or selling, The Sidhu Team is here to guide you through it all.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-red-600 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
};

export default CallToAction;
