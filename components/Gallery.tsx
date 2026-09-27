import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

export const Gallery: React.FC = () => {
  const { lang, t } = useLanguage();

  const getProjectTranslation = (projectId: number) => {
    return t.projects.items.find(p => p.id === projectId);
  };

  const getCategoryTranslation = (category: string) => {
    const cat = t.projects.categories[category as keyof typeof t.projects.categories];
    return cat ? cat[lang] : category;
  };

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-2 block">{t.gallery.badge[lang]}</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark-900">{t.gallery.title[lang]}</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            {t.gallery.subtitle[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const pt = getProjectTranslation(project.id);
            return (
              <Link
                key={project.id} 
                to={`/project/${project.id}`}
                aria-label={`${pt ? pt.title[lang] : project.title} — ${getCategoryTranslation(project.category)}`}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold-400"
              >
                <div className="aspect-w-4 aspect-h-3 h-80">
                  <img 
                    src={project.image} 
                    alt={pt ? pt.title[lang] : project.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">{getCategoryTranslation(project.category)}</span>
                  <h3 className="text-white text-xl font-serif font-bold">{pt ? pt.title[lang] : project.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};
