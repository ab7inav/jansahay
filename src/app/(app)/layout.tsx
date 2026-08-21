"use client";

import { DesktopNavigation } from "@/components/navigation/DesktopNavigation";
import { BottomNavigation } from "@/components/navigation/BottomNavigation";
import { SaarthiProactive } from "@/components/saarthi/SaarthiProactive";
import { WifiOff } from "lucide-react";
import { useState, useEffect } from "react";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // Check initial state
    if (typeof window !== 'undefined') {
      setIsOffline(!navigator.onLine);
    }

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-jansahay-bg pb-16 md:pb-0">
      {isOffline && (
        <div className="bg-jansahay-red text-white px-4 py-2 flex items-center justify-center gap-2 text-sm font-semibold sticky top-0 z-[60]">
          <WifiOff className="w-4 h-4" />
          You appear to be offline. Some features may be unavailable.
        </div>
      )}
      <DesktopNavigation />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-6 max-w-5xl">
        {children}
      </main>

      <BottomNavigation />
      <SaarthiProactive />
    </div>
  );
}
