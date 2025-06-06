
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="parallax-section">
      <img 
        src="https://i.pinimg.com/736x/66/1a/38/661a38202bac0f5e5cedcc5900c77d3b.jpg"
        alt="futuristic tech background"
        className="parallax-bg"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)` 
        }}
      />
      
      <div className="section-content">
        <div className="text-center max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-8xl md:text-9xl font-montserrat font-black mb-8 leading-none">
            <span className="text-gradient block">DRON</span>
            <span className="text-white block">GUIN</span>
          </h1>
          
          <div className="glass-effect neon-border p-8 mb-8">
            <p className="text-2xl text-gray-300 mb-4 font-light">
              Futurist • AI Visionary • Creator
            </p>
            <p className="text-green-400 font-medium text-xl">
              Building Tomorrow's World Today
            </p>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed glass-effect neon-border p-6">
            On a mission to discover why life was created, while building AI ecosystems that make the world a better place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#about" 
              className="neon-border glass-effect text-white px-8 py-4 font-medium transition-all duration-300 hover:scale-105"
            >
              Explore My Journey
            </a>
            <a 
              href="#company" 
              className="neon-border glass-effect text-white px-8 py-4 font-medium transition-all duration-300 hover:scale-105"
            >
              Azmth Technologies AI
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="neon-border p-2 glass-effect">
          <ArrowDown className="text-green-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
