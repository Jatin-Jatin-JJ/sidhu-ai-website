import React from 'react';
import { motion } from 'framer-motion';

const neighborhoods = [
  {
    title: 'Riverside Heights',
    img: '/luxury neighbourhood.jpg',
    desc: 'Exclusive homes with stunning views and serene surroundings.',
  },
  {
    title: 'Downtown Luxe',
    img: '/Modern Kitchen.jpg',
    desc: 'Elegant modern condos in the heart of the city.',
  },
  {
    title: 'The Grand Estates',
    img: '/Staircase.jpg',
    desc: 'Expansive mansions with timeless design and premium finishes.',
  },
];

const Neighbourhoods = () => {
  return (
    <section className="bg-white py-20" id="neighbourhoods">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6"
        >
          Discover the Finest Neighbourhoods
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {neighborhoods.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Neighbourhoods;
