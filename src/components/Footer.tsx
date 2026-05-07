import { motion } from 'motion/react';
import { Instagram, Youtube, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 border border-luxury-gold flex items-center justify-center">
                <span className="text-luxury-gold font-serif text-xl font-bold">A</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tighter uppercase">Aurum Studio</span>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
              Crafting sensory sanctuaries for those who appreciate the intersection of architectural precision and emotional depth.
            </p>
            <div className="flex gap-4">
              {[Instagram, Youtube, Linkedin, Twitter].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-8 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {['Portfolio', 'Studio Philosophy', 'Bespoke Services', 'Design Process', 'Contact Concierge'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/40 text-sm hover:text-luxury-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-8 uppercase tracking-widest text-xs">Expertise</h4>
            <ul className="space-y-4">
              {['Luxury Residential', 'Corporate Workspace', 'Acoustic Strategy', 'Modular Millwork', 'Curated Decor'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/40 text-sm hover:text-luxury-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-8 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6 font-light">Join our inner circle for exclusive design insights and collection previews.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-white/5 border border-white/10 py-3 px-4 outline-none focus:border-luxury-gold transition-colors text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-luxury-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-medium">
            © 2026 Aurum Studio. All Rights Reserved. Crafted with Precision.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-medium hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-medium hover:text-white transition-colors">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold hover:text-luxury-gold transition-colors"
          >
            Back to Top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
