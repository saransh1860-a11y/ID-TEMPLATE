import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export function ConsultationForm() {
  return (
    <section id="contact" className="section-padding bg-luxury-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
            >
              Contact
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              Begin Your <br /><span className="text-luxury-gold italic">Metamorphosis</span>
            </motion.h2>
            <p className="text-white/50 mb-12 font-light leading-relaxed max-w-md">
              Secure a private consultation to discuss your vision. Our associates respond to all inquiries within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer text-white/40 hover:text-luxury-gold transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-luxury-gold transition-colors">
                   <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold">Call Us</p>
                  <p className="text-lg font-serif">+1 (234) 567-890</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer text-white/40 hover:text-luxury-gold transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-luxury-gold transition-colors">
                   <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold">Email</p>
                  <p className="text-lg font-serif">concierge@aurum.studio</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer text-white/40 hover:text-luxury-gold transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-luxury-gold transition-colors">
                   <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold">Studio</p>
                  <p className="text-lg font-serif">742 Fifth Avenue, NYC</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass p-10 md:p-16 border-white/5"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-luxury-gold transition-colors">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-luxury-gold transition-colors placeholder:text-white/5" placeholder="John Doe" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-luxury-gold transition-colors">Phone Number</label>
                  <input type="tel" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-luxury-gold transition-colors placeholder:text-white/5" placeholder="+1 234 567 890" />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-luxury-gold transition-colors">Project Type</label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-luxury-gold transition-colors cursor-pointer appearance-none">
                  <option className="bg-luxury-gray">Residential</option>
                  <option className="bg-luxury-gray">Commercial</option>
                  <option className="bg-luxury-gray">Hospitality</option>
                  <option className="bg-luxury-gray">Modular Solutions</option>
                </select>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-luxury-gold transition-colors">Project Budget Range</label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-luxury-gold transition-colors cursor-pointer appearance-none">
                  <option className="bg-luxury-gray">$50k - $100k</option>
                  <option className="bg-luxury-gray">$100k - $500k</option>
                  <option className="bg-luxury-gray">$500k+</option>
                </select>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-luxury-gold transition-colors">Your Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-luxury-gold transition-colors resize-none placeholder:text-white/5" placeholder="Tell us about your vision..."></textarea>
              </div>

              <button className="w-full py-5 bg-luxury-gold text-luxury-dark font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all duration-500 hover:bg-white">
                Request Consultation <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
