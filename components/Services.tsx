import React from 'react';
import { BedDouble, DoorOpen, Sofa, Hammer } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const serviceIcons = [
  <BedDouble className="w-10 h-10 text-gold-400" />,
  <DoorOpen className="w-10 h-10 text-gold-400" />,
  <Hammer className="w-10 h-10 text-gold-400" />,
  <Sofa className="w-10 h-10 text-gold-400" />,
];

export const Services: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-2 block">{t.services.badge[lang]}</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-900">
            {t.services.title[lang]}
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto font-light">
            {t.services.subtitle[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              <div className="flex justify-center mb-5">
                <div className="p-4 bg-gray-50 rounded-lg">
                  {serviceIcons[idx]}
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-3 text-center">{service.title[lang]}</h3>
              <p className="text-sm text-gray-500 leading-relaxed text-center">{service.description[lang]}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
