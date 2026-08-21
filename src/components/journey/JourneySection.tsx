"use client";

import { journeySteps } from "@/lib/mock-data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function JourneySection() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-jansahay-navy mb-4 tracking-tight">
            {t('landing.journey')}
          </h2>
          <p className="text-lg text-jansahay-text-secondary">
            {t('landing.journeySub') !== 'landing.journeySub' ? t('landing.journeySub') : "A simple process designed to get you from confusion to clarity."}
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {journeySteps.map((step, index) => {
              const tk = `journeySteps.${step.id}Title`;
              const dk = `journeySteps.${step.id}Desc`;
              return (
                <div key={step.id} className="relative flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-jansahay-bg flex items-center justify-center border-4 border-white shadow-sm mb-6 relative">
                    <span className="text-3xl font-bold text-jansahay-blue/30 absolute">{step.number}</span>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm z-10 text-jansahay-navy font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-jansahay-navy mb-2">
                    {t(tk as any) !== tk ? t(tk as any) : step.title}
                  </h3>
                  <p className="text-jansahay-text-secondary leading-relaxed max-w-[200px]">
                    {t(dk as any) !== dk ? t(dk as any) : step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
