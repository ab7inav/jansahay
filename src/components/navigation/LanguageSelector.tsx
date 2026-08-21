"use client";

import { useLanguage, LanguageCode } from "@/lib/i18n/LanguageProvider";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LANGUAGES: { code: LanguageCode; native: string; en: string }[] = [
  { code: "en", native: "English", en: "English" },
  { code: "hi", native: "हिन्दी", en: "Hindi" },
  { code: "bn", native: "বাংলা", en: "Bengali" },
  { code: "te", native: "తెలుగు", en: "Telugu" },
  { code: "mr", native: "मराठी", en: "Marathi" },
  { code: "ta", native: "தமிழ்", en: "Tamil" },
  { code: "gu", native: "ગુજરાતી", en: "Gujarati" },
  { code: "kn", native: "ಕನ್ನಡ", en: "Kannada" },
  { code: "ml", native: "മലയാളം", en: "Malayalam" },
  { code: "pa", native: "ਪੰਜਾਬੀ", en: "Punjabi" }
];

export function LanguageSelector({ minimal = false }: { minimal?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 p-2 rounded-xl transition-colors hover:bg-jansahay-blue/10 ${
          isOpen ? "bg-jansahay-blue/10 text-jansahay-blue" : "text-jansahay-text-secondary"
        }`}
        aria-label="Change language"
      >
        <Globe className="w-5 h-5" />
        {!minimal && <span className="font-medium">{currentLang.native}</span>}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 w-48 bg-background border border-border rounded-2xl shadow-xl overflow-hidden z-50 py-2"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-jansahay-blue/5 transition-colors flex items-center justify-between ${
                  language === lang.code ? "text-jansahay-blue bg-jansahay-blue/5 font-bold" : "text-jansahay-text"
                }`}
              >
                <span className="text-sm md:text-base">{lang.native}</span>
                {language === lang.code && <span className="w-2 h-2 rounded-full bg-jansahay-blue"></span>}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
