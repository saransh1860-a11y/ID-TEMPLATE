import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Youtube, Linkedin, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b',
        isScrolled 
          ? 'bg-luxury-dark/80 backdrop-blur-md py-4 border-white/10' 
          : 'bg-transparent py-8 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 border border-luxury-gold flex items-center justify-center group-hover:bg-luxury-gold transition-colors duration-500">
            <span className="text-luxury-gold group-hover:text-luxury-dark font-serif text-xl font-bold">A</span>
          </div>
          <span className="font-serif text-2xl font-bold tracking-tighter uppercase">Aurum Studio</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="uppercase tracking-widest font-medium hover:text-luxury-gold transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-luxury-gold transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-6">
           <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-500 uppercase tracking-widest text-xs font-bold"
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-luxury-dark border-t border-white/10 p-10 md:hidden flex flex-col gap-8 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl font-serif hover:text-luxury-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-6 mt-4">
              <Instagram className="hover:text-luxury-gold cursor-pointer" size={20} />
              <Youtube className="hover:text-luxury-gold cursor-pointer" size={20} />
              <Linkedin className="hover:text-luxury-gold cursor-pointer" size={20} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
