import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedListings from '../components/FeaturedListings';
import WhyChooseUs from '../components/WhyChooseUs';
import Neighbourhoods from '../components/Neighbourhoods';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import ClientCarousel from '../components/ClientCarousel';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-sans">
      <Navbar />
      <Hero />
      <section className="bg-[#fdfcfa] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
            Crafting Success <span className="text-red-500">One Property at a Time</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Whether you're buying, selling, or investing, our personalized approach and cutting-edge tools ensure a seamless experience and outstanding results.
          </p>
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
