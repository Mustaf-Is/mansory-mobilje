import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Language, translations } from './translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      return localStorage.getItem('lang') === 'en' ? 'en' : 'sq';
    } catch {
      return 'sq';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'sq'
      ? 'Mansory Mobilje | Mobilje me porosi'
      : 'Mansory Mobilje | Custom Furniture';

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = lang === 'sq'
        ? 'Mobilje me porosi, të dizajnuara dhe prodhuara nga Mansory Mobilje në Ferizaj, Kosovë.'
        : 'Custom furniture designed and made by Mansory Mobilje in Ferizaj, Kosovo.';
    }
  }, [lang]);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('lang', newLang);
    } catch {
      // The selected language still works for this visit when storage is unavailable.
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
