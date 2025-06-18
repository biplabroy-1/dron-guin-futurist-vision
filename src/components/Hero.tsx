import React from 'react';
import futuristicBg from '../images/167484-futuristic-desktop-wallpaper.jpg'; // adjust path if necessary

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${futuristicBg})`,
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-7xl font-thin text-white mb-6 animate-fade-in-up">
          Welcome to the Future
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
          Exploring the intersection of AI, Futurism, and Human Potential
        </p>
        <div className="animate-fade-in-up delay-300">
          <a
            href="#about"
            className="inline-block px-8 py-4 text-lg font-medium text-white border-2 border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
          >
            Begin the Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
