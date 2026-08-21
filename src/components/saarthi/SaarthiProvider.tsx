"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { SaarthiState, SaarthiContextType, SaarthiGesture } from "@/types/saarthi";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const SaarthiContext = createContext<SaarthiContextType | undefined>(undefined);

export function SaarthiProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<SaarthiState>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [guideMode, setGuideMode] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [gesture, setGesture] = useState<SaarthiGesture>("none");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  // Reset state on navigation
  useEffect(() => {
    if (pathname === "/emergency") {
      setState("emergency");
      say(t("saarthi.emergency"), 5000);
      setGesture("none");
    } else if (pathname === "/saarthi-playground") {
      setState("idle");
    } else if (pathname === "/ask") {
      setState("idle");
    } else {
      if (state === "emergency") {
        setState("idle");
      }
    }
  }, [pathname]);

  const say = useCallback((msg: string, duration?: number) => {
    setMessage(msg);
    if (duration) {
      setTimeout(() => {
        setMessage(null);
      }, duration);
    }
  }, []);

  const clearMessage = useCallback(() => setMessage(null), []);

  const guideToElement = useCallback((selector: string, customMessage?: string) => {
    if (!guideMode) return;
    
    // Slight delay to allow DOM to render if navigating/mounting
    setTimeout(() => {
      const el = document.querySelector(selector);
      if (!el) {
        console.warn(`Saarthi: Could not find target element ${selector}`);
        return;
      }

      // 1. Highlight the target
      el.classList.add("ring-4", "ring-jansahay-blue", "ring-offset-4", "transition-all", "duration-500");
      setTimeout(() => {
        el.classList.remove("ring-4", "ring-jansahay-blue", "ring-offset-4");
      }, 3000);

      // 2. Calculate direction from mascot (bottom-right of screen usually)
      const rect = el.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Rough estimation based on standard floating position
      let calculatedGesture: SaarthiGesture = "point_left";
      
      if (rect.top < viewportHeight / 2) {
        calculatedGesture = "point_up";
      } else if (rect.left > viewportWidth / 2) {
        calculatedGesture = "point_down"; // If it's near the mascot
      } else {
        calculatedGesture = "point_left";
      }

      setState("guiding");
      setGesture(calculatedGesture);
      if (customMessage) say(customMessage, 4000);

      // Reset gesture after 3 seconds
      setTimeout(() => {
        setGesture("none");
        setState("idle");
      }, 3000);

    }, 100);
  }, [guideMode, say]);

  return (
    <SaarthiContext.Provider
      value={{
        state,
        setState,
        message,
        say,
        clearMessage,
        guideMode,
        setGuideMode,
        isOpen,
        setIsOpen,
        gesture,
        setGesture,
        guideToElement,
        isDragging,
        setIsDragging
      }}
    >
      {children}
    </SaarthiContext.Provider>
  );
}

export function useSaarthi() {
  const context = useContext(SaarthiContext);
  if (context === undefined) {
    throw new Error("useSaarthi must be used within a SaarthiProvider");
  }
  return context;
}
