import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white font-serif">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={`${process.env.PUBLIC_URL}/hero-video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Unlock Your <span className="text-red-400">Dream Home</span>
        </h1>
        <p className="mt-4 max-w-xl text-gray-200 text-base md:text-lg">
          Discover luxury real estate with The Sidhu Team — built on trust, excellence, and results.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
