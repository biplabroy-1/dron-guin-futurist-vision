
import { ExternalLink, Code, Beaker } from 'lucide-react';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <section className="parallax-section">
      <img 
        src="https://i.pinimg.com/736x/81/16/7a/81167a7f65cd29d2f12d343d1685a87c.jpg"
        alt="tech innovation background"
        className="parallax-bg"
        style={{ 
          transform: `translateY(${(scrollY - window.innerHeight * 3) * 0.4}px)` 
        }}
      />
      
      <div className="section-content">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-montserrat font-black mb-6 text-gradient">
              Projects & Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed glass-effect neon-border p-6">
              From university research to building AI ecosystems, each project represents a step 
              toward understanding and improving our world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div key={index} className="glass-effect neon-border p-8 group">
                <div className="flex items-center justify-between mb-4">
                  {project.icon}
                  <span className={`text-xs px-3 py-1 glass-effect neon-border ${
                    project.status === 'Completed' ? 'text-green-400' :
                    project.status === 'In Progress' ? 'text-yellow-400' :
                    'text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-montserrat font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="text-xs text-green-400 font-medium">
                  {project.category}
                </div>
              </div>
            ))}
          </div>

          <div className="glass-effect neon-border p-12 text-center">
            <h3 className="text-4xl font-montserrat font-bold mb-6 text-primary">
              Thousands of Ideas, One Purpose
            </h3>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              I have ideas for thousands of products, each designed to push the boundaries of what's possible. 
              Every project serves the ultimate goal of making the world a better place and bringing us closer 
              to understanding why life was created.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
