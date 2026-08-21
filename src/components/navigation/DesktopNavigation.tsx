"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlertTriangle, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function DesktopNavigation() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), href: "/dashboard" },
    { name: t('nav.ask'), href: "/ask" },
    { name: t('nav.docs'), href: "/documents" },
    { name: t('nav.history'), href: "/history" },
  ];

  return (
    <nav className="hidden md:flex sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="text-xl font-bold text-jansahay-navy tracking-tight">JANSAHAY<span className="text-jansahay-purple font-medium"> AI</span></span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive ? "text-jansahay-blue" : "text-jansahay-text-secondary hover:text-jansahay-navy"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/emergency" className="flex items-center gap-2 text-sm font-semibold text-jansahay-red hover:bg-jansahay-red/5 px-3 py-2 rounded-full transition-colors">
            <AlertTriangle className="w-4 h-4" />
            <span>{t('nav.emergency')}</span>
          </Link>
          <div className="w-px h-6 bg-border mx-2"></div>
          <LanguageSelector minimal />
          <ThemeToggle />
          <Link href="/profile" className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy">
            {t('nav.profile')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
