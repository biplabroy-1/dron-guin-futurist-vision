import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img 
        src="/src/images/hero.jpg"
        alt="hero background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl md:text-9xl font-montserrat font-black text-gradient">
          DRON GUIN
        </h1>
      </div>
    </section>
  );
};

export default Hero;
