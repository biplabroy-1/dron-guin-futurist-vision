import { SectionContainer } from './ui/section-container';
import { SectionTitle } from './ui/section-title';

interface PhilosophyPoint {
  title: string;
  description: string;
}

const philosophyPoints: PhilosophyPoint[] = [
  {
    title: 'Innovation First',
    description:
      "Believing that technological innovation is the key to solving humanity's greatest challenges and unlocking our potential.",
  },
  {
    title: 'Purpose-Driven',
    description:
      'Every action, every project, every decision is guided by the ultimate question: How does this help us understand why life was created?',
  },
  {
    title: 'Global Impact',
    description:
      'Thinking beyond boundaries to create solutions that benefit all of humanity, with a vision that spans the entire world.',
  },
];

const Philosophy = () => {
  return (
    <SectionContainer
      id="philosophy"
      className="h-screen bg-cover bg-center px-6"
      backgroundImage="/src/images/443631-halo-wallpaper-hd-high-quality-wallpaper-background-image.png"
    >
      <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col">
        {/* Title */}
        <div className="text-center">
          <SectionTitle
            title="My Philosophy: Futurism"
            subtitle="A philosophy dedicated to making the world a better place through technological advancement and human connection."
          />
        </div>

        {/* 2-Column Content */}
        <div className="flex flex-1 gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-between flex-1">
            {philosophyPoints.map((point, index) => (
              <div
                key={index}
                className="bg-black/5 p-5 shadow-md text-white flex flex-col justify-center h-1/3"
              >
                <h3 className="text-2xl font-semibold mb-2">{point.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="bg-white/20 flex-1 p-8 shadow-md text-center flex flex-col justify-center text-white">
            <h3 className="text-3xl font-bold mb-4">The Futurist Manifesto</h3>
            <blockquote className="text-lg italic text-gray-300 leading-relaxed">
              "I truly am a person who is honestly Futurist, who thinks about a technological future.
              My philosophy of Futurism isn't just about predicting tomorrow - it's about actively
              creating it. Through deep technology, artificial intelligence, and human connection,
              we can build a world where every person realizes their potential and contributes
              to the greater understanding of existence itself."
            </blockquote>
            <p className="font-semibold text-white mt-4">Dron Guin</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Philosophy;
