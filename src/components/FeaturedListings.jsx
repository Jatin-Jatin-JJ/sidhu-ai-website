import React from 'react';
import { motion } from 'framer-motion';

const listings = [
  {
    id: 1,
    title: 'Elegant Family Home in Brampton',
    description: '4 Bed | 3 Bath | 2,800 sqft',
    price: '$1,299,000',
    image: '/listing1.jpg',
  },
  {
    id: 2,
    title: 'Modern Downtown Condo',
    description: '2 Bed | 2 Bath | 1,100 sqft',
    price: '$899,000',
    image: '/listing2.jpg',
  },
  {
    id: 3,
    title: 'Luxury Estate in Oakville',
    description: '5 Bed | 5 Bath | 5,000 sqft',
    price: '$3,200,000',
    image: '/listing3.jpg',
  },
];

const FeaturedListings = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
          Featured Listings
        </h2>
        <p className="text-gray-600 mb-10">Explore a selection of our finest properties available right now.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img src={listing.image} alt={listing.title} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              <div className="bg-white p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">{listing.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{listing.description}</p>
                <p className="text-blue-600 font-bold mt-2">{listing.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
