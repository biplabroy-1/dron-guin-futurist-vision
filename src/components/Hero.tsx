
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-background via-background to-accent/10">
      <div className="text-center max-w-4xl mx-auto px-6 lg:px-8 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-space font-bold mb-6 leading-tight">
          <span className="text-gradient">DRON</span>
          <br />
          <span className="text-foreground">GUIN</span>
        </h1>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-light tracking-wide">
          <span className="block mb-2">Futurist • AI Visionary • Creator</span>
          <span className="text-primary font-medium">Building Tomorrow's World Today</span>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          On a mission to discover why life was created, while building AI ecosystems that make the world a better place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#about" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 font-medium transition-all duration-300 hover:scale-105"
          >
            Explore My Journey
          </a>
          <a 
            href="#company" 
            className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 font-medium transition-all duration-300"
          >
            Azmth Technologies AI
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={24} />
      </div>
    </section>
  );
};

export default Hero;
