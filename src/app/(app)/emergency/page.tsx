"use client";

import { useState } from "react";
import { AlertTriangle, Phone, ShieldAlert, Crosshair, MapPin, Activity, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function EmergencyPage() {
  const { t } = useLanguage();
  const [stage, setStage] = useState<"danger-check" | "category" | "guidance">("danger-check");
  const [category, setCategory] = useState<string | null>(null);

  const categories = [
    { id: "medical", label: "Medical", icon: Activity },
    { id: "fire", label: "Fire", icon: ShieldAlert },
    { id: "accident", label: "Accident", icon: Crosshair },
    { id: "crime", label: "Crime", icon: ShieldCheck },
    { id: "disaster", label: "Natural Disaster", icon: MapPin },
    { id: "other", label: "Other", icon: AlertTriangle },
  ];

  if (stage === "danger-check") {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center max-w-2xl mx-auto animate-in fade-in duration-300">
        <div className="w-24 h-24 bg-jansahay-red/10 text-jansahay-red rounded-full flex items-center justify-center mb-8 animate-pulse">
          <AlertTriangle className="w-12 h-12" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-jansahay-navy text-center mb-10">
          {t('emergency.title')}
        </h1>
        
        <div className="flex w-full flex-col sm:flex-row gap-4">
          <button 
            onClick={() => setStage("category")}
            className="flex-1 bg-jansahay-red hover:bg-red-700 text-white font-bold text-xl py-6 rounded-2xl transition-transform active:scale-95 shadow-md"
          >
            YES
          </button>
          <Link 
            href="/dashboard"
            className="flex-1 bg-white hover:bg-gray-50 border-2 border-border text-jansahay-navy font-bold text-xl py-6 rounded-2xl transition-colors text-center shadow-sm"
          >
            NO
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-jansahay-text-secondary text-center">
          If you are in a life-threatening situation, please call 112 directly.
        </p>
      </div>
    );
  }

  if (stage === "category") {
    return (
      <div className="max-w-2xl mx-auto mt-8 animate-in slide-in-from-right-4 duration-300">
        <h2 className="text-2xl md:text-3xl font-bold text-jansahay-navy text-center mb-8">
          What is happening?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setCategory(c.label);
                setStage("guidance");
              }}
              className="bg-white border-2 border-border hover:border-jansahay-red/50 hover:bg-jansahay-red/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 transition-colors group"
            >
              <c.icon className="w-8 h-8 text-jansahay-text-secondary group-hover:text-jansahay-red transition-colors" />
              <span className="font-semibold text-jansahay-navy">{c.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (stage === "guidance") {
    return (
      <div className="max-w-2xl mx-auto mt-8 animate-in slide-in-from-bottom-4 duration-300">
        <div className="bg-white border-2 border-jansahay-red/20 rounded-3xl overflow-hidden shadow-lg">
          <div className="bg-jansahay-red text-white p-6 md:p-8 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Emergency Action Plan</h2>
            <h3 className="text-3xl font-bold">{category} Emergency</h3>
          </div>
          
          <div className="p-6 md:p-8 space-y-6">
            <div className="bg-jansahay-red/5 rounded-2xl p-6 border border-jansahay-red/10">
              <h4 className="font-bold text-jansahay-red text-lg mb-2">1. Call for Help</h4>
              <p className="text-jansahay-text font-medium mb-4">Contact the national emergency number immediately.</p>
              <button className="w-full bg-jansahay-red hover:bg-red-700 text-white font-bold text-xl py-4 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                <Phone className="w-6 h-6" />
                Call 112 Now
              </button>
            </div>
            
            <div className="pl-4 border-l-4 border-border space-y-4 py-2">
              <div>
                <h4 className="font-bold text-jansahay-navy">2. Secure yourself</h4>
                <p className="text-jansahay-text-secondary">Move to a safe location if possible. Do not put yourself at further risk.</p>
              </div>
              <div>
                <h4 className="font-bold text-jansahay-navy">3. Wait for assistance</h4>
                <p className="text-jansahay-text-secondary">Keep your phone line open and follow any instructions given by the dispatcher.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
