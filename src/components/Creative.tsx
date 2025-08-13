import { SectionContainer } from './ui/section-container';
import { SectionTitle } from './ui/section-title';
import bgImage from '/milky-way-8149815.jpg'; // ✅ Import image

interface CreativeSkill {
  title: string;
  description: string;
}

const creativeSkills: CreativeSkill[] = [
  {
    title: "Music Production",
    description: "A decade of creating music as art and recreation, exploring sound as a medium for expression and emotion."
  },
  {
    title: "Film Making",
    description: "Passionate about storytelling through visual media, with expertise in camera work and lighting techniques."
  },
  {
    title: "Camera & Lighting",
    description: "Technical expertise in visual composition, understanding how light and perspective shape reality."
  },
  {
    title: "Culinary Arts",
    description: "Cooking as a personal hobby, finding joy and creativity in the art of preparing and sharing food."
  }
];

const Creative = () => {
  return (
    <SectionContainer
      id="creative"
      className="min-h-screen relative overflow-hidden bg-black bg-cover bg-center py-16"
      backgroundImage={bgImage}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <SectionTitle 
          title="Creative Vision"
          subtitle="Beyond technology and business, I find inspiration and balance through various creative outlets that fuel my imagination and perspective."
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {creativeSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/20 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 text-white hover:border-primary/50"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3">{skill.title}</h3>
              <p className="text-sm md:text-base text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Creative;
