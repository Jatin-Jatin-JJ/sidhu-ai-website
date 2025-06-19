import React from 'react';

const FeaturedListings = () => {
  const listings = [
    {
      id: 1,
      title: 'Modern Family Home',
      image: '/listing1.jpg',
      price: '$1,250,000',
      location: 'Brampton, ON',
    },
    {
      id: 2,
      title: 'Elegant Countryside Villa',
      image: '/listing2.jpg',
      price: '$2,400,000',
      location: 'Oakville, ON',
    },
    {
      id: 3,
      title: 'Urban Luxury Condo',
      image: '/listing3.jpg',
      price: '$845,000',
      location: 'Mississauga, ON',
    },
  ];

  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-10">
          Featured Listings
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {listing.title}
                </h3>
                <p className="text-gray-500">{listing.location}</p>
                <p className="mt-2 text-lg font-bold text-red-500">
                  {listing.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;