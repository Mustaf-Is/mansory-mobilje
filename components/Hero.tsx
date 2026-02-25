import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1505693416388-b0346ef414b9?q=80&w=2070&auto=format&fit=crop", // Modern Bed
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop", // Sofa
  "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop" // Wardrobe/Room
];

export const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt="Mansory Mobilje Furniture"
            className="w-full h-full object-cover animate-ken-burns"
            style={{ animation: index === currentImage ? 'kenBurns 20s infinite alternate' : 'none' }}
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="md:max-w-2xl">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-gold-400 rounded-sm animate-fade-in-up">
            Custom Furniture Manufacturer
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
            Crafting Comfort, <br />
            <span className="text-gold-400">Designing Dreams.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed animate-fade-in-up delay-200">
            From bespoke bedrooms to custom-designed sofas and wardrobes. 
            We transform your living spaces with exceptional craftsmanship tailored to your unique style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
            <a
              href="#customize"
              className="group px-8 py-4 bg-gold-400 text-white font-semibold rounded-sm hover:bg-gold-500 transition-all flex items-center justify-center"
            >
              Start Customizing
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#work"
              className="px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-sm hover:bg-white hover:text-dark-900 transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns {
          animation: kenBurns 20s infinite alternate;
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