import { Brain, Rocket, Users, Zap } from 'lucide-react';
import { SectionContainer } from './ui/section-container';
import { SectionTitle } from './ui/section-title';
import bgImage from '../images/167484-futuristic-desktop-wallpaper.jpg'; // ✅ Import the image


interface VisionPoint {
  icon: JSX.Element;
  title: string;
  description: string;
}

const visionPoints: VisionPoint[] = [
  {
    icon: <Brain className="text-primary mt-1 flex-shrink-0" size={20} />,
    title: 'Conscious AI',
    description:
      'Developing AI systems that understand context, purpose, and human values',
  },
  {
    icon: <Rocket className="text-primary mt-1 flex-shrink-0" size={20} />,
    title: 'Global Scale',
    description: 'Building solutions that can impact billions of lives worldwide',
  },
  {
    icon: <Users className="text-primary mt-1 flex-shrink-0" size={20} />,
    title: 'Human-Centric',
    description: 'Ensuring AI serves humanity rather than replacing it',
  },
  {
    icon: <Zap className="text-primary mt-1 flex-shrink-0" size={20} />,
    title: 'Deep Tech Focus',
    description:
      'Leveraging the most advanced technologies for breakthrough innovations',
  },
];

const Company = () => {
  return (
    <SectionContainer
      id="company"
      className="h-screen bg-black relative overflow-hidden bg-cover bg-center px-6 py-8"
      backgroundImage={bgImage} // ✅ Use imported image
    >
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-between">
        {/* Title */}
        <div className="text-center">
          <SectionTitle
            title="Azmth Technologies AI"
            subtitle="One of India's biggest AI companies, aspiring to become the world's best AI ecosystem."
          />
        </div>

        {/* Main Two Columns */}
        <div className="flex flex-1 gap-6 mt-8">
          {/* Left: About Text */}
          <div
            className="flex-1 p-6 flex flex-col justify-center 
                       text-sm text-gray-300 leading-snug 
                       bg-white/5 backdrop-blur-sm 
                       border-2 border-white/20 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-space font-bold text-white mb-2">
              Building the Future of AI
            </h3>
            <p>
              Azmth Technologies AI represents my vision of creating an ecosystem
              where artificial intelligence serves humanity's highest aspirations.
              We're not just building software - we're crafting the tools that will
              help us understand life itself.
            </p>
            <p className="mt-2">
              Our approach combines cutting-edge deep technology with a philosophical
              understanding of consciousness and existence. Every AI system we develop
              is designed with the ultimate question in mind: How can this bring us
              closer to understanding why life was created?
            </p>
            <p className="mt-2">
              From India to the world, we're building an AI ecosystem that prioritizes
              human values, ethical development, and the betterment of all mankind.
            </p>
          </div>

          {/* Right: Vision Points */}
          <div
            className="flex-1 p-6 flex flex-col justify-center 
                       bg-white/5 backdrop-blur-sm 
                       border-2 border-white/20 
                       transition-all duration-300"
          >
            <h4 className="text-lg font-space font-bold text-primary mb-4">
              Our Vision
            </h4>
            <div className="space-y-3 text-white text-sm">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  {point.icon}
                  <div>
                    <h5 className="font-medium">{point.title}</h5>
                    <p className="text-xs text-gray-200 leading-snug">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 text-center text-sm mt-4">
          {[
            { number: '1000+', label: 'Product Ideas' },
            { number: '∞', label: 'Possibilities' },
            { number: '1', label: 'Ultimate Goal' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-4 
                         bg-white/5 backdrop-blur-sm 
                         border-2 border-white/20 
                         transition-all duration-300"
            >
              <h4 className="text-2xl font-bold text-primary">{stat.number}</h4>
              <p className="text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Company;
