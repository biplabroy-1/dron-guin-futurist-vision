
import { Music, Camera, ChefHat, Film } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Creative = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const overlayY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  
  const creativeAreas = [
    {
      title: "Music Production",
      description: "A decade of creating music as art and recreation, exploring sound as a medium for expression and emotion.",
      icon: <Music className="text-green-400" size={32} />,
      experience: "10+ Years",
      bgImage: "https://i.pinimg.com/736x/52/6d/f9/526df98c7d7f294953815b5258a39c7e.jpg"
    },
    {
      title: "Film Making", 
      description: "Passionate about storytelling through visual media, with expertise in camera work and lighting techniques.",
      icon: <Film className="text-green-400" size={32} />,
      experience: "Professional",
      bgImage: "https://i.pinimg.com/736x/b9/d9/c3/b9d9c3993bf314178684fc8d9c58b831.jpg"
    },
    {
      title: "Camera & Lighting",
      description: "Technical expertise in visual composition, understanding how light and perspective shape reality.",
      icon: <Camera className="text-green-400" size={32} />,
      experience: "Advanced",
      bgImage: "https://i.pinimg.com/736x/21/dc/30/21dc3013a1d62e8e8fb2f2d652375add.jpg"
    },
    {
      title: "Culinary Arts",
      description: "Cooking as a personal hobby, finding joy and creativity in the art of preparing and sharing food.",
      icon: <ChefHat className="text-green-400" size={32} />,
      experience: "Personal",
      bgImage: "https://i.pinimg.com/736x/ae/a4/58/aea458d392bab5d5b405a47c48b94127.jpg"
    }
  ];

  return (
    <section id="creative" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Multiple parallax background layers */}
      <motion.div
        className="absolute inset-0 parallax-element"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img 
          src="https://i.pinimg.com/736x/2a/b7/78/2ab7780cf2854fc7ad188b4dac60014d.jpg"
          alt="creative environment"
          className="w-full h-full object-cover grayscale scale-110"
        />
      </motion.div>

      {/* Secondary parallax layer */}
      <motion.div
        className="absolute inset-0 opacity-30 parallax-element"
        style={{ y: overlayY }}
      >
        <img 
          src="https://i.pinimg.com/736x/52/6d/f9/526df98c7d7f294953815b5258a39c7e.jpg"
          alt="music overlay"
          className="w-full h-full object-cover grayscale mix-blend-overlay"
        />
      </motion.div>

      {/* Animated mesh gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0,255,100,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(0,255,100,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(0,255,100,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(0,255,100,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(0,255,100,0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating creative elements with complex animations */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 bg-green-400/40 rounded-full`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ 
            y: [0, -60 - Math.random() * 40, 0],
            x: [0, Math.random() * 60 - 30, 0],
            scale: [0.5, 1.5 + Math.random(), 0.5],
            opacity: [0.2, 0.8 + Math.random() * 0.2, 0.2],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 6 + Math.random() * 4, 
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        <motion.div 
          className="text-center mb-16"
          style={{ opacity }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-space font-bold mb-6 text-gradient"
            initial={{ opacity: 0, rotateX: 90, scale: 0.5 }}
            whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 30px rgba(0,255,100,0.6)"
            }}
          >
            Creative Pursuits
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed glass-effect p-6 rounded-lg"
            initial={{ opacity: 0, y: 50, rotateY: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, rotateY: 5 }}
          >
            Beyond technology and business, I find inspiration and balance through various 
            creative outlets that fuel my imagination and perspective.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {creativeAreas.map((area, index) => (
            <motion.div 
              key={index}
              className="neon-border glass-effect p-8 group relative overflow-hidden"
              initial={{ opacity: 0, y: 100, rotateY: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                rotateX: 5,
                z: 50
              }}
            >
              {/* Individual background for each card */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${area.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(100%)'
                }}
              />

              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(45deg, transparent 30%, rgba(0,255,100,0.1) 50%, transparent 70%)",
                  backgroundSize: "200% 200%"
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <div className="flex items-start space-x-6 relative z-10">
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: 360,
                    filter: "drop-shadow(0 0 20px rgba(0,255,100,0.8))"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {area.icon}
                </motion.div>
                
                <div className="flex-grow">
                  <motion.div 
                    className="flex items-center justify-between mb-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.h3 
                      className="text-xl font-space font-bold text-white group-hover:text-green-400 transition-colors"
                      whileHover={{ 
                        scale: 1.05,
                        textShadow: "0 0 10px rgba(0,255,100,0.8)"
                      }}
                    >
                      {area.title}
                    </motion.h3>
                    <motion.span 
                      className="text-xs px-3 py-1 neon-border text-green-400 rounded-full glass-effect"
                      whileHover={{ scale: 1.1 }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    >
                      {area.experience}
                    </motion.span>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
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
