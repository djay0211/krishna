import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1590272939560-b61891345b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBkcmVzcyUyMGVtYnJvaWRlcnl8ZW58MXx8fHwxNzY4OTkxNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Bridal Embroidery',
    category: 'Bridal Wear',
  },
  {
    url: 'https://images.unsplash.com/photo-1724856604403-60304b28906c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkYWwlMjB3ZWFyfGVufDF8fHx8MTc2ODk5MTUyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Traditional Bridal',
    category: 'Bridal Wear',
  },
  {
    url: 'https://images.unsplash.com/photo-1761117228880-df2425bd70da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmxvdXNlJTIwZGVzaWdufGVufDF8fHx8MTc2ODk5MTUyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Elegant Blouse',
    category: 'Blouse Design',
  },
  {
    url: 'https://images.unsplash.com/photo-1718184021018-d2158af6b321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdWl0JTIwZmFicmljfGVufDF8fHx8MTc2ODk5MTUyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Luxury Suit Fabric',
    category: 'Suit Stitching',
  },
  {
    url: 'https://images.unsplash.com/photo-1681633528883-bc217d2e4dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwc3R1ZGlvfGVufDF8fHx8MTc2ODkwMDUzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Design Studio',
    category: 'Our Work',
  },
  {
    url: 'https://images.unsplash.com/photo-1759893362613-8bb8bb057af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMGJvdXRpcXVlfGVufDF8fHx8MTc2ODk3NTUxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Fashion Boutique',
    category: 'Our Work',
  },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-20 sm:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blush/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-peach/20 rounded-full blur-3xl" />
        </div>

        <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text mb-4">
              Our Gallery
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
              Explore our collection of exquisite designs and craftsmanship
            </p>
          </motion.div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="glass rounded-3xl overflow-hidden relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300"
                  >
                    <h3 className="text-white text-xl font-playfair font-semibold mb-1">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm">{image.category}</p>
                  </motion.div>
                  {/* Gold border glow on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-3xl transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/90 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 rounded-full glass text-white hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mt-6"
            >
              <h3 className="text-white text-2xl font-playfair font-semibold mb-2">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-white/70">
                {galleryImages[selectedImage].category}
              </p>
            </motion.div>
          </motion.div>

          {/* Navigation arrows */}
          <div className="absolute left-4 right-4 sm:left-8 sm:right-8 top-1/2 transform -translate-y-1/2 flex justify-between pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => 
                  prev === null ? null : prev > 0 ? prev - 1 : galleryImages.length - 1
                );
              }}
              className="glass p-3 rounded-full text-white hover:bg-white/20 transition-colors pointer-events-auto"
            >
              ←
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => 
                  prev === null ? null : (prev + 1) % galleryImages.length
                );
              }}
              className="glass p-3 rounded-full text-white hover:bg-white/20 transition-colors pointer-events-auto"
            >
              →
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}