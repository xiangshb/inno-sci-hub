import { create } from 'zustand';
import { Language, translations } from './i18n';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  language: (typeof window !== 'undefined' && localStorage.getItem('language') as Language) || 'en',
  
  setLanguage: (lang: Language) => {
    set({ language: lang });
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  },
  
  t: (path: string) => {
    const { language } = get();
    const keys = path.split('.');
    let value: any = translations[language];
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return path; // Return the path if translation not found
      }
    }
    
    return typeof value === 'string' ? value : path;
  },
}));
