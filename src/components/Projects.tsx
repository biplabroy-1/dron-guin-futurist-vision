import { ExternalLink, Code, Beaker } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  const projects = [
    {
      title: "University Research Projects",
      description: "Multiple innovative projects during my university years, focusing on cutting-edge technology and future applications.",
      category: "Research",
      status: "Completed",
      icon: <Beaker className="text-primary" size={24} />
    },
    {
      title: "AI Ecosystem Platform", 
      description: "Core platform for Azmth Technologies AI, designed to be the foundation of the world's best AI ecosystem.",
      category: "AI Development",
      status: "In Progress",
      icon: <Code className="text-primary" size={24} />
    },
    {
      title: "Futurism Framework",
      description: "A comprehensive framework implementing my philosophy of Futurism for technological and social advancement.",
      category: "Philosophy",
      status: "Ongoing",
      icon: <ExternalLink className="text-primary" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Enhanced parallax background with tech image */}
      <motion.div
        className="absolute inset-0 parallax-element"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-black/75 z-10" />
        <img 
          src="https://i.pinimg.com/736x/81/16/7a/81167a7f65cd29d2f12d343d1685a87c.jpg"
          alt="tech innovation background"
          className="w-full h-full object-cover grayscale scale-110"
        />
      </motion.div>

      {/* Secondary tech overlay */}
      <motion.div
        className="absolute inset-0 opacity-20 parallax-element"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -250]) }}
      >
        <img 
          src="https://i.pinimg.com/736x/18/15/14/1815144f4f5b160210b035d6fcdfbc4c.jpg"
          alt="tech overlay"
          className="w-full h-full object-cover grayscale mix-blend-overlay"
        />
      </motion.div>

      {/* Animated circuit pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{
          backgroundImage: "linear-gradient(rgba(0,255,100,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,100,0.3) 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-space font-bold mb-6 text-gradient"
            initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 30px rgba(0,255,100,0.6)"
            }}
          >
            Projects & Innovation
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed glass-effect p-6 rounded-lg neon-border"
            initial={{ opacity: 0, y: 30, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            From university research to building AI ecosystems, each project represents a step 
            toward understanding and improving our world.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="glass-effect p-8 neon-border group relative overflow-hidden"
              initial={{ opacity: 0, y: 100, rotateY: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                boxShadow: "0 25px 50px rgba(0,255,100,0.2)"
              }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(0,255,100,0.05) 0%, transparent 50%)",
                    "linear-gradient(135deg, rgba(0,255,100,0.05) 0%, transparent 50%)",
                    "linear-gradient(225deg, rgba(0,255,100,0.05) 0%, transparent 50%)",
                    "linear-gradient(315deg, rgba(0,255,100,0.05) 0%, transparent 50%)",
                    "linear-gradient(45deg, rgba(0,255,100,0.05) 0%, transparent 50%)"
                  ]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center justify-between mb-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.3,
                      filter: "drop-shadow(0 0 15px rgba(0,255,100,0.8))"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {project.icon}
                  </motion.div>
                  <motion.span 
                    className={`text-xs px-3 py-1 rounded-full neon-border glass-effect ${
                      project.status === 'Completed' ? 'text-green-400' :
                      project.status === 'In Progress' ? 'text-yellow-400' :
                      'text-blue-400'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  >
                    {project.status}
                  </motion.span>
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-space font-bold mb-3 text-white group-hover:text-green-400 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 10px rgba(0,255,100,0.8)"
                  }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 text-sm mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  className="text-xs text-green-400 font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 5px rgba(0,255,100,0.8)"
                  }}
                >
                  {project.category}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 p-12 border border-primary/30 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Background decoration */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full bg-gradient-to-r from-primary to-green-400 rounded-full blur-3xl" />
          </motion.div>

          <motion.h3 
            className="text-3xl font-space font-bold mb-6 text-primary relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Thousands of Ideas, One Purpose
          </motion.h3>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I have ideas for thousands of products, each designed to push the boundaries of what's possible. 
            Every project, whether completed or in progress, serves the ultimate goal of making the world 
            a better place and bringing us closer to understanding why life was created.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { title: "Deep Tech", desc: "Advanced technology solutions" },
              { title: "AI Systems", desc: "Intelligent automation platforms" },
              { title: "Future Tools", desc: "Tomorrow's solutions today" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <h4 className="text-2xl font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
