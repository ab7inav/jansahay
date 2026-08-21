"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type LanguageCode = "en" | "hi" | "bn" | "te" | "ta" | "mr" | "gu" | "kn" | "ml" | "pa";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
  isLoaded: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_KEY = "jansahay_language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");
  const [dictionary, setDictionary] = useState<Record<string, any>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(LANGUAGE_KEY) as LanguageCode;
    if (saved) {
      setLanguageState(saved);
    }
  }, []);

  // Load dictionary dynamically when language changes
  useEffect(() => {
    setIsLoaded(false);
    import(`../i18n/dictionaries/${language}.json`)
      .then((module) => {
        setDictionary(module.default);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(`Failed to load dictionary for ${language}:`, err);
        // Fallback to English
        import(`../i18n/dictionaries/en.json`).then((m) => {
          setDictionary(m.default);
          setIsLoaded(true);
        });
      });
  }, [language]);

  const setLanguage = useCallback((lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, []);

  // Simple dot-notation resolver: t('saarthi.hello')
  const t = useCallback(
    (key: string): string => {
      if (!isLoaded) return "";
      
      const keys = key.split(".");
      let value: any = dictionary;
      
      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k];
        } else {
          console.warn(`Translation missing for key: ${key} in lang: ${language}`);
          return key; // Fallback to returning the key itself
        }
      }
      return typeof value === "string" ? value : key;
    },
    [dictionary, isLoaded, language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
