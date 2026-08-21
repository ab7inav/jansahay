"use client";

import { useState } from "react";
import { Mic, Image as ImageIcon, Keyboard, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function ProblemInput() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/ask?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 relative z-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
      
      {/* 3 Massive Interaction Methods */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <button onClick={() => router.push('/ask?mode=voice')} className="bg-white hover:bg-jansahay-blue/5 border-2 border-border hover:border-jansahay-blue/50 p-6 rounded-3xl flex flex-col items-center text-center transition-all shadow-sm group">
          <div className="w-16 h-16 bg-jansahay-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Mic className="w-8 h-8 text-jansahay-blue" />
          </div>
          <h3 className="font-bold text-jansahay-navy text-xl mb-1">{t('input.btnVoice') !== 'input.btnVoice' ? t('input.btnVoice') : 'Explain by voice'}</h3>
          <p className="text-sm text-jansahay-text-secondary">{t('input.subVoice') !== 'input.subVoice' ? t('input.subVoice') : 'Tap to speak'}</p>
        </button>

        <button onClick={() => router.push('/ask?mode=image')} className="bg-white hover:bg-jansahay-purple/5 border-2 border-border hover:border-jansahay-purple/50 p-6 rounded-3xl flex flex-col items-center text-center transition-all shadow-sm group">
          <div className="w-16 h-16 bg-jansahay-purple/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <ImageIcon className="w-8 h-8 text-jansahay-purple" />
          </div>
          <h3 className="font-bold text-jansahay-navy text-xl mb-1">{t('input.btnDoc') !== 'input.btnDoc' ? t('input.btnDoc') : 'Show us a document'}</h3>
          <p className="text-sm text-jansahay-text-secondary">{t('input.subDoc') !== 'input.subDoc' ? t('input.subDoc') : 'Upload an image'}</p>
        </button>

        <button onClick={() => {
          const input = document.getElementById('main-search-input');
          if (input) input.focus();
        }} className="bg-white hover:bg-jansahay-green/5 border-2 border-border hover:border-jansahay-green/50 p-6 rounded-3xl flex flex-col items-center text-center transition-all shadow-sm group">
          <div className="w-16 h-16 bg-jansahay-green/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Keyboard className="w-8 h-8 text-jansahay-green" />
          </div>
          <h3 className="font-bold text-jansahay-navy text-xl mb-1">{t('input.btnText') !== 'input.btnText' ? t('input.btnText') : 'Describe your problem'}</h3>
          <p className="text-sm text-jansahay-text-secondary">{t('input.subText') !== 'input.subText' ? t('input.subText') : 'Type it out'}</p>
        </button>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="relative bg-white p-2 rounded-2xl md:rounded-full shadow-lg border border-gray-200 flex flex-col sm:flex-row items-center transition-all focus-within:ring-4 focus-within:ring-jansahay-blue/20"
      >
        <div className="flex-1 w-full relative">
          <input
            id="main-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('input.placeholder') !== 'input.placeholder' ? (t('input.placeholder') as string) : "Tell us what problem you are facing..."}
            className="w-full py-4 px-6 bg-transparent text-lg text-jansahay-navy placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        
        <button
          type="submit"
          disabled={!query.trim()}
          className={cn(
            "mt-2 sm:mt-0 w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl md:rounded-full font-bold text-white transition-all",
            query.trim() ? "bg-jansahay-blue hover:bg-jansahay-blue/90" : "bg-gray-300 cursor-not-allowed"
          )}
        >
          <span>{t('input.askBtn') !== 'input.askBtn' ? t('input.askBtn') : 'Ask Saarthi'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
