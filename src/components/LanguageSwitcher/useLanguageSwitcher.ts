import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AcceptedLanguages } from '../../locales/Language';

export type LanguageSwitcherProps = {
  className?: string;
};

export function useLanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('language') || AcceptedLanguages.pt
  );

  function changeLanguage(newLang: AcceptedLanguages) {
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    setSelectedLanguage(newLang);
    localStorage.setItem('language', newLang);
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'pt';
    i18n.changeLanguage(savedLanguage);
    document.documentElement.lang = savedLanguage;
    setSelectedLanguage(savedLanguage);
  }, [i18n]);

  return {
    language: {
      current: selectedLanguage,
      change: changeLanguage,
    },
  };
}
