import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919427548302"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={
          isVisible
            ? { scale: 1, opacity: 1 }
            : { scale: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow group"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 px-3 py-2 rounded-lg glass whitespace-nowrap text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        >
          Chat on WhatsApp
        </motion.div>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919427548302"
        initial={{ scale: 0, opacity: 0 }}
        animate={
          isVisible
            ? { scale: 1, opacity: 1 }
            : { scale: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow group"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 px-3 py-2 rounded-lg glass whitespace-nowrap text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        >
          Call Now
        </motion.div>
      </motion.a>
    </>
  );
}
