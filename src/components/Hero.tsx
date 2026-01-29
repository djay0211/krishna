import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Where Every Stitch Tells a Story of Elegance";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1744502671648-7cd2358a193f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWJyaWMlMjBzaWxrJTIwdGV4dHVyZXxlbnwxfHx8fDE3Njg5OTE1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury fabric"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-peach/60 to-blush/40" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo/Brand Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold text-foreground mb-4 tracking-wide">
              <span className="inline-block">
                <motion.span
                  className="gradient-text"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(212,163,115,0.3)',
                      '0 0 30px rgba(212,163,115,0.5)',
                      '0 0 20px rgba(212,163,115,0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Krishna
                </motion.span>
              </span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground/80">
                Ladies Tailor
              </span>
            </h1>
          </motion.div>

          {/* Typewriter tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="min-h-[60px] flex items-center justify-center"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 font-light italic">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 sm:h-8 bg-primary ml-1"
              />
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white text-lg font-medium glow flex items-center gap-2 group"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Book Your Stitching
            </motion.a>
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full glass text-foreground text-lg font-medium border-2 border-primary/30 hover:border-primary transition-colors"
            >
              View Our Designs
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="pt-16 flex flex-wrap justify-center gap-8 sm:gap-16"
          >
            <div className="glass rounded-2xl px-6 py-4 text-center">
              <motion.div
                className="text-3xl sm:text-4xl font-bold gradient-text"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, type: 'spring' }}
              >
                2000+
              </motion.div>
              <div className="text-sm text-foreground/70 mt-1">Happy Customers</div>
            </div>
            <div className="glass rounded-2xl px-6 py-4 text-center">
              <motion.div
                className="text-3xl sm:text-4xl font-bold gradient-text"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.4, type: 'spring' }}
              >
                10+
              </motion.div>
              <div className="text-sm text-foreground/70 mt-1">Years of Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
