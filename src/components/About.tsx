
const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-8 text-gradient">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am <span className="text-primary font-semibold">Dron Guin</span>, a person with a clear goal in life: 
                to be a brand that stands for clarity and goodness. When people connect with me, 
                they can be assured of one thing - they are good humans.
              </p>
              
              <p>
                My white heart is what makes me who I am, combined with my goals, skills, 
                and unique understanding of the world from different perspectives. 
                I am not just a thinker - I love to create and bring ideas to life.
              </p>
              
              <p>
                I have thousands of product ideas and the ambition to make a positive impact 
                on a global scale. My ultimate quest is to find out 
                <span className="text-primary font-semibold"> "why life was created"</span> - 
                this is my driving purpose.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-background p-4 border border-border">
                <h3 className="text-primary font-semibold mb-2">Philosophy</h3>
                <p className="text-sm text-muted-foreground">Futurism</p>
              </div>
              <div className="bg-background p-4 border border-border">
                <h3 className="text-primary font-semibold mb-2">Mission</h3>
                <p className="text-sm text-muted-foreground">Better World</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 border border-primary/30">
              <h3 className="text-2xl font-space font-bold text-primary mb-6">Core Values</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Clarity & Purpose</h4>
                    <p className="text-muted-foreground text-sm">Clear goals and transparent intentions in everything I do</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Innovation & Creation</h4>
                    <p className="text-muted-foreground text-sm">Turning futuristic ideas into tangible reality</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Human Connection</h4>
                    <p className="text-muted-foreground text-sm">Believing in the goodness of humanity</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Deep Technology</h4>
                    <p className="text-muted-foreground text-sm">Working with cutting-edge tech for the future</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
