
import { Music, Camera, ChefHat, Film } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Creative = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  const creativeAreas = [
    {
      title: "Music Production",
      description: "A decade of creating music as art and recreation, exploring sound as a medium for expression and emotion.",
      icon: <Music className="text-primary" size={32} />,
      experience: "10+ Years"
    },
    {
      title: "Film Making",
      description: "Passionate about storytelling through visual media, with expertise in camera work and lighting techniques.",
      icon: <Film className="text-primary" size={32} />,
      experience: "Professional"
    },
    {
      title: "Camera & Lighting",
      description: "Technical expertise in visual composition, understanding how light and perspective shape reality.",
      icon: <Camera className="text-primary" size={32} />,
      experience: "Advanced"
    },
    {
      title: "Culinary Arts",
      description: "Cooking as a personal hobby, finding joy and creativity in the art of preparing and sharing food.",
      icon: <ChefHat className="text-primary" size={32} />,
      experience: "Personal"
    }
  ];

  return (
    <section id="creative" className="py-20 bg-card relative overflow-hidden" ref={ref}>
      {/* Animated background with visual image */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y }}
      >
        <img 
          src="https://i.pinimg.com/736x/2a/b7/78/2ab7780cf2854fc7ad188b4dac60014d.jpg"
          alt="creative environment"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating creative elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3] 
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-green-400/30 rounded-full"
        animate={{ 
          y: [0, 40, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1],
          opacity: [0.4, 1, 0.4] 
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-space font-bold mb-6 text-gradient"
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creative Pursuits
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Beyond technology and business, I find inspiration and balance through various 
            creative outlets that fuel my imagination and perspective.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {creativeAreas.map((area, index) => (
            <motion.div 
              key={index}
              className="bg-background p-8 border border-border hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 50, rotateY: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />

              <div className="flex items-start space-x-6 relative z-10">
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    filter: "drop-shadow(0 0 20px hsl(var(--primary)))"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {area.icon}
                </motion.div>
                
                <div className="flex-grow">
                  <motion.div 
                    className="flex items-center justify-between mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-space font-bold text-foreground group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <motion.span 
                      className="text-xs px-2 py-1 bg-primary/20 text-primary rounded"
                      whileHover={{ scale: 1.1 }}
                    >
                      {area.experience}
                    </motion.span>
                  </motion.div>
                  
                  <motion.p 
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {area.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-3xl font-space font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Environment Design
            </motion.h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                I love environment design - the art of creating spaces and atmospheres that 
                tell stories and evoke emotions. Whether it's through lighting, composition, 
                or spatial arrangement, every environment has the potential to influence 
                how we think and feel.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                This passion extends beyond visual arts into my approach to technology 
                and business. Creating environments - whether digital, physical, or 
                conceptual - where humans can thrive and reach their full potential 
                is central to my philosophy.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 border border-primary/30 relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{ 
                  backgroundPosition: ["0% 0%", "100% 100%"],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{
                  backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 2px, transparent 2px)",
                  backgroundSize: "20px 20px"
                }}
              />

              <motion.h4 
                className="text-2xl font-space font-bold text-primary mb-6 text-center relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Creative Philosophy
              </motion.h4>
              
              <motion.blockquote 
                className="text-center text-muted-foreground italic text-lg leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                "Art and technology are not separate worlds - they are different languages 
                speaking the same truth. Through music, film, cooking, and design, 
                I explore the same questions that drive my technological pursuits: 
                What makes us human? How do we connect? Why do we create?"
              </motion.blockquote>
              
              <motion.div 
                className="text-center mt-6 relative z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.div 
                  className="w-12 h-0.5 bg-primary mx-auto mb-3"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
                <p className="text-primary font-medium">Recreation as Art</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Creative;
