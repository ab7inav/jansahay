"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SaarthiRelevanceEngine, RelevanceResult } from "@/lib/ai/relevance-engine";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SaarthiProactive() {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();
  
  const [relevanceResult, setRelevanceResult] = useState<RelevanceResult | null>(null);
  const [uiState, setUiState] = useState<"hidden" | "bubble" | "card" | "explaining">("hidden");
  
  // Simulated relevance check
  useEffect(() => {
    // Only show on dashboard or documents for now to avoid spamming the landing page
    if (!pathname.includes("dashboard") && !pathname.includes("documents")) {
      setUiState("hidden");
      return;
    }

    const checkUpdates = () => {
      // Mock user tags
      const userTags = ["student"];
      const match = SaarthiRelevanceEngine.getMostRelevantUpdate(pathname, userTags);
      
      if (match) {
        setRelevanceResult(match);
        setUiState("bubble");
      }
    };

    // Delay slightly to not interrupt immediate page load
    const timer = setTimeout(checkUpdates, 2500);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (uiState === "hidden" || !relevanceResult) return null;

  const { update, recommendedAction } = relevanceResult;

  const handleExplain = () => {
    setUiState("explaining");
    // Simulate explanation delay
    setTimeout(() => {
      router.push(`/ask?q=${encodeURIComponent(`Explain this update to me: ${t(update.title as any)}`)}`);
      setUiState("hidden");
    }, 2000);
  };

  const handleLater = () => {
    setUiState("hidden");
    // In a real app, save to localStorage to respect cooldowns
  };

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 z-50 flex flex-col items-end gap-3 max-w-sm">
      <AnimatePresence mode="wait">
        
        {/* Bubble State */}
        {uiState === "bubble" && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="bg-white rounded-2xl rounded-br-none shadow-xl border border-jansahay-navy/10 p-4 cursor-pointer hover:shadow-2xl transition-all"
            onClick={() => setUiState("card")}
          >
            <p className="text-sm font-medium text-jansahay-navy flex items-center gap-2">
              <span className="text-xl">
                {update.emotion === "curious" && "😊"}
                {update.emotion === "concerned" && "😟"}
                {update.emotion === "informative" && "🙂"}
              </span>
              {t("proactive.hey")}
            </p>
          </motion.div>
        )}

        {/* Card State */}
        {uiState === "card" && (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="bg-white rounded-2xl rounded-br-none shadow-2xl border border-jansahay-navy/10 overflow-hidden flex flex-col"
          >
            <div className={cn(
              "px-4 py-3 flex justify-between items-center text-white",
              update.urgency === "important" ? "bg-jansahay-blue" : "bg-jansahay-navy"
            )}>
              <span className="text-xs font-bold tracking-wider uppercase flex items-center gap-1">
                {t(`proactive.cat_${update.category}`) || update.category} Update
              </span>
              <div className="flex items-center gap-2">
                <button className="text-white/80 hover:text-white transition-colors" aria-label="Listen">
                  <Volume2 className="w-4 h-4" />
                </button>
                <button onClick={handleLater} className="text-white/80 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="p-5">
              <h4 className="font-bold text-jansahay-navy mb-2">{t(update.title as any)}</h4>
              <p className="text-sm text-jansahay-text-secondary mb-4 leading-relaxed">
                {t(update.summary as any)}
              </p>
              
              <div className="flex flex-col gap-2">
                <button 
                  onClick={handleExplain}
                  className="w-full bg-jansahay-navy hover:bg-jansahay-navy/90 text-white font-medium py-2.5 rounded-lg flex justify-center items-center gap-2 transition-colors"
                >
                  {t("proactive.explain")}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={handleLater}
                  className="w-full bg-jansahay-bg text-jansahay-text-secondary hover:text-jansahay-navy font-medium py-2.5 rounded-lg transition-colors"
                >
                  {t("proactive.later")}
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-border flex justify-between items-center text-xs text-gray-400">
                <span>Source: {update.source}</span>
                <span className="flex items-center gap-1 hover:text-jansahay-blue cursor-pointer">
                  {t("proactive.source")} <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Explaining State */}
        {uiState === "explaining" && (
          <motion.div
            key="explaining"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-jansahay-navy text-white rounded-2xl rounded-br-none shadow-2xl p-4 flex items-center gap-3"
          >
            <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            <p className="text-sm font-medium">{t("proactive.thinking")}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Saarthi Avatar */}
      <motion.div 
        className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden relative cursor-pointer"
        animate={{ 
          y: [0, -5, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut" 
        }}
        onClick={() => {
          if (uiState === "bubble") setUiState("card");
          else if (uiState === "card") setUiState("bubble");
        }}
      >
        <Image 
          src="/saarthi.jpg" 
          alt="Saarthi"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
