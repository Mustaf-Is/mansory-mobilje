import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { ImageCarousel } from './ImageCarousel';
import { useLanguage } from '../i18n/LanguageContext';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);
  const { lang, t } = useLanguage();

  const project = projects.find(p => p.id === Number(id));
  const pt = t.projects.items.find(p => p.id === Number(id));

  const getCategoryTranslation = (category: string) => {
    const cat = t.projects.categories[category as keyof typeof t.projects.categories];
    return cat ? cat[lang] : category;
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.project.notFound[lang]}</h2>
          <button
            onClick={() => navigate('/')}
            className="text-gold-400 hover:text-gold-500 font-semibold"
          >
            {t.project.goBack[lang]}
          </button>
        </div>
      </div>
    );
  }

  const projectImages = project.images || [project.image];
  const title = pt ? pt.title[lang] : project.title;
  const description = pt ? pt.description[lang] : project.description;
  const category = getCategoryTranslation(project.category);

  const openCarousel = (index: number) => {
    setCarouselStartIndex(index);
    setCarouselOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gold-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">{t.project.backToPortfolio[lang]}</span>
          </button>

          <div className="mb-8">
            <span className="text-gold-400 font-bold tracking-widest uppercase text-sm">{category}</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-900 mt-2">{title}</h1>
            <p className="mt-4 text-gray-600 text-lg">{description}</p>
          </div>

          {(() => {
            const heroImage = projectImages[0];
            const isTwoImages = projectImages.length === 2;
            const sideImages = projectImages.slice(1, 3);
            const stripImages = projectImages.slice(3, 7);
            const extraCount = projectImages.length - 7;

            return (
              <div className="mb-8 space-y-2">
                <div className="flex flex-col gap-2 md:flex-row md:h-[520px]">
                  <div
                    className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer group flex-shrink-0 h-[260px] md:h-full ${
                      sideImages.length === 0 ? 'w-full' : isTwoImages ? 'w-full md:w-1/2' : 'w-full md:w-2/3'
                    }`}
                    onClick={() => openCarousel(0)}
                  >
                    <img
                      src={heroImage}
                      alt={`${title} - Main`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">
                        {t.project.viewFullSize[lang]}
                      </span>
                    </div>
                  </div>

                  {sideImages.length > 0 && (
                    <div className={`flex flex-col gap-2 ${isTwoImages ? 'md:w-1/2' : 'md:flex-1'}`}>
                      {sideImages.map((image, idx) => (
                        <div
                          key={idx + 1}
                          className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group h-[260px] md:h-full md:flex-1"
                          onClick={() => openCarousel(idx + 1)}
                        >
                          <img
                            src={image}
                            alt={`${title} - ${idx + 2}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">
                              {t.project.view[lang]}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {stripImages.length > 0 && (
                  <div className={`grid gap-2 grid-cols-${stripImages.length}`} style={{ height: '160px' }}>
                    {stripImages.map((image, idx) => {
                      const globalIdx = idx + 3;
                      const isLast = idx === stripImages.length - 1 && extraCount > 0;
                      return (
                        <div
                          key={globalIdx}
                          className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                          onClick={() => openCarousel(globalIdx)}
                        >
                          <img
                            src={image}
                            alt={`${title} - ${globalIdx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {isLast ? (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <span className="text-white text-2xl font-bold">+{extraCount + 1}</span>
                            </div>
                          ) : (
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">
                                {t.project.view[lang]}
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })()}

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-serif font-bold text-dark-900 mb-4">{t.project.details[lang]}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <div>
                <h3 className="font-bold text-dark-900 mb-2">{t.project.category[lang]}</h3>
                <p>{category}</p>
              </div>
              <div>
                <h3 className="font-bold text-dark-900 mb-2">{t.project.customMade[lang]}</h3>
                <p>{t.project.customMadeDesc[lang]}</p>
              </div>
              <div>
                <h3 className="font-bold text-dark-900 mb-2">{t.project.materials[lang]}</h3>
                <p>{t.project.materialsDesc[lang]}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {carouselOpen && (
        <ImageCarousel
          images={projectImages}
          initialIndex={carouselStartIndex}
          onClose={() => setCarouselOpen(false)}
        />
      )}
    </>
  );
};
