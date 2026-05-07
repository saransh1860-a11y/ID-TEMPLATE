import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { db, auth } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Residential',
    budget: '$50k - $100k',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const path = 'consultations';
    try {
      await addDoc(collection(db, path), {
        ...formData,
        status: 'pending',
        createdAt: serverTimestamp()
      });
      setIsSuccess(true);
      setFormData({ name: '', phone: '', projectType: 'Residential', budget: '$50k - $100k', message: '' });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <CheckCircle className="text-luxury-gold mx-auto mb-6" size={64} />
                <h3 className="text-3xl font-serif font-bold mb-4">Request Received</h3>
                <p className="text-white/50 mb-8">Our concierge will contact you within 24 hours to schedule your private session.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-luxury-gold uppercase tracking-widest text-xs font-bold border-b border-luxury-gold"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-luxury-gold transition-colors">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-luxury-gold transition-colors placeholder:text-white/5" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-luxury-gold transition-colors">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-luxury-gold transition-colors placeholder:text-white/5" 
                      placeholder="+1 234 567 890" 
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-luxury-gold transition-colors">Project Type</label>
                  <select 
                    value={formData.projectType}
                    onChange={e => setFormData({...formData, projectType: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-luxury-gold transition-colors cursor-pointer appearance-none"
                  >
                    <option className="bg-luxury-gray" value="Residential">Residential</option>
                    <option className="bg-luxury-gray" value="Commercial">Commercial</option>
                    <option className="bg-luxury-gray" value="Hospitality">Hospitality</option>
                    <option className="bg-luxury-gray" value="Modular Solutions">Modular Solutions</option>
                  </select>
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-luxury-gold transition-colors">Project Budget Range</label>
                  <select 
                    value={formData.budget}
                    onChange={e => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-luxury-gold transition-colors cursor-pointer appearance-none"
                  >
                    <option className="bg-luxury-gray" value="$50k - $100k">$50k - $100k</option>
                    <option className="bg-luxury-gray" value="$100k - $500k">$100k - $500k</option>
                    <option className="bg-luxury-gray" value="$500k+">$500k+</option>
                  </select>
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-focus-within:text-luxury-gold transition-colors">Your Message</label>
                  <textarea 
                    rows={4} 
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-luxury-gold transition-colors resize-none placeholder:text-white/5" 
                    placeholder="Tell us about your vision..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-luxury-gold text-luxury-dark font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all duration-500 hover:bg-white disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending Request...' : (
                    <>Request Consultation <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
