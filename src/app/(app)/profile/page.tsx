"use client";

import { User, Globe, Bell, Shield, HelpCircle, LogOut, ChevronRight, Settings2, Accessibility } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function ProfilePage() {
  const [lang, setLang] = useState("English");
  const { t } = useLanguage();

  const profileLinks = [
    { icon: Settings2, label: t('profile.settings'), href: "/settings" },
    { icon: Shield, label: t('profile.security'), href: "/security", value: t('profile.protected') },
    { icon: Bell, label: t('profile.notifications'), href: "/notifications", value: t('profile.enabled') },
    { icon: Accessibility, label: t('profile.accessibility'), href: "/accessibility" },
    { icon: HelpCircle, label: t('profile.help'), href: "/help" },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500 pb-12">
      <h1 className="text-3xl font-bold text-jansahay-navy tracking-tight mb-6">{t('profile.title')}</h1>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-border flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-jansahay-navy rounded-full flex items-center justify-center text-white text-3xl font-bold shrink-0">
            A
          </div>
          <div>
            <h2 className="text-2xl font-bold text-jansahay-navy">Aarav Patel</h2>
            <p className="text-jansahay-text-secondary">aarav@example.com</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
          {/* Quick Language Switcher */}
          <div className="bg-jansahay-bg rounded-xl p-2 flex border border-border flex-1 md:flex-none">
            {["English", "हिन्दी", "मराठी"].map(l => (
              <button 
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex-1 md:flex-none ${
                  lang === l ? "bg-white text-jansahay-navy shadow-sm" : "text-jansahay-text-secondary hover:text-jansahay-navy"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-border overflow-hidden">
        {profileLinks.map((link, i) => (
          <Link 
            key={link.label}
            href={link.href}
            className={`w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors ${
              i !== profileLinks.length - 1 ? "border-b border-border/50" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-jansahay-bg flex items-center justify-center text-jansahay-navy">
                <link.icon className="w-5 h-5" />
              </div>
              <span className="font-bold text-jansahay-navy">{link.label}</span>
            </div>
            
            <div className="flex items-center gap-3">
              {link.value && (
                <span className="text-sm font-semibold text-jansahay-text-secondary hidden sm:inline-block">
                  {link.value}
                </span>
              )}
              <ChevronRight className="w-5 h-5 text-jansahay-text-secondary/50" />
            </div>
          </Link>
        ))}
      </div>

      <div className="pt-4 flex flex-col gap-4">
        <Link href="/about" className="text-center text-sm font-semibold text-jansahay-blue hover:underline">
          {t('profile.about')}
        </Link>
        
        <button className="w-full bg-white rounded-2xl shadow-sm border border-border p-5 flex items-center justify-center gap-2 text-jansahay-red hover:bg-jansahay-red/5 transition-colors font-bold mt-2">
          <LogOut className="w-5 h-5" />
          <span>{t('profile.logout')}</span>
        </button>
      </div>
    </div>
  );
}
