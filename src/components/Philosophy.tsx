
import { Lightbulb, Target, Globe } from 'lucide-react';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-gradient">
            My Philosophy: Futurism
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A philosophy dedicated to making the world a better place through technological advancement 
            and human connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up">
            <Lightbulb className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-space font-bold mb-4 text-foreground">Innovation First</h3>
            <p className="text-muted-foreground">
              Believing that technological innovation is the key to solving humanity's greatest challenges 
              and unlocking our potential.
            </p>
          </div>

          <div className="bg-card p-8 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Target className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-space font-bold mb-4 text-foreground">Purpose-Driven</h3>
            <p className="text-muted-foreground">
              Every action, every project, every decision is guided by the ultimate question: 
              How does this help us understand why life was created?
            </p>
          </div>

          <div className="bg-card p-8 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Globe className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-space font-bold mb-4 text-foreground">Global Impact</h3>
            <p className="text-muted-foreground">
              Thinking beyond boundaries to create solutions that benefit all of humanity, 
              with a vision that spans the entire world.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-12 border border-primary/30 animate-fade-in-up">
          <h3 className="text-3xl font-space font-bold text-center mb-8 text-primary">
            The Futurist Manifesto
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-lg md:text-xl text-center text-muted-foreground italic leading-relaxed">
              "I truly am a person who is honestly Futurist, who thinks about a technological future. 
              My philosophy of Futurism isn't just about predicting tomorrow - it's about actively 
              creating it. Through deep technology, artificial intelligence, and human connection, 
              we can build a world where every person realizes their potential and contributes 
              to the greater understanding of existence itself."
            </blockquote>
            
            <div className="text-center mt-8">
              <div className="w-16 h-0.5 bg-primary mx-auto mb-4"></div>
              <p className="text-primary font-space font-semibold">Dron Guin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
