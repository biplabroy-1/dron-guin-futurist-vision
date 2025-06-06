
import { ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Main background image with parallax */}
      <motion.div 
        className="absolute inset-0 parallax-element"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://i.pinimg.com/736x/66/1a/38/661a38202bac0f5e5cedcc5900c77d3b.jpg"
          alt="futuristic tech background"
          className="w-full h-full object-cover scale-110 grayscale"
        />
      </motion.div>

      {/* Tech overlay image */}
      <motion.div 
        className="absolute inset-0 opacity-20 parallax-element"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -300]) }}
      >
        <img 
          src="https://i.pinimg.com/736x/18/15/14/1815144f4f5b160210b035d6fcdfbc4c.jpg"
          alt="tech overlay"
          className="w-full h-full object-cover grayscale mix-blend-overlay"
        />
      </motion.div>

      {/* Animated grid overlay */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{
          backgroundImage: "linear-gradient(rgba(0,255,100,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,100,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 bg-green-400 rounded-full opacity-60`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ 
            y: [0, -50, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{ 
            duration: 4 + Math.random() * 2, 
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      <motion.div 
        className="text-center max-w-4xl mx-auto px-6 lg:px-8 z-20 relative"
        style={{ y: textY, opacity }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-space font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.span 
            className="text-gradient block"
            initial={{ opacity: 0, x: -100, rotateY: 90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(0,255,100,0.5)"
            }}
          >
            DRON
          </motion.span>
          <motion.span 
            className="text-white block"
            initial={{ opacity: 0, x: 100, rotateY: -90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(255,255,255,0.5)"
            }}
          >
            GUIN
          </motion.span>
        </motion.h1>
        
        <motion.div 
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide glass-effect p-6 rounded-lg"
          initial={{ opacity: 0, y: 50, rotateX: 45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.02, rotateX: 5 }}
        >
          <motion.span 
            className="block mb-2"
            initial={{ opacity: 0, letterSpacing: "10px" }}
            animate={{ opacity: 1, letterSpacing: "2px" }}
            transition={{ duration: 1, delay: 1 }}
          >
            Futurist • AI Visionary • Creator
          </motion.span>
          <motion.span 
            className="text-green-400 font-medium"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ 
              scale: 1.1,
              textShadow: "0 0 10px rgba(0,255,100,0.8)"
            }}
          >
            Building Tomorrow's World Today
          </motion.span>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed glass-effect p-6 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.01 }}
        >
          On a mission to discover why life was created, while building AI ecosystems that make the world a better place.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.a 
            href="#about" 
            className="neon-border glass-effect text-white px-8 py-4 font-medium transition-all duration-300 group"
            whileHover={{ 
              scale: 1.05, 
              rotateX: 10,
              boxShadow: "0 20px 40px rgba(0,255,100,0.2)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="group-hover:text-green-400 transition-colors">
              Explore My Journey
            </span>
          </motion.a>
          <motion.a 
            href="#company" 
            className="neon-border glass-effect text-white px-8 py-4 font-medium transition-all duration-300 group"
            whileHover={{ 
              scale: 1.05, 
              rotateX: 10,
              boxShadow: "0 20px 40px rgba(255,255,255,0.1)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="group-hover:text-green-400 transition-colors">
              Azmth Technologies AI
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 180 }}
          className="neon-border p-2 rounded-full glass-effect"
        >
          <ArrowDown className="text-green-400" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
