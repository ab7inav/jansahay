"use client";

import { useState, useEffect } from "react";
import { Mic, ArrowRight } from "lucide-react";
import { examplePrompts } from "@/lib/mock-data";

export function ProblemInput() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % examplePrompts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
      <div className="relative flex items-center bg-white rounded-2xl shadow-sm border border-jansahay-blue/20 p-2 focus-within:ring-2 focus-within:ring-jansahay-blue/50 focus-within:border-jansahay-blue transition-all">
        <input
          type="text"
          className="flex-1 bg-transparent px-4 py-3 text-lg outline-none placeholder:text-jansahay-text-secondary/60 text-jansahay-text"
          placeholder={examplePrompts[placeholderIndex]}
          aria-label="Tell us what you're dealing with"
        />
        <button className="bg-jansahay-navy hover:bg-jansahay-navy/90 text-white p-3 rounded-xl transition-colors flex items-center justify-center aspect-square" aria-label="Submit problem">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex items-center justify-center">
        <button className="flex items-center gap-2 text-jansahay-text-secondary hover:text-jansahay-blue transition-colors text-sm font-medium py-2 px-4 rounded-full hover:bg-jansahay-blue/5">
          <Mic className="w-4 h-4" />
          <span>Speak instead</span>
        </button>
      </div>
    </div>
  );
}
