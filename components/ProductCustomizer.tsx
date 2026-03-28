import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

import MidnightBlue from '../assets/images/Midngiht_Blue.png';
import VelvetRed from '../assets/images/Velvet Red (1).png';
import SandBeige from '../assets/images/Sand Beige (1).png';
import CharcoalImg from '../assets/images/Charcoal (1).png';

import RoyalCharcoal from '../assets/images/Bed - 1 (1).png';
import RoyalSapphire from '../assets/images/Bed_blue - 2 (1).png';

import MilanoMocha from '../assets/images/Bed_Type-3.png';
import MilanoForest from '../assets/images/Bed_Type-3_color_3.png';
import MilanoCopper from '../assets/images/Bed_Type-3_color_2.png';

import BrownMocha from '../assets/images/Bed_Type-4.png';
import AshGreen from '../assets/images/Bed_Type-4_color_2-NBG.png';
import SlateTeal from '../assets/images/Bed_Type-4_color_3-BNG.png';
import RoseTaupe from '../assets/images/Bed_Type-4_color_4-NBG.png';

interface ColorVariant {
  name: string;
  hex: string;
  image: string;
}

interface BedType {
  id: string;
  colors: ColorVariant[];
}

const bedTypes: BedType[] = [
  {
    id: 'cloud-comfort',
    colors: [
      { name: 'Midnight Blue', hex: '#1a365d', image: MidnightBlue },
      { name: 'Velvet Red', hex: '#800020', image: VelvetRed },
      { name: 'Sand Beige', hex: '#C2B280', image: SandBeige },
      { name: 'Charcoal', hex: '#36454F', image: CharcoalImg },
    ]
  },
  {
    id: 'royal-chesterfield',
    colors: [
      { name: 'Smoky Charcoal', hex: '#4a4a4a', image: RoyalCharcoal },
      { name: 'Royal Sapphire', hex: '#1e3a5f', image: RoyalSapphire },
    ]
  },
  {
    id: 'milano-channel',
    colors: [
      { name: 'Mocha Brown', hex: '#5c4a3d', image: MilanoMocha },
      { name: 'Forest Green', hex: '#2d5a4a', image: MilanoForest },
      { name: 'Burnt Copper', hex: '#b5651d', image: MilanoCopper },
    ]
  },
  {
    id: 'dante-tufted',
    colors: [
      { name: 'Brown Mocha', hex: '#4d4341', image: BrownMocha },
      { name: 'Ash Green', hex: '#5b6659', image: AshGreen },
      { name: 'Slate Teal', hex: '#6A7875', image: SlateTeal },
      { name: 'Rose Taupe', hex: '#8C7B78', image: RoseTaupe },
    ]
  },
];

export const ProductCustomizer: React.FC = () => {
  const [currentBedIndex, setCurrentBedIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'left' | 'right' | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const { lang, t } = useLanguage();

  const currentBed = bedTypes[currentBedIndex];
  const selectedColor = currentBed.colors[selectedColorIndex];
  const bedTranslation = t.beds[currentBed.id as keyof typeof t.beds];

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleBedChange('next');
    } else if (isRightSwipe) {
      handleBedChange('prev');
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleBedChange = (direction: 'prev' | 'next') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTransitionDirection(direction === 'next' ? 'left' : 'right');
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentBedIndex((prev) => (prev + 1) % bedTypes.length);
      } else {
        setCurrentBedIndex((prev) => (prev - 1 + bedTypes.length) % bedTypes.length);
      }
      setSelectedColorIndex(0);
      setTransitionDirection(null);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 400);
  };

  const handleColorChange = (index: number) => {
    if (index === selectedColorIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setSelectedColorIndex(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const handleIndicatorClick = (index: number) => {
    if (index !== currentBedIndex && !isTransitioning) {
      setIsTransitioning(true);
      setTransitionDirection(index > currentBedIndex ? 'left' : 'right');
      setTimeout(() => {
        setCurrentBedIndex(index);
        setSelectedColorIndex(0);
        setTransitionDirection(null);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 400);
    }
  };

  return (
    <section id="customize" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark-900 mb-4">{t.customizer.title[lang]}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.customizer.descriptionDesktop[lang]}
            <span className="hidden md:inline">{t.customizer.desktopHint[lang]}</span>
            <span className="md:hidden">{t.customizer.mobileHint[lang]}</span>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="lg:hidden px-6 pt-6 pb-4 bg-white">
            <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">
              {currentBedIndex + 1} / {bedTypes.length}
            </span>
            <h3 className="text-2xl font-serif font-bold mt-1 text-dark-900">{bedTranslation.name[lang]}</h3>
            <p className="text-gray-500 text-sm mt-2">{bedTranslation.description[lang]}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            
            <div 
              className="lg:col-span-2 relative h-[450px] md:h-[550px] overflow-hidden touch-pan-y"
              style={{ backgroundColor: '#f9f9f9' }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              
              <button
                onClick={() => handleBedChange('prev')}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg items-center justify-center transition-all duration-300 hover:scale-110 group"
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-6 h-6 text-dark-900 group-hover:text-gold-500 transition-colors" />
              </button>

              <button
                onClick={() => handleBedChange('next')}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg items-center justify-center transition-all duration-300 hover:scale-110 group"
                disabled={isTransitioning}
              >
                <ChevronRight className="w-6 h-6 text-dark-900 group-hover:text-gold-500 transition-colors" />
              </button>

              <div className="md:hidden absolute bottom-16 left-1/2 -translate-x-1/2 z-30 text-xs text-gray-400 flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                <span>{t.customizer.swipeToBrowse[lang]}</span>
                <ChevronRight className="w-4 h-4" />
              </div>

              <div className="relative w-full h-full flex items-center justify-center p-6 md:p-10 select-none">
                {bedTypes.map((bed, bedIndex) => (
                  bed.colors.map((variant, colorIndex) => (
                    <img 
                      key={`${bed.id}-${variant.name}`}
                      src={variant.image} 
                      alt={`${bed.id} in ${variant.name}`}
                      className={`absolute max-w-[85%] max-h-[85%] object-contain transition-all duration-500 ease-in-out ${
                        currentBedIndex === bedIndex && selectedColorIndex === colorIndex && !isTransitioning
                          ? 'opacity-100 scale-100 translate-x-0' 
                          : currentBedIndex === bedIndex && isTransitioning && transitionDirection
                            ? `opacity-0 ${transitionDirection === 'left' ? '-translate-x-10' : 'translate-x-10'}`
                            : 'opacity-0 scale-95'
                      }`}
                    />
                  ))
                ))}
              </div>

              <div className="hidden lg:block absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md z-30 max-w-[220px]">
                <h3 className="font-serif font-bold text-base text-dark-900">{bedTranslation.name[lang]}</h3>
                <p className="text-xs text-gray-500 flex items-center mt-0.5">
                  <span 
                    className="inline-block w-2.5 h-2.5 rounded-full mr-1.5 flex-shrink-0"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                  {selectedColor.name}
                </p>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
                {bedTypes.map((bed, index) => (
                  <button
                    key={bed.id}
                    onClick={() => handleIndicatorClick(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentBedIndex === index 
                        ? 'w-8 h-3 bg-gold-400' 
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="p-6 lg:p-10 flex flex-col justify-center bg-white lg:border-l border-gray-100">
              <div className="hidden lg:block mb-6 pb-6 border-b border-gray-100">
                <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">
                  {currentBedIndex + 1} / {bedTypes.length}
                </span>
                <h3 className="text-2xl font-serif font-bold mt-1 text-dark-900">{bedTranslation.name[lang]}</h3>
                <p className="text-gray-500 text-sm mt-2">{bedTranslation.description[lang]}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                    {t.customizer.availableColors[lang]} ({currentBed.colors.length})
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {currentBed.colors.map((color, index) => (
                      <button
                        key={color.name}
                        onClick={() => handleColorChange(index)}
                        className={`w-14 h-14 rounded-full shadow-md border-2 transition-all duration-300 transform hover:scale-110 focus:outline-none flex items-center justify-center ${
                          selectedColorIndex === index 
                            ? 'border-dark-900 scale-110 ring-4 ring-offset-2 ring-gold-400/30' 
                            : 'border-white hover:border-gray-300'
                        }`}
                        title={color.name}
                        style={{ backgroundColor: color.hex }}
                      >
                         {selectedColorIndex === index && (
                           <span className="block w-3 h-3 bg-white rounded-full shadow-lg" />
                         )}
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {currentBed.colors.map((color, index) => (
                      <span 
                        key={color.name}
                        onClick={() => handleColorChange(index)}
                        className={`text-xs px-3 py-1.5 rounded-full cursor-pointer transition-all duration-200 ${
                          selectedColorIndex === index 
                            ? 'bg-dark-900 text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {color.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                    {t.customizer.browseStyles[lang]}
                  </label>
                  <div className="flex gap-2">
                    {bedTypes.map((bed, index) => {
                      const bt = t.beds[bed.id as keyof typeof t.beds];
                      return (
                        <button
                          key={bed.id}
                          onClick={() => handleIndicatorClick(index)}
                          className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all duration-200 ${
                            currentBedIndex === index
                              ? 'bg-dark-900 text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {bt.name[lang].split(' ').slice(0, 2).join(' ')}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-6">
                    {t.customizer.footnote[lang]}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
