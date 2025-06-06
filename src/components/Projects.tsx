
import { ExternalLink, Code, Beaker } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "University Research Projects",
      description: "Multiple innovative projects during my university years, focusing on cutting-edge technology and future applications.",
      category: "Research",
      status: "Completed",
      icon: <Beaker className="text-primary" size={24} />
    },
    {
      title: "AI Ecosystem Platform", 
      description: "Core platform for Azmth Technologies AI, designed to be the foundation of the world's best AI ecosystem.",
      category: "AI Development",
      status: "In Progress",
      icon: <Code className="text-primary" size={24} />
    },
    {
      title: "Futurism Framework",
      description: "A comprehensive framework implementing my philosophy of Futurism for technological and social advancement.",
      category: "Philosophy",
      status: "Ongoing",
      icon: <ExternalLink className="text-primary" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-gradient">
            Projects & Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From university research to building AI ecosystems, each project represents a step 
            toward understanding and improving our world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card p-8 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up group hover:scale-105"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-center justify-between mb-4">
                {project.icon}
                <span className={`text-xs px-2 py-1 rounded ${
                  project.status === 'Completed' ? 'bg-primary/20 text-primary' :
                  project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-xl font-space font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="text-xs text-primary font-medium">
                {project.category}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-12 border border-primary/30 text-center animate-fade-in-up">
          <h3 className="text-3xl font-space font-bold mb-6 text-primary">
            Thousands of Ideas, One Purpose
          </h3>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            I have ideas for thousands of products, each designed to push the boundaries of what's possible. 
            Every project, whether completed or in progress, serves the ultimate goal of making the world 
            a better place and bringing us closer to understanding why life was created.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-primary mb-2">Deep Tech</h4>
              <p className="text-muted-foreground text-sm">Advanced technology solutions</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-primary mb-2">AI Systems</h4>
              <p className="text-muted-foreground text-sm">Intelligent automation platforms</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-primary mb-2">Future Tools</h4>
              <p className="text-muted-foreground text-sm">Tomorrow's solutions today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
