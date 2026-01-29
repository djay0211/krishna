import { motion } from 'motion/react';

export function Header() {
  return (
    <header className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/10 to-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Business Name - Hidden on mobile, visible on tablet+ */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="hidden sm:block mb-4"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold gradient-text">
            Krishna
          </h1>
        </motion.div>

        {/* Subtitle - Visible on all screens */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground">
            Ladies Tailor
          </h2>
        </motion.div>

        {/* Tagline - Visible on all screens */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 font-light tracking-wide italic">
            Where Every Stitch Tells a Story of Elegance
          </p>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
        />
      </div>
    </header>
  );
}
