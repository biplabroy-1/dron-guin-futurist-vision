
import { Music, Camera, ChefHat, Film } from 'lucide-react';

const Creative = () => {
  const creativeAreas = [
    {
      title: "Music Production",
      description: "A decade of creating music as art and recreation, exploring sound as a medium for expression and emotion.",
      icon: <Music className="text-primary" size={32} />,
      experience: "10+ Years"
    },
    {
      title: "Film Making",
      description: "Passionate about storytelling through visual media, with expertise in camera work and lighting techniques.",
      icon: <Film className="text-primary" size={32} />,
      experience: "Professional"
    },
    {
      title: "Camera & Lighting",
      description: "Technical expertise in visual composition, understanding how light and perspective shape reality.",
      icon: <Camera className="text-primary" size={32} />,
      experience: "Advanced"
    },
    {
      title: "Culinary Arts",
      description: "Cooking as a personal hobby, finding joy and creativity in the art of preparing and sharing food.",
      icon: <ChefHat className="text-primary" size={32} />,
      experience: "Personal"
    }
  ];

  return (
    <section id="creative" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-gradient">
            Creative Pursuits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Beyond technology and business, I find inspiration and balance through various 
            creative outlets that fuel my imagination and perspective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {creativeAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-background p-8 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up group"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-space font-bold text-foreground group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                      {area.experience}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-space font-bold mb-6 text-foreground">
              Environment Design
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I love environment design - the art of creating spaces and atmospheres that 
                tell stories and evoke emotions. Whether it's through lighting, composition, 
                or spatial arrangement, every environment has the potential to influence 
                how we think and feel.
              </p>
              
              <p>
                This passion extends beyond visual arts into my approach to technology 
                and business. Creating environments - whether digital, physical, or 
                conceptual - where humans can thrive and reach their full potential 
                is central to my philosophy.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 border border-primary/30">
              <h4 className="text-2xl font-space font-bold text-primary mb-6 text-center">
                Creative Philosophy
              </h4>
              
              <blockquote className="text-center text-muted-foreground italic text-lg leading-relaxed">
                "Art and technology are not separate worlds - they are different languages 
                speaking the same truth. Through music, film, cooking, and design, 
                I explore the same questions that drive my technological pursuits: 
                What makes us human? How do we connect? Why do we create?"
              </blockquote>
              
              <div className="text-center mt-6">
                <div className="w-12 h-0.5 bg-primary mx-auto mb-3"></div>
                <p className="text-primary font-medium">Recreation as Art</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creative;
