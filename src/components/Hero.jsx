import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Your Dream Home Awaits</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Discover luxury listings, vibrant neighborhoods, and expert guidance with The Sidhu Team.
        </p>
      </div>
    </section>
  );
};

export default Hero;
