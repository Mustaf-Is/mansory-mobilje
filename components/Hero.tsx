import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const heroImages = [
  "/assets/images/hero-1.jpg",
  "/assets/images/hero-2.png",
  "/assets/images/hero-3.png"
];

export const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { lang, t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            key={index === currentImage ? `active-${currentImage}` : `idle-${index}`}
            src={img}
            alt="Mansory Mobilje Furniture"
            className="w-full h-full object-cover"
            style={{
              animation: index === currentImage ? 'kenBurns 8s ease-out forwards' : 'none',
              transform: index !== currentImage ? 'scale(1.05)' : undefined,
            }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.15) 100%)', backdropFilter: 'blur(1px)' }} />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="md:max-w-2xl">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-gold-400 rounded-sm animate-fade-in-up">
            {t.hero.badge[lang]}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
            {t.hero.titleLine1[lang]} <br />
            <span className="text-gold-400">{t.hero.titleLine2[lang]}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed animate-fade-in-up delay-200">
            {t.hero.description[lang]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
            <a
              href="#customize"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#customize')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-8 py-4 bg-gold-400 text-white font-semibold rounded-sm hover:bg-gold-500 transition-all flex items-center justify-center"
            >
              {t.hero.ctaCustomize[lang]}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-sm hover:bg-white hover:text-dark-900 transition-all"
            >
              {t.hero.ctaWork[lang]}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.12); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
