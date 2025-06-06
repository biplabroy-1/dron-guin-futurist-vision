
import { useEffect, useState } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="parallax-section">
      <img 
        src="https://i.pinimg.com/736x/68/01/e8/6801e81cbfa835ca4dfba50c61c0375a.jpg"
        alt="futuristic background"
        className="parallax-bg"
        style={{ 
          transform: `translateY(${(scrollY - window.innerHeight) * 0.3}px)` 
        }}
      />
      
      <div className="section-content">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl font-montserrat font-black mb-8 text-gradient">
                About Me
              </h2>
              
              <div className="space-y-6">
                <div className="glass-effect neon-border p-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I am <span className="text-green-400 font-semibold">Dron Guin</span>, a person with a clear goal in life: 
                    to be a brand that stands for clarity and goodness. When people connect with me, 
                    they can be assured of one thing - they are good humans.
                  </p>
                </div>
                
                <div className="glass-effect neon-border p-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My white heart is what makes me who I am, combined with my goals, skills, 
                    and unique understanding of the world from different perspectives. 
                    I am not just a thinker - I love to create and bring ideas to life.
                  </p>
                </div>
                
                <div className="glass-effect neon-border p-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I have thousands of product ideas and the ambition to make a positive impact 
                    on a global scale. My ultimate quest is to find out 
                    <span className="text-green-400 font-semibold"> "why life was created"</span> - 
                    this is my driving purpose.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-effect neon-border p-8">
              <h3 className="text-3xl font-montserrat font-bold text-green-400 mb-6">
                Core Values
              </h3>
              
              <div className="space-y-4">
                {[
                  { title: "Clarity & Purpose", desc: "Clear goals and transparent intentions" },
                  { title: "Innovation & Creation", desc: "Turning futuristic ideas into reality" },
                  { title: "Human Connection", desc: "Believing in the goodness of humanity" },
                  { title: "Deep Technology", desc: "Working with cutting-edge tech" }
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-3 glass-effect neon-border p-4">
                    <div className="w-2 h-2 bg-green-400 mt-3 flex-shrink-0 rounded-full" />
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
    </section>
  );
};

export default About;
