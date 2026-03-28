import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const Contact: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer id="contact" className="bg-dark-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
             <div className="text-3xl font-serif font-bold tracking-wider mb-6">
              MANSORY
              <span className="text-gold-400"> MOBILJE</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              {t.contact.brandDescription[lang]}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-400">{t.contact.quickLinks[lang]}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t.contact.home[lang]}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t.contact.aboutUs[lang]}</a></li>
              <li><a href="#customize" className="hover:text-white transition-colors">{t.contact.customizer[lang]}</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">{t.contact.ourWork[lang]}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-400">{t.contact.contactUs[lang]}</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-gold-400" />
                <div className="flex flex-col">
                  <span>+383 45 297 275</span>
                  <span>+383 48 297 275</span>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gold-400" />
                <a href="mailto:mansorymobilje@gmail.com" className="hover:text-white">mansorymobilje@gmail.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-gold-400" />
                <span>Ferizaj, Kosovë</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mansory Mobilje. {t.contact.rights[lang]}</p>
          <p className="mt-2 md:mt-0">{t.contact.tagline[lang]}</p>
        </div>
      </div>
    </footer>
  );
};
