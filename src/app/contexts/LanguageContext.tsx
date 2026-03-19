import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'KR';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (en: string, kr: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'KR' : 'EN'));
  };

  const t = React.useCallback((en: string, kr: string) => {
    return language === 'EN' ? en : kr;
  }, [language]);

  const value = React.useMemo(() => ({
    language,
    toggleLanguage,
    t
  }), [language, toggleLanguage, t]);

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
