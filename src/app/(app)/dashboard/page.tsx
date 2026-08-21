"use client";

import { useState } from "react";
import { Mic, Paperclip, ArrowRight } from "lucide-react";
import { activeJourneys } from "@/lib/mock-data/journeys";
import { serviceCategories } from "@/lib/mock-data";
import { ContinueJourney } from "@/components/dashboard/ContinueJourney";
import { ServiceCard } from "@/components/service-card/ServiceCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function CitizenHome() {
  const router = useRouter();
  const { t } = useLanguage();
  const [problem, setProblem] = useState("");
  const activeJourney = activeJourneys[0]; // Just showing the most relevant one

  const popularServices = serviceCategories.filter(c => 
    ["gov", "docs", "legal", "police", "health", "emergency"].includes(c.id)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (problem.trim()) {
      router.push(`/ask?q=${encodeURIComponent(problem)}`);
    }
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto animate-in fade-in duration-500">
      
      {/* 1. Primary Action Area */}
      <section className="mt-4 md:mt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-jansahay-navy mb-6 tracking-tight text-center md:text-left">
          {t('dashboard.title')}
        </h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl md:rounded-3xl shadow-sm border border-border p-3 flex flex-col gap-3 focus-within:ring-2 focus-within:ring-jansahay-blue/50 focus-within:border-jansahay-blue transition-all">
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Tell us what's wrong..."
            className="w-full bg-transparent px-3 py-3 md:py-4 text-lg outline-none placeholder:text-jansahay-text-secondary/60 text-jansahay-text resize-none min-h-[100px]"
            aria-label="Describe your problem"
          />
          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <div className="flex gap-2">
              <button type="button" className="p-2 text-jansahay-text-secondary hover:text-jansahay-blue hover:bg-jansahay-blue/5 rounded-full transition-colors flex items-center gap-1.5" aria-label="Use voice">
                <Mic className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:block">Speak</span>
              </button>
              <button type="button" className="p-2 text-jansahay-text-secondary hover:text-jansahay-blue hover:bg-jansahay-blue/5 rounded-full transition-colors flex items-center gap-1.5" aria-label="Upload document">
                <Paperclip className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:block">Upload</span>
              </button>
            </div>
            
            <button 
              type="submit" 
              disabled={!problem.trim()}
              className="bg-jansahay-navy hover:bg-jansahay-navy/90 text-white py-2 px-5 rounded-xl transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              <span className="hidden sm:block">Ask JANSAHAY</span>
              <span className="sm:hidden">Ask</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </section>

      {/* 2. Active Journey */}
      {activeJourney && (
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px bg-border flex-1"></div>
            <h2 className="text-xs font-bold text-jansahay-text-secondary uppercase tracking-wider">
              Continue where you left off
            </h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
          <ContinueJourney journey={activeJourney} />
        </section>
      )}

      {/* 3. Popular Help */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-jansahay-navy tracking-tight">Popular Help</h2>
          <Link href="/get-help" className="text-sm font-medium text-jansahay-blue hover:underline">
            Not sure?
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {popularServices.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              colorClass={service.color}
              urgent={service.urgent}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
