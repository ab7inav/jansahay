"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/navigation/LanguageSelector";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Navbar() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-jansahay-surface/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="text-xl font-bold text-jansahay-navy tracking-tight">JANSAHAY<span className="text-jansahay-purple font-medium"> AI</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
            {t('nav.howItWorks') !== 'nav.howItWorks' ? t('nav.howItWorks') : "How it works"}
          </Link>
          <Link href="#services" className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
            {t('nav.servicesNav') !== 'nav.servicesNav' ? t('nav.servicesNav') : "Services"}
          </Link>
          <Link href="#safety" className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
            {t('nav.safety') !== 'nav.safety' ? t('nav.safety') : "Safety"}
          </Link>
          <Link href="#about" className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
            {t('nav.about') !== 'nav.about' ? t('nav.about') : "About"}
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector minimal />
          <ThemeToggle />
          <Link 
            href="/dashboard" className={cn(buttonVariants(), "bg-jansahay-navy hover:bg-jansahay-navy/90 text-white rounded-full px-6")}>
            {t('nav.getStarted') !== 'nav.getStarted' ? t('nav.getStarted') : "Get Started"}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2 z-50">
          <LanguageSelector minimal />
          <ThemeToggle />
          <button 
            className="p-2 -mr-2 text-jansahay-navy hover:bg-jansahay-navy/5 rounded-full transition-colors" 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="#how-it-works" className="text-lg font-medium text-jansahay-navy p-2 hover:bg-jansahay-bg rounded-lg">
              {t('nav.howItWorks') !== 'nav.howItWorks' ? t('nav.howItWorks') : "How it works"}
            </Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="#services" className="text-lg font-medium text-jansahay-navy p-2 hover:bg-jansahay-bg rounded-lg">
              {t('nav.servicesNav') !== 'nav.servicesNav' ? t('nav.servicesNav') : "Services"}
            </Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="#safety" className="text-lg font-medium text-jansahay-navy p-2 hover:bg-jansahay-bg rounded-lg">
              {t('nav.safety') !== 'nav.safety' ? t('nav.safety') : "Safety"}
            </Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="#about" className="text-lg font-medium text-jansahay-navy p-2 hover:bg-jansahay-bg rounded-lg">
              {t('nav.about') !== 'nav.about' ? t('nav.about') : "About"}
            </Link>
            <Link 
              onClick={() => setIsMobileMenuOpen(false)}
              href="/dashboard" 
              className={cn(buttonVariants(), "bg-jansahay-navy hover:bg-jansahay-navy/90 text-white rounded-full px-6 w-full mt-2")}
            >
              {t('nav.getStarted') !== 'nav.getStarted' ? t('nav.getStarted') : "Get Started"}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
