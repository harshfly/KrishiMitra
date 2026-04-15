import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Load initial language from localStorage or default to 'en'
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem('krishimitra_lang') || 'en';
  });

  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem('krishimitra_lang', newLang);
  };

  const t = (key) => {
    // Attempt to get the string in the current language, fallback to English, or print the key missing.
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
