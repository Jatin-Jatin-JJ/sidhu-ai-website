// Home.jsx
import React from 'react';
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
    <div className="bg-white font-sans">
      <Hero />
      <section className="bg-[#fdfcfa] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
            Crafting Success <span className="text-red-500">One Property at a Time</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We help families unlock their dream lifestyle with expert real estate advice,
            exceptional marketing, and results that speak for themselves.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Top 1%', desc: "Ranked among Ontario's top producers" },
              { title: '15+ Years', desc: 'Helping families find dream homes' },
              { title: '$45M+', desc: 'In lifetime closed sales volume' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-2">{item.desc}</p>
              </div>
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
