import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Scissors, Sparkles, Crown, Shirt, Heart, Wrench } from 'lucide-react';

const services = [
  {
    icon: Shirt,
    title: 'Blouse Stitching',
    description: 'Perfect fit and elegant designs for all occasions',
    gradient: 'from-pink-400 to-rose-400',
  },
  {
    icon: Crown,
    title: 'Bridal Wear',
    description: 'Make your special day unforgettable with our bridal collection',
    gradient: 'from-amber-400 to-orange-400',
  },
  {
    icon: Sparkles,
    title: 'Custom Fitting',
    description: 'Tailored to your measurements for the perfect look',
    gradient: 'from-purple-400 to-pink-400',
  },
  {
    icon: Scissors,
    title: 'Suit Stitching',
    description: 'Elegant suits crafted with precision and care',
    gradient: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Heart,
    title: 'Designer Wear',
    description: 'Exclusive designs that reflect your unique style',
    gradient: 'from-red-400 to-pink-400',
  },
  {
    icon: Wrench,
    title: 'Alterations',
    description: 'Professional alterations and repairs for all garments',
    gradient: 'from-green-400 to-teal-400',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-peach/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blush/20 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Scissors className="w-12 h-12 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
            Crafting elegance with every stitch, tailored just for you
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass rounded-3xl p-8 h-full relative overflow-hidden hover:border-primary/50 transition-all duration-300">
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 relative z-10`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-playfair font-semibold text-foreground mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-foreground/70 relative z-10">
                  {service.description}
                </p>

                {/* Decorative corner */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1, rotate: 90 }}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${service.gradient} opacity-20 rounded-bl-full`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white text-lg font-medium glow hover:scale-105 transition-transform duration-300"
          >
            Book Your Service Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}