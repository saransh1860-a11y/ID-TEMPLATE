import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Interior"
            className="w-full h-full object-cover filter brightness-50"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/40 via-transparent to-luxury-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="mb-6"
        >
          <span className="uppercase tracking-[0.4em] text-luxury-gold text-xs font-bold bg-white/5 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full">
            Elite Residential & Commercial Design
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-none"
        >
          Designing <span className="text-luxury-gold italic">Timeless</span> <br />
          Luxury Spaces
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          We blend architectural precision with unparalleled sensory aesthetics to craft environments that reflect your unique legacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex justify-center items-center"
        >
          <a 
            href="#contact"
            className="group relative px-10 py-5 bg-luxury-gold text-luxury-dark font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-white overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Request Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Floating WhatsApp */}
      <motion.a
        href="https://wa.me/yournumber"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="uppercase tracking-[0.2em] text-[10px] opacity-40">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-luxury-gold to-transparent" />
        <ChevronDown size={14} className="opacity-40 animate-pulse" />
      </motion.div>
    </section>
  );
}
