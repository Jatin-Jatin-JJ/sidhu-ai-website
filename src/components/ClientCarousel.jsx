import React from 'react';

const clients = [
  '/clients/client1.jpg',
  '/clients/client2.jpg',
  '/clients/client3.jpg',
  '/clients/client4.jpg',
  '/clients/client5.jpg',
  '/clients/client6.jpg',
  '/clients/client7.jpg',
  '/clients/client8.jpg',
];

const ClientCarousel = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-xl md:text-2xl font-serif font-semibold text-gray-800 mb-10">
          Trusted by Clients Across Ontario
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {clients.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Client ${idx + 1}`}
              className="h-12 w-12 rounded-full object-cover grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
