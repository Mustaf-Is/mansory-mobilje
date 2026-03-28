import React from 'react';
import { Award, Truck, PenTool, Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const featureIcons = [
  <Award className="w-8 h-8 text-gold-400" />,
  <PenTool className="w-8 h-8 text-gold-400" />,
  <Truck className="w-8 h-8 text-gold-400" />,
  <Clock className="w-8 h-8 text-gold-400" />,
];

export const About: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-2 block">{t.about.badge[lang]}</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-900 mb-6">
              {t.about.title[lang]}
            </h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                {t.about.paragraph1[lang]}
              </p>
              <p className="mb-4">
                {t.about.paragraph2[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {t.about.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                    {featureIcons[idx]}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-900">{feature.title[lang]}</h4>
                    <p className="text-sm text-gray-500 mt-1">{feature.description[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-100 rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-24 bg-gray-50 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2027&auto=format&fit=crop" 
              alt="Workshop Craftsman" 
              className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-6 left-0 sm:left-[-20px] bg-white p-4 sm:p-6 shadow-xl rounded-r-lg border-l-4 border-gold-400 max-w-[250px] sm:max-w-xs">
              <p className="font-serif italic text-xl text-dark-900">{t.about.quote[lang]}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
