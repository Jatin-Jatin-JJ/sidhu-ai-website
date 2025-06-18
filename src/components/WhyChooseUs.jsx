import React from 'react';
import { FaHandsHelping, FaRocket, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <FaStar className="text-yellow-500 text-3xl" />,
      title: 'Proven Track Record',
      description: 'Top-performing team recognized for outstanding results and consistent excellence.',
    },
    {
      icon: <FaRocket className="text-blue-500 text-3xl" />,
      title: 'Next-Level Marketing',
      description: 'We showcase your property using cutting-edge digital tools and strategies.',
    },
    {
      icon: <FaHandsHelping className="text-green-500 text-3xl" />,
      title: 'Dedicated Support',
      description: 'Personalized service and expert guidance at every step of your journey.',
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Work With <span className="text-red-500">The Sidhu Team</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We're committed to delivering results with integrity, care, and forward-thinking solutions
          that give you the edge in today’s market.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
