
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden" ref={ref}>
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y }}
      >
        <img 
          src="https://i.pinimg.com/736x/68/01/e8/6801e81cbfa835ca4dfba50c61c0375a.jpg"
          alt="futuristic background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-space font-bold mb-8 text-gradient"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                I am <span className="text-primary font-semibold">Dron Guin</span>, a person with a clear goal in life: 
                to be a brand that stands for clarity and goodness. When people connect with me, 
                they can be assured of one thing - they are good humans.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                My white heart is what makes me who I am, combined with my goals, skills, 
                and unique understanding of the world from different perspectives. 
                I am not just a thinker - I love to create and bring ideas to life.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                I have thousands of product ideas and the ambition to make a positive impact 
                on a global scale. My ultimate quest is to find out 
                <span className="text-primary font-semibold"> "why life was created"</span> - 
                this is my driving purpose.
              </motion.p>
            </div>

            <motion.div 
              className="mt-8 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div 
                className="bg-background p-4 border border-border"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-primary font-semibold mb-2">Philosophy</h3>
                <p className="text-sm text-muted-foreground">Futurism</p>
              </motion.div>
              <motion.div 
                className="bg-background p-4 border border-border"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-primary font-semibold mb-2">Mission</h3>
                <p className="text-sm text-muted-foreground">Better World</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ opacity }}
          >
            <motion.div 
              className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 border border-primary/30 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative background image */}
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="https://i.pinimg.com/736x/fc/b3/a0/fcb3a0f480783d53c2932e6b68ba9869.jpg"
                  alt="tech background"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-space font-bold text-primary mb-6 relative z-10">Core Values</h3>
              
              <div className="space-y-4 relative z-10">
                {[
                  { title: "Clarity & Purpose", desc: "Clear goals and transparent intentions in everything I do" },
                  { title: "Innovation & Creation", desc: "Turning futuristic ideas into tangible reality" },
                  { title: "Human Connection", desc: "Believing in the goodness of humanity" },
                  { title: "Deep Technology", desc: "Working with cutting-edge tech for the future" }
                ].map((value, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-primary mt-3 flex-shrink-0"
                      whileInView={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-muted-foreground text-sm">{value.desc}</p>
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
