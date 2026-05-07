import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section-padding bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative z-10 aspect-[4/5] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                alt="Luxury Interior Design"
                className="w-full h-full object-cover filter contrast-110 hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Design elements */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-luxury-gold opacity-30 z-0" />
            <div className="absolute -top-10 -right-10 w-64 h-64 border border-white/10 z-0" />
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-12 -right-12 z-20 glass p-8 max-w-[280px]"
            >
              <p className="text-luxury-gold font-serif italic text-xl mb-2">"Design is the silent ambassador of your brand."</p>
              <div className="w-12 h-px bg-white/30 mb-2" />
              <p className="text-[10px] uppercase tracking-widest text-white/50">Sarah J. Aurum, Lead Designer</p>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
            >
              The Studio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            >
              Where Empathy <br /> Meets <span className="text-luxury-gold italic">Architecture</span>
            </motion.h2>
            
            <div className="space-y-6 text-white/60 font-light leading-relaxed mb-12 text-lg">
              <p>
                Founded in 2011, Aurum Studio has pioneered a new era of "Sensory Luxury"—a design philosophy that moves beyond visual aesthetics to consider the tactile, acoustic, and emotional impact of a space.
              </p>
              <p>
                We don't just decorate rooms; we architect experiences. Every material chosen, every shadow cast, and every line drawn is part of a larger narrative—your narrative.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold" /> Timeless Philosophy
                </h4>
                <p className="text-sm">Avoiding trends in favor of enduring elegance that ages gracefully over decades.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold" /> Bespoke Craftsmanship
                </h4>
                <p className="text-sm">Partnering with global artisans to create custom pieces unique to your project.</p>
              </div>
            </div>

            <button className="flex items-center gap-4 text-luxury-gold uppercase tracking-widest text-xs font-bold group">
              Read Our Full Story 
              <div className="w-10 h-10 border border-luxury-gold rounded-full flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-luxury-dark transition-all duration-500">
                <ArrowRight size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
