import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS on component mount
  useEffect(() => {
    try {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (publicKey) {
        emailjs.init(publicKey);
        console.log('EmailJS initialized successfully');
      } else {
        console.error('EmailJS public key not found in environment variables');
      }
    } catch (error) {
      console.error('EmailJS initialization error:', error);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: { [k: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!/^\+?\d[\d\s-]{6,}$/.test(formData.phone.trim()))
      newErrors.phone = 'Enter a valid phone number.';
    if (!formData.email.trim()) newErrors.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      newErrors.email = 'Enter a valid email address.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        const missingVars = [];
        if (!serviceId) missingVars.push('VITE_EMAILJS_SERVICE_ID');
        if (!templateId) missingVars.push('VITE_EMAILJS_TEMPLATE_ID');
        if (!publicKey) missingVars.push('VITE_EMAILJS_PUBLIC_KEY');
        throw new Error(`Missing EmailJS configuration: ${missingVars.join(', ')}`);
      }

      const templateParams = {
        name: formData.name,
        phone: formData.phone,
        from_email: formData.email,
        text: formData.message,
        year: new Date().getFullYear().toString(),
      };

      console.log('=== EMAIL SENDING DEBUG INFO ===');
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('Public Key:', publicKey);
      console.log('Template Parameters:', templateParams);
      console.log('Variables being sent:');
      console.log('  - name:', formData.name);
      console.log('  - phone:', formData.phone);
      console.log('  - from_email:', formData.email);
      console.log('  - text:', formData.message);
      console.log('  - year:', new Date().getFullYear());
      console.log('================================');

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log('Email sent successfully:', response);

      toast.success('Message sent successfully!', {
        description: 'We will contact you very soon.',
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error: any) {
      console.error('=== EmailJS ERROR DETAILS ===');
      console.error('Error Message:', error?.message);
      console.error('Error Status:', error?.status);
      console.error('Error Text:', error?.text);
      console.error('Full Error Object:', error);
      console.error('=============================');
      
      let errorMessage = 'Failed to send message. Please try again later.';
      if (error?.status === 422) {
        errorMessage = 'Invalid email template configuration. Please try again.';
        console.error('STATUS 422: Template variable mismatch!');
        console.error('Your form sends: name, phone, from_email, text, year');
        console.error('Make sure your EmailJS template uses: {{name}}, {{phone}}, {{from_email}}, {{text}}, {{year}}');
      } else if (error?.text === 'Invalid service ID') {
        errorMessage = 'Email service configuration error. Please contact support.';
        console.error('Service ID invalid. Check your .env file.');
      } else if (error?.status === 401) {
        errorMessage = 'Authentication failed. Invalid EmailJS public key.';
        console.error('Public key authentication failed.');
      }
      
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-peach/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blush/20 rounded-full blur-3xl" />
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
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
            Let's bring your vision to life. Reach out to us today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-input-background border-2 border-transparent focus:border-primary outline-none transition-colors text-foreground"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-2">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-input-background border-2 border-transparent focus:border-primary outline-none transition-colors text-foreground"
                  placeholder="+91 XXXXX XXXXX"
                />
                {errors.phone && (
                  <p className="text-sm text-destructive mt-2">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-input-background border-2 border-transparent focus:border-primary outline-none transition-colors text-foreground"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-2">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-input-background border-2 border-transparent focus:border-primary outline-none transition-colors text-foreground resize-none"
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-2">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Info cards */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    Call Us
                  </h3>
                  <a
                    href="tel:+919427548302"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    +91 9427548302
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    Email Us
                  </h3>
                  <a
                    href="mailto:jaydarji021103@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors break-all"
                  >
                    jaydarji021103@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    Visit Us
                  </h3>
                  <p className="text-foreground/70">
                    Juna Dumaral Road,<br />
                    Vaishali Cinema Rd,<br />
                    Nadiad, Gujarat 387001
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Map placeholder */}
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-3xl overflow-hidden h-64"
            >
            <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Juna+Dumaral+Road,+Vaishali+Cinema+Rd,+Nadiad,+Gujarat+387001&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
        
            {/* Business hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-foreground/70">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-medium text-foreground">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-foreground">By Appointment</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}