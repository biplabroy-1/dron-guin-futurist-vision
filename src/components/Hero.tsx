
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-background via-background to-accent/10 overflow-hidden">
      {/* Background animated elements */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full bg-gradient-to-r from-primary to-green-400 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full"
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-1 h-1 bg-primary rounded-full"
        animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />

      <div className="text-center max-w-4xl mx-auto px-6 lg:px-8 z-10">
        <motion.h1 
          className="text-6xl md:text-8xl font-space font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="text-gradient"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            DRON
          </motion.span>
          <br />
          <motion.span 
            className="text-foreground"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            GUIN
          </motion.span>
        </motion.h1>
        
        <motion.div 
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-light tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.span 
            className="block mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Futurist • AI Visionary • Creator
          </motion.span>
          <motion.span 
            className="text-primary font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Building Tomorrow's World Today
          </motion.span>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          On a mission to discover why life was created, while building AI ecosystems that make the world a better place.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.a 
            href="#about" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 font-medium transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Journey
          </motion.a>
          <motion.a 
            href="#company" 
            className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 font-medium transition-all duration-300"
            whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
            whileTap={{ scale: 0.95 }}
          >
            Azmth Technologies AI
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-primary" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
