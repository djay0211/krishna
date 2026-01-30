import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Clock, Award, Heart, Users } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const timeline = [
    { year: '2002', event: 'Krishna Ladies Tailor Founded' },
    { year: '2015', event: 'Expanded Services to Bridal Wear' },
    { year: '2018', event: 'Served 2000+ Happy Customers' },
    { year: '2024', event: 'Leading Ladies Tailor in the Region' },
  ];

  const values = [
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We value your time and deliver on schedule',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Excellence in every stitch and detail',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '20+ years of combined expertise',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-peach/10 to-transparent">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text mb-4">
            Our Story
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            A decade of dedication to crafting elegance, one stitch at a time
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1753162660069-d4145d9a95f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsb3IlMjBzdGl0Y2hpbmclMjBmYWJyaWN8ZW58MXx8fHwxNzY4OTcyOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tailoring craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating decoration */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl"
            />
          </motion.div>

          {/* Story content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-foreground mb-4">
                Crafting Dreams into Reality
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Founded with a passion for perfection, Krishna Ladies Tailor has been serving the community for over a decade. Our journey began with a simple vision: to provide every woman with garments that make her feel confident and beautiful.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Today, we're proud to be the trusted choice for hundreds of customers who value quality craftsmanship, personalized service, and attention to detail. Every piece we create is a testament to our commitment to excellence.
              </p>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-3xl p-6 border-l-4 border-primary"
            >
              <p className="text-lg italic text-foreground/90">
                "Every stitch is a promise of quality. Every garment is a work of art."
              </p>
              <p className="text-sm text-foreground/60 mt-2">- Master Tailor</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl sm:text-4xl font-playfair font-semibold text-center gradient-text mb-12">
            Why Choose Us
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4"
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-foreground/70 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl sm:text-4xl font-playfair font-semibold text-center gradient-text mb-12">
            Our Journey
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

              {/* Timeline items */}
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  <div className="w-full sm:w-1/2 sm:px-8">
                    <div className="glass rounded-2xl p-6">
                      <div className="text-2xl font-playfair font-bold gradient-text mb-2">
                        {item.year}
                      </div>
                      <div className="text-foreground/80">{item.event}</div>
                    </div>
                  </div>
                  <div className="absolute left-8 sm:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background transform -translate-x-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}