import { SectionContainer } from "./ui/section-container";
import { SectionTitle } from "./ui/section-title";
import bgImage from "/443631-halo-wallpaper-hd-high-quality-wallpaper-background-image.png";

interface PhilosophyPoint {
  title: string;
  description: string;
}

const philosophyPoints: PhilosophyPoint[] = [
  {
    title: "Innovation First",
    description:
      "Believing that technological innovation is the key to solving humanity's greatest challenges and unlocking our potential.",
  },
  {
    title: "Purpose-Driven",
    description:
      "Every action, every project, every decision is guided by the ultimate question: How does this help us understand why life was created?",
  },
  {
    title: "Global Impact",
    description:
      "Thinking beyond boundaries to create solutions that benefit all of humanity, with a vision that spans the entire world.",
  },
];

const Philosophy = () => {
  return (
    <SectionContainer
      id="philosophy"
      className="min-h-screen bg-cover bg-center px-6 py-16 lg:py-24"
      backgroundImage={bgImage}
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col h-full">
        {/* Title */}
        <div className="text-center mb-12">
          <SectionTitle
            title="My Philosophy: Futurism"
            subtitle="A philosophy dedicated to making the world a better place through technological advancement and human connection."
          />
        </div>

        {/* Responsive Content */}
        <div className="flex flex-col lg:flex-row gap-8 flex-1">
          {/* Left Column */}
          <div className="flex flex-col gap-6 flex-1">
            {philosophyPoints.map((point, index) => (
              <div
                key={index}
                className="px-4 py-6 text-white flex flex-col justify-center 
                           border-2 border-white/20 backdrop-blur-sm 
                           transition-all duration-300 bg-white/5 rounded-lg"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{point.title}</h3>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div
            className="flex-1 px-4 md:px-8 py-6 text-white 
                       flex flex-col justify-center 
                       border-2 border-white/20 backdrop-blur-sm 
                       transition-all duration-300 bg-white/5 rounded-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center lg:text-left">
              The Futurist Manifesto
            </h3>
            <blockquote className="text-md md:text-lg italic text-gray-200 leading-relaxed text-justify">
              "I truly am a person who is honestly Futurist, who thinks about a technological future. My philosophy of Futurism isn't just about predicting tomorrow – it's about actively creating it. Through deep technology, artificial intelligence, and human connection, we can build a world where every person realizes their potential and contributes to the greater understanding of existence itself."
            </blockquote>
            <p className="font-semibold text-white mt-4 text-right">Dron Guin</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Philosophy;
