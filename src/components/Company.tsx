import { Brain, Rocket, Users, Zap } from 'lucide-react';
import { SectionContainer } from './ui/section-container';
import { SectionTitle } from './ui/section-title';
import bgImage from '../images/167484-futuristic-desktop-wallpaper.jpg';

interface VisionPoint {
  icon: JSX.Element;
  title: string;
  description: string;
}

const visionPoints: VisionPoint[] = [
  {
    icon: <Brain className="text-primary mt-1 flex-shrink-0" size={20} />,
    title: 'Conscious AI',
    description: 'Developing AI systems that understand context, purpose, and human values',
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
    description: 'Leveraging the most advanced technologies for breakthrough innovations',
  },
];

const Company = () => {
  return (
    <SectionContainer
      id="company"
      className="min-h-screen bg-black relative overflow-hidden bg-cover bg-center px-6 py-16 lg:py-24"
      backgroundImage={bgImage}
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col h-full">
        {/* Title */}
        <div className="text-center mb-12">
          <SectionTitle
            title="Azmth Technologies AI"
            subtitle="One of India's biggest AI companies, aspiring to become the world's best AI ecosystem."
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 flex-1">
          {/* Left: About */}
          <div className="flex-1 p-6 flex flex-col justify-center bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-lg">
            <h3 className="text-xl md:text-2xl font-space font-bold text-white mb-4">
              Building the Future of AI
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Azmth Technologies AI represents my vision of creating an ecosystem
              where artificial intelligence serves humanity's highest aspirations.
              We're not just building software – we're crafting the tools that will
              help us understand life itself.
            </p>
            <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
              Our approach combines cutting-edge deep technology with a philosophical
              understanding of consciousness and existence. Every AI system we develop
              is designed with the ultimate question in mind: How can this bring us
              closer to understanding why life was created?
            </p>
            <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
              From India to the world, we're building an AI ecosystem that prioritizes
              human values, ethical development, and the betterment of all mankind.
            </p>
          </div>

          {/* Right: Vision Points */}
          <div className="flex-1 p-6 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-lg">
            <h4 className="text-lg md:text-xl font-space font-bold text-primary mb-4">
              Our Vision
            </h4>
            <div className="space-y-4 text-white text-sm">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  {point.icon}
                  <div>
                    <h5 className="font-medium">{point.title}</h5>
                    <p className="text-xs md:text-sm text-gray-200 leading-snug">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center text-sm">
          {[
            { number: '1000+', label: 'Product Ideas' },
            { number: '∞', label: 'Possibilities' },
            { number: '1', label: 'Ultimate Goal' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-lg transition-all duration-300"
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
