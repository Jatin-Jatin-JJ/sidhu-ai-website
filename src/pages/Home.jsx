// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import FeaturedListings from '../components/FeaturedListings';
import WhyChooseUs from '../components/WhyChooseUs';
import Neighbourhoods from '../components/Neighbourhoods';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import ClientCarousel from '../components/ClientCarousel';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Hero />

      {/* Mission Statement Section */}
      <section className="bg-[#fdfcfa] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-gray-900"
          >
            Crafting Success <span className="text-red-600 font-bold">One Property at a Time</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 text-sm md:text-base max-w-2xl mx-auto"
          >
            We help families unlock their dream lifestyle with expert real estate advice,
            exceptional marketing, and results that speak for themselves.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Top 1%', desc: "Ranked among Ontario’s top producers" },
              { title: '15+ Years', desc: 'Helping families find dream homes' },
              { title: '$45M+', desc: 'In lifetime closed sales volume' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedListings />
      <WhyChooseUs />
      <Neighbourhoods />
      <Testimonials />
      <CallToAction />
      <ClientCarousel />
      <Footer />
    </div>
  );
};

export default Home;
