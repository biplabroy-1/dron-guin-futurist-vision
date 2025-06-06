
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Enhanced parallax background */}
      <motion.div
        className="absolute inset-0 parallax-element"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-black/80 z-10" />
        <img 
          src="https://i.pinimg.com/736x/68/01/e8/6801e81cbfa835ca4dfba50c61c0375a.jpg"
          alt="futuristic background"
          className="w-full h-full object-cover grayscale scale-120"
        />
      </motion.div>

      {/* Animated particle system */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ 
          background: [
            "radial-gradient(circle at 30% 40%, rgba(0,255,100,0.1) 0%, transparent 70%)",
            "radial-gradient(circle at 70% 60%, rgba(0,255,100,0.1) 0%, transparent 70%)",
            "radial-gradient(circle at 40% 80%, rgba(0,255,100,0.1) 0%, transparent 70%)",
            "radial-gradient(circle at 30% 40%, rgba(0,255,100,0.1) 0%, transparent 70%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y: textY, opacity }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-space font-bold mb-8 text-gradient"
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 30px rgba(0,255,100,0.6)"
              }}
            >
              About Me
            </motion.h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <motion.div
                className="glass-effect p-6 rounded-lg neon-border"
                initial={{ opacity: 0, y: 30, rotateY: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
              >
                <p>
                  I am <span className="text-green-400 font-semibold">Dron Guin</span>, a person with a clear goal in life: 
                  to be a brand that stands for clarity and goodness. When people connect with me, 
                  they can be assured of one thing - they are good humans.
                </p>
              </motion.div>
              
              <motion.div
                className="glass-effect p-6 rounded-lg neon-border"
                initial={{ opacity: 0, y: 30, rotateY: -45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.02, rotateY: -5 }}
              >
                <p>
                  My white heart is what makes me who I am, combined with my goals, skills, 
                  and unique understanding of the world from different perspectives. 
                  I am not just a thinker - I love to create and bring ideas to life.
                </p>
              </motion.div>
              
              <motion.div
                className="glass-effect p-6 rounded-lg neon-border"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <p>
                  I have thousands of product ideas and the ambition to make a positive impact 
                  on a global scale. My ultimate quest is to find out 
                  <span className="text-green-400 font-semibold"> "why life was created"</span> - 
                  this is my driving purpose.
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="mt-8 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div 
                className="glass-effect p-4 neon-border group"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  boxShadow: "0 10px 30px rgba(0,255,100,0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-green-400 font-semibold mb-2 group-hover:text-white transition-colors">Philosophy</h3>
                <p className="text-sm text-gray-400">Futurism</p>
              </motion.div>
              <motion.div 
                className="glass-effect p-4 neon-border group"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: -10,
                  boxShadow: "0 10px 30px rgba(0,255,100,0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-green-400 font-semibold mb-2 group-hover:text-white transition-colors">Mission</h3>
                <p className="text-sm text-gray-400">Better World</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ opacity }}
          >
            <motion.div 
              className="glass-effect p-8 neon-border relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 30px 60px rgba(0,255,100,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background image */}
              <motion.div 
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src="https://i.pinimg.com/736x/fc/b3/a0/fcb3a0f480783d53c2932e6b68ba9869.jpg"
                  alt="tech background"
                  className="w-full h-full object-cover grayscale"
                />
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-space font-bold text-green-400 mb-6 relative z-10"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(0,255,100,0.8)"
                }}
              >
                Core Values
              </motion.h3>
              
              <div className="space-y-4 relative z-10">
                {[
                  { title: "Clarity & Purpose", desc: "Clear goals and transparent intentions in everything I do" },
                  { title: "Innovation & Creation", desc: "Turning futuristic ideas into tangible reality" },
                  { title: "Human Connection", desc: "Believing in the goodness of humanity" },
                  { title: "Deep Technology", desc: "Working with cutting-edge tech for the future" }
                ].map((value, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3 glass-effect p-3 rounded neon-border group/item"
                    initial={{ opacity: 0, x: 30, rotateY: 45 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.03, 
                      x: 10,
                      boxShadow: "0 5px 15px rgba(0,255,100,0.2)"
                    }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-green-400 mt-3 flex-shrink-0 rounded-full"
                      whileInView={{ 
                        scale: [0, 1.5, 1],
                        boxShadow: [
                          "0 0 0px rgba(0,255,100,0.5)",
                          "0 0 10px rgba(0,255,100,0.8)",
                          "0 0 5px rgba(0,255,100,0.6)"
                        ]
                      }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    />
                    <div>
                      <motion.h4 
                        className="font-semibold text-white group-hover/item:text-green-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {value.title}
                      </motion.h4>
                      <p className="text-gray-400 text-sm">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
