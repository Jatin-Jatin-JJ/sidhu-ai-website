import React from 'react';

const Listings = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
        Listings Page
      </h1>
      <p className="text-gray-700 text-sm md:text-base">
        View all available properties here.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Listing Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="/listing1.jpg"
            alt="Property 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-lg font-semibold text-gray-800">Luxury Villa in Brampton</h2>
            <p className="text-sm text-gray-600 mt-1">5 Bed | 4 Bath | 3,500 sqft</p>
            <p className="text-blue-600 font-bold mt-2">$1,200,000</p>
          </div>
        </div>

        {/* Listing Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="/listing2.jpg"
            alt="Property 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-lg font-semibold text-gray-800">Modern Condo in Mississauga</h2>
            <p className="text-sm text-gray-600 mt-1">2 Bed | 2 Bath | 1,000 sqft</p>
            <p className="text-blue-600 font-bold mt-2">$799,999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
