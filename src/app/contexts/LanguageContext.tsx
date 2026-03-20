import React, { createContext, useContext, useState, ReactNode } from 'react';
import { jaTranslations } from './jaTranslations';
import { zhTranslations } from './zhTranslations';

export type Language = 'EN' | 'KR' | 'KO' | 'JA' | 'ZH';

export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (en: string, kr: string, ja?: string, zh?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGES: Language[] = ['EN', 'KR', 'JA', 'ZH'];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN');

  const toggleLanguage = () => {
    setLanguageState((prev) => {
      const normalizedPrev = prev === 'KO' ? 'KR' : prev;
      const currentIndex = LANGUAGES.indexOf(normalizedPrev);
      const nextIndex = (currentIndex + 1) % LANGUAGES.length;
      return LANGUAGES[nextIndex];
    });
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = React.useCallback((en: string, kr: string, ja?: string, zh?: string) => {
    if (language === 'KR' || language === 'KO') return kr;
    if (language === 'JA') {
      if (ja) return ja;
      return jaTranslations[en] || en;
    }
    if (language === 'ZH') {
      if (zh) return zh;
      return zhTranslations[en] || en;
    }
    return en;
  }, [language]);

  const value = React.useMemo(() => ({
    language,
    toggleLanguage,
    setLanguage,
    t
  }), [language, toggleLanguage, t]); // setLanguage is stable

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
