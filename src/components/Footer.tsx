import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 bg-gradient-to-b from-transparent to-peach/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-playfair font-semibold gradient-text mb-4">
              Krishna Ladies Tailor
            </h3>
            <p className="text-foreground/70 mb-4">
              Where every stitch tells a story of elegance. Serving you with dedication for over a decade.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-playfair font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-playfair font-semibold text-foreground mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <a href="tel:+919427548302" className="hover:text-primary transition-colors">
                  +91 9427548302
                </a>
              </li>
              <li>
                <a href="mailto:jaydarji021103@gmail.com" className="hover:text-primary transition-colors break-all">
                  jaydarji021103@gmail.com
                </a>
              </li>
              <li>
                Juna Dumaral Road,<br />
                Vaishali Cinema Rd,<br />
                Nadiad, Gujarat 387001
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-foreground/60 text-sm"
        >
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>© 2024 Krishna Ladies Tailor. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-current" /> for elegance
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
