import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { ImageCarousel } from './ImageCarousel';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);

  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-gold-400 hover:text-gold-500 font-semibold"
          >
            Go back to home
          </button>
        </div>
      </div>
    );
  }

  const projectImages = project.images || [project.image];

  const openCarousel = (index: number) => {
    setCarouselStartIndex(index);
    setCarouselOpen(true);
  };

  const handleRequestDesign = () => {
    const element = document.getElementById('contact');
    if (element) {
      navigate('/');
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gold-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Portfolio</span>
          </button>

          <div className="mb-8">
            <span className="text-gold-400 font-bold tracking-widest uppercase text-sm">{project.category}</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-900 mt-2">{project.title}</h1>
            <p className="mt-4 text-gray-600 text-lg max-w-3xl">{project.description}</p>
          </div>

          {/* Featured Image Gallery Grid */}
          {(() => {
            const heroImage = projectImages[0];
            const sideImages = projectImages.slice(1, 3);   // up to 2 right-column images
            const stripImages = projectImages.slice(3, 7);  // up to 4 bottom strip images
            const extraCount = projectImages.length - 7;    // hidden images beyond strip

            return (
              <div className="mb-8 space-y-2">
                {/* Top section: stacked on mobile, hero + right column on md+ */}
                <div className="flex flex-col gap-2 md:flex-row md:h-[520px]">
                  {/* Hero image */}
                  <div
                    className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer group flex-shrink-0 h-[260px] md:h-full ${
                      sideImages.length === 0 ? 'w-full' : 'w-full md:w-2/3'
                    }`}
                    onClick={() => openCarousel(0)}
                  >
                    <img
                      src={heroImage}
                      alt={`${project.title} - Main`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">
                        View full size
                      </span>
                    </div>
                  </div>

                  {/* Side images: stacked below on mobile, right column on md+ */}
                  {sideImages.length > 0 && (
                    <div className="flex flex-col gap-2 md:flex-1">
                      {sideImages.map((image, idx) => (
                        <div
                          key={idx + 1}
                          className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group h-[260px] md:h-full md:flex-1"
                          onClick={() => openCarousel(idx + 1)}
                        >
                          <img
                            src={image}
                            alt={`${project.title} - ${idx + 2}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">
                              View
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom strip: thumbnails for image 4+ */}
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
                            alt={`${project.title} - ${globalIdx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {isLast ? (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <span className="text-white text-2xl font-bold">+{extraCount + 1}</span>
                            </div>
                          ) : (
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">
                                View
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
            <h2 className="text-2xl font-serif font-bold text-dark-900 mb-4">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <div>
                <h3 className="font-bold text-dark-900 mb-2">Category</h3>
                <p>{project.category}</p>
              </div>
              <div>
                <h3 className="font-bold text-dark-900 mb-2">Custom Made</h3>
                <p>Tailored to client specifications</p>
              </div>
              <div>
                <h3 className="font-bold text-dark-900 mb-2">Materials</h3>
                <p>Premium quality hardwood & fabrics</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center pb-12">
            <button
              onClick={handleRequestDesign}
              className="bg-gold-400 text-white px-12 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-gold-500 transition-all transform hover:scale-105 shadow-lg"
            >
              Request This Design
            </button>
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
