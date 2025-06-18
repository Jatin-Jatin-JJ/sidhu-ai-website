import React from 'react';

const testimonials = [
  {
    name: 'Ayesha R.',
    image: '/Testimonials/ayesha.jpg',
    quote:
      'The Sidhu Team helped us find our dream home. Their professionalism and attention to detail exceeded all expectations.',
  },
  {
    name: 'James W.',
    image: '/Testimonials/james.jpg',
    quote:
      'Absolutely phenomenal experience. From start to finish, we felt supported, informed, and confident in every decision.',
  },
  {
    name: 'Sophia L.',
    image: '/Testimonials/sophia.jpg',
    quote:
      'I recommend The Sidhu Team to anyone looking for real estate experts who truly care. Best in the business!',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 text-center" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-800 mb-4">
          What Our Clients Say
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 text-sm italic">"{t.quote}"</p>
              <p className="mt-3 font-semibold text-gray-800">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
