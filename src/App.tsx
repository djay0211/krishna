import { Toaster } from 'sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { FloatingButtons } from './components/FloatingButtons';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingButtons />

      {/* Toast Notifications */}
      <Toaster 
        position="top-right" 
        richColors 
        closeButton
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(212, 163, 115, 0.3)',
            borderRadius: '1rem',
          },
        }}
      />
    </div>
  );
}
