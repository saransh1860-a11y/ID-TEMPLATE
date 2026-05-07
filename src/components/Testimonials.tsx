import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Arthur Sterling",
      role: "CEO, Sterling Global",
      text: "Aurum didn't just design an office; they built a physical manifesto of our brand. The attention to acoustic detail changed how our team works.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Elaina Rossi",
      role: "Art Curator",
      text: "The way they handle light and texture is unparalleled. My penthouse feels like a living gallery, yet perfectly intimate for family life.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Marcus Thorne",
      role: "Venture Capitalist",
      text: "Exceptional project management. The timeline was aggressive, but the quality never compromised. A flawless execution.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="section-padding bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
          >
            Client Voices
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Sustaining <span className="text-luxury-gold italic">Legacies</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-10 glass relative group"
            >
              <Quote className="text-luxury-gold/20 absolute top-8 right-8" size={64} />
              
              <div className="flex items-center gap-4 mb-8">
                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border border-luxury-gold/50" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-serif font-bold text-white">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-luxury-gold">{t.role}</p>
                </div>
              </div>
              
              <p className="text-white/60 italic font-light leading-relaxed">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
