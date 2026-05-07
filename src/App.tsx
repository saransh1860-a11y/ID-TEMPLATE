import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectSection } from './components/ProjectSection';
import { About } from './components/About';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { AIChatWidget } from './components/AIChatWidget';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Custom Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-luxury-gold origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
        >
          <About />
          <Services />
          <ProjectSection />
          <BeforeAfter />
          <Process />
          <Testimonials />
          <ConsultationForm />
        </motion.div>
      </main>

      <Footer />
      
      {/* AI Assistant */}
      <AIChatWidget />
    </div>
  );
}
