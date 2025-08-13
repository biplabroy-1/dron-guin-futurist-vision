import { SectionContainer } from './ui/section-container';
import { SectionTitle } from './ui/section-title';
import bgImage from '/milky-way-8149815.jpg';

interface CoreValue {
  title: string;
  desc: string;
}

const coreValues: CoreValue[] = [
  { title: "Clarity & Purpose", desc: "Clear goals and transparent intentions" },
  { title: "Innovation & Creation", desc: "Turning futuristic ideas into reality" },
  { title: "Human Connection", desc: "Believing in the goodness of humanity" },
  { title: "Deep Technology", desc: "Working with cutting-edge tech" }
];

const About = () => {
  return (
    <SectionContainer
      id="about"
      className="min-h-screen relative overflow-hidden bg-black bg-cover bg-center py-16 lg:py-24"
      backgroundImage={bgImage}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionTitle 
          title="About Me" 
          subtitle="On a mission to understand life's purpose through technology and human connection"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-12">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/20 backdrop-blur-sm p-6 rounded-lg transition-all duration-300">
              <p className="text-lg text-gray-200 leading-relaxed">
                I am <span className="text-white font-semibold">Dron Guin</span>, a person with
                a clear goal in life: to be a brand that stands for clarity and goodness. When 
                people connect with me, they can be assured of one thing – they are good humans.
              </p>
            </div>

            <div className="bg-white/5 border border-white/20 backdrop-blur-sm p-6 rounded-lg transition-all duration-300">
              <p className="text-lg text-gray-200 leading-relaxed">
                I have thousands of product ideas and the ambition to make a positive impact
                on a global scale. My ultimate quest is to find out
                <span className="text-white font-semibold"> "why life was created"</span> – 
                this is my driving purpose.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className="bg-white/5 border border-white/20 backdrop-blur-sm p-8 rounded-lg transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-6">
                Core Values
              </h3>

              <div className="space-y-4">
                {coreValues.map((value, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 rounded-lg transition-all duration-300"
                  >
                    <div>
                      <h4 className="font-semibold text-white">{value.title}</h4>
                      <p className="text-gray-400 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
