"use client";

import { ArrowLeft, Type, Volume2, MonitorPlay, Contrast } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AccessibilityPage() {
  const [textSize, setTextSize] = useState("Normal");
  const [voiceGuidance, setVoiceGuidance] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <header className="border-b border-border pb-6">
        <Link href="/profile" className="inline-flex items-center gap-2 text-jansahay-text-secondary hover:text-jansahay-navy text-sm font-medium mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Profile
        </Link>
        <h1 className="text-3xl font-bold text-jansahay-navy tracking-tight mb-2">Accessibility</h1>
        <p className="text-jansahay-text-secondary">Customize JANSAHAY to work best for you.</p>
      </header>

      <div className="space-y-6">
        {/* Text Size */}
        <section className="bg-white rounded-3xl border border-border p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-jansahay-bg rounded-full flex items-center justify-center text-jansahay-navy">
              <Type className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-jansahay-navy">Text Size</h2>
          </div>
          <div className="flex gap-4">
            {["Normal", "Large", "Extra Large"].map(size => (
              <button
                key={size}
                onClick={() => setTextSize(size)}
                className={cn(
                  "flex-1 py-4 px-2 rounded-xl font-semibold border-2 transition-all",
                  textSize === size ? "border-jansahay-blue bg-jansahay-blue/5 text-jansahay-blue" : "border-border bg-white hover:border-jansahay-blue/30 text-jansahay-text-secondary"
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </section>

        {/* Voice & Display Toggles */}
        <section className="bg-white rounded-3xl border border-border p-6 md:p-8 shadow-sm space-y-6">
          <ToggleSetting 
            icon={Volume2} 
            title="Voice Guidance" 
            desc="JANSAHAY will read out action steps and important information."
            state={voiceGuidance}
            onChange={setVoiceGuidance}
          />
          <div className="h-px bg-border/50"></div>
          <ToggleSetting 
            icon={MonitorPlay} 
            title="Reduced Motion" 
            desc="Minimize animations and transitions."
            state={reducedMotion}
            onChange={setReducedMotion}
          />
          <div className="h-px bg-border/50"></div>
          <ToggleSetting 
            icon={Contrast} 
            title="High Contrast" 
            desc="Increase contrast for easier reading."
            state={highContrast}
            onChange={setHighContrast}
          />
        </section>
      </div>
    </div>
  );
}

function ToggleSetting({ icon: Icon, title, desc, state, onChange }: any) {
  return (
    <div className="flex items-start justify-between gap-4 cursor-pointer group" onClick={() => onChange(!state)}>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-jansahay-bg rounded-full flex items-center justify-center text-jansahay-navy shrink-0 group-hover:bg-jansahay-blue/10 transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-jansahay-navy mb-1">{title}</h3>
          <p className="text-sm text-jansahay-text-secondary leading-relaxed max-w-[250px]">{desc}</p>
        </div>
      </div>
      <div className={cn(
        "w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out shrink-0",
        state ? "bg-jansahay-green" : "bg-border"
      )}>
        <div className={cn(
          "w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out",
          state ? "translate-x-6" : "translate-x-0"
        )} />
      </div>
    </div>
  );
}
