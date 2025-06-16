import { SectionContainer } from './ui/section-container';
import { SectionTitle } from './ui/section-title';

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "AI Ecosystem Development",
    description: "Building a comprehensive platform for artificial intelligence research and development.",
    tags: ["AI", "Deep Learning", "Research"]
  },
  {
    title: "Future of Human-AI Interaction",
    description: "Exploring new paradigms for meaningful collaboration between humans and artificial intelligence.",
    tags: ["HCI", "AI", "UX"]
  },
  {
    title: "Consciousness Research",
    description: "Scientific exploration into the nature of consciousness and its relationship with technology.",
    tags: ["Research", "Philosophy", "Technology"]
  }
];

const Projects = () => {
  return (
    <SectionContainer
      id="projects"
      className="min-h-screen h-screen relative overflow-hidden bg-black bg-cover bg-center"
      backgroundImage="/src/images/366932-nature-lake-clouds-artificial-gravity-futuristic.jpg"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionTitle 
          title="Current Projects"
          subtitle="Exploring the boundaries of technology and human potential through innovative projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-effect neon-border p-6 transition-all duration-300 hover:border-primary/50"
            >
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 text-white border-2 border-primary/30 
                     hover:border-primary/60 transition-all duration-300 backdrop-blur-sm"
          >
            Collaborate with Us
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;
