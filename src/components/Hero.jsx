// ✅ Updated Hero.jsx — centered layout, premium font
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[100vh] flex items-center justify-center text-center text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      <div className="z-20 px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
          Unlock Your <span className="text-red-400">Dream Home</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/80">
          Discover luxury real estate with The Sidhu Team — built on trust, excellence, and results.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
