"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessageSquare, FileText, User, AlertTriangle, FolderOpen, MessageSquareHeart, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function BottomNavigation() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), href: "/dashboard", icon: Home },
    { name: t('nav.docs'), href: "/documents", icon: FolderOpen },
    { name: t('nav.ask'), href: "/ask", icon: MessageSquareHeart },
    { name: t('nav.history'), href: "/history", icon: Clock },
    { name: t('nav.profile'), href: "/profile", icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border pb-safe z-50">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
                isActive ? "text-jansahay-blue" : "text-jansahay-text-secondary hover:text-jansahay-navy"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "stroke-[2.5px]" : "stroke-2")} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
      
      {/* Emergency Floating Button (Visible everywhere on mobile except maybe if we hide it conditionally, but requirements say "remain visually accessible without destroying normal nav") */}
      <div className="absolute -top-14 right-4">
        <button className="bg-jansahay-red text-white p-3 rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform">
          <AlertTriangle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
