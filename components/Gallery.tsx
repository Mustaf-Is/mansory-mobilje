import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export const Gallery: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-2 block">Our Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark-900">Our Work</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Explore a selection of our completed projects. Real examples of custom furniture created for our satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="aspect-w-4 aspect-h-3 h-80">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">{project.category}</span>
                <h3 className="text-white text-xl font-serif font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block border-b-2 border-dark-900 text-dark-900 font-bold uppercase tracking-widest pb-1 hover:text-gold-400 hover:border-gold-400 transition-all"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};