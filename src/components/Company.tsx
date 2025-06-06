
import { Brain, Rocket, Users, Zap } from 'lucide-react';

const Company = () => {
  return (
    <section id="company" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-gradient">
            Azmth Technologies AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            One of India's biggest AI companies, aspiring to become the world's best AI ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-space font-bold mb-6 text-foreground">
              Building the Future of AI
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Azmth Technologies AI represents my vision of creating an ecosystem where 
                artificial intelligence serves humanity's highest aspirations. We're not just 
                building software - we're crafting the tools that will help us understand 
                life itself.
              </p>
              
              <p>
                Our approach combines cutting-edge deep technology with a philosophical 
                understanding of consciousness and existence. Every AI system we develop 
                is designed with the ultimate question in mind: How can this bring us 
                closer to understanding why life was created?
              </p>
              
              <p>
                From India to the world, we're building an AI ecosystem that prioritizes 
                human values, ethical development, and the betterment of all mankind.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-background p-8 border border-primary/30">
              <h4 className="text-2xl font-space font-bold text-primary mb-6">
                Our Vision
              </h4>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Brain className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Conscious AI</h5>
                    <p className="text-muted-foreground text-sm">
                      Developing AI systems that understand context, purpose, and human values
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Rocket className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Global Scale</h5>
                    <p className="text-muted-foreground text-sm">
                      Building solutions that can impact billions of lives worldwide
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Human-Centric</h5>
                    <p className="text-muted-foreground text-sm">
                      Ensuring AI serves humanity rather than replacing it
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Zap className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Deep Tech Focus</h5>
                    <p className="text-muted-foreground text-sm">
                      Leveraging the most advanced technologies for breakthrough innovations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          <div className="text-center bg-background p-8 border border-border">
            <h4 className="text-3xl font-space font-bold text-primary mb-2">1000+</h4>
            <p className="text-muted-foreground">Product Ideas</p>
          </div>
          
          <div className="text-center bg-background p-8 border border-border">
            <h4 className="text-3xl font-space font-bold text-primary mb-2">∞</h4>
            <p className="text-muted-foreground">Possibilities</p>
          </div>
          
          <div className="text-center bg-background p-8 border border-border">
            <h4 className="text-3xl font-space font-bold text-primary mb-2">1</h4>
            <p className="text-muted-foreground">Ultimate Goal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
