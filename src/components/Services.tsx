import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { cn } from '../lib/utils';

export function Services() {
  return (
    <section id="services" className="section-padding bg-luxury-gray relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-luxury-gold/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-24">
          <div className="lg:col-span-1">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
            >
              Our Capabilities
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Holistic <br /> Interior <span className="text-luxury-gold italic">Strategy</span>
            </motion.h2>
            <p className="text-white/50 font-light leading-relaxed">
              We offer a full spectrum of consultancy and execution services, ensuring a seamless transition from conceptual sketches to finished spatial masterpieces.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              // @ts-ignore
              const Icon = Icons[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group p-8 glass hover:border-luxury-gold transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-luxury-gold group-hover:text-luxury-dark transition-colors duration-500">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-luxury-gold transition-colors">{service.title}</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-white/5">
          {[
            { label: 'Completed Projects', value: '250+' },
            { label: 'Years Experience', value: '15' },
            { label: 'Design Awards', value: '24' },
            { label: 'Happy Clients', value: '98%' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h4 className="text-3xl md:text-5xl font-serif font-bold text-luxury-gold mb-2">{stat.value}</h4>
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
