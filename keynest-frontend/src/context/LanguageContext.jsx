import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('keynest-lang');
    if (savedLang) setCurrentLang(savedLang);
  }, []);

  const switchLanguage = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('keynest-lang', lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLang, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);