"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AIState } from "@/types/ai";
import { MOCK_SCENARIOS } from "@/lib/mock-data/ai-engine";
import { AIStateIndicator } from "@/components/ai/AIStateIndicator";
import { UnderstandingCard } from "@/components/ai/UnderstandingCard";
import { ClarificationCard } from "@/components/ai/ClarificationCard";
import { ActionCard } from "@/components/journey/ActionCard";
import { GuidanceJourney } from "@/components/journey/GuidanceJourney";
import { Mic, Paperclip, ArrowRight, Loader2 } from "lucide-react";
import { useSaarthi } from "@/components/saarthi/SaarthiProvider";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function AskJANSAHAYContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  
  const [query, setQuery] = useState(initialQuery);
  const [state, setState] = useState<AIState>(initialQuery ? "PROCESSING" : "IDLE");
  const [scenarioKey, setScenarioKey] = useState<"scholarship" | "cyber" | null>(null);
  
  const { setState: setSaarthiState, say, guideToElement } = useSaarthi();
  const { t } = useLanguage();

  const [claudeResponse, setClaudeResponse] = useState<string | null>(null);

  // Mock Fallback Flow
  const startMockFlow = () => {
    setSaarthiState("listening");
    say(t('saarthi.listening'));
    
    setTimeout(() => {
      setSaarthiState("thinking");
      say(t('saarthi.thinking'));
    }, 1500);

    setTimeout(() => {
      setSaarthiState("confused");
      say(t('saarthi.confused'));
      setScenarioKey("scholarship");
      setState("CLARIFICATION");
    }, 4000);
  };

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setState("PROCESSING");
    setSaarthiState("thinking");
    say(t('saarthi.thinking'));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: query, language: t('hero.title') ? 'local' : 'en' }) // Basic lang hint
      });
      
      if (res.status === 501) {
        startMockFlow();
        return;
      }
      
      if (!res.ok) throw new Error("API Error");
      
      const data = await res.json();
      setClaudeResponse(data.text);
      setState("READY");
      setSaarthiState("happy");
      say(t('saarthi.success'));
      
    } catch (err) {
      console.error(err);
      startMockFlow();
    }
  };

  const handleClarificationAnswer = () => {
    setState("RESEARCHING");
  };

  const currentScenario = scenarioKey ? MOCK_SCENARIOS[scenarioKey] : null;

  // Phase 1: IDLE
  if (state === "IDLE") {
    return (
      <div className="max-w-3xl mx-auto mt-4 md:mt-8 animate-in fade-in duration-500">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-jansahay-navy mb-3 tracking-tight">
            Let's figure this out together.
          </h1>
          <p className="text-jansahay-text-secondary">
            You can explain your problem in your own words.
          </p>
        </div>

        <form onSubmit={handleInitialSubmit} className="bg-white rounded-3xl shadow-sm border border-jansahay-blue/20 p-3 mb-10 focus-within:ring-2 focus-within:ring-jansahay-blue/50 focus-within:border-jansahay-blue transition-all">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tell us what's happening..."
            className="w-full bg-transparent px-4 py-4 text-lg md:text-xl outline-none placeholder:text-jansahay-text-secondary/60 text-jansahay-text resize-none min-h-[120px]"
            autoFocus
          />
          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <div className="flex gap-2">
              <button type="button" className="p-3 text-jansahay-text-secondary hover:text-jansahay-blue hover:bg-jansahay-blue/5 rounded-full transition-colors flex items-center gap-2">
                <Mic className="w-5 h-5" />
                <span className="font-medium">Speak</span>
              </button>
              <button type="button" className="p-3 text-jansahay-text-secondary hover:text-jansahay-blue hover:bg-jansahay-blue/5 rounded-full transition-colors flex items-center gap-2">
                <Paperclip className="w-5 h-5" />
                <span className="font-medium">Upload</span>
              </button>
            </div>
            
            <button type="submit" disabled={!query.trim()} className="bg-jansahay-navy hover:bg-jansahay-navy/90 text-white py-3 px-6 rounded-xl font-medium transition-colors disabled:opacity-50 flex items-center gap-2">
              <span>Send</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Phase 2: Processing states
  if (state !== "READY" && state !== "CLARIFICATION") {
    return <AIStateIndicator state={state} />;
  }

  // Phase 3 & 4: Understanding, Clarification, Action Plan
  if (state === "READY" && claudeResponse) {
    return (
      <div className="max-w-4xl mx-auto mt-4 md:mt-8 animate-in fade-in duration-500">
        <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
          <h2 className="text-2xl font-bold text-jansahay-navy mb-6">AI Response</h2>
          <div className="prose prose-lg max-w-none prose-blue">
            {claudeResponse.split('\n').map((line, i) => (
              <p key={i} className="mb-4 text-jansahay-text">{line}</p>
            ))}
          </div>
          <button 
            onClick={() => { setQuery(""); setState("IDLE"); setClaudeResponse(null); }}
            className="mt-8 bg-jansahay-bg text-jansahay-navy font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Ask another question
          </button>
        </div>
      </div>
    );
  }

  if ((state === "READY" || state === "CLARIFICATION") && currentScenario) {
    return <ScenarioFlow 
      scenario={currentScenario} 
      onRestart={() => { setQuery(""); setState("IDLE"); setScenarioKey(null); }}
      onAnswer={() => {
        setState("RESEARCHING");
        setSaarthiState("happy");
        say(t('saarthi.success'));
        setTimeout(() => {
          setState("READY");
          guideToElement("#action-plan-start", t('saarthi.guiding'));
        }, 2000);
      }}
    />;
  }

  return null;
}

// Sub-component to manage the flow of a single scenario
function ScenarioFlow({ scenario, onRestart, onAnswer }: { scenario: any, onRestart: () => void, onAnswer?: () => void }) {
  const [flowState, setFlowState] = useState<"understanding" | "clarification" | "plan">(
    scenario.understanding ? "understanding" : (scenario.clarification ? "clarification" : "plan")
  );

  if (flowState === "understanding") {
    return (
      <UnderstandingCard 
        text={scenario.understanding.text} 
        onConfirm={() => {
          if (scenario.clarification) setFlowState("clarification");
          else setFlowState("plan");
        }} 
        onReject={onRestart} 
      />
    );
  }

  if (flowState === "clarification" && scenario.clarification) {
    return (
      <ClarificationCard 
        question={scenario.clarification} 
        onAnswer={() => {
          setFlowState("plan");
          if (onAnswer) onAnswer();
        }} 
      />
    );
  }

  if (flowState === "plan") {
    const journey = {
      id: scenario.plan.id,
      title: scenario.plan.title,
      progress: 25, 
      totalSteps: scenario.plan.steps.length,
      completedSteps: scenario.plan.steps.filter((s: any) => s.status === "completed").length,
      lastUpdated: "Just now",
      steps: scenario.plan.steps
    };

    const currentStepIndex = journey.steps.findIndex((s: any) => s.status === "current");
    const currentStep = journey.steps[currentStepIndex];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 animate-in fade-in duration-500 max-w-6xl mx-auto mt-4">
        <div className="lg:col-span-1 order-2 lg:order-1 hidden lg:block">
          <div className="sticky top-24">
            <GuidanceJourney journey={journey} />
            <div className="mt-6 text-center">
              <button className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
                Save this guidance
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 order-1 lg:order-2">
          {/* Action Plan Summary Card */}
          <div className="bg-jansahay-blue/5 border border-jansahay-blue/20 rounded-2xl p-6 mb-8 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-jansahay-blue/20 flex items-center justify-center shrink-0">
              <span className="text-xl font-bold text-jansahay-blue">i</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-jansahay-navy mb-1">{scenario.plan.summary}</h3>
              {scenario.plan.urgency === "high" && (
                <span className="inline-block mt-2 text-xs font-bold bg-jansahay-red text-white px-2 py-1 rounded-md uppercase tracking-wider">
                  High Urgency
                </span>
              )}
            </div>
          </div>

          {currentStep && (
            <div id="action-plan-start">
              <ActionCard 
                step={currentStep} 
                stepNumber={currentStepIndex + 1} 
                totalSteps={journey.totalSteps} 
              />
            </div>
          )}
          
          <div className="mt-8 lg:hidden">
             <GuidanceJourney journey={journey} />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default function AskJANSAHAYPage() {
  return (
    <Suspense fallback={<div className="flex justify-center p-20"><Loader2 className="w-8 h-8 animate-spin text-jansahay-blue" /></div>}>
      <AskJANSAHAYContent />
    </Suspense>
  );
}
