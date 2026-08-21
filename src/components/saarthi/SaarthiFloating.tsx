"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSaarthi } from "./SaarthiProvider";
import { SaarthiSVG } from "./SaarthiSVG";
import { MessageSquare, FileText, AlertTriangle, HelpCircle, X, Navigation } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SaarthiFloating() {
  const { state, message, clearMessage, guideMode, setIsDragging } = useSaarthi();
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Reset expansion on page change
  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);

  if (!guideMode) return null;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && message) clearMessage();
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]" ref={containerRef}>
      <motion.div
        drag
        dragConstraints={containerRef}
        dragElastic={0.1}
        dragMomentum={false}
        onDragStart={() => {
          setIsExpanded(false);
          setIsDragging(true);
        }}
        onDragEnd={() => setIsDragging(false)}
        className="absolute bottom-24 right-6 md:bottom-10 md:right-10 flex flex-col items-end pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        <AnimatePresence>
          {message && !isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mb-4 bg-white dark:bg-slate-800 text-jansahay-navy dark:text-white px-5 py-3 rounded-2xl shadow-xl border border-border max-w-[250px] text-sm font-medium relative"
            >
              {message}
              <div className="absolute -bottom-2 right-12 w-4 h-4 bg-white dark:bg-slate-800 border-b border-r border-border transform rotate-45"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-24 right-0 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-border p-4 w-64 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="font-bold text-jansahay-navy dark:text-white">How can I help?</span>
                <button onClick={() => setIsExpanded(false)} className="p-1 text-gray-400 hover:text-jansahay-navy">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <MenuAction href="/ask" icon={MessageSquare} label="Ask" color="text-jansahay-blue" bg="bg-jansahay-blue/10" />
                <MenuAction href="/documents" icon={FileText} label="Docs" color="text-jansahay-purple" bg="bg-jansahay-purple/10" />
                <MenuAction href="/history" icon={Navigation} label="Journey" color="text-jansahay-green" bg="bg-jansahay-green/10" />
                <MenuAction href="/emergency" icon={AlertTriangle} label="Emergency" color="text-white" bg="bg-jansahay-red" hover="hover:bg-jansahay-red/90" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={handleToggle}
          className="relative group focus:outline-none focus:ring-4 focus:ring-jansahay-blue/30 rounded-full"
          aria-label="Toggle Saarthi Guide"
        >
          {/* Subtle pulse behind mascot */}
          <div className={`absolute inset-2 rounded-full -z-10 animate-ping opacity-20 ${state === 'emergency' ? 'bg-jansahay-red' : 'bg-jansahay-blue'}`}></div>
          
          <SaarthiSVG size={80} className="drop-shadow-2xl transition-transform hover:scale-105" />
        </button>
      </motion.div>
    </div>
  );
}

function MenuAction({ href, icon: Icon, label, color, bg, hover }: any) {
  return (
    <Link href={href} className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all active:scale-95 ${bg} ${hover || "hover:brightness-95"}`}>
      <Icon className={`w-6 h-6 mb-2 ${color}`} />
      <span className={`text-xs font-bold ${color === 'text-white' ? 'text-white' : 'text-jansahay-navy dark:text-white'}`}>{label}</span>
    </Link>
  );
}
