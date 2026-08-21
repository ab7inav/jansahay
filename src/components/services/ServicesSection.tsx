"use client";

import { serviceCategories } from "@/lib/mock-data";
import { ServiceCard } from "@/components/service-card/ServiceCard";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function ServicesSection() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-jansahay-bg" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-jansahay-navy mb-4 tracking-tight">
            {t('landing.services')}
          </h2>
          <p className="text-lg text-jansahay-text-secondary">
            {t('landing.servicesSub') !== 'landing.servicesSub' ? t('landing.servicesSub') : "Select a category or simply tell us your problem. We'll guide you through the process step-by-step."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceCategories.map((service) => {
            const tk = `services.${service.id}Title`;
            const dk = `services.${service.id}Desc`;
            return (
              <ServiceCard 
                key={service.id}
                title={t(tk as any) !== tk ? t(tk as any) : service.title}
                description={t(dk as any) !== dk ? t(dk as any) : service.description}
                icon={service.icon}
                colorClass={service.color}
                urgent={service.urgent}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
