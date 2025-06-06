import { useEffect, useState } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img 
        src="/src/images/about.jpg"
        alt="about background"
        className="absolute top-0 left-0 w-full h-full object-cover rotate-90"
        style={{ transform: `translateY(${(scrollY - window.innerHeight) * 0.3}px)` }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-6xl font-montserrat font-black text-gradient">
          About Me
        </h2>
      </div>
    </section>
  );
};

export default About;
