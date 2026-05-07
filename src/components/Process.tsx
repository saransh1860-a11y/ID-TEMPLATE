import { motion } from 'motion/react';

export function Process() {
  const steps = [
    { title: 'Discovery', desc: 'Deep-dive consultation to understand your legacy, lifestyle, and spatial needs.' },
    { title: 'Concept', desc: 'Developing the sensory narrative, textures, and initial 3D atmospheric studies.' },
    { title: 'Design', desc: 'Precision technical drawings, material procurement, and artisanal coordination.' },
    { title: 'Execution', desc: 'On-site management with rigorous quality control and architectural oversight.' },
    { title: 'Styling', desc: 'The final layer: curated decor, art placement, and the sensory reveal.' },
  ];

  return (
    <section id="process" className="section-padding bg-luxury-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
            >
              The Journey
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Our Design <span className="text-luxury-gold italic">Process</span>
            </motion.h2>
          </div>
          <p className="md:w-1/3 text-white/40 mt-6 md:mt-0 font-light italic">
            Artisanal precision at every touchpoint.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="group relative"
              >
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-luxury-dark group-hover:border-luxury-gold transition-colors duration-500 relative">
                   <span className="text-white/20 font-mono text-xs absolute -top-2 left-1/2 -translate-x-1/2 bg-luxury-gray px-2">0{i+1}</span>
                   <div className="w-2 h-2 rounded-full bg-luxury-gold group-hover:scale-150 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-luxury-gold transition-colors">{step.title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
