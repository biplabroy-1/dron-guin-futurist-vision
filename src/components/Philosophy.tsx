import { useParallax } from '../hooks/useParallax';
import { SectionContainer } from './ui/section-container';
import { SectionTitle } from './ui/section-title';

interface PhilosophyPoint {
  title: string;
  description: string;
}

const philosophyPoints: PhilosophyPoint[] = [
  {
    title: "Innovation First",
    description: "Believing that technological innovation is the key to solving humanity's greatest challenges and unlocking our potential."
  },
  {
    title: "Purpose-Driven",
    description: "Every action, every project, every decision is guided by the ultimate question: How does this help us understand why life was created?"
  },
  {
    title: "Global Impact",
    description: "Thinking beyond boundaries to create solutions that benefit all of humanity, with a vision that spans the entire world."
  }
];

const Philosophy = () => {
  useParallax('philosophy-bg', { speed: 0.3 });

  return (
    <SectionContainer
      id="philosophy"
      backgroundImage="/src/images/443631-halo-wallpaper-hd-high-quality-wallpaper-background-image.png"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionTitle 
          title="My Philosophy: Futurism"
          subtitle="A philosophy dedicated to making the world a better place through technological advancement and human connection."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {philosophyPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-black/30 backdrop-blur-sm p-12 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            The Futurist Manifesto
          </h3>
          <blockquote className="text-lg italic leading-relaxed text-gray-300 text-center">
            "I truly am a person who is honestly Futurist, who thinks about a technological future.
            My philosophy of Futurism isn't just about predicting tomorrow - it's about actively
            creating it. Through deep technology, artificial intelligence, and human connection,
            we can build a world where every person realizes their potential and contributes
            to the greater understanding of existence itself."
          </blockquote>
          <div className="text-center mt-8">
            <p className="font-semibold text-white">Dron Guin</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Philosophy;