import { SectionContainer } from './ui/section-container';
import { SectionTitle } from './ui/section-title';
import bgImage from '../images/366932-nature-lake-clouds-artificial-gravity-futuristic.jpg';

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
      className="min-h-screen relative overflow-hidden bg-black bg-cover bg-center py-16"
      backgroundImage={bgImage}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <SectionTitle 
          title="Current Projects"
          subtitle="Exploring the boundaries of technology and human potential through innovative projects."
        />

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/20 backdrop-blur-md 
                         p-6 rounded-lg transition-all duration-300 text-white 
                         hover:border-primary/50"
            >
              <h3 className="text-lg md:text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-200 text-sm md:text-base mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 text-xs rounded-full bg-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 text-white border-2 border-primary/30 
                       hover:border-primary/60 transition-all duration-300 backdrop-blur-sm rounded-md"
          >
            Collaborate with Us
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;
