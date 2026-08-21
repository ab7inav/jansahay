"use client";

import { Mic, Type, Languages, Smile } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const features = [
  { id: "f1", icon: Type, title: "Text", desc: "Type naturally" },
  { id: "f2", icon: Mic, title: "Voice", desc: "Speak directly" },
  { id: "f3", icon: Smile, title: "Simple language", desc: "No jargon" },
  { id: "f4", icon: Languages, title: "Multilingual", desc: "Local language support" }
];

export function AccessibilitySection() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-jansahay-navy text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jansahay-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
              {t('access.title') !== 'access.title' ? t('access.title') : "Help in the way you're comfortable with."}
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
              {t('access.subtitle') !== 'access.subtitle' ? t('access.subtitle') : "Technology shouldn't be a barrier. JANSAHAY is designed to be accessible, understandable, and simple for everyone."}
            </p>
          </div>
          
            <div className="flex-1 w-full max-w-lg">
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => {
                const tk = `access.${feature.id}t`;
                const dk = `access.${feature.id}d`;
                return (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
                    <feature.icon className="w-8 h-8 text-jansahay-cyan mb-4" />
                    <h3 className="font-semibold text-lg mb-1">{t(tk as any) !== tk ? t(tk as any) : feature.title}</h3>
                    <p className="text-sm text-white/60">{t(dk as any) !== dk ? t(dk as any) : feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
