import { Brain, Rocket, Users, Zap } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { SectionContainer } from './ui/section-container';
import { SectionTitle } from './ui/section-title';

interface VisionPoint {
  icon: JSX.Element;
  title: string;
  description: string;
}

const visionPoints: VisionPoint[] = [
  {
    icon: <Brain className="text-primary mt-1 flex-shrink-0" size={24} />,
    title: 'Conscious AI',
    description:
      'Developing AI systems that understand context, purpose, and human values',
  },
  {
    icon: <Rocket className="text-primary mt-1 flex-shrink-0" size={24} />,
    title: 'Global Scale',
    description: 'Building solutions that can impact billions of lives worldwide',
  },
  {
    icon: <Users className="text-primary mt-1 flex-shrink-0" size={24} />,
    title: 'Human-Centric',
    description: 'Ensuring AI serves humanity rather than replacing it',
  },
  {
    icon: <Zap className="text-primary mt-1 flex-shrink-0" size={24} />,
    title: 'Deep Tech Focus',
    description:
      'Leveraging the most advanced technologies for breakthrough innovations',
  },
];

const Company = () => {
  useParallax('company-bg', { speed: 0.3, scale: true });

  return (
    <SectionContainer
      id="company"
      backgroundImage="/src/images/167484-futuristic-desktop-wallpaper.jpg"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Azmth Technologies AI"
          subtitle="One of India's biggest AI companies, aspiring to become the world's best AI ecosystem."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-space font-bold mb-6 text-white">
              Building the Future of AI
            </h3>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Azmth Technologies AI represents my vision of creating an ecosystem
                where artificial intelligence serves humanity's highest aspirations.
                We're not just building software - we're crafting the tools that will
                help us understand life itself.
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
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
              <h4 className="text-2xl font-space font-bold text-primary mb-6">
                Our Vision
              </h4>

              <div className="space-y-6">
                {visionPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {point.icon}
                    <div>
                      <h5 className="font-semibold text-white mb-2">
                        {point.title}
                      </h5>
                      <p className="text-gray-400 text-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg text-center">
            <h4 className="text-3xl font-space font-bold text-primary mb-2">1000+</h4>
            <p className="text-gray-400">Product Ideas</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg text-center">
            <h4 className="text-3xl font-space font-bold text-primary mb-2">∞</h4>
            <p className="text-gray-400">Possibilities</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg text-center">
            <h4 className="text-3xl font-space font-bold text-primary mb-2">1</h4>
            <p className="text-gray-400">Ultimate Goal</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Company;
