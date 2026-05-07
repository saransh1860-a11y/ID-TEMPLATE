import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, Project } from '../constants';
import { X } from 'lucide-react';

export function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* ... header remains same ... */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
            >
              Curated Masterpieces
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Featured <span className="text-luxury-gold italic">Portfolios</span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs uppercase tracking-widest px-6 py-2 border transition-all duration-300 ${
                  filter === cat 
                    ? 'border-luxury-gold text-luxury-gold bg-luxury-gold/5' 
                    : 'border-white/10 text-white/50 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden aspect-[16/10] bg-luxury-gray"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-luxury-gold text-xs uppercase tracking-[0.2em] font-bold mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-serif font-bold mb-4">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="relative bg-luxury-gray w-full max-w-5xl max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-luxury-gold hover:text-luxury-dark transition-colors rounded-full"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-[300px] lg:h-full sticky top-0">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-10 lg:p-16">
                  <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">{selectedProject.title}</h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-2 gap-8 mb-12">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white/30 mb-2">Design Style</h4>
                      <p className="text-sm font-medium">{selectedProject.details.style}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white/30 mb-2">Project Duration</h4>
                      <p className="text-sm font-medium">{selectedProject.details.timeline}</p>
                    </div>
                    <div className="col-span-2">
                      <h4 className="text-xs uppercase tracking-widest text-white/30 mb-2">Key Materials</h4>
                      <p className="text-sm font-medium">{selectedProject.details.materials}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-4 bg-luxury-gold text-luxury-dark font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white transition-colors duration-500"
                    >
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
