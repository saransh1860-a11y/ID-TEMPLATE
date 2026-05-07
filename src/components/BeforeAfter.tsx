import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

export function BeforeAfter() {
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e 
      ? e.touches[0].clientX - rect.left 
      : (e as React.MouseEvent).clientX - rect.left;
    
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="section-padding bg-luxury-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
          >
            The Transformation
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Design <span className="text-luxury-gold italic">Alchemy</span>
          </motion.h2>
          <p className="mt-6 text-white/50 max-w-xl mx-auto font-light">
            Witness the evolution from mundane structural frames to breathtaking sensory sanctuaries.
          </p>
        </div>

        <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto overflow-hidden group select-none cursor-ew-resize rounded-xl border border-white/5"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" 
              alt="After renovation"
              className="w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Before Image (Foreground) */}
          <div 
            className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-[max-width-5xl] md:w-[1280px] h-full" style={{ width: containerRef.current?.offsetWidth || '1000px' }}>
              <img 
                src="https://images.unsplash.com/photo-1544450173-8c8d03068e4c?auto=format&fit=crop&q=80&w=2000" 
                alt="Before renovation"
                className="w-full h-full object-cover filter grayscale contrast-125"
                style={{ width: containerRef.current?.offsetWidth || '1000px' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-luxury-gold z-20 pointer-events-none transition-transform shadow-[0_0_20px_rgba(212,175,55,0.7)]"
            style={{ left: `${sliderPosition}%` }}
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass flex items-center justify-center text-luxury-gold shadow-2xl">
               <MoveHorizontal size={24} className={isDragging ? 'scale-125 transition-transform' : ''} />
             </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-10 left-10 z-30 bg-black/60 backdrop-blur-md px-6 py-2 text-[10px] uppercase tracking-[0.3em] font-bold border border-white/10 rounded-full">
            Structural
          </div>
          <div className="absolute bottom-10 right-10 z-30 bg-luxury-gold text-luxury-dark px-6 py-2 text-[10px] uppercase tracking-[0.3em] font-bold border border-luxury-gold rounded-full">
            Finished
          </div>
        </div>
      </div>
    </section>
  );
}
