"use client";

import { ShieldCheck, LockKeyhole, FileLock2, EyeOff } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const securityFeatures = [
  { id: "f1", icon: LockKeyhole, title: "Encrypted information" },
  { id: "f2", icon: ShieldCheck, title: "Secure authentication" },
  { id: "f3", icon: FileLock2, title: "Document integrity" },
  { id: "f4", icon: EyeOff, title: "Privacy-first design" }
];

export function SecuritySection() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-xl mx-auto">
            <div className="relative aspect-square w-full max-w-[400px] mx-auto bg-jansahay-bg rounded-full flex items-center justify-center p-12">
              <div className="absolute inset-0 rounded-full border border-jansahay-navy/5 m-8"></div>
              <div className="absolute inset-0 rounded-full border border-jansahay-navy/5 m-16"></div>
              <div className="bg-white shadow-xl rounded-2xl p-6 relative z-10 w-full max-w-xs flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-jansahay-green/10 text-jansahay-green rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg text-jansahay-navy mb-1">{t('sec.protected') !== 'sec.protected' ? t('sec.protected') : "Protected"}</h3>
                <p className="text-sm text-jansahay-text-secondary">{t('sec.secure') !== 'sec.secure' ? t('sec.secure') : "Your data is secure"}</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-jansahay-navy mb-6 tracking-tight">
              {t('sec.title') !== 'sec.title' ? t('sec.title') : "Your information matters."}
            </h2>
            <p className="text-lg text-jansahay-text-secondary mb-8 max-w-lg">
              {t('sec.subtitle') !== 'sec.subtitle' ? t('sec.subtitle') : "We treat your personal information, documents, and problems with the utmost confidentiality and security."}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {securityFeatures.map((feature, i) => {
                const tk = `sec.${feature.id}`;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-jansahay-bg flex items-center justify-center text-jansahay-navy">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-jansahay-text">{t(tk as any) !== tk ? t(tk as any) : feature.title}</span>
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
